---
id: handling-message-accumulation
title: Handling Message Accumulation
tags: [rocket-mq, dms]
---

# Handling Message Accumulation

Message accumulation is common in RocketMQ services. Unprocessed messages accumulate if the client's consumption is slower than the server's sending. Accumulated messages cannot be consumed in time. Service systems with high requirements on real-time consumption cannot afford even a short message delay caused by message accumulation. Message accumulation causes are as follows:

* Messages are not consumed in time because message production is faster than consumption. Messages accumulate and consumption cannot be restored automatically.
* The service system logic is time-consuming, causing low consumption efficiency.

## Message Consumption Process

The message consumption process consists of two phases:

* **Message pull**: Clients pull messages from servers in batches and store the messages to local cache queues. In this phase, no messages accumulate because throughput is high on the intranet.

* **Message consumption**: Clients submit the cached messages to consumption threads, wait for the service consumption logic to process the messages, and receive the processing result. The consumption capability in this phase depends on the consumption duration and concurrency. The overall message throughput is affected if the service logic is complicated and spends a long time on a single message. Low message throughput causes local cache queues on the client to reach the upper limit. Messages are no longer pulled from the server, resulting in accumulation.

    Therefore, whether messages accumulate depends on the consumption capability of the client, and the consumption capability depends on the consumption duration and concurrency. Consumption time is prior to its concurrency. Users should ensure timely consumption before considering its concurrency.

Figure 1 Message consumption process:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/en-us_image_0000001657330541.png)
</center>

## Consumption Duration

Consumption duration is mainly affected by the service code, specially, the internal CPU computational code and the external I/O operational code. If there is no complex recursion or loop code, internal CPU computing duration can be ignored. Instead, you should focus on external I/O operations.

External I/O operations are as follows:

* *ead/Write operations on external databases such as remote MySQL databases.
* Read/Write operations on external caches such as remote Redis.
* Invocations of downstream systems. For example, Dubbo invokes remote RPC and Spring Cloud invokes downstream HTTP APIs.

Learning about the downstream invoking logic helps you understand the duration of each invocation to determine whether the I/O operation duration in the service logic is proper. In general, faulty services or limited capacity in downstream systems causes longer consumption duration. Service faults can arise from network bandwidth issues as well as system errors.

## Consumption Concurrency

The consumption concurrency on the client depends on number of clients (or consumers in a consumer group) and number of threads per client. The consumption concurrency of normal, scheduled/delayed, transactional, and ordered messages is calculated as follows:

| Message Type      | Concurrency Formula                                                      |
| ----------------- | ------------------------------------------------------------------------ |
| Normal            | Number of threads per client × Number of clients                         |
| Scheduled/Delayed | Number of threads per client × Number of clients                         |
| Transactional     | Number of threads per client × Number of clients                         |
| Ordered           | Min (Number of threads per client × Number of clients, Number of queues) |

:::note
The number of threads per client should be adjusted carefully. A large number of threads increases thread switch overhead. An ideal calculation model for optimal number of threads per client: `C × (T1+T2)/T1`.

* `C` indicates the number of vCPUs per broker.
* `T1` indicates the internal CPU computation duration.
* `T2` indicates the external I/O operation duration.

Thread switch overhead is ignored. I/O operations consume no CPU resources. A thread should have sufficient messages and memory for processing. The model of calculating the maximum number of threads is only an ideal scenario. In actual scenarios, gradually increase threads based on the actual effect.
:::

## Implementation

To avoid unexpected message accumulation, the consumption duration should be accounted for and concurrency should be set properly in the design of service logic.

### Accounting for consumption duration

Perform pressure test to obtain the consumption duration. Analyze and optimize time-consuming service logic code. Pay attention to:

* Whether the computation of the consumption logic is too complex, and whether any complex recursions or loops exist in the code.
* Whether I/O operations are necessary in the consumption logic and whether local caches can be used instead.
* Whether the complicated, time-consuming operations in the consumption logic can be asynchronously processed.

### Setting consumption concurrency

Consumption concurrency calculation can be adjusted with the following methods:

* Obtain the ideal number of threads using a formula. Then, select a number smaller than the ideal number as the initial value. Increase threads per client gradually to find an optimal number of consumption threads and message throughput per client.
* Calculate the number of clients needed based on the upstream and downstream traffic peaks: Number of clients = Traffic peak/Message throughput per client.