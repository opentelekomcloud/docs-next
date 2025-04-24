---
id: migrating-local-data-to-obs
title: Migrating Local Data to OBS
tags: [storage, obs]
---

# Migrating Local Data to OBS

## Background

Conventional on-premises storage servers cannot meet the storage demands for massive amounts of data. The main reasons are as follows:
- Storage capacity is subject to hardware devices. If the storage capacity becomes insufficient, you need to purchase disks and expand the capacity manually.
- The initial deployment requires high investments and a long construction period, but it quickly lags behind as enterprise services change so fast.
- Network information vulnerabilities, technical vulnerabilities, and unintended operations may result in security risks.

In contrast, OBS provides massive, stable, and secure cloud storage capabilities. With OBS, you do not need to worry about the storage capacity because it can be expanded infinitely. OBS can store unstructured data of any type and size. OBS ensures high stability and security for your data, featuring a multi-level reliability architecture, server-side encryption, log management, and permission control. In terms of the cost, OBS is available upon service subscription, eliminating the need for the investment in physical server deployment and maintenance.

Open Telekom Cloud provides diverse [migration solutions](#migration-solutions) to help you migrate data from your on-premises storage servers to OBS in a cost-effective, secure, and efficient manner. You can select a suitable migration solution according to your data volume, time arrangement, and budget.

## Migration Solutions

[Table 1](#table1) describes the migration solutions provided by Open Telekom Cloud.
 
<a id="table1">Table 1 Migration solutions</a>

| Solution                                                                                                            | Data Volume                                                                | Requirement                                                                                                              | Time Required                                              | Pricing                                                                                                                                                                                |
| :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Using OBS Tools to Migrate Data](#using-obs-tools-to-migrate-data) (online)                                        | Not larger than 1 TB                                                       | The public network bandwidth must be idle and manual operations on clients or scripts are required to start data upload. | About 1 day for 1 TB data with the bandwidth of 100 Mbit/s | Data transmission is free. Only the storage space used on OBS is charged.                                                                                                              |
| [Using a Direct Connect Connection to Migrate Data](#using-a-direct-connect-connection-to-migrate-data) (real-time) | More than 100 TB data that needs real-time online transmission every month | A Direct Connect connection must be deployed.                                                                            | Depends on the bandwidth of the Direct Connect connection. | Fees are charged based on the distance and bandwidth of the connection. For details, see  [Direct Connect Pricing Details](https://open-telekom-cloud.com/en/prices/price-calculator). |
<!-- | [Using CDM to Migrate Data](#using-cdm-to-migrate-data) (online)                                                    | Less than 8 TB at a time                                                   | Cloud Data Migration (CDM) must be subscribed to.                                                                        | One day for 1 TB to 8 TB (depending on the network condition and read and write performance of the data source) | Fees are charged based on CDM instance specifications and the running duration. | -->
<!-- | [Using Disk-based DES to Migrate Data](#using-disk-based-des-to-migrate-data) (offline)                             | Less than 30 TB at a time                                                  | Users must prepare disks by themselves.                                                                                  | See DES documentation for timeline details                                                                      | Fees are charged based on the number of disks and the running duration.         | -->
<!-- | [Using Teleport-based DES to Migrate Data](#using-teleport-based-des-to-migrate-data) (offline)                     | 30 TB to 500 TB at a time                                                  | Open Telekom Cloud data centers mail Teleports to users.                                                                             | See DES documentation for timeline details                                                                      | Fees are charged based on the number of disks and the running duration.         | -->

## Using OBS Tools to Migrate Data

OBS provides various client tools, such as OBS Browser+ and obsutil, to migrate hundreds of gigabytes local data to OBS. You are advised to migrate data during off-peak hours so as to minimize the impact on major services on the public network.

For details about the scenarios and operation guidelines of each tool, see [OBS Tool Guide](https://docs.otc.t-systems.com/object-storage-service/tool-guide/).

<!-- ## Using CDM to Migrate Data

CDM provides batch data migration services for homogeneous and heterogeneous data sources. By creating scheduled jobs, CDM connects data sources, such as file systems, databases, and object storage on the on-premises storage servers, to Open Telekom Cloud OBS. In this way, local data can be migrated to OBS periodically and automatically.

**Figure 1** Migrating data to OBS using CDM  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-obs/en-us_image_0000001970523085.png)

1.  Create an OBS bucket.
    
    Create a bucket on OBS Console or OBS Browser+ for storing data.
    
2.  Purchase CDM.
    
    Create a CDM cluster to manage links and jobs.
    
3.  Configure links and jobs.
    
    In the created CDM cluster, create a source link to connect to the local data source and a destination link to connect to OBS in the cloud. Then, create a CDM job to migrate local data to OBS.
    
4.  Start data transmission.
    
    Execute the CDM job to start data transmission. You can view the job progress on the job management page. -->
    

<!-- ## Using Disk-based DES to Migrate Data

Disk-based Data Express Service (DES) allows you to deliver data disks (such as USB flash drives and eSATA disks) to a Open Telekom Cloud data center offline, achieving efficient data transmission. Disk-based DES is suitable for migrating data less than 30 TB.

**Figure 2** Migrating data to OBS using disk-based DES  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-obs/en-us_image_0000001943124864.png)

1.  Create an OBS bucket.
    
    Create a bucket on OBS Console or OBS Browser+ for storing data.
    
2.  Create a disk-based DES order.
    
    Log in to DES Console and create a disk-based DES order. Import the provided signature file to a local data disk and send the disk to a Open Telekom Cloud data center.
    
3.  Start data transmission.
    
    After receiving the disk, a Open Telekom Cloud data center administrator mounts the disk to a physical server. Then you will receive an SMS message to notify you of inputting the access keys (AK and SK) to start data uploading. After data transmission is complete, you can view the transmission result on both DES Console and OBS Console. The Open Telekom Cloud data center will send your disk back afterwards.
    

For details, see [Detailed Instructions on Using Disks](https://support.huaweicloud.com/intl/en-us/usermanual-des/en-us_topic_0047663833.html).

## Using Teleport-based DES to Migrate Data

Teleport is specially designed for migrating data (between 30 TB and 500 TB) to OBS offline. It is dust- and water-proof and resistant to vibration and crush. With sound security protection mechanisms (such as GPS locking and data encryption), Teleport securely and efficiently migrates data at scale.

**Figure 3** Migrating data to OBS using Teleport-based DES  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-obs/en-us_image_0000001970403353.png)

1.  Create an OBS bucket.
    
    Create a bucket on OBS Console or OBS Browser+ for storing data.
    
2.  Create a Teleport-based DES order.
    
    Select Teleport-based DES to create an order.
    
3.  Receive and import data to the Teleport.
    
    After the DES order is created successfully, you will receive the Teleport sent by a Open Telekom Cloud data center. Connect the Teleport to your data server, import the data to the Teleport, and send the Teleport to the Open Telekom Cloud data center.
    
4.  Start data transmission.
    
    After the Open Telekom Cloud data center receives the Teleport, you can enter the access keys on DES Console to transmit data from the Teleport to a specific OBS bucket. After data transmission is complete, you can view the transmission result on both DES Console and OBS Console.
    

For details, see [Detailed Instructions on Using Teleport](https://support.huaweicloud.com/intl/en-us/usermanual-des/des_01_0011.html). -->

## Using a Direct Connect Connection to Migrate Data

Direct Connect connects your data center to Open Telekom Cloud, so that you can upload local data directly to Open Telekom Cloud OBS. Direct Connect provides low-latency and high-bandwidth services, which is suitable for you to upload data to OBS at any time, and is therefore recommended when local data needs to be migrated to OBS frequently or in real time.

**Figure 4** Migrating data to OBS using a Direct Connect connection  
![](https://arch-assets-dev.obs.eu-de.otc.t-systems.com/static/img/docs/best-practices/storage/object-storage-service/migrating-local-data-to-obs-direct-connect.png)

1.  Create an OBS bucket.
    
    Log in to OBS Console and create one or more buckets.
    
2.  Enable Direct Connect.
    
    Log in to Direct Connect Console, fill in the application form and submit an order. After the administrator approves the application, you can pay for the order and contact the carrier for physical line connections. Open Telekom Cloud engineers will assist in configuring the connection. For details, see [Enabling Direct Connect](https://docs.otc.t-systems.com/direct-connect/umn/getting_started/enabling_direct_connect/index.html#dc-02-0200).
    
3.  Start data transmission.
    
    After Direct Connect is enabled, upload your local data to OBS using OBS Console, relevant tools, APIs, or SDKs.
