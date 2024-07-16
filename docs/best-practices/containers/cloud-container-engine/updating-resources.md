---
id: updating-resources
title: Updating Resources Accordingly
tags: [cce, migration, minio, velero, obs, swr]
---

# Updating Resources Accordingly

## Updating Images

The WordPress and MySQL images used in this example can be pulled from
SWR. Therefore, the image pull failure (`ErrImagePull`) will not occur. If
the application to be migrated is created from a private image, perform
the following steps to update the image:

1.  Migrate the image resources to SWR. For details, see [Uploading an Image Through the Client](https://docs.otc.t-systems.com/usermanual/swr/swr_01_0011.html).

2.  Log in to the SWR console and obtain the image path used after the
    migration.

    The image path is in the following format:

    ```bash
    'swr.{Region}.otc.t-systems.com/{Organization name}/{Image name}:{Tag}'
    ```

3.  Run the following command to modify the workload and replace the
    `image` field in the YAML file with the image path:

    ```bash
    kubectl edit deploy wordpress
    ```

4.  Check the running status of the workload.

## Updating Services

After the cluster is migrated, the Service of the source cluster may
fail to take effect. You can perform the following steps to update the
Service. If ingresses are configured in the source cluster, connect the
new cluster to ELB again after the migration. For details, see [Using kubectl to Create an ELB Ingress](https://docs.otc.t-systems.com/en-us/usermanual2/cce/cce_10_0252.html).

1.  Connect to the cluster using `kubectl`.

2.  Edit the YAML file of the corresponding Service to change the
    Service type and port number.

    ```bash
    kubectl edit svc wordpress
    ```

    To update load balancer resources, connect to ELB again. Add the
    `annotations` by following the procedure described in [LoadBalancer](https://docs.otc.t-systems.com/en-us/usermanual2/cce/cce_10_0014.html).

    ```yaml
    annotations:
      kubernetes.io/elb.class: union # Shared load balancer
      kubernetes.io/elb.id: 9d06a39d-xxxx-xxxx-xxxx-c204397498a3    # Load balancer ID, which can be queried on the ELB console.
      kubernetes.io/elb.subnet-id: f86ba71c-xxxx-xxxx-xxxx-39c8a7d4bb36    # ID of the cluster where the subnet resides
      kubernetes.io/session-affinity-mode: SOURCE_IP    # Enable the sticky session based on the source IP address.
    ```

3.  Use a browser to check whether the Service is available.

## Updating the Storage Class

As the storage infrastructures of clusters may be different, storage
volumes cannot be mounted to the target cluster. You can use either of
the following methods to update the volumes:

:::important
Both update methods can be performed only before the application is
restored in the target cluster. Otherwise, PV data resources may fail to
be restored. In this case, use Velero to restore applications after the
storage class update is complete.
:::

### Method 1: Creating a ConfigMap mapping

1.  Create a `ConfigMap` in the CCE cluster and map the storage class used
    by the source cluster to the default storage class of the CCE
    cluster.

    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: change-storageclass-plugin-config
      namespace: velero
      labels:
        app.kubernetes.io/name: velero
        velero.io/plugin-config: "true"
        velero.io/change-storage-class: RestoreItemAction
    data:
      {Storage class name01 in the source cluster}: {Storage class name01 in the target cluster}
      {Storage class name02 in the source cluster}: {Storage class name02 in the target cluster}
    ```

2.  Run the following command to apply the ConfigMap configuration:

    ```bash
    kubectl create -f change-storage-class.yaml
    ```

### Method 2: Creating a storage class with the same name

1.  Run the following command to query the default storage class
    supported by CCE:

    ```bash
    kubectl get sc
    ```

    Information similar to the following is displayed:

    ``` 
    NAME                PROVISIONER                     RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
    csi-disk            everest-csi-provisioner         Delete          Immediate              true                   3d23h
    csi-disk-topology   everest-csi-provisioner         Delete          WaitForFirstConsumer   true                   3d23h
    csi-nas             everest-csi-provisioner         Delete          Immediate              true                   3d23h
    csi-obs             everest-csi-provisioner         Delete          Immediate              false                  3d23h
    csi-sfsturbo        everest-csi-provisioner         Delete          Immediate              true                   3d23h

      Storage Class       Storage Resource
      ------------------- --------------------------
      csi-disk            EVS
      csi-disk-topology   EVS with delayed binding
      csi-nas             SFS
      csi-obs             OBS
      csi-sfsturbo        SFS Turbo
    ```

2.  Run the following command to export the required storage class
    details in YAML format:

    ```bash
    kubectl get sc <storageclass-name> -o=yaml
    ```

3.  Copy the YAML file and create a new storage class.

    Change the storage class name to the name used in the source cluster
    to call basic storage resources of the cloud.

    The YAML file of csi-obs is used as an example. Delete the
    unnecessary information in italic under the `metadata` field and
    modify the information in bold. You are advised not to modify other
    parameters.

    ```yaml
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      creationTimestamp: "2021-10-18T06:41:36Z"
      name: <your_storageclass_name>     # Use the name of the storage class used in the source cluster.
      resourceVersion: "747"
      selfLink: /apis/storage.k8s.io/v1/storageclasses/csi-obs
      uid: 4dbbe557-ddd1-4ce8-bb7b-7fa15459aac7
    parameters:
      csi.storage.k8s.io/csi-driver-name: obs.csi.everest.io
      csi.storage.k8s.io/fstype: obsfs
      everest.io/obs-volume-type: STANDARD
    provisioner: everest-csi-provisioner
    reclaimPolicy: Delete
    volumeBindingMode: Immediate
    ```

    :::note
    -   SFS Turbo file systems cannot be directly created using
        `StorageClass`. Go to the SFS Turbo console to create SFS Turbo
        file systems that belong to the same VPC subnet and have inbound
        ports (`111`, `445`, `2049`, `2051`, `2052`, and `20048`) enabled in the
        security group.
    -   CCE **does not** support EVS disks of the `ReadWriteMany` type. If
        resources of this type exist in the source cluster, change the
        storage type to `ReadWriteOnce`.
    :::

4.  Restore the cluster application by referring to
    [Restoring Applications in the Target Cluster](./migrating-from-other_clouds-to-cce#restoring-applications-in-the-target-cluster) and check whether the PVC is successfully created.

    ```bash
    kubectl get pvc
    ```

    In the command output, the `VOLUME` column indicates the name of
    the PV automatically created using the storage class.

    ```bash
    NAME   STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    pvc    Bound    pvc-4c8e655a-1dbc-4897-ae6c-446b502f5e77   5Gi        RWX            local          13s
    ```

## Updating Databases

In this example, the database is a local MySQL database and does not
need to be reconfigured after the migration.

:::note
-   If the RDS instance **is in the same VPC** as the CCE cluster, it can be
    accessed using the private IP address. Otherwise, it can only be
    accessed only through public networks by binding an EIP. You are
    advised to use the private network access mode for high security and
    good RDS performance.
-   Ensure that the inbound rule of the security group to which RDS
    belongs has been enabled for the cluster. Otherwise, the connection
    will fail.
:::

1.  Log in to the *RDS console* and obtain the private IP address and port
    number of the DB instance on the *Basic Information* page.

2.  Run the following command to modify the WordPress workload:

    ```bash
    kubectl edit deploy wordpress
    ```

    Set the environment variables in the `env` field.

    -   `WORDPRESS_DB_HOST`: address and port number used for accessing the database, that is, the internal network address and port number obtained in the previous step.
    -   `WORDPRESS_DB_USER`: username for accessing the database.
    -   `WORDPRESS_DB_PASSWORD`: password for accessing the database.
    -   `WORDPRESS_DB_NAME`: name of the database to be connected.

3.  Check whether the RDS database is properly connected.