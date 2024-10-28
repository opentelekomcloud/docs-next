---
id: cce-keycloak
title: Deploy Keycloak on CCE
tags: [cce, keycloak, security, rds, postgresql, ingress, nginx-ngress, externaldns, dns]
---

# Deploy Keycloak on CCE

In this blueprint, we are going to show the steps to install
Keycloak, in Open Telekom Cloud, on a CCE Cluster.

## Creating a VPC and a Subnet

We are going to need a Virtual Private Cloud (VPC) and at least one
Subnet where we are going to provision both RDS instances and CCE nodes.
For enhanced security granularity, we could split those resources in two
different Subnets.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-ezg.png)

:::warning
RDS and CCE nodes have to be on the same VPC.
:::

## Deploying a PostgreSQL with RDS

Keycloak, as a stateful workload, requires the presence of a persistent
storage in order to maintain its data and configuration during pod
restarts. We could deploy a PostgreSQL database as a CCE workload, but
this would require additional administrative overhead from your side.
The Managed Relational Database Service of Open Telekom Cloud is a
perfect fit for this scenario. A scalable turn-key solution, that fully
integrated with the rest of managed services of the platform without
demanding from the consumer additional administrative effort.

### Creating Security Groups

We are going to need two different Security Groups. One for the RDS
nodes, so it can accept client calls on port `5432` (Inbound Rules),
which they only reside in the same Subnet (in case we went for a single
Subnet solution):

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-fh3.png)

And one Security Group for the client nodes that need to access the
database (Outbound Rules), in our case those would be the CCE nodes
where Keycloak is going to be installed on.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-k2x.png)

### Provisioning a Database

Now as next, we need to provision a PostgreSQL 14 database. Pick the
instance and storage class size that fit your needs:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-k8t.png)

and make sure that you:

- you place the RDS nodes in the same VPC with the CCE nodes
- assign `rds-instances` as the Security Group for the RDS nodes

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-ka7.png)

### Creating a Private DNS Zone

We are provisioning PostgreSQL in order to support the functionality of
Keycloak. For that matter, although Open Telekom Cloud employs this RDS
instance with a floating IP address, it would be better that we connect
the RDS instance with Keycloak via a fully qualified domain name and let
the Open Telekom Cloud's DNS service to manage the resolution of that
endpoints. In the Domain Name Service management panel click *Private
Zone* and create a new one that points to the VPC that CCE and RDS nodes
are placed:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-f5u.png)

and then click *Manage Record Set* to add a new *A Record* to this zone:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-ffb.png)

:::note
The domain name, will be a fictitious domain representing your solution
and not a public one. It can be virtually any domain or subdomain that
conforms to the a FQDN rules.
:::

The floating IP of the RDS instance can be found in the Basic
Information panel of the database:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-fj8.png)

## Provisioning a CCE Cluster

We are going to need a CCE Cluster. In order to provision one, you can
follow the configuration steps of the wizard paying attention to the
following details:

- We are not going to need an HA cluster - of course adjust to your
    needs because this is not something you can change in the future.
- We need to provision the CCE Cluster in the same VPC as the RDS
    nodes.
- If you follow the single Subnet lab instructions make sure you place
    the CCE Nodes in the same Subnet that RDS nodes reside.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-fp6.png)

Add worker nodes to the CCE cluster using the wizard, and wait all nodes
to become operational. Then add to **each** node an additional Security
Group, in particular the `rds-client` that we created earlier in this
lab.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-g7y.png)

:::note
Make your own decision how you're going to access this CCE Cluster
afterwards. You can assign an Elastic IP Address and access it over the
Internet or provision and additional public-facing bastion host and
access it through this machine. **We categorically recommend the
latter**.
:::

## Deploying Keycloak

We are going to deploy Keycloak using simple Kubernetes manifests.
Deploy those YAML manifests in the order described below using the
command on your bastion host (or in any other machine if you chose to go
for an EIP):

```shell
kubectl apply -f <<filename.yaml>>
```

### Deploying Keycloak Secrets

First we are going to need a Namespace in our CCE Cluster, in order to
deploy all the resources required by Keycloak:

```shell
kubectl create namespace keycloak
```

We are going to need two Secrets. One, `postgres-credentials`, that will
contain the credentials to access the PostgreSQL database instance and a
second one, `keycloak-secrets`, that will contain the necessary
credential to access the web console of Keycloak:

