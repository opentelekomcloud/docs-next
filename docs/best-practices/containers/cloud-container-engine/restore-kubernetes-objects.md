---
id: restore-kubernetes-objects
title: Restoring Kubernetes Objects in a CCE Cluster
tags: [cce, migration, minio, velero, obs, wordpress, kubernetes, aws, eks]
---

# Restoring Kubernetes Objects in a CCE Cluster

In this part of the guide, we will demonstrate how to restore a WordPress backup created with Velero (FSB) onto a target Open Telekom Cloud CCE cluster. The process includes restoring both the namespace resources (Deployments, Services, Secrets, ConfigMaps) and the persistent volumes for MySQL and WordPress content, effectively migrating the workload into a new cluster.

:::important
The following actions have to be performed on the Open Telekom Cloud CCE cluster which is our migration target.
:::

## Creating a StorageClass Mapping

You need to create a `StorageClass` in Open Telekom Cloud CCE **with the exact same name** as the one used in the source cloud provider, in this case AWS. In this case SSDs, as backend storage media, will be mapped to a new `StorageClass` that has the same name, namely `gp2`, as their equivalent in AWS.

Prepare the manifest for the new `StorageClass`:

```yaml title="cce-storageclass-gp2.yaml"
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: gp2
  selfLink: /apis/storage.k8s.io/v1/storageclasses/csi-disk
parameters:
  csi.storage.k8s.io/csi-driver-name: disk.csi.everest.io
  csi.storage.k8s.io/fstype: ext4
  everest.io/disk-volume-type: SSD
  everest.io/passthrough: "true"
provisioner: everest-csi-provisioner
reclaimPolicy: Delete
volumeBindingMode: Immediate
allowVolumeExpansion: true
```

and then apply it:

```bash
kubectl create -f cce-storageclass-gp2.yaml
```

## Restoring the Application

Then we can proceed restoring the backup:

```shell
velero restore create wp-restore \
  --from-backup wp-backup-auto \
  --namespace-mappings wordpress:wordpress 
```

:::tip
If you want to restore the application into a different namespace, adjust the second value of the `--namespace-mappings`, for example: `--namespace-mappings wordpress:wordpress-restored`.
:::

In order to verify the status of the restore we could execute the following commands:

```shell
velero restore get
velero restore describe wp-restore
```

or simply follow the progress of the restore directly from the WebUI, we previously installed:

![image1](/img/docs/best-practices/containers/cloud-container-engine/Screenshot_from_2025-09-10_17-06-30.png)
