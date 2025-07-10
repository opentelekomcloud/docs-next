---
id: self-hosting-github-runners-on-cce
title: Self-Hosting GitHub Runners on CCE
tags: [devops, ci,cd,ci/cd, github, github-actions, github-runner, cce]
---

# Self-Hosting GitHub Runners on CCE

## Overview

[Self-hosted GitHub runners](https://docs.github.com/en/actions/concepts/runners/about-self-hosted-runners) provide a powerful solution for organizations looking to optimize their CI/CD pipelines while maintaining control over their infrastructure. This blueprint outlines how to self-host and manage GitHub Actions runners using the [Actions Runner Controller (ARC)](https://docs.github.com/en/actions/concepts/runners/about-actions-runner-controller) on CCE.

## Why Self-Host GitHub Runners on Kubernetes?

### Cost Optimization
GitHub-hosted runners can become costly for high-volume workflows. Organizations with significant CI/CD workloads often see major savings by switching to self-hosted options.

### Enhanced Security and Compliance
Self-hosted runners provide several security advantages:
- **Network Isolation**: Runners can access private databases and other internal resources during CI processes.
- **Compliance Requirements**: Organizations in regulated industries can maintain strict data protection and access controls.

### Custom Hardware Requirements
Self-hosted runners support specialized hardware needs such as:
- **Dedicated GPU** instances for machine learning workloads
- Specific **CPU architectures**
- Custom memory configurations
- Specialized development tools and environments



## Architecture Overview

The Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates and scales self-hosted runners for GitHub Actions. ARC creates several custom resource definitions (CRDs) to manage and monitor runners.


For a quick overview of  the architecture, please watch this video:

<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/wQ0k5k6KW5Y?si=6p7_I0bHvYt0fBYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Prerequisites

Before implementing self-hosted GitHub runners on CCE, ensure you have:

1. **CCE Cluster**: Version 1.16 or higher is recommended.
2. **Helm**: Installed and configured for package management.
3. **cert-manager**: Required for SSL certificate management.
4. **kubectl**: Command-line access to your Kubernetes cluster.
5. **GitHub Organization**: Access for configuring GitHub Apps and webhooks in your GitHub Organization.




## Configure GitHub Authentication

ARC supports multiple authentication methods. The recommended approach uses GitHub Apps for enhanced security and functionality.

### Creating a GitHub App for ARC Authentication

1. Navigate to your **GitHub organization settings**.
2. On the left sidebar, under **Developer settings**, click on **GitHub Apps**.
![img](/img/docs/blueprints/by-use-case/devops/self-hosting-github-runners-on-cce/organization-settings.png)
3. Click **New GitHub app** to create a new app owned by your organization, and provide the following details:
![img](/img/docs/blueprints/by-use-case/devops/self-hosting-github-runners-on-cce/new-app.png)

   - **GitHub App name:** Choose a name for the app.
   - **Description:** Briefly describe what your app does (e.g., GitHub runners on CCE).
   - **Homepage URL:** Enter the ARC URL: `https://github.com/actions/actions-runner-controller`
   - **Webhook URL:** Should be disabled. Later, you will create a repository or organization-wide webhook for autoscaling the runners.
   - **Permissions:** Select the following required permissions for the app to work properly:
     - Under **Repository permissions**:
       - **Administration:** Read and write
       - **Metadata:** Read-only
     - Under **Organization permissions**:
       - **Self-hosted runners:** Read and write
   - **Where can this GitHub App be installed?:** Set to **Only on this account**.

4. Click **Create GitHub App** to create the app.

![img](/img/docs/blueprints/by-use-case/devops/self-hosting-github-runners-on-cce/app-permissions.png)
  

### Generating a Private Key

After creating your GitHub App, you need to generate a **private key** to enable secure authentication for API requests. Follow these steps:

1. Navigate to your **GitHub App** page (Go to **Organization settings**, then under **Developer settings** select **GitHub Apps**, and click on your newly created app).
2. Scroll down and under **Private keys**, click **Generate a private key**.
3. The private key will be generated and downloaded to your local machine.

### Installing the GitHub App

Once your app and private key are ready, install the app to your organization:

1. Navigate to your **GitHub App** page (Go to **Organization settings**, then under **Developer settings** select **GitHub Apps**, and click on your newly created app).
2. On the left panel, select **Install App** and click the **Install** button to install the app for all repositories or specific ones based on your needs.
  ![img](/img/docs/blueprints/by-use-case/devops/self-hosting-github-runners-on-cce/Install-app.png)
3. After confirming the installation permissions for your organization, save the app **installation ID**. You will use it later. You can find the app **installation ID** on the app installation page, which has the following URL format:  
   `https://HOSTNAME/organizations/ORGANIZATION/settings/installations/`**`INSTALLATION_ID`**

### Store GitHub App Credentials

:::info Namespace
Create a namespace for GitHub ARC if you don't have one already:
```
kubectl create namespace github-actions
```
:::

Create a Kubernetes secret with your GitHub App credentials:
- **GitHub App ID:** The app's unique identifier. You can find it under the **General** section on the [GitHub App page](#installing-the-github-app).
- **Installation ID:** The installation ID of your organization, collected in the [previous step](#installing-the-github-app).
- **Private Key:** The private key of your GitHub App, downloaded in [earlier steps](#generating-a-private-key).

```bash
kubectl create secret generic controller-manager \
  --namespace github-actions \
  --from-literal=github_app_id=GITHUB_APP_ID \
  --from-literal=github_app_installation_id=INSTALLATION_ID \
  --from-literal=github_app_private_key='PRIVATE_KEY'
```




## Install Actions Runner Controller

Create a `values.yaml` file in your project directory and add the values provided below. Replace the `example.com` domain with your own domain.

```yaml
# values.yaml
replicaCount: 1

authSecret:
  enabled: true
  create: false
  name: "controller-manager"

serviceAccount:
  create: true

service:
  type: ClusterIP
  port: 443

certManagerEnabled: true

logFormat: text

githubWebhookServer:
  enabled: true
  replicaCount: 1
  useRunnerGroupsVisibility: false
  logFormat: text
  secret:
    enabled: true
    create: false
    name: github-selfhosted-webhook-token
  serviceAccount:
    create: true
  ingress:
    enabled: true
    annotations:
      nginx.ingress.kubernetes.io/backend-protocol: "HTTP"
      kubernetes.io/tls-acme: "true"
      cert-manager.io/cluster-issuer: opentelekomcloud-letsencrypt
    ingressClassName: nginx
    tls:
     - secretName: github-webhook-tls
       hosts:
         - github-webhook.example.com
    hosts:
      - host: github-webhook.example.com
        paths:
        - path: /
          pathType: Prefix
```

:::important
To enable the **Runner Autoscaling** feature, **githubWebhookServer** must be enabled.
:::

:::warning caution
The provided annotations for **nginx** and **cert-manager** are required to obtain a TLS certificate for your webhook domain (e.g., **github-webhook.example.com**).
```
kubernetes.io/tls-acme: "true"
cert-manager.io/cluster-issuer: opentelekomcloud-letsencrypt
```
:::

After creating the `values.yaml` file, you can install the controller with Helm by running the following command:

```bash
helm repo add actions-runner-controller https://actions-runner-controller.github.io/actions-runner-controller

helm upgrade --install actions-runner-controller \
  actions-runner-controller/actions-runner-controller \
  --namespace github-actions \
  --create-namespace \
  --version 0.23.7 \
  -f values.yaml
```

After installing the controller, verify that it is running by checking the status of the pods:

```bash
kubectl get pods --namespace github-actions
```

You should see output similar to:

```bash
NAME                                                              READY   STATUS    RESTARTS   AGE
actions-runner-controller-699df99f7-96h96                         2/2     Running   0          40s
actions-runner-controller-github-webhook-server-8649f6764fsxq49   2/2     Running   0          40s
```




## Configure Runner Deployments

A **RunnerDeployment** is a Kubernetes custom resource that automates the management of GitHub Actions runners. An important part of this configuration is defining the runner's **scope**, which dictates which workflows are permitted to use it. This ensures that runners are available exactly where they are needed. **Organization-level runners** create a centralized, shared pool of runners available to all repositories within your GitHub organization. In contrast, **Repository-level runners** are dedicated to a single, specific repository. This provides strong isolation and is the ideal choice for projects with specialized needs, such as unique software requirements or access to sensitive credentials, providing a secure and controlled environment for specific jobs.

Create a YAML file to declare a **RunnerDeployment** for your desired scope (repository or organization).

**Organization-Level Runners**

```yaml
# runner-deployment.yaml
apiVersion: actions.summerwind.dev/v1alpha1
kind: RunnerDeployment
metadata:
  name: org-runners
  namespace: github-actions
spec:
  template:
    spec:
      labels:
        - cce-runner
      organization: your-organization-name
```

**Repository-Level Runners**

```yaml
# runner-deployment.yaml
apiVersion: actions.summerwind.dev/v1alpha1
kind: RunnerDeployment
metadata:
  name: repo-runners
  namespace: github-actions
spec:
  template:
    spec:
      labels:
        - cce-runner
      repository: your-org/your-repo
```

:::tip
You can further customize your **RunnerDeployment** by specifying additional fields such as **resource requests/limits**, a custom **runner image**, or binding **Persistent Volume Claims** (PVCs) for data persistence. You can also provide specific environment variables for various use cases, such as allowing your runner to access internal resources or services securely.
:::

:::warning Important
Make sure the **labels** assigned to your runner exactly match the labels specified in your workflow’s **runs-on** field. If they do not match, your workflow jobs will not run on the intended runner!
:::

Finally, apply the **RunnerDeployment** using the following command:

```bash
kubectl apply -f runner-deployment.yaml
```


## Runners Autoscaling

To ensure efficient resource utilization and responsive scaling of GitHub Actions runners, implement webhook-driven autoscaling. This enables your runners to scale up rapidly in response to workflow demand and scale down when idle, optimizing both performance and cost.

### 1. Register Webhook in GitHub

- Go to your GitHub organization’s **Settings**.
- Select **Webhooks** from the sidebar.
- Click **Add webhook**.
  - **Payload URL:** Enter the endpoint that will receive webhook events (which you provided [earlier](#install-actions-runner-controller), e.g., `https://github-webhook.example.com`).
  - **Content type:** Choose `application/json`.
  - **Secret:** Set a strong secret token (you’ll use this in your Kubernetes secret).
  - **Events to send:** Select **Let me select individual events** and check:
    - `workflow_job`
    - `workflow_run`
- Click **Add webhook**.

![img](/img/docs/blueprints/by-use-case/devops/self-hosting-github-runners-on-cce/add-webhook.png)

### 2. Create the Webhook Secret in Kubernetes

Store the webhook secret as a Kubernetes secret to be used by your webhook receiver:

```bash
kubectl create secret generic github-webhook-token \
  --namespace github-actions \
  --from-literal=GITHUB_WEBHOOK_SECRET_TOKEN=WEBHOOK_SECRET
```

Replace `WEBHOOK_SECRET` with the exact secret set in the [previous step](#1-register-webhook-in-github).

### 3. Configure HorizontalRunnerAutoscaler

Create a YAML file to declare a **HorizontalRunnerAutoscaler** to automatically scale your runners based on workflow job events:

```yaml
# horizontal-runner-autoscaler.yaml
apiVersion: actions.summerwind.dev/v1alpha1
kind: HorizontalRunnerAutoscaler
metadata:
  name: org-runners-autoscaler
  namespace: github-actions
spec:
  minReplicas: 0
  maxReplicas: 30
  scaleTargetRef:
    kind: RunnerDeployment
    name: org-runners
  scaleUpTriggers:
    - duration: 30m
      githubEvent:
        workflowJob: {}
```

**Key configuration points:**
- `minReplicas` and `maxReplicas` define the scaling range.
- `scaleTargetRef` should reference the `RunnerDeployment` resource managing your runners.
- `scaleUpTriggers` listens for incoming `workflow_job` events and scales up runners based on the specified duration after an event is received.

:::danger Cold Start Issues
Runners may experience **cold start** periods when **minimum replicas** is set to 0. If that's problematic for your setup, consider setting `minReplicas: 1` for critical workflows.
:::

Apply the **HorizontalRunnerAutoscaler** using the following command:

```bash
kubectl apply -f horizontal-runner-autoscaler.yaml
```

## Verifying

To ensure your self-hosted runners are properly configured and executing workflows as expected, follow these verification steps to monitor and validate runner behavior.

### 1. Check Runner Registration Status

First, verify that your runners are successfully registered with GitHub:

- Navigate to your GitHub organization **Settings**
- Click **Actions** and then select **Runners**
- Confirm your self-hosted runners appear in the list with **"Idle"** or **"Active"** status
- Note the runner labels (e.g., `self-hosted`, `linux`, `cce-runner`)

:::warning Important
If the **HorizontalRunnerAutoscaler** is resizing the runner replicas to 0, the runners will be removed from the pool and are not visible here. Make sure that you have at least one runner pod running on your cluster by changing the **minReplicas** of the **HorizontalPodAutoscaler**.
:::

![img](/img/docs/blueprints/by-use-case/devops/self-hosting-github-runners-on-cce/runners.png)


:::danger Important
Note that tags like **Linux** and **X64** here are generated by GitHub and are not associated with the runners unless you explicitly set them in the **RunnerDeployment** manifest. If a workflow uses labels that are not set in the **RunnerDeployment** manifest, their jobs will not be picked up by the runners or the **HorizontalRunnerAutoscaler**, and no runner scaling will happen.
:::

### 2. Create a Test Workflow

Create a workflow file in your repository (e.g., `.github/workflows/self-hosted-test.yml`) to validate your self-hosted runners. This workflow tests basic functionality, system information, and network connectivity.

```yaml
name: Self-Hosted Runner Test
on:
  workflow_dispatch:
  push:
    branches: [main]

jobs:
  test-runner:
    runs-on: [cce-runner]
    steps:
      - name: Runner Information
        run: |
          echo "Runner name: $RUNNER_NAME"
          echo "Runner OS: $RUNNER_OS"
          echo "Runner architecture: $RUNNER_ARCH"
          echo "Workspace: $GITHUB_WORKSPACE"
          
      - name: System Information
        run: |
          echo "=== System Info ==="
          uname -a
          echo "=== CPU Info ==="
          nproc
          echo "=== Memory Info ==="
          free -h
          echo "=== Disk Space ==="
          df -h
          
      - name: Kubernetes Context
        run: |
          echo "=== Pod Information ==="
          echo "Hostname: $(hostname)"
          echo "Pod IP: $(hostname -I)"
          if command -v kubectl &> /dev/null; then
            echo "Kubectl available"
            kubectl version --client
          fi
          
      - name: Network Connectivity
        run: |
          echo "=== Network Tests ==="
          ping -c 3 google.com
          curl -I https://api.github.com
```

Run the workflow by navigating to **Actions -> Self-Hosted Runner Test** in your repository and clicking on the **Run workflow** button. Then monitor runners in real-time during workflow execution:

```bash
kubectl get pods -n github-actions -w
```

You can also check the **Jobs** under **Actions -> Self-Hosted Runner Test** in your repository.

![img](/img/docs/blueprints/by-use-case/devops/self-hosting-github-runners-on-cce/test-workflow.png)

### 3. Validate Autoscaling Behavior

Test autoscaling by creating multiple concurrent workflow runs. This tests if your HorizontalRunnerAutoscaler responds correctly to increased demand.

Check HorizontalRunnerAutoscaler status by running:

```bash
kubectl get hra -n github-actions

# Output:
# NAME                     MIN   MAX   DESIRED   SCHEDULE
# org-runners-autoscaler   0     30    3
```

You should see the number of pods increase as the number of concurrent workflows increases.

## Security Best Practices

### Network Security

- **Isolate Runners**: Deploy runners in dedicated namespaces with network policies.
- **Egress Controls**: Configure allow-list policies for outbound connections.

### Access Control

- **Repository Restrictions**: Limit self-hosted runners to specific repositories.

### Runtime Security

- **Ephemeral Runners**: Use ephemeral runners that are destroyed after each job.

## Troubleshooting Common Issues

When runners aren't receiving jobs, check registration tokens, labels, and webhook configuration.

**Runner Not Picking Up Jobs:**
  - Check runner registration credentials are correct:
    ```bash
    kubectl get secret controller-manager -n github-actions -o json | jq '.data | map_values(@base64d)'
    ```
  - Verify runner labels match workflow requirements:
    ```bash
    kubectl describe runnerdeployment org-runners -n github-actions
    ```
  - Check webhook delivery in **Organization Settings -> Webhooks**

**Scaling Issues:**
  - Check webhook secret is correct:
    ```bash
    kubectl get secret github-webhook-token -n github-actions -o json | jq '.data | map_values(@base64d)'
    ```
  - Verify webhook server is running:
    ```bash
    curl https://github-webhook.example.com/health
    ```