```yaml title="credentials.yaml" linenos="" emphasize-lines="9,20"}
apiVersion: v1
kind: Secret
metadata:
  name: postgres-credentials
  namespace: keycloak
type: Opaque
stringData:
  POSTGRES_USER: root
  POSTGRES_PASSWORD: <<POSTGRES_PASSWORD>>
  POSTGRES_DB: postgres
---
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-secrets
  namespace: keycloak
type: Opaque
stringData:
  KEYCLOAK_ADMIN: admin
  KEYCLOAK_ADMIN_PASSWORD: <<KEYCLOAK_ADMIN_PASSWORD>>
```

:::note
`POSTGRES_PASSWORD` is the password for the `root` user your provided
during the creation of the RDS instance.
:::

`KEYCLOAK_ADMIN_PASSWORD`, as we mentioned before, is the password for
the `admin` user of the Keycloak web console. You can easily create
random strong passwords, in Linux terminal, with the following command:

```shell
openssl rand -base64 14
```

### Deploying Keycloak Application

Next step, is deploying Keycloak itself:

```yaml title="deployment.yaml" linenos="" emphasize-lines="23,26,27,31,32,48,49,50,51,55,56,60,61"}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
  namespace: keycloak
  labels:
    app: keycloak
spec:
  replicas: 1
  selector:
    matchLabels:
      app: keycloak
  template:
    metadata:
      labels:
        app: keycloak
    spec:
      containers:
      - name: keycloak
        image: quay.io/keycloak/keycloak:21.0.2
        args: ["start-dev"]
        env:
        - name: KEYCLOAK_ADMIN
          valueFrom:
            secretKeyRef:
              key: KEYCLOAK_ADMIN
              name: keycloak-secrets
        - name: KEYCLOAK_ADMIN_PASSWORD
          valueFrom:
            secretKeyRef:
              key: KEYCLOAK_ADMIN_PASSWORD
              name: keycloak-secrets
        - name: KC_PROXY
          value: "edge"
        - name: KC_HEALTH_ENABLED
          value: "true"
        - name: KC_METRICS_ENABLED
          value: "true"
        - name: KC_HOSTNAME_STRICT_HTTPS
          value: "true"
        - name: KC_LOG_LEVEL
          value: INFO
        - name: KC_DB
          value: postgres
        - name: POSTGRES_DB
          valueFrom:
            secretKeyRef:
              name: postgres-credentials
              key: POSTGRES_DB
        - name: KC_DB_URL
          value: jdbc:postgresql://postgresql.blueprints.arc:5432/$(POSTGRES_DB)
        - name: KC_DB_USERNAME
          valueFrom:
            secretKeyRef:
              name: postgres-credentials
              key: POSTGRES_USER
        - name: KC_DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-credentials
              key: POSTGRES_PASSWORD
        ports:
        - name: http
          containerPort: 8080
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 8080
          initialDelaySeconds: 250
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /health/live
            port: 8080
          initialDelaySeconds: 500
          periodSeconds: 30
        resources:
            limits:
              memory: 512Mi
              cpu: "1"
            requests:
              memory: 256Mi
              cpu: "0.2"
```

As you will notice in the highlighted lines, we parameterize the
credentials portion of this manifest by referencing the variables and
their values we installed in the previous step with the Secrets.
Important to mention the significance of line 51, where we connect
Keycloak with the RDS instance using the FQDN we created in our Private
DNS Zone for this instance.

### Deploying Keycloak Service

We deployed the application, but at the time being is not accessible by
an internal or external actor (direct access from Pods does not count in
this case). For that matter, we need to deploy a Service that will
expose Keycloak's workload:

```yaml title="service.yaml" linenos="" emphasize-lines="15"
apiVersion: v1
kind: Service
metadata:
  name: keycloak
  namespace: keycloak
  labels:
    app: keycloak
spec:
  ports:
  - name: https
    port: 443
    targetPort: 8080
  selector:
    app: keycloak
  type: NodePort
```

:::note
Pay attention to **line 15**, where we set the `type` as `NodePort`.
That\'s because we want to expose this service externally, in a later
step, via an Ingress.
:::

## Exposing Keycloak

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-di1.png)

### Creating an Elastic Load Balancer

First in our list for this part, is to create an Elastic Load Balancer
that will be employed with the following:

- An EIP address
- Support L4 and L7 load balancing
- Be in the same VPC/Subnet as the nodes of our CCE Cluster
- Associate backend servers by using their IP addresses (*IP as
    Backend*)

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-i88.png)

:::note
Note down the **ELB ID**, we are going to need it to configure the Nginx
Ingress that we will deploy next.
:::

### Deploying Nginx Ingress on CCE

We are going to deploy in this step the Ingress that will sit between
our ELB and the Keycloak Service and expose it in the address of our
preference (`keycloak.example.com` for this lab)

