---
id: migrating-from-other_clouds-to-cce
title: Migrating Clusters from Other Clouds to CCE
tags: [cce, migration, minio, velero, obs]
---

# Migrating Clusters from Other Clouds to CCE

This article series showcase how to migrate Kubernetes workloads from other cloud or on-premises Kubernetes environments to the Cloud Container Engine (CCE) on Open Telekom Cloud. It highlights the key considerations for moving applications, container images, and persistent data while ensuring compatibility and service continuity. This best practice focuses on leveraging Open Telekom Cloud services such as [OBS](https://docs.otc.t-systems.com/object-storage-service/index.html) and [SWR](https://docs.otc.t-systems.com/software-repository-container/index.html), along with established tools like [Velero](https://velero.io/), and optionaly [MinIO](https://www.min.io/), to provide a reliable and structured migration path for Kubernetes workloads.

<center>
![image1](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001402114285.png)
<!-- ![image1](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0264642164.png) -->
</center>

## Prerequisites

* The source and target Kubernetes clusters must run version **1.10 or higher**.
* An **OBS bucket** on Open Telekom Cloud is required and **Access credentials (AK/SK)** with proper permissions. Same count if **MinIO** is used as an alternative S3-compatible object-storage instead of OBS.
* Both the source and target clusters need network access to the chosen object storage.
* The **source cluster must be healthy**, with no abnormal pods running.
* The **target CCE cluster must not contain conflicting resources**, since Velero will not overwrite existing objects.
* Sufficient **storage capacity** must be ensured for backups and restores.
* Having [Helm](https://helm.sh/) and [Homebrew](https://brew.sh/) installed on your workstation.
* Having [kubectl](https://kubernetes.io/docs/reference/kubectl/), and optionally [k9s](https://k9scli.io/), installed on your workstation.

:::tip
Deploying the necessary tooling (Helm, kubectl, k9s, velero-cli) on your workstation, can be performed **both** in macOS and in Linux via Homebrew. Another tool to add in your arsenal, is [Bold Brew](https://bold-brew.com/), a Homebrew manager that simplifies your Homebrew package management making installations and updates effortless via a TUI interface.
:::

### Preparing an OBS Bucket

For more details on creating a bucket on OBS, see [Creating a Bucket](https://docs.otc.t-systems.com/object-storage-service/umn/obs_console_operation_guide/getting_started/creating_a_bucket.html). If you use OBS to store backup files, obtain the AK/SK of a user who has the right to operate OBS. For details, see [Obtaining Access Keys (AK/SK)](https://docs.otc.t-systems.com/object-storage-service/api-ref/appendixes/obtaining_access_keys_ak_sk.html).

### Preparing Container Images (Optional)

If you are going to use exclusively [SWR](https://docs.otc.t-systems.com/software-repository-container/index.html) as the source of your container images in CCE, you need to upload the image files to the Open Telekom Cloud container registry. For details, see [Uploading an Image Through the Client](https://docs.otc.t-systems.com/software-repository-container/umn/image_management/uploading_an_image_through_the_client.html).

:::note
Provisioning the source and target Kubernetes cluster(s) is out of the scope of this best practice article.
:::

## Installing MinIO (Optional)

:::important
If you have decided to go with Open Telekom Cloud OBS as your object-storage, please **skip this part** and go straight to [Installing Velero](#installing-velero).
:::

[MinIO](https://min.io/) is an open-source, high-performance object storage system that is fully compatible with the Amazon S3 API. It is designed to store unstructured data such as backups, logs, and media files, and can run on bare metal, virtual machines, or containerized environments. Because of its S3 compatibility, MinIO is often used as a lightweight alternative to commercial object storage services or as a temporary storage backend for applications like Velero during migrations or testing.

1. Prepare a file named **minio-deployment.yaml**, and save it in your workstation:

    ```yaml title="minio-deployment.yaml"
    apiVersion: apps/v1
    kind: Deployment
    metadata:
    name: minio
    namespace: minio
    spec:
    replicas: 1
    selector:
        matchLabels:
        app: minio
    template:
        metadata:
        labels:
            app: minio
        spec:
        containers:
        - name: minio
            image: minio/minio:RELEASE.2022-12-12T19-27-27Z
            args:
            - server
            - /data
            - --console-address
            - ":9001"
            env:
            - name: MINIO_ROOT_USER
                value: "admin"
            - name: MINIO_ROOT_PASSWORD
                value: <A_SECURE_PASSWORD>
            ports:
            - containerPort: 9000
            - containerPort: 9001
            volumeMounts:
            - name: minio-data
                mountPath: /data
        volumes:
            - name: minio-data
            persistentVolumeClaim:
                claimName: minio-pvc
    ---
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
    name: minio-pvc
    namespace: minio
    spec:
    accessModes:
        - ReadWriteOnce
    resources:
        requests:
        storage: 20Gi
    storageClassName: csi-disk
    ---
    apiVersion: v1
    kind: Service
    metadata:
    name: minio
    namespace: minio
    spec:
    type: ClusterIP
    ports:
        - port: 9000
        targetPort: 9000
        name: api
        - port: 9001
        targetPort: 9001
        name: console
    selector:
        app: minio
    ```

    :::important
    Replace the value of `MINIO_ROOT_PASSWORD` with a secure, strong, random password of your choice. e.g.:

    ```shell
    openssl rand -base64 32
    ```

    :::

    :::warning
    The MinIO image `RELEASE.2022-12-12T19-27-27Z` is intentionally used here because later versions have gradually removed functionality from the WebUI, which makes them less suitable for demonstration and training purposes. This MinIO deployment is provided solely for use in a lab context to support migration exercises and should **not** be considered a production-ready setup. For production environments on Open Telekom Cloud, Object Storage Service (OBS) remains the recommended option, offering durability, scalability, and full integration with Velero and other cloud-native services.
    :::

2. Deploy it on your **target** cluster, in this case your Open Telekom Cloud CCE cluster:

    ```shell
    kubectl create namespace minio
    kubectl apply -f minio-deployment.yaml
    ```

3. Expose MinIO console following the steps described in [Prepare CCE to Expose Workloads](/docs/best-practices/containers/cloud-container-engine/prepare-cce-for-external-workloads.md).

## Installing Velero

[Velero](https://velero.io/) is an open-source tool designed to back up and restore Kubernetes cluster resources **and** persistent volumes. It works by capturing the state of objects such as Deployments, Services, ConfigMaps, and PersistentVolumes data, and storing them in a remote backend, like an object storage. Velero installs as a set of components within the cluster, including a server that runs as a deployment and a client CLI used for triggering operations. During a backup, Velero communicates with the Kubernetes API to collect resource definitions and with cloud provider plug-ins to handle persistent storage snapshots. For a restore, Velero applies the saved resources to the target cluster and re-attaches storage where possible. This makes it a reliable solution for disaster recovery, cluster migration, and maintaining application consistency across environments.

:::note
Velero offers two modes for handling persistent volume backups: **CSI** and **FSB**:

* **CSI (Container Storage Interface)**: this mode integrates with storage systems that provide a CSI driver and support the Kubernetes snapshot API. In this setup, Velero creates snapshots at the storage layer, which are typically faster and more efficient since they work directly with the underlying block storage. This approach is well-suited for production environments where the storage system offers native snapshot capabilities and consistency guarantees.
* **FSB (File System Backup)**: this mode, on the other hand, operates at the file level inside the pod. Velero deploys a helper container alongside the application pod, which mounts the same volume and uses a file-copy mechanism to back up or restore data. This method is more flexible because it works even when the storage system does not support snapshots, but it is generally slower and can introduce more load on the pod during the backup process.

In practice, CSI mode is preferred when the underlying infrastructure supports it, while FSB serves as a fallback to ensure Velero can still protect workloads on storage backends without snapshot capabilities.

:::

### Preparing Environmental Variables

1. Prepare a file named **obs.credentials**, and save it in your workstation:

    ```bash title="obs.credentials"
    [default]
    aws_access_key_id=<OBS_ACCESS_KEY>
    aws_secret_access_key=<OBS_SECRET_KEY>
    ```

    :::important
    Replace **OBS_ACCESS_KEY** and **OBS_SECRET_KEY** with the values you obtained by executing the steps in [Obtaining Access Keys (AK/SK)](https://docs.otc.t-systems.com/object-storage-service/api-ref/appendixes/obtaining_access_keys_ak_sk.html).
    :::

    :::warning
    If you have decided to go with MinIO, then open *MinIO Console* -> *Access Keys* -> *Create access key* and copy the autogenerated values:

    ![image1](/img/docs/best-practices/containers/cloud-container-engine/Screenshot_from_2025-09-10_09-32-21.png)
    :::

2. Prepare a file named **obs.env**, and save it in your workstation:

    ```bash title="obs.env"
    export VELERO_S3_REGION=<OBS_REGION>
    export VELERO_S3_URL=<OBS_URL>
    export VELERO_S3_BUCKET=velero
    export VELERO_CREDENTIALS=obs.credentials
    ```

    :::important
    Replace **VELERO_S3_REGION** with the Open Telekom Cloud region that your bucket lives, and **VELERO_S3_URL** with the OBS address. Example for **eu-de**:  

    * **VELERO_S3_REGION** should be `eu-de` and
    * **VELERO_S3_URL** should be `https://obs.eu-de.otc.t-systems.com`.

    :::

    :::warning
    1. If you have decided to go with MinIO, then open *MinIO Dashboard* -> *Settings* -> *Region* and set the value of **Server Location** as **VELERO_S3_REGION**.
    2. If you followed the instructions of [Installing MinIO](#installing-minio-optional) in this guide, set the **VELERO_S3_URL** either to EIP of the Load Balancer or the URL address exposed by the MinIO Ingress.

    ![image1](/img/docs/best-practices/containers/cloud-container-engine/Screenshot_from_2025-09-10_09-55-40.png)
    :::

### Creating a Bucket

Go to the OBS or MinIO console and create a bucket named `velero` as a destination for your backup files. You can use **any** bucket name, but make sure you set `VELERO_S3_BUCKET` value in the next steps accordingly.

### Installing Velero CLI

:::important
The Velero CLI needs to be installed either on your workstation, provided it has access to both clusters, or on **each** bastion host used to connect to the individual clusters.
:::

You can use Homebrew to install the Velero CLI on macOS or on Linux:

```shell
brew install velero
```

or alternatively directly from the [GitHub releases](https://github.com/vmware-tanzu/velero/releases) of the project:

```shell
tar -xvf velero-v1.16.2-linux-amd64.tar.gz
```

and then move the extracted binaries to **/usr/local/bin**.

:::note
At the time of writing, the latest Velero CLI version was `v1.16.2`. To check for the most recent release, always refer to the [GitHub releases](https://github.com/vmware-tanzu/velero/releases)
page.
:::

### Installing Velero with Helm Chart

:::important
The installation of Velero has to be performed in both source **and** target cluster(s), with the identical configuration prepared in the previous step.
:::

1. Load the environment variables you prepared:
   
    ```shell
    source obs.env
    ```

2. Create a namespace and provision the necessary access and secret keys as a Kubernetes `Secret`:

    ```bash
    kubectl create ns velero
    kubectl -n velero create secret generic velero-cloud-credentials --from-file=cloud=$VELERO_CREDENTIALS
    ```

3. Deploy Velero using the Helm Chart:

    ```bash
    helm repo add vmware-tanzu https://vmware-tanzu.github.io/helm-charts
    helm repo update

    helm upgrade --install velero vmware-tanzu/velero -n velero \
    --set credentials.existingSecret=velero-cloud-credentials \
    --set configuration.backupStorageLocation[0].name=default \
    --set configuration.backupStorageLocation[0].provider=aws \
    --set configuration.backupStorageLocation[0].bucket=$VELERO_S3_BUCKET \
    --set configuration.backupStorageLocation[0].config.region=$VELERO_S3_REGION \
    --set configuration.backupStorageLocation[0].config.s3ForcePathStyle=true \
    --set configuration.backupStorageLocation[0].config.s3Url=$VELERO_S3_URL \
    --set deployNodeAgent=true \
    --set defaultVolumesToFsBackup=true \
    --set snapshotsEnabled=false
    ```

    :::note

    * `--set deployNodeAgent=true`, ensures that the **Velero Node Agent** (formerly known as Restic) is deployed to all cluster nodes. The Node Agent runs as a DaemonSet and enables file system–level backups (FSB mode, check for explanation in the previous chapters) of persistent volumes, which is required when snapshot-based backups are not available or not supported by the storage backend.
    * `--set defaultVolumesToFsBackup=true`, configures Velero to use file system backups (FSB) as the default method for all persistent volumes. With this setting, volumes are automatically backed up using the Node Agent without requiring explicit annotations on the pods or volumes, simplifying cluster-wide backup management (although you could find tune which volumes are going to be included in the backup, with annotations either in the StatefulSet or Pod specs).
    * `--set snapshotsEnabled=false`, disables the use of storage-level snapshots through CSI or cloud provider integrations. This is typically done when the target storage does not support snapshot APIs, or when the strategy is to rely solely on file system backups for data protection.

    Together, these settings configure Velero to operate entirely with file system–based backups (FSB) using the Node Agent, making the backup process independent of underlying storage snapshot capabilities.

    For more details on configuring the helm chart values consult the [Velero Helm Chart README](https://github.com/vmware-tanzu/helm-charts/blob/main/charts/velero/README.md).

    :::

4. Install Velero Plugin for AWS:

    The [velero/velero-plugin-for-aws](https://github.com/vmware-tanzu/velero-plugin-for-aws) is a plugin that enables Velero to interact with AWS S3–compatible object storage systems. Since Open Telekom Cloud’s Object Storage Service (OBS) exposes an S3-compatible API, this plugin is required to allow Velero to store and retrieve backups from OBS (same counts for MinIO). Without it, Velero would not be able to communicate with the storage backend, making the plugin a necessary component for backup and restore operations in ours environment.

    ```bash
    velero plugin add velero/velero-plugin-for-aws:v1.12.2
    ```

    :::note
    At the time of writing, the latest plugin version was `v1.12.2`. To check for the most recent release, always refer to their [GitHub releases](https://github.com/vmware-tanzu/velero-plugin-for-aws/releases)
    page.
    :::

5. Verify installation:
   
   After completing the Velero installation, the next step is to verify the setup by checking the configured backup locations. This ensures Velero can properly access the object storage backend before running any backups (and, indirectly, the entire installation).

    ```shell
    velero get backup-locations
    ```

    and if everything went good you should see something like this:

    ```shell
    NAME      PROVIDER   BUCKET/PREFIX   PHASE       LAST VALIDATED                   ACCESS MODE   DEFAULT
    default   aws        velero          Available   2025-09-10 12:35:50 +0200 CEST   ReadWrite     true
    ```

### Installing a Velero Web UI (Optional)

:::note
The installation of a Velero Web UI can to be performed in both source **and** target cluster(s). Available open-source options are [Velero UI](https://velero-ui.docs.otwld.com/) and [VUI](https://vui.seriohub.com/). For this guide we will go for the former.

:warning: Both of them are unofficial solutions.
:::

```shell
helm repo add otwld https://helm.otwld.com/
helm repo update

helm install velero-ui otwld/velero-ui --namespace velero-ui --create-namespace
```

and the you can access the it via port-forwarding:

```shell
kubectl port-forward service/velero-ui 3000:3000 -n velero-ui
```

![image1](/img/docs/best-practices/containers/cloud-container-engine/Screenshot_from_2025-09-10_11-44-07.png)


For more details consult the project's [documentation](https://velero-ui.docs.otwld.com/category/-getting-started).

## Migration Considerations

<!-- WordPress is used as an example to describe how to migrate an
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
migration based on the migration result. -->

- Before the migration, clear the abnormal pod resources in the source cluster. If the pod is in the abnormal state and has a PVC mounted, the PVC is in the pending state after the cluster is migrated.
- Ensure that the cluster on the CCE side does not have the same resources as the cluster to be migrated because Velero does not restore the same resources by default.
- To ensure that container images can be properly pulled after cluster migration, migrate the images to SWR, if that's necessary.
- CCE **does not** support EVS disks of the `ReadWriteMany` type. If resources of this type exist in the source cluster, change the storage type to `ReadWriteOnce`.
- Velero integrates the Restic tool to back up and restore storage volumes. Currently, the storage volumes of the HostPath type are not supported. For details, see [Restic Restrictions](https://velero.io/docs/v1.7/restic/#limitations). To back up storage volumes of this type, replace the `hostPath` volumes with `local` volumes.

:::danger caution
If a backup task involves storage of the `HostPath` type, t**he storage volumes of this type will be automatically skipped** and a warning message will be generated. This will not cause a backup failure.
:::

<!-- ### Backing Up an Application in the Source Cluster

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

    ![image1](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001480191270.png)

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
    [Updating Resources Accordingly](./updating-resources). -->
