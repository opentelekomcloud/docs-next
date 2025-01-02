---
id: migrating-container-images
title: Migrating Container Images
tags: [swr, image-syncer, harbor, migration]
---

# Migrating Container Images

Containers are growing in popularity. Many enterprises choose to build their own Kubernetes clusters. However, the O&M workload of on-premises clusters is heavy, and O&M personnel need to configure the management systems and monitoring solutions by themselves. For enterprises, managing a large number of images requires high O&M, labor, and management costs, and the efficiency is low. **SoftWare Repository for Container (SWR)** manages container images that function on multiple architectures, such as Linux and Arm. Enterprises can migrate their image repositories to SWR to reduce costs.

This blueprint describes three different scenarios for migrating image repositories to SWR smoothly. You can select one as required:

   | Solution   | Application Scenario | Precautions    |
   | ----------------- | ---------------------------------- | ------------ |
   | Migrating images to SWR using **[Docker commands](#migrating-images-to-swr-using-docker-commands)**          | Small quantity of images                                                                  | -  Disk storage leads to the timely deletion of local images and time-cost flushing.                                                        |
   |                                                       |                                                                                           | -  Docker daemon strictly restricts the number of concurrent pull/push operations, so high-concurrency synchronization cannot be performed. |
   |                                                       |                                                                                           | -  Scripts are complex because HTTP APIs are needed to perform the operations that cannot be implemented through Docker CLI.                |
   | Migrating images to SWR using **[image-syncer](#migrating-images-to-swr-using-image-syncer)**            | A large number of images                                                                  | -  Many-to-many image repository synchronization is supported.                                                                              |
   |                                                       |                                                                                           | -  Docker Registry V2-based image repositories (such as Docker Hub, Quay, and Harbor) can be migrated to SWR.                               |
   |                                                       |                                                                                           | -  Memory- and network-dependent synchronization is fast.                                                                                   |
   |                                                       |                                                                                           | -  Flushing the Blob information of synchronized images avoids repetition.                                                                  |
   |                                                       |                                                                                           | -  The number of concurrent synchronization tasks can be adjusted in the configuration file.                                                |
   |                                                       |                                                                                           | -  Automatically retrying failed synchronization tasks can resolve most network jitter during image synchronization.                        |
   |                                                       |                                                                                           | -  Docker or other programs are not required.                                                                                               |
   | Synchronizing images across clouds [from **Harbor** to SWR](#synchronizing-images-across-clouds-from-harbor-to-swr) | A customer deploys services in multiple clouds and uses Harbor as their image repository. | Only Harbor v1.10.5 and later versions are supported.                                                                                       |

## Migrating Images to SWR using Docker Commands

SWR provides easy-to-use image hosting and efficient distribution
services. If small quantity of images need to be migrated, enterprises
can use the **docker pull/push** command to migrate images to SWR:

1. Pull images from the source repository.
    Run the `docker pull` command to pull the images.

    :::note Example
    `docker pull nginx:latest`
    :::

    Run the `docker images` command to check whether the images are
    successfully pulled.

    ```shell
    docker images
    REPOSITORY                        TAG       IMAGE ID       CREATED         SIZE
    nginx                             latest    22f2bf2e2b4f   5 hours ago     22.8MB
    ```

2. Push the images pulled to SWR.

    a.  Log in to the VM where the target container is located and log
        in to SWR. For details, see [Uploading an Image Through a Container Engine Client](https://docs.otc.t-systems.com/software-repository-container/umn/image_management/uploading_an_image_through_the_client.html).

    b.  Tag the images: **docker tag** **\[Image name:Tag name\] \[Image repository
        address\]/\[Organization name\]/\[Image name:Tag name\]**

    :::note example
    `docker tag nginx:v1 swr.eu-de.otc.t-systems.com/cloud-develop/nginx:v1`
    :::

    c.  Run the following command to push the images to the target image
        repository: **docker push** **\[Image repository address\]/\[Organization
        name\]/\[Image name:Tag name\]**

    :::note Example
    `docker push swr.eu-de.otc.t-systems.com/cloud-develop/nginx:v1`
    :::

    d.  Check whether the following information is returned. If yes, the
        push is successful.

        ```shell
        fbce26647e70: Pushed
        fb04ab8effa8: Pushed
        8f736d52032f: Pushed
        009f1d338b57: Pushed
        678bbd796838: Pushed
        d1279c519351: Pushed
        f68ef921efae: Pushed
        v1: digest: sha256:0cdfc7910db531bfa7726de4c19ec556bc9190aad9bd3de93787e8bce3385f8d size: 1780
        ```

        To view the pushed image, refresh the *My Images* page.

## Migrating Images to SWR using image-syncer

If small quantity of images need to be migrated, you can use Docker
commands. However, for thousands of images and several TBs of image
repository data, it takes a long time and even data may be lost. In this
case, you can use the open-source image migration tool
[image-syncer](https://github.com/AliyunContainerService/image-syncer):

1. Download, decompress, and run image-syncer.

    The following uses **image-syncer v1.3.1** as an example.

    ```bash
    wget https://github.com/AliyunContainerService/image-syncer/releases/download/v1.3.1/image-syncer-v1.3.1-linux-amd64.tar.gz
    tar -zvxf image-syncer-v1.3.1-linux-amd64.tar.gz
    ```

2. Create **auth.json**, the authentication information file of the
    image repositories.

    image-syncer supports the Docker image repository based on Docker
    Registry V2. Enter the authentication information as required. In
    the following example, **the image repository of eu-de is migrated to
    eu-nl**.

    The following describes how to write the authentication information
    of the source and target repositories.

    ```json
    {
        "swr.eu-de.otc.t-systems.com": {
            "username": "eu-de_otc@F1I3Q......",
            "password": "2fd4c969ea0......"
        },
        "swr.eu-nl.otc.t-systems.com": {
            "username": "eu-nl_otc@4N3FA......",
            "password": "f1c82b57855f9d35......"
        }
    }
    ```

    In the preceding commands, `swr.eu-de.otc.t-systems.com` indicates
    the image repository address. You can obtain the `username` and
    `password` from the login command as follows:

    Log in to the *SWR console*, and click *Generate Login Command* in
    the upper right corner to obtain the login command in the dialog box
    displayed, as shown in the following figure.

    ![**Figure 1** Generating a login command](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001400827629.png)

    In the above figure :
    - `eu-de_otc@9LA\...\...` is the `username`
    - `077be\...\...\...\.....` is the `password` and
    - `swr.eu-de.otc.t-systems.com` is the image repository address.

3. Create **images.json**, the image synchronization description file.

    In the following example, the source repository address is on the
    left, and the target repository address is on the right.
    image-syncer also supports other description modes. For details, see
    [README.md](https://github.com/AliyunContainerService/image-syncer/blob/master/README.md).

    ```json
    {
        "swr.eu-de.otc.t-systems.com/org-ss/canary-consumer": "swr.eu-nl.otc.t-systems.com/dev-container/canary-consumer"
    }
    ```

4. Run the following command to migrate the images to SWR:

    ```bash
    ./image-syncer \--auth=./auth.json \--images=./images.json
    \--namespace=dev-container \--registry=swr.eu-de.otc.t-systems.com
    \--retries=3 \--log=./log
    ```

      <!-- | Parameter      | Description                                                            |
      | -------------- | --------------------------------------------------------------------   |
      |\--config      | Path of the configuration file. This file needs to be created before you start the synchronization. By default, the configuration file is  \
                     the **config.json** file in the current directory. (This parameter
                     can be replaced with parameters **\--auth** and **\--images** which
                     represent authentication information and repository synchronization
                     rules respectively.) |

      |\--images    |  Path of the image rules file. This file needs to be created before
                     you start the synchronization. By default, the rule file is the
                     **images.json** file in the current directory.|

      |\--auth      |  Path of the authentication file. This file needs to be created
                     before you start the synchronization. By default, the authentication
                     file is the **auth.json** file in the current directory.|

     | \--log       |  Path of the log file. Logs will be printed to Stderr by default.|

      |\--namespace |  default-namespace. default-namespace can also be set by environment
                     variable **DEFAULT_NAMESPACE**. If they are both set at the same
                     time, **DEFAULT_NAMESPACE** will not work at this synchronization.
                     default-namespace will work only if default-registry is not empty.|

      |\--proc      |  Number of goroutines. The default value is **5**.|

      |\--retries  |   Number of retries. The default value is **2**. The retries of failed
                     sync tasks will start after all sync tasks are executed once.
                     Retrying sync tasks will resolve most occasional network problems
                     during synchronization.|

      |\--registry  |  default-registry. default-registry can also be set by environment
                     variable **DEFAULT_REGISTRY**. If they are both set at the same
                     time, **DEFAULT_REGISTRY** will not work at this synchronization.
                     default-registry will work only if default-namespace is not empty.|
      
    After the migration command is executed, you can log in to the
    target image repository to view the migrated images. -->

## Synchronizing Images Across Clouds from Harbor to SWR

[Harbor](https://goharbor.io/) is an open-source enterprise-class Docker Registry server
developed by VMware. It extends the Docker Distribution by adding the
functionalities such as role-based access control (RBAC), image
scanning, and image replication. Harbor has been widely used to store
and distribute container images.

Our scenarion in this blueprint is a customer that deploys services in **multiple clouds** and uses Harbor as their
image repository. We are going to be accessing SWR through a **public** network.

1. Configure a registry endpoint on Harbor.

    :::note
    Open Telekom Cloud SWR has not yet integrated with Harbor. You need clone [this repo](https://github.com/akyriako/harbor/tree/opentelekomcloud_adapter) and build it from branch **opentelekomcloud\_adapter**.
    :::

    Add an endpoint and configure the following parameters.

    ![image2](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001418569120.png)

    - `Provider`: Select `Open Telekom Cloud SWR`.
    - `Name`: Enter a customized name.
    - `Endpoint URL`: Enter the public network domain name of
        SWR in the format of `https://{SWR image repository
        address}`. To obtain the image repository address, log in
        to the SWR console, choose *My Images*, and click *Upload
        Through Client*. You can view the image repository address
        of the current region on the page that is displayed.
    - `Access ID`: Enter an access ID in the format of `Regional project name@\[AK\]`.
    - `Access Secret`: Enter an AK/SK. To obtain an AK/SK, see [Obtaining a Long-Term Valid Login Command](https://docs.otc.t-systems.com/software-repository-container/umn/image_management/obtaining_a_long-term_valid_login_command.html).
    - `Verify Remote Cert`: *Deselect* the option.
  
2. Configure a replication rule.

    a.  Create a replication rule.

        ![image1](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001468885853.png)

    b.  Configure the following parameters:

        -   `Name`: Enter a customized name.
        -   `Replication mode`: Select `Push-based`, indicating that images are pushed **from** the local Harbor **to** the remote repository.
        -   `Source resource filter`: Filters images on Harbor based on the configured rules.
        -   `Destination registry`: Select the endpoint created previously.
        -   *Destination*
            `Namespace`: Enter the organization name on SWR.
            `Flattening`: Select `Flatten All Levels`, indicating
            that the hierarchy of the registry is reduced when copying
            images. If the directory of Harbor registry is
            **library/nginx** and the directory of the endpoint
            namespace is **dev-container**, after you flatten all
            levels, the directory of the endpoint namespace is
            **library/nginx -&gt; dev-container/nginx**.
        -   `Trigger Mode`: Select `Manual`.
        -   `Bandwidth`: Set the maximum network bandwidth when
            executing the replication rule. The value `-1` indicates
            no limitation.

3. After creating the replication rule, select it and click
    *REPLICATE* to complete the replication.

    ![image2](/img/docs/best-practices/containers/cloud-container-engine/en-us_image_0000001418729104.png)