:::warning
Do not forget that the FQDN we are going to use to expose the Keycloak
Service has to point to a **real** domain or subdomain that you actually
**own**!
:::

We will use [Helm](https://helm.sh) to deploy Nginx Ingress to our CCE
Cluster. Helm is the de-facto package manager of Kubernetes and if you
don\'t have it already installed on your remote machine or your bastion
host, you can do it with the following commands:

```shell
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

We have to provide to the helm chart a couple configuration values
(**overrides.yaml**), among them the internal ID of the Elastic Load
Balancer is the most important - as it will bind the future ingresses
that will be created using this ingress class with the specific load
balancer.

```yaml title="overrides.yaml" linenos="" emphasize-lines="6"
controller:
  replicaCount: 1
  service:
    externalTrafficPolicy: Cluster
    annotations:
      kubernetes.io/elb.id: "0000000-0000-0000-0000-000000000000"
```

:::note
Special attention required at **line 6**, replace the placeholder value
with the ID you copied from the main panel of your newly created Elastic
Load Balancer.
:::

We can now install the chart (it will automatically create and deploy
everything in a namespace named `nginx-system`):

```shell
helm upgrade --install -f overrides.yaml --install ingress-nginx ingress-nginx \
--repo https://kubernetes.github.io/ingress-nginx \
--namespace nginx-system --create-namespace
```

### Creating a Public DNS Endpoint

As we will see later, when we will reach to the point that we are ready
to register this Keycloak installation as an Identity Provider (IdP) in
our Open Telekom Cloud tenant, it is really pertinent that the EIP of
our ELB resolves to a real, secure URL address:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-ni4.png)

In order to accomplish that, we have to transfer the management of the
NS-Records of your domain to the Domain Name Service of Open Telekom
Cloud. Go on the site of your registar and make sure you configure the
following:

- Turn off any dynamic dns service for the domain or the subdomains
    you are going to bind with Keycloak.
- Change the NS-Records of your domain to point to:
    `ns1.open-telekom-cloud.com` **and** `ns2.open-telekom-cloud.com`

If those two prerequisites are met, then you are ready to configure a
new DNS Public Zone and Record Sets for your domain in Open Telekom
Cloud. We do have two mutually exclusive options to do that:

- Create manually from Open Telekom Cloud Console, a new Public DNS
    Zone that binds to your domain and an A-Record in that zone that
    points to the EIP of the external load balancer.
- Automate everything using
    [ExternalDNS](https://github.com/kubernetes-sigs/external-dns).

#### Creating the Endpoint manually

Follow the same steps we did earlier for the Private Zone, but this time
create a Public Zone targeting to your domain and add an A-Record that
binds your Keycloak's (sub)domain with the Elastic IP Address of the
Elastic Load Balancer.

#### Creating the Endpoint with ExternalDNS

Alternatively, we can automate the whole process by using ExternalDNS. You can find the necessary steps in blueprint:
[Create a Public DNS Endpoint with ExternalDNS](../../networking/create-a-public-dns-endpoint-with-externaldns.md).

##### Deploying a Keycloak Endpoint

We have now laid all the groundwork in order to automatically provision
a Public DNS Zone and a dedicated A-Record that will bind the EIP of our
ELB with Keycloak's subdomain FQDN. For that matter we need to install
a Custom Resource based on a CRD installed by ExternalDNS that is called
`DNSEndpoint`:

```yaml title="dns-endpoint.yaml" linenos="" emphasize-lines="8, 12"
apiVersion: externaldns.k8s.io/v1alpha1
kind: DNSEndpoint
metadata:
  name: keycloak
  namespace: keycloak
spec:
  endpoints:
  - dnsName: keycloak.example.de
    recordTTL: 300
    recordType: A
    targets:
    - XXX.XXX.XXX.XXX
```

:::note
At line 12, replace the placeholder with the Elastic IP Address that is
assigned to your Elastic Load Balancer. At line 8, replace the
(sub)domain with the one of yours
:::

Wait for a couple of seconds, till the reconciliation loop of the
ExternalDNS controller is done, and if all went well you should now see
the Record Sets of your Public Zone populated with various entries:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-dsj.png)

### Deploying Keycloak Ingress

And finally, the last step of this lab is to deploy an ingress for the
Keycloak Service:

```yaml title="ingress.yaml" linenos=""
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: keycloak-ingress
  namespace: keycloak
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: keycloak
            port:
              number: 443
```

We can now open the url address we defined in our Public DNS Zone for
this application and land on the welcome page of Keycloak:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-fhq.png)

## Next Steps

- [Identity Federation with GitHub](/docs/blueprints/by-use-case/security/keycloak/identity-federation-github.md)
