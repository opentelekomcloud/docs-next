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

| Resource                | Value             |
| :---------------------- | :---------------- |
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

## Examples

### Creating a Namespace

Create a namespace named `test-clickhouse-operator` to facilitate
verification of basic functions.

```bash
kubectl create namespace test-clickhouse-operator
```

### Simple Example

:::note
This example is available at
https://github.com/Altinity/clickhouse-operator/blob/master/docs/chi-examples/01-simple-layout-01-1shard-1repl.yaml.
:::

The YAML file is as follows:

```yaml
apiVersion: "clickhouse.altinity.com/v1"
kind: "ClickHouseInstallation"
metadata:
  name: "simple-01"
spec:
  configuration:
    users:
      # printf 'test_password' | sha256sum
      test_user/password_sha256_hex: 10a6e6cc8311a3e2bcc09bf6c199adecd5dd59408c343e926b129c4914f3cb01
      test_user/password: test_password
      # to allow access outside from kubernetes
      test_user/networks/ip:
        - 0.0.0.0/0
    clusters:
      - name: "simple"
```

Run the following command:

```bash
kubectl apply -n test-clickhouse-operator -f \
https://raw.githubusercontent.com/Altinity/clickhouse-operator/master/docs/chi-examples/01-simple-layout-01-1shard-1repl.yaml
```

After a period of time, check the resource running status.

```shell
kubectl get pod -n test-clickhouse-operator

NAME                         READY   STATUS    RESTARTS   AGE
chi-simple-01-simple-0-0-0   1/1     Running   0          30s

kubectl get service -n test-clickhouse-operator

NAME                       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                      AGE
chi-simple-01-simple-0-0   ClusterIP   None         <none>        9000/TCP,8123/TCP,9009/TCP   14s
clickhouse-simple-01       ClusterIP   None         <none>        8123/TCP,9000/TCP            12s
```

Connect to the ClickHouse database.

```shell
kubectl -n test-clickhouse-operator exec -ti chi-simple-01-simple-0-0-0 -- clickhouse-client

ClickHouse client version 24.4.1.2088 (official build).
Connecting to localhost:9000 as user default.
Connected to ClickHouse server version 24.4.1.

Warnings:
* Linux transparent hugepages are set to "always". Check /sys/kernel/mm/transparent_hugepage/enabled


chi-simple-01-simple-0-0-0.chi-simple-01-simple-0-0.test-clickhouse-operator.svc.cluster.local :)
```

### Simple Persistent Volume Example

:::note
This example is available at
https://github.com/Altinity/clickhouse-operator/blob/master/docs/chi-examples/03-persistent-volume-01-default-volume.yaml.
:::

**Before** using this YAML file to create a PVC on CCE, modify the file
based on the storage volume you want to use.

- If an EVS disk is used as a storage volume, do as follows:
    1. Create a `StorageClass`.

        By default, the CSI disk type supported by CCE is SAS. If you
        want to use ultra-high I/O EVS disks, create the corresponding
        StorageClass.

        ```yaml title="csi-disk-ssd.yaml"
        allowVolumeExpansion: true
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
          name: csi-disk-ssd
        parameters:
          csi.storage.k8s.io/csi-driver-name: disk.csi.everest.io
          csi.storage.k8s.io/fstype: ext4
          everest.io/disk-volume-type: SSD
          everest.io/passthrough: "true"
        provisioner: everest-csi-provisioner
        reclaimPolicy: Delete
        volumeBindingMode: Immediate
        ```

        Save the file and create the StorageClass in your cluster.

        ```shell
        kubectl create -f csi-disk-ssd.yaml
        ```

    2. Change `accessModes` to `ReadWriteOnce`.

    3. Append `storageClassName: csi-disk-ssd` under the path
        `spec.templates.volumeClaimTemplates.spec` of example
        yaml.
- If an SFS file system is used as a storage volume, do as follows:
    1. Change `accessModes` to `ReadWriteMany`.
    2. Append `storageClassName: csi-nas` under the path
        `spec.templates.volumeClaimTemplates.spec` of example
        yaml.

For example, if an SFS file system is used, the YAML file content is as
follows:

```yaml
apiVersion: "clickhouse.altinity.com/v1"
kind: "ClickHouseInstallation"
metadata:
  name: "pv-simple"
spec:
  defaults:
    templates:
      dataVolumeClaimTemplate: data-volume-template
      logVolumeClaimTemplate: log-volume-template
  configuration:
    clusters:
      - name: "simple"
        layout:
          shardsCount: 1
          replicasCount: 1
  templates:
    volumeClaimTemplates:
      - name: data-volume-template
        spec:
          accessModes:
            - ReadWriteMany
          resources:
            requests:
              storage: 10Gi
          storageClassName: csi-nas
      - name: log-volume-template
        spec:
          accessModes:
            - ReadWriteMany
          resources:
            requests:
              storage: 10Gi
          storageClassName: csi-nas
```

Run the following command to create a PV:

```bash
kubectl -n test-clickhouse-operator create -f \
03-persistent-volume-01-default-volume.yaml
```

After a period of time, check the resource running status:

