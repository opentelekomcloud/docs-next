---
id: crossplane
title: Crossplane
tags: [crossplane, devops, platform-engineering, cce, infrastructure]
---

# Crossplane

[Crossplane](https://www.crossplane.io/) is an open-source Kubernetes add-on that extends Kubernetes' functionality by enabling it to manage infrastructure resources. It allows Kubernetes to serve as a control plane for provisioning and managing infrastructure such as databases, cloud services, and other external systems, similar to how it manages containerized applications.

## Overview

### Key Features

1. **Infrastructure as Code**: Crossplane allows users to define and manage infrastructure using Kubernetes-native declarative configurations (YAML files), promoting consistency and version control.

2. **Composability**: Crossplane enables users to create reusable infrastructure components, which can be composed into higher-level abstractions. This makes it easier to manage complex infrastructure setups.

3. **Extensibility**: It supports a wide range of cloud providers (like AWS, GCP, Azure & Open Telekom Cloud) and on-premises environments. Users can extend Crossplane by writing their own custom resource definitions (CRDs) and controllers.

4. **Seamless Integration**: By integrating with Kubernetes, Crossplane leverages Kubernetes' existing ecosystem, including its API, RBAC, and ecosystem tools, to provide a unified management interface.

5. **Cross-Provider Portability**: Crossplane abstracts the underlying infrastructure provider details, allowing for easier migration and multi-cloud strategies. It offers a consistent API regardless of the provider.

### How Crossplane Works

- **Custom Resource Definitions (CRDs)**: Crossplane defines CRDs for various infrastructure resources (like databases, storage, networking, etc.). These CRDs extend Kubernetes' API to manage non-container resources.

- **Controllers**: Crossplane controllers watch for changes to these CRDs and take actions to ensure that the current state matches the desired state, provisioning and managing resources as needed.

- **Providers**: Crossplane uses providers to interact with specific cloud services or infrastructure resources. Providers encapsulate the logic for managing resources on different platforms.

### Use Cases

- **Cloud Resource Management**: Provision and manage cloud resources such as databases, virtual machines, and networking components using Kubernetes-native tools.
- **Hybrid Cloud Deployments**: Manage resources across multiple clouds and on-premises environments from a single control plane.
- **DevOps Automation**: Automate the lifecycle management of infrastructure alongside application deployment processes.

Crossplane essentially brings the principles of Kubernetes orchestration to infrastructure management, enabling a more unified and streamlined approach to handling both application and infrastructure resources within the same ecosystem.

:::note
You can read more in the official [Crossplane Documentation](https://docs.crossplane.io/v1.16/).
:::

## Installing Crossplane

:::note
In order to execute the rest of the blueprint, an existing CCE Cluster is necessary.
:::

We are going to install Crossplane using the official Helm chart:

```bash
helm repo add crossplane-stable https://charts.crossplane.io/stable
helm repo update

helm install crossplane \
--namespace crossplane-system \
--create-namespace crossplane-stable/crossplane 
```

After installing, the Helm chart will create two deployments in the `crossplane-system` namespace to deploy the Crossplane pods:

```shell
kubectl get deployments -n crossplane-system

NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
crossplane                1/1     1            1           8m13s
crossplane-rbac-manager   1/1     1            1           8m13s
```

## Installing Open Telekom Cloud Crossplane Provider

Open Telekom Cloud comes with its own Crossplane provider ([provider-opentelekomcloud](https://github.com/opentelekomcloud/provider-opentelekomcloud)) that is built using [Upjet](https://github.com/crossplane/upjet) code generation tools and exposes XRM-conformant managed resources for the Open Telekom Cloud API.

Deploy with `kubectl apply -f` the following manifests:

1. Installing the Provider

   ```yaml title="provider.yaml"
    apiVersion: pkg.crossplane.io/v1
    kind: Provider
    metadata:
        name: provider-opentelekomcloud
    spec:
        package: xpkg.upbound.io/opentelekomcloud/provider-opentelekomcloud:v0.1.0
   ```

2. Installing the Provider Credentials

    Pass the Open Telekom Cloud credentials as a Kubernetes `Secret`:

    ```yaml title="provider-creds.yaml"
    apiVersion: v1
    kind: Secret
    metadata:
    name: provider-opentelekomcloud-creds
    namespace: crossplane-system
    type: Opaque
    stringData:
    credentials: |
        {
        "user_name": "${user_name}",
        "password": "${password}",
        "auth_url": "https://iam.eu-de.otc.t-systems.com/v3",
        "domain_name": "OTC00000000001000XXXXX",
        "tenant_name": "${tenant_name}",
        "swauth": "false",
        "allow_reauth": "true",
        "max_retries": "2",
        "max_backoff_retries": "6",
        "backoff_retry_timeout": "60",
        "insecure": "false"
        }
   ```

   :::note
   Fill in `user_name`, `password`, `domain_name` and `tenant_name` with your organization's values.
   :::

3. Installing the Provider Configuration

    ```yaml title="provider-config.yaml"
    apiVersion: opentelekomcloud.crossplane.io/v1beta1
    kind: ProviderConfig
    metadata:
    name: default
    spec:
    credentials:
        source: Secret
        secretRef:
        name: provider-opentelekomcloud-creds
        namespace: crossplane-system
        key: credentials
   ```

:::note
After a couple of minutes the `Provider` will deploy the necessary `Pod`s and `CRD`s of the Crossplane Provider for Open Telekom Cloud.
:::
