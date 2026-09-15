---
id: improving-kafka-message-processing-efficiency
title: Improving Kafka Message Processing Efficiency
tags: [kafka, dms]
---

# Improving Kafka Message Processing Efficiency
During message sending and consumption, Distributed Message Service (DMS) for Kafka, producers, and consumers collaborate to ensure service reliability. In addition, efficiency and accuracy of message sending and consumption improves when developers make proper use of DMS for Kafka topics.

Best practices for message producers and consumers are as follows:

## Acknowledging Message Production and Consumption

### Message Production

The producer decides whether to re-send a message based on the DMS for Kafka response.

The producer waits for the sending result or asynchronous callback function to determine if the message is successfully sent. If an exception occurs when sending the message, the producer will not receive a success response and must decide whether to re-send the message. If a success response is received, it indicates that the message has been stored in DMS for Kafka.

### Message consumption

The consumer acknowledges successful message consumption.

The produced messages are sequentially stored in DMS for Kafka. During consumption, messages stored in DMS for Kafka are obtained in sequence. Consumers obtain messages, consume them, and record the status (successful or failed). The status is then submitted to DMS for Kafka.

During this process, the message consumption status may not be successfully submitted due to an exception. In this case, the corresponding messages will be re-obtained by the consumer in the next message consumption request.

## Idempotent Transferring of Message Production and Consumption

To guarantee lossless messaging, DMS for Kafka implements a series of reliability measures. For example, the message synchronization storage mechanism is used to prevent the system and server from being restarted or powered off. The ACK mechanism is used to deal with exceptions that occur during message transmission.

Considering extreme conditions such as network exceptions, you can use DMS for Kafka to design idempotent message transferring in addition to acknowledging message production and consumption.

* If message sending cannot be acknowledged, the producer needs to re-send the message.
* After obtaining a message that has been processed, the consumer needs to notify DMS for Kafka that consumption is successful and ensure that the message is not processed repeatedly.

## Producing and Consuming Messages in Batches

It is recommended that messages be sent and consumed in batches to improve efficiency.

**Figure 1** Messages being produced and consumed in batches  
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001691529441.png "Click to enlarge")

**Figure 2** Messages being produced and consumed one by one  
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001643370172.png "Click to enlarge")

When consuming messages in batches, consumers need to process and acknowledge messages in the sequence of receiving messages. Therefore, when a message in the batch fails to be consumed, the consumer does not need to consume the remaining messages, and can directly submit consumption acknowledgment of the successfully consumed messages.

## Using Consumer Groups to Facilitate O&M

You can use DMS for Kafka as a message management system. Reading message content from topics is helpful to fault locating and service debugging.

When problems occur during message production and consumption, you can create different consumer groups to locate and analyze problems or debug services for interconnecting with other services. To ensure that other services can continue to process messages in topics, you can create a new consumer group to consume and analyze the messages.
