---
id: classifying-messages-with-topic-and-tag
title: Classifying Messages with Topic and Tag
tags: [rocket-mq, dms]
---

# Classifying Messages with Topic and Tag

Topics are the basic logical unit of messages in message production and consumption. Each topic contains several messages and each message belongs to only one topic.

Tags are used to identify message of different types. Messages for different purposes in the same business unit can have different tags in the same topic. Tags ensure the clarity and coherency of code and facilitate query in RocketMQ. Consumers can implement different consumption logic for different topics based on tags to achieve better scalability.

Messages are first classified into topics and then with tags as shown in the following figure:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001606341458.png)
</center>

## Scenario

Use topics and tags properly to ensure clear and efficient service structure. You can decide how to use topics and tags based on your needs.

* **Message type**: RocketMQ messages include normal, ordered, scheduled/delayed, and transactional messages. Different types of messages should be classified with topics, not tags.
* **Message priority**: Messages of a high priority should be in topics different from those with a low priority.
* **Service relationship**: Messages from unrelated services should be classified in topics. Messages from closely related services should be sent to the same topic, and classified with tags based on subtypes or sequence.

## Implementation

Take logistics transportation as an example. Order messages of fresh goods and other goods are of different types, so they can be classified by two topics: `Topic_Common` and `Topic_Fresh`. For each message type, you can use different tags to identify order destination provinces.

* *Topic*: Topic_Common
  * *Tag* = Province_A
  * *Tag* = Province_B

* *Topic*: Topic_Fresh
  * *Tag* = Province_A
  * *Tag* = Province_B
  
The following is message production sample code for a common goods order sent to province A:

```java
Message msg = new Message("Topic_Common", "Province_A" /* Tag */, ("Order_id " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));
```

The following is subscription sample code for a fresh goods order sent to province A and province B:

```java
consumer.subscribe("Topic_Fresh", "Province_A || Province_B");
```

## Different Consumers Consume Different Tags

Different consumers may consume messages with different tags in the same topic. For different tags in the same topic, improper consumer group settings lead to chaotic consumption.

For example, there are Tags A and B in Topic A. Consumer A subscribes to Tag A. Consumer B subscribes to Tag B.

If Consumers A and B are in the same consumer group, messages with Tag A are evenly sent to Consumers A and B. Consumer B did not subscribe to Tag A, so it filters out messages with Tag A. As a result, some Tag A messages are not consumed.

Figure 1 Incorrect consumer group settings:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001655279585.png)
</center>

To solve this problem, configure Consumers A and B with different consumer groups.

Figure 2 Correct consumer group settings:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001606240912.png)
</center>