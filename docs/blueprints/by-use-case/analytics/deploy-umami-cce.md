---
id: deploy-umami-cce
title: Deploy Umami on CCE
tags: [umami, analytics, cce]
---

# Deploy Umami on CCE

[Umami](https://umami.is/) is a privacy-focused, open-source web analytics tool designed to provide essential website usage insights without compromising user privacy. It offers core metrics like page views, user behavior, and traffic sources while ensuring compliance with privacy laws by not using cookies or tracking personal data. Lightweight and simple to integrate, Umami delivers real-time data and customizable reporting features, making it a popular alternative to traditional analytics tools. Its emphasis on transparency and user control makes it appealing to businesses prioritizing data privacy and minimalism in web tracking.

:::danger[important]
Umami is **fully GDPR compliant**. It is designed with privacy in mind, meaning it **does not track personal data**, it **does not use cookies**, and it **does not require user consent under GDPR rules**. Umami collects only anonymized, aggregated data, ensuring that no [personally identifiable information (PII)](https://gdpr.eu/eu-gdpr-personal-data/) is gathered. This makes it an excellent solution for organizations looking to monitor web traffic while staying compliant with strict data protection regulations like GDPR. Additionally, since Umami is self-hosted, businesses have full control over their data, further enhancing privacy and compliance.
:::

## Prerequisites

For this blueprint we are going to need:

- a CCE Cluster
- a PostgreSQL RDS Instance

## Creating a PostgreSQL Database

We are going to create a single, non highly available PostgreSQL v16. In *Relational Database Service* click *Create DB Instance*:

![Create a Database Wizard Part 1](/img/docs/blueprints/by-use-case/analytics/deploy-umami-cce/Screenshot_from_2024-09-09_12-51-39.png)

Make sure you place the database ECS server in the same VPC/Subnet that the worker nodes of your CCE Cluster reside. Choose the flavor of your liking, provide the **root** password and press *Create Now*. For the time being, we are going to make no changes in the Security Groups; we are going to fix this in the next step.

![Create a Database Wizard Part 2](/img/docs/blueprints/by-use-case/analytics/deploy-umami-cce/Screenshot_from_2024-09-09_12-52-14.png)

## Establishing Connectivity

In *Relational Database Service* click your instance and then navigate to *Connectivity & Security* and under *Connection Topology* choose *Private Connection*:

![Establishing Connectivity](<../../../../static/img/docs/blueprints/by-use-case/analytics/deploy-umami-cce/Screenshot from 2024-09-09 13-53-46.png>)

In this blueprint, we are interested in variant 2, where our database instance (with floating IP `172.16.0.30`) needs to establish two-way communication with the ECS(B) instance, which in our case is/are the worker node(s) of the CCE Cluster. For that matter we need to create two Security Groups, one that will allow inbound connections to port `5432` and will be assigned to our RDS instance and a second one that will allow outbound connections from port `5432` and will be assigned to **every** ECS instance that serves as a worker node of the CCE Cluster.

### Creating Security Group for RDS

![Adding Inbound Rules for RDS Instances](<../../../../static/img/docs/blueprints/by-use-case/analytics/deploy-umami-cce/Screenshot from 2024-09-09 14-03-16.png>)

For additional security, make sure you set as **Source** the CIDR of the your Subnet (in this case `172.16.0.0/24`); in that way you prohibit anyone access your database outside your VPC/Subnet.

Go back to the *Connectivity & Security* panel of your database and replace under *Security Group Rules* -> *Security Group*, the default Security Group with the one we just created:

![alt text](<../../../../static/img/docs/blueprints/by-use-case/analytics/deploy-umami-cce/Screenshot from 2024-09-09 14-12-28.png>)

### Creating Security Group for CCE Nodes

![Adding Outbound Rules for CCE Nodes](<../../../../static/img/docs/blueprints/by-use-case/analytics/deploy-umami-cce/Screenshot from 2024-09-09 14-10-01.png>)

In the same notion, set as **Destination** the CIDR of the your Subnet (in this case `172.16.0.0/24`).

In every worker node, click *Security Groups* -> *Change Security Group*, and add additionally the new Security Group to the list.

## Appendix

:::tip[See Also]

- [Complete Guide to GDPR Compliance](https://gdpr.eu/)

:::
