"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[27784],{93060:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(74848),c=s(28453);const i={id:"using-elb-for-public-access-to-dcs",title:"Using ELB for Public Access to DCS",tags:["dcs","redis","elb"]},r="Using ELB for Public Access to DCS",d={id:"best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs",title:"Using ELB for Public Access to DCS",description:"Currently, DCS Redis 4.0, 5.0, and 6.0 instances cannot be bound with",source:"@site/docs/best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs.md",sourceDirName:"best-practices/databases/distributed-cache-service",slug:"/best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs",permalink:"/docs-next/pr-preview/pr-154/docs/best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs.md",tags:[{inline:!0,label:"dcs",permalink:"/docs-next/pr-preview/pr-154/docs/tags/dcs"},{inline:!0,label:"redis",permalink:"/docs-next/pr-preview/pr-154/docs/tags/redis"},{inline:!0,label:"elb",permalink:"/docs-next/pr-preview/pr-154/docs/tags/elb"}],version:"current",frontMatter:{id:"using-elb-for-public-access-to-dcs",title:"Using ELB for Public Access to DCS",tags:["dcs","redis","elb"]},sidebar:"bestPracticesSidebar",previous:{title:"Using SSH Tunneling for Public Access to a DCS Instance",permalink:"/docs-next/pr-preview/pr-154/docs/best-practices/databases/distributed-cache-service/using-ssh-tunneling-for-public-access-to-a-dcs-instance"},next:{title:"Connecting a Redis Client to DCS Through CCE",permalink:"/docs-next/pr-preview/pr-154/docs/best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce"}},a={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting to the DCS Instance Through ELB",id:"connecting-to-the-dcs-instance-through-elb",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-elb-for-public-access-to-dcs",children:"Using ELB for Public Access to DCS"}),"\n",(0,t.jsx)(n.p,{children:"Currently, DCS Redis 4.0, 5.0, and 6.0 instances cannot be bound with\nelastic IP addresses (EIPs) and cannot be accessed over public networks\ndirectly. This section describes how to access a single-node,\nmaster/standby, read/write splitting, or Proxy Cluster instance or a\nnode in a Redis Cluster instance through public networks by enabling\ncross-VPC backend on a load balancer."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Due to cluster node address translation, you cannot access a Redis\nCluster as a whole. You can only access individual nodes in the\ncluster."}),"\n",(0,t.jsx)(n.li,{children:"Do not use public network access in the production environment.\nClient access exceptions caused by poor public network performance\nwill not be included in the SLA."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,t.jsx)(n.p,{children:"The following figure shows the process for accessing DCS through ELB."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 1 Process for accessing DCS through ELB",src:s(20906).A+"",width:"652",height:"479"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html#en-us-topic-0013935842",children:"Create a VPC"}),"\nor use an existing one."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/creating_an_instance/creating_a_dcs_redis_instance.html#dcs-ug-0326008",children:"Create a DCS Redis instance"}),".\nRecord the IP address and port number of the instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html",children:"Create a dedicated load balancer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A shared load balancer does not support cross-VPC backend\nservers. Therefore, it cannot be bound to a DCS instance."}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.em,{children:"Specification"}),", select ",(0,t.jsx)(n.em,{children:"Network load balancing\n(TCP/UDP)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["To access the DCS instance over public networks, enable ",(0,t.jsx)(n.em,{children:"IP as\na Backend"})," when creating a ",(0,t.jsx)(n.strong,{children:"dedicated"})," load balancer."]}),"\n"]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_a_tcp_listener.html",children:"Add a TCP listener"}),"\nto the dedicated load balancer."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When adding a backend server, click the ",(0,t.jsx)(n.em,{children:"IP as Backend\nServers"})," tab and then click ",(0,t.jsx)(n.em,{children:"Add IP as Backend Sever"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.em,{children:"Backend Server IP Address Column"}),", enter the IP address\nand in the Backend Port Column, enter the port number of your\nDCS instance."]}),"\n",(0,t.jsxs)(n.li,{children:["A Redis Cluster DCS instance contains multiple master/replica\npairs. When configuring an IP as Backend server, you can add the\nIP address and port number of ",(0,t.jsx)(n.strong,{children:"any"})," master or replica node."]}),"\n",(0,t.jsxs)(n.li,{children:["If you enable ",(0,t.jsx)(n.em,{children:"Health Check"}),", you do not need to manually\nconfigure the port. By default, the service port of the backend\nserver will be used."]}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/creating_a_vpc_peering_connection_with_a_vpc_in_another_account.html#en-us-topic-0046655038",children:"Create a VPC peering connection"}),".\nFor the local VPC, select the VPC where your load balancer is located. For the peer VPC, select the VPC where your DCS instance is\nlocated."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Even if your load balancer and DCS instance are in the same VPC, you\nstill need to create a VPC peering connection. For the local VPC,\nselect the VPC where your load balancer and DCS instance are\nlocated. For the peer VPC, select another VPC."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the name of the VPC peering connection to go to its details\npage. Obtain ",(0,t.jsx)(n.em,{children:"Local VPC CIDR Block"})," and ",(0,t.jsx)(n.em,{children:"Peer VPC CIDR Block"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image1",src:s(93953).A+"",width:"1836",height:"441"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure local and peer routes for the VPC peering connection."}),"\n",(0,t.jsxs)(n.p,{children:["a.  On the ",(0,t.jsx)(n.em,{children:"Local Routes"})," and ",(0,t.jsx)(n.em,{children:"Peer Routes"})," tab pages, click the\nlink to go to the ",(0,t.jsx)(n.em,{children:"Route Tables"})," page."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image2",src:s(26995).A+"",width:"562",height:"168"})}),"\n",(0,t.jsxs)(n.p,{children:["b.  Local route: On the summary page of local routes, click ",(0,t.jsx)(n.em,{children:"Add\nRoute"}),". In the displayed ",(0,t.jsx)(n.em,{children:"Add Route"})," dialog box, set\n",(0,t.jsx)(n.em,{children:"Destination"})," to the value of ",(0,t.jsx)(n.em,{children:"Peer VPC CIDR Block"})," of the\nVPC peering connection, set ",(0,t.jsx)(n.em,{children:"Next Hop Type"})," to ",(0,t.jsx)(n.em,{children:"VPC peering\nconnection"}),", set ",(0,t.jsx)(n.em,{children:"Next Hop"})," to the VPC peering connection\ncreated in ",(0,t.jsx)(n.code,{children:"5 <dcs-bp-211201001__li782011051412>"}),", and click\n",(0,t.jsx)(n.em,{children:"OK"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["c.  Peer route: On the summary page of peer routes, click ",(0,t.jsx)(n.em,{children:"Add\nRoute"}),". In the displayed ",(0,t.jsx)(n.em,{children:"Add Route"})," dialog box, set\n",(0,t.jsx)(n.em,{children:"Destination"})," to the value of ",(0,t.jsx)(n.em,{children:"Local VPC CIDR Block"})," of the\nVPC peering connection, set ",(0,t.jsx)(n.em,{children:"Next Hop Type"})," to ",(0,t.jsx)(n.em,{children:"VPC peering\nconnection"}),", set ",(0,t.jsx)(n.em,{children:"Next Hop"})," to the VPC peering connection\ncreated in ",(0,t.jsx)(n.code,{children:"5 <dcs-bp-211201001__li782011051412>"}),", and click\n",(0,t.jsx)(n.em,{children:"OK"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If the load balancer and the DCS instance are in the same VPC,\nyou do not need to add a peer route.\n:::"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Perform a health check on the IP address of the DCS instance. If the\nhealth check result is ",(0,t.jsx)(n.code,{children:"Healthy"}),", the added cross-VPC backend IP\naddress can be used."]}),"\n",(0,t.jsxs)(n.p,{children:["a.  In the navigation pane of ",(0,t.jsx)(n.em,{children:"Network Console"}),", choose ",(0,t.jsx)(n.em,{children:"Elastic\nLoad Balance"})," -> ",(0,t.jsx)(n.em,{children:"Load Balancers"}),".\nb.  Click the name of the created Elastic Load Balancer.\nc.  On the ",(0,t.jsx)(n.em,{children:"Backend Server Server Groups"})," -> ",(0,t.jsx)(n.em,{children:"IP as Backend\nServers"})," tab page, view the health check result of the DCS\ninstance IP address."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image3",src:s(82858).A+"",width:"1828",height:"654"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"connecting-to-the-dcs-instance-through-elb",children:"Connecting to the DCS Instance Through ELB"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connecting to a node in a Redis Cluster DCS instance through ELB\na.  View the basic information of the load balancer created in\n",(0,t.jsx)(n.code,{children:"3 <dcs-bp-211201001__li185984400426>"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image4",src:s(31034).A+"",width:"1842",height:"482"})}),"\n",(0,t.jsxs)(n.p,{children:["b.  ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/index.html#en-us-topic-0021831611",children:"Create an\nECS"}),",\nlog in to it, and install the Redis client by referring to\n",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/accessing_an_instance/accessing_a_dcs_redis_instance_through_redis-cli.html#dcs-ug-0326009",children:"redis-cli"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["c.  On the Redis client, connect to the DCS instance using the IP\naddress and port number configured in\n",(0,t.jsx)(n.code,{children:"4 <dcs-bp-211201001__li2180434205513>"}),". If you use the EIP and\nport number of the load balancer, an error will be reported."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image5",src:s(71780).A+"",width:"1140",height:"427"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connecting to a single-node, master/standby, read/write splitting,\nor Proxy Cluster DCS instance through ELB\na.  View the IPv4 EIP and port number of the load balancer created\nin ",(0,t.jsx)(n.code,{children:"3 <dcs-bp-211201001__li185984400426>"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image6",src:s(31034).A+"",width:"1842",height:"482"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image7",src:s(86454).A+"",width:"1834",height:"509"})}),"\n",(0,t.jsxs)(n.p,{children:["b.  ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/index.html#en-us-topic-0021831611",children:"Create an\nECS"}),",\nlog in to it, and install the Redis client by referring to\n",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/accessing_an_instance/accessing_a_dcs_redis_instance_through_redis-cli.html#dcs-ug-0326009",children:"redis-cli"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["c.  Use ",(0,t.jsx)(n.strong,{children:"redis-cli"})," to access the load balancer using its EIP and port\nnumber (which is ",(0,t.jsx)(n.code,{children:"80"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image8",src:s(90609).A+"",width:"1292",height:"69"})}),"\n",(0,t.jsx)(n.p,{children:"d.  Write a key through ELB."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image9",src:s(55968).A+"",width:"1297",height:"205"})}),"\n",(0,t.jsxs)(n.p,{children:["e.  Log in to the DCS console. On the ",(0,t.jsx)(n.em,{children:"Cache Manager"})," page, choose\n",(0,t.jsx)(n.em,{children:"More"})," -> ",(0,t.jsx)(n.em,{children:"Connect to Redis"})," in the row that contains the\nDCS instance created in ",(0,t.jsx)(n.code,{children:"2 <dcs-bp-211201001__li145661168417>"}),".\nCheck whether the key written in\n",(0,t.jsx)(n.code,{children:"4 <dcs-bp-211201001__li352815512015>"})," exists."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image10",src:s(3026).A+"",width:"1344",height:"806"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},3026:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001183928408-40e8edbdbec7ecefabda83c6224a8a2d.png"},31034:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001229563929-f99734290318d85ed2474046711d8d50.png"},71780:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001229643735-29db17b929a5433f0f9021229b958bdc.png"},86454:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001229645007-6ea1ed876b67037ffd2abc03b4f27673.png"},90609:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001229765759-51ae5a73cfd93f8089aa364bf05a0f13.png"},55968:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001229765989-faabf4c2ae1f2ed29bff7e122cf4510d.png"},20906:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001231321333-bb89e8d739d4a9c2840bb72f854ce8bb.png"},82858:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001260455881-df1a36e83c9e869a119507265eb7f0d2.png"},26995:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},93953:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001616102745-cb5789cacd40bd01c85e688eae233d61.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(96540);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);