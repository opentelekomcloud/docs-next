---
id: aggregate-cce-logs-with-fluentbit-and-grafana-loki
title: Aggregate CCE Logs with Fluent Bit & Grafana Loki
tags: [cce, observability, logging, grafana, loki, fluent-bit]
sidebar_position: 3
---

# Aggregate CCE Logs with Fluent Bit & Grafana Loki

This blueprint explains how to collect and centralize logs from Cloud Container Engine (CCE) workloads using [Fluent Bit](https://fluentbit.io/) and [Grafana Loki](https://grafana.com/oss/loki/). It covers the end-to-end setup for forwarding logs from CCE nodes and containers to a centralized Loki instance, enabling efficient querying, visualization, and troubleshooting through Grafana dashboards. The goal is to provide a consistent and scalable logging approach for Kubernetes environments running on Open Telekom Cloud.

[Fluent Bit](https://fluentbit.io/) is a lightweight, high-performance log and metrics processor designed for cloud and containerized environments. It collects data from various sources, processes and filters it, and then forwards it to multiple destinations such as Loki, Elasticsearch, or cloud logging services. Built with minimal resource consumption in mind, Fluent Bit integrates seamlessly with Kubernetes through `DaemonSets`, making it an efficient choice for aggregating logs from all nodes and containers in a cluster.

## Installing Grafana Loki

If you don’t already have a Grafana Loki instance running, you can set it up first before proceeding with log aggregation. The installation process is covered in detail in the companion blueprint [Deploy Grafana Loki on CCE](/docs/blueprints/by-use-case/observability/deploy-grafana-loki-on-cce), which explains how to deploy Loki in microservices mode on Cloud Container Engine (CCE) with Open Telekom Cloud Object Storage (OBS) as the backend. Once Loki is up and running, you can continue here to install and configure Fluent-Bit and start collecting and centralizing logs from your CCE workloads.

## Installing Fluent Bit as Log Forwarder

Fluent Bit, as already mentioned, acts as the central log collector in the cluster, running as a `DaemonSet`, collecting logs from every node and container in the CCE cluster, parsing and enriching them with Kubernetes metadata, and finally forwarding them to Grafana Loki.

Create a values file called **values-fluentbit.yaml**:

```yaml title="values-fluentbit.yaml"
elasticsearch:
  enabled: false

opensearch:
  enabled: false

kind: DaemonSet

config:
  service: |
    [SERVICE]
        Daemon Off
        Flush 1
        Log_Level info
        Parsers_File /fluent-bit/etc/parsers.conf
        Parsers_File /fluent-bit/etc/conf/custom_parsers.conf
        HTTP_Server On
        HTTP_Listen 0.0.0.0
        HTTP_Port 2020
        Health_Check On

  inputs: |
    [INPUT]
        Name tail
        Path /var/log/containers/*.log
        Exclude_Path /var/log/containers/*fluent-bit*.log
        multiline.parser docker, cri
        Tag kube.*
        Mem_Buf_Limit 50MB
        Skip_Long_Lines On
        Refresh_Interval 10

  filters: |
    [FILTER]
        Name kubernetes
        Match kube.*
        Kube_URL https://kubernetes.default.svc:443
        Kube_CA_File /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        Kube_Token_File /var/run/secrets/kubernetes.io/serviceaccount/token
        Kube_Tag_Prefix kube.var.log.containers.
        Merge_Log On
        Keep_Log Off
        K8S-Logging.Parser On
        K8S-Logging.Exclude On
        Labels Off
        Annotations Off

    [FILTER]
        Name modify
        Match kube.*
        Remove stream
        Remove time
        Remove kubernetes.container_hash
        Remove kubernetes.pod_id

  outputs: |
    [OUTPUT]
        Name loki
        Match kube.*
        Host loki-gateway.monitoring.svc.cluster.local
        Port 80
        uri /loki/api/v1/push
        labels job=fluent-bit, namespace=$kubernetes['namespace_name'], pod=$kubernetes['pod_name'], container=$kubernetes['container_name']
        remove_keys kubernetes,host,container_id
        line_format json
        auto_kubernetes_labels off

  customParsers: |
    [PARSER]
        Name docker_no_time
        Format json
        Time_Keep Off
        Time_Key time
        Time_Format %Y-%m-%dT%H:%M:%S.%L

resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 256Mi

tolerations:
  - operator: Exists
    effect: NoSchedule
  - operator: Exists
    effect: NoExecute

securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  readOnlyRootFilesystem: true
  allowPrivilegeEscalation: false
  capabilities:
    drop:
      - ALL

serviceMonitor:
  enabled: false

hostNetwork: false
dnsPolicy: ClusterFirst
```

and deploy via Helm:

```bash
helm repo add fluent https://fluent.github.io/helm-charts
helm repo update

helm upgrade --install fluent-bit fluent/fluent-bit   \
-f values-fluentbit.yaml \
--namespace monitoring --create-namespace \
--reset-values
```

## Installing Grafana (Optional)

For verification, we’ll install Grafana with Helm and include a simple demo dashboard to confirm that logs are reaching Loki. This lightweight setup is only for validation and smoke testing. For most production clusters, the recommended approach is to deploy the [kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/README.md) bundle, which provides Grafana together with Prometheus, Alertmanager, and curated dashboards, offering tighter integration and easier ongoing operations.

Create a values file called **values-grafana.yaml**:

```yaml title="values-promtail.yaml"
adminUser: admin

persistence:
  enabled: true
  size: 5Gi
  accessModes:
    - ReadWriteOnce
  # storageClassName: ""

service:
  enabled: true
  type: ClusterIP
  port: 80

resources:
  requests:
    cpu: 100m
    memory: 256Mi
  limits:
    cpu: 500m
    memory: 512Mi

datasources:
  datasources.yaml:
    apiVersion: 1
    datasources:
      - name: Loki
        type: loki
        access: proxy
        url: http://loki-gateway.monitoring.svc.cluster.local
        jsonData:
          maxLines: 1000
          derivedFields:
            - datasourceUid: Loki
              matcherRegex: "traceID=(\\w+)"
              name: TraceID
              url: "$${__value.raw}"
        isDefault: true
        editable: true

dashboardProviders:
  dashboardproviders.yaml:
    apiVersion: 1
    providers:
      - name: 'default'
        orgId: 1
        folder: ''
        type: file
        disableDeletion: false
        editable: true
        options:
          path: /var/lib/grafana/dashboards/default

dashboards:
  default:
    loki-logs:
      gnetId: 15141
      revision: 1
      datasource: Loki

grafana.ini:
  server:
    root_url: "%(protocol)s://%(domain)s:%(http_port)s/"
  analytics:
    check_for_updates: true
    check_for_plugin_updates: true
  log:
    mode: console
  paths:
    data: /var/lib/grafana/
    logs: /var/log/grafana
    plugins: /var/lib/grafana/plugins
    provisioning: /etc/grafana/provisioning

securityContext:
  runAsNonRoot: true
  runAsUser: 472
  runAsGroup: 472
  fsGroup: 472
  allowPrivilegeEscalation: false
  capabilities:
    drop:
      - ALL

serviceMonitor:
  enabled: false

rbac:
  create: true
  pspEnabled: false

serviceAccount:
  create: true
  autoMount: true
```

and deploy via Helm:

```bash
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

helm upgrade --install grafana grafana/grafana \
-f values-grafana.yaml \
-n monitoring --create-namespace \
--set "adminPassword=$(openssl rand -base64 24)" \
--reset values
```

Go to *Grafana* -> *Dashboards* and click the dashboard we provisioned as bundle with the Helm Chart *Loki Kubernetes Logs*:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/Screenshot_from_2025-10-09_11-09-06.png)

:::tip
The Grafana admin password can be found in `grafana` secret in monitoring namespace.
:::
