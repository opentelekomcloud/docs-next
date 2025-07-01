---
id: deploy-formbricks-on-cce
title: Deploy Formbricks on CCE
tags: [formbricks, collaboration, cce, surveys, feedback]
---

# Deploy Formbricks on CCE

This blueprint shows how to run Formbricks on Open Telekom Cloud Cloud Container Engine, giving you a turnkey path to a self-hosted, scalable feedback platform. [Formbricks](https://formbricks.com/) is an open-source, [AGPLv3-licensed](https://www.tldrlegal.com/license/gnu-affero-general-public-license-v3-agpl-3-0) suite (with a free and a commercial counterpart) that lets you build and deliver in-app, web-embedded, link-based or email surveys without sacrificing data privacy.

Formbricks includes a no-code survey editor, real-time response tracking and analysis, and the flexibility to target user groups based on their actions or attributes. Hosting on CCE combines those benefits with the operational simplicity and enterprise-grade SLAs of Open Telekom Cloud, so you can focus on gathering insights rather worrying where your data is saved.

## Prerequisites

1. a **Cloud Container Engine (CCE) cluster**  
2. a Redis instance in **Distributed Cache Service (DCS)**  
3. a PostgreSQL instance in **Relational Database Service (RDS)**  

<!-- ### Installing ORAS -->

## Creating a PostgreSQL Database

Formbricks requires persistent storage to retain data and configuration across pod restarts. While it's technically feasible to deploy a PostgreSQL instance directly within the CCE cluster, this approach introduces operational complexity and shifts responsibility for database management to the application team. A more efficient solution is to leverage Open Telekom Cloud's Relational Database Service (RDS). It provides a scalable, fully managed PostgreSQL backend that integrates seamlessly with other managed services on the platform, significantly reducing administrative overhead and ensuring high availability and operational resilience.

### Creating Security Groups

Two distinct Security Groups will be required for this setup. The first will be assigned to the RDS instance/nodes and must allow inbound traffic on port `5432`, which is the default PostgreSQL port. If both the RDS and CCE nodes are deployed within the same Subnet, this rule can be restricted to that Subnet’s IP range for tighter control. This ensures that only internal workloads—such as Formbricks running on CCE—can initiate connections to the database, minimizing exposure and adhering to the principle of least privilege.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-fh3.png)

The second Security Group will be assigned to the client nodes—in this case, the CCE worker nodes where Formbricks will be running. This group must allow outbound traffic on port `5432` to reach the RDS instance. By explicitly controlling egress rules, you can enforce that only authorized services within your Kubernetes environment can initiate connections to the database, maintaining a secure and auditable network flow between components.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-k2x.png)

### Provisioning a Database

The next step involves provisioning a PostgreSQL database instance via Open Telekom Cloud’s RDS service. Select an instance class and storage configuration that align with your anticipated workload—consider factors such as expected connection volume, data growth, and performance requirements. For production environments, it's recommended to opt for a compute-optimized or memory-optimized instance class, along with provisioned IOPS storage if consistent performance is critical. This ensures that Formbricks operates reliably under load and can scale as demand increases.

![image](/img/docs/blueprints/by-use-case/security/zitadel/Screenshot_from_2025-04-16_10-54-16.png)

When provisioning the PostgreSQL instance, ensure the following network and security configurations are in place:

- Deploy the RDS instance within the same Virtual Private Cloud (VPC) as your CCE cluster to enable low-latency, private network communication between the application and the database.
- Attach the previously created `rds-instances` Security Group to the RDS instance. This group must allow inbound traffic on port `5432` from the Subnet or Security Group associated with the CCE nodes to enable secure database access.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-ka7.png)

## Creating a Redis Instance

1. Navigate to *Open Telekom Cloud Console* -> *Distributed Cache Service (for Redis)* -> *Cache Manager* and click *Create DCS Instance*. Choose the desirable **Engine** and **Instance Specifications** (a `redis.ha.xu1.large.r2.1` flavor will suffice for this blueprint, but for production environments
adjust to your needs estimations.)

