---
id: migrating-from-other_clouds-to-cce
title: Migrating Clusters from Other Clouds to CCE
tags: [cce, migration, minio, velero, obs]
---

# Migrating Clusters from Other Clouds to CCE

Assume that you have deployed the WordPress on 3rd party cloud provider and created your own blog; this document will drive you through how to smoothly migrate an application from a managed Kubernetes cluster on that provider to a Open Telekom Cloud CCE in six easy steps without interrupting the service.

## Solution Design

![image1](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001402114285.png)
![image1](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0264642164.png)

## Migrating Data

### Migrating Databases and Storage

1. Storage Migration: Create a bucket on OBS. For details, see [Creating a Bucket](https://docs.otc.t-systems.com/object-storage-service/umn/obs_console_operation_guide/getting_started/creating_a_bucket.html).

### Migrating Container Images

1. Export the container images used in the other clusters: Pull the images to the client by referring to the operation guide of
    other Cloud Container Registry.

2. Upload the image files to Open Telekom Cloud SWR: Run the `docker pull` command to push the image to Open Telekom
    Cloud. For details, see [Uploading an Image Through the Client](https://docs.otc.t-systems.com/software-repository-container/umn/image_management/uploading_an_image_through_the_client.html).

## Installing the Migration Tool

[Velero](https://velero.io/) is an open-source backup and migration tool for Kubernetes
clusters. It integrates the Persistent Volume(PV) data backup
capability of the Restic tool and can be used to back up Kubernetes
resource objects (such as Deployments, Jobs, Services, and ConfigMaps)
in the source cluster. Data in the PV mounted to the Pod are backed up
and uploaded to the object storage. When a disruption or a major incident occurs or a migration
is required, the target cluster can use Velero to obtain the
corresponding backup data from OBS and restore cluster resources as
required.

You need to prepare temporary object storage to store backup files before the
migration. Velero supports OBS or [MinIO](https://min.io/) as the object
storage (For more details about how to deploy MinIO, see [Installing MinIO](#installing-minio)). OBS requires sufficient storage space for storing backup files.You can estimate the storage space based on your cluster scale and data volume. **You are advised to use OBS for backup**. For details about how to
deploy Velero, see [Installing Velero](#installing-velero)

CCE supports backup and restore using the **e-backup add-on**, which is
compatible with Velero and uses OBS as the storage backend. You can use
Velero in on-premises clusters and use e-backup in CCE.

- **Without e-backup**: Install Velero in the source and target and
    migrate resources by referring to [Migrating Resources in a Cluster (Velero)](#migrating-resources-in-a-cluster)
- **With e-backup**: Install Velero in the source cluster and use OBS as
    the storage backend by following the instructions described in [Installing Velero](#installing-velero), and install e-backup in the target CCE cluster and migrate resources by referring to [Migrating Resources in a Cluster (Velero)](#migrating-resources-in-a-cluster)

### Prerequisites

- The Kubernetes version of the source on-premises cluster must be
    1.10 or later, and the cluster can use DNS and Internet services
    properly.
- If you use OBS to store backup files, obtain the AK/SK of a user who
    has the right to operate OBS. For details, see [Obtaining Access Keys (AK/SK)](https://docs.otc.t-systems.com/object-storage-service/api-ref/appendixes/obtaining_access_keys_ak_sk.html).
- If you use MinIO to store backup files, bind an EIP to the server
    where MinIO is installed and enable the API and console port of
    MinIO in the security group.
- The target CCE cluster has been created.
- The source cluster and target cluster must each have at least one
    idle node. It is recommended that the node specifications be 4 vCPUs
    and 8 GiB memory or higher.

### Installing MinIO

[MinIO](https://min.io/) is an open-source, high-performance object storage tool compatible
with the S3 API protocol. If MinIO is used to store backup files for
cluster migration, you need a temporary server to deploy MinIO and
provide services for external systems. If you use OBS to store backup
files, skip this section and go to [Installing Velero](#installing-velero)

MinIO can be installed in any of the following locations:

- Temporary ECS outside a cluster. If the MinIO server is installed outside the cluster, backup files
    will not be affected when a catastrophic fault occurs in the
    cluster.
- Idle nodes in a cluster. You can remotely log in to a node to install the MinIO server or
    containerize MinIO. For details, see the [official Velero
    documentation](https://velero.io/docs/v1.7/contributions/minio/#set-up-server).

:::important
For example, to containerize MinIO, do as follows:

- Change the storage type (`empty dir`) in the YAML file
    provided by Velero to `HostPath` or `Local`. Otherwise,
    backup files will be permanently lost after the pod are restarted.
- Change the Service type to `NodePort` or use other types of
    Services that support public network access to ensure that MinIO
    can be accessed by external networks. Otherwise, backup files
    cannot be downloaded outside the cluster.
:::

Regardless of which deployment method is used, the server where MinIO is
installed must have sufficient storage space, an EIP must be bound to
the server, and the MinIO service port must be enabled in the security
group. Otherwise, backup files cannot be uploaded or downloaded.

In this example, MinIO is installed on a temporary ECS outside the
cluster.

1. Download MinIO.

    ```bash
    mkdir /opt/minio
    mkdir /opt/miniodata
    cd /opt/minio
    wget https://dl.minio.io/server/minio/release/linux-amd64/minio
    chmod +x minio
    ```

2. Configure the username and password of MinIO.

    The username and password set using this method are temporary
    environment variables and must be reset after the service is
    restarted. Otherwise, the default root credential will be used to
    create the service.

    ```bash
    export MINIO_ROOT_USER=minio
    export MINIO_ROOT_PASSWORD=minio123
    ```

3. Create a service. In the command, `/opt/miniodata/` indicates the
    local disk path for MinIO to store data.

    The default API port of MinIO is `9000`, and the console port is
    randomly generated. You can use the `\--console-address` parameter
    to specify a console port.

    ```bash
    ./minio server /opt/miniodata/ --console-address ":30840" &
    ```

    :::note
    Enable the API and console ports in the firewall and security group
    on the server where MinIO is to be installed. Otherwise, access to
    the object bucket will fail.
    :::

4. Use a browser to access `http://<EIP of the node where MinIO resides>:30840`. The MinIO console page is displayed.

### Installing Velero

Go to the OBS or MinIO console and create a bucket named `velero` to
store backup files. You can custom the bucket name, which must be used
when installing Velero. Otherwise, the bucket cannot be accessed and the
backup fails.

:::important
- Velero instances need to be installed and deployed in both the
    **source and target clusters**. The installation procedures are the
    same, which are used for backup and restoration, respectively.
- The master node of a CCE cluster does not provide a port for remote
    login. You can install Velero using `kubectl`.
- If there are a large number of resources to back up, you are advised
    to adjust the CPU and memory resources of Velero and Restic to 1
    vCPU and 1 GiB memory or higher.
- The object storage bucket for storing backup files must be
    **empty**.
:::

Download the latest, [stable binary file](https://github.com/vmware-tanzu/velero/releases). This article uses
Velero `1.7.0` as an example. **The installation process in the source cluster is the same as that in the target cluster**:

1. Download the binary file of Velero 1.7.0.

    ```bash
    wget https://github.com/vmware-tanzu/velero/releases/download/v1.7.0/velero-v1.7.0-linux-amd64.tar.gz
    ```

2. Install the Velero client.

    ```bash
    tar -xvf velero-v1.7.0-linux-amd64.tar.gz
    cp ./velero-v1.7.0-linux-amd64/velero /usr/local/bin
    ```

3. Create the access key file **credentials-velero** for the backup
    object storage.

    ```bash 
    vim credentials-velero
    ```

    Replace the AK/SK in the file based on the site requirements. When
    you use OBS, you can obtain the AK/SK by referring to [Obtaining Access Keys (AK/SK)](https://docs.otc.t-systems.com/object-storage-service/api-ref/appendixes/obtaining_access_keys_ak_sk.html).
    
    :::note
    If MinIO is used, create an AK/SK pair in MinIO panel
    :::

    ```shell 
    [default]
    aws_access_key_id={AK}
    aws_secret_access_key={SK}
    ```

4. Deploy the Velero server. Change the value of `\--bucket` to the
    name of the created object storage bucket. In this example, the
    bucket name is `velero`. For more information about custom
    installation parameters, see [Customize Velero Install](https://velero.io/docs/v1.7/customize-installation/).

    ```shell
    velero install \
      --provider aws \
      --plugins velero/velero-plugin-for-aws:v1.2.1 \
      --bucket velero \
      --secret-file ./credentials-velero \
      --use-restic \
      --use-volume-snapshots=false \
      --backup-location-config region=eu-de,s3ForcePathStyle="true",s3Url=http://obs.eu-de.otc.t-systems.com
    ```

    | Parameter                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | --provider               | Vendor who provides the plug-in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | --plugins                | API component compatible with AWS S3. Both OBS and MinIO support the S3 protocol.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | --bucket                 | Name of the object storage bucket for storing backup files. The bucket must be created in advance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | --secret-file            | Secret file for accessing the object storage, that is, the **credentials-velero** file created before                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | --use-restic             | Whether to use **Restic** to support PV data backup. You are advised to enable this function. Otherwise, storage volume resources cannot be backed up.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | --use-volume-snapshots   | Whether to create the VolumeSnapshotLocation object for PV snapshot, which requires support from the snapshot program. Set this parameter to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | --backup-location-config | OBS bucket configurations, including `region`, `s3ForcePathStyle`, and `s3Url`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | region                   | Region to which object storage bucket belongs.  If OBS is used, set this parameter according to your region, for example, `eu-nl`. If MinIO is used, set this parameter to minio.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | s3ForcePathStyle         | The value true indicates that the S3 file path format is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | s3Url                    | API access address of the object storage bucket.  If OBS is used, set this parameter to `http://obs.{region}.otc.t-systems.com` (region indicates the region where the object storage bucket is located). For example, if the region is Germany (`eu-de`), the value is `http://obs.eu-de.otc.t-systems.com`. If MinIO is used, set this parameter to `http://{EIP of the node where minio is located}:9000`. The value of this parameter is determined based on the IP address and port of the node where MinIO is installed.   **Note**: The access port in s3Url must be set to the API port of MinIO instead of the console port. The default API port of MinIO is `9000`. To access MinIO installed outside the cluster, enter the public IP address of MinIO. |

    **Table 1** Installation parameters of Velero

5. By default, a namespace named `velero` is created for the Velero
    instance. Run the following command to view the pod status:

    ```shell
    $ kubectl get pod -n velero
    NAME                   READY   STATUS    RESTARTS   AGE
    restic-rn29c           1/1     Running   0          16s
    velero-c9ddd56-tkzpk   1/1     Running   0          16s
    ```

    :::note
    To prevent memory insufficiency during backup in the actual
    production environment, change the CPU and memory allocated to
    Restic and Velero.
    :::

6. Check the interconnection between Velero and the object storage and
    ensure that the status is `Available`.

    ```shell
    $ velero backup-location get
    NAME      PROVIDER   BUCKET/PREFIX   PHASE       LAST VALIDATED                  ACCESS MODE   DEFAULT
    default   aws        velero          Available   2021-10-22 15:21:12 +0800 CST   ReadWrite     true
    ```

## Migrating Resources in a Cluster 

WordPress is used as an example to describe how to migrate an
application from a Kubernetes cluster to a CCE cluster. The WordPress
application consists of the WordPress and MySQL components, which are
containerized. The two components are bound to two local storage volumes
of the Local type respectively and provide external access through the
NodePort Service.

Before the migration, use a browser to access the WordPress site, create
a site named **Migrate to CCE**, and publish an article to verify the
integrity of PV data after the migration. The article published in
WordPress will be stored in the `wp_posts` table of the MySQL
database. If the migration is successful, all contents in the database
will be migrated to the new cluster. You can verify the PV data
migration based on the migration result.

### Prerequisites

- Before the migration, clear the abnormal pod resources in the source
    cluster. If the pod is in the abnormal state and has a PVC mounted,
    the PVC is in the pending state after the cluster is migrated.
- Ensure that the cluster on the CCE side does not have the same
    resources as the cluster to be migrated because Velero does not
    restore the same resources by default.
- To ensure that container images can be properly pulled after cluster
    migration, migrate the images to SWR.
- CCE **does not** support EVS disks of the `ReadWriteMany` type. If
    resources of this type exist in the source cluster, change the
    storage type to `ReadWriteOnce`.
- Velero integrates the Restic tool to back up and restore storage
    volumes. Currently, the storage volumes of the HostPath type are not
    supported. For details, see [Restic Restrictions](https://velero.io/docs/v1.7/restic/#limitations). To
    back up storage volumes of this type, replace the `hostPath` volumes
    with `local` volumes. 
    
:::important
If a backup task involves storage of the
`HostPath` type, the storage volumes of this type will be
automatically skipped and a warning message will be generated. This
will not cause a backup failure.
:::

### Backing Up an Application in the Source Cluster

1. (Optional) To back up the data of a specified storage volume in the
    pod, add an annotation to the pod. The annotation template is as
    follows:

    ```bash
    kubectl -n <namespace> annotate <pod/pod_name> backup.velero.io/backup-volumes=<volume_name_1>,<volume_name_2>,...
    ```

    - `\<namespace\>`: namespace where the pod is located.
    - `\<pod_name\>`: pod name.
    - `\<volume_name\>`: name of the persistent volume mounted to
        the pod. You can run the `describe` statement to query the pod
        information. The `Volume` field indicates the names of all
        persistent volumes attached to the pod.

    Add annotations to the pods of WordPress and MySQL. The pod names
    are something like `wordpress-758fbf6fc7-s7fsr` and
    `mysql-5ffdfbc498-c45lh`. As long as the pods are in the default namespace
    `default`, the `-n \<NAMESPACE\>` parameter can be omitted.

    ```bash
    kubectl annotate pod/wordpress-758fbf6fc7-s7fsr backup.velero.io/backup-volumes=wp-storage
    kubectl annotate pod/mysql-5ffdfbc498-c45lh backup.velero.io/backup-volumes=mysql-storage
    ```

2. Back up the application. During the backup, you can specify
    resources based on parameters. If no parameter is added, the entire
    cluster resources are backed up by default. For details about the
    parameters, see [Resource filtering](https://velero.io/docs/v1.7/resource-filtering/).

    - `\--default-volumes-to-restic`: indicates that Restic is used
        to back up all storage volumes mounted to a pod. `HostPath`
        volumes are not supported. If this parameter is left blank, the
        storage volume specified by annotation in
        cce_bestpractice_0024__en-us_topic_0000001171703796_li686918502812> is backed up by default. This parameter is available
        only if `\--use-restic` is specified during [Velero Installation](#installing-velero).

        ```bash
        velero backup create <backup-name> --default-volumes-to-restic
        ```
    - `\--include-namespaces`: backs up resources in a specified namespace.

        ```bash
        velero backup create <backup-name> --include-namespaces <namespace>
        ```
    - `\--include-resources`: backs up the specified resources.

        ```bash
        velero backup create <backup-name> --include-resources deployments
        ```
    - `\--selector`: backs up resources that match the selector.

        ```bash
        velero backup create <backup-name> --selector <key>=<value>
        ```

    In this section, resources in the namespace `default` are backed
    up. `wordpress-backup` is the backup name. Specify the same backup
    name when restoring applications. The following is an example:

    ```bash
    velero backup create wordpress-backup --include-namespaces default --default-volumes-to-restic
    ```

    If the following information is displayed, the backup task is **successfully** created:

    ```bash
    Backup request "wordpress-backup" submitted successfully. Run `velero backup describe wordpress-backup` or `velero backup logs wordpress-backup` for more details.
    ```

3. Check the backup status.

    ```bash
    velero backup get
    ```

    Information similar to the following is displayed:

    ```bash
    NAME               STATUS      ERRORS   WARNINGS   CREATED                         EXPIRES   STORAGE LOCATION   SELECTOR
    wordpress-backup   Completed   0        0          2021-10-14 15:32:07 +0800 CST   29d       default            <none>
    ```

    In addition, you can go to the object bucket to view the backup
    files. The backups path is the application resource backup path, and
    the restic path is the PV data backup path.

    ![image1](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001480191270.png)

### Restoring Applications in the Target Cluster

The storage infrastructure of an on-premises cluster is different from
that of a cloud cluster. After the cluster is migrated, PVs cannot be
mounted to pods. Therefore, during the migration, update the storage
class of the target cluster to shield the differences of underlying
storage interfaces between the two clusters when creating a workload and
request storage resources of the corresponding type. For details, see
[Updating the Storage Class](./updating-resources#updating-the-storage-class)

1. Create a `ConfigMap` in the CCE cluster and map the storage class used
    by the source cluster to the default storage class of the CCE
    cluster.

    In this example, the storage class name of the source cluster is
    `default` and the storage class name of the target cluster is
    `csi-disk`.

    :::note
    - When an application containing PV data is restored in a CCE
        cluster, the defined storage class dynamically creates and
        mounts storage resources (such as EVS volumes) based on the PVC.
    - The storage resources of the cluster can be changed as required,
        not limited to EVS volumes. To mount other types of storage,
        such as file storage and object storage, see
        [Updating the Storage Class](./updating-resources#updating-the-storage-class)
    :::

    YAML file for the migrated cluster:

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
       default:csi-disk
    ```

2. Use the Velero tool to create a restore and specify a backup named
    `wordpress-backup` to restore the WordPress application to the CCE
    cluster.

    ```bash 
    velero restore create --from-backup wordpress-backup
    ```

    You can run the `velero restore get` statement to view the
    application restoration status.

3. After the restoration is complete, check whether the application is
    running properly. If other adaptation problems may occur, rectify
    the fault by following the procedure described in
    [Updating Resources Accordingly](./updating-resources).

## Preparing Object Storage and Velero

### Preparing Object Storage MinIO

Prepare the object storage and save its AK/SK.

1. Install the MinIO.

    ```bash
    # Binary installation
    mkdir /opt/minio
    mkdir /opt/miniodata
    cd /opt/minio
    wget https://dl.minio.io/server/minio/release/linux-amd64/minio
    chmod +x minio
    export MINIO_ACCESS_KEY=minio
    export MINIO_SECRET_KEY=minio123
    ./minio server /opt/miniodata/ &
    ```

    Enter `http://<EIP of the node where MinIO is deployed>:9000` in the address box of a browser. Note that the corresponding ports on the firewall and security group must be enabled.

    To release the MinIO service as a service that can be accessed from outside the cluster, change the service type in `00-minio-deployment.yaml` to `NodePort` or `LoadBalancer`.

    ```
    kubectl apply -f ./velero-v1.4.0-linux-amd64/examples/minio/00-minio-deployment.yaml
    ```

2. Create a bucket, which will be used in the migration.

    Open the web page of the MinIO service. Use `MINIO_ACCESS_KEY`/`MINIO_SECRET_KEY` to log in to the MinIO service. In this example, use `minio`/`minio123`. Click *Create bucket*. In this example, create a bucket named `velero`.

### Preparing Velero

Perform the following operations on other cluster and CCE nodes that can run `kubectl` commands:

1. Download the latest stable version of the migration tool from [here](https://github.com/heptio/velero/releases).

    :::note
    This article uses **velero-v1.4.0-linux-amd64.tar.gz** as an example.
    :::

2. Install the Velero client.

    ```bash
    mkdir /opt/ack2cce
    cd /opt/ack2cce
    tar -xvf velero-v1.4.0-linux-amd64.tar.gz -C /opt/ack2cce
    cp /opt/ack2cce/velero-v1.4.0-linux-amd64/velero /usr/local/bin
    ```

3. Install the Velero server.

    - Prepare the MinIO authentication file:

      ```bash
      cd /opt/ack2cce
      vi credentials-velero

      [default]
      aws_access_key_id = minio
      aws_secret_access_key = minio123
      ```

    - Install the Velero server:
   
      ```bash
      velero install \
       --provider aws \
       --plugins velero/velero-plugin-for-aws:v1.0.0 \
       --bucket velero \
       --secret-file ./credentials-velero \
       --use-restic \
       --use-volume-snapshots=false \
       --backup-location-config region=minio,s3ForcePathStyle="true",s3Url=http://{EIP of the node where minio runs}:9000
      ```

      :::note
      `s3Url` must be set to the actual MinIO address.
      :::

