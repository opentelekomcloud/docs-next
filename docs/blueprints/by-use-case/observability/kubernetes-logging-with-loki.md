---
id: kubernetes-logging-with-loki
title: CCE Logging with Grafana Loki & Promtail
tags: [cce, observability, logging, grafana, loki, promtail, kubernetes]
---

# CCE Logging with Grafana Loki & Promtail

In this blueprint, we'll consolidate all the logs generated in our Kubernetes cluster into a neat, real-time dashboard in Grafana.

[Grafana](https://grafana.com/) is an analytics and interactive visualization platform. It offers a rich variety of charts, graphs, and alerts and connects to a plethora of supported data sources such as Prometheus, time-series databases, or well-known RDBMS. Grafana allows you to query, visualize, and create alerts on your metrics regardless of where they are stored.

:::tip
Think of it as the equivalent of Kibana in the ELK stack.
:::

[Grafana Loki](https://grafana.com/oss/loki/) is a logs aggregation system designed to be horizontally scalable, highly available, and cost-effective. Inspired by Prometheus, Loki does not index the contents of the logs but rather a set of labels for each log stream. It was launched in 2018 by Grafana Labs.


![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_x7vfbTFPrJDX9n99xuigmw.webp)

Loki uses [Promtail](https://grafana.com/docs/loki/latest/send-data/promtail/) to aggregate logs. Promtail is a logs collector agent that collects, labels, and ships logs to Loki. It runs on each Kubernetes node, using the same service discovery as Prometheus and supporting similar methods for labeling, transforming, and filtering logs before their ingestion to Loki.

Loki groups log entries into streams and indexes them with labels, which reduces overall costs and the time between log entry ingestion and query availability.

:::tip
Think of Loki as the equivalent (not 1-to-1 but in a broader context) of Elasticsearch in the ELK stack.
:::

## Prerequisites

1.  **CCE** cluster.
2.  **Grafana** installation.
3.  **Grafana Loki** installation.
4.  **Promtail** agent on every node of the CCE cluster.

## Installing Grafana

The installation is straightforward using Helm. If you haven’t installed Helm on your workstation, you can do it either with brew on macOS:

```shell
brew install helm
```

or with the following bash commands on Debian/Ubuntu Linux:

```shell
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm --yes
```

Now, we can install the Helm chart for Grafana:

```shell
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install grafana grafana/grafana --namespace grafana --create-namespace
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_m8J4oWftIIhbRunvacQ9JA.webp)

:::note
By default, the `service/grafana` will be of type `ClusterIP`. If you are not working on CCE, you can use [MetalLB](https://metallb.io/) as a network load balancer and patch the service to be of type `LoadBalancer`. Alternatively, port-forwarding this service will suffice for now.
:::

## Installing Loki

Loki consists of multiple components/microservices that can be deployed in three different modes:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_dxVzmGkmFHgkuyJmW1VK3g.webp)

that can be deployed in **3 different modes**:

1.  [Monolithic](https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#monolithic-mode) mode: All of Loki’s microservice components run inside a single process as a single binary.
2.  [Simple Scalable](https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#simple-scalable-deployment-mode) mode:  Separate read and write paths.
3.  [Microservices](https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#microservices-mode) mode: Every Loki component runs as a distinct process.

:::important
The scalable installation requires an S3 compatible object store such as AWS S3, Google Cloud Storage, Open Telekom Cloud OBS, or a self-hosted store like MinIO. In monolithic deployment mode, **only** the filesystem can be used for storage.
:::

In this lab, we will use the **microservices** deployment mode with Open Telekom Cloud OBS as Loki’s storage. We will configure and install Loki and Promtail using Helm charts.

First, let's download the default chart values for each chart and make the necessary changes. For Loki, assuming you chose the `loki-distributed` chart:

```shell
helm show values grafana/loki-distributed > loki-distributed-overrides.yaml
```

1. If you are using S3 compatible storage, update the object and shared store target to S3 in your Helm chart values:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_m6H5W8D5FxdxunL0PYZjmQ.webp)

2. Configure your storage to point to the designated S3 bucket:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_be63glOSUO7fwc21h1KVDA.webp)

:::note
The format of S3 endpoint is `s3://{AK}:{SK}@{endpoint}/{region}/{bucket}`
:::

3. Next you have to enable the compactor:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_QQU5x7QDEmOBj95hOiAaAw.webp)

4. Then configure the compactor:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_SL6Snpm9qU_ubI3DrfPskA.webp)


5. Now that the Loki values are set, install Loki and then move on to Promtail:

```shell
helm upgrade --install --values loki-distributed-overrides.yaml loki grafana/loki-distributed -n grafana-loki --create-namespace
```

Get all the components that we installed from the Loki chart:

```
kubectl get all -n grafana-loki
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_0WVdeJICkfrez73x43r1bQ.webp)


## Installing Promtail

We need the endpoint of Loki’s gateway as the designated endpoint that Promtail will use to push logs to Loki. In our case, that would be `loki-loki-distributed-gateway.grafana-loki.svc.cluster.local`. Add this endpoint to the Promtail chart values:

```shell
helm show values grafana/promtail > promtail-overrides.yaml
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_-MaxuCNpIezRgFm-VQZ_ow.webp)

We are now ready to deploy Promtail. Run the command and wait for all pods to reach a Ready state:

```shell
helm upgrade --install --values promtail-overrides.yaml promtail grafana/promtail -n grafana-loki
```

## Configuring Grafana Data Sources & Dashboard

1. With all deployments completed, set up Grafana. As mentioned, Grafana has a simple service. Port-forward it and access Grafana directly from  `[http://localhost:8080/](http://localhost:8080/)`:

```
kubectl port-forward service/grafana 8080:80 -n grafana
```

:::note
You can also expose this service in other ways, either by assigning an external IP via a Load Balancer or as an ingress route through your chosen Ingress solution.
:::

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_dSCLtTxGHOeAawTkJGI0lg.webp)


2. You will need these credentials to log in. The default *user* is **admin**, but you will need to retrieve the password. Get all the `Secrets` in the **grafana** namespace:

```bash
kubectl get secrets -n grafana
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_t_0OqRNB4kaMlbUpQZkshQ.webp)

Extract and decode the password:

```bash
kubectl get secret grafana -n grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

3. Now logged into the Grafana Dashboard, add Grafana Loki as a data source:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_R2CxfRgIMj9uXGzYMcA0GA.webp)

Use the endpoint of the Grafana Loki gateway service as the URL `[http://loki-loki-distributed-gateway.grafana-loki.svc.cluster.local](http://loki-loki-distributed-gateway.grafana-loki.svc.cluster.local/)`. Test, save, and exit!

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_0ILMUg1ZbO5W--NfKjkeWQ.webp)

4. Finally, add a dashboard to view your logs. Start with an existing dashboard and tailor it to your needs. A good starting point is this dashboard: : https://grafana.com/grafana/dashboards/15141-kubernetes-service-logs/
   
Copy the dashboard template ID and paste it into the text field of your Grafana Dashboard import page:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_bPVWpLNj1oS71KIZQI6A9Q.webp)


Now all the pieces should come together, and you should be able to see logs from your Kubernetes workloads directly in your Grafana interface, providing an almost real-time experience:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_JhD38QI651EA3UW_LYF_qg.webp)
