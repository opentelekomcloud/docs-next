---
id: migrating-kafka-services
title: Migrating Kafka Services
tags: [kafka, mirror-maker, migration, dms]
---

# Migrating Kafka Services

You can migrate Kafka services to connect message producers and
consumers to a new Kafka instance and can even migrate persisted message
data to the new Kafka instance. Kafka services can be migrated in the
following two scenarios:

-   Migrating services to the cloud without downtime

    Services that have high requirements on continuity must be smoothly
    migrated to the cloud because they cannot afford a long downtime.

-   Re-deploying services in the cloud

    A Kafka instance deployed within an AZ is not capable of cross-AZ
    disaster recovery. For higher reliability, you can re-deploy
    services to an instance that is deployed across AZs.

## Prerequisites

1.  Configure the network environment.

    A Kafka instance can be accessed within a VPC or over a public
    network. For public network access, the producer and consumer must
    have public access permissions, and the following security group
    rules must be configured:

    - **Inbound**: `TCP/9094`, `0.0.0.0/0` -> Access Kafka through the public network (**without** SSL encryption)
    - **Inbound**: `TCP/9095`, `0.0.0.0/0` -> Access Kafka through the public network (**with** SSL encryption)

2.  Create a Kafka instance.

    The specifications of the new instance cannot be lower than the
    original specifications. For details, see [Creating an Instance](https://docs.otc.t-systems.com/distributed-message-service/umn/creating_an_instance.html).

3.  Create a topic.

    Create a topic with the same configurations as the original Kafka
    instance, including the topic name, number of replicas, number of
    partitions, message aging time, and whether to enable synchronous
    replication and flushing. For details, see [Creating a Topic](https://docs.otc.t-systems.com/cloud-eye/umn/using_the_alarm_function/creating_alarm_notification_topics/creating_a_topic.html).

## Migration Scheme 1: Migrating the Production First

Migrate the message production service to the new Kafka instance. After
migration, the original Kafka instance will no longer produce messages.
After all messages of the original Kafka instance are consumed, migrate
the message consumption service to the new Kafka instance to consume
messages of this instance.

1.  Change the Kafka connection address of the producer to that of the
    new Kafka instance.
2.  Restart the production service so that the producer can send new
    messages to the new Kafka instance.
3.  Check the consumption progress of each consumer group in the
    original Kafka instance until all data in the original Kafka
    instance is consumed.
4.  Change the Kafka connection addresses of the consumers to that of
    the new Kafka instance.
5.  Restart the consumption service so that consumers can consume
    messages from the new Kafka instance.
6.  Check whether consumers consume messages properly from the new Kafka
    instance.
7.  The migration is completed.

This is a common migration scheme. It is simple and easy to control on
the service side. During the migration, the message sequence is ensured,
so this scheme is **suitable for scenarios with strict requirements on
the message sequence**. However, latency may occur because there is a
period when you have to wait for all data to be consumed.

## Migration Scheme 2: Migrating the Production Later

Use multiple consumers for the consumption service. Some consume
messages from the original Kafka instance, and others consume messages
from the new Kafka instances. Then, migrate the production service to
the new Kafka instance so that all messages can be consumed in time.

1.  Start new consumer clients, set the Kafka connection addresses to
    that of the new Kafka instance, and consume data from the new Kafka
    instance.

    :::note
    Original consumer clients must continue running. Messages are
    consumed from both the original and new Kafka instances.
    :::

2.  Change the Kafka connection address of the producer to that of the
    new Kafka instance.

3.  Restart the producer client to migrate the production service to the
    new Kafka instance.

4.  After the production service is migrated, check whether the
    consumption service connected to the new Kafka instance is normal.

5.  After all data in the original Kafka is consumed, close the original
    consumption clients.

6.  The migration is completed.

In this scheme, the migration process is controlled by services. For a
certain period of time, the consumption service consumes messages from
both the original and new Kafka instances. Before the migration, message
consumption from the new Kafka instance has already started, so there is
no latency. However, early on in the migration, data is consumed from
both the original and new Kafka instances, so the messages may not be
consumed in the order that they are produced. This scheme is **suitable
for services that require low latency but do not require strict message
sequence**.

## How Do I Migrate Persisted Data Along with Services?

You can migrate consumed data from the original instance to a new
instance by using the open-source tool [MirrorMaker](https://github.com/miguecoll/kafka-mirror-maker). This
tool mirrors the original Kafka producer and consumer into new ones and
migrates data to the new Kafka instance. For details, see
[Using MirrorMaker to Synchronize Data Across Clusters](#using-mirrormaker-to-synchronize-data-across-clusters).

:::note
Each Open Telekom Cloud Kafka instance stores data in three
replicas. Therefore, the storage space of the new instance should be
three times that of the original single-replica message storage.
:::


## Using MirrorMaker to Synchronize Data Across Clusters

In the following scenarios, [MirrorMaker](https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=27846330) can be used to synchronize data
between different Kafka clusters to ensure the availability and
reliability of the clusters:

-   Backup and disaster recovery: An enterprise has multiple data
    centers. To prevent service unavailability caused by a fault in one
    data center, cluster data is synchronously backed up in multiple
    data centers.
-   Cluster migration: As enterprises migrate services to the cloud,
    data in on-premises clusters must be synchronized with that in cloud
    clusters to ensure service continuity.

### Solution Design

MirrorMaker can be used to mirror data from the source cluster to the
target cluster. As shown in figure below,
in essence, MirrorMaker first consumes data from the source cluster and
then produces the consumed data to the target cluster. For more
information about MirrorMaker, see [Mirroring data between
clusters](https://kafka.apache.org/documentation/?spm=a2c4g.11186623.0.0.c82870aav6G9no#basic_ops_mirror_maker).

![**Figure 1** How MirrorMakerworks](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001348167557.png)

:::warning Restrictions
-   The IP addresses and port numbers of the nodes in the source cluster
    cannot be the same as those of the nodes in the target cluster.
    Otherwise, data will be replicated infinitely in a topic.
-   Use MirrorMaker to synchronize data between at least two clusters.
    If there is only one cluster, data will be replicated infinitely in
    a topic.
:::

### Installing and Configuring MirrorMaker

1.  Create an ECS that can communicate with the source and target
    clusters. For details, see the [ECS
    documentation](https://docs.otc.t-systems.com/elastic-cloud-server/index.html).

2.  Log in to the ECS, install JDK, and add the following contents to
    **.bash\_profile** in the home directory to configure the
    environment variables `JAVA\_HOME` and `PATH`. In this command,
    **/opt/java/jdk1.8.0\_151** is the JDK installation path. Change it
    to the path where you install JDK.

    ```bash
    export JAVA_HOME=/opt/java/jdk1.8.0_151
    export PATH=$JAVA_HOME/bin:$PATH
    ```
    Run the `source .bash\_profile` command for the modification to
    take effect.

    :::note
    Use Oracle JDK instead of ECS's default JDK (for example, OpenJDK),
    because ECS's default JDK may not be suitable. Obtain Oracle JDK
    1.8.111 or later from [Oracle's official website](https://www.oracle.com/java/technologies/downloads/#java8).
    :::

3.  Download the binary software package of Kafka 3.3.1.

    ```bash    
    wget https://archive.apache.org/dist/kafka/3.3.1/kafka_2.12-3.3.1.tgz
    ```

4.  Decompress the binary software package.

    ```bash
    tar -zxvf kafka_2.12-3.3.1.tgz
    ```

5.  Go to the binary software package directory and specify the IP
    addresses and ports of the source and target clusters and other
    parameters in the **connect-mirror-maker.properties** configuration
    file in the **config** directory.

    ```bash title="connect-mirror-maker.properties"
    # Specify two clusters.
    clusters = A, B
    A.bootstrap.servers = A_host1:A_port, A_host2:A_port, A_host3:A_port
    B.bootstrap.servers = B_host1:B_port, B_host2:B_port, B_host3:B_port

    # Specify the data synchronization direction. The data can be synchronized unidirectionally or bidirectionally.
    A->B.enabled = true

    # Specify the topics to be synchronized. Regular expressions are supported. By default, all topics are replicated, for example, foo-.*.
    A->B.topics = .*

    # If the following two configurations are enabled, clusters A and B replicate data with each other.
    #B->A.enabled = true
    #B->A.topics = .*

    # Specify the number of replicas. If multiple topics need to be synchronized and their replica quantities are different, create topics with the same name and replica quantity before starting MirrorMaker.
    replication.factor=3

    # Specify the consumer offset synchronization direction (unidirectionally or bidirectionally).
    A->B.sync.group.offsets.enabled=true

    ############################# Internal Topic Settings  #############################
    # The replication factor for mm2 internal topics "heartbeats", "B.checkpoints.internal" and
    # "mm2-offset-syncs.B.internal"
    # In the test environment, the value can be 1. In the production environment, it is recommended that the value be greater than 1, for example, 3.
    checkpoints.topic.replication.factor=3
    heartbeats.topic.replication.factor=3
    offset-syncs.topic.replication.factor=3

    # The replication factor for connect internal topics "mm2-configs.B.internal", "mm2-offsets.B.internal" and
    # "mm2-status.B.internal"
    # In the test environment, the value can be 1. In the production environment, it is recommended that the value be greater than 1, for example, 3.
    offset.storage.replication.factor=3
    status.storage.replication.factor=3
    config.storage.replication.factor=3

    # customize as needed
    # replication.policy.separator = _
    # sync.topic.acls.enabled = false
    # emit.heartbeats.interval.seconds = 5
    ```

6.  In the binary software package directory, start MirrorMaker to
    synchronize data.

    ```bash
    ./bin/connect-mirror-maker.sh config/connect-mirror-maker.properties
    ```

7.  (Optional) If a topic is created in the source cluster after
    MirrorMaker has been started, and the topic data needs to be
    synchronized, restart MirrorMaker. 
    
    :::note
    To periodically synchronize new topics without restarting MirrorMaker.
    `refresh.topics.interval.seconds` is mandatory. Other parameters are optional.
    :::

    <!-- <table>
    <caption><strong>Table 1</strong> MirrorMaker configurations</caption>
    <colgroup>
    <col style="width: 20%" />
    <col style="width: 33%" />
    <col style="width: 46%" />
    </colgroup>
    <thead>
    <tr class="header">
    <th>Parameter</th>
    <th>Default Value</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr class="odd">
    <td>sync.topic.configs.enabled</td>
    <td>true</td>
    <td>Whether to monitor the source cluster for configuration
    changes.</td>
    </tr>
    <tr class="even">
    <td>sync.topic.acls.enabled</td>
    <td>true</td>
    <td>Whether to monitor the source cluster for ACL changes.</td>
    </tr>
    <tr class="odd">
    <td>emit.heartbeats.enabled</td>
    <td>true</td>
    <td>Whether to let the connector send heartbeats periodically.</td>
    </tr>
    <tr class="even">
    <td>emit.heartbeats.interval.seconds</td>
    <td>5 seconds</td>
    <td>Heartbeat frequency.</td>
    </tr>
    <tr class="odd">
    <td>emit.checkpoints.enabled</td>
    <td>true</td>
    <td>Whether to let the connector periodically send the consumer offset
    information.</td>
    </tr>
    <tr class="even">
    <td>emit.checkpoints.interval.seconds</td>
    <td>5 seconds</td>
    <td>Checkpoint frequency.</td>
    </tr>
    <tr class="odd">
    <td>refresh.topics.enabled</td>
    <td>true</td>
    <td>Whether to let the connector periodically check for new topics.</td>
    </tr>
    <tr class="even">
    <td>refresh.topics.interval.seconds</td>
    <td>5 seconds</td>
    <td>Frequency of checking for new topics in the source cluster.</td>
    </tr>
    <tr class="odd">
    <td>refresh.groups.enabled</td>
    <td>true</td>
    <td>Whether to let the connector periodically check for new consumer
    groups.</td>
    </tr>
    <tr class="even">
    <td>refresh.groups.interval.seconds</td>
    <td>5 seconds</td>
    <td>Frequency of checking for new consumer groups in the source
    cluster.</td>
    </tr>
    <tr class="odd">
    <td>replication.policy.class</td>
    <td>org.apache.kafka.connect.mirror.DefaultReplicationPolicy</td>
    <td>Use LegacyReplicationPolicy to imitate MirrorMaker of an earlier
    version.</td>
    </tr>
    <tr class="even">
    <td>heartbeats.topic.retention.ms</td>
    <td>One day</td>
    <td>Used when heartbeat topics are created for the first time.</td>
    </tr>
    <tr class="odd">
    <td>checkpoints.topic.retention.ms</td>
    <td>One day</td>
    <td>Used when checkpoint topics are created for the first time.</td>
    </tr>
    <tr class="even">
    <td>offset.syncs.topic.retention.ms</td>
    <td>max long</td>
    <td>Used when offset sync topics are created for the first time.</td>
    </tr>
    </tbody>
    </table>

    **Table 1** MirrorMaker configurations -->

### Verifying Data Synchronization

1.  View the topic list in the target cluster to check whether there are
    source topics.

    :::note
    Topic names in the target cluster have a prefix (for example,
    `A.`) added to the source topic name. This is a MirrorMaker 2
    configuration for preventing cyclic topic backup.
    :::

2.  Produce and consume messages in the source cluster, view the
    consumption progress in the target cluster, and check whether data
    has been synchronized from the source cluster to the target cluster.

    If the target cluster is a Open Telekom Cloud Kafka instance, view
    the consumption progress on the *Consumer Groups* page.