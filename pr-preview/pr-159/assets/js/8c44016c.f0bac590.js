"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[72272],{45967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(74848),a=n(28453);const s={id:"how-do-replica-sets-achieve-high-availability-and-readwrite-splitting",title:"How Do Replica Sets Achieve High Availability and Read/Write Splitting?",tags:["dds","migration","mongodb"]},r="How Do Replica Sets Achieve High Availability and Read/Write Splitting?",d={id:"best-practices/databases/document-database-service/how-do-replica-sets-achieve-high-availability-and-readwrite-splitting",title:"How Do Replica Sets Achieve High Availability and Read/Write Splitting?",description:"DDS replica set instances can store multiple duplicates to ensure data high availability and support the automatic switch of private IP addresses to ensure service high availability. To enhance the read and write performance of your client for connecting to the instance, you can use your client to read different data copies. You need to connect to replica set instances using HA connection addresses. You can also configure read/write splitting. Otherwise, the high availability and high read performance of replica set instances cannot be guaranteed.",source:"@site/docs/best-practices/databases/document-database-service/how-do-replica-sets-achieve-high-availability-and-readwrite-splitting.md",sourceDirName:"best-practices/databases/document-database-service",slug:"/best-practices/databases/document-database-service/how-do-replica-sets-achieve-high-availability-and-readwrite-splitting",permalink:"/docs-next/pr-preview/pr-159/docs/best-practices/databases/document-database-service/how-do-replica-sets-achieve-high-availability-and-readwrite-splitting",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/databases/document-database-service/how-do-replica-sets-achieve-high-availability-and-readwrite-splitting.md",tags:[{inline:!0,label:"dds",permalink:"/docs-next/pr-preview/pr-159/docs/tags/dds"},{inline:!0,label:"migration",permalink:"/docs-next/pr-preview/pr-159/docs/tags/migration"},{inline:!0,label:"mongodb",permalink:"/docs-next/pr-preview/pr-159/docs/tags/mongodb"}],version:"current",frontMatter:{id:"how-do-replica-sets-achieve-high-availability-and-readwrite-splitting",title:"How Do Replica Sets Achieve High Availability and Read/Write Splitting?",tags:["dds","migration","mongodb"]},sidebar:"bestPracticesSidebar",previous:{title:"From Other Cloud MongoDB to DDS",permalink:"/docs-next/pr-preview/pr-159/docs/best-practices/databases/document-database-service/from-other-cloud-mongodb-to-dds"},next:{title:"Cloud Create",permalink:"/docs-next/pr-preview/pr-159/docs/best-practices/management-and-deployment/cloud-create/"}},c={},o=[{value:"Connecting to a Replica Set Instance (HA)",id:"connecting-to-a-replica-set-instance-ha",level:2},{value:"Method 1: Using a URL",id:"method-1-using-a-url",level:3},{value:"Method 2: Using a Java Driver",id:"method-2-using-a-java-driver",level:3},{value:"Connecting to a Replica Set Instance",id:"connecting-to-a-replica-set-instance",level:2},{value:"Read/Write Splitting",id:"readwrite-splitting",level:2}];function l(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-do-replica-sets-achieve-high-availability-and-readwrite-splitting",children:"How Do Replica Sets Achieve High Availability and Read/Write Splitting?"}),"\n",(0,i.jsx)(t.p,{children:"DDS replica set instances can store multiple duplicates to ensure data high availability and support the automatic switch of private IP addresses to ensure service high availability. To enhance the read and write performance of your client for connecting to the instance, you can use your client to read different data copies. You need to connect to replica set instances using HA connection addresses. You can also configure read/write splitting. Otherwise, the high availability and high read performance of replica set instances cannot be guaranteed."}),"\n",(0,i.jsx)(t.p,{children:"The primary node of a replica set instance is not fixed. If the instance settings are changed, or the primary node fails, or primary and secondary nodes are switched, a new primary node will be elected and the previous one becomes a secondary node. The following figure shows the process of a switchover."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Figure 1 Primary/Secondary switchover",src:n(99632).A+"",width:"741",height:"232"})}),"\n",(0,i.jsx)(t.h2,{id:"connecting-to-a-replica-set-instance-ha",children:"Connecting to a Replica Set Instance (HA)"}),"\n",(0,i.jsx)(t.p,{children:"A DDS replica set consists of the primary, secondary, and hidden nodes. The hidden node is invisible to users. Read/Write splitting and HA can be realized only when you connect to the IP addresses and ports of the primary and secondary nodes of the replica set at the same time (in HA mode)."}),"\n",(0,i.jsx)(t.p,{children:"The following describes how to use URL and Java to connect to an instance in HA mode."}),"\n",(0,i.jsx)(t.h3,{id:"method-1-using-a-url",children:"Method 1: Using a URL"}),"\n",(0,i.jsxs)(t.p,{children:["On the ",(0,i.jsx)(t.em,{children:"Instances"})," page, click the instance name. The ",(0,i.jsx)(t.em,{children:"Basic Information"})," page is displayed. Choose ",(0,i.jsx)(t.em,{children:"Connections"}),". Click the ",(0,i.jsx)(t.em,{children:"Private Connection"})," tab and obtain the connection address of the current instance from the ",(0,i.jsx)(t.em,{children:"Private HA Connection Address"})," field."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Figure 2 Obtaining the private HA connection address",src:n(17438).A+"",width:"1626",height:"225"})}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"mongodb://rwuser:\\*\\*\\*\\*@**_192.168.0.148:8635,192.168.0.96:8635_**/test?authSource=admin&replicaSet=replica\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the preceding URL, ",(0,i.jsx)(t.code,{children:"192.168.0.148:8635"})," and ",(0,i.jsx)(t.code,{children:"192.168.0.96:8635"})," are the IP addresses and ports of the primary and secondary nodes, respectively. If you use this address, the connection between your client and the instance can be ensured even when a primary/standby switchover occurs. In addition, using multiple IP addresses and port numbers can enhance the read and write performance of the entire database."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Figure 3 Data read and write process ",src:n(64933).A+"",width:"847",height:"325"})}),"\n",(0,i.jsx)(t.h3,{id:"method-2-using-a-java-driver",children:"Method 2: Using a Java Driver"}),"\n",(0,i.jsx)(t.p,{children:"Sample code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'MongoClientURI connectionString = new MongoClientURI("mongodb://rwuser:****@192.168.0.148:8635,192.168.0.96:8635/test?authSource=admin&replicaSet=replica"); MongoClient client = new MongoClient(connectionString);\nMongoDatabase database = client.getDatabase("test");\nMongoCollection<Document> collection = database.getCollection("mycoll");\n'})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"rwuser:****"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Username and password for starting authentication"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"192.168.0.148:8635,192.168.0.96:8635"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IP addresses and ports of the primary and secondary nodes in a replica set instance"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"test"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the database to be connected"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"authSource=admin"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Database username for authentication"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"replicaSet=replica"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the replica set instance type"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Table 1"}),'" Parameter description']}),"\n",(0,i.jsx)(t.h2,{id:"connecting-to-a-replica-set-instance",children:"Connecting to a Replica Set Instance"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This is not recommended!"})}),"\n",(0,i.jsx)(t.p,{children:"Using the Connection Address:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"mongodb://rwuser:\\*\\*\\*\\*@**_192.168.0.148:8635_**/test?authSource=admin&replicaSet=replica\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the preceding URL, ",(0,i.jsx)(t.code,{children:"192.168.0.148:8635"})," is the IP address and port number of the current primary node. If a switchover occurs or the primary node is changed, the client fails to connect to the replica set instance because the IP address and port of the newly elected primary node is unknown. As a result, the database service becomes unavailable. In addition, read and write operations can only be performed on a fixed primary node, so the read and write performance cannot be improved by adding nodes."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Figure 4 Data read and write process",src:n(96240).A+"",width:"785",height:"308"})}),"\n",(0,i.jsx)(t.h2,{id:"readwrite-splitting",children:"Read/Write Splitting"}),"\n",(0,i.jsx)(t.p,{children:"The following HA connection address is used as an example to describe how to connect to a DDS replica set instance:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"mongodb://rwuser:<password>@192.168.xx.xx:8635,192.168.xx.xx:8635/test?\nauthSource=admin&replicaSet=replica&readPreference=secondaryPreferred\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The database account is ",(0,i.jsx)(t.code,{children:"rwuser"}),", and the database is ",(0,i.jsx)(t.code,{children:"admin"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"After the DB instance is connected, read requests are preferentially sent to the secondary node to implement read/write splitting. If the relationship between the primary and secondary nodes changes, write operations are automatically switched to the new primary node to ensure high availability of DDS."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},96240:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/en-us_image_0000001117852888-585177a20a34ff032d7edcea9f9d1496.png"},99632:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/en-us_image_0000001166068694-11457c33449d328e8bdacd18c064b362.png"},17438:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/en-us_image_0000001210912526-17ee913c0a71a155400db01c328b4ec9.png"},64933:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/en-us_image_0000001211264689-af6841d173fe51982ba9ba9062e3ddd5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);