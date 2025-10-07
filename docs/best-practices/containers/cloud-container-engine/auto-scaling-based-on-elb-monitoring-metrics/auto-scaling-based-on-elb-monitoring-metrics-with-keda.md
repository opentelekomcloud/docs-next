---
id: auto-scaling-based-on-elb-monitoring-metrics-with-keda
title: Auto Scaling Based on ELB Monitoring Metrics with KEDA
tags: [cce, elb, hpa, prometheus, keda, cloudeye]
---

# Auto Scaling Based on ELB Monitoring Metrics with KEDA

This article demonstrates how to implement auto scaling using [KEDA (Kubernetes Event-driven Autoscaling)](https://keda.sh/) with ELB monitoring metrics.

## Prerequisites

Before following this guide, ensure you have completed the environment setup as described [here](auto-scaling-based-on-elb-monitoring-metrics.md).

Additionally, you need:

- Basic understanding of KEDA concepts including **ScaledObject**

## Solution Design

This section describes an auto scaling solution based on ELB monitoring metrics using KEDA. Compared with CPU/memory usage-based auto scaling, KEDA-based auto scaling using ELB QPS data is more targeted, timely, and provides additional features such as scaling to/from zero.
KEDA acts as a bridge between external metric sources and Kubernetes scaling decisions.

The implementation scheme is as follows:

- Set a ScaledObject to use ELB monitoring data as auto scaling metrics

**Key Benefits of KEDA over HPA:**

- **Scale to/from Zero**: KEDA can scale workloads down to zero replicas during idle periods, saving resources
- **Multiple Scalers**: Can combine different triggers (CPU, custom metrics, external APIs)

![**Figure 1** ELB traffic flows and monitoring
data](/img/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics/keda.png)

## Installing KEDA

### Installing KEDA with Helm

On the bastion host, install KEDA using Helm:

```

helm repo add kedacore https://kedacore.github.io/charts
helm repo update
kubectl create namespace keda
helm install keda kedacore/keda --namespace keda

```

### Verifying KEDA Installation

Verify that KEDA is running properly:

```

kubectl get pods -n keda

```

You should see the KEDA operator and metrics server pods running.

## Creating a ScaledObject

After that the data is being reported by the exporter to Prometheus, you can create a ScaledObject policy for auto scaling.

### Basic ScaledObject Configuration

Create a **ScaledObject** custom resource. The inbound traffic of the ELB load balancer is used to trigger scale-out. When the value of `m4_ncps` (new connections per second) exceeds `100`, the nginx Deployment will be scaled.

```yaml title="nginx-scaledobject.yaml"
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: nginx
  namespace: default
spec:
  scaleTargetRef:
    name: nginx
  minReplicaCount: 1
  maxReplicaCount: 10
  cooldownPeriod: 300  
  triggers:
  - type: prometheus
    metadata:
      serverAddress: http://prometheus-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090
      threshold: '100'
      query: opentelekomcloud_sys_elb_m4_ncps{lbaas_instance_id="INSTANCE_ID"} # Replace INSTANCE_ID with your ELB instance ID
      activationThreshold: '20'  
```

:::important
The scaledObject must be created in the same namespace as the target Deployment.
:::

### Advanced ScaledObject Configuration 

For production environments, you may need more advanced configurations. For example, you can combine multiple metrics (new connections and concurrent connections) to make scaling decisions. You can also adjust parameters like `pollingInterval` and `cooldownPeriod` to fine-tune the scaling behavior.

```yaml title="nginx-scaledobject.yaml"
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: nginx
  namespace: default
spec:
  scaleTargetRef:
    name: nginx
  minReplicaCount: 1
  maxReplicaCount: 20
  pollingInterval: 15  # Check metrics every 15 seconds
  cooldownPeriod: 180  # Wait 3 minutes before scaling down
  advanced:
    scalingModifiers:
      target: "100"
      activationTarget: "20"
      metricType: "AverageValue"
      # Combine new connections and concurrent connections
      formula: "new_connections * 2 + concurrent_connections * 0.1"
  triggers:
  - type: prometheus
    name: new_connections
    metadata:
      serverAddress: http://prometheus-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090
      query: opentelekomcloud_sys_elb_m4_ncps{lbaas_instance_id="INSTANCE_ID"} # Replace INSTANCE_ID with your ELB instance ID
      threshold: '1'  # Will be overridden by scalingModifiers
  - type: prometheus  
    name: concurrent_connections
    metadata:
      serverAddress: http://prometheus-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090
      query: opentelekomcloud_sys_elb_m1_cps{lbaas_instance_id="INSTANCE_ID"} # Replace INSTANCE_ID with your ELB instance ID
      threshold: '1'  # Will be overridden by scalingModifiers
```

### Applying the ScaledObject

Apply the ScaledObject configuration:

```bash
kubectl apply -f nginx-scaledobject.yaml
```

### Testing the Scaling

After the ScaledObject is created, perform a pressure test on the workload (accessing the pods through ELB). Then, the KEDA scaler determines whether scaling is required based on the configured value.

Monitor the scaling events:

```bash
kubectl get scaledobject nginx -w
# KEDA creates HPA objects internally
kubectl get hpa -w 
```