![image](/img/docs/blueprints/by-use-case/collaboration/formbricks/Screenshot_from_2025-06-30_11-27-46.png)

2. Make sure you place the instance in the same VPC as your CCE cluster.

![image](/img/docs/blueprints/by-use-case/collaboration/formbricks/Screenshot_from_2025-06-30_11-28-07.png)

3. Choose **Yes** for **Password Protected** instance and provide the credentials.

4. Finally, click *Create Now* and wait till the instance is been provisioned. Then enter the information dashboard of the instance and note down the
**Connection Address**, as we are going to need it later to configure the Helm Chart values.

![image](/img/docs/blueprints/by-use-case/collaboration/formbricks/Screenshot_from_2025-06-30_11-31-51.png)

## Creating a CCE Cluster

To proceed with the setup, you'll need to provision a Cloud Container Engine (CCE) cluster. Use the Open Telekom Cloud wizard for cluster creation, and pay close attention to the following configuration specifics:

- **High Availability (HA)**: For this blueprint, a non HA-cluster was used which is not advised for production workloads. However, if your workload demands fault tolerance and availability guarantees, consider enabling HA during creation—as this setting is immutable post-deployment.
- **Network Placement**: Ensure the CCE cluster is provisioned within the **same VPC** as the RDS instance to facilitate secure and low-latency communication.
- **Subnet Configuration**: If you're using a single Subnet for both services, place the CCE worker nodes in the **same Subnet** as the RDS instance to align with the predefined security group and routing rules.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-fp6.png)

After the CCE cluster has been created, proceed to add worker nodes using the wizard. Once all nodes are in a **Running** or **Ready** state, you’ll need to update their network configuration to enable outbound connectivity to the database.

For each worker node, attach the previously created `rds-client` Security Group in addition to any existing group already associated with the node. This step ensures that outbound traffic on port `5432`—required for connecting to the RDS instance—is permitted, establishing a secure and functional path between your application layer and the database backend.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-g7y.png)

:::caution
Decide on the access method you'll use to interact with the CCE cluster post-deployment. There are two main options:

1. **Assigning an Elastic IP (EIP)** and allowing direct access over the public Internet.  
2. **Provisioning a bastion host** in a public Subnet within the same VPC, and using it as a secure jump point to reach internal resources.

While the first option is quicker to set up, **the recommended approach is to use a bastion host**. This method significantly reduces the attack surface by isolating the cluster from direct Internet exposure. The bastion can be tightly locked down with security groups and monitored more easily, aligning with best practices for secure infrastructure access.
:::

## Creating an Elastic Load Balancer

The first step in preparing the environment is to provision an Elastic Load Balancer (ELB), which will serve as the external entry point for traffic into the CCE cluster. Setting up an ELB setup is critical for handling external traffic and forwarding requests to services within the cluster, such as the Ingress Controller.

Go to *Open Telekom Cloud Console* -> *Network* -> *Elastic Load Balancing* and click *Create Elastic Load Balancer*. Ensure that the Elastic Load Balancer is provisioned within the same VPC and Subnet as your CCE cluster. This network alignment is essential to allow the load balancer to reach the CCE worker nodes directly using their private IP addresses. Misplacing the ELB in a different network segment would result in unreachable backends and broken ingress routing.

![image](/img/docs/blueprints/by-use-case/security/zitadel/Screenshot_from_2025-04-16_08-06-28.png)

Once the Elastic Load Balancer is provisioned, make sure to **note down the ELB ID**. This identifier will be required during the configuration of the NGINX Ingress Controller, allowing it to bind correctly to the external load balancer and handle incoming traffic. The ELB ID serves as a reference for associating Kubernetes resources with the underlying network infrastructure, ensuring seamless integration between your Ingress layer and the public-facing endpoint.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-i88.png)

## Creating a Public DNS Endpoint

Login to your domain registrar’s control panel and ensure the following:

- **Disable any dynamic DNS features** associated with the domain or subdomains that will be used by Formbricks.
- **Update the NS records** of your domain to point exclusively to the following OTC name servers:
  
  ```
  ns1.open-telekom-cloud.com
  ns2.open-telekom-cloud.com
  ```

Once the nameserver change propagates and OTC has authoritative control over your domain, you’re ready to define DNS zones and records. You have two paths forward, depending on your operational model:

1. **Manual Configuration via the OTC Console**  
   Create a **Public DNS Zone** in the Open Telekom Cloud DNS service, then define an **A record** that maps your domain (e.g., `formbricks.example.com`) to the **EIP** of the external load balancer.

2. **Automated Configuration with ExternalDNS**  
   Integrate the [ExternalDNS](https://github.com/kubernetes-sigs/external-dns) controller into your Kubernetes cluster. It monitors Ingress resources and automatically creates and updates DNS records in your OTC DNS zone based on annotations. This option is ideal for dynamic environments or production setups that benefit from infrastructure-as-code and reduced manual intervention.

Choose the approach that best fits your deployment strategy and automation preferences.

## Preparing the CCE Cluster

Before deploying our workload, the CCE cluster must be equipped with a set of foundational components. In this section, we'll install and configure essential prerequisites such as the NGINX Ingress Controller for routing external traffic, cert-manager for managing TLS certificates, and other supporting workloads. These components establish the baseline infrastructure required to expose services securely and ensure smooth operation of the application stack within the Kubernetes environment.

### Installing NGINX Ingress Controller

In this step, we’ll deploy the NGINX Ingress Controller, which will act as the interface between the Elastic Load Balancer and the Formbricks service running inside the CCE cluster. The Ingress Controller handles HTTP(S) routing and termination, forwarding external traffic to the appropriate internal services based on host and path rules. For this lab, we’ll expose Formbricks using a custom domain name—`formbricks.example.com`—which should point to the public EIP associated with your ELB. This setup enables secure, domain-based access to Formbricks and forms the foundation for managing ingress traffic across the cluster.

:::important
Don't forget that the **Fully Qualified Domain Name (FQDN)** you use to expose the Formbricks service—such as `formbricks.example.com`—must correspond to a **real, resolvable domain or subdomain** that you own and control. You’ll need to create a DNS record (typically an A or CNAME record) that points this FQDN to the public **Elastic IP** assigned to your load balancer. Without a valid DNS mapping, certificate issuance and external access to the Formbricks instance will fail, especially if you're using TLS termination via cert-manager.
:::

We’ll use [Helm](https://helm.sh/) to deploy the NGINX Ingress Controller into the CCE cluster. Helm is the de facto package manager for Kubernetes, streamlining the deployment of complex applications using templated charts. If Helm is not yet installed on your local machine or the bastion host you're using to manage the cluster, you can install it using the following commands:

```shell
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

To deploy the NGINX Ingress Controller properly, we need to supply Helm with a custom values file—commonly named **overrides.yaml**—which defines specific configuration parameters for the deployment. One of the most critical values in this file is the internal ID of the Elastic Load Balancer (ELB). This ID ensures that the Ingress Controller binds to the correct load balancer, enabling it to route external traffic to internal Kubernetes services.

The `kubernetes.io/elb.id` attribute will be used to annotate the Service resource created by the Ingress Controller, so that all Ingress resources referencing this ingress class will automatically be linked to the designated load balancer:

```yaml title="overrides.yaml" linenos="" emphasize-lines="6"
controller:
  replicaCount: 1
  service:
    externalTrafficPolicy: Cluster
    annotations:
      kubernetes.io/elb.id: "{ELB_ID}"
```

:::important
Make sure to replace `{ELB_ID}` with the actual ID of the Elastic Load Balancer we created earlier.
:::

With the overrides.yaml file prepared, you can now proceed to install the NGINX Ingress Controller using Helm. This will deploy all required components into a dedicated namespace called `nginx-system`. Run the following commands:

```shell
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install nginx-ingress ingress-nginx/ingress-nginx \
  --namespace nginx-system \
  --create-namespace \
  --values overrides.yaml

```

This will set up the Ingress Controller with your custom configuration, including the ELB binding. Once deployed, Kubernetes Ingress resources referencing the nginx class will route traffic through this controller.

### Installing OTC ACME DNS01 Solver

Cert-manager DNS providers are integrations with various DNS (Domain Name System) service providers that allow cert-manager, a Kubernetes add-on, to automate the management of SSL/TLS certificates. DNS providers enable cert-manager to automatically perform challenges to prove domain ownership and obtain certificates from certificate authorities like Let's Encrypt.

By configuring cert-manager with the compatible Open Telekom Cloud DNS provider, we can set up automatic certificate issuance and renewal for our Open Telekom Cloud CCE workloads without manual intervention. This automation is crucial for securing web applications and services deployed on CCE clusters.

To enable automated TLS provisioning for workloads in your CCE cluster, follow the recommended approach for as in the Best Practice: [Issue an ACME Certificate with DNS01 Solver in CCE](../../../../best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce.md).

## Installing Formbricks using Helm

### Creating Secrets

Create, in your working directory, the following Kubernetes `Secret` for your Redis and Postgres passwords:

```yaml title="formbricks-app-secrets.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: formbricks-app-secrets
  namespace: formbricks
type: Opaque
stringData:
  REDIS_PASSWORD: "REDIS_PASSWORD"
  POSTGRES_ADMIN_PASSWORD: "POSTGRES_ADMIN_PASSWORD"
```

and then provision along with a new `Namespace` with **kubectl**:

```shell
kubectl create namespace formbricks
kubectl apply -f formbricks-app-secrets.yaml
```

### Preparing Helm Chart Values

1. Download the default Helm Chart values from https://github.com/formbricks/formbricks/blob/main/helm-chart/values.yaml and save it
   in your working directory.

2. Under the `env` stanza add the variable `EMAIL_VERIFICATION_DISABLED` with value `1`:

    ```yaml
      env:
        DOCKER_CRON_ENABLED:
            value: "0"
        EMAIL_VERIFICATION_DISABLED:
            value: "1"
    ```

3. Under the `ingress` stanza set the variables values as following:

    - `ingress.enabled` to `true`
    - `ingressClassName` to `nginx`
    - `hosts.host` as the FQDN under which you wish to expose this workload

    e.g.:

    ```yaml
    ingress:
        enabled: true  
        ingressClassName: nginx  
        hosts:
            - host: <YOUR.(SUB)DOMAIN.ADDRESS>
            paths:
                - path: /
                pathType: "Prefix"
                serviceName: "formbricks"
        annotations: {
        
        }  
    ```

4. Under the `redis` stanza set the variables values as following:

    - `redis.enabled` to `true`
    - `redis.architecture` to `replication` (as long as you have created a Master/StandBy Redis instance, otherwise set to `standalone`)
    - `redis.externalRedisUrl` to the **Connection Address** we noted down in a previous step
  
   e.g.:

    ```yaml
    redis:
        enabled: true  
        externalRedisUrl: <CONNECTION_ADDRESS>
        fullnameOverride: "formbricks-redis"
        architecture: replication
        auth:
            enabled: true
            existingSecret: "formbricks-app-secrets"
            existingSecretPasswordKey: "REDIS_PASSWORD"
        networkPolicy:
            enabled: false
        master:
            persistence:
            enabled: true
    ```

5. Under the `postgresql` stanza set the variables values as following:

    - `postgresql.enabled` to `true`
    - `postgresql.externalRedisUrl` to `postgresql://formbricks:<POSTGRES_ADMIN_PASSWORD>@<POSTGRES_FLOATING_IP>/formbricks`

   e.g.:

    ```yaml
    postgresql:
        enabled: true  
        externalDatabaseUrl: "postgresql://formbricks:<POSTGRES_ADMIN_PASSWORD>@<POSTGRES_FLOATING_IP>/formbricks"
        auth:
            username: formbricks
            database: formbricks
            existingSecret: "formbricks-app-secrets"
            secretKeys:
                adminPasswordKey: "POSTGRES_ADMIN_PASSWORD"
                userPasswordKey: "POSTGRES_USER_PASSWORD"
    ```

### Installing Helm Chart


