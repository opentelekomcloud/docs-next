---
id: backup-kubernetes-objects
title: Backing Up Kubernetes Objects of other Clusters
tags: [cce, migration, minio, velero, obs, wordpress, kubernetes]
---

# Backing Up Kubernetes Objects of other Clusters

In part of the guide, we are going to demonstrate how we can backup WordPress with Velero (FSB). For WordPress, we need to backup both namespace resources (Deployments, Services, Secrets, ConfigMaps) and persistent volumes (MySQL and WordPress content).

:::important
The following actions have to be performed on the AWK EKS cluster which is our migration source.
:::

## Option 1: Automatically Back Up All Volumes (FSB)

We need to enable automatic FSB for all volumes in the namespace:

```shell
velero backup create wp-backup-auto \
  --include-namespaces wordpress \
  --default-volumes-to-fs-backup 
```

Velero will then automatically detect all PVCs in the namespace and back them up using the Node Agent. In order to verify the status of our backup we could execute the following commands:

```shell
velero backup get
velero backup describe wp-backup-auto
```

or simply follow the progress of the backup directly from the WebUI, we previously installed:

![image1](/img/docs/best-practices/containers/cloud-container-engine/Screenshot_from_2025-09-10_15-55-16.png)

:::note
When Velero runs a backup using File System Backup (FSB), it creates two types of folders in the object storage bucket: `backups` and `kopia`.

The `backups` folder contains the metadata for Velero backups as details about Kubernetes resources (Deployments, Services, PVCs, etc.), backup status, and instructions for how a restore should be performed. *This information lets Velero reconstruct the cluster state*.

The `kopia` folder is created by the Velero Node Agent (Restic integration). It stores the actual file system snapshots of the persistent volumes, managed by the [Kopia](https://kopia.io/) tool. *These files represent the volume data at backup time and are used during restore to repopulate PVCs with their original content*.

Together, `backups` holds the cluster definitions, while `kopia` holds the persistent data. Both are needed for a full and consistent restore.

:::

## Option 2: Backup Specific Volumes via Annotations (FSB)

In this case we are going to annotate only specific pods, with the volumes we want backed up. Annotate the MySQL pod for Velero FSB:

```shell
kubectl annotate pod/mysql-846d76b69c-rtgj4 \
  backup.velero.io/backup-volumes=mysql-data \
  -n wordpress
```

and accordingly the WordPress pod:

```shell
kubectl annotate pod/wordpress-68c77c8464-gc7hr \
  backup.velero.io/backup-volumes=wp-data \
  -n wordpress
```

After annotating, create a Velero backup that will include **only** these annotated volumes:

```shell
velero backup create wp-backup-annotated-pods \
  --include-namespaces wordpress
```

and finally verify as outlined in the previous option.

:::danger REMEMBER
If you annotate volumes of storage class `HostPath`, **the storage volumes of this type will be automatically skipped** and a warning message will be generated. This will not cause a backup failure.
:::
