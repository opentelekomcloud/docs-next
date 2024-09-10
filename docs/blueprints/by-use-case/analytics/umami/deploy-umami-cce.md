---
id: deploy-umami-cce
title: Deploy Umami on CCE
tags: [umami, analytics, web-analytics, cce, postgresql, zalando-postgres-operator]
---

# Deploy Umami on CCE

In this blueprint we are going to set up Umami on Open Telekom Cloud's Cloud Container Engine (CCE), leveraging Kubernetes for scalability and flexibility. For the database backend, we will use the Zalando PostgreSQL Operator to provision and manage a PostgreSQL cluster within the CCE environment.

## Prerequisites

- **zalando-postgres-operator**: This operator automates the management of PostgreSQL clusters on Kubernetes, handling tasks like scaling, backups, and failover. It simplifies the deployment and maintenance of a highly available PostgreSQL database within the CCE cluster.
- **cert-manager**:
- **cert-manager-webhook-opentelekomcloud**:
