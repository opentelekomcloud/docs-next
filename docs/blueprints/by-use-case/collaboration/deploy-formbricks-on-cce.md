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
4. a bastion host in **Elastic Cloud Service (ECS)**  

## Creating a PostgreSQL Database

Formbricks requires persistent storage to retain data and configuration across pod restarts. While it's technically feasible to deploy a PostgreSQL instance directly within the CCE cluster, this approach introduces operational complexity and shifts responsibility for database management to the application team. A more efficient solution is to leverage Open Telekom Cloud's Relational Database Service (RDS). It provides a scalable, fully managed PostgreSQL backend that integrates seamlessly with other managed services on the platform, significantly reducing administrative overhead and ensuring high availability and operational resilience.

This step involves provisioning a PostgreSQL database instance via Open Telekom Cloud’s RDS service. Select an instance class and storage configuration that align with your anticipated workload—consider factors such as expected connection volume, data growth, and performance requirements. For production environments, it's recommended to opt for a compute-optimized or memory-optimized instance class, along with provisioned IOPS storage if consistent performance is critical. This ensures that Formbricks operates reliably under load and can scale as demand increases.

![image](/img/docs/blueprints/by-use-case/security/zitadel/Screenshot_from_2025-04-16_10-54-16.png)

When provisioning the PostgreSQL instance, ensure the following network and security configurations are in place:

- Create two Security Groups, `rds-instances` and `rds-clients`, as described in best practice: [Configure Security Groups for PostgreSQL RDS Instances and Clients](/docs/best-practices/databases/relational-database-service/configure-sg-for-rds-instances.md).
- Deploy the RDS instance within the same Virtual Private Cloud (VPC) as your CCE cluster to enable low-latency, private network communication between the application and the database.
- Attach the previously created `rds-instances` Security Group to the RDS instance. This group must allow inbound traffic on port `5432` from the Subnet or Security Group associated with the CCE nodes to enable secure database access.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-ka7.png)

### Installing pgvector Plugin

Navigate to *Open Telekom Cloud Console* -> *Relational Database Service*, choose your instance and then click *Plugins*. Search for the plugin **vector** and click *Install*.

![image](/img/docs/blueprints/by-use-case/collaboration/formbricks/Screenshot_from_2025-07-01_08-47-52.png)

Installing the plugin is instantenous but we need afterwards to enable it. Connect, via SSH, to your bastion host and perform the following steps:

#### Installing PostgreSQL Client

```bash
sudo apt-get update
sudo apt-get install postgresql-client
```

#### Creating a new Database

```bash
psql -h <RDS_INSTANCE_FLOATING_IP> -U root -d postgres -c "CREATE DATABASE formbricks;"
```

#### Registering pgvector in the public Schema

```bash
psql -h <RDS_INSTANCE_FLOATING_IP> -U root -d postgres -c "SELECT control_extension('create','vector','public');"
```

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

## Preparing the CCE Cluster

Before deploying our workload, the CCE cluster must be equipped with a set of foundational components. In this section, we'll install and configure essential prerequisites such as the NGINX Ingress Controller for routing external traffic, cert-manager for managing TLS certificates, and other supporting workloads. These components establish the baseline infrastructure required to expose services securely and ensure smooth operation of the application stack within the Kubernetes environment.

Follow the guidelines in the best practice [Prepare CCE to Expose Workloads](/docs/best-practices/containers/cloud-container-engine/prepare-cce-for-external-workloads.md) before proceeding to the next steps.

## Installing Formbricks using Helm

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

    :::important
    **Do not disable email verification in production**! We are setting `EMAIL_VERIFICATION_DISABLED` here to `true` only for demonstration purposes.

    More on the SMTP configuration of Formbricks can be found [here](https://formbricks.com/docs/self-hosting/configuration/smtp#smtp-configuration).
    :::

3. Under the `ingress` stanza set the variables values as following:

    - `ingress.enabled` to `true`
    - `ingressClassName` to `nginx`
    - `tls.hosts` and `hosts.host` as the FQDN under which you wish to expose this workload
    - `annotations.cert-manager.io/cluster-issuer` as the `ClusterIssuer` you created in the previous steps (e.g.: `opentelekomcloud-letsencrypt`).

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
        annotations: 
            cert-manager.io/cluster-issuer: "opentelekomcloud-letsencrypt"
            nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
        tls:
            - hosts:
                - <YOUR.(SUB)DOMAIN.ADDRESS>
            secretName: formbricks-tls

    ```

4. Under the `redis` stanza set the variables values as following:

    - `redis.enabled` to `false`
    - `redis.architecture` to `replication` (as long as you have created a Master/StandBy Redis instance, otherwise set to `standalone`)
    - `redis.externalRedisUrl` to the **Connection Address** we noted down in a previous step
  
   e.g.:

    ```yaml
    redis:
        enabled: false  
        externalRedisUrl: <CONNECTION_ADDRESS>
        architecture: replication
    ```

5. Under the `postgresql` stanza set the variables values as following:

    - `postgresql.enabled` to `false`
    - `postgresql.externalRedisUrl` to `postgresql://formbricks:<RDS_ROOT_PASSWORD>@<RDS_FLOATING_IP>:5432/formbricks`

   e.g.:

    ```yaml
    postgresql:
        enabled: false  
        externalDatabaseUrl: "postgresql://formbricks:<RDS_ROOT_PASSWORD>@<RDS_FLOATING_IP>:5432/formbricks"
    ```

:::important
Setting `redis.enabled` and `postgresql.enabled` to `false` instructs the Helm Chart to connect to external services and to not deploy dedicated ones for the Formbricks workload in the cluster.
:::

### Installing Helm Chart

```bash
helm upgrade --install formbricks oci://ghcr.io/formbricks/helm-charts/formbricks \ 
-n formbricks \ 
--create-namespace \
-f values.yaml
```

:::note
Assuming you saved the default values in the previous step as **values.yaml**
:::

### Troubleshooting

## Verification

### Creating the Administrator Account

### Creating an Organization and Project
