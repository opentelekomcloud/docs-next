---
id: deploy-umami-cce
title: Deploy Umami on CCE
tags: [umami, analytics, web-analytics, cce, postgresql, zalando-postgres-operator]
---

# Deploy Umami on CCE


## Prerequisites

For this blueprint we are going to need:

- a CCE Cluster
- a PostgreSQL RDS Instance (>=v12.14)

## Creating a PostgreSQL Database

We are going to create a single, non highly available PostgreSQL v16. In *Relational Database Service* click *Create DB Instance*:

![Create a Database Wizard Part 1](/img/docs/blueprints/by-use-case/analytics/umami/Screenshot_from_2024-09-09_12-51-39.png)

Make sure you place the database ECS server in the same VPC/Subnet that the worker nodes of your CCE Cluster reside. Choose the flavor of your liking, provide the **root** password and press *Create Now*. For the time being, we are going to make no changes in the Security Groups; we are going to fix this in the next step.

![Create a Database Wizard Part 2](/img/docs/blueprints/by-use-case/analytics/umami/Screenshot_from_2024-09-09_12-52-14.png)

## Establishing Connectivity

In *Relational Database Service* click your instance and then navigate to *Connectivity & Security* and under *Connection Topology* choose *Private Connection*:

<!-- ![Establishing Connectivity](<../../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 13-53-46.png>) -->

In this blueprint, we are interested in variant 2, where our database instance (with floating IP `172.16.0.30`) needs to establish two-way communication with the ECS(B) instance, which in our case is/are the worker node(s) of the CCE Cluster. For that matter we need to create two Security Groups, one that will allow inbound connections to port `5432` and will be assigned to our RDS instance and a second one that will allow outbound connections from port `5432` and will be assigned to **every** ECS instance that serves as a worker node of the CCE Cluster.

### Creating Security Group for RDS

<!-- ![Adding Inbound Rules for RDS Instances](<../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-03-16.png>) -->

For additional security, make sure you set as **Source** the CIDR of the your Subnet (in this case `172.16.0.0/24`); in that way you prohibit anyone access your database outside your VPC/Subnet.

Go back to the *Connectivity & Security* panel of your database and replace under *Security Group Rules* -> *Security Group*, the default Security Group with the one we just created:

<!-- ![alt text](<../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-12-28.png>) -->

### Creating Security Group for CCE Nodes

<!-- ![Adding Outbound Rules for CCE Nodes](<../../../../static/img/docs/blueprints/by-use-case/analytics/umami/Screenshot from 2024-09-09 14-10-01.png>) -->

In the same notion, set as **Destination** the CIDR of the your Subnet (in this case `172.16.0.0/24`).

In every worker node, click *Security Groups* -> *Change Security Group*, and add additionally the new Security Group to the list.

## Deploying Umami on Kubernetes

### Provisioning Password as a Secret

You need to provision as a Kubernetes Secret, containing the **root** password of the PostgreSQL database. First we need to encode it in base64:

```bash
$ export POSTGRESQL_UMAMI_PASSWORD={value}
$ echo -n $POSTGRESQL_UMAMI_PASSWORD | base64

U3RhcnQxMjM0
```

and then pack it in a Secret:

```yaml title="umami-plsql-credentials.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: umami-plsql-credentials
data:
  password: U3RhcnQxMjM0
```

```shell
kubectl apply -f umami-plsql-credentials.yaml
```

### Provisioning Umami as a Deployment

```yaml title="umami-deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: umami
  annotations:
    keel.sh/policy: force
    keel.sh/pollSchedule: '@every 24h'
    keel.sh/trigger: poll
spec:
  replicas: 2
  selector:
    matchLabels:
      app: umami
  template:
    metadata:
      labels:
        app: umami
    spec:
      containers:
        - name: web
          image: ghcr.io/umami-software/umami:postgresql-latest
          ports:
            - containerPort: 5000
              protocol: TCP
          env:
            - name: PORT
              value: '5000'
            - name: DB_DATABASE
              value: 'umami'
            - name: DB_HOST
              value: '172.16.0.30'
            - name: DB_PORT
              value: '5432'
            - name: DB_USERNAME
              value: 'umami'
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: umami-plsql-credentials
                  key: password
            - name: DATABASE_URL
              value: "postgres://$(DB_USERNAME):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE)"
          imagePullPolicy: Always
```

| Parameter    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| PORT         | 5000                                                      |
| DB_DATABASE  | umami                                                     |
| DB_HOST      | 172.16.0.30                                               |
| DB_PORT      | 5432                                                      |
| DB_PASSWORD  | reference to the Secret umami-plsql-credentials           |
| DATABASE_URL | value will be filled by interpolating the variables above |

```shell
kubectl apply -f umami-deployment.yaml
```

## Appendix

:::tip[See Also]

- [Complete Guide to GDPR Compliance](https://gdpr.eu/)

:::
