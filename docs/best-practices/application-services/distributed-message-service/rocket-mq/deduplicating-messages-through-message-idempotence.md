---
id: deduplicating-messages-through-message-idempotence
title: Deduplicating Messages through Message Idempotence
tags: [rocket-mq, dms]
---

# Deduplicating Messages through Message Idempotence

In RocketMQ service processes, an idempotent message process refers to a situation where a message is re-sent and consumed for multiple times and each consumption result is the same, having no negative effects on services. Idempotent messages ensure consistency in the final processing results. Services are not affected no matter how many times a message is re-sent.

:::note
[Apache RocketMQ](https://github.com/apache/rocketmq) is an open-source distributed messaging and event-streaming platform designed for reliable communication between applications and services. It enables producers and consumers to exchange messages asynchronously, helping decouple application components and improve scalability and resilience. RocketMQ supports messaging patterns such as publish/subscribe, ordered messages, delayed messages, and transactional messages, making it suitable for event-driven architectures, microservices, data integration, and other workloads that require reliable message delivery.
:::

Take paying as an example. Assume that a user selects a product, makes payment, and receives multiple bills due to unstable Internet connection. The bills are all paid. However, the billing should take place only once and the merchant should generate only one order placement. In this case, idempotent messages can be used to avoid the repetition.

In actual applications, messages are re-sent because of intermittent network disconnections and client faults during message production or consumption. Message repetition can be classified into two scenarios.

* **A producer repeatedly sends a message**:
    If a producer successfully sends a message to the server but does not receive a successful response due to an intermittent network disconnection, the producer determines that the message failed to be sent and tries resending the message. In this case, the server receives two messages of the same content. Consumers consume two messages of the same content.

* **A consumer repeatedly consumes a message**:
    A message is successfully delivered to a consumer and processed. If the server does not receive a response from the consumer due to an intermittent network disconnection, the server determines that the message failed to be delivered. To ensure that the message is consumed at least once, the server retries delivering the message. As a result, the consumer consumes two messages of the same content.

## Implementation

Messages with different IDs may have the same content, so the ID cannot be used as the unique identifier. RocketMQ supports idempotent messages by using the message key (unique service identifier) to identify messages. The sample code for configuring a message key is as follows:

```java
Message message = new Message();
message.setKey("Order_id");    // Set the message key, which can be the unique service identifier such as the order placement ID.
SentResult sendResult = mqProducer.send(message);
```

When a producer sends a message, the message has a unique key. When consuming the message, a consumer reads the unique message identifier (such as the order placement ID) with `getKeys()`. The service logic can implement idempotence with the unique identifier.