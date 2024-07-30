---
id: crossplane
title: Crossplane
tags: [crossplane, devops, platform-engineering, cce, infrastructure]
---

# Crossplane

[Crossplane](https://www.crossplane.io/) is an open-source Kubernetes add-on that extends Kubernetes' functionality by enabling it to manage infrastructure resources. It allows Kubernetes to serve as a control plane for provisioning and managing infrastructure such as databases, cloud services, and other external systems, similar to how it manages containerized applications.

## Key Features

1. **Infrastructure as Code**: Crossplane allows users to define and manage infrastructure using Kubernetes-native declarative configurations (YAML files), promoting consistency and version control.

2. **Composability**: Crossplane enables users to create reusable infrastructure components, which can be composed into higher-level abstractions. This makes it easier to manage complex infrastructure setups.

3. **Extensibility**: It supports a wide range of cloud providers (like AWS, GCP, Azure & Open Telekom Cloud) and on-premises environments. Users can extend Crossplane by writing their own custom resource definitions (CRDs) and controllers.

4. **Seamless Integration**: By integrating with Kubernetes, Crossplane leverages Kubernetes' existing ecosystem, including its API, RBAC, and ecosystem tools, to provide a unified management interface.

5. **Cross-Provider Portability**: Crossplane abstracts the underlying infrastructure provider details, allowing for easier migration and multi-cloud strategies. It offers a consistent API regardless of the provider.

## How Crossplane Works

- **Custom Resource Definitions (CRDs)**: Crossplane defines CRDs for various infrastructure resources (like databases, storage, networking, etc.). These CRDs extend Kubernetes' API to manage non-container resources.

- **Controllers**: Crossplane controllers watch for changes to these CRDs and take actions to ensure that the current state matches the desired state, provisioning and managing resources as needed.

- **Providers**: Crossplane uses providers to interact with specific cloud services or infrastructure resources. Providers encapsulate the logic for managing resources on different platforms.

## Use Cases

- **Cloud Resource Management**: Provision and manage cloud resources such as databases, virtual machines, and networking components using Kubernetes-native tools.
- **Hybrid Cloud Deployments**: Manage resources across multiple clouds and on-premises environments from a single control plane.
- **DevOps Automation**: Automate the lifecycle management of infrastructure alongside application deployment processes.

Crossplane essentially brings the principles of Kubernetes orchestration to infrastructure management, enabling a more unified and streamlined approach to handling both application and infrastructure resources within the same ecosystem.
