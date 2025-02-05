---
id: configuring-message-accumulation-monitoring
title: Configuring Message Accumulation Monitoring
tags: [kafka, dms, cloudeye, smn]
---

# Configuring Message Accumulation Monitoring

Unprocessed messages accumulate if the client's consumption is slower than the server's sending. When accumulated messages cannot be consumed in time, we can configure alarm rules so that you will be notified when the number of accumulated messages in a consumer group exceeds the threshold.

## Configuring Simple Message Notification

### Creating a Topic

- Log in to the *Open Telekom Cloud Console* -> *Simple Message Notification* -> *Topics* and click *Create Topic*.
- Give it a name, e.g. **test_topic** and click *OK*.

### Creating a Subscription

- Go to the *Open Telekom Cloud Console* -> *Simple Message Notification* -> *Subscriptions* and click *Add Subscription*.

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-24-03.png "Click to enlarge")
**Figure 1** Add a Subscription to the Topic  
</center>

- Click *Select Topic* and choose the topic we just created.
- Set **Protocol** to `Email`.
- Add an **Endpoint** (an email address you have direct access to) and click *OK*.

Back to the *Subscriptions* console click *Request Confirmation*:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-38-07.png "Click to enlarge")
**Figure 2** Request Subscription Confirmation  
</center>

and click *Confirm Subscription* in the "SMN-Confirming Your Subcription" email:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-41-04.png "Click to enlarge")
**Figure 3** Respond to the Subscription Confirmation Request Email
</center>

## Configuring Cloud Eye

- Log in to the *Open Telekom Cloud Console* -> *Cloud Eye* -> *Distributed Message Service* -> *Kafka Platinum*.
- Find your Kafka instance in the list  and click *Create Alarm Rule*.

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-20-50.png "Click to enlarge")
**Figure 4** Create a Cloud Eye Alarm Rule
</center>

### Creating an Alarm Rule

- Set **Template** to `DMS Kafka Instance Alarm Template`.
- Set **Notification Object** to the name of the SMN topic we created in the previous step (in this case **test_topic**) and click *Create*.

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-21-30.png "Click to enlarge")
**Figure 5** Configure the Cloud Eye Alarm Rule
</center>

## Run a simulation

We are going to rely in a small Golang package that creates a DMS Kafka topic, a message producer, a bunch of message consumers in order to simulate accumulated unprocessed messages in our Kafka instance.

:::info
You can find more information about the implementation details of this package in the Best Practice: [Optimizing Consumer Polling](optimizing-consumer-polling.md).
:::

### Cloning the repository

Clone the repo in your local development machine:

```shell
git clone https://github.com/opentelekomcloud-blueprints/kafka-optimizing-consumer-pulling.git
```

### Configuring the Parameters

For this lab, **we want to give a handicap to the consumers so we can simulate an accumulation of unprocessed messages**. For that matter, open **main.go** in the editor of your choice and make the following changes:

1. Set `messages` to `1000` -> Produces a significant amount of messages to facilitate our observation.

```go
var (
	consumers  = 5
	partitions = 3
	messages   = 1000
	logLevel   = slog.LevelInfo
	cleanExit  = true
)
```
2. Raise `MaxWaitTime` to `1000` milliseconds -> For more details how `MaxWaitTime` affects the consumers consult [Optimizing Consumer Polling-Use Long Polling](optimizing-consumer-polling.md#use-long-polling).

```go
func newConsumer(ctx context.Context, consumerId int, wg *sync.WaitGroup) {
	defer wg.Done()

	config := sarama.NewConfig()
	config.Consumer.Group.Rebalance.GroupStrategies = []sarama.BalanceStrategy{sarama.NewBalanceStrategyRoundRobin()}
	config.Consumer.Offsets.Initial = sarama.OffsetOldest
	config.Consumer.MaxWaitTime = 1000 * time.Millisecond
```

3. Start the simulation and go to *Open Telekom Cloud Console* -> *Distributed Message Service* -> *Monitoring* -> *Monitoring Details* 
    and you will notice that the consumers they start lagging behind and unprocessed messages begin to accumulate:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-27-43.png "Click to enlarge")
**Figure 6** Kafka Instance Monitoring Details
</center>

Soon enough, when the limit set in the alarm rule is met, you will receive an email from SMN that will inform you that a Major Alarm is triggered
by Cloud Eye concerning the Kafka instance:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-22-58.png "Click to enlarge")
**Figure 7** Major Alarm is triggered
</center>

4. Let the simulation continue, and as the time passes the consumers are starting catching up you will be informed by a second email, that Cloud    Eye delegated the situation and the Major Alarm is now been suppressed:

<center>
![](/img/docs/best-practices/application-services/distributed-message-service/Screenshot_from_2025-02-05_07-26-08.png "Click to enlarge")
**Figure 8** Major Alarm is over
</center>

:::important
You can create slarms for various other Kafka metrics besides Accumulated Messages, and you use as your target besides the Kafka instance, the broker, different topics or consumer groups.
:::
