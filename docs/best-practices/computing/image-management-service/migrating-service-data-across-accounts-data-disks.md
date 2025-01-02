---
id: migrating-service-data-across-accounts-data-disks
title: Migrating Service Data Across Accounts (Data Disks)
tags: [ims, migration]
---

# Migrating Service Data Across Accounts (Data Disks) 

Generally, service data is stored on data disks. To migrate the data across accounts, you need to create data disk images and share them with the target account. This section uses Linux as an example to describe how to migrate service data (only data disks) across accounts in the same region.

## Solution Design

To migrate service data stored on a data disk across accounts, create an
image for the data disk, share the image with the target account. The
target account accepts the shared image and attaches the new data disk
created from the shared image to an existing or new ECS.

![*Figure 1* Migration process](/img/docs/best-practices/computing/image-management-service/en-us_image_0295094264.png)

## Creating a Data Disk Image

Assume that *hello-world.txt* is stored on the data disk of your ECS
and you want to migrate the file to another account.

![image1](/img/docs/best-practices/computing/image-management-service/en-us_image_0295099813.png)

1. Log in to the management console and switch to the related region.

2. Under *Service List*, choose *Compute* -> *Image ManagementService*.

    The *Image Management Service* page is displayed.

3. In the upper right corner, click *Create Image*.

    The *Create Image* page is displayed.

4. Set parameters.

    ![*Figure 2* Creating a data disk
    image](/img/docs/best-practices/computing/image-management-service/en-us_image_0000001251619009.png)

    - **Type**: Select *Data disk image*.
    - **Source**: Select *ECS* and then select the `data disk
        ecs-disk-image-test-volume` data disk.
    - **Name**: Enter a name for the data disk image, for example, `disk-image-test`.
    - **Enterprise Project**: Select `default`.

5. Click *Next*.

6. Confirm the settings, read and agree to the agreement, and click
    *Submit*.

7. The system redirects to the private image list. Wait for several
    minutes and check whether the data disk image is successfully
    created.

    ![*Figure 3* Viewing private
    images](/img/docs/best-practices/computing/image-management-service/en-us_image_0295100003.png)

## Sharing the Image with the Target Account

Share the data disk image created in [Step 1](#creating-a-data-disk-image) with the target account. Before the image sharing, obtain
the project ID of the target account. (You can obtain the project ID from *My Credentials*:

![*Figure 4* Viewing the project
ID](/img/docs/best-practices/computing/image-management-service/en-us_image_0000001138989308.png)

1. Locate the row that contains the `disk-image-test` private image.
    Choose *More* -> *Share* in the *Operation* column.

    The *Share Image* dialog box is displayed.

2. In the *Share Image* dialog box, enter the project ID of the
    target account.

3. Click *OK*.

## Accepting the Shared Image

Accept the shared data disk image.

1. Log in to the management console using the account the image is
    shared with and switch to the related region.

2. Under *Service List*, choose *Compute* -> *Image Management
    Service*. Then, click the *Images Shared with Me* tab.

3. Select *disk-image-test* and click *Accept*.

    ![*Figure 5* Accepting a shared
    image](/img/docs/best-practices/computing/image-management-service/en-us_image_0000001251966577.png)

    After the image is accepted, it is displayed in the shared image
    list.

## Creating a Data Disk or an ECS

Use the shared image to create a new data disk and attach it to an
existing ECS. Alternatively, create an ECS with a data disk created from
the shared image. Then, check whether the service data is successfully
migrated.

- Create a new data disk and attach it to an existing ECS.
    1. Locate the row that contains the shared image
        `disk-image-test`, and click *Create Data Disk* in the
        *Operation* column.

        ![*Figure 6* Creating a data
        disk](/img/docs/best-practices/computing/image-management-service/en-us_image_0295117864.png)

        The page for purchasing EVS disks is displayed.

    2. Configure the billing mode and disk specifications as needed.
        **The AZ must be the same as that of the ECS to which the data
        disk will be attached**. Click *Next*.

    3. Return to the EVS disk list. **Wait** for several minutes until the
        EVS disk is created successfully.

    4. Locate the row that contains the new EVS disk and click
        *Attach* in the *Operation* column to attach the data disk
        to the ECS.

    5. Log in to the ECS and check whether the service data is
        successfully migrated.

        Run the `fdisk -l` command. The command output shows that the
        new data disk has been partitioned.

        ![image2](/img/docs/best-practices/computing/image-management-service/en-us_image_0295125718.png)

        Mount the new partition to a directory of the ECS and check the
        *hello-world.txt* file. The file content is properly printed,
        which means that the service data migration is successful.

        ![image3](/img/docs/best-practices/computing/image-management-service/en-us_image_0295125796.png)
- Create an ECS with a data disk attached.
    1. Under *Service List*, choose *Compute* -> *Elastic Cloud
        Server*.

    2. In the upper right corner, click *Create ECS*.

        The page for purchasing ECSs is displayed.

    3. Configure the billing mode, AZ, and specifications as needed and
        add a data disk which will be created from the shared data disk
        image. Complete the ECS creation as instructed.

        ![*Figure 7* Adding a data
        disk](/img/docs/best-practices/computing/image-management-service/en-us_image_0295128562.png)

    4. Wait for several minutes and check whether the new ECS is
        displayed in the ECS list.

    5. Log in to the new ECS and check whether the service data is
        successfully migrated.

        Run the `fdisk -l` command. The command output shows that the
        new data disk has been partitioned. Mount the new partition to a
        directory of the ECS and check the *hello-world.txt* file. The
        file content is properly printed, which means that the service
        data migration is successful.

        ![image4](/img/docs/best-practices/computing/image-management-service/en-us_image_0295129442.png)