---
id: deploying-openwebui-on-a-cce-cluster-with-gpu-support 
title: Deploying OpenWebUI on a CCE Cluster with GPU Support 
tags: [ollama, vpn, ai]
---

# Deploying OpenWebUI on a CCE Cluster with GPU Support


## Overview
This tutorial guides you through deploying OpenWebUI on a Container Cloud Engine (CCE) cluster, utilizing GPU resources. The process includes setting up GPU nodes, installing necessary plugins, and deploying OpenWebUI via Helm.

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
    
    ![image](/img/docs/blueprints/by-use-case/ai/openwebui/create-node-pool.png)

    - After createing the node pool scale it to the desierd count.

   - **Verify Nodes Joined**: Wait for some minutes so that the nodes get provisioned and then check if they have joined the cluster with:
     ```bash
     kubectl get nodes --show-labels | grep "nvidia"
     ```
     joined nodes should contain a label with `accelerator` key and `nvidia*` as value (e.g.  **accelerator=nvidia-t4**).

### 2. **Install NVIDIA GPU Plugin**
   - **Install the Plugin**: From sidebar select **Add-ons** and install the **CCE AI Suite (NVIDIA GPU)**.
    ![image](/img/docs/blueprints/by-use-case/ai/openwebui/install-plugin.png)

   - **Configure the Plugin**: Configre the plugin. For more information see [CCE AI Suite (NVIDIA GPU)](https://github.com/kubernetes-sigs/external-dnshttps://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html).
    ![image](/img/docs/blueprints/by-use-case/ai/openwebui/configure-plugin.png)

  :::warning 
  Selected driver must be compatible with the gpu node or else the cluster cannot allocate gpu resources.
  Check suported drivers here [CCE AI Suite (NVIDIA GPU)](https://github.com/kubernetes-sigs/external-dnshttps://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html).
  :::

### 3. **Create a RuntimeClass for GPUs**
  A RuntimeClass defines how containers in pods are run. This step ensures that pods requiring GPU resources can be scheduled on the appropriate nodes.
  Create a Runtime Class and apply it to the cluster:
   ```bash
   # Create a new runtime class
   cat <<EOF > nvidia-runtime.yaml
  apiVersion: node.k8s.io/v1
  handler: nvidia
  kind: RuntimeClass
  metadata:
    name: nvidia
   EOF

   # Apply the configuration
   kubectl apply -f nvidia-runtime.yaml
   ```

### 4. **Deploy OpenWebUI via Helm**
  Create a `values.yaml` file to include the desired configurations. In this example gpu is activated, presistant volumes are enabled and also *llama3* is preinstalled:

  ```yaml
  # values.yaml
    ollama:
      ollama:
        gpu:
          enabled: true
          type: 'nvidia'
          number: 1
        models:
          pull:
            - llama3
          run:
            - llama3
      runtimeClassName: nvidia
      persistentVolume:
        enabled: true
        storageClass: "csi-disk"
        size: "60Gi"

    pipelines:
      persistence:
        storageClass: "csi-disk"
    persistence:
      storageClass: "csi-disk"

  ```

  Now deploy Open WebUI via helm:

   ```bash
   # Add the openwebui helm repository
   helm repo add open-webui https://open-webui.github.io/helm-charts

   # Update helm repositories
   helm repo update

   # Install openwebui with GPU configuration
   helm install open-webui \
     --namespace=open-webui \
     --create-namespace \
     -f values.yaml
      open-webui/open-webui
   ```

### 5. **Test the Deployment**
  After applying the Helm chart, check the status of your pods and ensure that the configurations are applied correctly:
  ```bash
    kubectl get pods -n open-webui
  ```


### 6. **Access WebUi**
  This allows you to expose your OpenWebUI deployment to your local machine by forwarding ports.
   - **Port Forwarding**:
     ```bash
     # Replace namespace with your OpenWebUI namespace
     kubectl port-forward svc/openwebui --namespace=open-webui 8080:80
     ```
   - **Access OpenWebUI**: Open your web browser and navigate to `http://localhost:8080` in your browser. Provide the initial credentials and you will be guied to the prompting page.