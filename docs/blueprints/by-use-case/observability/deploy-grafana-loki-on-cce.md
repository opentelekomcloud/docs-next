---
id: deploy-grafana-loki-on-cce
title: Deploy Grafana Loki on CCE
tags: [cce, observability, logging, grafana, loki]
sidebar_position: 1
---

# Deploy Grafana Loki on CCE

Deploying [Grafana Loki](https://grafana.com/docs/loki/latest/) on Cloud Container Engine (CCE) enables a scalable, cloud-native log aggregation and monitoring solution within the Open Telekom Cloud environment. Loki integrates seamlessly with Grafana to collect, index, and visualize log data without the high storage costs associated with traditional log management systems. By running Loki on CCE, users can take advantage of Kubernetes-native deployments, simplified scaling, and secure, managed infrastructure. This approach provides an efficient foundation for observability, supporting modern DevOps practices and improving operational insights across distributed applications.

## Architecture

Grafana Loki is built around a modular architecture that separates log ingestion, storage, and querying to achieve scalability and cost efficiency. When logs are collected from applications or system components, they are first received by the **distributor**, which authenticates and validates the data before *routing* it to the **ingesters**. The ingesters *temporarily hold log streams in memory*, compress them into chunks, and then *push these chunks to long-term storage* such as S3 or in our case, Open Telekom Cloud Object Storage (OBS). At the same time, they write small index files that map log labels to their corresponding chunks, stored either in a key-value database or alongside the chunks in object storage.

When a user runs a query from Grafana or directly through the Loki API, the querier reads the index to locate the relevant chunks, retrieves them from storage, and returns the combined results. In larger or production setups, a **query frontend** can be added to optimize performance by caching and parallelizing requests. This division of responsibilities—distributors for routing, ingesters for writing, and queriers for reading, ensures Loki remains efficient even at scale. On Cloud Container Engine (CCE), this architecture integrates naturally with Kubernetes, providing a reliable and cost-effective platform for log aggregation and analysis.

<center>
![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/loki-architecture.png)
</center>

For more information, consult the official [Loki architecture](https://grafana.com/docs/loki/latest/get-started/architecture/) documentation.

## Installing Grafana Loki

Installing Grafana Loki on Cloud Container Engine (CCE) using Helm is the most straightforward and flexible deployment approach. The Helm chart provided by Grafana supports several deployment modes, allowing users to tailor the setup to their operational needs and cluster scale.

1. The [monolithic](https://grafana.com/docs/loki/latest/get-started/deployment-modes/#monolithic-mode) mode deploys Loki as a single process that combines all core components—distributor, ingester, querier, and compactor—into one service. This variant is ideal for small environments, test setups, or single-tenant use cases where simplicity and ease of management are more important than high scalability.

2. The [simple scalable](https://grafana.com/docs/loki/latest/get-started/deployment-modes/#simple-scalable) variation provides a middle ground, offering some degree of component separation and scalability without the full complexity of the distributed deployment. It’s often used in medium-sized environments or early production stages.

3. And finally, the [microservices](https://grafana.com/docs/loki/latest/get-started/deployment-modes/#microservices-mode) mode (also referred in the past as the distributed mode) separates Loki’s components into individual services. Each component can scale independently, offering higher performance and fault tolerance. This setup suits production workloads and larger clusters where log volume and query traffic vary significantly.

In this blueprint, Loki will be deployed on Cloud Container Engine (CCE) in microservices mode as it is the only one that provides the flexibility and performance needed for large production-grade environments where reliability and throughput are critical. For backend storage, the deployment will use Open Telekom Cloud Object Storage (OBS).

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/microservices-mode.png)

1. Go to *Open Telekom Cloud Console* -> *Object Storage Service* and click *Create Bucket* to create an OBS bucket for Loki.

    :::note
    A single bucket is sufficient for [boltdb-shipper](https://grafana.com/docs/loki/latest/operations/storage/boltdb-shipper/) or [TSDB](https://grafana.com/docs/loki/latest/operations/storage/tsdb/) modes.

    :pushpin: Enable versioning to protect against accidental deletes during compaction.  
    :pushpin: Keep the bucket private.
    :::

2. **Optionally**, if no access key pair exists, open the *Open Telekom Cloud Console* -> *Identity & Access Management (IAM)*. In the IAM dashboard, select *Users*, choose the user you intend to work with, and open the *Security Settings* tab. Scroll down to the *Access Keys* section and select *Create Access Key* to generate a new Access Key and Secret Key pair.

3. Create a namespace and provision the Access Key and Secret Key pair as a Kubernetes Secret:

    ```bash
    kubectl create namespace monitoring

    kubectl -n monitoring create secret generic loki-obs-credentials \
    --from-literal=S3_ACCESS_KEY_ID='<ACCESS_KEY>' \
    --from-literal=S3_SECRET_ACCESS_KEY='<SECRET_KEY>' \
    --from-literal=S3_REGION='<REGION>'
    ```

    or alternatively create a manifest called, **loki-obs-credentials.yaml**, and apply it with **kubectl**:

    ```yaml title="loki-obs-credentials.yaml"
    apiVersion: v1
    kind: Secret
    metadata:
        name: loki-obs-credentials
        namespace: monitoring
    type: Opaque
    stringData:
        S3_ACCESS_KEY_ID: "<ACCESS_KEY>"
        S3_SECRET_ACCESS_KEY: "<SECRET_KEY>"
        S3_REGION: "<REGION>"
    ```

    :::important
    Loki’s S3 client supports the use of static credentials. To prevent exposing sensitive information in the Helm values file, these credentials are stored in a Kubernetes Secret. The environment variables use the `S3_` prefix, following the naming conventions of the S3 SDK. Replace the placeholder values with your own access key (AK) and secret key (SK). In this blueprint, all resources will be deployed in the `eu-de` region, which will be used as the default region throughout the setup.
    :::

4. Next, we need to prepare the Helm chart override values, namely **values-loki-obs.yaml**:

    ```yaml title="values-loki-obs.yaml"
    deploymentMode: Distributed

    global:
        dnsService: "coredns"

    loki:
        auth_enabled: false

        schemaConfig:
            configs:
            - from: "2024-01-01"
                store: tsdb
                object_store: s3
                schema: v13
                index:
                    prefix: loki_index_
                    period: 24h

        storage:
            type: s3
            bucketNames:
                chunks: loki
                ruler: loki
                admin: loki
            s3:
                endpoint: obs.eu-de.otc.t-systems.com
                region: ${S3_REGION}
                accessKeyId: ${S3_ACCESS_KEY_ID}
                secretAccessKey: ${S3_SECRET_ACCESS_KEY}
                s3ForcePathStyle: true

        limits_config:
            ingestion_rate_mb: 8
            ingestion_burst_size_mb: 16
            max_query_series: 200000
            max_global_streams_per_user: 5000
            reject_old_samples: true
            reject_old_samples_max_age: 72h
            retention_period: 30d

        compactor:
            retention_enabled: true
            delete_request_store: s3
            compaction_interval: 5m
            delete_request_cancel_period: 24h

    backend: { replicas: 0 }
    read:    { replicas: 0 }
    write:   { replicas: 0 }
    singleBinary: { replicas: 0 }

    gateway:
        enabled: true
        replicas: 1
        service:
            type: ClusterIP
            port: 80
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
        resources:
            requests: { cpu: 50m,  memory: 128Mi }
            limits:   { cpu: 200m, memory: 256Mi }

    distributor:
        replicas: 2
        maxUnavailable: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true  
        resources:
            requests: { cpu: 100m, memory: 256Mi }
            limits:   { cpu: "1",  memory: 512Mi }

    ingester:
        replicas: 3
        maxUnavailable: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
            - -ingester.wal-enabled=true
        resources:
            requests: { cpu: 500m, memory: 2Gi }
            limits:   { cpu: "2",  memory: 4Gi }
        persistence:
            enabled: true
            accessModes: ["ReadWriteOnce"]
            size: 20Gi    
            storageClass: csi-disk  

    indexGateway:
        replicas: 2
        maxUnavailable: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
        resources:
            requests: { cpu: 200m, memory: 1Gi }
            limits:   { cpu: "1",  memory: 2Gi }
        persistence:
            enabled: true
            accessModes: ["ReadWriteOnce"]
            size: 10Gi
            storageClass: csi-disk  

    querier:
        replicas: 2
        maxUnavailable: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
        resources:
            requests: { cpu: 200m, memory: 1Gi }
            limits:   { cpu: "1",  memory: 2Gi }

    queryFrontend:
        replicas: 2
        maxUnavailable: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
        resources:
            requests: { cpu: 100m, memory: 256Mi }
            limits:   { cpu: 500m, memory: 512Mi }

    queryScheduler:
        replicas: 2
        maxUnavailable: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
        resources:
            requests: { cpu: 100m, memory: 256Mi }
            limits:   { cpu: 500m, memory: 512Mi }

    ruler:
        enabled: true
        replicas: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
        resources:
            requests: { cpu: 100m, memory: 512Mi }
            limits:   { cpu: 500m, memory: 1Gi }
        persistence:
            enabled: true
            accessModes: ["ReadWriteOnce"]
            size: 2Gi
            storageClass: csi-disk  

    compactor:
        replicas: 1
        extraEnvFrom:
            - secretRef: { name: loki-obs-credentials }
        extraArgs:
            - -config.expand-env=true
        resources:
            requests: { cpu: 200m, memory: 1Gi }
            limits:   { cpu: "1",  memory: 2Gi }
        persistence:
            enabled: true
            accessModes: ["ReadWriteOnce"]
            size: 10Gi
            storageClass: csi-disk  

    memberlist:
        service:
            publishNotReadyAddresses: true

    monitoring:
        serviceMonitor: { enabled: false }
        selfMonitoring: { enabled: false }

    podSecurityContext: { fsGroup: 10001 }
    securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        runAsGroup: 10001
        allowPrivilegeEscalation: false
    ```

    :::important
    The key points to note from this configuration are:

    - `deploymentMode: Distributed`, dictates Loki to run in a fully distributed architecture, where each core component—such as the distributor, ingester, and querier—operates as a separate service. This enables independent scaling, better performance, and higher resilience, making it suitable for production environments.
    - `schemaConfig.configs.store: tsdb`, tells Loki to use the [TSDB](https://grafana.com/docs/loki/latest/operations/storage/tsdb/) (Time Series Database) format for storing log data. This modern storage engine improves query performance, compaction, and index management compared to older backends, and is the recommended option for recent Loki versions.
    - The `storage.type: s3` setting defines S3-compatible object storage as Loki’s backend for storing log chunks. The `storage.s3` section provides the connection details—such as endpoint, bucket name, and credentials—needed for Loki to write and read data from that storage. Make sure you adjust the `storage.s3.endpoint` and `storage.bucketNames.*` values according to the properties of the OBS bucket we provisioned in the previous step.
    - `global.dnsService: coredns`, defines the DNS service Loki uses for internal name resolution within the Kubernetes cluster. Setting it explicitly to `coredns` ensures compatibility with the default DNS setup in most modern Kubernetes distributions, one of them CCE. If this value is not specified, Loki defaults to using `kube-dns`.
  
    For deeper understanding of the configuration values of the Helm chart for this deployment mode refer to the official guide: [Install the microservice Helm chart](https://grafana.com/docs/loki/latest/setup/install/helm/install-microservices/).
    :::

5. And finally, we need to deploy the Helm chart:

    ```bash
    helm repo add grafana https://grafana.github.io/helm-charts
    helm repo update

    helm upgrade --install loki grafana/loki \
    -f values-loki-obs.yaml \
    -n monitoring --create-namespace \
    --reset-values
    ```

    :::warning
    Ensure that you select the `grafana/loki` chart from the Helm repository, as this is the current version that supports deployment in microservices mode. **Do not** use `grafana/loki-distributed`, which is deprecated and no longer maintained and replaced by `grafana/loki`.
    :::

## Verification

If the deployment was successful, you should see multiple pods running in the `monitoring` namespace:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/Screenshot_from_2025-10-09_09-51-13.png)

along with the **loki_cluster_seed.json** file created in your OBS bucket:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/Screenshot_from_2025-10-09_10-07-54.png)

:::note
The **loki_cluster_seed.json** file is a metadata file generated by Loki to help manage and identify the state of the cluster. It contains information such as the cluster’s unique identifier, deployment configuration, and references to index and storage metadata. This file acts as a seed record that allows Loki components to coordinate and recognize each other during startup or recovery. In setups using object storage, such as Open Telekom Cloud OBS, the file is stored in the bucket defined for Loki’s backend and ensures consistent initialization of the cluster after restarts or scaling events.
:::
