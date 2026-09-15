---
id: ensuring-subscription-consistency
title: Ensuring Subscription Consistency
tags: [rocket-mq, dms]
---

# Ensuring Subscription Consistency

A consistent subscription indicates that all topics and tags subscribed by all consumers in the same consumer group are the same. An inconsistent subscription causes disordered consumption logic and even message losses.

## Principle

RocketMQ assigns message queues for each topic. The more queues, the higher the consumption concurrency. In distributed application scenarios, multiple consumers in the same consumer group jointly consume messages from all queues in a topic. Queues are assigned by consumer group and evenly assigned to the consumers in a consumer group, regardless of whether a consumer has subscribed to the topic. Each consumer is assigned some queues of a topic. Each queue is assigned to only one consumer.

### Correct Subscription

In distributed application scenarios, all the consumers in a consumer group have the same consumer group ID. They must subscribe to the same topic and tag (consistent subscription) to ensure correct consumption logic and no message losses.

* *Consumers in the same consumer group must subscribe to the same topic*. For example, assume that Consumers A and B are in Consumer Group 1 and Consumer A subscribes to Topics A and B. Then, Consumer B must also subscribe to both Topics A and B, and cannot subscribe to only Topic A or B or even Topic C.
* *The tags in the topic subscribed by consumers in the same consumer group must be the same*, including the tag quantity and sequence. For example, assume that Consumers A and B are in Consumer Group 2. Consumer A subscribes to Tag A||Tag B in Topic A. Then, when subscribing to Topic A, Consumer B must also subscribe to Tag A||Tag B, and cannot subscribe only to Tag A or B or Tag B||Tag A.

Figure 1 Correct subscription consistency setting:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001658265353.png)
</center>

A consistent subscription ensures message consumption in the same consumer group work properly, avoiding disordered message logic or message losses. Producers should classify messages properly for consumers to correct subscription to tags. Consumers should ensure consistent subscriptions.

### Incorrect Subscription

* *Consumers in the same consumer group subscribe to different topics*. For example, assume that Consumers A and B are in Consumer Group 1. Consumer A subscribes to Topic A but Consumer B subscribes to Topic B. When producers send messages to Topic A, the messages are evenly sent to Consumers A and B by queue. Consumer B has not subscribed to Topic A, so it filters out messages from Topic A (Queue 2 in Topic A in Figure 2), leaving them unconsumed.

Figure 2 Incorrect topic subscriptions:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001608867628.png)
</center>

* *Consumers in the same consumer group subscribe to different tags of the same topic*. For example, assume that Consumers A and B are in Consumer Group 1. Consumer A subscribes to Tag A and Topic A. Consumer B subscribes to Tag B and Topic A. When producer A sends messages to Tag A in Topic A, messages with Tag A are evenly sent to Consumers A and B by queue. Consumer B has not subscribed to Tag A, so it filters out messages with Tag A (Tag A in Queue 2 in Figure 3), leaving them unconsumed.

Figure 3 Incorrect tag subscriptions:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000002008601125.png)
</center>

## Implementation

### Subscriptions to One Tag of One Topic

Consumers 1, 2, and 3 in Consumer Group 1 all subscribe to Tag_A and Topic_A. They have consistent subscriptions, meaning that their subscription code is the same. The sample code is as follows:

```java
DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("Group1");
consumer.subscribe("Topic_A", "Tag_A");
```

### Subscriptions to Multiple Tags of One Topic

Consumers 1, 2, and 3 in Consumer Group 1 all subscribe to Tag_A and Tag_B of Topic_A. The sequence is Tag_A||Tag_B. The consumers have consistent subscriptions, meaning that their subscription code is the same. The sample code is as follows:

```java
DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("Group1");
consumer.subscribe("Topic_A", "Tag_A||Tag_B");
```

### Subscriptions to Multiple Tags of Multiple Topics

Consumers 1, 2, and 3 in Consumer Group 1 all subscribe to Topic_A (no specified tag) and Topic_B (Tag_A and Tag_B). The sequence is Tag_A||Tag_B. The consumers have consistent subscriptions, meaning that their subscription code is the same. The sample code is as follows:

```java
DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("Group1");
consumer.subscribe("Topic_A", "*");
consumer.subscribe("Topic_B", "Tag_A||Tag_B");
```
