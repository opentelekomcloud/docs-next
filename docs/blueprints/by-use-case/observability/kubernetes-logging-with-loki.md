---
id: kubernetes-logging-with-loki
title: Kubernetes Logging with Grafana Loki & Promtail
tags: [cce, observability, logging, grafana, loki, promtail]
---

# Kubernetes Logging with Grafana Loki & Promtail

After completing this lab, we will have consolidated all the logs generated in our Kubernetes cluster in a tidy, neat, real-time dashboard in Grafana.

We are going to need a:

1.  **CCE** cluster.
2.  **Grafana** installation.
3.  **Grafana Loki** installation.
4.  **Promtail** agent on every node of the CCE cluster.


What is Grafana?
----------------

[Grafana](https://grafana.com/) is an **analytics and interactive visualization platform**. It provides a rich variety of charts, graphs, and alerts and connects to plead of supported data sources as Prometheus, time-series databases or the known RDBMs. It allows you to query, visualize, create alerts on your metrics regardless where they are stored.

:::tip
You have to think of it as the equivalent of **Kibana** in the ELK stack.
:::

### Install Grafana

The installation is fairly simple and we are going to perform it via _Helm_. If you haven’t Helm already installed on your workstation you can do it either with _brew_ if you are working on MacOS:

```shell
brew install helm
```

or with the following bash commands if you are working on Debian/Ubuntu Linux:

```shell
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm --yes
```

Putting this behind, we can now install the Helm chart for Grafana:

```shell
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install grafana grafana/grafana --namespace grafana --create-namespace
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_m8J4oWftIIhbRunvacQ9JA.webp)

:::note
`service/grafana` _service would be of type `ClusterIP` _in a_ vanilla _installation, in case you are not working on CCE 
you can use [MetalLB](https://metallb.io/) as a network loadbalancer and have the service patched the service as of type `LoadBalancer`. Otherwise
port-forwarding this service will suffice for the time being.
:::

What is Grafana Loki & Promtail?
--------------------------------

[Grafana Loki](https://grafana.com/oss/loki/) is a **logs aggregation system**, more specifically as stated in their website: ”_is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost effective and easy to operate. It does not index the contents of the logs, but rather a set of labels for each log stream_.” It’s a fairly new open source project that aws started in 2018 at Grafana Labs.

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_x7vfbTFPrJDX9n99xuigmw.webp)

Loki uses _Promtail_ to aggregate logs. [Promtail](https://grafana.com/docs/loki/latest/clients/promtail/) is a **logs collector agent** that collects, (re)labels and ships logs to Loki. It is built specifically for Loki — _an instance of Promtail will run on each Kubernetes node_. It uses the exact same service discovery as Prometheus and support similar methods for labeling, transforming, and filtering logs before their ingestion to Loki.

Loki **doesn’t index** the actual text of the logs. The log entries are grouped into streams and then indexed with labels. In that way, Loki not only reduces the overall costs but additionally reduces the time between ingestion of log entries and their availability in queries.

It comes with its own query language, _LogQL_, which can be used from its own command-line interface or directly from Grafana. Last but not least, it can tightly integrate with the _Alert Manager_ of Prometheus — though, the last two are out of the scope of this article.

:::tip
You have to think of it as the equivalent (not 1–1 but in bigger context) of **Elasticsearch** in the ELK stack.
:::

### Configure and Install Loki

Loki, consists of multiple [components/microservices](https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/):

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_dxVzmGkmFHgkuyJmW1VK3g.webp)

that can be deployed in **3 different modes**:

1.  [Monolithic](https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#monolithic-mode) mode, all of Loki’s microservice components run inside a single process as a single binary.
2.  [Simple Scalable](https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#simple-scalable-deployment-mode) mode, if you want to separate read and write paths.
3.  [Microservices](https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#microservices-mode) mode, every Loki component runs as a distinct processes.

:::important
The scalable installation requires a **S3 compatible object store** such as AWS S3, Google Cloud Storage, Open Telekom Cloud OBS or a self-hosted store such as [MinIO](https://min.io/). In the _monolithic_ deployment mode **only** the filesystem can be used for storage.
:::

In this lab, we are going to use the _microservices_ deployment mode with [Open Telekom Cloud OBS](https://open-telekom-cloud.com/en/products-services/core-services/object-storage-service) as Loki’s storage. The installation (and essentially the configuration) of Loki and Promtail is performed by two distinct and independent charts.

First let’s download the default chart values for every chart and make the necessary changes. For Loki (given that you chose as well to go with the `loki-distributed` chart)

```shell
helm show values grafana/loki-distributed > loki-distributed-overrides.yaml
```

1. If you are planning to go with an S3 compatible storage and not with the filesystem, change the object and shared store target of s3
in your helm chart values:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_m6H5W8D5FxdxunL0PYZjmQ.webp)

2. and configure your storage to point to the designated S3 bucket.

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_be63glOSUO7fwc21h1KVDA.webp)

:::tip
The format of S3 endpoint is `s3://{AK}:{SK}@{endpoint}/{region}/{bucket}`
:::

3. Next you have to enable the compactor:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_QQU5x7QDEmOBj95hOiAaAw.webp)

