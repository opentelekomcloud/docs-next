"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[44736],{12777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"best-practices/application-services/distributed-message-service/migrating-kafka-services","title":"Migrating Kafka Services","description":"This solution will demonstrate how you can migrate Kafka services to connect message producers and consumers to a new Kafka instance and can even migrate persisted message data to a new Kafka instance.","source":"@site/docs/best-practices/application-services/distributed-message-service/migrating-kafka-services.md","sourceDirName":"best-practices/application-services/distributed-message-service","slug":"/best-practices/application-services/distributed-message-service/migrating-kafka-services","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/application-services/distributed-message-service/migrating-kafka-services","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/application-services/distributed-message-service/migrating-kafka-services.md","tags":[{"inline":true,"label":"kafka","permalink":"/docs-next/pr-preview/pr-206/docs/tags/kafka"},{"inline":true,"label":"mirror-maker","permalink":"/docs-next/pr-preview/pr-206/docs/tags/mirror-maker"},{"inline":true,"label":"migration","permalink":"/docs-next/pr-preview/pr-206/docs/tags/migration"},{"inline":true,"label":"dms","permalink":"/docs-next/pr-preview/pr-206/docs/tags/dms"}],"version":"current","frontMatter":{"id":"migrating-kafka-services","title":"Migrating Kafka Services","tags":["kafka","mirror-maker","migration","dms"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Selectively Exposing CCE Workloads with a Dedicated Gateway","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/application-services/api-gateway/selectively-exposing-cce-workloads-with-a-dedicated-gateway"},"next":{"title":"Building Highly Available Web Server Clusters with Keepalived","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/computing/elastic-cloud-server/building-highly-available-web-server-clusters-with-keepalived"}}');var r=t(74848),s=t(28453);const a={id:"migrating-kafka-services",title:"Migrating Kafka Services",tags:["kafka","mirror-maker","migration","dms"]},o="Migrating Kafka Services",c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Migration Scheme 1: Migrating the Production First",id:"migration-scheme-1-migrating-the-production-first",level:2},{value:"Migration Scheme 2: Migrating the Production Later",id:"migration-scheme-2-migrating-the-production-later",level:2},{value:"How Do I Migrate Persisted Data Along with Services?",id:"how-do-i-migrate-persisted-data-along-with-services",level:2},{value:"Using MirrorMaker to Synchronize Data Across Clusters",id:"using-mirrormaker-to-synchronize-data-across-clusters",level:2},{value:"Solution Design",id:"solution-design",level:3},{value:"Installing and Configuring MirrorMaker",id:"installing-and-configuring-mirrormaker",level:3},{value:"MirrorMaker Configuration Properties",id:"mirrormaker-configuration-properties",level:3},{value:"Verifying Data Synchronization",id:"verifying-data-synchronization",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"migrating-kafka-services",children:"Migrating Kafka Services"})}),"\n",(0,r.jsx)(n.p,{children:"This solution will demonstrate how you can migrate Kafka services to connect message producers and consumers to a new Kafka instance and can even migrate persisted message data to a new Kafka instance."}),"\n",(0,r.jsx)(n.p,{children:"Kafka services can be migrated in the following two scenarios:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Migrating services to the cloud without downtime"}),"\n",(0,r.jsx)(n.p,{children:"Services that have high requirements on continuity must be smoothly\nmigrated to the cloud because they cannot afford a long downtime."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Re-deploying services in the cloud"}),"\n",(0,r.jsx)(n.p,{children:"A Kafka instance deployed within an AZ is not capable of cross-AZ\ndisaster recovery. For higher reliability, you can re-deploy\nservices to an instance that is deployed across AZs."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure the network environment."}),"\n",(0,r.jsx)(n.p,{children:"A Kafka instance can be accessed within a VPC or over a public\nnetwork. For public network access, the producer and consumer must\nhave public access permissions, and the following security group\nrules must be configured:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inbound"}),": ",(0,r.jsx)(n.code,{children:"TCP/9094"}),", ",(0,r.jsx)(n.code,{children:"0.0.0.0/0"})," -> Access Kafka through the public network (",(0,r.jsx)(n.strong,{children:"without"})," SSL encryption)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inbound"}),": ",(0,r.jsx)(n.code,{children:"TCP/9095"}),", ",(0,r.jsx)(n.code,{children:"0.0.0.0/0"})," -> Access Kafka through the public network (",(0,r.jsx)(n.strong,{children:"with"})," SSL encryption)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a Kafka instance."}),"\n",(0,r.jsxs)(n.p,{children:["The specifications of the new instance cannot be lower than the\noriginal specifications. For details, see ",(0,r.jsx)(n.a,{href:"https://docs.otc.t-systems.com/distributed-message-service/umn/creating_an_instance.html",children:"Creating an Instance"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a topic."}),"\n",(0,r.jsxs)(n.p,{children:["Create a topic with the same configurations as the original Kafka\ninstance, including the topic name, number of replicas, number of\npartitions, message aging time, and whether to enable synchronous\nreplication and flushing. For details, see ",(0,r.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-eye/umn/using_the_alarm_function/creating_alarm_notification_topics/creating_a_topic.html",children:"Creating a Topic"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"migration-scheme-1-migrating-the-production-first",children:"Migration Scheme 1: Migrating the Production First"}),"\n",(0,r.jsx)(n.p,{children:"Migrate the message production service to the new Kafka instance. After\nmigration, the original Kafka instance will no longer produce messages.\nAfter all messages of the original Kafka instance are consumed, migrate\nthe message consumption service to the new Kafka instance to consume\nmessages of this instance."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Change the Kafka connection address of the producer to that of the\nnew Kafka instance."}),"\n",(0,r.jsx)(n.li,{children:"Restart the production service so that the producer can send new\nmessages to the new Kafka instance."}),"\n",(0,r.jsx)(n.li,{children:"Check the consumption progress of each consumer group in the\noriginal Kafka instance until all data in the original Kafka\ninstance is consumed."}),"\n",(0,r.jsx)(n.li,{children:"Change the Kafka connection addresses of the consumers to that of\nthe new Kafka instance."}),"\n",(0,r.jsx)(n.li,{children:"Restart the consumption service so that consumers can consume\nmessages from the new Kafka instance."}),"\n",(0,r.jsx)(n.li,{children:"Check whether consumers consume messages properly from the new Kafka\ninstance."}),"\n",(0,r.jsx)(n.li,{children:"The migration is completed."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This is a common migration scheme. It is simple and easy to control on\nthe service side. During the migration, the message sequence is ensured,\nso this scheme is ",(0,r.jsx)(n.strong,{children:"suitable for scenarios with strict requirements on\nthe message sequence"}),". However, latency may occur because there is a\nperiod when you have to wait for all data to be consumed."]}),"\n",(0,r.jsx)(n.h2,{id:"migration-scheme-2-migrating-the-production-later",children:"Migration Scheme 2: Migrating the Production Later"}),"\n",(0,r.jsx)(n.p,{children:"Use multiple consumers for the consumption service. Some consume\nmessages from the original Kafka instance, and others consume messages\nfrom the new Kafka instances. Then, migrate the production service to\nthe new Kafka instance so that all messages can be consumed in time."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start new consumer clients, set the Kafka connection addresses to\nthat of the new Kafka instance, and consume data from the new Kafka\ninstance."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Original consumer clients must continue running. Messages are\nconsumed from both the original and new Kafka instances."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Change the Kafka connection address of the producer to that of the\nnew Kafka instance."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restart the producer client to migrate the production service to the\nnew Kafka instance."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"After the production service is migrated, check whether the\nconsumption service connected to the new Kafka instance is normal."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"After all data in the original Kafka is consumed, close the original\nconsumption clients."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The migration is completed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In this scheme, the migration process is controlled by services. For a\ncertain period of time, the consumption service consumes messages from\nboth the original and new Kafka instances. Before the migration, message\nconsumption from the new Kafka instance has already started, so there is\nno latency. However, early on in the migration, data is consumed from\nboth the original and new Kafka instances, so the messages may not be\nconsumed in the order that they are produced. This scheme is ",(0,r.jsx)(n.strong,{children:"suitable\nfor services that require low latency but do not require strict message\nsequence"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-do-i-migrate-persisted-data-along-with-services",children:"How Do I Migrate Persisted Data Along with Services?"}),"\n",(0,r.jsxs)(n.p,{children:["You can migrate consumed data from the original instance to a new\ninstance by using the open-source tool ",(0,r.jsx)(n.a,{href:"https://github.com/miguecoll/kafka-mirror-maker",children:"MirrorMaker"}),". This\ntool mirrors the original Kafka producer and consumer into new ones and\nmigrates data to the new Kafka instance. For details, see\n",(0,r.jsx)(n.a,{href:"#using-mirrormaker-to-synchronize-data-across-clusters",children:"Using MirrorMaker to Synchronize Data Across Clusters"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Each Open Telekom Cloud Kafka instance stores data in three\nreplicas. Therefore, the storage space of the new instance should be\nthree times that of the original single-replica message storage."})}),"\n",(0,r.jsx)(n.h2,{id:"using-mirrormaker-to-synchronize-data-across-clusters",children:"Using MirrorMaker to Synchronize Data Across Clusters"}),"\n",(0,r.jsxs)(n.p,{children:["In the following scenarios, ",(0,r.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=27846330",children:"MirrorMaker"})," can be used to synchronize data\nbetween different Kafka clusters to ensure the availability and\nreliability of the clusters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Backup and disaster recovery: An enterprise has multiple data\ncenters. To prevent service unavailability caused by a fault in one\ndata center, cluster data is synchronously backed up in multiple\ndata centers."}),"\n",(0,r.jsx)(n.li,{children:"Cluster migration: As enterprises migrate services to the cloud,\ndata in on-premises clusters must be synchronized with that in cloud\nclusters to ensure service continuity."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"solution-design",children:"Solution Design"}),"\n",(0,r.jsxs)(n.p,{children:["MirrorMaker can be used to mirror data from the source cluster to the\ntarget cluster. As shown in figure below,\nin essence, MirrorMaker first consumes data from the source cluster and\nthen produces the consumed data to the target cluster. For more\ninformation about MirrorMaker, see ",(0,r.jsx)(n.a,{href:"https://kafka.apache.org/documentation/?spm=a2c4g.11186623.0.0.c82870aav6G9no#basic_ops_mirror_maker",children:"Mirroring data between\nclusters"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 1 How MirrorMakerworks",src:t(54777).A+"",width:"639",height:"97"})}),"\n",(0,r.jsx)(n.admonition,{title:"Restrictions",type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The IP addresses and port numbers of the nodes in the source cluster\ncannot be the same as those of the nodes in the target cluster.\nOtherwise, data will be replicated infinitely in a topic."}),"\n",(0,r.jsx)(n.li,{children:"Use MirrorMaker to synchronize data between at least two clusters.\nIf there is only one cluster, data will be replicated infinitely in\na topic."}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"installing-and-configuring-mirrormaker",children:"Installing and Configuring MirrorMaker"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an ECS that can communicate with the source and target\nclusters. For details, see the ",(0,r.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-cloud-server/index.html",children:"ECS\ndocumentation"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log in to the ECS, install JDK, and add the following contents to\n",(0,r.jsx)(n.strong,{children:".bash_profile"})," in the home directory to configure the\nenvironment variables ",(0,r.jsx)(n.code,{children:"JAVA\\_HOME"})," and ",(0,r.jsx)(n.code,{children:"PATH"}),". In this command,\n",(0,r.jsx)(n.strong,{children:"/opt/java/jdk1.8.0_151"})," is the JDK installation path. Change it\nto the path where you install JDK."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export JAVA_HOME=/opt/java/jdk1.8.0_151\nexport PATH=$JAVA_HOME/bin:$PATH\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Run the ",(0,r.jsx)(n.code,{children:"source .bash\\_profile"})," command for the modification to\ntake effect."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Use Oracle JDK instead of ECS's default JDK (for example, OpenJDK),\nbecause ECS's default JDK may not be suitable. Obtain Oracle JDK\n1.8.111 or later from ",(0,r.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/downloads/#java8",children:"Oracle's official website"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download the binary software package of Kafka 3.3.1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/kafka/3.3.1/kafka_2.12-3.3.1.tgz\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Decompress the binary software package."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -zxvf kafka_2.12-3.3.1.tgz\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the binary software package directory and specify the IP\naddresses and ports of the source and target clusters and other\nparameters in the ",(0,r.jsx)(n.strong,{children:"connect-mirror-maker.properties"})," configuration\nfile in the ",(0,r.jsx)(n.strong,{children:"config"})," directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="connect-mirror-maker.properties"',children:'# Specify two clusters.\nclusters = A, B\nA.bootstrap.servers = A_host1:A_port, A_host2:A_port, A_host3:A_port\nB.bootstrap.servers = B_host1:B_port, B_host2:B_port, B_host3:B_port\n\n# Specify the data synchronization direction. The data can be synchronized unidirectionally or bidirectionally.\nA->B.enabled = true\n\n# Specify the topics to be synchronized. Regular expressions are supported. By default, all topics are replicated, for example, foo-.*.\nA->B.topics = .*\n\n# If the following two configurations are enabled, clusters A and B replicate data with each other.\n#B->A.enabled = true\n#B->A.topics = .*\n\n# Specify the number of replicas. If multiple topics need to be synchronized and their replica quantities are different, create topics with the same name and replica quantity before starting MirrorMaker.\nreplication.factor=3\n\n# Specify the consumer offset synchronization direction (unidirectionally or bidirectionally).\nA->B.sync.group.offsets.enabled=true\n\n############################# Internal Topic Settings  #############################\n# The replication factor for mm2 internal topics "heartbeats", "B.checkpoints.internal" and\n# "mm2-offset-syncs.B.internal"\n# In the test environment, the value can be 1. In the production environment, it is recommended that the value be greater than 1, for example, 3.\ncheckpoints.topic.replication.factor=3\nheartbeats.topic.replication.factor=3\noffset-syncs.topic.replication.factor=3\n\n# The replication factor for connect internal topics "mm2-configs.B.internal", "mm2-offsets.B.internal" and\n# "mm2-status.B.internal"\n# In the test environment, the value can be 1. In the production environment, it is recommended that the value be greater than 1, for example, 3.\noffset.storage.replication.factor=3\nstatus.storage.replication.factor=3\nconfig.storage.replication.factor=3\n\n# customize as needed\n# replication.policy.separator = _\n# sync.topic.acls.enabled = false\n# emit.heartbeats.interval.seconds = 5\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the binary software package directory, start MirrorMaker to\nsynchronize data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./bin/connect-mirror-maker.sh config/connect-mirror-maker.properties\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(Optional) If a topic is created in the source cluster after\nMirrorMaker has been started, and the topic data needs to be\nsynchronized, restart MirrorMaker."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["To periodically synchronize new topics without restarting MirrorMaker.\n",(0,r.jsx)(n.code,{children:"refresh.topics.interval.seconds"})," is mandatory. Other parameters are optional."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mirrormaker-configuration-properties",children:"MirrorMaker Configuration Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sync.topic.configs.enabled"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether to monitor the source cluster for configuration changes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sync.topic.acls.enabled"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether to monitor the source cluster for ACL changes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"emit.heartbeats.enabled"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether to let the connector send heartbeats periodically."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"emit.heartbeats.interval.seconds"}),(0,r.jsx)(n.td,{children:"5 seconds"}),(0,r.jsx)(n.td,{children:"Heartbeat frequency."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"emit.checkpoints.enabled"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether to let the connector periodically send the consumer offset information."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"emit.checkpoints.interval.seconds"}),(0,r.jsx)(n.td,{children:"5 seconds"}),(0,r.jsx)(n.td,{children:"Checkpoint frequency."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refresh.topics.enabled"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether to let the connector periodically check for new topics."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refresh.topics.interval.seconds"}),(0,r.jsx)(n.td,{children:"5 seconds"}),(0,r.jsx)(n.td,{children:"Frequency of checking for new topics in the source cluster."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refresh.groups.enabled"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether to let the connector periodically check for new consumer groups."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refresh.groups.interval.seconds"}),(0,r.jsx)(n.td,{children:"5 seconds"}),(0,r.jsx)(n.td,{children:"Frequency of checking for new consumer groups in the source cluster."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"replication.policy.class"}),(0,r.jsx)(n.td,{children:"org.apache.kafka.connect.mirror.DefaultReplicationPolicy"}),(0,r.jsx)(n.td,{children:"Use LegacyReplicationPolicy to imitate MirrorMaker of an earlier version."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"heartbeats.topic.retention.ms"}),(0,r.jsx)(n.td,{children:"One day"}),(0,r.jsx)(n.td,{children:"Used when heartbeat topics are created for the first time."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"checkpoints.topic.retention.ms"}),(0,r.jsx)(n.td,{children:"One day"}),(0,r.jsx)(n.td,{children:"Used when checkpoint topics are created for the first time."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset.syncs.topic.retention.ms"}),(0,r.jsx)(n.td,{children:"max long"}),(0,r.jsx)(n.td,{children:"Used when offset sync topics are created for the first time."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"verifying-data-synchronization",children:"Verifying Data Synchronization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"View the topic list in the target cluster to check whether there are\nsource topics."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Topic names in the target cluster have a prefix (for example,\n",(0,r.jsx)(n.code,{children:"A."}),") added to the source topic name. This is a MirrorMaker 2\nconfiguration for preventing cyclic topic backup."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Produce and consume messages in the source cluster, view the\nconsumption progress in the target cluster, and check whether data\nhas been synchronized from the source cluster to the target cluster."}),"\n",(0,r.jsxs)(n.p,{children:["If the target cluster is a Open Telekom Cloud Kafka instance, view\nthe consumption progress on the ",(0,r.jsx)(n.em,{children:"Consumer Groups"})," page."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},54777:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);