---
id: self-service-app-hosting-with-dokploy-on-otc
title: Self-Service App Hosting with Dokploy on Open Telekom Cloud
tags: [devops, ci, cd, cicd, dokploy, paas, ecs, docker, swarm]
---

# Self-Service App Hosting with Dokploy on Open Telekom Cloud

This blueprint describes how to deploy [Dokploy](https://dokploy.com/) as a lightweight application platform on Open Telekom Cloud. The setup uses Docker Swarm for container orchestration and [Traefik](https://doc.traefik.io/traefik/) as the ingress controller, combined with an Elastic Load Balancer (ELB) for TLS termination and secure external access. The architecture runs on multiple Elastic Cloud Servers (ECS) in a high-availability configuration, with a bastion host for administrative access and a NAT gateway for outbound connectivity.

Dokploy provides a developer-friendly interface for deploying and managing applications, integrating seamlessly with Git repositories and automating domain routing through Traefik. Applications are exposed via the ELB using custom subdomains with DNS records pointing to the load balancer. Persistence is achieved with Elastic Volume Service (EVS) storage, and the design supports both single-tenant and multi-tenant usage scenarios.

This blueprint enables customers to offer self-service application hosting without the operational complexity of Kubernetes, while still relying on scalable, secure, and well-integrated Open Telekom Cloud services. It is suitable for small and medium-sized enterprises, software vendors, and internal IT teams that require a straightforward but production-ready platform for hosting web applications.

## Prerequisites


