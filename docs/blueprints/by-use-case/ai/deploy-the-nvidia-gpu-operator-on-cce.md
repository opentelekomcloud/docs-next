---
id: deploy-the-nvidia-gpu-operator-on-cce
title: Deploy the NVIDIA GPU Operator on CCE
tags: [nvidia,nvidia-operator,gpu, ai]
---

# Deploy the NVIDIA GPU Operator on CCE

The [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) is a critical tool for effectively managing GPU resources in Kubernetes clusters. It serves as an abstraction layer over Kubernetes APIs, automating tasks such as dynamic provisioning, driver updates, resource allocation, and optimization for GPU-intensive workloads, thereby simplifying the deployment and management of GPU-accelerated applications. Its functionality extends to dynamic provisioning of GPUs on demand, managing driver updates, optimizing resource allocation for varied workloads, and integrating with monitoring tools for comprehensive insights into GPU usage and health. This guide outlines how to deploy the NVIDIA GPU Operator on CCE cluster. The process involves preparing GPU nodes, installing necessary components, configuring the cluster for GPU support, deploying an application leveraging GPUs, and verifying functionality.

## Prerequisites

This blueprint requires:

- Access to the CCE cluster with **kubectl**.
- Helm installed on your system.

## Preparing & Configuring a GPU Node Pool

Go to the *Open Telekom Cloud console* and choose the specific cluster you want to add the GPU node pool to. At the left sidebar select *Nodes* and click  *Create Node Pool*.

### Node Pool Configuration

Use the following values to configure the newly created GPU Node Pool:

    - **Name**: Assign a meaningful name to your GPU node pool, such as `gpu-workers`.
    - **Flavor Selection**: Choose a flavor that includes GPU resources. Look for options like `pi2.2xlarge` or similar GPU-accelerated instances available.
    - **Annotations**: If required by your cluster's configuration, add any necessary annotations.
    - **Taints or Tolerations**: Set taints or tolerations to manage pod scheduling. For GPU nodes, you might set a taint like `nvidia.com/gpu=true:NoExecute` and ensure pods requiring GPUs have the appropriate toleration.
    
    ![image](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/blueprints/by-use-case/ai/nvidia-operator/create-node-pool.png)

After creating the Node Pool scale it to the desired size.

### Verification

Wait for some minutes until the nodes get provisioned and check if they have successfully joined the cluster with the following command:

     ```bash
     kubectl get nodes --show-labels | grep "nvidia"
     ```

:::info
New GPU nodes should contain a label with `accelerator` as key and `nvidia*` as value (e.g.  **accelerator=nvidia-t4**).
:::

## Installing the NVIDIA GPU Plugin

### Installation

From sidebar select *Add-ons* and install the **CCE AI Suite (NVIDIA GPU)**.
  
    <center>
    ![image](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/blueprints/by-use-case/ai/nvidia-operator/install-plugin.png)
    </center>

### Plugin Configuration

