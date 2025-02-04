"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[90930],{81843:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"best-practices/application-services/distributed-message-service/optimizing-consumer-polling","title":"Optimizing Consumer Polling","description":"While consuming messages from DMS, consumers can customize the duration for pulling messages. To pull messages for a long time, consumers only need to set the parameter of the poll(long) method to a proper value. However, such persistent connections may cause pressure on the client and the server, especially when the number of partitions is large and multiple threads are enabled for each consumer.","source":"@site/docs/best-practices/application-services/distributed-message-service/optimizing-consumer-polling.md","sourceDirName":"best-practices/application-services/distributed-message-service","slug":"/best-practices/application-services/distributed-message-service/optimizing-consumer-polling","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/application-services/distributed-message-service/optimizing-consumer-polling","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/application-services/distributed-message-service/optimizing-consumer-polling.md","tags":[{"inline":true,"label":"kafka","permalink":"/docs-next/pr-preview/pr-203/docs/tags/kafka"},{"inline":true,"label":"dms","permalink":"/docs-next/pr-preview/pr-203/docs/tags/dms"},{"inline":true,"label":"golang","permalink":"/docs-next/pr-preview/pr-203/docs/tags/golang"}],"version":"current","frontMatter":{"id":"optimizing-consumer-polling","title":"Optimizing Consumer Polling","tags":["kafka","dms","golang"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Improving Kafka Message Processing Efficiency","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/application-services/distributed-message-service/improving-kafka-message-processing-efficiency"},"next":{"title":"Building Highly Available Web Server Clusters with Keepalived","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/computing/elastic-cloud-server/building-highly-available-web-server-clusters-with-keepalived"}}');var i=s(74848),t=s(28453);const o={id:"optimizing-consumer-polling",title:"Optimizing Consumer Polling",tags:["kafka","dms","golang"]},a="Optimizing Consumer Polling",c={},l=[{value:"Solution",id:"solution",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"Main",id:"main",level:3},{value:"Context and Signal Handling",id:"context-and-signal-handling",level:4},{value:"Topic Creation and Producer Initialization",id:"topic-creation-and-producer-initialization",level:4},{value:"Consumer(s) Initialization &amp; Waiting for Termination",id:"consumers-initialization--waiting-for-termination",level:4},{value:"Topic",id:"topic",level:3},{value:"Producer",id:"producer",level:3},{value:"Consumer(s)",id:"consumers",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Partition Rebalancing Strategy",id:"partition-rebalancing-strategy",level:5},{value:"Offset Initialization Strategy",id:"offset-initialization-strategy",level:5},{value:"Handling Messages",id:"handling-messages",level:4},{value:"Use Long Polling",id:"use-long-polling",level:4}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"optimizing-consumer-polling",children:"Optimizing Consumer Polling"})}),"\n",(0,i.jsx)(n.p,{children:"While consuming messages from DMS, consumers can customize the duration for pulling messages. To pull messages for a long time, consumers only need to set the parameter of the poll(long) method to a proper value. However, such persistent connections may cause pressure on the client and the server, especially when the number of partitions is large and multiple threads are enabled for each consumer."}),"\n",(0,i.jsxs)(n.p,{children:["As shown in ",(0,i.jsx)(n.a,{href:"#kafka-bp-190605001__fig6820724153018",children:"Figure 1"}),", the topic contains multiple partitions, and multiple consumers in the consumer group consume the resources at the same time. Each thread is in a persistent connection. When there are few or no messages in the topic, the connection persists, and all consumers pull messages continuously, which causes a waste of resources."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Figure 1"})," Multi-thread consumption of Kafka consumers",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://support.huaweicloud.com/intl/en-us/bestpractice-kafka/en-us_image_0000001643241046.png",alt:"",title:"Click to enlarge"})]})}),"\n",(0,i.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsxs)(n.p,{children:["When multiple threads are enabled for concurrent access, if there is no message in the topic, only one thread is required to poll for messages in each partition. When a message is found by the polling thread, other threads can be woken up to consume the message for quick responses, as shown in ",(0,i.jsx)(n.a,{href:"#kafka-bp-190605001__fig2089525512304",children:"Figure 2"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This solution is applicable to scenarios with low requirements on real-time message consumption. If quasi-real-time message consumption is required, it is recommended that all consumers be in the active state."}),"\n",(0,i.jsx)("center",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Figure 2"})," Optimized multi-thread consumption solution",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://support.huaweicloud.com/intl/en-us/bestpractice-kafka/en-us_image_0000001691560433.png",alt:"",title:"Click to enlarge"})]})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"The number of consumers and the number of partitions are not necessarily the same. The poll (long) method of Kafka helps implement the functions such as message acquisition, partition balancing, and heartbeat detection between consumers and Kafka brokers."}),(0,i.jsx)(n.p,{children:"Therefore, in scenarios where the requirements on real-time message consumption are low and there is a small number of messages, some consumers can be in the wait state."})]}),"\n",(0,i.jsx)(n.h2,{id:"sample-code",children:"Sample Code"}),"\n",(0,i.jsxs)(n.p,{children:["The following sections describe the major components of a Golang-based implementation. You can find the whole project in\n",(0,i.jsx)(n.a,{href:"https://github.com/opentelekomcloud-blueprints/kafka-optimizing-consumer-pulling",children:"https://github.com/opentelekomcloud-blueprints/kafka-optimizing-consumer-pulling"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"main",children:"Main"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n\tctx, cancel := context.WithCancel(context.Background())\n\n\tgo func() {\n\t\tsigChan := make(chan os.Signal, 1)\n\t\tsignal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)\n\n\t\t<-sigChan\n\n\t\tlogger.Info("termination signal received, waiting for consumers...")\n\t\tcancel()\n\t}()\n\n\tnewTopic(partitions)\n\tgo newProducer(ctx)\n\n\twg := sync.WaitGroup{}\n\tfor i := 0; i < consumers; i++ {\n\t\twg.Add(1)\n\t\tgo func(consumerID int) {\n\t\t\tnewConsumer(ctx, consumerID, &wg)\n\t\t}(i)\n\t}\n\n\t<-ctx.Done()\n\twg.Wait()\n\n\tif cleanExit {\n\t\tdeleteTopic()\n\t}\n\n\tlogger.Debug("all consumers stopped, exiting...")\n}}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"main()"})," function is the entry point of this Kafka consumer-producer lab. It sets up graceful shutdown handling, starts a producer, initializes multiple consumers, and ensures a clean exit. More analytically:"]}),"\n",(0,i.jsx)(n.h4,{id:"context-and-signal-handling",children:"Context and Signal Handling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'ctx, cancel := context.WithCancel(context.Background())\n\ngo func() {\n    sigChan := make(chan os.Signal, 1)\n    signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)\n\n    <-sigChan\n\n    logger.Info("termination signal received, waiting for consumers...")\n    cancel()\n}()\n\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Creates a ",(0,i.jsx)(n.code,{children:"context"})," (",(0,i.jsx)(n.code,{children:"ctx"}),") that allows cancellation."]}),"\n",(0,i.jsxs)(n.li,{children:["Starts a goroutine that listens for OS termination signals (",(0,i.jsx)(n.code,{children:"SIGINT"}),", ",(0,i.jsx)(n.code,{children:"SIGTERM"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["When a termination signal is received, it logs the event and cancels the ",(0,i.jsx)(n.code,{children:"context"})," (",(0,i.jsx)(n.code,{children:"ctx"}),"), notifying all running goroutines to gracefully shut down."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"topic-creation-and-producer-initialization",children:"Topic Creation and Producer Initialization"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"newTopic(partitions)\ngo newProducer(ctx)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Creates a Kafka topic with the given number of partitions, with the function ",(0,i.jsx)(n.a,{href:"#topic",children:"newTopic(partitions)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Starts a producer as a goroutine with ",(0,i.jsx)(n.code,{children:"newProducer(ctx)"}),", which will publish messages asynchronously."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"consumers-initialization--waiting-for-termination",children:"Consumer(s) Initialization & Waiting for Termination"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"wg := sync.WaitGroup{}\nfor i := 0; i < consumers; i++ {\n    wg.Add(1)\n    go func(consumerID int) {\n        newConsumer(ctx, consumerID, &wg)\n    }(i)\n}\n\n<-ctx.Done()\nwg.Wait()\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Initializes a ",(0,i.jsx)(n.code,{children:"sync.WaitGroup"})," (",(0,i.jsx)(n.code,{children:"wg"}),") to track active consumers."]}),"\n",(0,i.jsxs)(n.li,{children:["Starts multiple consumers, ",(0,i.jsx)(n.a,{href:"#consumers",children:"newConsumer(ctx, consumerID, &wg)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Each consumer runs in its own goroutine and is passed a unique ID (",(0,i.jsx)(n.code,{children:"consumerID"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Waits for the ",(0,i.jsx)(n.code,{children:"context"})," (",(0,i.jsx)(n.code,{children:"ctx.Done()"}),") to signal shutdown."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensures all consumers finish by waiting for ",(0,i.jsx)(n.code,{children:"wg.Wait()"}),", after shutdown is signalled but the ",(0,i.jsx)(n.code,{children:"context"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"topic",children:"Topic"}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"newTopic(partitions int)"})," ensures that a Kafka topic is created properly before producers and consumers start working."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func newTopic(partitions int) {\n\tconfig := sarama.NewConfig()\n\tconfig.Version = sarama.V2_7_0_0\n\n\tlogger.Debug("creating cluster admin...")\n\tadmin, err := sarama.NewClusterAdmin([]string{brokerAddress}, config)\n\tif err != nil {\n\t\tlogger.Error(fmt.Sprintf("creating a cluster admin failed: %v", err))\n\t}\n\tdefer func(admin sarama.ClusterAdmin) {\n\t\tlogger.Debug("closing cluster admin...")\n\t\terr := admin.Close()\n\t\tif err != nil {\n\t\t\tlogger.Error(fmt.Sprintf("closing the cluster admin failed: %v", err))\n\t\t}\n\n\t}(admin)\n\n\tlogger.Debug("creating a topic...")\n\terr = admin.CreateTopic(topic, &sarama.TopicDetail{NumPartitions: int32(partitions), ReplicationFactor: 1}, false)\n\tif err != nil {\n\t\tlogger.Error(fmt.Sprintf("creating a topic failed: %v", err))\n\t\tif !errors.Is(err, sarama.ErrTopicAlreadyExists) {\n\t\t\tos.Exit(-1)\n\t\t}\n\t}\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"producer",children:"Producer"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"newProducer(ctx context.Context)"})," function is responsible for producing messages to the Kafka topic using the Sarama Kafka client:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'ffunc newProducer(ctx context.Context) {\n\tconfig := sarama.NewConfig()\n\tconfig.Producer.RequiredAcks = sarama.WaitForAll\n\tconfig.Producer.Retry.Max = 5\n\tconfig.Producer.Return.Successes = true\n\tconfig.Producer.Idempotent = true\n\tconfig.Version = sarama.V2_7_0_0\n\tconfig.Net.MaxOpenRequests = 1\n\n\tlogger.Info("creating a producer...")\n\tproducer, err := sarama.NewSyncProducer([]string{brokerAddress}, config)\n\tif err != nil {\n\t\tlogger.Error(fmt.Sprintf("creating a producer failed: %v", err))\n\t}\n\tdefer func(producer sarama.SyncProducer) {\n\t\tlogger.Info("closing the producer...")\n\t\terr := producer.Close()\n\t\tif err != nil {\n\t\t\tlogger.Error(fmt.Sprintf("closing the producer failed: %v", err))\n\t\t}\n\n\t}(producer)\n\n\tfor i := 0; i < messages; i++ {\n\t\tselect {\n\t\tcase <-ctx.Done():\n\t\t\treturn\n\t\tdefault:\n\t\t}\n\n\t\tmessage := fmt.Sprintf("message %d", i)\n\t\tmsg := &sarama.ProducerMessage{\n\t\t\tTopic: topic,\n\t\t\tValue: sarama.StringEncoder(message),\n\t\t}\n\n\t\tpartition, offset, err := producer.SendMessage(msg)\n\t\tif err != nil {\n\t\t\tlogger.Error(fmt.Sprintf("sending message failed: %v", err))\n\n\t\t\ttime.Sleep(1 * time.Second)\n\t\t\tcontinue\n\t\t}\n\n\t\tlogger.Info(fmt.Sprintf("producer sent message: %s", message), "partition", partition, "offset", offset)\n\t\ttime.Sleep(200 * time.Millisecond)\n\t}\n}\n\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Configuration",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RequiredAcks = sarama.WaitForAll"})," \u2192 Waits for all replicas to acknowledge the message."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Retry.Max = 5"})," \u2192 Retries sending the message up to 5 times if it fails."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Return.Successes = true"})," \u2192 Enables success message tracking."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Idempotent = true"})," \u2192 Enables exactly-once semantics to prevent duplicate messages."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Net.MaxOpenRequests = 1"})," \u2192 Ensures message ordering by allowing only one in-flight request at a time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Version = sarama.V2_7_0_0"})," \u2192 Sets the Kafka version to 2.7.0."]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"consumers",children:"Consumer(s)"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Packing the producer and the consumer(s) in the same binary is ",(0,i.jsx)(n.strong,{children:"only"})," for the purposes of this lab. In production code you:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"would/should need to move the producer to dedicated independent binary,"}),"\n",(0,i.jsx)(n.li,{children:"would/could/should host a single customer per binary, so you allow them to scale independently (e.g. if they are deployed as Kubernetes Pods), unless your requirements dictate otherwise and you are OK with spawing multiple consumers using goroutines as described in this lab."}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"newConsumer(ctx context.Context, consumerId int, wg *sync.WaitGroup)"})," function is responsible for consuming messages from the Kafka topic using the Sarama Kafka client. Outlining its functionality:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creates a Kafka Consumer and consumes messages from Kafka partitions."}),"\n",(0,i.jsxs)(n.li,{children:["Handles consumer session context by ensures graceful shutdown when the session ends and prevents ",(0,i.jsx)(n.code,{children:"ErrRebalanceInProgress"})," errors during rebalancing."]}),"\n",(0,i.jsxs)(n.li,{children:["Consumes messages from Kafka (",(0,i.jsx)(n.code,{children:"claim.Messages()"}),"):"]}),"\n",(0,i.jsx)(n.li,{children:"If the channel is closed, it gracefully closes the Consumer."}),"\n",(0,i.jsx)(n.li,{children:"Acknowledges and marks the messages as processed."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func newConsumer(ctx context.Context, consumerId int, wg *sync.WaitGroup) {\n\tdefer wg.Done()\n\n\tconfig := sarama.NewConfig()\n\tconfig.Consumer.Group.Rebalance.GroupStrategies = []sarama.BalanceStrategy{sarama.NewBalanceStrategyRoundRobin()}\n\tconfig.Consumer.Offsets.Initial = sarama.OffsetOldest\n\tconfig.Consumer.MaxWaitTime = 500 * time.Millisecond\n\n\tlogger.Info("creating a consumer group...", "consumer-group", groupID, "consumer-id", consumerId)\n\tconsumerGroup, err := sarama.NewConsumerGroup([]string{brokerAddress}, groupID, config)\n\tif err != nil {\n\t\tlogger.Error(fmt.Sprintf("creating a consumer group failed: %v", err), "consumer-group", groupID, "consumer-id", consumerId)\n\t}\n\tdefer func(consumerGroup sarama.ConsumerGroup, consumerId int) {\n\t\tlogger.Info("closing the consumer group...", "consumer-group", groupID, "consumer-id", consumerId)\n\t\terr := consumerGroup.Close()\n\t\tif err != nil {\n\t\t\tlogger.Error(fmt.Sprintf("closing the consumer group failed: %v", err), "consumer-group", groupID, "consumer-id", consumerId)\n\t\t}\n\t}(consumerGroup, consumerId)\n\n\thandler := &ConsumerGroupHandler{\n\t\tconsumerId:      consumerId,\n\t\tconsumerGroupID: groupID,\n\t}\n\n\tfor {\n\t\tselect {\n\t\tcase <-ctx.Done():\n\t\t\tlogger.Debug("context cancellation received, closing the consumer...", "consumer-group", groupID, "consumer-id", consumerId)\n\t\t\treturn\n\t\tdefault:\n\t\t\terr := consumerGroup.Consume(ctx, []string{topic}, handler)\n\t\t\tif err != nil {\n\t\t\t\tif errors.Is(err, sarama.ErrClosedConsumerGroup) {\n\t\t\t\t\tlogger.Error(err.Error(), "consumer-group", groupID, "consumer-id", consumerId)\n\t\t\t\t\treturn\n\t\t\t\t}\n\t\t\t\tlogger.Info(fmt.Sprintf("consumer failed: %v", err), "consumer-group", groupID, "consumer-id", consumerId)\n\t\t\t}\n\t\t}\n\t}\n}\n\ntype ConsumerGroupHandler struct {\n\tconsumerId      int\n\tconsumerGroupID string\n}\n\nfunc (c *ConsumerGroupHandler) Setup(session sarama.ConsumerGroupSession) error {\n\tlogger.Debug("consumer joined the group (setup)", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)\n\treturn nil\n}\n\nfunc (c *ConsumerGroupHandler) Cleanup(session sarama.ConsumerGroupSession) error {\n\tlogger.Debug("consumer left the group (cleanup)", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)\n\treturn nil\n}\n\nfunc (c *ConsumerGroupHandler) ConsumeClaim(session sarama.ConsumerGroupSession, claim sarama.ConsumerGroupClaim) error {\n\tfor {\n\t\tselect {\n\t\t// Should return when `session.Context()` is done.\n\t\t// If not, will raise `ErrRebalanceInProgress` or `read tcp <ip>:<port>: i/o timeout` when kafka will attempt to rebalance. see:\n\t\t// https://github.com/IBM/sarama/issues/1192\n\t\tcase <-session.Context().Done():\n\t\t\tlogger.Debug("consumer session context cancelled...", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)\n\t\t\treturn nil\n\t\tcase msg, ok := <-claim.Messages():\n\t\t\tif !ok {\n\t\t\t\tlogger.Error("consuming message failed: message channel was closed...", "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)\n\t\t\t\treturn nil\n\t\t\t}\n\t\t\tsession.MarkMessage(msg, "")\n\t\t\tlogger.Info(fmt.Sprintf("consumer claimed message: %s", string(msg.Value)),\n\t\t\t\t"partition", msg.Partition, "offset", msg.Offset, "consumer-group", c.consumerGroupID, "consumer-id", c.consumerId)\n\t\t}\n\t}\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h5,{id:"partition-rebalancing-strategy",children:"Partition Rebalancing Strategy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"config.Consumer.Group.Rebalance.GroupStrategies = []sarama.BalanceStrategy{sarama.NewBalanceStrategyRoundRobin()}\n"})}),"\n",(0,i.jsx)(n.p,{children:"When multiple consumers join a Kafka consumer group, Kafka must decide which consumer gets which partitions.\nThe Round-Robin strategy assigns partitions in a circular order without considering data locality."}),"\n",(0,i.jsxs)(n.admonition,{title:"Example",type:"note",children:[(0,i.jsx)(n.p,{children:"If 3 partitions (P0, P1, P2) exist and 2 consumers (C1, C2) join:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"C1 -> P0, P2"}),"\n",(0,i.jsx)(n.li,{children:"C2 -> P1"}),"\n"]}),(0,i.jsx)(n.p,{children:"If a new consumer (C3) joins, Kafka rebalances and may assign:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"C1 -> P0"}),"\n",(0,i.jsx)(n.li,{children:"C2 -> P1"}),"\n",(0,i.jsx)(n.li,{children:"C3 -> P2"}),"\n"]}),(0,i.jsx)(n.p,{children:"If a consumer disconnects, Kafka reassigns its partitions to remaining consumers"}),(0,i.jsxs)(n.p,{children:["\u2705 Round-Robin is good when partitions should be evenly distributed and can move frequently. ",(0,i.jsx)("br",{}),"\n\u274c Not ideal if consumers need specific partitions for caching or stateful processing."]})]}),"\n",(0,i.jsx)(n.h5,{id:"offset-initialization-strategy",children:"Offset Initialization Strategy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"config.Consumer.Offsets.Initial = sarama.OffsetOldest\n"})}),"\n",(0,i.jsx)(n.p,{children:"When a consumer group joins and no previous offsets exist:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"sarama.OffsetOldest"}),", it processes all past messages."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"sarama.OffsetNewest"}),", it only processes new messages arriving after the consumer starts."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u2705 ",(0,i.jsx)(n.code,{children:"sarama.OffsetOldest"})," is useful for processing historical data or replaying events.",(0,i.jsx)("br",{}),"\n\u274c Not ideal for real-time consumers that only need fresh data."]})}),"\n",(0,i.jsx)(n.h4,{id:"handling-messages",children:"Handling Messages"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sarama.ConsumerGroupHandler"})," is an interface in the Sarama Kafka client that defines how a consumer handles messages in a Kafka consumer group."]}),"\n",(0,i.jsx)(n.p,{children:"When using Kafka consumer groups, as in this example, Sarama requires you to implement this interface to define:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"type ConsumerGroupHandler interface {\n    Setup(sarama.ConsumerGroupSession) error\n    Cleanup(sarama.ConsumerGroupSession) error\n    ConsumeClaim(sarama.ConsumerGroupSession, sarama.ConsumerGroupClaim) error\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["What happens when a consumer joins the group (",(0,i.jsx)(n.code,{children:"Setup(sarama.ConsumerGroupSession) error"}),").","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Called when a consumer joins the group."}),"\n",(0,i.jsx)(n.li,{children:"Can be used to initialize resources (e.g., logging, setting up metrics)."}),"\n",(0,i.jsx)(n.li,{children:"Runs once per consumer group rebalance."}),"\n",(0,i.jsx)(n.li,{children:"Returns an error if setup fails."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["How messages are consumed (",(0,i.jsx)(n.code,{children:"ConsumeClaim(sarama.ConsumerGroupSession, sarama.ConsumerGroupClaim) error"}),").","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Called when a consumer leaves the group."}),"\n",(0,i.jsx)(n.li,{children:"Can be used to close connections or clean up state."}),"\n",(0,i.jsx)(n.li,{children:"Runs once per consumer group rebalance."}),"\n",(0,i.jsx)(n.li,{children:"Returns an error if cleanup fails."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["What happens when a consumer leaves the group (",(0,i.jsx)(n.code,{children:"Cleanup(sarama.ConsumerGroupSession) error"}),").","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Runs in a loop for each partition assigned to the consumer."}),"\n",(0,i.jsx)(n.li,{children:"Reads messages from the partition and processes them."}),"\n",(0,i.jsxs)(n.li,{children:["Should return when ",(0,i.jsx)(n.code,{children:"session.Context().Done()"})," is triggered, ensuring graceful shutdown."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"use-long-polling",children:"Use Long Polling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"config.Consumer.MaxWaitTime = 500 * time.Millisecond\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When a Kafka consumer calls ",(0,i.jsx)(n.code,{children:"ConsumeClaim"}),", it continuously fetches messages from Kafka. The consumer does two things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Collects messages until the batch size limit (",(0,i.jsx)(n.code,{children:"config.Consumer.Fetch.Default"}),") is reached."]}),"\n",(0,i.jsxs)(n.li,{children:["If the batch size isn't reached, it waits for ",(0,i.jsx)(n.code,{children:"MaxWaitTime"})," before returning messages."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This helps balance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Low latency"})," (shorter wait time \u2192 messages return faster)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Efficiency"})," (longer wait time \u2192 more messages per batch, reducing overhead)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MaxWaitTime"})," sets the maximum amount of time that the Kafka consumer will wait before returning a batch of messages from a partition.\nIf fewer messages are available, the consumer may return a smaller batch before this timeout expires."]}),"\n",(0,i.jsx)(n.admonition,{title:"Scenarios",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"High Traffic"})," (Many Messages Available)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Messages arrive quickly, so the consumer fills its batch fast."}),"\n",(0,i.jsxs)(n.li,{children:["The consumer does not wait the full ",(0,i.jsx)(n.code,{children:"MaxWaitTime"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Messages are returned as soon as the batch is full."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Low Traffic"})," (Few Messages Available)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The consumer waits up to ",(0,i.jsx)(n.code,{children:"MaxWaitTime"})," to gather more messages."]}),"\n",(0,i.jsxs)(n.li,{children:["If not enough messages arrive, it returns a partial batch after ",(0,i.jsx)(n.code,{children:"MaxWaitTime"}),"."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Why to use ",(0,i.jsx)(n.code,{children:"MaxWaitTime"}),"?"]}),(0,i.jsxs)(n.p,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Reduces latency"}),": Ensures messages are consumed within a reasonable time. ",(0,i.jsx)("br",{}),"\n\u2705 ",(0,i.jsx)(n.strong,{children:"Improves throughput"}),": Allows batching instead of returning very small sets of messages. ",(0,i.jsx)("br",{}),"\n\u2705 ",(0,i.jsx)(n.strong,{children:"Optimizes network calls"}),": Reduces frequent fetch requests when messages are sparse. ",(0,i.jsx)("br",{})]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["How to tune ",(0,i.jsx)(n.code,{children:"MaxWaitTime"}),"?"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lower value"})," (e.g., ",(0,i.jsx)(n.code,{children:"100ms"}),"): Faster message processing but might increase network overhead."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Higher value"})," (e.g., ",(0,i.jsx)(n.code,{children:"1000ms"}),"): Reduces network calls but may increase latency."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Best Practice"}),": ",(0,i.jsx)("br",{}),"\n\u2705 Set ",(0,i.jsx)(n.code,{children:"500ms"})," (default) as a balance between latency and efficiency. ",(0,i.jsx)("br",{}),"\n\u2705 Tune based on message traffic patterns."]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);