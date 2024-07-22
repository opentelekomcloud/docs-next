---
id: from-other-cloud-mongodb-to-dds
title: From Other Cloud MongoDB to DDS
tags: [dds, migration, mongodb]
---

# From Other Cloud MongoDB to DDS

DRS helps you migrate MongoDB databases from other cloud platforms to
DDS on the current cloud. With DRS, you can migrate databases online
with zero downtime and your services and databases can remain
operational during migration.

## Solution Design

This section describes how to use DRS to migrate MongoDB databases from
another cloud to DDS on the current cloud. Migration scenarios include:

### Migrating MongoDB databases from another cloud to DDS on the current cloud

![**Figure 1** Migrating MongoDB databases from other
clouds](/img/docs/best-practices/databases/document-database-service/en-us_image_0295762499.png)

### Migrating self-built MongoDB databases from servers on another cloud to DDS on the current cloud

![**Figure 2** Migrating MongoDB databases from other cloud
servers](/img/docs/best-practices/databases/document-database-service/en-us_image_0295762649.png)

### Procedure

![**Figure 3**
Flowchart](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001213229532.png)

:::important

- Database migration is closely impacted by a wide range of
    environmental and operational factors. To ensure the migration goes
    smoothly, perform a test run before the actual migration to help you
    detect and resolve any potential issues in advance. Recommendations
    on how to minimize any potential impacts on your data base are
    provided in this section.
- It is strongly recommended that you start your migration task during
    off-peak hours. A less active database is easier to migrate
    successfully. If the data is fairly static, there is less likely to
    be any severe performance impacts during the migration.

:::

:::caution
Before creating a migration task, read the migration notes carefully.
:::

For details, see
[precautions](https://docs.otc.t-systems.com/data-replication-service/umn/real-time_migration/to_the_cloud/index.html#drs-online-migration)
on using specific migration tasks in *Data Replication Service Real-Time
Migration*.

## Prerequisites

1. Permissions

    `Table 1 <dds_0016__en-us_topic_0120558714_table3630544204314>`
    lists the permissions required for the source and destination
    databases when migrating a MongoDB database from another cloud to
    DDS on the current cloud.

    - Source database permissions:

        The source MongoDB database user must have all the required
        permissions listed in
        `Table 1 <dds_0016__en-us_topic_0120558714_table3630544204314>`.
        If the permissions are insufficient, create a user that has all
        of the permissions on the source database.

    - Destination database permissions:

        If the destination database is a DDS database, the initial
        account can be used.

2. Network settings

    Enable public accessibility for the source database.

    - Source database network settings:

        Any source database MongoDB instances will need to be accessible
        from the Internet.

    - Destination database network settings: No settings are required.

3. Security rules

    - Source database security group settings:

        The replication instance needs to be able to access the source
        MongoDB instance. That means that the EIP of the replication
        instance must be on the whitelist of the source MongoDB
        instance.

        Before configuring the network whitelist, you need to obtain the
        EIP of the replication instance.

        - After creating a replication instance on the DRS console,
            you can find the EIP on the **Configure Source and
            Destination Databases** page as shown in
            `Figure 4 <dds_0016__en-us_topic_0120558714_fig121513143432>`.

            ![**Figure 4** EIP of the replication
            instance](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001244078029.png)

        You can also add `0.0.0.0/0` to the source database whitelist to
        allow any IP address to access the source database but this
        action may result in security risks.

        If you do take this step, then once the migration is complete,
        you should delete this item from the whitelist or your system
        will insecure.

    - Destination database security group settings:

        By default, the destination database and the DRS replication
        instance are in the same VPC and can communicate with each
        other. No further configuration is required.

4. Other

    You need to export the user information of the MongoDB database
    first and manually add it to the destination DDS DB instance because
    the user information will not be migrated.

## Migration Procedure

1. Create a migration task.

    1. Log in to the management console and choose *Databases* ->
        *Data Replication Service* to go to the DRS console.

    2. On the *Online Migration Management* page, click *Create
        Migration Task*.

    3. On the *Replication Instance Information* page, configure the
        task details, description, and replication instance details and
        click *Next*.

        ![**Figure 5** Replication instance
        information](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001493711038.png)

    4. On the *Configure Source and Destination Databases* page, wait
        until the replication instance is created. Then, specify source
        and destination database information and click *Test
        Connection* for both the source and destination databases to
        check whether they have been connected to the replication
        instance. After the connection tests are successful, select the
        check box before the agreement and click *Next*.

        ![**Figure 6** Source database
        information](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001151977634.png)

        - Destination database configuration

            ![**Figure 7** Destination database
            information](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001198097269.png)

            | Parameter         | Description                                                                          |
            |-------------------|--------------------------------------------------------------------------------------|
            | DB Instance Name  | The DB instance you selected when creating the migration task and cannot be changed. |
            | Database Username | The username for accessing the destination database.                                 |
            | Database Password | The password for the database username.                                              |

    5. On the *Set Task* page, select migration objects and click
        *Next*.

        ![**Figure 8** Migration
        object](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001198097583.png)

    6. On the *Check Task* page, check the migration task.

        - If any check fails, review the cause and rectify the fault.
            After the fault is rectified, click *Check Again*.

            For details about how to handle check failures, see
            [Checking Whether the Source Database Is
            Connected](https://docs.otc.t-systems.com/data-replication-service/umn/troubleshooting/solutions_to_failed_check_items/networks/checking_whether_the_source_database_is_connected.html)
            in *Data Replication Service User Guide*.

        - If all check items are successful, click *Next*.

            ![**Figure 9** Task
            Check](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001152137438.png)

        :::note
        You can proceed to the next step only when all check items are
        successful. If any alarms are generated, view and confirm the
        alarm details first before proceeding to the next step.
        :::

    7. On the displayed page, specify *Start Time* and confirm that
        the configured information is correct and click *Submit* to
        submit the task.

        ![**Figure 10** Task startup
        settings](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001199158158.png)

    8. After the task is submitted, go back to the *Online Migration
        Management* page to view the task status.

2. Manage the migration task.

    The migration task contains two phases: full migration and
    incremental migration. You can manage them in different phases.

    - Full migration
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
    - Incremental Migration Permission
        - Viewing the synchronization delay: After the full migration
            is complete, an incremental migration starts. On the
            *Online Migration Management* page, click the target
            migration task. On the displayed page, click *Migration
            Progress* to view the synchronization delay of the
            incremental migration. If the synchronization delay is 0s,
            the destination database is being synchronized with the
            source database in real time. You can also view the data
            consistency on the *Migration Comparison* tab.

            ![**Figure 11** Viewing the synchronization
            delay](/img/docs/best-practices/databases/document-database-service/en-us_image_0000001243756137.png)

        - Viewing the migration results: On the *Online Migration
            Management* page, click the target migration task. On the
            displayed page, click *Migration Comparison* and perform a
            migration comparison in accordance with the comparison
            process, which should help you determine an appropriate time
            for migration to minimize service downtime.

            ![**Figure 12** Database comparison
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

        ```bash
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
