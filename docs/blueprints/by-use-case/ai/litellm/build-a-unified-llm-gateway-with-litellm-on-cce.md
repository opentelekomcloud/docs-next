---
id: litellm
title: Build a Unified LLM Gateway with LiteLLM on CCE
tags: [cce, llm, litellm, ollama, openwebui, ai]
---

# Build a Unified LLM Gateway with LiteLLM on CCE

An LLM gateway acts as a centralized entry point for all interactions between applications and large language models. Rather than binding applications to specific model APIs or providers, **the gateway introduces a stable interface that abstracts the underlying inference layer**. This separation allows platform teams to control how requests are routed, which models are used, and where inference is executed, without requiring changes at the application level. In environments where multiple model backends coexist, such as locally hosted models on GPU infrastructure and external inference services— the gateway becomes the control plane for traffic management, policy enforcement, and operational consistency.

From a platform perspective, an LLM gateway is also where concerns such as **authentication**, **rate limiting**, **observability**, and **cost governance** are enforced. It enables strategies like provider failover, workload-based routing, and gradual adoption of new models. This is particularly relevant in regulated or cost-sensitive environments, where decisions about whether to process requests on sovereign infrastructure or external providers must be made dynamically and transparently.

[LiteLLM](https://github.com/BerriAI/litellm) implements this gateway pattern as a lightweight proxy designed for multi-provider LLM access. It exposes an OpenAI-compatible API, allowing existing clients and tools to integrate without modification, while abstracting the differences between various inference backends. Behind this interface, **LiteLLM can route requests to local runtimes or external providers, enabling a hybrid inference model**. It supports basic routing logic, fallback handling, and centralized credential management, which reduces the complexity of operating multiple LLM integrations.

Deployed on CCE, LiteLLM becomes the central ingress point for LLM workloads within the cluster. It can route requests to locally hosted models running on GPU-enabled nodes or forward them to external inference providers, depending on policy or workload requirements. This setup provides a flexible foundation for building AI platforms that need to balance performance, cost, and data residency constraints while maintaining a consistent interface for application developers.

## Solution Overview

As already mentioned, LiteLLM routes requests not only to external providers but also to locally hosted inference backends running on GPU nodes inside the cluster (or even in ECS instances). In this setup, [Ollama](https://ollama.com/) and [vLLM](https://docs.vllm.ai/en/stable/) represent two different ways of serving models within that local layer. In this blueprint, Ollama is used as the initial local inference backend due to its simplicity and fast setup, making it well suited for demonstrating the architecture and validating the integration flow. A follow-up blueprint will cover a deployment based on vLLM, focusing on scenarios where higher performance and more efficient GPU utilization are required.

![image](/img/docs/blueprints/by-use-case/ai/litellm/Screenshot_2026-04-28_102538.png)

[Open WebUI](https://docs.openwebui.com/) is the interface through which users interact **non-programmatically** with the models. It connects to LiteLLM using its OpenAI-compatible API and **does not communicate directly with any underlying inference backend**. This keeps the frontend decoupled from the actual model infrastructure.

In practical terms, Open WebUI serves as a lightweight chat and experimentation interface. It allows users to select models, send prompts, and view responses without needing to understand where or how the models are hosted. **All requests generated through the UI are forwarded to LiteLLM, which then decides whether to route them to a local backend such as Ollama or to an external provider**.

This separation of concerns is intentional. Open WebUI focuses purely on interaction and usability, while LiteLLM handles routing, backend abstraction, and policy enforcement. As a result, changes to the inference layer—such as switching from Ollama to a vLLM-based deployment—do not impact the user interface or require reconfiguration on the client side.

:::info
Ollama acts as a self-contained runtime for running and managing LLMs locally. It simplifies model lifecycle operations such as pulling, starting, and exposing models through an API. This makes it straightforward to get a local inference service running quickly, especially in environments where ease of deployment and operational simplicity are more important than squeezing out maximum throughput. In the context of this architecture, Ollama is the component that exposes locally hosted models to LiteLLM, which then treats it as just another backend.

vLLM, on the other hand, is designed as a high-performance inference engine optimized for serving large models efficiently on GPU infrastructure. It focuses on maximizing throughput and minimizing latency under concurrent workloads. Compared to Ollama, it typically requires more deliberate setup and integration, but it offers better resource utilization and scalability, which becomes relevant in production scenarios with higher demand.

From the perspective of LiteLLM, both Ollama and vLLM can be treated as interchangeable backends as long as they expose a compatible API (commonly OpenAI-style endpoints). LiteLLM abstracts the differences between these runtimes, allowing requests to be routed to either without changing the client-side integration. This means that the choice between Ollama and vLLM is primarily an operational decision rather than an architectural one.
:::

#### Prerequisites

1. a **Cloud Container Engine (CCE)** cluster, with at least one GPU node 
2. A domain name with DNS management delegated to the T Cloud Public DNS service
3. a bastion host in **Elastic Cloud Service (ECS)**; *optional but strongly recommended*
4. a **Distributed Cache Service** Redis instance
5. a **Relational Database Service** PostgreSQL server

## Creating a CCE Cluster

To proceed with the setup, you'll need to provision a Cloud Container Engine (CCE) cluster. Use the T Cloud Public wizard for cluster creation, and pay close attention to the following configuration specifics:

- **High Availability (HA)**: For this blueprint, a non HA-cluster was used **which is not advised for production workloads**. However, if your workload demands fault tolerance and availability guarantees, consider enabling HA during creation, as this setting is immutable post-deployment.
- **Network Placement**: Ensure the CCE cluster is provisioned within the **same VPC** as the RDS instance to facilitate secure and low-latency communication.
- **Subnet Configuration**: If you're using a single Subnet for both services, place the CCE worker nodes in the **same Subnet** as the RDS instance to align with the predefined security group and routing rules.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231211-fp6.png)

:::caution
Decide on the access method you'll use to interact with the CCE cluster post-deployment. There are two main options:

1. **Assigning an Elastic IP (EIP)** and allowing direct access over the public Internet.  
2. **Provisioning a bastion host** in a public Subnet within the same VPC, and using it as a secure jump point to reach internal resources.

While the first option is quicker to set up, **the recommended approach is to use a bastion host**. This method significantly reduces the attack surface by isolating the cluster from direct Internet exposure. The bastion can be tightly locked down with security groups and monitored more easily, aligning with best practices for secure infrastructure access.
:::

## Preparing the CCE Cluster

### External Traffic

Before deploying our workload, the CCE cluster must be equipped with a set of foundational components. In this section, we'll install and configure essential prerequisites such as an ingress controller for routing external traffic, cert-manager for managing TLS certificates, and other supporting workloads. These components establish the baseline infrastructure required to expose services securely and ensure smooth operation of the application stack within the Kubernetes environment.

:::danger Before you continue
Before proceeding, external access to the services deployed in CCE must be configured. This blueprint assumes the use of the [HAProxy Kubernetes Ingress Controller](https://www.haproxy.com/documentation/kubernetes-ingress/) to expose LiteLLM and related components.

Follow the steps described in the best practice [Enabling External Traffic with Ingress & TLS](/docs/best-practices/containers/cloud-container-engine/enabling-external-traffic-with-ingress-api), and make sure to go for the HAProxy option during the setup. This ensures that incoming traffic is properly routed into the cluster and secured using TLS.

Do not continue with the next steps until ingress and TLS are correctly configured, as the subsequent components depend on a working external endpoint.
:::

### GPU Nodes & NVIDIA Drivers



## Creating PostgreSQL Clusters with RDS

LiteLLM and OpenWebUI are stateful components when used beyond simple testing scenarios, as they rely on persistent storage for configuration, session data, and operational metadata. To ensure this data is retained across pod restarts and upgrades, a PostgreSQL database is required.

While it is technically possible to deploy PostgreSQL as a workload within CCE, this introduces additional operational overhead in terms of maintenance, backups, and high availability. For this reason, the Relational Database Service (RDS) on T Cloud Public is the preferred option. It provides a fully managed PostgreSQL offering with built-in high availability, automated backups, and seamless integration into the platform, reducing the administrative burden.

In this step, will provision PostgreSQL instances using T Cloud Public RDS service. We will deploy one database per workload to keep concerns separated and simplify operations. LiteLLM uses the database to persist configuration such as model mappings, routing rules, and API key management. This ensures that routing logic and access control remain consistent across restarts and deployments. OpenWebUI requires a database to store user data, chat history, and application settings. Without persistent storage, user interactions and configurations would be lost on pod restarts.

:::tip
Size each database instance based on the expected usage of the respective component. For production environments, choose an instance class that can handle the anticipated connection load and data growth, and configure storage to provide stable performance. This approach keeps both services reliable while maintaining clear separation of responsibilities.
:::

When provisioning the PostgreSQL instances, ensure the following network and security configurations are in place:

- Create a Security Group, namely `rds-instances`, as described in best practice: [Configure Security Groups for PostgreSQL RDS Instances and Clients](/docs/best-practices/databases/relational-database-service/configure-sg-for-rds-instances.md).
- Deploy the RDS instance within the same Virtual Private Cloud (VPC) as your CCE cluster to enable low-latency, private network communication between the application and the database.
- Attach the previously created `rds-instances` Security Group to each RDS instance (replace the `default` one). This group must allow **inbound** traffic on port `5432` from the Subnet or Security Group associated with the CCE nodes to enable secure database access.
- Add a rule allowing **outbound** traffic on port `5432` to the dedicated Security Groups of the worker nodes of the CCE cluster.

## Creating a Redis Cluster with DCS

Open WebUI requires a Redis instance to handle in-memory data such as user sessions and caching. This is necessary to support responsive interactions in the web interface and to maintain session state across multiple requests, especially when the application is scaled across multiple replicas.

Instead of deploying Redis within CCE, this blueprint uses the managed Distributed Cache Service (DCS) of T Cloud Public. DCS provides a fully managed Redis-compatible service with built-in high availability, replication, and monitoring. This removes the need to manage failover, patching, and scaling manually.
