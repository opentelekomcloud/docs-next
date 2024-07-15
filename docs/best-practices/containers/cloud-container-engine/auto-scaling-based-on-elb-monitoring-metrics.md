---
id: auto-scaling-based-on-elb-monitoring-metrics
title: Auto Scaling Based on ELB Monitoring Metrics
tags: [cce, elb, hpa, prometheus, prometheus-exporter, prometheus-adapter, qps, metrics, cloudeye]
---

# Auto Scaling Based on ELB Monitoring Metrics

By default, Kubernetes scales a workload based on resource usage metrics
such as CPU and memory. However, this mechanism cannot reflect the
real-time resource usage when traffic bursts arrive, because the
collected CPU and memory usage data lags behind the actual load balancer
traffic metrics. For some services (such as flash sale and social media)
that require fast auto scaling, scaling based on this rule may not be
performed in a timely manner and cannot meet these services\' actual
needs. In this case, auto scaling based on ELB QPS data can respond to
service requirements more timely.

## Solution Design

This section describes an auto scaling solution based on ELB monitoring
metrics. Compared with CPU/memory usage-based auto scaling, auto scaling
based on ELB QPS data is more targeted and timely.

The key of this solution is to obtain the ELB metric data and report the
data to Prometheus, convert the data in Prometheus to the metric data
that can be identified by HPA, and then perform auto scaling based on
the converted data.

The implementation scheme is as follows:
* Develop a Prometheus exporter to obtain ELB metric data 
* Convert the data into the format required by Prometheus 
* Report it to Prometheus. 
* Convert the Prometheus data into the Kubernetes metric API for the HPA controller to use.
* Set an HPA rule to use ELB monitoring data as auto scaling metrics.

