---
id: deploy-clickhouse-cce
title: Deploy ClickHouse on CCE
tags: [clickhouse, analytics, cce]
---

# Deploy ClickHouse on CCE

[ClickHouse](https://clickhouse.com/) is a high-performance columnar database management system optimized for online analytical processing (OLAP). It is designed to handle large volumes of data and execute complex queries swiftly. The system uses a columnar storage format, which significantly accelerates read and write operations and enhances data compression. ClickHouse supports SQL queries and provides extensive tools for data analysis. It is built to scale horizontally, allowing for distributed processing across multiple servers. Its architecture ensures high availability and fault tolerance. Ideal for real-time data analytics, ClickHouse is widely adopted for tasks requiring fast query performance over extensive datasets.

In this blueprint we are going to use ClickHouse Operator to install it on a CCE Cluster. ClickHouse Operator creates, configures, and manages ClickHouse clusters running on Kubernetes.

The sections below describe how to install and deploy ClickHouse Operator on
CCE clusters and provide examples of creating ClickHouse cluster
resources. For more details, see https://github.com/Altinity/clickhouse-operator.

## Prerequisites

ClickHouse Operator can be installed in CCE clusters of v1.15.11 and
later. In this example, ClickHouse Operator is installed in a cluster of
v1.19.

| Resource                        | Value                  |
| :----------------------- | :----------------- |
| Cluster type            | CCE cluster       |
| Cluster version         | 1.25.3            |
| Region                  | eu-de             |
| Container Runtime       | containerd 1.6.14 |
| Network model           | VPC network       |
| Service forwarding mode | iptables          |

## Deploying ClickHouse Operator

Run the following command to deploy ClickHouse operator on your cluster:

```bash
kubectl apply -f \
https://raw.githubusercontent.com/Altinity/clickhouse-operator/master/deploy/operator/clickhouse-operator-install-bundle.yaml
```

you see similar output after applying the manifest:

```shell
kubectl apply -f https://raw.githubusercontent.com/Altinity/clickhouse-operator/master/deploy/operator/clickhouse-operator-install-bundle.yaml

customresourcedefinition.apiextensions.k8s.io/clickhouseinstallations.clickhouse.altinity.com created
customresourcedefinition.apiextensions.k8s.io/clickhouseinstallationtemplates.clickhouse.altinity.com created
customresourcedefinition.apiextensions.k8s.io/clickhouseoperatorconfigurations.clickhouse.altinity.com created
customresourcedefinition.apiextensions.k8s.io/clickhousekeeperinstallations.clickhouse-keeper.altinity.com created
serviceaccount/clickhouse-operator created
clusterrole.rbac.authorization.k8s.io/clickhouse-operator-kube-system created
clusterrolebinding.rbac.authorization.k8s.io/clickhouse-operator-kube-system created
configmap/etc-clickhouse-operator-files created
configmap/etc-clickhouse-operator-confd-files created
configmap/etc-clickhouse-operator-configd-files created
configmap/etc-clickhouse-operator-templatesd-files created
configmap/etc-clickhouse-operator-usersd-files created
secret/clickhouse-operator created
deployment.apps/clickhouse-operator created
service/clickhouse-operator-metrics created
```

After a period of time, check the running status of ClickHouse Operator.

```bash
kubectl get pod -n kube-system | grep clickhouse
```

command output:

```shell
kubectl get pod -n kube-system | grep clickhouse

clickhouse-operator-5b8b958bd8-8w2cg       2/2     Running   0          12s
```
