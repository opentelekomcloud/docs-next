---
id: from-on-premises-oracle-to-gaussdb-distributed
title: From On-premises Oracle to GaussDB Distributed
tags: [drs, oracle, gaussdb]
---
Purpose
-------

#### Description

You can use real-time synchronization of DRS to synchronize on-premises Oracle to GaussDB. Full+incremental synchronization can ensure that data is always in sync between the source Oracle and the destination GaussDB.

#### Problems

*   With the rapid increase of enterprise workloads, traditional databases have poor scalability and distributed databases are required.
*   Building traditional databases require purchasing and install servers, systems, databases, and other software. Its O&M is expensive and difficult.
*   The performance of complex queries for traditional databases is poor.
*   It is hard for traditional databases to smoothly migrate data without interrupting services.

#### Migration Architecture

![](/img/docs/best-practices/databases/data-replication-service/en-us_image_0000001606659998.png)

#### Migration Principles

Perform the following operations to complete full and incremental synchronization:

1.  In the full synchronization phase, migrate tables, primary keys, and unique keys.
2.  Start incremental data extraction to ensure that the incremental data generated during full data synchronization is completely extracted to the DRS instance.
3.  Start the full migration task.
4.  Automatically perform incremental synchronization after the full migration is complete. The playback starts from the location where the full migration starts.
5.  Start the comparison task after the incremental replay is complete to check the data consistency. Real-time comparison is supported.
6.  Start migration if the data is consistent.

![](/img/docs/best-practices/databases/data-replication-service/en-us_image_0000001606979486.png)

#### Service List

*   Virtual Private Cloud (VPC)
*   GaussDB
*   Data Replication Service (DRS)
*   Data Admin Service (DAS)

#### Notes on Usage

*   The resource planning in this document is for demonstration only. Adjust it as needed.
*   The end-to-end test data in this document is for reference only.
*   Full synchronization is used to migrate data. Incremental synchronization is used to synchronize data between the source and destination databases in real time.

#### Prerequisites

*   You have registered with Open Telekomn Cloud and completed account authentication.
*   You have set up an on-premises Oracle database for testing.
*   You have obtained the IP address, port number, account, and password of the Oracle database to be migrated.

Resource Planning
-----------------

    Table 1 Resource planning   


*       Category:       VPC
  *       Subcategory:       VPC name
  *       Planned Value:       vpc-src-172
  *       Remarks:       Customize a name for easy identification.
*       Category:       Region
  *       Subcategory:       Test region
  *       Planned Value:       For low network latency and quick resource access, select the region nearest to you.
  *       Remarks: 
*       Category:       AZ
  *       Subcategory:       AZ3
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Subnet
  *       Subcategory:       172.16.0.0/16
  *       Planned Value:       Select a subnet with sufficient network resources.
  *       Remarks: 
*       Category:       Subnet name
  *       Subcategory:       subnet-src-172
  *       Planned Value:       Customize a name for easy identification.
  *       Remarks: 
*       Category:       Oracle
  *       Subcategory:       Name
  *       Planned Value:       orcl
  *       Remarks:       Customize a name for easy identification.
*       Category:       Specifications
  *       Subcategory:       16 vCPUs | 32 GB
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Database version
  *       Subcategory:       11.2.0.1
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Database user
  *       Subcategory:       test_info
  *       Planned Value:       Customize a user. However, the user must have the following permissions during migration: CREATE SESSION, SELECT ANY TRANSACTION, SELECT ANY TABLE, SELECT ANY DICTIONARY, and EXECUTE_CATALOG_ROLE.
  *       Remarks: 
*       Category:       GaussDB
  *       Subcategory:       Instance name
  *       Planned Value:       Auto-drs-gaussdbv5-tar-1
  *       Remarks:       Customize a name for easy identification.
*       Category:       Database version
  *       Subcategory:       GaussDB 1.3 Enterprise Edition
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Instance type
  *       Subcategory:       Distributed (1 CN, 3 DN shards, and 3 replicas)
  *       Planned Value:       Select a distributed instance for the test.
  *       Remarks: 
*       Category:       Deployment model
  *       Subcategory:       Independent
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Transaction consistency
  *       Subcategory:       Strong consistency
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Shards
  *       Subcategory:       3
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Coordinator nodes
  *       Subcategory:       3
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Storage type
  *       Subcategory:       Ultra-high I/O
  *       Planned Value:       -
  *       Remarks: 
*       Category:       AZ
  *       Subcategory:       AZ2
  *       Planned Value:       Select a single AZ for the test. You are advised to select multiple AZs to improve instance availability in actual use.
  *       Remarks: 
*       Category:       Instance specifications
  *       Subcategory:       General-enhanced II 8 vCPUs | 64 GB
  *       Planned Value:       Select small specifications for the test. You are advised to configure specifications based on service requirements in actual use.
  *       Remarks: 
*       Category:       Storage space
  *       Subcategory:       480G
  *       Planned Value:       Select a small storage space for the test. You are advised to configure storage space based on service requirements in actual use.
  *       Remarks: 
*       Category:       Disk encryption
  *       Subcategory:       Disable
  *       Planned Value:       In this example, disk encryption is disabled. Enabling disk encryption improves data security, but slightly affects the read and write performance of the database.
  *       Remarks: 
*       Category:       Logging in to the database through DAS                        
  *       Subcategory:       DB engine
  *       Planned Value:       GaussDB
  *       Remarks:       -
*       Category:       Database source
  *       Subcategory:       GaussDB
  *       Planned Value:       Select the GaussDB instance created in this example.
  *       Remarks: 
*       Category:       Database name
  *       Subcategory:       postgres
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Username
  *       Subcategory:       root
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Password
  *       Subcategory:       -
  *       Planned Value:       Password of the root user of the GaussDB instance created in this example
  *       Remarks: 
*       Category:       DRS migration task
  *       Subcategory:       Migration task name
  *       Planned Value:       DRS-test-info
  *       Remarks:       Customize a name for easy identification.
*       Category:       Destination database name
  *       Subcategory:       test_database_info
  *       Planned Value:       Customize a name for easy identification, but the name must be compatible with the Oracle database name.
  *       Remarks: 
*       Category:       Source DB engine
  *       Subcategory:       Oracle
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Destination DB engine
  *       Subcategory:       GaussDB
  *       Planned Value:       -
  *       Remarks: 
*       Category:       Network type
  *       Subcategory:       Public
  *       Planned Value:       Select the public network for the test.
  *       Remarks: 
