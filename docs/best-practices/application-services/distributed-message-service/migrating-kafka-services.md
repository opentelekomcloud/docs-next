---
id: migrating-kafka-services
title: Migrating Kafka Services
tags: [cce, elb, hpa, prometheus, prometheus-exporter, prometheus-adapter, metrics, cloudeye, swr]
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
`Using MirrorMaker to Synchronize Data Across Clusters <kafka-bp-0002>`.

:::note
Each Open Telekom Cloud Kafka instance stores data in three
replicas. Therefore, the storage space of the new instance should be
three times that of the original single-replica message storage.
:::