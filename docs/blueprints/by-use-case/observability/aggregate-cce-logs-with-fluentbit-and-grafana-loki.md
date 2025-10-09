---
id: aggregate-cce-logs-with-fluentbit-and-grafana-loki
title: Aggregate CCE Logs with Fluent Bit & Grafana Loki
tags: [cce, observability, logging, grafana, loki, fluent-bit]
---

# Aggregate CCE Logs with Fluent Bit & Grafana Loki

This blueprint explains how to collect and centralize logs from Cloud Container Engine (CCE) workloads using [Fluent Bit](https://fluentbit.io/) and [Grafana Loki](https://grafana.com/oss/loki/). It covers the end-to-end setup for forwarding logs from CCE nodes and containers to a centralized Loki instance, enabling efficient querying, visualization, and troubleshooting through Grafana dashboards. The goal is to provide a consistent and scalable logging approach for Kubernetes environments running on Open Telekom Cloud.

## Installing Grafana Loki

Grafana Loki is the central component of the log aggregation stack. It stores logs efficiently and allows them to be queried and visualized through Grafana. In this step. We will configure Loki to write chunks and indexes to OBS via its S3-compatible API. This removes the need for large persistent volumes in the cluster and simplifies scaling and retention.

1. Go to *Open Telekom Cloud Console* -> *Object Storage Service* and click *Create Bucket* to create an OBS bucket for Loki.

    :::note
    A single bucket is sufficient for [boltdb-shipper](https://grafana.com/docs/loki/latest/operations/storage/boltdb-shipper/) or [TSDB](https://grafana.com/docs/loki/latest/operations/storage/tsdb/) modes.

    :pushpin: Enable versioning to protect against accidental deletes during compaction.  
    :pushpin: Keep the bucket private.
    :::

2. Optionally, if no access key pair exists, open the *Open Telekom Cloud Console* -> *Identity & Access Management (IAM)*. In the IAM dashboard, select *Users*, choose the user you intend to work with, and open the *Security Settings* tab. Scroll down to the *Access Keys* section and select *Create Access Key* to generate a new Access Key and Secret Key pair.

3. Create a namespace and provision the Access Key and Secret Key pair as a Kubernetes Secret:

    ```bash
    kubectl create namespace monitoring
    kubectl -n monitoring create secret generic loki-obs-credentials \
    --from-literal=AWS_ACCESS_KEY_ID='<ACCESS_KEY>' \
    --from-literal=AWS_SECRET_ACCESS_KEY='<SECRET_KEY>'
    ```

    :::note
    Loki’s S3 client accepts static credentials. Using a `Secret` avoids embedding keys in a Helm values file. The names are prefixed with `AWS_` because Loki uses the S3 SDK conventions. Replace the respective values with your own AK/SK.
    :::

4. Next, we need to prepare the Helm chart override values, namely **loki-values-overrides.yaml**. The following configuration switches Loki to an S3 object storage and sets the OBS endpoint to `obs.eu-de.otc.t-systems.com` with path-style addressing (`s3forcepathstyle: true`). Credentials are read from the `Secret` we provisioned in the previous step, via environment variables. Retention is enforced by the compactor. A small PVC remains for [write-ahead logging (WAL)](https://docs.fluentbit.io/manual/data-pipeline/inputs/tail#write-ahead-logging-wal-and-memory-usage), while the logs themselves reside in OBS:

    ```yaml title="loki-values-overrides.yaml"
    # Run Loki as microservices (distributed)
    deploymentMode: Distributed

    loki:
        auth_enabled: false

        # Replication & general limits
        common_config:
            replication_factor: 2

        limits_config:
            retention_period: 168h        # 7d
            ingestion_rate_mb: 16
            ingestion_burst_size_mb: 32
            max_cache_freshness_per_query: 10m

        # Required schema (TSDB or boltdb-shipper; both work with S3). TSDB recommended.
        schema_config:
            configs:
            - from: "2025-01-01"
                store: tsdb                # or: boltdb-shipper
                object_store: s3
                schema: v13
                index:
                prefix: loki_index_
                period: 24h

        # OBS/S3 storage configuration (Loki-native; used by grafana/loki-distributed)
        storage_config:
            aws:
            endpoint: "http://192.168.1.182"
            region: "hh-nl40pu"
            s3forcepathstyle: true
            # credentials come from env via Secret; see extraEnvFrom below
            bucketnames: "loki"

        compactor:
            working_directory: /var/loki/compactor
            shared_store: s3
            retention_enabled: true
            delete_request_cancel_period: 24h

    # Expose a single stable entrypoint internally
    gateway:
    enabled: true
    replicas: 2
    maxUnavailable: 1

    distributor:
    replicas: 2
    maxUnavailable: 1
    extraEnvFrom:
        - secretRef:
            name: loki-local-aws-credentials

    ingester:
    replicas: 2
    maxUnavailable: 1
    persistence:
        enabled: true
        size: 20Gi
        # storageClassName: standard
    resources:
        requests:
        cpu: 500m
        memory: 1Gi
        limits:
        cpu: "1"
        memory: 2Gi
    extraEnvFrom:
        - secretRef:
            name: loki-local-aws-credentials

    querier:
    replicas: 2
    maxUnavailable: 1
    resources:
        requests:
        cpu: 500m
        memory: 1Gi
        limits:
        cpu: "1"
        memory: 2Gi
    extraEnvFrom:
        - secretRef:
            name: loki-local-aws-credentials

    query-frontend:
    replicas: 2
    maxUnavailable: 1
    resources:
        requests:
        cpu: 250m
        memory: 512Mi
        limits:
        cpu: "1"
        memory: 1Gi
    extraEnvFrom:
        - secretRef:
            name: loki-local-aws-credentials

    query-scheduler:
    replicas: 2
    maxUnavailable: 1
    resources:
        requests:
        cpu: 250m
        memory: 512Mi
        limits:
        cpu: "1"
        memory: 1Gi
    extraEnvFrom:
        - secretRef:
            name: loki-local-aws-credentials

    index-gateway:
    replicas: 2
    maxUnavailable: 1
    persistence:
        enabled: true
        size: 10Gi
        # storageClassName: standard
    resources:
        requests:
        cpu: 250m
        memory: 512Mi
        limits:
        cpu: "1"
        memory: 1Gi
    extraEnvFrom:
        - secretRef:
            name: loki-local-aws-credentials

    compactor:
    replicas: 1
    persistence:
        enabled: true
        size: 20Gi
    resources:
        requests:
        cpu: 250m
        memory: 512Mi
        limits:
        cpu: "1"
        memory: 1Gi
    extraEnvFrom:
        - secretRef:
            name: loki-local-aws-credentials

    ruler:
    enabled: false
    ```

    :::note
    This deployment uses **TSDB (Time Series Database)** as the storage engine for Grafana Loki instead of the legacy **boltdb-shipper**. TSDB integrates the index and chunks into unified blocks, reducing object count and improving query performance. It was introduced to address the scalability and operational limits of boltdb-shipper, and since Loki v2.8 it has been the default and recommended backend for distributed and cloud-hosted deployments.

    When logs are stored in **Open Telekom Cloud OBS** (an S3-compatible object store), TSDB offers significant advantages: fewer write operations, faster queries, and lower latency in communication with the object store. It also simplifies maintenance by embedding compaction and retention directly into the engine, eliminating the need for manual index merging. These improvements make TSDB a better fit for high-availability environments and long-term log retention.

    Boltdb-shipper remains supported for small or legacy clusters but is no longer the preferred option. For production workloads using external storage, TSDB provides the required reliability, performance, and forward compatibility.
    :::

5. Add the Grafana Labs Helm repository and install Loki:

    ```bash
    helm repo add grafana https://grafana.github.io/helm-charts
    helm repo update

    helm install loki grafana/loki-distributed \
    --namespace monitoring \
    --values loki-values-obs.yaml \
    --set grafana.enabled=false \
    --set promtail.enabled=false
    ```

## Installing Fluent Bit as Log Forwarder

Fluent Bit is a lightweight, high-performance log processor that collects container logs, enriches them with Kubernetes metadata, and forwards them to Loki using its native output plugin.It acts as the central log collector in the cluster, running as a `DaemonSet`, collecting logs from every node and container in the CCE cluster, parsing and enriching them with Kubernetes metadata, and finally forwarding them to Grafana Loki.

Create a values file called **values-fluentbit.yaml**:

```yaml title="values-fluentbit.yaml"
# Use the backend type to set Loki
backend:
  type: loki
  loki:
    host: loki-loki-distributed-gateway.monitoring.svc.cluster.local
    port: 80
    tenant_id: default
    labels: '{cluster="cce",namespace="${kubernetes[''namespace_name'']}",pod="${kubernetes[''pod_name'']}",container="${kubernetes[''container_name'']}"}'

serviceAccount:
  create: true

# Consolidated config section with all components
config:
  inputs: |
    [INPUT]
        Name              tail
        Path              /var/log/containers/*.log
        Parser            docker
        Tag               kube.*
        Mem_Buf_Limit     5MB
        Skip_Long_Lines   On
        Refresh_Interval  10

  filters: |
    [FILTER]
        Name                kubernetes
        Match               kube.*
        Merge_Log           On
        Keep_Log            On
        Labels              On
        Annotations         On
        K8S-Logging.Parser  On
        K8S-Logging.Exclude On

  outputs: |
    [OUTPUT]
        Name                loki
        Match               *
        Host                loki-loki-distributed-gateway.monitoring.svc.cluster.local
        Port                80
        tenant_id           default
        labels              cluster=cce,namespace=$kubernetes['namespace_name'],pod=$kubernetes['pod_name'],container=$kubernetes['container_name']
        auto_kubernetes_labels on
        label_keys          $kubernetes['namespace_name'],$kubernetes['pod_name'],$kubernetes['container_name']

resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 200m
    memory: 256Mi
```

and deploy via Helm:

```bash
helm repo add fluent https://fluent.github.io/helm-charts
helm repo update

helm upgrade --install fluent-bit fluent/fluent-bit   \
--namespace monitoring   \
-f values-fluentbit.yaml
```

## Installing Grafana