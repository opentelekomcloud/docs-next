---
id: deploy-openwebui-on-cce
title: Deploy Open WebUI on CCE
tags: [cce, llm, openwebui, ai, searchxng]
sidebar_position: 4
---

# Deploy Open WebUI on CCE

[Open WebUI](https://docs.openwebui.com/) is a self-hosted web interface for interacting with large language models. It provides a chat-based UI that connects to OpenAI-compatible APIs, making it easy to test and use different models without building custom frontends. In this blueprint, Open WebUI acts as the user-facing layer on top of the LLM gateway. It allows users and teams to interact with the models exposed through LiteLLM, without needing to know where those models are running. This makes it a practical tool for internal adoption, enabling non-developers and developers alike to access LLM capabilities through a browser.

Open WebUI also supports multi-user environments, storing user sessions, chat history, and preferences. This makes it suitable for shared deployments where different teams access the same underlying LLM platform. Within CCE, Open WebUI is deployed as a frontend service that connects to LiteLLM as its backend.

## Defining and Applying Configuration

Before proceeding to any deployment and configuration ensure that the necessary namespace is created, by using the following command:

```bash
kubectl create namespace openwebui
```

### Creating an LiteLLM API Key

Open WebUI does not communicate in this blueprint directly with model providers. It does though expect an OpenAI-compatible API endpoint and uses an API key to authenticate its requests against. In this architecture, LiteLLM provides that endpoint and acts as the central access layer to all configured models. For this reason, Open WebUI must be configured with an API key that LiteLLM recognizes. This is typically done by creating a dedicated virtual API key in LiteLLM specifically for OpenWebUI.

Open `LITELLM_PROXY_BASE_URL` in your browser and click *Virtual Keys* -> *Create new key*:

[image]

:::note
The purpose of this key is not only authentication, but also control and isolation. LiteLLM uses API keys to identify clients and apply policies. By assigning a dedicated key to Open WebUI, all requests originating from the UI can be clearly attributed to a single client. This makes it possible to manage access centrally, for example by restricting which models can be used, applying rate limits, or tracking usage.

Using a shared or provider-level key would bypass this control layer. Open WebUI would still function, but LiteLLM would no longer be able to distinguish its traffic from other clients. This reduces observability and makes it harder to enforce policies or investigate issues.

A dedicated virtual key also aligns with how Open WebUI is designed. The application expects a single API key for its OpenAI-compatible backend and uses it for all user requests. By mapping this key to a LiteLLM virtual key, you ensure that Open WebUI integrates cleanly into the overall architecture without exposing underlying provider (e.g. OpenAI, Anthropic or other local or remote inference backend) credentials.

This virtual key will be used as the value for the `OPENAI_API_KEY` variable in the next step.
:::

### Creating the Secret

Before deploying Open WebUI, a Kubernetes `Secret` must be created, **openwebui-secrets.yaml** to provide the required runtime configuration and credentials:

```yaml title="openwebui-secrets.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: openwebui-secrets
type: Opaque
stringData:
  OPENAI_API_KEY: <OPENAI_API_KEY>
  WEBUI_SECRET_KEY: <WEBUI_SECRET_KEY>
  HF_TOKEN: <HF_TOKEN>
```

:::note
Each key in this secret serves a specific purpose:

- `OPENAI_API_KEY`: is used by Open WebUI when it connects to an OpenAI-compatible API endpoint. In this blueprint, the endpoint is LiteLLM, which exposes an OpenAI-compatible interface. The key allows Open WebUI to authenticate requests sent to that endpoint. Even if LiteLLM is deployed inside the same Kubernetes cluster, the key should still be treated as a credential.
- `WEBUI_SECRET_KEY`: is required to keep user sessions and encrypted application data stable across restarts. Open WebUI uses this value to sign login tokens and encrypt sensitive data. If the value changes when a pod is recreated, users may be logged out and previously encrypted tokens or credentials may no longer be readable. For production deployments, this value must be generated once, stored securely, and reused across all OpenWebUI replicas.
- `HF_TOKEN`: is used to authenticate against Hugging Face. Open WebUI may use Hugging Face resources for model-related functionality, such as downloading embedding models or accessing gated model assets. The token is not always required for basic operation, but it is useful when the deployment depends on Hugging Face-hosted resources that require authentication.

In this blueprint, the `Secret` separates sensitive runtime credentials from the public Helm configuration. This makes the configuration easier to maintain and reduces the risk of exposing API keys, session-signing secrets, or third-party access tokens.
:::

```bash
kubectl apply -f openwebui-secrets.yaml -n openwebui-secrets.yaml
```

### Creating the Database in PostgreSQL

Before deploying Open WebUI, the PostgreSQL database must be prepared. Open WebUI expects an existing database to connect to; it **does not** create it automatically.

To do this, connect to your PostgreSQL RDS instance and create the required database and, if needed, a dedicated user with the appropriate privileges. You can execute the SQL commands using any PostgreSQL client. A common approach in T Cloud Public environments is to use a bastion host. In that case, install the psql client tools on the bastion and connect directly to the RDS endpoint. Alternatively, you can create a temporary pod inside your Kubernetes cluster and use it as a client. The following manifest starts a minimal container with the PostgreSQL client installed:

```yaml title="psql-debug.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: psql-debug
spec:
  containers:
    - name: psql
      image: postgres:17
      command: ["sleep", "infinity"]
      tty: true
      stdin: true
  restartPolicy: Never
```

Apply the manifest and connect to the pod:

```bash
kubectl apply -f psql-debug.yaml
kubectl exec -it psql-debug -- bash
```

and from within the container, connect to your RDS instance:

```bash
psql "host=<RDS_OPENWEBUI_POSTGRES_URL> port=5432 dbname=postgres user=root password=<RDS_OPENWEBUI_ROOT_PASSWORD> sslmode=require"
```

Once connected, create the database required by Open WebUI:

```sql
CREATE DATABASE openwebui;

GRANT CONNECT ON DATABASE openwebui TO root;
GRANT ALL PRIVILEGES ON DATABASE openwebui TO root;

GRANT USAGE, CREATE ON SCHEMA public TO root;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO root;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO root;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT ALL PRIVILEGES ON TABLES TO root;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT ALL PRIVILEGES ON SEQUENCES TO root;

ALTER SCHEMA public OWNER TO root;
```

## Deploying with Helm Chart

In this section, Ollama is going to be deployed using the [official Helm chart](https://github.com/open-webui/helm-charts). Helm provides a consistent way to define, install, and manage Kubernetes applications, allowing the deployment to be versioned and reproducible. Using the Helm chart simplifies the setup of Open WebUI on CCE, as configuration such as GPU usage, resource allocation, and networking can be managed through a single values file. This approach also makes it easier to adjust the deployment later as requirements evolve.

```bash
helm repo add open-webui https://open-webui.github.io/helm-charts
helm repo update
```

## Preparing the Helm Chart values

We need to create a values file, namely **openwebui-values.yaml**:

### Persistence

In a production deployment of Open WebUI, persistence is not handled by a single component. Instead, it is distributed across several storage backends, each responsible for a specific type of data. Understanding this separation is important when configuring the system and when troubleshooting data-related issues.

* OpenWebUI uses PostgreSQL as its primary data store once an external database is configured. This database holds all core application data, including user accounts, authentication details, chat history, and conversation metadata. From a platform perspective, PostgreSQL is the authoritative source of truth. If a user expects their conversations or account to persist across sessions, this is the component responsible for it.

* Redis plays a different role. It is used to coordinate real-time communication between the frontend and backend, especially in a multi-replica setup. When multiple OpenWebUI pods are running, Redis ensures that websocket connections and events are correctly shared across instances. It does not store durable application data and should be considered transient, even if it is deployed as a managed service.

* Object storage, in your case Open Telekom Cloud OBS via its S3-compatible interface, is used for file-based data. Whenever users upload documents or attach files, these objects are stored in the configured bucket and prefix. This storage is optimized for larger, unstructured data and complements PostgreSQL, which is designed for structured records. Chat messages themselves remain in the database, while associated files are stored in OBS.

<!-- The Kubernetes `Persistent Volume` defined in the Helm chart serves a local purpose. Even when external services are in place, Open WebUI still requires a writable data directory inside the container. This is used for temporary files, caching, and locally downloaded assets such as embedding models. While this storage is not the primary system of record, it improves stability and avoids repeated initialization work when pods are restarted. -->

![image](/img/docs/blueprints/by-use-case/ai/litellm/Screenshot_From_2026-04-30_12-25-57.png)

In this architecture, each persistence layer has a clear responsibility. PostgreSQL ensures durable application state, Redis enables real-time coordination, OBS handles file storage, and the Persistent Volume supports local runtime operations. This separation allows OpenWebUI to run reliably in a distributed environment while keeping each component aligned with its intended use.

Add the following in **openwebui-values.yaml**:

```yaml
databaseUrl: "postgresql://root:<RDS_OPENWEBUI_POSTGRESQL_PASSWORD>@<RDS_OPENWEBUI_POSTGRESQL_URL>:5432/openwebui?sslmode=require"

websocket:
  url: "redis://:<RDS_OPENWEBUI_REDIS_PASSWORD>@<RDS_OPENWEBUI_REDIS_URL>:6379"
  redis:
    enabled: false

persistence:
  enabled: true
  storageClass: "csi-obs"
  size: 500Gi
  accessModes:
    - ReadWriteMany
  provider: "s3"
  s3:
    endpointUrl: "https://obs.eu-de.otc.t-systems.com"
    region: "eu-de"
    bucket: <BUCKET_NAME>
    accessKey: <ACCESS_KEY>
    secretKey: <SECRET_KEY>
```

:::important
- Replace the values of `RDS_OPENWEBUI_POSTGRESQL_PASSWORD`, `RDS_OPENWEBUI_POSTGRESQL_URL`, `RDS_OPENWEBUI_REDIS_PASSWORD`, `RDS_OPENWEBUI_REDIS_URL`, `BUCKET_NAME`, `ACCESS_KEY` and `SECRET_KEY` with the ones matching your environment.
- The internal Redis deployment is disabled (`redis.enabled: false`) because a Distributed Cache Service instance is already in use. **This is required when running more than one replica**, as it ensures consistent behavior across pods.
:::

### Scaling and Workload Type

Add the following in **openwebui-values.yaml**:

```yaml
replicaCount: 3

workload:
  kind: Deployment
```

Three replicas are deployed to ensure high availability and load distribution. A `Deployment` is used instead of a `StatefulSet` because the application is designed to run in a stateless manner when external services (PostgreSQL, Redis, OBS) are configured.

### Ingress

Add the following in **openwebui-values.yaml** and replace the value of `OPENWEBUI_PUBLIC_URL` with the one matching your own environment:

```yaml
ingress:
  enabled: true
  annotations:
    cert-manager.io/cluster-issuer: opentelekomcloud-letsencrypt
  class: haproxy
  host: <OPENWEBUI_PUBLIC_URL>
  tls: true
```

### Inference Backend & OpenAI API

Open WebUI is configured to use an OpenAI-compatible API endpoint, provided by LiteLLM. This allows Open WebUI to send chat completion requests without directly integrating with external model providers or specific inference backends. That is the reason Ollama is disabled (`ollama.enabled: false`) because model inference is handled externally through LiteLLM.

Add the following in **openwebui-values.yaml**:

```yaml
enableOpenaiApi: true

openaiBaseApiUrl: "http://litellm.litellm-o.svc.cluster.local:4000/v1"

openaiApiKey: ""
openaiApiKeyExistingSecret: "openwebui-secrets"
openaiApiKeyExistingSecretKey: <OPENAI_API_KEY>
```

:::tip
Your backend does not have to be limited to a single LiteLLM instance. Open WebUI can work with a mix of local and remote inference backends.

If you enable pipelines, `pipelines.enabled: true`, you can configure multiple OpenAI-compatible endpoints directly. Each endpoint can represent a different backend, for example a LiteLLM instance, a local inference service, or an external provider exposed through an OpenAI-compatible API.

```yaml
enableOpenaiApi: true

openaiBaseApiUrls:
  - "http://litellm.namespace.svc.cluster.local:4000/v1"   # aggregated backends via LiteLLM
  - "http://local-llm.namespace.svc.cluster.local:8000/v1" # local inference
  - "https://api.external-provider.com/v1"                 # remote provider

openaiApiKeys:
  - <LITELLM_KEY>
  - <LOCAL_KEY>
  - <REMOTE_KEY>
```
:::

### Web Search Integration (Optional)

Web search is enabled using a self-hosted SearXNG instance in the cluster. This allows Open WebUI to augment responses with external search results. Add the following in **openwebui-values.yaml**:

```yaml
  - name: ENABLE_WEB_SEARCH
    value: "true"
  - name: WEB_SEARCH_ENGINE
    value: "searxng"
  - name: WEB_SEARCH_RESULT_COUNT
    value: "3"
  - name: WEB_SEARCH_CONCURRENT_REQUESTS
    value: "5"
  - name: SEARXNG_QUERY_URL
    value: "http://searxng-http.openwebui.svc.cluster.local:8080/search?q=<query>&format=json"
```

#### Deploying SearchXNG (Optional)

If you opted-in for [SearchXNG](https://docs.searxng.org/) integration, we need to additionally deploy it using an [unofficial community Helm Chart](https://charts.kubito.dev). We need to create a values file, namely **searchxng-values.yaml**, and replace `<SECRET_KEY>` with a random-generated value:

```yaml title="searchxng-values.yaml"
env:
  - name: TZ
    value: "Europe/Berlin"

service:
  type: ClusterIP
  port: 8080

config:
  settings:
    data: |
      use_default_settings: true

      server:
        secret_key: <SECRET_KEY>
        limiter: false
        image_proxy: true
        port: 8080
        bind_address: "0.0.0.0"

      botdetection:
        ip_limit:
          filter_link_local: false

      ui:
        static_use_hash: true

      search:
        safe_search: 0
        autocomplete: ""
        default_lang: ""
        formats:
          - html
          - json

      engines:
        - name: wikidata
          disabled: true
        - name: ahmia
          disabled: true
        - name: torch
          disabled: true
```

and then install the Helm Chart:

```bash
helm repo add kubitodev https://charts.kubito.dev
helm repo update

helm upgrade --install searxng kubitodev/searxng \
  --namespace openwebui \
  --create-namespace \
  --values searxng-values.yaml  
```

:::note
SearXNG is an open-source metasearch engine that aggregates results from multiple search providers. It does not track or profile users and can be accessed over Tor to support anonymous browsing. For additional details, refer to the [project’s GitHub repository](https://github.com/searxng/searxng).
:::

## Deploying Open WebUI

After completing the configuration in the previous steps, your **openwebui-values.yaml** should look as follows:

```yaml title="openwebui-values.yaml"
logging:
  level: "info"
ollama:
  enabled: false
pipelines:
  enabled: false
tika:
  enabled: false
terminals:
  enabled: false  
databaseUrl: "postgresql://root:<RDS_OPENWEBUI_POSTGRESQL_PASSWORD>@<RDS_OPENWEBUI_POSTGRESQL_URL>:5432/openwebui?sslmode=require"
websocket:
  url: "redis://:<RDS_OPENWEBUI_REDIS_PASSWORD>@<RDS_OPENWEBUI_REDIS_URL>:6379"
  redis:
    enabled: false
persistence:
  enabled: true
  storageClass: "csi-obs"
  size: 500Gi
  accessModes:
    - ReadWriteMany
  provider: "s3"
  s3:
    endpointUrl: "https://obs.eu-de.otc.t-systems.com"
    region: "eu-de"
    bucket: <BUCKET_NAME>
    accessKey: <ACCESS_KEY>
    secretKey: <SECRET_KEY>
ingress:
  enabled: true
  annotations:
    cert-manager.io/cluster-issuer: opentelekomcloud-letsencrypt
  class: haproxy
  host: <OPENWEBUI_PUBLIC_URL>
  tls: true
replicaCount: 3
workload:
  kind: Deployment
enableOpenaiApi: true
openaiBaseApiUrl: "http://litellm.litellm-o.svc.cluster.local:4000/v1"
openaiApiKey: ""
openaiApiKeyExistingSecret: "openwebui-secrets"
openaiApiKeyExistingSecretKey: <OPENAI_API_KEY>
extraEnvVars:
  - name: ENABLE_SIGNUP
    value: "true"
  - name: ENABLE_LOGIN_FORM
    value: "true"
  - name: ENABLE_PERSISTENT_CONFIG
    value: "true"
  - name: WEBUI_SECRET_KEY
    valueFrom:
      secretKeyRef:
        name: openwebui-secrets
        key: WEBUI_SECRET_KEY
  - name: HF_TOKEN
    valueFrom:
      secretKeyRef:
        name: openwebui-secrets
        key: HF_TOKEN
  - name: ENABLE_WEB_SEARCH
    value: "true"
  - name: WEB_SEARCH_ENGINE
    value: "searxng"
  - name: WEB_SEARCH_RESULT_COUNT
    value: "3"
  - name: WEB_SEARCH_CONCURRENT_REQUESTS
    value: "5"
  - name: SEARXNG_QUERY_URL
    value: "http://searxng-http.openwebui.svc.cluster.local:8080/search?q=<query>&format=json"
```

We can now deploy the chart:

```bash
helm upgrade --install openwebui open-webui/open-webui \
    --namespace openwebui \
    --create-namespace \
    --values openwebui-values.yaml \
    --reset-values
```

## Validation

Once the installation is complete, open `OPENWEBUI_PUBLIC_URL` in your browser and create the initial admin user for this instance.

### Connections

After logging in, navigate to the Open WebUI *Settings* -> *Connections* . This is where the integration with the OpenAI-compatible backend is verified.

[image]

In this deployment, Open WebUI is already preconfigured to use LiteLLM as its backend. The connection should therefore appear automatically without requiring manual input. Confirm that the configured base URL points to the internal LiteLLM service and that the connection is marked as available.

If the connection is not working, verify that the API key is correctly loaded from the Kubernetes Secret and that the LiteLLM service is reachable within the cluster.

### Models

Open WebUI retrieves the list of available models from the configured backend. In this setup, LiteLLM aggregates models from different inference providers and exposes them through a single API.

Open the *Models* section and confirm that models are listed. The exact set of models depends on how LiteLLM is configured. If no models appear, this typically indicates an issue with the backend connection rather than Open WebUI itself.

[image]

Return back to the chat area, select a model and start a test conversation to validate that requests are correctly routed through LiteLLM to the underlying inference provider.

### Web Search

If web search is enabled, Open WebUI can augment responses with external search results. In this deployment, SearXNG is used as the search backend.

Open the *Web Search* section or initiate a query that requires external information. Verify that search results are returned and integrated into the response. If no results are shown, check that the SearXNG service is reachable and that the query URL is correctly configured.

[image]

This step confirms that Open WebUI can access external data sources in addition to the configured LLM backends.