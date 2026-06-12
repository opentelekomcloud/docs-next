---
id: deploy-litellm-on-cce
title: Deploy LiteLLM on CCE
tags: [cce, llm, litellm, ai]
sidebar_position: 3
---

# Deploy LiteLLM on CCE

[LiteLLM](https://docs.litellm.ai/docs/) is a lightweight gateway that provides a unified interface for interacting with multiple large language model providers. It exposes an OpenAI-compatible API, allowing applications and tools to integrate once while abstracting the differences between various backends. In this role, LiteLLM sits between clients and the underlying inference layer and becomes the central control point for how models are consumed. It can route requests to different backends, such as local runtimes or external providers, without requiring changes on the client side. This enables flexibility in choosing where inference runs based on cost, performance, or data residency requirements.

Beyond simple routing, LiteLLM also introduces a layer for governance. It allows platform teams to control access to models, apply usage limits, and monitor consumption across different users or teams. This makes it possible to expose a curated set of models as a shared service within an organization, while maintaining visibility and control over cost and usage patterns.

Within CCE, LiteLLM is deployed as the central gateway for all LLM traffic. It enables a platform approach where models,whether hosted locally or accessed externally, can be offered to multiple teams through a single, consistent endpoint. This article focuses on deploying LiteLLM on CCE and preparing it to act as the control and access layer in a modular LLM architecture.

## Defining and Applying Configuration

Before proceeding to any deployment and configuration ensure that the necessary namespace is created, by using the following command:

```bash
kubectl create namespace litellm
```

### Creating the Secret

Before deploying LiteLLM, a Kubernetes `Secret` must be created, **litellm-secrets.yaml** to provide the required runtime configuration and credentials:

```yaml title="litellm-secrets.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: litellm-secrets
type: Opaque
stringData:
  LITELLM_MASTER_KEY: sk-<RANDOM_KEY>
  UI_USERNAME: "admin"
  UI_PASSWORD: <UI_PASSWORD>
  DATABASE_URL: <RDS_LITELLM_POSTGRESQL_DSN>
  HF_TOKEN: <HF_TOKEN>
```

:::note
Each key in this secret serves a specific purpose:

- `LITELLM_MASTER_KEY`: This is the primary authentication key used by LiteLLM to secure access to its API. Clients connecting to the gateway must present this key, making it the central mechanism for controlling who can use the service. **Caution**: You need to autogenerate the `RANDOM_KEY` part and retain the `sk-` prefix.
- `UI_USERNAME` & `UI_PASSWORD`: These credentials are used to access the built-in LiteLLM user interface. They provide basic authentication for managing and interacting with the gateway through a browser. **Caution**: You need to autogenerate the `UI_PASSWORD` value.
- `DATABASE_URL`: This defines the connection string to the RDS PostgreSQL cluster that will be used by LiteLLM. You can find the connection string in T Cloud Public Console.
- `HF_TOKEN`: This token is used to authenticate against Hugging Face when accessing models or endpoints that require authorization. It enables LiteLLM to pull or interact with Hugging Face-hosted resources as part of its routing capabilities. It's been created in a previous step.

This secret centralizes all sensitive configuration required by LiteLLM and ensures that credentials are not hardcoded in deployment manifests.
:::


Ensure that the **litellm-secrets.yaml** file has been created and reviewed based on the previous steps. Once the configuration is in place, apply it to the cluster using the following command:

```bash
kubectl apply -f litellm-secrets.yaml -n litellm
```

### Creating the ConfigMap

LiteLLM allows you to define routing behavior, fallback strategies, logging, rate limiting, and access control in a file called **config.yaml**. The exact options depend on the features you want to enable, but the file is essentially the control plane for how LiteLLM behaves. In Kubernetes we provision this file via a `ConfigMap` and we then mount it to the respective path. For this blueprint, the configuration is intentionally kept minimal to focus on the integration with the inference backends. Additional settings can be introduced later once the basic gateway setup is validated.

```yaml title="litellm-config.yaml"
apiVersion: v1
kind: ConfigMap
metadata:
  name: litellm-config
data:
  config.yaml: |
    model_list:
      - model_name: llama3_1__8b
        litellm_params:
          model: ollama_chat/llama3.1:8b
          api_base: http://ollama.ollama.svc.cluster.local:11434
          keep_alive: "15m"

      - model_name: qwen2_5__7b_coder
        litellm_params:
          model: ollama_chat/qwen2.5-coder:7b
          api_base: http://ollama.ollama.svc.cluster.local:11434
          keep_alive: "15m"

      - model_name: gemma2__9b
        litellm_params:
          model: ollama_chat/gemma2:9b
          api_base: http://ollama.ollama.svc.cluster.local:11434
          keep_alive: "15m"

      - model_name: deepseek_r1_distill_qwen_1_5b
        litellm_params:
          model: huggingface/together/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B
          api_key: os.environ/HF_TOKEN

    general_settings:
      master_key: os.environ/LITELLM_MASTER_KEY
```

:::note
1️⃣ The key section is `model_list`. Each entry represents a model that LiteLLM will expose to clients:

- `model_name`: This is the name that clients will use when sending requests to LiteLLM. It is an internal alias and **does not need to match the backend model name**  
- `litellm_params.model`: This defines the actual model and provider. In this case, `ollama_chat/...` tells LiteLLM to route the request to an Ollama backend using its chat interface  
- `api_base`: This is the endpoint of the Ollama service in the CCE cluster that exposes the Ollama API  
- `keep_alive`: This controls how long the model remains loaded in memory on the backend. Keeping models warm reduces latency for subsequent requests  

2️⃣ All those entries are routing the requests to local inference backends. The last one though, is not served locally, but accessed through an external provider (with additional costs):

```yaml
- model_name: deepseek_r1_distill_qwen_1_5b
  litellm_params:
    model: huggingface/together/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B
    api_key: os.environ/HF_TOKEN
```

- `model_name`: This is the alias exposed by LiteLLM. Clients will use this name when sending requests to the gateway.
- `litellm_params.model`: This specifies the provider and model. In this case, the request is routed through Hugging Face (via Together AI) to the `DeepSeek-R1-Distill-Qwen-1.5B` model. Unlike the Ollama examples, this does not point to a local service but to an external inference backend.
- `api_key`: This references the `HF_TOKEN` stored in the Kubernetes `Secret` we created in the previous step. It is used to authenticate requests against the Hugging Face.

3️⃣ If you used vLLM as you inference backend instead, following the blueprint [Deploy vLLM Production Stack on CCE](/docs/blueprints/by-use-case/ai/deploy-vllm-production-stack-on-cce):

- `model_name`: This is the name that clients will use when sending requests to LiteLLM. It is an internal alias and **does not need to match the backend model name**  
- `litellm_params.model`: This defines the actual model and provider. In this case, `hosted_vllm/...` tells LiteLLM to route the request to an vLLM backend using its chat interface  
- `api_base`: This is the endpoint of the vLLM Router service in the CCE cluster that exposes the vLLM OpenAI API endpoint.  

:::

:::tip
You can rely entirely on local inference backends; the Hugging Face example is included for completeness.
:::

Ensure that the **litellm-config.yaml** file has been created and reviewed based on the previous steps. Once the configuration is in place, apply it to the cluster using the following command:

```bash
kubectl apply -f litellm-config.yaml -n litellm
```

## Creating the Deployment

Create the following deployment manifest and save it as **litellm-deployment.yaml**. Replace `LITELLM_PROXY_BASE_URL` with your own external endpoint:

```yaml title="litellm-deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: litellm
spec:
  replicas: 2
  selector:
    matchLabels:
      app: litellm
  template:
    metadata:
      labels:
        app: litellm
    spec:
      containers:
        - name: litellm
          image: ghcr.io/berriai/litellm:v1.83.7.rc.1
          imagePullPolicy: IfNotPresent
          args:
            - "--config"
            - "/app/proxy_config.yaml"
          ports:
            - name: http
              containerPort: 4000
          env:
            - name: LITELLM_MASTER_KEY
              valueFrom:
                secretKeyRef:
                  name: litellm-secrets
                  key: LITELLM_MASTER_KEY
            - name: UI_USERNAME
              valueFrom:
                secretKeyRef:
                  name: litellm-secrets
                  key: UI_USERNAME
            - name: UI_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: litellm-secrets
                  key: UI_PASSWORD
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: litellm-secrets
                  key: DATABASE_URL
            - name: PROXY_BASE_URL
              value: <LITELLM_PROXY_BASE_URL>
            - name: DOCS_URL
              value: "/docs"
            - name: ROOT_REDIRECT_URL
              value: "/ui"
            - name: FORCE_HTTPS
              value: "true"
            - name: STORE_MODEL_IN_DB
              value: "true"
          volumeMounts:
            - name: litellm-config
              mountPath: /app/proxy_config.yaml
              subPath: config.yaml
              readOnly: true
          readinessProbe:
            httpGet:
              path: /health/readiness
              port: 4000
            initialDelaySeconds: 20
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /health/liveliness
              port: 4000
            initialDelaySeconds: 40
            periodSeconds: 15
          resources:
            requests:
              cpu: "250m"
              memory: "512Mi"
            limits:
              cpu: "1"
              memory: "2Gi"
      volumes:
        - name: litellm-config
          configMap:
            name: litellm-config
```

:::warning
To add or manage models through the LiteLLM Admin UI, enable database-backed model storage by setting `STORE_MODEL_IN_DB` to `true`. Without this setting, LiteLLM only loads models from the static configuration and UI-based model creation fails with. This setting requires a configured PostgreSQL database connection for the LiteLLM proxy (in our case we use an RDS PostgreSQL instance).
:::

Ensure that the **litellm-deployment.yaml** file has been created and reviewed based on the previous steps. Once the configuration is in place, apply it to the cluster using the following command:

```bash
kubectl apply -f litellm-deployment.yaml -n litellm
```

## Creating the Service & Ingress

Create the following manifest and save it as **litellm-service-ingress.yaml**. Replace the `host`, `tls.hosts`, `tls.secretName` and `cert-manager.io/cluster-issuer` values with your own:

```yaml title="litellm-service-ingress.yaml"
apiVersion: v1
kind: Service
metadata:
  name: litellm
spec:
  selector:
    app: litellm
  ports:
    - name: http
      port: 4000
      targetPort: http
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: litellm
  annotations:
    cert-manager.io/cluster-issuer: opentelekomcloud-letsencrypt
spec:
  ingressClassName: haproxy
  rules:
    - host: <LITELLM_PROXY_BASE_URL>
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: litellm
                port:
                  number: 4000
  tls:
  - hosts:
    - <LITELLM_PROXY_BASE_URL>
    secretName: litellm-proxy-base-url-tls
```

Ensure that the **litellm-service-ingress.yaml** file has been created and reviewed based on the previous steps. Once the configuration is in place, apply it to the cluster using the following command:

```bash
kubectl apply -f litellm-service-ingress.yaml -n litellm
```

## Validation

Navigate to `LITELLM_PROXY_BASE_URL` address from your browser and login to LiteLLM using the UI credentials we created in **litellm-secrets.yaml**. 

On the sidebar click *Models + Endpoints* -> *All Models* and inspect whether the models we configured in **config.yaml** are there:

![image](/img/docs/blueprints/by-use-case/ai/litellm/Screenshot_From_2026-04-29_10-33-05.png)

Change to tab *Health Status* and ensure that all models report back as `healthy`:

![image](/img/docs/blueprints/by-use-case/ai/litellm/Screenshot_From_2026-04-29_10-33-27.png)

