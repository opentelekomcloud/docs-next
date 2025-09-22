---
id: dokploy
title: Build a Self-Service App Hosting Platform with Dokploy
tags: [devops, ci, cd, cicd, dokploy, paas, ecs, docker, swarm]
---

# Build a Self-Service App Hosting Platform with Dokploy

This blueprint describes how to deploy [Dokploy](https://dokploy.com/) as a lightweight application platform on Open Telekom Cloud. The setup uses [Docker Swarm](https://docs.docker.com/engine/swarm/) for container orchestration and [Traefik](https://doc.traefik.io/traefik/) as the ingress controller, combined with an Elastic Load Balancer (ELB) for TLS termination and secure external access. The architecture runs on multiple Elastic Cloud Servers (ECS) in a high-availability configuration, with a bastion host for administrative access and a NAT gateway for outbound connectivity.

Dokploy provides a developer-friendly interface for deploying and managing applications, integrating seamlessly with Git repositories and automating domain routing through Traefik. Applications are exposed via the ELB using custom subdomains with DNS records pointing to the load balancer. Persistence is achieved with Elastic Volume Service (EVS) storage, and the design supports both single-tenant and multi-tenant usage scenarios.

This blueprint enables customers to offer self-service application hosting without the operational complexity of Kubernetes, while still relying on scalable, secure, and well-integrated Open Telekom Cloud services. It is suitable for small and medium-sized enterprises, software vendors, and internal IT teams that require a straightforward but production-ready platform for hosting web applications.

:::info
**Dokploy relies on Docker Swarm as its underlying orchestration engine**. This is not an optional component but part of the platform’s design, which means Swarm is used inevitably when deploying Dokploy in production. While Swarm does not offer the same ecosystem or feature depth as Kubernetes, it provides a straightforward and stable clustering model that integrates natively with Docker. In this context, Swarm is not positioned as a competitor to Kubernetes, but as the simplest way to run Dokploy with high availability and secure ingress.

Docker Swarm remains a practical option for container orchestration when the requirements are focused on simplicity and fast setup rather than the extensive feature set of Kubernetes. While it does not receive the same pace of innovation as Kubernetes, it is still maintained within Docker and can deliver stable clustering capabilities with far less operational overhead. For teams that need to run containerized applications reliably but do not want to invest in the complexity of Kubernetes, Swarm offers a lean alternative that integrates directly with Docker tooling. It is well suited for small to medium environments, proof-of-concept deployments, or cases where ease of management and rapid onboarding are more important than advanced orchestration functions.

For customers who value a **lightweight platform with minimal operational complexity**, Swarm serves as a pragmatic foundation that allows Dokploy to deliver self-service application hosting on Open Telekom Cloud.
:::

## Prerequisites

- **Virtual Private Cloud (VPC)**: A dedicated network environment hosting all components, with appropriate subnets for managers, workers, and the bastion host, RDS and DCS instances.
- **Elastic Load Balancer (ELB)**: One load balancer configured to terminate TLS and forward HTTP traffic to the Swarm managers.
- **NAT Gateway (NATGW)**: For secure outbound internet access from ECS instances without assigning them direct public IPs.
- **Elastic IPs (EIP) x2**: A public IP address associated with the ELB to make the platform accessible from the internet, and a public IP address associated with the NATGW.
- **Bastion Host (ECS)**: A hardened ECS instance accessed via DNAT from the NATGW, for administrative SSH access to Swarm nodes.
- **Elastic Cloud Servers (ECS) x6**: At least three servers for Docker Swarm manager nodes. Additional three worker nodes can be provisioned depending on workload needs.
- **Domain Name System (DNS)**: Public DNS records pointing customer domains (e.g. *.apps.example.com) and the Dokploy console to the ELB’s public IP.
- **Relational Database Service (RDS)**: A highly available Postgres database via RDS. Moving Dokploy’s control-plane database to RDS removes the single point of failure and allows you to scale Dokploy beyond one replica without risking metadata loss.
- **Distributed Cache Service (DCS)**: A highly available Redis instance via DCS. Externalizing queues, cache, and session state to DCS ensures deployments and rolling updates don’t interrupt control-plane tasks and that a node failure doesn’t impact Dokploy’s runtime coordination.

:::tip Next Steps

- [Deploy Dokploy on ECS](/docs/blueprints/by-use-case/devops/dokploy/deploy-dokploy-on-ecs.md)
- Configure Dokploy for Open Telekom Cloud
- Deploy Workloads with Dokploy
  
:::
