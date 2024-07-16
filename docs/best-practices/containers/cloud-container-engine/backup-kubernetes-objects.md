---
id: backup-kubernetes-objects
title: Backing Up Kubernetes Objects of other Clusters
tags: [cce, migration, velero, obs]
---

# Backing Up Kubernetes Objects of other Clusters

1.  To back up a WordPress application with PV data, add an `annotation`
    to the corresponding pod. If you do not need to back up the PV data, skip this step.
    
    ```
    # kubectl -n YOUR_POD_NAMESPACE annotate pod/YOUR_POD_NAME backup.velero.io/backup-volumes=YOUR_VOLUME_NAME_1,YOUR_VOLUME_NAME_2,...

    [root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# kubectl get pod -n wordpress
    NAME   READY   STATUSRESTARTS   AGE
    wordpress-67796d86b5-f9bfm 1/1 Running   1  39m
    wordpress-mysql-645b796d8d-6k8wh   1/1 Running   0  38m

    [root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# kubectl -n wordpress annotate pod/wordpress-67796d86b5-f9bfm backup.velero.io/backup-volumes=wordpress-pvc
    pod/wordpress-67796d86b5-f9bfm annotated
    [root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# kubectl -n wordpress annotate pod/wordpress-mysql-645b796d8d-6k8wh backup.velero.io/backup-volumes=wordpress-mysql-pvc
    pod/wordpress-mysql-645b796d8d-6k8wh annotated
    ```
2.  Execute the backup task.

    ```bash
    [root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# velero backup create  wordpress-backup --include-namespaces wordpress
    Backup request "wordpress-backup" submitted successfully.
    Run `velero backup describe wordpress-backup` or `velero backup logs wordpress-backup` for more details.
    ```
3.  Check whether the backup task is successful.
    ```
    [root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# velero backup get
    NAME   STATUS   CREATED EXPIRES   STORAGE LOCATION   SELECTOR
    wordpress-backup   InProgress   2020-07-07 20:31:19 +0800 CST   29d   default<none>
    [root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# velero backup get
    NAME   STATUS  CREATED EXPIRES   STORAGE LOCATION   SELECTOR
    wordpress-backup   Completed   2020-07-07 20:31:19 +0800 CST   29d   default<none>
    ```