:::note
This section uses [cloudeye-exporter](https://github.com/akyriako/cloudeye-exporter) as an example.
:::

![**Figure 1** ELB traffic flows and monitoring
data](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001160642449.png)

:::tip
Other metrics can be collected in the similar way.
:::

## Prerequisites

1. You must be familiar with Prometheus and be able to write the Prometheus exporter.
2. You have the Cloud Native Cluster Monitoring add-on installed in your cluster. This add-on supports clusters **of v1.17 or later**.
3. Set the deployment mode of Cloud Native Cluster Monitoring to the `server mode`.

## Building the Exporter Image

This section uses [cloudeye-exporter](https://github.com/akyriako/cloudeye-exporter) to
monitor load balancer metrics. 

### Installing Buildpacks

In this tutorial we build the image wite the help of [Buildpacks](https://buildpacks.io/). 

:::note
With this approach we are building an OCI image which is
compatible whit almost all of the container runtimes which support
OCI. In addition the image can also be build with Dockerfile and
docker build.
:::

```shell 
git clone https://github.com/akyriako/cloudeye-exporter
curl -sSL "https://github.com/buildpacks/pack/releases/download/v0.32.1/pack-v0.32.1-linux.tgz" | sudo tar -C /usr/local/bin/ --no-same-owner -xzv pack
```

### Building the image

The image name is `cloudeye-exporter` and the image version is `1.0`.

 ```bash
 cd cloudeye-exporter
 pack build cloudeye-exporter:v1 --builder gcr.io/buildpacks/builder:v1
 ```

### Pushing the image to SWR
   
1.  (Optional) Log in to the *SWR console*, choose *Organizations*
        in the navigation pane, and click *Create Organization* in the
        upper right corner of the page.
        
2. In the navigation pane, choose *My Images* and then click
        *Upload Through Client*. On the page displayed, click
        *Generate a temporary login command* and click
        ![image1](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001380832974.png) to
        copy the command.

3.  Run the login command copied in the previous step on the cluster
        node. If the login is successful, the message \"Login
        Succeeded\" is displayed.

4.  Tag the `cloudeye-exporter` image.

```bash
**docker tag** *{Image name 1*:*Tag 1}*/*{Image repository address}*/*{Organization name}*/*{Image name 2*:*Tag 2}* 
```

-   `{Image name 1:Tag 1}`: name and tag of the local image to be uploaded.
-   `{Image repository address}`: The domain name at the end of the login command in is the image repository address, which can be obtained on the SWR console.
-   `{Organization name}`: name of the organization created in.
-   `{Image name 2:Tag 2}`: desired image name and tag to be displayed on the SWR console.

:::note Example
`docker tag cloudeye-exporter:1.0 swr.eu-de.otc.t-systems.com/cloud-develop/cloudeye-exporter:1.0`
:::

5. Pushing the image to the image repository.

```bash
**docker push** *{Image repository address}*/*{Organizationname}*/*{Image name 2:Tag 2}*
```

:::note Example
`docker push swr.eu-de.otc.t-systems.com/cloud-develop/cloudeye-exporter:1.0`
:::

The following information will be returned upon a successful push:

```bash
The push refers to repository [swr.eu-de.otc.t-systems.com/cloud-develop/cloudeye-exporter]
030***: Pushed
v1.0: digest: sha256:eb7e3bbd*** size: **
```

To view the pushed image, go to the SWR console and refresh the *My Images* page.

## Installing Prometheus/Grafana Stack & cloudeye-exporter artifacts

Install Prometheus/Grafana stack via the kube-prometheus-stack chart.
The configuration values used will be autogenerated at
**deploy/manifests/prometheus-stack/override.yaml**. You could diff them
with the default values **default.yaml** to figure out the changes.

Run `./install-stack.sh`. This script will deploy, besides the
**kube-prometheus-stack**, all the **cloudeye-exporter** related artifacts.

## Deploying the Exporter

Prometheus can dynamically monitor pods if you add Prometheus
annotations to the pods (the default path is `/metrics`). This section
uses [cloudeye-exporter](https://github.com/akyriako/cloudeye-exporter)
as an example.

Common annotations in Prometheus are as follows:

-   `prometheus.io/scrape`: If the value is `true`, the pod will bemonitored.
-   `prometheus.io/path`: URL from which the data is collected. The default value is `/metrics`.
-   `prometheus.io/port`: port number of the endpoint to collect data from.
-   `prometheus.io/scheme`: Defaults to `http`. If HTTPS is configured for security purposes, change the value to `https`.

1.  Use kubectl to connect to the cluster.
2.  Create a secret, which will be used by **cloudeye-exporter** for
    authentication.

    a.  Create a copy of clouds.tpl template, name it **clouds.yml**
        file with the following content:
        -   `auth_url`: indicates the IAM endpoint, which can be obtained from [Regions and Endpoints](https://docs.otc.t-systems.com/en-us/endpoint/index.html).
        -   `project_name`: indicates the project name. On the *My Credential* page, view the project name and project ID in the *Projects* area.
        -   `access_key` and `secret_key`: You can obtain them from *Access Keys*.
        -   `region`: indicates the region name, which must correspond to the project in `project_name`.

    b.  Then encode it to base64 with the following command:

        ```shell
        base64 -i clouds.yaml 
        ```

    c.  Create the **cloudeye-exporter-clouds-secret.yaml** file with
        the following content:

        ```yaml title="cloudeye-exporter-clouds-secret.yaml"
        apiVersion: v1
        kind: Secret
        metadata:
          name: cloudeye-exporter-clouds
          namespace: default
        type: Opaque
        data:
          clouds.yaml: Z2xvYmFsOg************************************************************
        ```

    d.  Create secret and deploy the exporter.

        ```shell
        kubectl apply -f cloudeye-exporter-clouds-secret.yaml
        kubectl apply -f cloudeye-exporter-clouds-secret.yaml
        kubectl apply -f cloudeye-exporter-clouds-secret.yaml
        ```

## Getting ELB and ELB Listener IDs

In this example, the ELB metrics associated with the workload need to be
monitored. Therefore, the target workload must use the Service or
Ingress of the `LoadBalancer` type.

1.  View the access mode of the workload to be monitored and obtain the
    ELB ID and ELB listener ID.

    a.  On the CCE cluster console, choose *Networking*. On the
        *Services* or *Ingresses* tab page, view the Service or
        Ingress of the `LoadBalancer` type and click the load balancer
        to access the load balancer page and copy the ELB ID.

        ![image2](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001431432309.png)

    b.  On the *Listeners* tab, view the listener corresponding to the
        workload and copy the listener ID which corresponds to port `80`.

        ![image3](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001380992506.png)

2.  Export the Elastic Load Balancer\'s ID and listener ID as an env
    variables

     ```bash
     export ELB_ID="66872*****"
     export ELB_LISTENER_ID="94424*****"
     ```

## Installing Nginx Ingress Controller

Next, we are going to install the Nginx Ingress Controller using the
script **./install-ingress.sh**:

 ```bash title="install-ingress.sh"
 envsubst < nginx-ingress-controller/override.tpl  nginx-ingress-controller/override.yaml
 sleep 15

 helm upgrade --install -f nginx-ingress-controller/override.yaml --install ingress-nginx ingress-nginx \
 --repo https://kubernetes.github.io/ingress-nginx --namespace ingress-nginx --create-namespace
 ```

## Installing an Nginx Demo Workload

We are going to need a workload to test **HPA** and the autoscaling via our
custom **CloudEye** derived metrics. For that matter we will deploy a dummy
nginx deployment and service using the script **./install-workload.sh**:

 ```shell
 kubectl create namespace applications
 kubectl apply -f deploy/manifests/nginx-deployment.yaml
 kubectl apply -f deploy/manifests/nginx-ingress.yaml
 ```

## Installing prometheus-adapter

Next, and last step, of the installation sequence is the deployment of
**prometheus-adapter** that will give an additional custom metrics api
endpoint that will bind our custom **CloudEye** metrics with **HPA**
**./install-adapter.sh**:

 ```shell title="install-adapter.sh"
 envsubst < prometheus-adapter/override.tpl  prometheus-adapter/override.yaml
 sleep 15

 helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
 helm repo update

 helm upgrade --install --values prometheus-adapter/override.yaml prometheus-adapter prometheus-community/prometheus-adapter -n monitoring
 ```

The configuration values used for the prometheus-adapter chart will be
autogenerated at **deploy/manifests/prometheus-adapter/override.yaml**. You
could diff them with the default values **default.yaml** to figure out the
changes.

## Creating an HPA Policy

After the data reported by the exporter to Prometheus is converted into
the Kubernetes metric API by using the Prometheus adapter, you can
create an HPA policy for auto scaling.

1.  Create an HPA policy. The inbound traffic of the ELB load balancer
    is used to trigger scale-out. When the value of `m7_in_Bps`
    (inbound traffic rate) exceeds `1000`, the nginx Deployment will be
    scaled.

    ```yaml
    apiVersion: autoscaling/v2
    kind: HorizontalPodAutoscaler
    metadata:
      name: nginx
      namespace: default
    spec:
      scaleTargetRef:
        apiVersion: apps/v1
        kind: Deployment
        name: nginx
      minReplicas: 1
      maxReplicas: 10
      metrics:
        - type: Object
          object:
            metric:
              name: elb01_listener_m7_in_Bps
            describedObject:
              apiVersion: v1
              kind: Service
              name: cloudeye-exporter
            target:
              type: Value
              value: 1000
    ```

    ![**Figure 2** Created HPA Policy](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001606847653.png)

2.  After the HPA policy is created, perform a pressure test on the
    workload (accessing the pods through ELB). Then, the HPA controller
    determines whether scaling is required based on the configured
    value.

    In the *Events* dialog box, obtain scaling records in the *Kubernetes Event* column.

    ![**Figure 3** Scaling events](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001606845825.png)

## Appendix

### ELB Listener Metrics

The following table lists the Elastic Load Balancer Listener metrics that can be collected
using the method described in sections above.

| Metric            | Name                               | Unit         | Description                                                                                                                                                     |
| ----------------- | ---------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `m1_cps`            | Concurrent Connections             | Count        | Number of concurrent connections processed by a load balance                                                                                                    |
| `m1e_server_rps`    | Reset Packets from Backend Servers | Count/Second | Number of reset packets sent from the backend server to clients. These reset packages are generated by the backend server and then forwarded by load balancers. |
| `m1f_lvs_rps`       | Reset Packets from Load Balancers  | Count/Second | Number of reset packets sent from load balancers.                                                                                                               |
| `m21_client_rps`    | Reset Packets from Clients         | Count/Second | Number of reset packets sent from clients to the backend server. These reset packages are generated by the clients and then forwarded by load balancers.        |
| `m22_in_bandwidth`  | Inbound Bandwidth                  | bit/s        | Inbound bandwidth of a load balancer.                                                                                                                           |
| `m23_out_bandwidth` | Outbound Bandwidth                 | bit/s        | Outbound bandwidth of a load balancer.                                                                                                                          |
| `m2_act_conn`       | Active Connections                 | Count        | Number of current active connections.                                                                                                                           |
| `m3_inact_conn`     | Inactive Connections               | Count        | Number of current inactive connections.                                                                                                                         |
| `m4_ncps`           | New Connections                    | Count        | Number of current new connections.                                                                                                                              |
| `m5_in_pps`         | Incoming Packets                   | Count        | Number of packets sent to a load balancer.                                                                                                                      |
| `m6_out_pps`        | Outgoing Packets                   | Count        | Number of packets sent from a load balancer.                                                                                                                    |
| `m7_in_Bps`         | Inbound Rate                       | byte/s       | Number of incoming bytes per second on a load balancer.                                                                                                         |
| `m8_out_Bps`        | Outbound Rate                      | byte/s       | Number of outgoing bytes per second on a load balancer. 

### Developing an Exporter

Prometheus periodically calls the `/metrics` API of the exporter to obtain metric data. Applications only need to report monitoring data
through `/metrics`. You can select a Prometheus client in a desired language and integrate it into applications to implement the
`/metrics` API. For details about the client, see [Prometheus Client Libraries](https://prometheus.io/docs/instrumenting/clientlibs/). For
details about how to write the exporter, see [Writing Exporters](https://prometheus.io/docs/instrumenting/writing_exporters/).

The monitoring data must be in the format that Prometheus supports. Each
data record provides the ELB ID, listener ID, namespace where the
Service is located, Service name, and Service UID as labels, as shown in
the following figure.

![image5](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001381152106.png)

To obtain the preceding data, perform the following steps:

1.  Obtain all Services.

    The `annotations` field in the returned information contains the
    ELB associated with the Service.

    -   `kubernetes.io/elb.id`
    -   `kubernetes.io/elb.class`

2.  Use APIs in Querying Listeners to get the listener ID based on the
    load balancer ID obtained in the previous step.

3.  Obtain the ELB monitoring data.

    The ELB monitoring data is obtained using the CES APIs described in
    Querying Monitoring Data in Batches. For details about ELB
    monitoring metrics, see Monitoring Metrics. Example:

    -   `m1_cps`: number of concurrent connections
    -   `m5_in_pps`: number of incoming data packets
    -   `m6_out_pps`: number of outgoing data packets
    -   `m7_in_Bps`: incoming rate
    -   `m8_out_Bps`: outgoing rate

4.  Aggregate data in the format that Prometheus supports and expose the
    data through the /metrics` API.