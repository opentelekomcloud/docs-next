---
id: deploying-nvidia-operator-on-cce
title: Deploying Nvidia Operator on CCE
tags: [nvidia,nvidia-operator,gpu, ai]
---

# Deploying the NVIDIA Operator on CCE

## Overview
The NVIDIA Operator is a critical tool for effectively managing GPU resources in Kubernetes clusters. It serves as an abstraction layer over Kubernetes APIs, automating tasks such as dynamic provisioning, driver updates, resource allocation, and optimization for GPU-intensive workloads, thereby simplifying the deployment and management of GPU-accelerated applications. Its functionality extends to dynamic provisioning of GPUs on demand, managing driver updates, optimizing resource allocation for varied workloads, and integrating with monitoring tools for comprehensive insights into GPU usage and health. This guide outlines how to deploy the NVIDIA Operator on CCE cluster. The process involves preparing GPU nodes, installing necessary components, configuring the cluster for GPU support, deploying an application leveraging GPUs, and verifying functionality.

## Prerequisites
- Access to CCE with kubectl.
- Helm installed on your system.


## Step-by-Step Guide

### 1. **Prepare GPU Nodes**
   - Go to the Open Telekom Cloud console and choose the specific cluster where you want to add the GPU node pool. 
   - In the left sidebar select nodes and from there click on *Create Node Pool*.
  
  **Configure the GPU Node Pool**:
    - **Name**: Assign a meaningful name to your GPU node pool, such as `gpu-workers`.
    - **Flavor Selection**: Choose a flavor that includes GPU resources. Look for options like `pi2.2xlarge` or similar GPU-accelerated instances available.
    - **Annotations**: If required by your cluster's configuration, add any necessary annotations.
    - **Taints or Tolerations**: Set taints or tolerations to manage pod scheduling. For GPU nodes, you might set a taint like `nvidia.com/gpu=true:NoExecute` and ensure pods requiring GPUs have the appropriate toleration.
    
    ![image](/img/docs/blueprints/by-use-case/ai/nvidia-operator/create-node-pool.png)

    - After createing the node pool scale it to the desierd count.

   - **Verify Nodes Joined**: Wait for some minutes so that the nodes get provisioned and then check if they have joined the cluster with:
     ```bash
     kubectl get nodes --show-labels | grep "nvidia"
     ```
     joined nodes should contain a label with `accelerator` key and `nvidia*` as value (e.g.  **accelerator=nvidia-t4**).

### 2. **Install NVIDIA GPU Plugin**
   - **Install the Plugin**: From sidebar select **Add-ons** and install the **CCE AI Suite (NVIDIA GPU)**.
    ![image](/img/docs/blueprints/by-use-case/ai/nvidia-operator/install-plugin.png)

   - **Configure the Plugin**: Configre the plugin. For more information see [CCE AI Suite (NVIDIA GPU)](https://github.com/kubernetes-sigs/external-dnshttps://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html).
    ![image](/img/docs/blueprints/by-use-case/ai/nvidia-operator/configure-plugin.png)

  :::warning 
  Selected driver must be compatible with the gpu node and also supported by Nvidia Operator or else the cluster cannot allocate gpu resources.
  Check supported drivers here [CCE AI Suite (NVIDIA GPU)](https://github.com/kubernetes-sigs/external-dnshttps://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html), [Platform Support](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html).
  :::

### 3. **Deploy Nvidia Operator via Helm**
  Create a `values.yaml` file to include the needed configurations:

  ```yaml
  # values.yaml
   hostPaths:
  # default driver installation directory on OTC CCE is as below
  driverInstallDir: "/usr/local/nvidia/"

  # driver installation is disabled because it's already installed via CCE AI Suite
  driver:
    enabled: false

  # container toolkit installation is disabled because it's already installed via CCE AI Suite
  toolkit:
    enabled: false

  ```

  Now deploy the operator via helm:

   ```bash
   # Add the nvidia operator helm repository
   helm repo add nvidia https://helm.ngc.nvidia.com/nvidia

   # Update helm repositories
   helm repo update

   # Install nvidia operator with configuration values
    helm install --wait gpu-operator \
     -n gpu-operator --create-namespace \
     nvidia/gpu-operator \
     -f values.yaml \
     --version=v24.9.2
   ```



### 4. Deploy an Application with GPU Support
1. **Create a Pod Manifest**: For example, deploying a CUDA job.

  ```yaml
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

### 5. Test the Pod
1. **Check Pod Status**: Ensure pods are running.

   ```bash
   kubectl get pods -n default
   ```
   
2. **Verify Logs**: Check logs for GPU activity.

   ```bash
   kubectl logs -f cuda-example-<pod-name> -n default
   ```

  The logs should indicate that the operation was succesfull. Like as follow:

    ```bash
    [Vector addition of 50000 elements]
    Copy input data from the host memory to the CUDA device
    CUDA kernel launch with 196 blocks of 256 threads
    Copy output data from the CUDA device to the host memory
    Test PASSED
    Done
    ```


## Troubleshooting Tips
- Verify NVIDIA drivers are installed on nodes.
- Check resource requests and limits against cluster capacity.
