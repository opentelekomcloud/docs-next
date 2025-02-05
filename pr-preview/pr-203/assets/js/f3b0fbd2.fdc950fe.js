"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[5474],{49761:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"best-practices/application-services/distributed-message-service/configuring-message-accumulation-monitoring","title":"Configuring Message Accumulation Monitoring","description":"Unprocessed messages accumulate if the client\'s consumption is slower than the server\'s sending. When accumulated messages cannot be consumed in time, we can configure alarm rules so that you will be notified when the number of accumulated messages in a consumer group exceeds the threshold.","source":"@site/docs/best-practices/application-services/distributed-message-service/configuring-message-accumulation-monitoring.md","sourceDirName":"best-practices/application-services/distributed-message-service","slug":"/best-practices/application-services/distributed-message-service/configuring-message-accumulation-monitoring","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/application-services/distributed-message-service/configuring-message-accumulation-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/application-services/distributed-message-service/configuring-message-accumulation-monitoring.md","tags":[{"inline":true,"label":"kafka","permalink":"/docs-next/pr-preview/pr-203/docs/tags/kafka"},{"inline":true,"label":"dms","permalink":"/docs-next/pr-preview/pr-203/docs/tags/dms"},{"inline":true,"label":"cloudeye","permalink":"/docs-next/pr-preview/pr-203/docs/tags/cloudeye"},{"inline":true,"label":"smn","permalink":"/docs-next/pr-preview/pr-203/docs/tags/smn"}],"version":"current","frontMatter":{"id":"configuring-message-accumulation-monitoring","title":"Configuring Message Accumulation Monitoring","tags":["kafka","dms","cloudeye","smn"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Optimizing Consumer Polling","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/application-services/distributed-message-service/optimizing-consumer-polling"},"next":{"title":"Building Highly Available Web Server Clusters with Keepalived","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/computing/elastic-cloud-server/building-highly-available-web-server-clusters-with-keepalived"}}');var t=n(74848),r=n(28453);const c={id:"configuring-message-accumulation-monitoring",title:"Configuring Message Accumulation Monitoring",tags:["kafka","dms","cloudeye","smn"]},o="Configuring Message Accumulation Monitoring",a={},l=[{value:"Configuring Simple Message Notification",id:"configuring-simple-message-notification",level:2},{value:"Creating a Topic",id:"creating-a-topic",level:3},{value:"Creating a Subscription",id:"creating-a-subscription",level:3},{value:"Configuring Cloud Eye",id:"configuring-cloud-eye",level:2},{value:"Creating an Alarm Rule",id:"creating-an-alarm-rule",level:3},{value:"Run a simulation",id:"run-a-simulation",level:2},{value:"Cloning the repository",id:"cloning-the-repository",level:3},{value:"Configuring the Parameters",id:"configuring-the-parameters",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"configuring-message-accumulation-monitoring",children:"Configuring Message Accumulation Monitoring"})}),"\n",(0,t.jsx)(i.p,{children:"Unprocessed messages accumulate if the client's consumption is slower than the server's sending. When accumulated messages cannot be consumed in time, we can configure alarm rules so that you will be notified when the number of accumulated messages in a consumer group exceeds the threshold."}),"\n",(0,t.jsx)(i.h2,{id:"configuring-simple-message-notification",children:"Configuring Simple Message Notification"}),"\n",(0,t.jsx)(i.h3,{id:"creating-a-topic",children:"Creating a Topic"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Log in to the ",(0,t.jsx)(i.em,{children:"Open Telekom Cloud Console"})," -> ",(0,t.jsx)(i.em,{children:"Simple Message Notification"})," -> ",(0,t.jsx)(i.em,{children:"Topics"})," and click ",(0,t.jsx)(i.em,{children:"Create Topic"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Give it a name, e.g. ",(0,t.jsx)(i.strong,{children:"test_topic"})," and click ",(0,t.jsx)(i.em,{children:"OK"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"creating-a-subscription",children:"Creating a Subscription"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to the ",(0,t.jsx)(i.em,{children:"Open Telekom Cloud Console"})," -> ",(0,t.jsx)(i.em,{children:"Simple Message Notification"})," -> ",(0,t.jsx)(i.em,{children:"Subscriptions"})," and click ",(0,t.jsx)(i.em,{children:"Add Subscription"}),"."]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(9070).A+"",title:"Click to enlarge",width:"1916",height:"800"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 1"})," Add a Subscription to the Topic"]})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.em,{children:"Select Topic"})," and choose the topic we just created."]}),"\n",(0,t.jsxs)(i.li,{children:["Set ",(0,t.jsx)(i.strong,{children:"Protocol"})," to ",(0,t.jsx)(i.code,{children:"Email"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Add an ",(0,t.jsx)(i.strong,{children:"Endpoint"})," (an email address you have direct access to) and click ",(0,t.jsx)(i.em,{children:"OK"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Back to the ",(0,t.jsx)(i.em,{children:"Subscriptions"})," console click ",(0,t.jsx)(i.em,{children:"Request Confirmation"}),":"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(3831).A+"",title:"Click to enlarge",width:"1915",height:"803"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 2"})," Request Subscription Confirmation"]})}),"\n",(0,t.jsxs)(i.p,{children:["and click ",(0,t.jsx)(i.em,{children:"Confirm Subscription"}),' in the "SMN-Confirming Your Subcription" email:']}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(90540).A+"",title:"Click to enlarge",width:"1446",height:"741"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 3"})," Respond to the Subscription Confirmation Request Email"]})}),"\n",(0,t.jsx)(i.h2,{id:"configuring-cloud-eye",children:"Configuring Cloud Eye"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Log in to the ",(0,t.jsx)(i.em,{children:"Open Telekom Cloud Console"})," -> ",(0,t.jsx)(i.em,{children:"Cloud Eye"})," -> ",(0,t.jsx)(i.em,{children:"Distributed Message Service"})," -> ",(0,t.jsx)(i.em,{children:"Kafka Platinum"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Find your Kafka instance in the list  and click ",(0,t.jsx)(i.em,{children:"Create Alarm Rule"}),"."]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(87954).A+"",title:"Click to enlarge",width:"1880",height:"804"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 4"})," Create a Cloud Eye Alarm Rule"]})}),"\n",(0,t.jsx)(i.h3,{id:"creating-an-alarm-rule",children:"Creating an Alarm Rule"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Set ",(0,t.jsx)(i.strong,{children:"Template"})," to ",(0,t.jsx)(i.code,{children:"DMS Kafka Instance Alarm Template"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Set ",(0,t.jsx)(i.strong,{children:"Notification Object"})," to the name of the SMN topic we created in the previous step (in this case ",(0,t.jsx)(i.strong,{children:"test_topic"}),") and click ",(0,t.jsx)(i.em,{children:"Create"}),"."]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(37803).A+"",title:"Click to enlarge",width:"1894",height:"801"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 5"})," Configure the Cloud Eye Alarm Rule"]})}),"\n",(0,t.jsx)(i.h2,{id:"run-a-simulation",children:"Run a simulation"}),"\n",(0,t.jsx)(i.p,{children:"We are going to rely in a small Golang package that creates a DMS Kafka topic, a message producer, a bunch of message consumers in order to simulate accumulated unprocessed messages in our Kafka instance."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["You can find more information about the implementation details of this package in the Best Practice: ",(0,t.jsx)(i.a,{href:"/docs-next/pr-preview/pr-203/docs/best-practices/application-services/distributed-message-service/optimizing-consumer-polling",children:"Optimizing Consumer Polling"}),"."]})}),"\n",(0,t.jsx)(i.h3,{id:"cloning-the-repository",children:"Cloning the repository"}),"\n",(0,t.jsx)(i.p,{children:"Clone the repo in your local development machine:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"git clone https://github.com/opentelekomcloud-blueprints/kafka-optimizing-consumer-pulling.git\n"})}),"\n",(0,t.jsx)(i.h3,{id:"configuring-the-parameters",children:"Configuring the Parameters"}),"\n",(0,t.jsxs)(i.p,{children:["For this lab, ",(0,t.jsx)(i.strong,{children:"we want to give a handicap to the consumers so we can simulate an accumulation of unprocessed messages"}),". For that matter, open ",(0,t.jsx)(i.strong,{children:"main.go"})," in the editor of your choice and make the following changes:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Set ",(0,t.jsx)(i.code,{children:"messages"})," to ",(0,t.jsx)(i.code,{children:"1000"})," -> Produces a significant amount of messages to facilitate our observation."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"var (\n\tconsumers  = 5\n\tpartitions = 3\n\tmessages   = 1000\n\tlogLevel   = slog.LevelInfo\n\tcleanExit  = true\n)\n"})}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsxs)(i.li,{children:["Raise ",(0,t.jsx)(i.code,{children:"MaxWaitTime"})," to ",(0,t.jsx)(i.code,{children:"1000"})," milliseconds -> For more details how ",(0,t.jsx)(i.code,{children:"MaxWaitTime"})," affects the consumers consult ",(0,t.jsx)(i.a,{href:"/docs-next/pr-preview/pr-203/docs/best-practices/application-services/distributed-message-service/optimizing-consumer-polling#use-long-polling",children:"Optimizing Consumer Polling-Use Long Polling"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"func newConsumer(ctx context.Context, consumerId int, wg *sync.WaitGroup) {\n\tdefer wg.Done()\n\n\tconfig := sarama.NewConfig()\n\tconfig.Consumer.Group.Rebalance.GroupStrategies = []sarama.BalanceStrategy{sarama.NewBalanceStrategyRoundRobin()}\n\tconfig.Consumer.Offsets.Initial = sarama.OffsetOldest\n\tconfig.Consumer.MaxWaitTime = 1000 * time.Millisecond\n"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["Start the simulation and go to ",(0,t.jsx)(i.em,{children:"Open Telekom Cloud Console"})," -> ",(0,t.jsx)(i.em,{children:"Distributed Message Service"})," -> ",(0,t.jsx)(i.em,{children:"Monitoring"})," -> ",(0,t.jsx)(i.em,{children:"Monitoring Details"}),"\nand you will notice that the consumers they start lagging behind and unprocessed messages begin to accumulate:"]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(95135).A+"",title:"Click to enlarge",width:"1915",height:"803"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 6"})," Kafka Instance Monitoring Details"]})}),"\n",(0,t.jsx)(i.p,{children:"Soon enough, when the limit set in the alarm rule is met, you will receive an email from SMN that will inform you that a Major Alarm is triggered\nby Cloud Eye concerning the Kafka instance:"}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(18556).A+"",title:"Click to enlarge",width:"1437",height:"575"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 7"})," Major Alarm is triggered"]})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsx)(i.li,{children:"Let the simulation continue, and as the time passes the consumers are starting catching up you will be informed by a second email, that Cloud    Eye delegated the situation and the Major Alarm is now been suppressed:"}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(45895).A+"",title:"Click to enlarge",width:"1393",height:"579"}),"\n",(0,t.jsx)(i.strong,{children:"Figure 8"})," Major Alarm is over"]})}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsx)(i.p,{children:"You can create slarms for various other Kafka metrics besides Accumulated Messages, and you use as your target besides the Kafka instance, the broker, different topics or consumer groups."})})]})}function g(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},87954:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-20-50-47e71ca5f7b9d72877c19095a1528cad.png"},37803:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-21-30-4dc6cc79e453b3b685f098e3d06ada4b.png"},18556:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-22-58-40228cca6b4756fb9f517713c0be3d52.png"},9070:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-24-03-99da77f88b3eac18b34ef5cc25722d50.png"},45895:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-26-08-8d194538fee3f7c6eca50695a542e055.png"},95135:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-27-43-13330bab5ffb44b0bc77f682ffc20be1.png"},3831:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-38-07-f2435bcb99b7f3f11f7ea138d9f0fff9.png"},90540:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Screenshot_from_2025-02-05_07-41-04-2f099dd965d47384be6476bef6080f78.png"},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>o});var s=n(96540);const t={},r=s.createContext(t);function c(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);