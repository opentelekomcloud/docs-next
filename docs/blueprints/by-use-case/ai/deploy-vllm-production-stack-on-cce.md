---
id: deploy-vllm-production-stack-on-cce
title: Deploy vLLM Production Stack on CCE
tags: [cce, llm, vllm, vllm-production-stack, kuberay, ai]
sidebar_position: 3
---

# Deploy vLLM Production Stack on CCE

// TODO: Overview missing

[vLLM](https://docs.vllm.ai/en/stable/) is an open-source inference and serving engine for large language models. It is designed to improve serving throughput and GPU memory efficiency, mainly through [PagedAttention](https://huggingface.co/docs/text-generation-inference/en/conceptual/paged_attention), continuous batching, prefix caching, and an OpenAI-compatible serving interface.

The [vLLM Production Stack](https://docs.vllm.ai/projects/production-stack/en/latest/) is a separate upstream project from the vLLM ecosystem. It provides a Kubernetes-native, cluster-wide reference implementation for deploying inference services on top of vLLM. Its purpose is to help users move from a single vLLM instance to a distributed deployment without changing application code. It also includes deployment options such as Helm chart deployment, CRD-based deployment, and Gateway API integration, together with documented capabilities such as metrics dashboards, request routing, KV cache-aware routing, prefix-aware routing, distributed tracing, KEDA-based autoscaling, and other production-oriented patterns.

## Prerequisites

// TODO: say we need to fulfill the prerequisites of litellm gw

## Defining and Applying Configuration

Before proceeding to any deployment and configuration ensure that the necessary namespace is created, by using the following command:

```bash
kubectl create namespace vllm
```

### Creating the Secret

Before deploying LiteLLM, a Kubernetes `Secret` must be created, **vllm-prodstack-secrets.yaml** to provide the required runtime configuration and credentials:

```yaml title="vllm-prodstack-secrets.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: vllm-prodstack-secrets
type: Opaque
stringData:
  VLLM_MASTER_KEY: <VLLM_MASTER_KEY>
  HF_TOKEN: <HF_TOKEN>
```

:::note
Each key in this secret serves a specific purpose:

- `VLLM_MASTER_KEY`: is used in this deployment as a shared secret for authenticating internal communication between vLLM Production Stack components. The value is stored as a Kubernetes `Secret` and injected into the workloads as an environment variable. All participating services must use the same key value to establish trusted communication. For production environments, the key should be generated as a strong random secret and managed securely through Kubernetes Secrets or external secret management solutions.
- `HF_TOKEN`: s used to authenticate against [Hugging Face](https://huggingface.co/) services. The deployment may require access to Hugging Face-hosted model repositories, tokenizer assets, or embedding models during model initialization and runtime operations. The token is primarily required when using gated or private repositories, while publicly accessible models can generally be downloaded without authentication.

In this blueprint, the `Secret` separates sensitive runtime credentials from the public Helm configuration. This makes the configuration easier to maintain and reduces the risk of exposing API keys, session-signing secrets, or third-party access tokens.
:::

```bash
kubectl apply -f vllm-prodstack-secrets.yaml -n vllm
```

### Creating the Persistence Volume Claim

// TODO: copy the snippet from ollama

## Explaining the Helm Chart Values
 
### Tensor and Pipeline Parallelism

Under `vllmConfig` stanza we find `tensorParallelSize` and `pipelineParallelSize` which control **how a model is distributed across multiple GPUs**. These settings are important **when a model is too large for a single GPU or when inference throughput needs to scale beyond the capacity of one accelerator**.

*Tensor parallelism* splits the mathematical operations of individual neural network layers across multiple GPUs. Instead of storing and processing the full tensor operations on one GPU, the computation is divided between several GPUs that work on the same layer simultaneously. This approach is commonly used for very large models because it reduces the memory pressure on individual GPUs while allowing the model to execute in parallel.

With `tensorParallelSize: 2`, for example, the tensor computations are distributed across two GPUs. The GPUs cooperate closely during inference and exchange intermediate results continuously. Because of this communication overhead, tensor parallelism performs **best on systems where GPUs are connected through high-bandwidth interconnects such as [NVLink](https://www.nvidia.com/en-us/data-center/nvlink/) or similarly optimized PCIe topologies**.

*Pipeline parallelism* works differently. Instead of splitting tensor operations inside a layer, it splits the model itself into sequential layer groups called pipeline stages. Each GPU becomes responsible for a different section of the model. During inference, the request passes through these stages in sequence until the output is produced.

With `pipelineParallelSize: 2`, one GPU may process the earlier transformer layers while another GPU processes the later layers. This approach is useful **when the hardware environment does not provide fast GPU-to-GPU communication for efficient tensor parallelism or when model layers need to be distributed more explicitly across available devices**.

In practice, tensor parallelism is generally preferred for high-performance multi-GPU inference because it allows GPUs to work concurrently on the same operations. Pipeline parallelism is often used when GPU interconnect performance is limited or when the deployment architecture requires explicit layer partitioning.

These parameters must align with the GPU resources requested from Kubernetes. The effective GPU requirement is determined by the parallelism configuration. For example:

- `tensorParallelSize: 2` requires at least 2 GPUs.
- `pipelineParallelSize: 2` also requires at least 2 GPUs.
- **The overall resource requirement we claim is the multiplication of both variables**. For example, `tensorParallelSize: 2` and `pipelineParallelSize: 2` require 4 GPUs in total.

The Kubernetes resource request must therefore provide sufficient GPUs for the configured parallelism model; otherwise, the vLLM workload cannot initialize correctly.

### Resource Allocation and Scheduling

The `requestCPU`, `requestMemory`, and `requestGPU` values define infrastructure resource allocation at the Kubernetes level, while `tensorParallelSize` and `pipelineParallelSize` define how vLLM internally distributes the model execution across the allocated GPUs.

This distinction is important because Kubernetes itself does not understand how the model is executed. Kubernetes only schedules containers onto nodes based on requested resources.

```yaml
requestCPU: 4
requestMemory: "16Gi"
requestGPU: 1
```

These parameters instruct Kubernetes to reserve 4 CPU cores, 16 GiB of system memory, and 1 GPU for the serving pod. They affect pod scheduling, node placement, and infrastructure capacity planning, **but they do not control how vLLM uses the GPU internally**.

The vLLM parallelism settings operate at the inference engine layer:

```yaml
tensorParallelSize: 1
pipelineParallelSize: 2
```

These parameters determine how the model itself is partitioned and executed across GPUs during inference. In practice, the Kubernetes resource requests define the available hardware resources, while the vLLM parallelism settings define how the inference engine consumes and coordinates those resources.

:warning: Both layers must remain consistent with each other. For example:

- `requestGPU: 1` means Kubernetes allocates one GPU to the pod.  
- `tensorParallelSize: 2` tells vLLM to distribute tensor operations across two GPUs.  

:bangbang: **This creates a mismatch** because vLLM expects access to two GPUs while Kubernetes provides only one. The workload **would therefore fail during initialization or scheduling**.

The same applies to pipeline parallelism. If `pipelineParallelSize: 2` is configured, the deployment must provide at least two GPUs because the model is split into two execution stages.

## Scenario 1: Single-GPU, No Parallelism

In this scenario, we deploy the [`openai/gpt-oss-20b`](https://willitrunai.com/models/gpt-oss-20b) model as a standalone inference service on CCE using a single NVIDIA L4 GPU. The objective is to establish a minimal production-ready deployment pattern that exposes the model through the OpenAI-compatible vLLM API without introducing distributed execution or multi-node orchestration complexity.

`gpt-oss-20b` is an open-weight large Mixture of Experts (MoE) model from OpenAI designed for general-purpose text generation, reasoning, code generation and agentic workloads. With approximately 20 billion parameters (3.6B active), the model provides substantially higher reasoning and language generation capability than smaller instruction-tuned models while still remaining deployable on modern enterprise GPU hardware with careful memory utilization tuning and quantization-aware serving strategies.

Within this deployment, vLLM acts as the inference runtime responsible for loading the model, optimizing GPU memory usage, managing request batching, and exposing the serving endpoint through an OpenAI-compatible API interface. This allows existing AI applications, SDKs, and automation frameworks to consume the model using familiar OpenAI API semantics without requiring model-specific integrations.

:::tip Can GPT-OSS 20B run on NVIDIA L4 24GB?
The `gpt-oss-20b` model can operate on a single NVIDIA L4 GPU with 24 GB VRAM, as the model requires approximately 18.6 GB of GPU memory in this configuration. When deployed with Q4_K_M quantization, inference throughput can reach roughly 35 tokens per second on NVIDIA L4 hardware.

For a more detailed report check [here](https://willitrunai.com/can-run/gpt-oss-20b-on-l4-24gb).
:::

Persistent model caching is enabled through a mounted Kubernetes persistent volume so that downloaded Hugging Face artifacts survive pod restarts and redeployments. This significantly reduces model initialization times and avoids repeated downloads during operational lifecycle events.

### Configuring the Helm Chart Values

```yaml title="vllm-values-simple.yaml"
servingEngineSpec:
  vllmApiKey: 
    secretName: vllm-prodstack-secrets
    secretKey: VLLM_MASTER_KEY

  tolerations:
    - key: "nvidia.com/gpu"
      operator: "Equal"
      value: "true"
      effect: "NoSchedule"

  modelSpec:
    - name: gpt-oss-20b
      repository: vllm/vllm-openai
      tag: latest
      modelURL: openai/gpt-oss-20b

      hf_token: 
        secretName: vllm-prodstack-secrets
        secretKey: HF_TOKEN

      replicaCount: 1

      requestCPU: 4
      requestMemory: "16Gi"
      requestGPU: 1

      extraVolumes:
        - name: vllm-model-cache
          persistentVolumeClaim:
            claimName: pvc-vllm-models

      extraVolumeMounts:
        - name: vllm-model-cache
          mountPath: /models

      nodeSelectorTerms:
        - matchExpressions:
            - key: accelerator
              operator: In
              values:
                - nvidia-l4

      vllmConfig:
        extraArgs:
          - "--served-model-name"
          - "gpt-oss-20b"
          - "--gpu-memory-utilization"
          - "0.90"
          - "--max-model-len"
          - "8192"
          - "--download-dir"
          - "/models/vllm-downloads"
```

:::note
`requestCPU` & `requestMemory` define the host resources reserved for the vLLM serving pod. The GPU remains the primary execution resource for model inference, while CPU and system memory support request processing, tokenization, model initialization, cache handling, and the OpenAI-compatible API process. For this single-GPU baseline, the deployment reserves 4 vCPUs and 16 GiB of memory per serving replica.

```yaml
requestCPU: 4
requestMemory: "16Gi"
requestGPU: 1
```

:::

We can now deploy the vLLM Production Stack with the Helm chart:

```bash
helm repo add vllm https://vllm-project.github.io/production-stack
helm repo update

helm upgrade --install vllm vllm/vllm-stack \
  -n vllm --create-namespace \
  -f vllm-values-simple.yaml \
  --reset-values
```

### Adding Model in LiteLLM (Optional)

Navigate to *LiteLLM Dashboard* -> *Models + Endpoints* -> *Add Model* and fill in the following values:

- **Provider**: `vllm`
- **LiteLLM Mode Name(s)**: `gpt-oss-20b`
- **Model Mappings/Public Model Name**: `gpt-oss-20b`
- **Mode**: *Chat - /chat/completions*
- **Existing Credentials**: *None*
- **API Base**: `http://vllm-router-service.vllm.svc.cluster.local/v1`
- **API Key**: fill in your `VLLM_MASTER_KEY` value

![image](/img/docs/blueprints/by-use-case/ai/litellm/Screenshot_From_2026-05-26_09-51-51.png)

and click *Add Model*:

![image](/img/docs/blueprints/by-use-case/ai/litellm/Screenshot_From_2026-05-26_09-51-26.png)

## Scenario 2: Tensor Parallelism

The objective in this scenario, is to enable a single model-serving workload to utilize multiple GPUs through tensor parallelism instead of running entirely on a single GPU device. In practice, this allows larger language models to be distributed across several GPUs when the memory requirements exceed the capacity of a single accelerator. The configuration also improves inference scalability for workloads that require higher throughput or larger context windows.

To achieve this, the deployment configuration is adjusted so that the vLLM engine requests multiple GPUs and configures the corresponding tensor parallelism settings. At the Kubernetes level, this also affects pod scheduling because the workload must be placed on nodes that can provide the requested GPU resources.

The deployment relies on Ray and the KubeRay Operator to coordinate the distributed execution of the vLLM workload across multiple GPUs and Kubernetes worker nodes. While single-GPU deployments can operate as standalone vLLM instances, multi-GPU and distributed inference configurations require an orchestration layer capable of managing worker coordination, resource scheduling, and distributed runtime communication.

:::note
[KubeRay](https://github.com/ray-project/kuberay) is the Kubernetes integration project for [Ray](https://github.com/ray-project/ray). It allows Ray clusters and Ray applications to run natively on Kubernetes by introducing Kubernetes-aware management and automation capabilities for Ray workloads.

Ray itself is a distributed computing framework used primarily for AI and machine learning workloads. It provides mechanisms for distributing Python-based execution across multiple processes, GPUs, and nodes. Ray is commonly used for distributed model training, batch processing, distributed inference, and scalable serving applications. More information about the framework can be found in its [official site](https://www.ray.io/).
:::

### Installing KubeRay Operator

The KubeRay Operator is the Kubernetes Operator component of the KubeRay project. It extends Kubernetes through Custom Resource Definitions (CRDs) and controllers that automate the deployment and lifecycle management of Ray clusters. Instead of manually creating and coordinating Ray head nodes, worker nodes, services, and scaling logic, the operator manages these resources declaratively through Kubernetes manifests.

In this blueprint, the KubeRay Operator is installed to provide the Kubernetes control layer required for distributed Ray-based inference workloads. The vLLM Production Stack uses `RayCluster` and `RayService` resources to deploy, scale, and manage distributed vLLM serving instances across the Kubernetes cluster. This step prepares the CCE environment with the necessary Kubernetes extensions and controllers required for distributed inference orchestration.

#### When to use KubeRay?

| Use Case                                                | KubeRay Required | Advantages                                                                           | Trade-Offs                                                            | Typical Prerequisites                                                                   |
| ------------------------------------------------------- | :--------------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Serving very large language models across multiple GPUs | :white_check_mark:              | Enables tensor parallelism and distributed inference execution across nodes and GPUs | Increased operational complexity and additional Kubernetes components | Multi-GPU worker nodes, high-speed node networking, distributed storage considerations  |
| High-throughput production inference APIs               | :white_check_mark:              | Supports horizontal scaling, workload distribution, and centralized orchestration    | More complex deployment lifecycle and monitoring requirements         | Kubernetes autoscaling strategy, GPU capacity planning, ingress and observability stack |
| Shared enterprise AI inference platform                 | :white_check_mark:              | Centralized management, automated recovery, scalable multi-workload orchestration    | Higher infrastructure footprint and operational overhead              | Multi-node Kubernetes cluster, GPU scheduling strategy, cluster observability           |
| Dynamic scaling of inference workloads                  | :white_check_mark:              | Enables automated scaling and distributed worker management                          | Additional dependency on Ray and KubeRay control components           | KEDA or autoscaling integration, sufficient spare cluster resources                     |
| Single-node vLLM deployment                             | :no_entry_sign:               | Simpler deployment and reduced operational overhead                                  | Limited scalability and no distributed execution                      | Single GPU-enabled Kubernetes worker node                                               |
| Development and proof-of-concept environments           | :no_entry_sign:               | Faster setup and easier troubleshooting                                              | Not suitable for large-scale or distributed inference workloads       | Minimal Kubernetes cluster with GPU support                                             |
| Low-throughput internal inference services              | :no_entry_sign:               | Lightweight operational model with fewer moving components                           | Limited high-availability and scaling capabilities                    | One or few GPU worker nodes                                                             |
| Standalone model serving without distributed execution  | :no_entry_sign:               | Easier maintenance and simpler Kubernetes manifests                                  | No multi-node coordination or distributed scheduling                  | Standard Kubernetes deployment with vLLM container image                                |

#### Deploying the Operator

In this blueprint, KubeRay Operator is going to be deployed using the official Helm chart:

```bash
helm repo add kuberay https://ray-project.github.io/kuberay-helm/
helm repo update

helm install kuberay-operator kuberay/kuberay-operator \
  -n kuberay-system \
  --create-namespace
```

### Configuring the Helm Chart Values

As we already said, this is a scenario, when the model does not fit into the memory of a single GPU, vLLM can split the model’s tensor operations across multiple GPUs. This is controlled with `tensorParallelSize`. In a two-GPU setup, the model weights and tensor computations are distributed across both GPUs so that each GPU holds and processes only part of the model.

For this scenario, we will go for a two-nodes setup, where each node has one NVIDIA L4 with roughly 23 GB GPU memory available and the model we will try to serve is [**Qwen/Qwen2.5-14B-Instruct**](https://huggingface.co/Qwen/Qwen2.5-14B-Instruct), which is a 14B dense model in BF16/FP16. Only the model weights alone are roughly 28 GB, before KV cache and runtime overhead. That makes it too large for one NVIDIA L4 GPU, but realistic to serve across two L4 GPUs with tensor parallelism.

So the intended configuration would be:

```yaml
servingEngineSpec:
  runtimeClassName: ""
  modelSpec:
    - name: "qwen2-5-14b-instruct"
      repository: "vllm/vllm-openai"
      tag: "latest"
      modelURL: "Qwen/Qwen2.5-14B-Instruct"

      replicaCount: 1

      requestCPU: 4
      requestMemory: "16Gi"
      requestGPU: 1

      vllmConfig:
        tensorParallelSize: 2
        pipelineParallelSize: 1
        extraArgs:
          - "--gpu-memory-utilization"
          - "0.90"
          - "--max-model-len"
          - "8192"

      shmSize: "16Gi"

      raySpec:
        headNode:
          requestCPU: 4
          requestMemory: "16Gi"
          requestGPU: 1
```

:::important
In this case:

- `replicaCount` is the number of KubeRay worker pods! The Ray head node is configured separately under `raySpec.headNode`
- `tensorParallelSize` must match the number of GPUs allocated per Ray node, including the head and worker nodes
- `pipelineParallelSize` represents the total number of Ray nodes

That means that the deployment creates two Ray nodes with GPU capacity:

1 Ray head pod   x 1 GPU = 1 GPU
1 Ray worker pod x 1 GPU = 1 GPU
Total                      2 GPUs

:::

## Scenario 3: Pipeline Parallelism