4. and lastly you need to configure the compactor:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_SL6Snpm9qU_ubI3DrfPskA.webp)


5. Loki values are now set, let’s install it and move to Promtail:

```shell
helm upgrade --install --values loki-distributed-overrides.yaml loki grafana/loki-distributed -n grafana-loki --create-namespace
```

Get all the components that we installed from Loki chart:

```
kubectl get all -n grafana-loki
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_0WVdeJICkfrez73x43r1bQ.webp)


### Configure and Install Promtail

We are going to need the endpoint of Loki’s gateway as the designated endpoint that Promtail will use in order to push logs to Loki. In our case that would be `loki-loki-distributed-gateway.grafana-loki.svc.cluster.local`, so let’s add it in the Promtail chart values:

```shell
helm show values grafana/promtail > promtail-overrides.yaml
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_-MaxuCNpIezRgFm-VQZ_ow.webp)

We are ready to now to deploy Promtail. Run the command and wait for a bit till all pods come to a Ready state.

```shell
helm upgrade --install --values promtail-overrides.yaml promtail grafana/promtail -n grafana-loki
```

Configure Grafana Data Sources & Dashboard
------------------------------------------

1. All the deployments now are completed. It is time we set up our Grafana. As we saw before Grafana has a simple service, let’s then port-forward it and access the Grafana directly from `[http://localhost:8080/](http://localhost:8080/)`:

```
kubectl port-forward service/grafana 8080:80 -n grafana
```

:::note
Of course you are free to expose this service in a different way either with assigning to it an external IP by a Load Balancer or as an ingress route via the Ingress solution of choice.
:::

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_dSCLtTxGHOeAawTkJGI0lg.webp)


2. You are going to need those credentials in order to login. Default *user* is `admin`, but the *password* will need a bit of work to be retrieved. Get all the `Secrets` in the _grafana_ namespace:

```bash
kubectl get secrets -n grafana
```

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_t_0OqRNB4kaMlbUpQZkshQ.webp)

This is where our password lives. Let’s extract it and decode it:

```bash
kubectl get secret grafana -n grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

3. We are now logged in Grafana Dashboard. Next we need to add Grafana Loki as a data source:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_R2CxfRgIMj9uXGzYMcA0GA.webp)

As URL, use the endpoint of the Grafana Loki gateway service: `[http://loki-loki-distributed-gateway.grafana-loki.svc.cluster.local](http://loki-loki-distributed-gateway.grafana-loki.svc.cluster.local/)`; test, save and exit.

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_0ILMUg1ZbO5W--NfKjkeWQ.webp)

4. Last step, now we need to add a dashboard in order to see eventually our logs. At the very beginning you can step on the shoulders of existing ones and then tailor them according to your needs. A good stepping stone is this dashboard: https://grafana.com/grafana/dashboards/15141-kubernetes-service-logs/
   
Copy the dashboard template ID paste it in text field of your Grafana Dashboard import page:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_bPVWpLNj1oS71KIZQI6A9Q.webp)


Now all the puzzle pieces should come together and you should be able to see logs from your Kubernetes workloads directly into your Grafana interface as an almost real-time experience:

![image](/img/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki/1_JhD38QI651EA3UW_LYF_qg.webp)