```shell
kubectl get pvc -n test-clickhouse-operator

NAME                                              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
data-volume-template-chi-pv-simple-simple-0-0-0   Bound    pvc-98cb51b7-46ef-415f-b43b-edaa3638f4ef   1Gi        RWO            csi-disk-ssd   55s
log-volume-template-chi-pv-simple-simple-0-0-0    Bound    pvc-404c31c6-8360-441f-a1c7-df19e3497886   100Mi      RWO            csi-disk-ssd   55s
```

```shell
kubectl get pod -n test-clickhouse-operator

NAME                         READY   STATUS    RESTARTS   AGE
chi-pv-simple-simple-0-0-0   2/2     Running   0          2m59s
```

Run the following command to check the mounting status of the storage
volume:

```shell
kubectl -n test-clickhouse-operator exec -ti chi-pv-simple-simple-0-0-0 -c clickhouse -- bash
```

```shell
df -h

root@chi-pv-simple-simple-0-0-0:/# df -h
Filesystem                                        Size  Used Avail Use% Mounted on
overlay                                            89G  6.2G   78G   8% /
tmpfs                                              64M     0   64M   0% /dev
tmpfs                                             7.8G     0  7.8G   0% /sys/fs/cgroup
sfs-nas1.eu-de.otc.t-systems.com:/share-29e28acd  9.8G  118M  9.2G   2% /etc/hosts
sfs-nas1.eu-de.otc.t-systems.com:/share-62e28aab  89G  6.2G   78G   8% /etc/hostname
shm                                               64M     0   64M   0% /dev/shm
/dev/sdf                                          974M   13M  945M   2% /var/lib/clickhouse
/dev/sdg                                          974M  108K  958M   1% /var/log/clickhouse-server
tmpfs                                              14G   12K   14G   1% /run/secrets/kubernetes.io/serviceaccount
tmpfs                                             7.8G     0  7.8G   0% /proc/acpi
tmpfs                                             7.8G     0  7.8G   0% /proc/scsi
tmpfs                                             7.8G     0  7.8G   0% /sys/firmware
```

Connect to the ClickHouse database:

```shell
kubectl -n test-clickhouse-operator exec -ti chi-simple-01-simple-0-0-0 -- clickhouse-client

ClickHouse client version 24.4.1.2088 (official build).
Connecting to localhost:9000 as user default.
Connected to ClickHouse server version 24.4.1.
```

### Simple Load Balancer Example

```yaml
apiVersion: "clickhouse.altinity.com/v1"
kind: "ClickHouseInstallation"
metadata:
  name: "ck-elb"
spec:
  defaults:
    templates:
      dataVolumeClaimTemplate: data-volume-nas
      serviceTemplate: chi-service-elb
  configuration:
    clusters:
      - name: "ck-elb"
        templates:
          podTemplate: pod-template-with-nas
        layout:
          shardsCount: 1
          replicasCount: 1
  templates:
    podTemplates:
      - name: pod-template-with-nas
        spec:
          containers:
            - name: clickhouse
              image: yandex/clickhouse-server:21.6.3.14
              volumeMounts:
                - name: data-volume-nas
                  mountPath: /var/lib/clickhouse
    volumeClaimTemplates:
      - name: data-volume-nas
        spec:
          accessModes:
            - ReadWriteMany
          resources:
            requests:
              storage: 20Gi
          storageClassName: csi-nas
    serviceTemplates:
      - name: chi-service-elb
        metadata:
          annotations:
            kubernetes.io/elb.class: union
            kubernetes.io/elb.autocreate: >-
              {"type":"public","bandwidth_name":"cce-bandwidth-ck","bandwidth_chargemode":"bandwidth","bandwidth_size":5,"bandwidth_sharetype":"PER","eip_type":"5_bgp"}
        spec:
          ports:
            - name: http
              port: 8123
            - name: client
              port: 9000
          type: LoadBalancer
```

Add the information in bold to the YAML file. The following table
describes the parameters supported by `annotations
kubernetes.io/elb.autocreate`.

| Parameter            | Type    | Description                                                                                                                                                                                                                                          |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                 | String  | Name of the automatically created load balancer. Value range: a string of 1 to 64 characters, including lowercase letters, digits, and underscores (_). The value must start with a lowercase letter and end with a lowercase letter or digit.       |
| type                 | String  | Network type of the load balancer.  public: public network load balancer inner: private network load balancer                                                                                                                                        |
| bandwidth_name       | String  | Bandwidth name. The default value is `cce-bandwidth-**`. Value range: a string of 1 to 64 characters, including lowercase letters, digits, and underscores (_). The value must start with a lowercase letter and end with a lowercase letter or digit. |
| bandwidth_chargemode | String  | Bandwidth billing mode.  bandwidth: billed by bandwidth traffic: billed by traffic                                                                                                                                                                   |
| bandwidth_size       | Integer | Bandwidth.                                                                                                                                                                                                                                           |
| bandwidth_sharetype  | String  | Bandwidth sharing mode.  PER: dedicated bandwidth                                                                                                                                                                                                    |
| eip_type             | String  | EIP type.                                                                                                                                                                                                                                            |