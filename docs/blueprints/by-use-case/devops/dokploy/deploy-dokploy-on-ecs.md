---
id: deploy-dokploy-on-ecs
title: Deploy Dokploy on ECS
tags: [dokploy, paas, ecs, docker, swarm]
---

# Deploy Dokploy on ECS

This section of the blueprint explains how to deploy a highly available Dokploy platform on a fleet of Elastic Cloud Servers (ECS). It covers the configuration of the required Open Telekom Cloud services, including VPC, NAT Gateway, Elastic Load Balancer, RDS, and DCS, as well as the setup of the core Dokploy components such as the backend, frontend, and the Traefik ingress controller.

## Preparing Networking

### Creating a VPC and Subnets

### Creating a NAT Gateway

### Creating an Elastic Load Balancer

### Creating Security Groups

## Preparing Computing

### Creating Manager Nodes

### Creating Worker Nodes

### Creating a Bastion Node

## Preparing Connectivity

### Creating a wildcard Certificate

### Creating an ELB Listener

### Configurating SNAT & DNAT Rules

## Preparing Storage

### Preparing SFS Turbo

### Preparing OBS

## Creating the Swarm

### Adding Nodes

