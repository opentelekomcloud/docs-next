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

## Using a Direct Connect Connection to Migrate Data

Direct Connect connects your data center to Open Telekom Cloud, so that you can upload local data directly to Open Telekom Cloud OBS. Direct Connect provides low-latency and high-bandwidth services, which is suitable for you to upload data to OBS at any time, and is therefore recommended when local data needs to be migrated to OBS frequently or in real time.

**Figure 4** Migrating data to OBS using a Direct Connect connection  
![](/img/docs/best-practices/storage/object-storage-service/migrating-local-data-to-obs-direct-connect.png)

1.  Create an OBS bucket.
    
    Log in to OBS Console and create one or more buckets.
    
2.  Enable Direct Connect.
    
    Log in to Direct Connect Console, fill in the application form and submit an order. After the administrator approves the application, you can pay for the order and contact the carrier for physical line connections. Open Telekom Cloud engineers will assist in configuring the connection. For details, see [Enabling Direct Connect](https://docs.otc.t-systems.com/direct-connect/umn/getting_started/enabling_direct_connect/index.html#dc-02-0200).
    
3.  Start data transmission.
    
    After Direct Connect is enabled, upload your local data to OBS using OBS Console, relevant tools, APIs, or SDKs.
