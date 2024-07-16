---
id: migrating-container-images
title: Migrating Container Images
tags: [swr]
---

# Migrating Container Images

Containers are growing in popularity. Many enterprises choose to build their own Kubernetes clusters. However, the O&M workload of on-premises clusters is heavy, and O&M personnel need to configure the management systems and monitoring solutions by themselves. For enterprises, managing a large number of images requires high O&M, labor, and management costs, and the efficiency is low. **SoftWare Repository for Container (SWR)** manages container images that function on multiple architectures, such as Linux and Arm. Enterprises can migrate their image repositories to SWR to reduce costs.

This section describes three ways for migrating image repositories to SWR smoothly. You can select one as required:

   | Solution   | Application Scenario | Precautions    |
   | ----------------- | ---------------------------------- | ------------ | 
   | Migrating images to SWR using **Docker commands**         | Small quantity of images                                                                  | -  Disk storage leads to the timely deletion of local images and time-cost flushing.                                                        |
   |                                                       |                                                                                           | -  Docker daemon strictly restricts the number of concurrent pull/push operations, so high-concurrency synchronization cannot be performed. |
   |                                                       |                                                                                           | -  Scripts are complex because HTTP APIs are needed to perform the operations that cannot be implemented through Docker CLI.                |
   | Migrating images to SWR using **image-syncer**            | A large number of images                                                                  | -  Many-to-many image repository synchronization is supported.                                                                              |
   |                                                       |                                                                                           | -  Docker Registry V2-based image repositories (such as Docker Hub, Quay, and Harbor) can be migrated to SWR.                               |
   |                                                       |                                                                                           | -  Memory- and network-dependent synchronization is fast.                                                                                   |
   |                                                       |                                                                                           | -  Flushing the Blob information of synchronized images avoids repetition.                                                                  |
   |                                                       |                                                                                           | -  The number of concurrent synchronization tasks can be adjusted in the configuration file.                                                |
   |                                                       |                                                                                           | -  Automatically retrying failed synchronization tasks can resolve most network jitter during image synchronization.                        |
   |                                                       |                                                                                           | -  Docker or other programs are not required.                                                                                               |
   | Synchronizing images across clouds from **Harbor** to SWR | A customer deploys services in multiple clouds and uses Harbor as their image repository. | Only Harbor v1.10.5 and later versions are supported.                                                                                       |

original_name

:   cce_bestpractice_0330.html

## Migrating Images to SWR Using Docker Commands 

SWR provides easy-to-use image hosting and efficient distribution
services. If small quantity of images need to be migrated, enterprises
can use the **docker pull/push** command to migrate images to SWR:

1.  Pull images from the source repository.
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

2.  Push the images pulled to SWR.

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