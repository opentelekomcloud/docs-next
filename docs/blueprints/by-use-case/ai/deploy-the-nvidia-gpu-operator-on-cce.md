---
id: deploy-the-nvidia-gpu-operator-on-cce
title: Deploy the NVIDIA GPU Operator on CCE
tags: [nvidia,nvidia-operator,gpu, ai]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
    
    ![image](/img/docs/blueprints/by-use-case/ai/nvidia-operator/create-node-pool.png)

After creating the Node Pool scale it to the desired size.

### Verification

Wait for some minutes until the nodes get provisioned and check if they have successfully joined the cluster with the following command:

     ```bash
     kubectl get nodes --show-labels | grep "nvidia"
     ```

:::info
New GPU nodes should contain a label with `accelerator` as key and `nvidia*` as value (e.g.  **accelerator=nvidia-t4**).
:::

## Installing the Driver with NVIDIA GPU Plugin

:::important Alternative Driver Installation Method
If your GPU nodes use **Ubuntu** or other **major Linux distribution**, you can bypass installing the **CCE AI Suite** plugin and install the NVIDIA driver directly on the nodes through the **Nvidia GPU Operator** (skip to [Deploying the NVIDIA GPU Operator via Helm](#deploying-the-nvidia-gpu-operator-via-helm)). 

This method is recommended if none of your GPU nodes are using specialized distributions like **HCE** or **openEuler**, as it allows the operator to manage the entire driver lifecycle for a more streamlined setup.
:::

### Installation

From sidebar select *Add-ons* and install the **CCE AI Suite (NVIDIA GPU)**.
  
    <center>
    ![image](/img/docs/blueprints/by-use-case/ai/nvidia-operator/install-plugin.png)
    </center>

### Plugin Configuration
When configuring the CCE AI Suite, you must provide a download link for the NVIDIA driver. 

:::caution
The selected driver must be compatible with both the GPU nodes and the NVIDIA GPU Operator; otherwise, the cluster will not be able to allocate GPU resources. It is crucial to **check for the most compatible driver version on the [NVIDIA GPU Operator Platform Support](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html)**. You can find and download drivers from the **[NVIDIA Driver](https://www.nvidia.com/download/index.aspx)**.
:::


Follow these steps to find and provide the correct driver download link:

1. **Find a Compatible Driver Version**:
   - Navigate to the [NVIDIA GPU Operator Platform Support](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html)
   - Scroll down to [GPU Operator Component Matrix](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html#gpu-operator-component-matrix). This table lists the specific component versions, including the **recommended NVIDIA driver versions**, that are tested and supported. For example for the NVIDIA GPU Operator **v25.3.1**, the recommended driver version is **570.158.01**.
  
![imag](/img/docs/blueprints/by-use-case/ai/nvidia-operator/driver-version.png)

2. **Get the Driver Download Link**:
   - Go to the official **[NVIDIA Driver](https://www.nvidia.com/download/index.aspx)** page.
   - Manually search for the driver by entering your GPU's specifications, such as Product Type (e.g., Tesla), Product Series, Operating System (Linux) based on the node flavor that you are using and click **Find** to search for drivers.
  ![img](/img/docs/blueprints/by-use-case/ai/nvidia-operator/driver-finding.png)
   - On the next page search for the **driver version** you identified in the previous step. Once you find the correct driver, click the view button to view the download page. Then right-click the **Download** button and copy the link address. This is the direct download link you will provide to the plugin.
   ![img](/img/docs/blueprints/by-use-case/ai/nvidia-operator/driver-download.png)

1. **Configure the Plugin**: Paste the driver download link you obtained in previous step into the **Path to custom driver** field of the plugin and click **Install**.
  
    ![image](/img/docs/blueprints/by-use-case/ai/nvidia-operator/configure-plugin.png)


:::info
For more information about the **CCE AI Suite (NVIDIA GPU)** plugin, see [CCE AI Suite (NVIDIA GPU)](https://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html).
:::

## NVIDIA GPU Operator

### Deploying via Helm

Create a `values.yaml` file to include the required Helm Chart configuration values based on your setup: 
- If you installed the NVIDIA driver using the **CCE AI Suite** (typically for HCE or openEuler nodes), use the configuration under **Driver managed by CCE AI Suite**. This setup informs the GPU Operator that the driver and toolkit are already present on the node.

- If you are using **Ubuntu** or other major Linux distribution and want the GPU Operator to manage the driver installation, use configurations under **Driver managed by GPU Operator**. This is the recommended approach for a streamlined setup on non-specialized operating systems.

<Tabs>
  <TabItem value="plugin" label="Driver managed by CCE AI Suite" default>
  ```yaml title="values.yaml"
  hostPaths:
    driverInstallDir: "/usr/local/nvidia/"

  driver:
    enabled: false

  toolkit:
    enabled: false
  ```

  :::important
  - `hostPaths.driverInstallDir`: The driver installation directory when managed by CCE AI Suite is different than default. **Do not change this value!**
  - `driver.enabled`: Driver installation is disabled because it's already installed via CCE AI Suite.
  - `toolkit.enabled`: The container toolkit installation is disabled because it's already installed via CCE AI Suite.
  :::

  </TabItem>
  <TabItem value="gpu-operator" label="Driver managed by GPU Operator">
  ```yaml title="values.yaml"
  driver:
    enabled: true

  toolkit:
    enabled: true
  ```
  :::important
  - `driver.enabled: true`: Allows the operator to download and install the appropriate NVIDIA driver on the nodes.
  - `toolkit.enabled: true`: Allows the operator to install the NVIDIA container toolkit, which is required for GPU-aware containers.
  :::
  </TabItem>
</Tabs>



Now deploy the operator via helm:

```bash
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia
helm repo update

helm install gpu-operator \
  -n gpu-operator --create-namespace \
  nvidia/gpu-operator \
  -f values.yaml \
  --version=v25.3.1
```

Of course. Here is the updated section for your article with instructions on how to check for Multi-Instance GPU (MIG) support online.

### Multi-Instance GPU (MIG)

[Multi-Instance GPU (MIG)](https://www.nvidia.com/en-us/technologies/multi-instance-gpu/) allows a single physical GPU to be partitioned into multiple smaller, fully isolated GPU instances. Each instance has its own dedicated resources, including memory, cache, and compute cores, making it ideal for running multiple workloads in parallel without interference.

#### Verify MIG Support

You must first confirm that your GPU hardware supports the feature. MIG is available on GPUs from the **NVIDIA Ampere architecture and newer**.

To verify if your specific GPU model is compatible, you should consult [MIG User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html#supported-gpus). This contains an up-to-date list of all supported GPUs.

#### Configure and Deploy with MIG

Set the `mig.strategy` value in your Helm `values.yaml` file. There are two strategies available:

- **single**: This strategy partitions the GPU into homogenous slices. All GPU instances will be of the same size.
- **mixed**: This strategy allows for a mix of different-sized GPU instances on the same physical GPU, providing more flexibility for varied workloads.

Update your Helm configuration and add the `mig` configuration to your existing `values.yaml`.

```yaml title="values.yaml"
# ... other fields ...
mig:
  strategy: "single" # or "mixed"
```

After applying the changes, upgrade the GPU Operator with the MIG-enabled configuration.

```bash
helm upgrade --install gpu-operator \
  -n gpu-operator --create-namespace \
  nvidia/gpu-operator \
  -f values.yaml \
  --version=v25.3.1
```

:::info
For more information about configuring **MIG**, refer to [GPU Operator with MIG](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/gpu-operator-mig.html).
:::


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
