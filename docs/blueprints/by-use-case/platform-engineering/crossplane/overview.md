---
id: crossplane
title: Crossplane
tags: [crossplane, platform-engineering]
---

# Crossplane

[Crossplane](https://www.crossplane.io/) is an open-source framework for building cloud-native control planes and internal developer platforms. It extends the Kubernetes API and reconciliation model beyond workloads running inside a Kubernetes cluster, allowing Kubernetes to manage external resources such as virtual machines, networks, databases, Kubernetes clusters, and other cloud or API-based services. Platform teams can therefore expose infrastructure through declarative APIs while Crossplane continuously works to keep the actual infrastructure aligned with the desired state.

A central concept in Crossplane is the separation between the infrastructure capabilities exposed to developers and the implementation details required to provide them. Platform teams can define higher-level APIs representing standardized infrastructure or application environments. These APIs can combine multiple underlying resources and apply organizational requirements such as naming conventions, configuration defaults, security controls, and infrastructure policies. Developers can then request these capabilities without having to understand the individual APIs or configuration models of the underlying infrastructure providers.

Crossplane is commonly used as a foundation for platform engineering and infrastructure self-service. Typical use cases include creating internal developer platforms, provisioning and managing cloud infrastructure, implementing reusable infrastructure abstractions, managing resources across multiple infrastructure providers, and applying GitOps practices to infrastructure. Its provider model allows external APIs to be represented as Kubernetes resources, while Crossplane's composition capabilities enable platform teams to combine these resources into reusable platform APIs. This approach can also provide a consistent interface across different infrastructure environments without requiring every application team to work directly with provider-specific APIs.

:::note
Crossplane was created by [Upbound](https://www.upbound.io/) and open-sourced in 2018 and was accepted into the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/) Sandbox in 2020; became an Incubating project in 2021 and reached Graduated status in 2025. Crossplane has since evolved from its original multicloud infrastructure focus into a general-purpose control-plane framework for platform engineering. As of Crossplane 2.x, its scope also encompasses application resources, allowing platform teams to build control planes that manage both applications and their supporting infrastructure.
:::

In summary, Crossplane uses Kubernetes as the foundation for creating a programmable control plane above infrastructure and service APIs. This makes it particularly relevant for organizations building standardized cloud platforms where developers require self-service capabilities while platform teams retain control over how infrastructure is configured and operated.
