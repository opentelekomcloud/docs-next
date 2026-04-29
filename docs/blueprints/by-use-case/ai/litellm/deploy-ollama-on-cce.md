---
id: deploy-ollama-on-cce
title: Deploy Ollama on CCE
tags: [cce, llm, ollama, ai]
sidebar_position: 2
---

# Deploy Ollama on CCE

[Ollama](https://ollama.com/) is a lightweight runtime for running large language models locally. It provides a simple way to download, manage, and serve models through a REST API, without requiring complex setup or deep knowledge of model serving frameworks. This makes it well suited for environments where ease of deployment and fast iteration are important. 

In the context of CCE, Ollama can be deployed on GPU-enabled nodes to provide local inference capabilities within your cluster. It exposes models as API endpoints that can be consumed directly or integrated behind an LLM gateway such as LiteLLM. This allows you to keep inference workloads within your own infrastructure, which can be relevant for data residency, cost control, or offline scenarios.

## Deploying with Helm Chart

In this section, Ollama is going to be deployed using a community Helm chart. Helm provides a consistent way to define, install, and manage Kubernetes applications, allowing the deployment to be versioned and reproducible. Using the Helm chart simplifies the setup of Ollama on CCE, as configuration such as GPU usage, resource allocation, and networking can be managed through a single values file. This approach also makes it easier to adjust the deployment later as requirements evolve.

```bash
helm repo add ollama-helm https://otwld.github.io/ollama-helm/
helm repo update

helm upgrade --install ollama ollama-helm/ollama -f ollama-values.yaml -n ollama --create-namespace
```

## Preparing the Helm Chart values

We need to create a values file, namely `ollama-values.yaml`:

### Replicas & GPUs

For this blueprint, Ollama is configured to use GPU acceleration with a minimal and predictable setup:

```yaml
ollama:
  gpu:
    enabled: true
    type: nvidia
    number: 1
```

GPU support is explicitly enabled to ensure that model inference runs on the GPU nodes configured in the cluster. The `ollama.gpu.type` is set to `nvidia`, which matches the GPU drivers and device plugin used in CCE environments.

The parameter `ollama.gpu.number` is set to `1`, and that means that each Ollama pod will request exactly one GPU. This aligns with how Ollama is commonly operated, where a single model instance is bound to a single GPU for stable and efficient execution. This configuration is chosen to keep the deployment simple and predictable. Each replica corresponds to one GPU, making it straightforward to scale horizontally by increasing the replica count as more GPU capacity becomes available.

:::note
If a single Ollama instance is intended to use multiple GPUs for one workload, we should set  `ollama.gpu.number` is set to `2` or more. This typically applies in scenarios where:

* The model is **too large to fit into a single GPU's memory** and must be distributed across multiple GPUs
* You are running **very large models (e.g. larger Llama variants)** that require tensor/model parallelism
* You have explicitly validated that the model and runtime setup can **utilize multiple GPUs efficiently**

In practice, **this is not the common case with Ollama**. Most standard models (e.g. 7B–13B) are designed to run on a single GPU, and Ollama is typically operated with one GPU per instance.

For most simple deployments, including this blueprint, scaling is done horizontally:

* Increase `replicaCount` (more pods)
* Keep `ollama.gpu.number: 1` (one GPU per pod)

Setting number greater than `1` only makes sense if you have a clear requirement for multi-GPU execution within a single pod and the corresponding hardware available on the same node.
:::