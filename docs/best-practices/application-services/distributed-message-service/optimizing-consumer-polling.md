---
id: optimizing-consumer-polling
title: Optimizing Consumer Polling
tags: [kafka, dms, golang]
---

# Optimizing Consumer Polling

While consuming messages from DMS, consumers can customize the duration for pulling messages. To pull messages for a long time, consumers only need to set the parameter of the poll(long) method to a proper value. However, such persistent connections may cause pressure on the client and the server, especially when the number of partitions is large and multiple threads are enabled for each consumer.

As shown in [Figure 1](#kafka-bp-190605001__fig6820724153018), the topic contains multiple partitions, and multiple consumers in the consumer group consume the resources at the same time. Each thread is in a persistent connection. When there are few or no messages in the topic, the connection persists, and all consumers pull messages continuously, which causes a waste of resources.

<center>
**Figure 1** Multi-thread consumption of Kafka consumers  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-kafka/en-us_image_0000001643241046.png "Click to enlarge")
</center>

## Solution

When multiple threads are enabled for concurrent access, if there is no message in the topic, only one thread is required to poll for messages in each partition. When a message is found by the polling thread, other threads can be woken up to consume the message for quick responses, as shown in [Figure 2](#kafka-bp-190605001__fig2089525512304).

This solution is applicable to scenarios with low requirements on real-time message consumption. If quasi-real-time message consumption is required, it is recommended that all consumers be in the active state.

<center>
**Figure 2** Optimized multi-thread consumption solution  
![](https://support.huaweicloud.com/intl/en-us/bestpractice-kafka/en-us_image_0000001691560433.png "Click to enlarge")
</center>

:::note
The number of consumers and the number of partitions are not necessarily the same. The poll (long) method of Kafka helps implement the functions such as message acquisition, partition balancing, and heartbeat detection between consumers and Kafka brokers.

Therefore, in scenarios where the requirements on real-time message consumption are low and there is a small number of messages, some consumers can be in the wait state.
:::

## Sample Code

The following sections describe the major components of a Golang-based implementation. You can find the whole project in
[https://github.com/opentelekomcloud-blueprints/kafka-optimizing-consumer-pulling](https://github.com/opentelekomcloud-blueprints/kafka-optimizing-consumer-pulling).

### Main

```go
func main() {
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		sigChan := make(chan os.Signal, 1)
		signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

		<-sigChan

		logger.Info("termination signal received, waiting for consumers...")
		cancel()
	}()

	newTopic(partitions)
	go newProducer(ctx)

	wg := sync.WaitGroup{}
	for i := 0; i < consumers; i++ {
		wg.Add(1)
		go func(consumerID int) {
			newConsumer(ctx, consumerID, &wg)
		}(i)
	}

	<-ctx.Done()
	wg.Wait()

	if cleanExit {
		deleteTopic()
	}

	logger.Debug("all consumers stopped, exiting...")
}}
```

This `main()` function is the entry point of this Kafka consumer-producer lab. It sets up graceful shutdown handling, starts a producer, initializes multiple consumers, and ensures a clean exit. More analytically:

#### Context and Signal Handling

```go
ctx, cancel := context.WithCancel(context.Background())

go func() {
    sigChan := make(chan os.Signal, 1)
    signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

    <-sigChan

    logger.Info("termination signal received, waiting for consumers...")
    cancel()
}()
```

- Creates a `context` (`ctx`) that allows cancellation.
- Starts a goroutine that listens for OS termination signals (`SIGINT`, `SIGTERM`).
- When a termination signal is received, it logs the event and cancels the `context` (`ctx`), notifying all running goroutines to gracefully shut down.

#### Topic Creation and Producer Initialization

```go
newTopic(partitions)
go newProducer(ctx)
```

- Creates a Kafka topic with the given number of partitions, with the function [newTopic(partitions)](#topic).
- Starts a producer as a goroutine with `newProducer(ctx)`, which will publish messages asynchronously.

#### Consumer(s) Initialization & Waiting for Termination

```go
wg := sync.WaitGroup{}
for i := 0; i < consumers; i++ {
    wg.Add(1)
    go func(consumerID int) {
        newConsumer(ctx, consumerID, &wg)
    }(i)
}

<-ctx.Done()
wg.Wait()
```

- Initializes a `sync.WaitGroup` (`wg`) to track active consumers.
- Starts multiple consumers, [newConsumer(ctx, consumerID, &wg)](#consumers).
- Each consumer runs in its own goroutine and is passed a unique ID (`consumerID`).
- Waits for the `context` (`ctx.Done()`) to signal shutdown.
- Ensures all consumers finish by waiting for `wg.Wait()`, after shutdown is signalled but the `context`.

### Topic

The function `newTopic(partitions int)` ensures that a Kafka topic is created properly before producers and consumers start working.

```go
func newTopic(partitions int) {
	config := sarama.NewConfig()
	config.Version = sarama.V2_7_0_0

	logger.Debug("creating cluster admin...")
	admin, err := sarama.NewClusterAdmin([]string{brokerAddress}, config)
	if err != nil {
		logger.Error(fmt.Sprintf("creating a cluster admin failed: %v", err))
	}
	defer func(admin sarama.ClusterAdmin) {
		logger.Debug("closing cluster admin...")
		err := admin.Close()
		if err != nil {
			logger.Error(fmt.Sprintf("closing the cluster admin failed: %v", err))
		}

	}(admin)

	logger.Debug("creating a topic...")
	err = admin.CreateTopic(topic, &sarama.TopicDetail{NumPartitions: int32(partitions), ReplicationFactor: 1}, false)
	if err != nil {
		logger.Error(fmt.Sprintf("creating a topic failed: %v", err))
		if !errors.Is(err, sarama.ErrTopicAlreadyExists) {
			os.Exit(-1)
		}
	}
}
```

### Producer

The `newProducer(ctx context.Context)` function is responsible for producing messages to the Kafka topic using the Sarama Kafka client:

```go
ffunc newProducer(ctx context.Context) {
	config := sarama.NewConfig()
	config.Producer.RequiredAcks = sarama.WaitForAll
	config.Producer.Retry.Max = 5
	config.Producer.Return.Successes = true
	config.Producer.Idempotent = true
	config.Version = sarama.V2_7_0_0
	config.Net.MaxOpenRequests = 1

	logger.Info("creating a producer...")
	producer, err := sarama.NewSyncProducer([]string{brokerAddress}, config)
	if err != nil {
		logger.Error(fmt.Sprintf("creating a producer failed: %v", err))
	}
	defer func(producer sarama.SyncProducer) {
		logger.Info("closing the producer...")
		err := producer.Close()
		if err != nil {
			logger.Error(fmt.Sprintf("closing the producer failed: %v", err))
		}

	}(producer)

	for i := 0; i < messages; i++ {
		select {
		case <-ctx.Done():
			return
		default:
		}

		message := fmt.Sprintf("message %d", i)
		msg := &sarama.ProducerMessage{
			Topic: topic,
			Value: sarama.StringEncoder(message),
		}

		partition, offset, err := producer.SendMessage(msg)
		if err != nil {
			logger.Error(fmt.Sprintf("sending message failed: %v", err))

			time.Sleep(1 * time.Second)
			continue
		}

		logger.Info(fmt.Sprintf("producer sent message: %s", message), "partition", partition, "offset", offset)
		time.Sleep(200 * time.Millisecond)
	}
}
```

:::note Configuration

- `RequiredAcks = sarama.WaitForAll` → Waits for all replicas to acknowledge the message.
- `Retry.Max = 5` → Retries sending the message up to 5 times if it fails.
- `Return.Successes = true` → Enables success message tracking.
- `Idempotent = true` → Enables exactly-once semantics to prevent duplicate messages.
- `Net.MaxOpenRequests = 1` → Ensures message ordering by allowing only one in-flight request at a time.
- `Version = sarama.V2_7_0_0` → Sets the Kafka version to 2.7.0.
:::

### Consumer(s)

:::warning
Packing the producer and the consumer(s) in the same binary is **only** for the purposes of this lab. In production code you:
- would/should need to move the producer to dedicated independent binary,
- would/could/should host a single customer per binary, so you allow them to scale independently (e.g. if they are deployed as Kubernetes Pods), unless your requirements dictate otherwise and you are OK with spawing multiple consumers using goroutines as described in this lab.
:::

The `newConsumer(ctx context.Context, consumerId int, wg *sync.WaitGroup)` function is responsible for consuming messages from the Kafka topic using the Sarama Kafka client. Outlining its functionality:

- Creates a Kafka Consumer and consumes messages from Kafka partitions.
- Handles consumer session context by ensures graceful shutdown when the session ends and prevents `ErrRebalanceInProgress` errors during rebalancing.
- Consumes messages from Kafka (`claim.Messages()`):
- If the channel is closed, it gracefully closes the Consumer.
- Acknowledges and marks the messages as processed.

```go
func newConsumer(ctx context.Context, consumerId int, wg *sync.WaitGroup) {
	defer wg.Done()

	config := sarama.NewConfig()
	config.Consumer.Group.Rebalance.GroupStrategies = []sarama.BalanceStrategy{sarama.NewBalanceStrategyRoundRobin()}
	config.Consumer.Offsets.Initial = sarama.OffsetOldest
	config.Consumer.MaxWaitTime = 500 * time.Millisecond

	logger.Info("creating a consumer group...", "consumer-group", groupID, "consumer-id", consumerId)
	consumerGroup, err := sarama.NewConsumerGroup([]string{brokerAddress}, groupID, config)
	if err != nil {
		logger.Error(fmt.Sprintf("creating a consumer group failed: %v", err), "consumer-group", groupID, "consumer-id", consumerId)
	}
	defer func(consumerGroup sarama.ConsumerGroup, consumerId int) {
		logger.Info("closing the consumer group...", "consumer-group", groupID, "consumer-id", consumerId)
		err := consumerGroup.Close()
		if err != nil {
			logger.Error(fmt.Sprintf("closing the consumer group failed: %v", err), "consumer-group", groupID, "consumer-id", consumerId)
		}
	}(consumerGroup, consumerId)

	handler := &ConsumerGroupHandler{
		consumerId:      consumerId,
		consumerGroupID: groupID,
	}

	for {
		select {
		case <-ctx.Done():
			logger.Debug("context cancellation received, closing the consumer...", "consumer-group", groupID, "consumer-id", consumerId)
			return
		default:
			err := consumerGroup.Consume(ctx, []string{topic}, handler)
			if err != nil {
				if errors.Is(err, sarama.ErrClosedConsumerGroup) {
					logger.Error(err.Error(), "consumer-group", groupID, "consumer-id", consumerId)
					return
				}
				logger.Info(fmt.Sprintf("consumer failed: %v", err), "consumer-group", groupID, "consumer-id", consumerId)
			}
		}
	}
}

type ConsumerGroupHandler struct {
	consumerId      int
	consumerGroupID string
}

func (c *ConsumerGroupHandler) Setup(session sarama.ConsumerGroupSession) error {
	logger.Debug("consumer joined the group (setup)", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)
	return nil
}

func (c *ConsumerGroupHandler) Cleanup(session sarama.ConsumerGroupSession) error {
	logger.Debug("consumer left the group (cleanup)", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)
	return nil
}

func (c *ConsumerGroupHandler) ConsumeClaim(session sarama.ConsumerGroupSession, claim sarama.ConsumerGroupClaim) error {
	for {
		select {
		// Should return when `session.Context()` is done.
		// If not, will raise `ErrRebalanceInProgress` or `read tcp <ip>:<port>: i/o timeout` when kafka will attempt to rebalance. see:
		// https://github.com/IBM/sarama/issues/1192
		case <-session.Context().Done():
			logger.Debug("consumer session context cancelled...", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)
			return nil
		case msg, ok := <-claim.Messages():
			if !ok {
				logger.Error("consuming message failed: message channel was closed...", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)
				return nil
			}
			session.MarkMessage(msg, "")
			logger.Info(fmt.Sprintf("consumer claimed message: %s", string(msg.Value)),
				"partition", msg.Partition, "offset", msg.Offset, "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)
		}
	}
}
```

#### Configuration

##### Partition Rebalancing Strategy

```go
config.Consumer.Group.Rebalance.GroupStrategies = []sarama.BalanceStrategy{sarama.NewBalanceStrategyRoundRobin()}
```

When multiple consumers join a Kafka consumer group, Kafka must decide which consumer gets which partitions.
The Round-Robin strategy assigns partitions in a circular order without considering data locality.

:::note Example
If 3 partitions (P0, P1, P2) exist and 2 consumers (C1, C2) join:

- C1 -> P0, P2
- C2 -> P1

If a new consumer (C3) joins, Kafka rebalances and may assign:

- C1 -> P0
- C2 -> P1
- C3 -> P2
  
If a consumer disconnects, Kafka reassigns its partitions to remaining consumers

✅ Round-Robin is good when partitions should be evenly distributed and can move frequently. <br/>
❌ Not ideal if consumers need specific partitions for caching or stateful processing.
:::

##### Offset Initialization Strategy

```go
config.Consumer.Offsets.Initial = sarama.OffsetOldest
```

When a consumer group joins and no previous offsets exist:

- If `sarama.OffsetOldest`, it processes all past messages.
- If `sarama.OffsetNewest`, it only processes new messages arriving after the consumer starts.

:::note
✅ `sarama.OffsetOldest` is useful for processing historical data or replaying events.<br/>
❌ Not ideal for real-time consumers that only need fresh data.
:::

#### Handling Messages

`sarama.ConsumerGroupHandler` is an interface in the Sarama Kafka client that defines how a consumer handles messages in a Kafka consumer group.

When using Kafka consumer groups, as in this example, Sarama requires you to implement this interface to define:

```go
type ConsumerGroupHandler interface {
    Setup(sarama.ConsumerGroupSession) error
    Cleanup(sarama.ConsumerGroupSession) error
    ConsumeClaim(sarama.ConsumerGroupSession, sarama.ConsumerGroupClaim) error
}
```

- What happens when a consumer joins the group (`Setup(sarama.ConsumerGroupSession) error`).
  - Called when a consumer joins the group.
  - Can be used to initialize resources (e.g., logging, setting up metrics).
  - Runs once per consumer group rebalance.
  - Returns an error if setup fails.
- How messages are consumed (`ConsumeClaim(sarama.ConsumerGroupSession, sarama.ConsumerGroupClaim) error`).
  - Called when a consumer leaves the group.
  - Can be used to close connections or clean up state.
  - Runs once per consumer group rebalance.
  - Returns an error if cleanup fails.
- What happens when a consumer leaves the group (`Cleanup(sarama.ConsumerGroupSession) error`).
  - Runs in a loop for each partition assigned to the consumer.
  - Reads messages from the partition and processes them.
  - Should return when `session.Context().Done()` is triggered, ensuring graceful shutdown.

#### Use Long Polling

```go
config.Consumer.MaxWaitTime = 500 * time.Millisecond
```

When a Kafka consumer calls `ConsumeClaim`, it continuously fetches messages from Kafka. The consumer does two things:

- Collects messages until the batch size limit (`config.Consumer.Fetch.Default`) is reached.
- If the batch size isn't reached, it waits for `MaxWaitTime` before returning messages.

This helps balance:

- **Low latency** (shorter wait time → messages return faster).
- **Efficiency** (longer wait time → more messages per batch, reducing overhead).

`MaxWaitTime` sets the maximum amount of time that the Kafka consumer will wait before returning a batch of messages from a partition.
If fewer messages are available, the consumer may return a smaller batch before this timeout expires.

:::note Scenarios
- **High Traffic** (Many Messages Available)
  - Messages arrive quickly, so the consumer fills its batch fast.
  - The consumer does not wait the full `MaxWaitTime`.
  - Messages are returned as soon as the batch is full.
- **Low Traffic** (Few Messages Available)
  - The consumer waits up to `MaxWaitTime` to gather more messages.
  - If not enough messages arrive, it returns a partial batch after `MaxWaitTime`.
:::

:::tip Why to use `MaxWaitTime`?
✅ **Reduces latency**: Ensures messages are consumed within a reasonable time. <br/>
✅ **Improves throughput**: Allows batching instead of returning very small sets of messages. <br/>
✅ **Optimizes network calls**: Reduces frequent fetch requests when messages are sparse. <br/>
:::

:::tip How to tune `MaxWaitTime`?

- **Lower value** (e.g., `100ms`): Faster message processing but might increase network overhead.
- **Higher value** (e.g., `1000ms`): Reduces network calls but may increase latency.
  
**Best Practice**: <br/>
✅ Set `500ms` (default) as a balance between latency and efficiency. <br/>
✅ Tune based on message traffic patterns.
:::
