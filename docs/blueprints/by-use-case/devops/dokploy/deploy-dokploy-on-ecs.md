---
id: deploy-dokploy-on-ecs
title: Deploy Dokploy on ECS
tags: [dokploy, paas, ecs, docker, swarm]
---

# Deploy Dokploy on ECS

This section of the blueprint explains how to deploy a highly available Dokploy platform on a fleet of Elastic Cloud Servers (ECS). It covers the configuration of the required Open Telekom Cloud services, including VPC, NAT Gateway, Elastic Load Balancer, RDS, and DCS, as well as the setup of the core Dokploy components such as the backend, frontend, and the Traefik ingress controller.

## Preparing Networking

### Creating Network Components

#### Creating VPC and Subnets

Go to *Open Telekom Cloud Console* -> *Network Console* -> *Virtual Private Cloud* and click *Create VPC*. Create a VPC (let's call it for the rest of this lab `vpc-dokploy`) with the IPv4 CIDR block `10.199.0.0/16`, and define three subnets:

- `10.199.10.0/24`: for connectivity components (NATGW, ELB and bastion host)
- `10.199.11.0/24`: for Swarm nodes
- `10.199.12.0/24`: for RDS and DCS instances

:::tip
You may choose any IP address range that fits your environment, provided the VPC is allocated a `/16` network.
:::

#### Creating a NAT Gateway

Go to *Open Telekom Cloud Console* -> *Network Console* -> *NAT Gateway* and click *Create Public NAT Gateway*. Call it `nat-dokploy` and assign it to the `vpc-dokploy` VPC and place it in the subnet `10.199.10.0/24`. Set **Specifications** to `Small` and click *Create Now*. Skip adding rules at this stage; we will configure them later.

#### Creating an Elastic Load Balancer

Go to *Open Telekom Cloud Console* -> *Network Console* -> *Elastic Load Balancing* and click *Create Elastic Load Balancer*. Name the instance `elb-dokploy` and configure it with the following settings, and click *Create Now* -> *Submit*:

- **Type**: `Dedicated`
- **AZ**: select *all* the available options
- Enable both **Application** and **Network Load Balancing** (choose the specs that fit more to your needs)
- **VPC**: `vpc-dokploy`
- **Frontend Subnet**: `10.199.10.0/24`
- **Backend Subnet**: `10.199.11.0/24`
- **EIP**: select *New IP*
- **Bandwidth**: `300Mbit/s`

### Creating DNS Records

## Creating a PostgreSQL Database

1. Go to *Open Telekom Cloud Console* -> *Relational Database Service* and click **Create DB Instance**. Name the instance `rds-dokploy` and configure it with the following settings:

   - **DB Engine**: `PostgreSQL`
   - **DB Engine Version**: `17`
   - **DB Instance Type**: `Primary/Standby`
   - **Primary AZ**: `eu-de-01`
   - **Standby AZ**: `eu-de-02`
   - **Instance Class**: `Dedicated`
   - **Storage Space**: `150GB` (you can scale later according to your needs)
   - **VPC**: `vpc-dokploy` and **Subnet**: `10.199.12.0/24`
  
    Finally provide a password for **root** and click *Create Now*:
  
    :::tip
    You can create a strong, secure, random password of your choice with, e.g.:

    ```shell
    openssl rand -base64 32
    ```

    :::

2. Next, configure the required Security Groups as outlined in [Configure Security Groups for PostgreSQL RDS Instances and Clients](/docs/best-practices/databases/relational-database-service/configure-sg-for-rds-instances).

    :::important
    In this setup, ensure the inbound rule for **rds-instances** allows traffic from `10.199.11.0/24` (the subnet hosting the Swarm nodes), and the outbound rule of **rds-clients** permits traffic to `10.199.12.0/24` (the subnet where the RDS instances reside).
    :::

3. After the RDS instance has been created, update its configuration to use the **rds-instances** Security Group instead of the **default** one.

## Creating a Redis Instance

#### Creating Security Groups

4. Go to *Open Telekom Cloud Console* -> *Network Console* -> *Access Control* -> *Security Groups*

## Preparing Computing

### Creating Manager Nodes

### Creating Worker Nodes

### Creating a Bastion Node

## Preparing Connectivity

### Creating a wildcard Certificate

### Creating ELB Listeners

### Configurating SNAT & DNAT Rules

## Preparing Storage

### Preparing SFS Turbo

### Preparing OBS

## Creating the Swarm

### Adding Nodes
