---
id: from-ecs-hosted-mongodb-to-dds
title: From ECS-hosted MongoDB to DDS
tags: [dds, migration, mongodb, ecs, drs]
---


# From ECS-hosted MongoDB to DDS

DRS helps you migrate data from MongoDB databases on ECSs to DDS instances on the current cloud. With DRS, you can migrate databases online with zero downtime and your services and databases can remain operational during migration.

## Solution Design

This section describes how to use DRS to migrate data from an ECS
database to a DDS instance on the current cloud. The following network
scenarios are supported:

### Source and destination databases are in the same VPC

![**Figure 1** Source and destination databases in the same VPC](/img/docs/best-practices/databases/document-database-service/en-us_image_0295762707.png)

### Source and destination databases are in different VPCs

![**Figure 2** Source and destination databases in the same region and different VPCs](/img/docs/best-practices/databases/document-database-service/en-us_image_0180865321.png)

### Procedure

![**Figure 3** Flowchart](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001213229532.png)

#### Migration Suggestions

:::important

- Database migration is closely impacted by a wide range of
    environmental and operational factors. To ensure the migration goes
    smoothly, perform a test run before the actual migration to help you
    detect and resolve any potential issues in advance. Recommendations
    on how to minimize any potential impacts on your data base are
    provided in this section.
- It is **strongly recommended** that you start your migration task during
    off-peak hours. A less active database is easier to migrate
    successfully. If the data is fairly static, there is less likely to
    be any severe performance impacts during the migration.

:::

#### Notes on Migration

