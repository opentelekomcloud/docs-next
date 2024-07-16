---
id: restore-kubernetes-objects
title: Restoring Kubernetes Objects in a CCE Cluster
tags: [cce, migration, minio, velero, obs]
---

# Restoring Kubernetes Objects in a CCE Cluster

## Creating a StorageClass

In this example, the WordPress application uses Azure SSD persistent
data volumes, which need to be replaced with Open Telekom Cloud SSDs.

The `StorageClass` used in this example is `azurefile-csi`. 

:::caution
**You must** create a `StorageClass` with the **exact same name** as in the other cloud provider and use it in Open Telekom Cloud. In this case SSDs as backend storage media will be mapped to a new `StorageClass` that has the same name, `azurefile-csi`, as their equivalent in Azure. 
:::

```yaml title="cce-sc-csidisk.yaml"
allowVolumeExpansion: true
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: azurefile-csi
  selfLink: /apis/storage.k8s.io/v1/storageclasses/csi-disk
parameters:
  csi.storage.k8s.io/csi-driver-name: disk.csi.everest.io
  csi.storage.k8s.io/fstype: ext4
  everest.io/disk-volume-type: SSD
  everest.io/passthrough: "true"
provisioner: everest-csi-provisioner
reclaimPolicy: Delete
volumeBindingMode: Immediate
```

```bash
[root@ccenode-roprr hujun]# kubectl create -f cce-sc-csidisk.yaml
```

## Restoring the Application

```
[root@ccenode-roprr hujun]# velero restore create --from-backup   wordpress-backup
Restore request "wordpress-backup-20200707212519" submitted successfully.
Run `velero restore describe wordpress-backup-20200707212519` or `velero restore logs wordpress-backup-20200707212519` for more details

[root@ccenode-roprr hujun]# velero restore get
NAME  BACKUP STATUS  WARNINGS   ERRORS   CREATED SELECTOR
wordpress-backup-20200708112940   wordpress-backup   Completed   0  02020-07-08 11:29:42 +0800 CST   <none>
```

Check the running status of the WordPress application. Make adaptation
if issues such as image pulling failures and service access failures
occur.