---
id: using-rds-postgresql-to-setup-umami-on-ecs
title: Using RDS for PostgreSQL to Set Up Umami on ECS
tags: [umami, analytics, web-analytics, ecs, rds, postgresql]
---

# Using RDS for PostgreSQL to Set Up Umami on ECS


## Prerequisites

For this blueprint we are going to need:

- an ECS Server
- a PostgreSQL RDS Instance (>=v12.14)

## Creating an ECS Server

## Creating a PostgreSQL Database

We are going to create a single, non highly available PostgreSQL v16. In *Relational Database Service* click *Create DB Instance*:

![Create a Database Wizard Part 1](/img/docs/blueprints/by-use-case/analytics/umami/Screenshot_from_2024-09-09_12-51-39.png)

Make sure you place the database server in the same VPC/Subnet that the ECS instance lives. Choose the flavor of your liking, provide the **root** password and press *Create Now*. For the time being, we are going to make no changes in the Security Groups; we are going to fix this in the next step.

![Create a Database Wizard Part 2](/img/docs/blueprints/by-use-case/analytics/umami/Screenshot_from_2024-09-09_12-52-14.png)

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

![Adding Outbound Rules for ECS](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-10-01.png>)

In the same notion, set as **Destination** the CIDR of the your Subnet (in this case `172.16.0.0/24`).

On our ECS instance, click *Security Groups* -> *Change Security Group*, and add additionally the new Security Group to the list.

![alt text](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-16-19.png>)

## Deploying Umami

### Creating the Database

### Installing Umami