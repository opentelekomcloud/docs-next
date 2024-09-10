---
id: using-rds-postgresql-to-setup-umami-on-ecs
title: Using RDS for PostgreSQL to Set Up Umami on ECS
tags: [umami, analytics, web-analytics, ecs, rds, postgresql]
---

# Using RDS for PostgreSQL to Set Up Umami on ECS

In this blueprint we are going to set up Umami on Open Telekom Cloud leveraging an Elastic Cloud Server (ECS), while using Relational Database Service (RDS) for PostgreSQL to manage the database.

## Prerequisites

We are going to need, create and configure the following components:

- a PostgreSQL Instance in RDS: RDS automates database management tasks like backups, patching, and scaling. It simplifies deploying a PostgreSQL instance without needing to manage the infrastructure directly.
- an ECS Server for Umami: The server will be used to run Umami's application layer. You will install and configure Umami on this ECS instance, which will interact with the PostgreSQL database.
- Networking: Set up secure network configurations between your ECS and RDS, ensuring communication between the Umami application and the PostgreSQL instance.
- Deployment: After configuring the ECS and connecting it to the RDS database, you can deploy Umami, connect it to the database, and start monitoring your web traffic.

## Creating an ECS Server

Click on the console *Elastic Cloud Server*->*Create ECS* and pick the flavor and operating system that suits your needs. Make sure though, you place it in the same VPC/Subnet that you are planning to install your RDS DB instance. For this blueprint we are going to set up Ubuntu 22.04 on a *s7n.large.4* flavor. Consequently some of the commands that are going to be executed later, will assume you are working on a Ubuntu (or Debian-based) distribution.  

![alt text](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-10 12-40-41.png>)

## Creating a PostgreSQL Database

We are going to create a single, non highly available PostgreSQL v16. In *Relational Database Service* click *Create DB Instance*:

![Create a Database Wizard Part 1](/img/docs/blueprints/by-use-case/analytics/umami/Screenshot_from_2024-09-09_12-51-39.png)

Make sure you place the database server in the same VPC/Subnet that the ECS instance lives. Choose the flavor of your liking, provide the **root** password and press *Create Now*. For the time being, we are going to make no changes in the Security Groups; we are going to fix this in the next step.

![Create a Database Wizard Part 2](/img/docs/blueprints/by-use-case/analytics/umami/Screenshot_from_2024-09-09_12-52-14.png)

:::note
Picking a single non-HA instance is just for demonstration purposes and **not** suitable for production. While implementing this blueprint adjust instances and replicas according to your needs and volume projections.
:::

## Establishing Connectivity

In *Relational Database Service* click your instance and then navigate to *Connectivity & Security* and under *Connection Topology* choose *Private Connection*:

![Establishing Connectivity](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 13-53-46.png>)

In this blueprint, we are interested in variant 2, where our database instance (with floating IP `172.16.0.30`) needs to establish two-way communication with the ECS(B) instance, which in our case is the ECS instance that hold the Umami installation. For that matter we need to create two Security Groups, one that will allow inbound connections to port `5432` and will be assigned to our RDS instance and a second one that will allow outbound connections from port `5432` and will be assigned to the ECS instance that our workload will run.

### Creating Security Group for RDS

![Adding Inbound Rules for RDS Instances](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-03-16.png>)

For additional security, make sure you set as **Source** the CIDR of the your Subnet (in this case `172.16.0.0/24`); in that way you prohibit anyone access your database outside your VPC/Subnet.

Go back to the *Connectivity & Security* panel of your database and replace under *Security Group Rules* -> *Security Group*, the default Security Group with the one we just created:

![alt text](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-12-28.png>)

### Creating Security Group for ECS

#### Creating Outbound Rule for PostgreSQL

![Adding Outbound Rules for ECS](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-10-01.png>)

In the same notion, set as **Destination** the CIDR of the your Subnet (in this case `172.16.0.0/24`).

On our ECS instance, click *Security Groups* -> *Change Security Group*, and add additionally the new Security Group to the list.

![alt text](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-16-19.png>)

#### Creating Inbound Rule for SSH

You are going to need an additionnal inbound rule to allow actors accessing this ECS Server via SSH. Add in the existing Security Group (or create new one for finer granularity of permissions and reusability among more instances) port `22` in the *Inbound Rules* list, and set the value of **Remote End** as `0.0.0.0/24`.

![alt text](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-10 12-47-36.png>)

:::note
How you are going to establish this SSH connection, is entirely up to you. You can use a bastion or an Elastic IP bound to your ECS or a DNAT Rule in a NAT Gateway. Depends on your needs and your assessment.
:::

## Deploying Umami

### Creating the Database

### Installing Umami