For more information see [CCE AI Suite (NVIDIA GPU)](https://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html).
    ![image](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/blueprints/by-use-case/ai/nvidia-operator/configure-plugin.png)

  :::caution
  The selected driver must be compatible with the GPU nodes and supported by NVIDIA GPU Operator, otherwise the cluster will not be able to allocate GPU resources. Check supported drivers at [Platform Support](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html).
  :::

## Deploying the NVIDIA GPU Operator via Helm

  Create a `values.yaml` file to include the required Helm Chart configuration values:

```yaml title="values.yaml"
  hostPaths:
    driverInstallDir: "/usr/local/nvidia/"

  driver:
    enabled: false

  toolkit:
    enabled: false
```

:::important

- `hostPaths.driverInstallDir`: The driver installation directory on CCE is different. *Do not change* this value!
- `driver.enabled`: Driver installation is disabled because it's already installed via CCE AI Suite.
- `toolkit.enabled`: The container toolkit installation is disabled because it's already installed via CCE AI Suite.

:::

Now deploy the operator via helm:

```bash
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia
helm repo update

helm install --wait gpu-operator \
  -n gpu-operator --create-namespace \
  nvidia/gpu-operator \
  -f values.yaml \
  --version=v24.9.2
```

## Deploying an application with GPU Support

1. **Create a Pod Manifest**: For example, deploying a CUDA job.

```yaml title="cuda-example.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: cuda-vectoradd
spec:
  restartPolicy: OnFailure
  containers:
  - name: cuda-vectoradd
    image: "nvcr.io/nvidia/k8s/cuda-sample:vectoradd-cuda11.7.1-ubuntu20.04"
    resources:
      limits:
        nvidia.com/gpu: 1
```

2. **Apply the Manifest**:

```bash
kubectl apply -f cuda-example.yaml
 ```

### Validation

1. **Check Pod Status**: Ensure pods are running.

```bash
kubectl get pods -n default
```

2. **Verify Logs**: Check logs for GPU activity.

```bash
kubectl logs -f cuda-example-<pod-name> -n default
```

The containers' logs should indicate that the operation was succesfull, e.g.:

```bash
[Vector addition of 50000 elements]
Copy input data from the host memory to the CUDA device
CUDA kernel launch with 196 blocks of 256 threads
Copy output data from the CUDA device to the host memory
Test PASSED
Done
```

:::tip
If you are looking for more sample workloads visit [NVIDIA GPU Operator Verification: Running Sample GPU Applications](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/getting-started.html#verification-running-sample-gpu-applications).
:::

## Troubleshooting Tips

### Verifying NVIDIA Drivers are Installed on Nodes

Ensuring that the GPU nodes have the correct NVIDIA drivers is a critical first step. SSH into one of your GPU nodes and run:
  
  ```bash
# If the add-on version is earlier than 2.0.0, run the following command:
cd /opt/cloud/cce/nvidia/bin && ./nvidia-smi

# If the add-on version is 2.0.0 or later and the driver installation path is changed, run the following command:
cd /usr/local/nvidia/bin && ./nvidia-smi
  ```

or directly on the Container:

```bash
cd /usr/local/nvidia/bin && ./nvidia-smi
```

This command should display details such as the driver version, GPU utilization, and any active processes. If it fails or shows an outdated driver, this indicates that the node isn’t properly set up.

You can find more information [here](https://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html#verifying-the-add-on).

### Verifying Driver Compatibility

If drivers are missing or incompatible, verify that the CCE AI Suite is correctly installed and configured. Reinstalling or updating the suite might be necessary if the drivers aren’t correctly deployed. Follow the [instructions](https://docs.otc.t-systems.com/cloud-container-engine/umn/faqs/node/node_running/how_do_i_rectify_failures_when_the_nvidia_driver_is_used_to_start_containers_on_gpu_nodes.html).

Additionally, run the following command to check the CUDA version in the container:

```bash
cat /usr/local/cuda/version.txt
```

Check whether the CUDA version supported by the NVIDIA driver version of the node where the container is located contains the CUDA version of the container.

### Reviewing Logs

Check whether the NVIDIA driver is running properly. Log in to the node where the add-on is running and view the driver installation log in the following path:

```bash
/opt/cloud/cce/nvidia/nvidia_installer.log
```

View standard output logs of the NVIDIA container. Filter the container ID by running the following command:

```bash
docker ps -a | grep nvidia
```

View logs by running the following command:

```bash
docker logs Container ID
```

### Validating Pod Resource Requests

Make sure the nodes that have GPUs are properly decorated with the following, that instructs Kubernetes to schedule the pods only on 
nodes that have available GPUs.

```yaml
resources:
  limits:
    nvidia.com/gpu: 1
```

:::tip
Ensure that the requested number of GPUs does not exceed what’s available **on any** node.
:::

### Addressing Scheduling Conflicts

- **Resource Overcommitment:**  
  - If multiple pods are scheduled with GPU resource requests, ensure that the overall demand does not exceed the cluster’s capacity.
  - Overcommitting resources might lead to scheduling failures.
- **Taints and Tolerations:**  
  - GPU nodes may have specific taints (e.g., `nvidia.com/gpu=true:NoExecute`).
  - Verify that your GPU-enabled pods include the proper tolerations so that the scheduler can place the pods on the GPU nodes.

### Checking Operator Status

Any errors here might indicate issues that indirectly affect GPU resource allocation:

  ```bash
  helm list -n gpu-operator
  kubectl get pods -n gpu-operator
  ```

### Additional Information

:::info see also

- [How Do I Rectify Failures When the NVIDIA Driver Is Used to Start Containers on GPU Nodes?](https://docs.otc.t-systems.com/cloud-container-engine/umn/faqs/node/node_running/how_do_i_rectify_failures_when_the_nvidia_driver_is_used_to_start_containers_on_gpu_nodes.html)
- [What Should I Do If an Error Occurs When I Deploy a Service on the GPU Node?](https://docs.otc.t-systems.com/cloud-container-engine/umn/faqs/workload/workload_exception_troubleshooting/what_should_i_do_if_an_error_occurs_when_i_deploy_a_service_on_the_gpu_node.html#cce-faq-00109)
- [NVIDIA Container Toolkit Troubleshooting](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/1.17.4/troubleshooting.html)
:::
