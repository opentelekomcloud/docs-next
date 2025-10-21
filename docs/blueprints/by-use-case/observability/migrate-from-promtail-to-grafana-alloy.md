---
id: migrate-from-promtail-to-grafana-alloy
title: Migrating from Promtail to Grafana Alloy
tags: [cce, observability, logging, grafana, loki, alloy, promtail, migration]
sidebar_position: 5
---

# Migrating from Promtail to Grafana Alloy

With Promtail reaching end-of-life on March 2, 2026, migrating to Grafana Alloy is essential for maintaining a supported and future-proof logging infrastructure. This blueprint guides you through converting your existing Promtail configuration to Alloy and deploying it on Cloud Container Engine (CCE). If you're currently running Promtail as described in [Aggregate CCE Logs with Promtail & Grafana Loki](/docs/blueprints/by-use-case/observability/aggregate-cce-logs-with-promtail-and-grafana-loki), this guide provides a clear path forward.

## Why Migrate to Grafana Alloy?

Grafana Alloy replaces Promtail as the actively maintained log collection agent and offers significant advantages beyond simple log collection. As a unified telemetry collector, Alloy natively supports logs, metrics, traces, and profiles, allowing you to consolidate multiple specialized collectors into a single agent per node. Its component-based architecture provides flexibility to adapt to changing requirements, while enterprise-grade features like clustering, GitOps support, and advanced debugging capabilities ensure production readiness.

## Prerequisites

Before migrating, ensure you have the following:

- An existing Promtail configuration file (see [Aggregate CCE Logs with Promtail & Grafana Loki](/docs/blueprints/by-use-case/observability/aggregate-cce-logs-with-promtail-and-grafana-loki))
- Grafana Alloy installed on your cluster (see [Aggregate CCE Logs with Grafana Alloy & Grafana Loki](/docs/blueprints/by-use-case/observability/aggregate-cce-logs-with-grafana-alloy-and-grafana-loki))

## Migration Approaches

Grafana Alloy supports two migration paths depending on your requirements and timeline.

### Convert Configuration (Recommended)

Converting your Promtail configuration to Alloy's native format allows you to leverage all of Alloy's features and ensures long-term maintainability. The built-in `convert` command automates most of the conversion process, translating YAML-based Promtail configurations into Alloy's component-based format.

### Run Promtail Configuration Natively
For testing or temporary migration scenarios, Alloy can run Promtail configurations directly. This approach requires no configuration changes but doesn't provide access to Alloy's extended capabilities. This method is not discussed in this blueprint as it is intended for short-term use only. Visit [Run a Promtail configuration](https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/#run-a-promtail-configuration) for more details.


## Converting Promtail Configuration to Alloy
The Alloy CLI provides a conversion tool that translates Promtail YAML configurations into Alloy's native format. To run the conversion:

1. Download the appropriate Alloy binary for your operating system from the [Alloy GitHub releases page](https://github.com/grafana/alloy/releases)
2. Extract the binary and make it executable:
  ```bash
  unzip alloy-linux-amd64.zip
  mv alloy-linux-amd64 alloy
  chmod +x ./alloy
  ```
3. Run the following command to convert your configuration:
  ```bash
  ./alloy convert --source-format=promtail --output=<OUTPUT_CONFIG_PATH> <INPUT_CONFIG_PATH>
  ```

Replace `<INPUT_CONFIG_PATH>` with the full path to your Promtail configuration and `<OUTPUT_CONFIG_PATH>` with the desired output path for the Alloy configuration.

:::tip Extracting Promtail Configuration from Kubernetes
If you deployed Promtail using Helm (as described in [Aggregate CCE Logs with Promtail & Grafana Loki](/docs/blueprints/by-use-case/observability/aggregate-cce-logs-with-promtail-and-grafana-loki)), your configuration is stored as a Kubernetes secret. Before running the conversion command, extract the current Promtail configuration from the cluster using the following command:

```bash
kubectl get secret promtail -n monitoring -o jsonpath="{.data.promtail\.yaml}" | base64 --decode > promtail-config.yaml
```
Once extracted, use this file as input for the conversion process.

:::


:::important 
The Promtail Helm chart stores the configuration in a secret with the data key `promtail.yaml`. If you customized your Helm installation with a different release name or namespace, adjust the secret name in the extraction command accordingly.
:::

### Generating a Diagnostic Report

To understand conversion warnings and potential issues, generate a detailed report using the `--report` flag:

```bash
./alloy convert --source-format=promtail --report=<OUTPUT_REPORT_PATH> --output=<OUTPUT_CONFIG_PATH> <INPUT_CONFIG_PATH>
```

The diagnostic report highlights areas requiring manual attention, such as tracing configurations and metrics that differ between Promtail and Alloy.

### Handling Conversion Errors

If the conversion encounters issues, diagnostic information is written to `stderr`. For non-critical errors, you can force conversion using the `--bypass-errors` flag:

```bash
./alloy convert --source-format=promtail --bypass-errors --output=<OUTPUT_CONFIG_PATH> <INPUT_CONFIG_PATH>
```

:::danger
Using `--bypass-errors` may result in behavioral differences between the original Promtail configuration and the converted Alloy configuration. Thoroughly test the converted configuration in a non-production environment before deploying to production.
:::


### Configuration Differences to Consider

**Positions File Location:** Alloy stores the positions file at a different path than Promtail. If you have persistent volumes or specific paths configured for Promtail's positions file, update your storage configuration to use Alloy's default locations.

**Metric Names:** Alloy exposes different metric names compared to Promtail. Update any dashboards, alerts, or monitoring queries that reference Promtail-specific metrics.

**Service Discovery** For CCE deployments, ensure the converted `discovery.kubernetes` component restricts discovery to pods on the same node as the Alloy pod. Update the configuration as follows:

```
discovery.kubernetes "pods" {
  role = "pod"
  
  selectors {
    role = "pod"
    field = "spec.nodeName=" + coalesce(sys.env("HOSTNAME"), constants.hostname)
  }
}
```

## Deploying Converted Configuration on CCE

Once you have a converted Alloy configuration, deploy it to your CCE cluster following the approach outlined in [Aggregate CCE Logs with Grafana Alloy & Grafana Loki](/docs/blueprints/by-use-case/observability/aggregate-cce-logs-with-grafana-alloy-and-loki).

Alternatively, update your existing Alloy configuration to reference the new converted configuration.
 
### Creating the ConfigMap

Store your converted configuration in a ConfigMap:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: alloy-logs-config
  namespace: monitoring
data:
  config: |
    # Paste your converted Alloy configuration here
```

Apply the ConfigMap:

```bash
kubectl apply -f alloy-configmap.yaml
```