---
id: deploy-production-environment
title: Deploy Production-Ready OpenDesk
tags: [opendesk, cce, production, high-availability, otc]
---

import Mermaid from '@theme/Mermaid';

# Deploy Production-Ready OpenDesk

This guide details how to deploy a scalable, high-availability (HA) instance of [openDesk](https://opendesk.eu/) on Open Telekom Cloud (OTC).

:::tip GitHub Repository
All configuration files, Helmfiles, and patch files referenced in this guide are available in the [OpenDesk Blueprints Repository](https://github.com/opentelekomcloud-blueprints/opendesk) under `helmfile/environments/prod`.
:::

Unlike the [test environment](./deploy-opendesk-on-cce), this production setup externalizes some services — databases, caches (except memcache), and object storage — onto **OTC Managed Services** (RDS, DCS, OBS) and uses **SFS Turbo** for shared filesystem access.



## Architecture Overview

In production, the architecture shifts from a "bundled" model (everything in-cluster) to a "distributed" model where database services are externalized to OTC managed offerings.

<Mermaid
  value={`
graph TB
    subgraph "External Access"
        User[Users]
        ELB[OTC Elastic Load Balancer]
        Relay[SMTP Relay]
        TURN[TURN Server]
    end

    subgraph "Compute Layer (CCE)"
        Ingress[Ingress NGINX]

        subgraph "Stateless Workloads"
            Keycloak
            Nextcloud
            OpenProject
            Matrix/Element
            OX_App_Suite
            Jitsi
            XWiki
            Notes
            Collabora
        end
    end

    subgraph "Managed Services"
        RDS_PG[(RDS PostgreSQL 15 HA)]
        RDS_MY[(RDS MySQL 8.0 HA)]
        DCS_RED[(DCS Redis 7 HA)]
        OBS[OBS Object Storage]
        SFS["SFS Turbo (RWX)"]
    end

    User -->|HTTPS| ELB
    ELB --> Ingress
    Ingress --> Keycloak
    Ingress --> Nextcloud

    Keycloak --> RDS_PG
    Nextcloud --> RDS_PG
    Nextcloud --> OBS
    Nextcloud --> DCS_RED
    Nextcloud -->|RWX| SFS

    OX_App_Suite --> RDS_MY
    OX_App_Suite --> DCS_RED
    OX_App_Suite --> OBS
    OX_App_Suite -->|SMTP| Relay

    Jitsi -->|UDP/TCP| TURN
`}
/>

## Prerequisites

### Tools

- **kubectl** — configured to access your CCE cluster
- **Helm** ≥ 3.17.3
- **Helmfile** ≥ 1.0.0
- **helm-diff** plugin ≥ 3.11.0
- **yq** ≥ 4.x — required by the bootstrap script (`snap install yq` or see [yq install docs](https://github.com/mikefarah/yq#install))

### Cluster Dependencies

The same cluster-level prerequisites as the [Evaluation Guide](./deploy-opendesk-on-cce#cluster-dependencies) apply here:

1. **Ingress NGINX Controller** (≥ 1.11.5) with the critical `configMap` settings.
2. **cert-manager** with a `ClusterIssuer` for DNS-01 wildcard certificates.
3. **Default Storage Class** set to `csi-disk-topology`.
4. **Prometheus Stack** is required for monitoring.

### OTC Managed Services (Pre-Provisioned)

You **must** provision all of the following OTC resources **before** running any deployment steps. The Helm charts cannot create these for you.

| Service | OTC Offering | Spec |
|---------|-------------|------|
| **PostgreSQL** | RDS for PostgreSQL | Version **15.x**, HA (Primary+Standby), ≥ 4 vCPU / 8 GB RAM |
| **MySQL** | RDS for MySQL | Version **8.0**, HA (Primary+Standby), ≥ 2 vCPU / 4 GB RAM |
| **Redis** | DCS for Redis | Version **7.x**, HA (Master+Replica), with AUTH enabled |
| **Object Storage** | OBS | 7 private buckets (see [Provision OBS Buckets](#provision-obs-buckets)) |
| **Shared Filesystem** | SFS Turbo | ≥ 500 GB, Standard or Performance type |
| **CCE Cluster** | CCE | Minimum 3 worker nodes across different AZs |

:::info Memcached Runs In-Cluster
**Memcached is not externalized.** OTC does not offer a managed Memcached service, so the bundled in-cluster Memcached deployment is kept as-is. It is used internally by OX App Suite and is not a critical data store — no persistent state is lost if the pod restarts.
:::

:::danger Network Accessibility
All managed services must be **in the same VPC** as your CCE cluster (or peered). Use **private IP addresses** for RDS and the **DCS hostname** for Redis. Never expose database ports to the public internet.
:::

:::warning Configure Security Groups
You must update the **Security Groups** of your RDS PostgreSQL and RDS MySQL instances to allow inbound traffic on ports **5432** and **3306** respectively from the CCE cluster's VPC CIDR (or node subnet).

See [Configure Security Groups for RDS Instances](/docs/best-practices/databases/relational-database-service/configure-sg-for-rds-instances) for step-by-step instructions.
:::

## Provision OBS Buckets

OBS buckets **cannot** be created by in-cluster Jobs. You must create them via the OTC Console or Terraform before deployment.

### Required Buckets

Create the following buckets in your tenant. The bucket names must be the same as configured in `objectstores.yaml.gotmpl`:

| Bucket Name | Used By | Versioning | Notes |
|-------------|---------|------------|-------|
| `opendesk-migrations` | Data migrations | Suspended | — |
| `opendesk-nextcloud` | Nextcloud (file storage) | Suspended | — |
| `opendesk-notes` | Notes (document storage) | **Enabled** | Required for conflict resolution |
| `opendesk-openproject` | OpenProject (attachments) | Suspended | — |
| `opendesk-openxchange` | OX App Suite (filestore) | Suspended | — |
| `opendesk-ums` | Nubus / Portal | Suspended | Requires public read policy on `portal-assets/` |
| `opendesk-dovecot` | Dovecot (mail storage) | Suspended | — |

:::info Notes Bucket Versioning
Enable versioning for the `opendesk-notes` bucket. This supports document conflict resolution and document history in the Notes application.
:::

:::important Anonymous Access for UMS Portal Assets
The `opendesk-ums` bucket requires a **public read policy** on the `portal-assets/` prefix so the portal frontend can load branding assets without authentication.

In the OTC Console: **Bucket → Permissions → Bucket Policies → Create**, and apply:

```json
{
    "Statement": [
        {
            "Sid": "PublicReadPortalAssets",
            "Effect": "Allow",
            "Principal": {
                "ID": [
                    "*"
                ]
            },
            "Action": [
                "GetObject"
            ],
            "Resource": [
                "opendesk-ums/portal-assets/*"
            ]
        }
    ]
}
```
:::

### IAM Credentials for OBS

To access OBS we need to uses **AK/SK** pairs. You have two options:

| Option | Approach | Recommendation |
|--------|----------|----------------|
| **Shared Credentials** | One IAM user, one AK/SK pair for all buckets | Simpler setup |
| **Per-Bucket Credentials** | One IAM user per bucket, each with scoped permissions | More secure |

:::danger Use Per-Bucket Credentials (Option B)
**Do not use Shared Credentials in production.** A single AK/SK pair with access to all buckets means that if the credentials are leaked or compromised, an attacker gains unrestricted access to **all** OpenDesk data across every service (Nextcloud, OX App Suite, OpenProject, UMS, etc.) at once.

Always go with **Per-Bucket Credentials** — one IAM user per bucket with scoped permissions. This limits the blast radius of a credential compromise to a single service's data only.
:::

#### Option A: Shared Credentials (Simpler)

1. Go to **IAM → Users → Create User**
2. Set **Access Type** to **Programmatic access**
3. Create a **User Group** and authorize it with a policy granting access to all 7 `opendesk-*` buckets
4. Add the user to the group
5. Create an **AK/SK pair** for the user and download it.

#### Option B: Per-Bucket IAM Users (Recommended)

Create one IAM user per service:

|  Bucket | Env Vars (AK/SK) |
|---|---|
| `opendesk-dovecot` | `OBS_AK_DOVECOT`, `OBS_SK_DOVECOT` |
| `opendesk-migrations` | `OBS_AK_MIGRATIONS`, `OBS_SK_MIGRATIONS` |
| `opendesk-nextcloud` | `OBS_AK_NEXTCLOUD`, `OBS_SK_NEXTCLOUD` |
| `opendesk-notes` | `OBS_AK_NOTES`, `OBS_SK_NOTES` |
| `opendesk-ums` | `OBS_AK_UMS`, `OBS_SK_UMS` |
| `opendesk-openproject` | `OBS_AK_OPENPROJECT`, `OBS_SK_OPENPROJECT` |
| `opendesk-openxchange` | `OBS_AK_OPENXCHANGE`, `OBS_SK_OPENXCHANGE` |

For each bucket, follow these steps:

1. **Create a custom policy** (IAM → Policies → Create Custom Policy) with the following JSON (replace `<bucket-name>`):

```json
{
    "Version": "1.1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
              // Give ReadWrite and ListOnly permitions
            ],
            "Resource": [
                "OBS:*:*:bucket:<bucket-name>",
                "OBS:*:*:object:*"
            ]
        }
    ]
}
```
2. **Create an IAM User** (IAM → Users → Create User) with **Programmatic access**.
3. **Create a User Group** IAM → User Groups → Create User Group.
4. **Add the IAM user** to the group.
5. **Authorize the group** with the custom policy created in step 1 (IAM → User Groups → Authorize).
6. **Create an AK/SK pair** for the user (IAM → Users → select user → Security Settings → Create Access Key) and download it.

:::tip Verify OBS Connectivity

After configuring credentials, verify bucket access using the [MinIO Client (`mc`)](https://min.io/docs/minio/linux/reference/minio-mc.html):

```bash
mc alias set obs \
  https://obs.eu-de.otc.t-systems.com \
  <AK> <SK> \
  --path on

# Verify all buckets are visible
mc ls obs/<bucket-name> | grep opendesk
```
:::
---

## Configure Environment Variables

Clone the blueprints repository and navigate to the production environment directory:

```bash
git clone https://github.com/opentelekomcloud-blueprints/opendesk.git
cd opendesk/helmfile/environments/prod
```

All credentials — database passwords, Redis password, and OBS access keys — flow into the deployment through a **single environment file** that is sourced before running both the bootstrap script and `helmfile apply`.

### Create the env file

```bash
cp files/bootstrap-external.env.example files/bootstrap-external.env
```

### Fill in `bootstrap-external.env`

Open `files/bootstrap-external.env` and fill in every value:

```bash
# Kubernetes namespace where openDesk is deployed
NAMESPACE="opendesk"

# Path to upstream images.yaml.gotmpl (used to resolve container image versions)
IMAGES_TEMPLATE="../../default/images.yaml.gotmpl"

# ── PostgreSQL (OTC RDS for PostgreSQL 15.x) ──────────────────────────────────
PG_HOST="<RDS_POSTGRESQL_PRIVATE_IP>"   # e.g. "192.168.0.100"
PG_PORT="5432"
PG_ADMIN_USER="root"                    # RDS admin username
PG_ADMIN_PASSWORD="<RDS_ADMIN_PASSWORD>"

# ── MariaDB/MySQL (OTC RDS for MySQL 8.0) ─────────────────────────────────────
MARIA_HOST="<RDS_MYSQL_PRIVATE_IP>"     # e.g. "192.168.0.101"
MARIA_PORT="3306"
MARIA_ROOT_PASSWORD="<RDS_MYSQL_ROOT_PASSWORD>"

# ── Per-service PostgreSQL passwords ──────────────────────────────────────────
# Use strong, unique passwords for each service.
DB_KEYCLOAK_PASSWORD="<generate-strong-password>"
DB_KEYCLOAK_EXT_PASSWORD="<generate-strong-password>"
DB_SYNAPSE_PASSWORD="<generate-strong-password>"
DB_NEXTCLOUD_PASSWORD="<generate-strong-password>"
DB_NOTES_PASSWORD="<generate-strong-password>"
DB_OPENPROJECT_PASSWORD="<generate-strong-password>"
DB_XWIKI_PASSWORD="<generate-strong-password>"
DB_GUARDIAN_PASSWORD="<generate-strong-password>"
DB_NOTIFICATIONS_PASSWORD="<generate-strong-password>"
DB_SELFSERVICE_PASSWORD="<generate-strong-password>"
DB_AUTHSESSION_PASSWORD="<generate-strong-password>"

# ── MariaDB service password ───────────────────────────────────────────────────
DB_OX_PASSWORD="<generate-strong-password>"

# ── Redis (OTC DCS for Redis) ──────────────────────────────────────────────────
CACHE_REDIS_PASSWORD="<DCS_REDIS_AUTH_PASSWORD>"

# ── OBS Object Storage (AK/SK per service or shared) ──────────────────────────
OBS_AK_DOVECOT="<AK_DOVECOT>"
OBS_SK_DOVECOT="<SK_DOVECOT>"
OBS_AK_MIGRATIONS="<AK_MIGRATIONS>"
OBS_SK_MIGRATIONS="<SK_MIGRATIONS>"
OBS_AK_NEXTCLOUD="<AK_NEXTCLOUD>"
OBS_SK_NEXTCLOUD="<SK_NEXTCLOUD>"
OBS_AK_NOTES="<AK_NOTES>"
OBS_SK_NOTES="<SK_NOTES>"
OBS_AK_UMS="<AK_UMS>"
OBS_SK_UMS="<SK_UMS>"
OBS_AK_OPENPROJECT="<AK_OPENPROJECT>"
OBS_SK_OPENPROJECT="<SK_OPENPROJECT>"
OBS_AK_OPENXCHANGE="<AK_OPENXCHANGE>"
OBS_SK_OPENXCHANGE="<SK_OPENXCHANGE>"
```

:::tip Generate Strong Passwords
Use `openssl rand -hex 16` to generate a strong 32-character hex password for each service.

```bash
for svc in KEYCLOAK KEYCLOAK_EXT SYNAPSE NEXTCLOUD NOTES OPENPROJECT XWIKI GUARDIAN NOTIFICATIONS SELFSERVICE AUTHSESSION OX; do
  echo "DB_${svc}_PASSWORD=$(openssl rand -hex 16)"
done
```
:::

:::danger Keep this file secure
`bootstrap-external.env` contains all your production credentials. **Never commit it to version control.**
:::

### Source the env file

This is required **before every** `helmfile` command and before running the bootstrap script.

```bash
source files/bootstrap-external.env
```

## Expose External Services Inside the Cluster

The Helm charts expect database and cache services to be available via **in-cluster DNS names** (`postgresql`, `mariadb`, `redis-headless`). You must create Kubernetes Service and Endpoints resources that map these names to your external OTC managed service IPs.

Apply `files/external-services.yaml` after filling in your actual RDS IPs and DCS Redis hostname:

```bash
# Edit the file first, then apply:
kubectl apply -f files/external-services.yaml
```

:::info Why Headless Services?
A headless Service (`clusterIP: None`) with an explicit Endpoints object creates a stable DNS A-record inside the cluster that resolves directly to the external IP. This is how openDesk components reach your RDS instance using the name `postgresql`.

For Redis, an `ExternalName` Service is used instead, which creates a DNS CNAME pointing to the DCS hostname. No Endpoints object is needed because DCS Redis is accessed via DNS hostname, not a raw IP.
:::

The full content of `external-services.yaml` after editing should look like:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: postgresql
  namespace: opendesk
spec:
  clusterIP: None
  ports:
    - name: postgresql
      port: 5432
      targetPort: 5432
      protocol: TCP
---
apiVersion: v1
kind: Endpoints
metadata:
  name: postgresql
  namespace: opendesk
subsets:
  - addresses:
      - ip: "192.168.0.100"   # <-- your RDS PostgreSQL private IP
    ports:
      - name: postgresql
        port: 5432
---
apiVersion: v1
kind: Service
metadata:
  name: mariadb
  namespace: opendesk
spec:
  clusterIP: None
  ports:
    - name: mysql
      port: 3306
      targetPort: 3306
      protocol: TCP
---
apiVersion: v1
kind: Endpoints
metadata:
  name: mariadb
  namespace: opendesk
subsets:
  - addresses:
      - ip: "192.168.0.101"   # <-- your RDS MySQL private IP
    ports:
      - name: mysql
        port: 3306
---
apiVersion: v1
kind: Service
metadata:
  name: redis-headless
  namespace: opendesk
spec:
  type: ExternalName
  externalName: "redis-<uuid>.eu-de.dcs.otc.t-systems.com"  # <-- your DCS hostname
  ports:
    - name: redis
      port: 6379
      protocol: TCP
```

---

## Bootstrap External Databases

When using external managed databases instead of the bundled in-cluster PostgreSQL and MariaDB, you must **initialize users and databases before deployment**.

The bootstrap creates:
- **11 PostgreSQL users** and **11 databases** — one per openDesk application
- **1 MariaDB user** (`openxchange_user`) and **1 database** (`openxchange_dummy`)

:::info Why Kubernetes Jobs?
The bootstrap Jobs run *inside* the cluster network, so they can reach the private RDS endpoints without requiring a bastion host or VPN from your workstation.
:::

You have two options:

### Option A: Bootstrap Script (Recommended)

**Step 1**: Ensure your env file is sourced and complete:

```bash
source files/bootstrap-external.env
```

**Step 2**: Run the script:

```bash
./files/bootstrap-external.sh
```

The script will:
1. Read image versions from `helmfile/environments/default/images.yaml.gotmpl`
2. Generate Kubernetes Secret, and Job manifests
3. Apply them to your cluster via `kubectl`
4. Wait for completion and stream logs

:::tip Dry Run First
Preview all generated manifests without applying anything:
```bash
DRY_RUN=true ./files/bootstrap-external.sh
```
Review the output carefully before running without `DRY_RUN`.
:::

### Option B: Static Manifests (Declarative)

If you prefer a declarative approach, use the pre-generated static manifest file. You must replace all `<PLACEHOLDER>` values manually before applying:

```bash
# Edit the file — replace ALL placeholders:
#   <PG_HOST>              → your RDS PostgreSQL private IP
#   <MARIA_HOST>           → your RDS MySQL private IP
#   <PG_ADMIN_PASSWORD>    → RDS admin password
#   <MARIA_ROOT_PASSWORD>  → RDS MySQL root password
#   <DB_*_PASSWORD>        → per-service passwords (must match bootstrap-external.env)
#   <PG_IMAGE>             → check helmfile/environments/default/images.yaml.gotmpl
#   <MARIA_IMAGE>          → check helmfile/environments/default/images.yaml.gotmpl

kubectl apply -f files/bootstrap-external-manifests.yaml
```

Watch the jobs:

```bash
kubectl logs -f job/postgresql-external-bootstrap -n opendesk
kubectl logs -f job/mariadb-external-bootstrap -n opendesk
```

---

## Verify Database Bootstrap

After the bootstrap jobs complete, verify the database state using the included verification script:

```bash
source files/bootstrap-external.env
./files/verify-external.sh
```

The script spins up short-lived Jobs inside the cluster that connect to PostgreSQL and MariaDB and check that all expected users and databases exist. Successful output looks like:

```
── PostgreSQL users ─────────────────────────────────────────────────
  ✓ user: keycloak_user
  ✓ user: keycloak_extensions_user
  ✓ user: notes_user
  ...
── PostgreSQL databases ──────────────────────────────────────────────
  ✓ db:   keycloak
  ✓ db:   matrix
  ...
── MariaDB ───────────────────────────────────────────────────────────
  ✓ user: openxchange_user
  ✓ db:   openxchange_dummy
```

:::caution All checks must pass
Do **not** proceed to deployment if any user or database is reported as `MISSING`. Re-run the bootstrap script or apply the missing resources manually.
:::

---

## Configure DNS & Email Authentication

Production requires a complete set of DNS records.

**Base Domain**: `opendesk.example.com`
**ELB IP**: `1.2.3.4` (your ELB public IP)

| Purpose | Hostname | Type | Value | Notes |
|---------|----------|------|-------|-------|
| **Portal** | `opendesk.example.com` | A | `1.2.3.4` | Base domain |
| **Portal Components** | `*.opendesk.example.com` | A | `1.2.3.4` | Wildcard for all subdomains |
| **Mail (MX)** | `opendesk.example.com` | MX | `10 opendesk.example.com` | Inbound mail |
| **SPF** | `opendesk.example.com` | TXT | `v=spf1 ip4:1.2.3.4 ~all` | Authorize sending IP |
| **DKIM** | `default._domainkey.opendesk.example.com` | TXT | `v=DKIM1; k=ed25519; p=<PUBLIC_KEY>` | [See below](#generate-dkim-keys) |
| **DMARC** | `_dmarc.opendesk.example.com` | TXT | `v=DMARC1; p=none; rua=mailto:dmarc@opendesk.example.com` | Start in monitor mode |

### Generate DKIM Keys

openDesk uses DKIM for email signing via the `dkimpy` component. In this step you will:

- **Create an Ed25519 DKIM key pair** on your workstation.
- **Extract the private key bytes (Base64)** to store in a Kubernetes Secret so the mail-sending component can sign messages.
- **Extract the public key bytes (Base64)** to publish in DNS as the `p=` value of the DKIM TXT record.

Run the following commands from a secure machine and keep the `dkim_ed25519.pem` file private:

```bash
# 1. Generate the key pair
openssl genpkey -algorithm ed25519 -out dkim_ed25519.pem
# 2. Extract the public key bytes (Base64) — use in DNS "p=..." field
openssl pkey -in dkim_ed25519.pem -pubout -outform DER | tail -c 32 | base64
```

### Create the DKIM Kubernetes Secret

The DKIM private key is referenced in `values.yaml.gotmpl` as a Kubernetes Secret named `dkim-private-key`. We create this secret form the file:

```bash
kubectl create secret generic dkim-private-key \
  -n <NAMESPACE> \
  --from-literal=dkim.key="$(openssl pkey -in dkim_ed25519.pem -outform DER | tail -c 32 | base64)"
```

---

## Provision SFS Turbo Storage Class

Production openDesk requires a `ReadWriteMany` (RWX) storage class for some openDesk components. SFS Turbo provides this.

**Create an SFS Turbo instance** in the OTC Console (same VPC as the CCE cluster), then create a StorageClass named `csi-sfsturbo-opendesk`:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: csi-sfsturbo-opendesk
provisioner: everest-csi-provisioner
reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: Immediate
mountOptions:
  - vers=3
  - timeo=600
  - nolock
  - hard
parameters:
  csi.storage.k8s.io/csi-driver-name: sfsturbo.csi.everest.io
  csi.storage.k8s.io/fstype: nfs
  everest.io/volume-as: subpath                          # enables auto path generation
  everest.io/volume-id: <YOUR_SFS_TURBO_ID>  # your SFS Turbo share ID
  everest.io/share-export-location: "<YOUR_SFS_TURBO_SHARE_ID>:/opendesk" # base dir; PVCs go under this
  everest.io/share-volume-type: STANDARD
  everest.io/archive-on-delete: "true"   # archives data instead of deleting on PVC removal
```

Apply it:

```bash
kubectl apply -f sfsturbo-storageclass.yaml
```

The storage class name `csi-sfsturbo-opendesk` must match the `persistence.storageClassNames.RWX` value in `values.yaml.gotmpl`.

:::info SFS Turbo vs Standard SFS
SFS Turbo (NFS-based) provides much lower latency than standard SFS and is required for Nextcloud multi-replica deployments. Standard SFS is not recommended for production openDesk.
:::

---

## Configure the Helmfile Environment

All production-specific overrides live in `helmfile/environments/prod/`. Each file handles a distinct concern:

| File | Purpose |
|------|---------|
| `values.yaml.gotmpl` | Global settings, apps, ingress, SMTP, cluster config |
| `databases.yaml.gotmpl` | External PostgreSQL / MySQL connection parameters |
| `cache.yaml.gotmpl` | External Redis connection parameters |
| `objectstores.yaml.gotmpl` | OBS bucket endpoints and AK/SK credentials |
| `secrets.yaml.gotmpl` | Per-service passwords (read from env vars) |
| `replicas.yaml.gotmpl` | HA replica counts for each component |

### Configure `values.yaml.gotmpl`

The main settings you must edit:

```yaml
global:
  domain: "opendesk.example.com"   # TODO: your production domain

apps:
  notes:
    enabled: true
  dkimpy:
    enabled: true           # enable DKIM signing
  # Bundled data services are DISABLED — using OTC managed services instead
  postgresql:
    enabled: false
  mariadb:
    enabled: false
  minio:
    enabled: false
  redis:
    enabled: false

cluster:
  networking:
    cidr:
      - "172.16.0.0/16"       # TODO: match your CCE cluster pod CIDR
    ingressGatewayIP: "1.2.3.4"  # TODO: your ELB public IP (for Jitsi ICE)
  container:
    engine: "containerd"
  persistence:
    readWriteMany:
      enabled: true           # required for Nextcloud multi-replica

persistence:
  storageClassNames:
    RWO: "csi-disk-topology"
    RWX: "csi-sfsturbo-opendesk"  # must match your SFS Turbo StorageClass name

certificate:
  issuerRef:
    name: "letsencrypt-prod"  # TODO: your ClusterIssuer name
    kind: "ClusterIssuer"
  wildcard: true

functional:
  portal:
    linkSupport: "https://opendesk.eu/support"  # TODO: your support URL

annotations:
  jitsiJvb:
    serviceExternal:
      kubernetes.io/elb.id: "<YOUR_ELB_ID>"       # TODO: OTC ELB ID
      kubernetes.io/elb.lb-algorithm: ROUND_ROBIN
      kubernetes.io/elb.class: performance
  openxchangePostfix:
    serviceExternal:
      kubernetes.io/elb.id: "<YOUR_ELB_ID>"       # TODO: OTC ELB ID
      kubernetes.io/elb.lb-algorithm: ROUND_ROBIN
      kubernetes.io/elb.class: performance
  openxchangeDovecot:
    serviceExternal:
      kubernetes.io/elb.id: "<YOUR_ELB_ID>"       # TODO: OTC ELB ID
      kubernetes.io/elb.lb-algorithm: ROUND_ROBIN
      kubernetes.io/elb.class: performance
```

### Configure SMTP

:::warning Critical Decision
You must choose between **Option A (External Relay)** or **Option B (Direct Delivery)**. Mixing configurations leads to mail delivery failures.
:::

**Option A: External Relay (Recommended)**

Use an external SMTP relay (e.g., Mailgun, AWS SES, or a corporate SMTP relay) for reliable deliverability:

```yaml
smtp:
  host: "smtp.relay.example.com"
  port: 587
  username: "apikey"
  password: "{{ env \"SMTP_RELAY_PASSWORD\" | default \"\" | quote }}"
  dkim:
    key:
      secret:
        name: "dkim-private-key"
        key: "dkim.key"
    selector: "default"
    useED25519: true
```

**Option B: Direct Delivery (Self-Hosted)**

Send directly from the cluster. **Prerequisites**:
- A dedicated EIP attached to the Postfix pod via `LoadBalancer` service
- A valid **PTR record** (reverse DNS) for that IP — contact OTC Support to set this up
- Port 25 outbound must be unblocked (may require OTC Support approval)

:::caution PTR Record is Mandatory for Direct Delivery
Most major mail providers (Gmail, Outlook) **will reject** or spam-folder all email from IPs without a matching PTR record. This is the #1 cause of email delivery failure in self-hosted setups.
:::

```yaml
smtp:
  dkim:
    key:
      secret:
        name: "dkim-private-key"
        key: "dkim.key"
    selector: "default"
    useED25519: true
  # No relay host → Postfix delivers directly to MX records
```

### Configure TURN Server

For reliable video calls (Jitsi / Element) for users behind corporate firewalls or strict NAT, configure an external TURN server (e.g., [`coturn`](https://github.com/coturn/coturn)):

```yaml
turn:
  enabled: true
  host: "turn.example.com"
  port: 3478
  secret: "{{ env \"TURN_SECRET\" | quote }}"
```

*If you do not have a TURN server, video calls may fail for users on restricted networks.*

### `databases.yaml.gotmpl` — Connection Parameters

This file reads passwords from environment variables. Verify the `host` values match the Kubernetes Service names created in Step 5 (`postgresql` and `mariadb`):

```yaml
databases:
  keycloak:
    type: "postgresql"
    host: "postgresql"    # resolves via the headless Service to RDS
    port: 5432
    username: "keycloak_user"
    password: {{ env "DB_KEYCLOAK_PASSWORD" | default "" | quote }}
  # ... (all 11 PG databases + oxAppSuite MariaDB)
  oxAppSuite:
    type: "mariadb"
    host: "mariadb"       # resolves via the headless Service to RDS MySQL
    port: 3306
    username: "root"      # OX App Suite requires root access
    password: {{ env "MARIA_ROOT_PASSWORD" | default "" | quote }}
```

:::note OX App Suite requires root
The OX App Suite chart requires the MariaDB `root` user to manage its own internal databases during startup. This is an upstream limitation.
:::

### `cache.yaml.gotmpl` — Redis Connection

```yaml
cache:
  intercomService:
    host: "redis-headless"   # resolves via ExternalName Service to DCS hostname
    port: 6379
    username: "default"
    password: {{ env "CACHE_REDIS_PASSWORD" | default "" | quote }}
  nextcloud:
    host: "redis-headless"
    port: 6379
    username: "default"
    password: {{ env "CACHE_REDIS_PASSWORD" | default "" | quote }}
    tls: false  # set true if your DCS instance has TLS enabled
  notes:
    host: "redis-headless"
    port: 6379
    password: {{ env "CACHE_REDIS_PASSWORD" | default "" | quote }}
  oxAppSuite:
    host: "redis-headless"
    port: 6379
    username: "default"
    password: {{ env "CACHE_REDIS_PASSWORD" | default "" | quote }}
```

### `objectstores.yaml.gotmpl` — OBS Buckets

The `username` field contains the **Access Key (AK)** — it is the OBS authentication credential, not a display label. The `secretKey` field contains the **Secret Key (SK)**:

```yaml
objectstores:
  nextcloud:
    bucket: "opendesk-nextcloud"
    endpoint: "obs.eu-de.otc.t-systems.com"
    region: "eu-de"
    username: {{ env "OBS_AK_NEXTCLOUD" | default "" | quote }}  # AK
    secretKey: {{ env "OBS_SK_NEXTCLOUD" | default "" | quote }} # SK
    useSSL: true
    pathStyle: true    # required for OTC OBS
    port: 443
  # ... repeat for all 7 buckets
```

### `secrets.yaml.gotmpl` — Password Mapping

This file maps environment variables to the Helm chart secret structure. It is automatically read by Helmfile — **no manual editing is needed** as long as your env file is correctly sourced:

```yaml
secrets:
  postgresql:
    postgresUser: {{ env "PG_ADMIN_PASSWORD" | default "" | quote }}
    keycloakUser: {{ env "DB_KEYCLOAK_PASSWORD" | default "" | quote }}
    # ... all per-service passwords
  mariadb:
    rootPassword: {{ env "MARIA_ROOT_PASSWORD" | default "" | quote }}
    openxchangeUser: {{ env "DB_OX_PASSWORD" | default "" | quote }}
```

### `replicas.yaml.gotmpl` — HA Replica Counts

The production configuration deploys multiple replicas of each stateless component. Review and adjust based on your cluster capacity:

```yaml
replicas:
  keycloak: 2
  collabora: 3           # scale: ~1 vCPU per 15 concurrent users
  nextcloud: 2           # requires RWX (SFS Turbo)
  openprojectWeb: 2
  openprojectWorker: 2
  element: 2
  synapseWeb: 2
  # Mail services must stay at 1 on Community Edition
  dovecot: 1
  postfix: 1
  freshclam: 1           # NEVER scale above 1
```

:::caution Mail replicas fixed at 1
`dovecot`, `postfix`, and `freshclam` must remain at replica count `1` in the Community Edition. Scaling these is not supported and will cause data corruption or split-brain issues.
:::

---

## Deploy

Ensure your environment is fully sourced and all previous steps are complete:

```bash
# Source credentials
source files/bootstrap-external.env

# Apply the production configuration
helmfile apply -e prod -n opendesk --concurrency 0 --skip-diff-on-install
```

- **`-e prod`**: selects the production environment
- **`-n opendesk`**: deploys into the `opendesk` namespace
- **`--concurrency 0`**: sequential deployment (required — components have strict startup order)
- **`--skip-diff-on-install`**: skips the diff stage for new releases (speeds up initial install)

:::tip Monitor rollout progress
In a separate terminal, watch the pod rollout:
```bash
watch -n5 kubectl get pods -n opendesk
```
The full stack takes approximately 15–20 minutes to become fully ready.
:::

### Post-Deployment: Get Admin Credentials

```bash
kubectl get secret ums-nubus-credentials -n opendesk \
  -o jsonpath='{.data.administrator_password}' | base64 -d
```

Username: `Administrator`

Log in at `https://portal.opendesk.example.com`.

---

## Verification Checklist

After deployment, run through these verification steps:

### 1. Portal Access
```bash
curl -sI https://portal.opendesk.example.com | head -5
# Expect: HTTP/2 200
```

### 2. Database Connectivity
Confirm all pods are `Running` and not restarting:
```bash
kubectl get pods -n opendesk | grep -v Running | grep -v Completed
# Should return nothing (all pods Running or Completed)
```

### 3. Email & DKIM
Send a test email from the portal to a Gmail or Outlook address. Check the received email headers:
```
Authentication-Results: ... dkim=pass header.i=@opendesk.example.com
```

### 4. Video Calls (TURN)
Start a Jitsi call between a user on a corporate VPN and a user on mobile data. If it connects, TURN is correctly configured.

### 5. Object Storage
Upload a file in Nextcloud, then download it. Verify it round-trips correctly through OBS.

### 6. Persistence
To simulate a managed service failover: trigger an RDS HA switch in the OTC Console. Pods should reconnect automatically within 30–60 seconds. Data must remain intact.

---

## Troubleshooting

### Emails Rejected / Sent to Spam

- **Check SPF**: Does the SPF record include the sending IP? Run: `nslookup -type=TXT opendesk.example.com`
- **Check DKIM**: Use an online DKIM validator (e.g., `mail-tester.com`). Confirm the `dkimpy` pod is running.
- **Check PTR (Option B only)**: Run `dig -x <ELB_IP>`. A missing PTR record is the #1 cause of rejection by Gmail/Outlook.
- **Port 25 blocked**: Check Postfix logs: `kubectl logs -n opendesk -l app.kubernetes.io/name=postfix`. If you see connection timeouts, port 25 is blocked by OTC — use an external relay (Option A) or request unblocking.

### Jitsi Video: ICE Failed / Black Screen

- Verify `cluster.networking.ingressGatewayIP` in `values.yaml.gotmpl` matches your ELB public IP.
- Ensure your ELB has a UDP listener on port **10000** for JVB.
- Check TURN server logs if configured.

### Database Connection Errors at Startup

- Verify the `postgresql` and `mariadb` Kubernetes Services/Endpoints are applied correctly: `kubectl get svc,ep -n opendesk`
- Confirm RDS Security Group allows inbound traffic from the CCE node subnet on port 5432 / 3306.
- Rerun `./files/verify-external.sh` to confirm all users and databases exist.

### Nextcloud Stuck / CrashLoop

- If Nextcloud pods crashloop with storage errors, verify the SFS Turbo StorageClass is correctly configured and the PVCs are bound: `kubectl get pvc -n opendesk`
- Check that `readWriteMany.enabled: true` is set in `values.yaml.gotmpl`.

### `helmfile apply` Fails with Empty Passwords

- You likely forgot to source the env file. Run `source files/bootstrap-external.env` and retry.
- Verify with: `echo $DB_KEYCLOAK_PASSWORD` — should not be empty.

### Portal "Link must be string" Error

- **Cause**: `functional.portal.linkSupport` is empty or null.
- **Fix**: Set it to a valid URL string in `values.yaml.gotmpl`.