:::important
For details, see
[precautions](https://docs.otc.t-systems.com/data-replication-service/umn/real-time_migration/to_the_cloud/index.html#drs-online-migration)
on using specific migration tasks in *Data Replication Service Real-Time
Migration*.
:::

## Prerequisites

1. Permissions:

    **Table 1** below, lists the permissions required for the source and destination
    databases when migrating data from a MongoDB database on an ECS to
    DDS on the current cloud.

    | Database    | Full Migration Permission                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Full+Incremental Migration Permission                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Source      | **Replica set**: The source database user must have the read permission for the database to be migrated. <br/> **Single node**: The source database user must have the read permission for the database to be migrated. <br/> **Cluster**: The source database user must have the read permission for the databases to be migrated and the config database. To migrate accounts and roles of the source database, the source database user must have the read permission for the `system.users` and `system.roles` system tables of the admin database. | **Replica set**: The source database user must have the read permission for the databases to be migrated and the local database. <br/> **Single node**: The source database user must have the `read` permission for the databases to be migrated and the local database. <br/> **Cluster**: The source mongos node user must have the `readAnyDatabase` permission for the databases to be migrated and the config database. The source shard node user must have the `readAnyDatabase` permission for the **admin** database and the `read` permission for the **local** database. To migrate accounts and roles of the source database, the source database user must have the read permission for the `system.users` and `system.roles` system tables of the **admin** database. |
    | Destination | The destination database user must have the `dbAdminAnyDatabase` permission for the **admin** database and the `readWrite` permission for the **destination** database. If the destination database is a cluster instance, the migration account must have the read permission for the config database.                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

    **Table 1** Migration permissions

    - Source database permissions:

        The source MongoDB database user must have all the required
        permissions listed in the table above.
        If the permissions are insufficient, create a user that has all
        of the permissions on the source database.

    - Destination database permissions:

        The initial account of the DDS instance has the required
        permissions.

2. Network settings

    - The source database and destination DDS DB instance must be in
        the same region.
    - The source database and destination DDS DB instance can be
        either in the same VPC or different VPCs.
        - If the source and destination databases are in different
            VPCs, the subnets of the source and destination databases
            are required to be in different CIDR blocks. You need to
            create a VPC peering connection between the two VPCs.

            For details, see [VPC Peering Connection
            Overview](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/vpc_peering_connection_overview.html)
            in the *Virtual Private Cloud User Guide*.

        - If the source and destination databases are in the same VPC,
            the networks are interconnected by default.

3. Security rules

    - In the same VPC, the network is connected by default. You do not
        need to set a security group.
    - In different VPCs, establish a VPC peering connection between
        the two VPCs. You do not need to set a security group.

4. Other

    You need to export the user information of the MongoDB database
    first and manually add it to the destination DDS DB instance because
    the user information will not be migrated.

## Migrating the Database

1. Create a migration task.

    1. Log in to the management console and choose *Databases* ->
        *Data Replication Service* to go to the *DRS console*.

    2. On the *Online Migration Management* page, click *Create
        Migration Task*.

    3. On the *Create Replication Instance* page, configure the task
        details, recipient, and replication instance and click *Next*.

        ![**Figure 4** Replication instance information](/img/docs/best-practices/databases/document-database-service/en-us_image_0232589882.png)

        | Parameter   | Description                                                                                                                                                     |
        | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | Project     | The project corresponds to the current region and can be changed.                                                                                               |
        | Task Name   | The task name consists of 4 to 50 characters, starts with a letter, and can contain only letters (case-insensitive), digits, hyphens (-), and underscores (\_). |
        | Description | The description consists of a maximum of 256 characters and cannot contain the following special characters: =\<\>&'\\"                                         |

        **Table 2** Task settings

       | Parameter               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
       | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
       | Data Flow               | To the cloud                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
       | Source DB Engine        | Select MongoDB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
       | Destination DB Engine   | Select DDS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
       | Network Type            | Select VPC.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
       | Destination DB Instance | The DDS DB instance you purchased.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
       | Migration Type          | Select Full+Incremental as an example: <br/> **Full**: This migration type is suitable for scenarios where a service interruption is acceptable. All objects and data in non-system databases are migrated to the destination database at one time. The objects include tables, views, and stored procedures. <br/> If you perform a full migration, you are advised to stop operations on the source database. Otherwise, data generated in the source database during the migration will not be synchronized to the destination database. <br/> **Full+Incremental**: This migration type allows you to migrate data without interrupting services. After a full migration initializes the destination database, an incremental migration initiates and parses logs to ensure data consistency between the source and destination databases.    Note  If you select the Full+Incremental migration type, data generated during the full migration will be synchronized to the destination database with zero downtime, ensuring that both the source and destination databases remain accessible. |
       | Source DB Instance Type | If you select Full+Incremental for Migration Type, set this parameter based on the source database. Non-cluster is selected as an example.  If the source database is a cluster instance, set this parameter to Cluster. If the source database is a replica set or a single node instance, set this parameter to Non-cluster.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
       | Obtain Incremental Data | This parameter is available for configuration if Source DB Instance Type is set to Cluster. You can determine how to capture data changes during the incremental synchronization.  <br/>  - **oplog**: For MongoDB 3.2 or later, DRS directly connects to each shard of the source DB instance to extract data. If you select this mode, you must disable the balancer of the source instance. When testing the connection, you need to enter the connection information of each shard node of the source instance. <br/> - **changeStream**: This method is recommended. For MongoDB 4.0 and later, DRS connects to mongos nodes of the source instance to extract data. If you select this method, you must enable the WiredTiger storage engine of the source instance.   Only whitelisted users can use changeStream. To use this function, submit a service ticket. In the upper right corner of the management console, choose *Service Tickets* -> *Create Service Ticket* to submit a service ticket.                                                                                                  |
       | Source Shard Quantity   | If Source DB Instance Type is set to Cluster and Obtain Incremental Data is set to oplog, enter the number of source shard nodes. The default minimum number of source DB instances is 2 and the maximum number is 32. You can set this parameter based on the number of source database shards.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

        **Table 3** Replication instance information

    4. On the *Configure Source and Destination Databases* page, wait
        until the replication instance is created. Then, specify source
        and destination database information and click *Test
        Connection* for both the source and destination databases to
        check whether they have been connected to the replication
        instance. After the connection tests are successful, select the
        check box before the agreement and click *Next*.

        ![**Figure 5** Source and destination database details](/img/docs/best-practices/databases/document-database-service/en-us_image_0232605869.png)

        | Parameter                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
        | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | Source Database Type      | Select Self-built on ECS.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
        | VPC                       | A dedicated virtual network in which the source database is located. It isolates networks for different services. You can select an existing VPC or create a VPC. For details on how to create a VPC, see [Creating a VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html).                                                                                                                                               |
        | Subnet                    | A subnet provides dedicated network resources that are logically isolated from other networks, improving network security. The subnet must be in the AZ where the source database resides. You need to enable DHCP for creating the source database subnet. For details on how to create a VPC, see the [Creating a VPC](https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html) section in the Virtual Private Cloud User Guide. |
        | IP Address or Domain Name | The IP address or domain name of the source database.                                                                                                                                                                                                                                                                                                                                                                                                                      |
        | Port                      | The port of the source database. Range: 1 - 65535                                                                                                                                                                                                                                                                                                                                                                                                                          |
        | Database Username         | A username for the source database.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | Database Password         | The password for the database username.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | SSL Connection            | To improve data security during the migration, you are advised to enable SSL to encrypt migration links and upload a CA certificate.                                                                                                                                                                                                                                                                                                                                       |

        **Table 4** Source database information

        | Parameter         | Description                                                                                                             |
        | ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
        | DB Instance Name  | The DDS DB instance you have selected during the migration task creation is displayed by default and cannot be changed. |
        | Database Username | The username for accessing the destination DDS DB instance.                                                             |
        | Database Password | The password for the database username.                                                                                 |

        **Table 5** Destination database information

    5. On the *Set Task* page, select migration objects and click
        *Next*.

        ![**Figure 6** Migration object](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001198097583.png)

        | Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
        | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | Migrate Account | There are accounts that can be migrated completely and accounts that cannot be migrated. You can choose whether to migrate the accounts. Accounts that cannot be migrated or accounts that are not selected will not exist in the destination database. Ensure that your services will not be affected by these accounts.  Yes If you choose to migrate accounts, see [Migrating Accounts](https://docs.otc.t-systems.com/data-replication-service/umn/real-time_migration/task_management/managing_objects/migrating_accounts.html) in Data Replication Service User Guide to migrate database users and roles. No During the migration, accounts and roles are not migrated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
        | Migrate Object  | You can choose to migrate all objects, tables, or databases based on your service requirements.  All: All objects in the source database are migrated to the destination database. After the migration, the object names will remain the same as those in the source database and cannot be modified. Tables: The selected table-level objects will be migrated. Databases: The selected database-level objects will be migrated.  If the source database is changed, click  in the upper right corner before selecting migration objects to ensure that the objects to be selected are from the changed source database.   Note   If you choose not to migrate all of the databases, the migration may fail because the objects, such as stored procedures and views, in the database to be migrated may have dependencies on other objects that are not migrated. To ensure a successful migration, you are advised to migrate all of the databases. When you select an object, the spaces before and after the object name are not displayed. If there are two or more consecutive spaces in the middle of the object name, only one space is displayed. The search function can help you quickly select the required database objects. |

        **Table 6** Migration object

    6. On the *Check Task* page, check the migration task.

        - If any check fails, review the cause and rectify the fault.
            After the fault is rectified, click *Check Again*.

            :::note
            For details about how to handle check failures, see
            [Checking Whether the Source Database Is
            Connected](https://docs.otc.t-systems.com/data-replication-service/umn/troubleshooting/solutions_to_failed_check_items/networks/checking_whether_the_source_database_is_connected.html)
            in *Data Replication Service User Guide*.
            :::

        - If all check items are successful, click *Next*.

            ![**Figure 7** Task Check](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001152137438.png)

        You can proceed to the next step only when all check items are
        successful. If any alarms are generated, view and confirm the
        alarm details first before proceeding to the next step.

    7. On the displayed page, specify *Start Time* and confirm that
        the configured information is correct and click *Submit* to
        submit the task.

        ![**Figure 8** Task startup settings](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001199158158.png)

        | Parameter  | Description                                                                                                                                                                                                                                                                                                                                                      |
        | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | Start Time | Set Start Time to Start upon task creation or Start at a specified time based on site requirements. The Start at a specified time option is recommended.   Note  The migration task may affect the performance of the source and destination databases. You are advised to start the task in off-peak hours and reserve two to three days for data verification. |

        **Table 7** Task startup settings

    8. After the task is submitted, go back to the *Online Migration
        Management* page to view the task status.

2. Manage the migration task.

    The migration task contains two phases: full migration and
    incremental migration. You can manage them in different phases.

    - **Full migration**
        - Viewing the migration progress: Click the target full
            migration task, and on the *Migration Progress* tab, you
            can see the migration progress of the structure, data,
            indexes, and migration objects. When the progress reaches
            100%, the migration is complete.
        - Viewing migration details: In the migration details, you can
            view the migration progress of a specific object. If the
            number of objects is the same as that of migrated objects,
            the migration is complete. You can view the migration
            progress of each object in detail. Currently, this function
            is available only to whitelisted users. You can submit a
            service ticket to apply for this function.
    - **Incremental Migration** Permission
        - Viewing the synchronization delay: After the full migration
            is complete, an incremental migration starts. On the
            *Online Migration Management* page, click the target
            migration task. On the displayed page, click *Migration
            Progress* to view the synchronization delay of the
            incremental migration. If the synchronization delay is 0s,
            the destination database is being synchronized with the
            source database in real time. You can also view the data
            consistency on the *Migration Comparison* tab.

            ![**Figure 9** Viewing the synchronization delay](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001243756137.png)

        - Viewing the migration results: On the *Online Migration
            Management* page, click the target migration task. On the
            displayed page, click *Migration Comparison* and perform a
            migration comparison in accordance with the comparison
            process, which should help you determine an appropriate time
            for migration to minimize service downtime.

            ![**Figure 10** Database comparison
            process](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001213070166.png)

            For details, see [Comparing Migration
            Items](https://docs.otc.t-systems.com/data-replication-service/umn/real-time_migration/task_management/step_4_compare_migration_items.html)
            in *Data Replication Service User Guide*.

3. Cut over services.

    You are advised to start the cutover process during off-peak hours.
    At least one complete data comparison is performed during off-peak
    hours. To obtain accurate comparison results, start data comparison
    at a specified time point during off-peak hours. If it is needed,
    select *Start at a specified time* for *Comparison Time*. Due to
    slight time difference and continuous operations on data,
    inconsistent comparison results may be generated, reducing the
    reliability and validity of the results.

    1. Interrupt services first. If the workload is not heavy, you may
        not need to interrupt the services.

    2. Run the following statement on the source database and check
        whether any new sessions execute SQL statements within the next
        1 to 5 minutes. If there are no new statements executed, the
        service has been stopped.

        ```
        db.currentOp()
        ```

        :::note
        The process list queried by the preceding statement includes the
        connection of the DRS replication instance. If no additional
        session executes SQL statements, the service has been stopped.
        :::

    3. On the *Migration Progress* page, view the synchronization
        delay. When the delay is displayed as 0s and remains stable for
        a period, then you can perform a data-level comparison between
        the source and destination databases. For details about the time
        required, refer to the results of the previous comparison.

        - If there is enough time, compare all objects.
        - If there is not enough time, use the data-level comparison
            to compare the tables that are frequently used and that
            contain key business data or inconsistent data.

    4. Determine an appropriate time to cut the services over to the
        destination database. After services are restored and available,
        the migration is complete.

4. Stop or delete the migration task.

    1. Stopping the migration task. After databases and services are
        migrated to the destination database, to prevent operations on
        the source database from being synchronized to the destination
        database to overwrite data, you can stop the migration task.
        This operation only deletes the replication instance, and the
        migration task is still displayed in the task list. You can view
        or delete the task. DRS will not charge for this task after you
        stop it.
    2. Delete the migration task. After the migration task is complete,
        you can delete it. After the migration task is deleted, it will
        no longer be displayed in the task list.
