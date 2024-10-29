"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[62573],{76169:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(74848),c=s(28453);const i={id:"using-ssh-tunneling-for-public-access-to-a-dcs-instance",title:"Using SSH Tunneling for Public Access to a DCS Instance",tags:["dcs","ssh","redis","tunneling","jump-server"]},r="Using SSH Tunneling for Public Access to a DCS Instance",d={id:"best-practices/databases/distributed-cache-service/using-ssh-tunneling-for-public-access-to-a-dcs-instance",title:"Using SSH Tunneling for Public Access to a DCS Instance",description:"VPCs are used to ensure network security of public cloud services, such",source:"@site/docs/best-practices/databases/distributed-cache-service/using-ssh-tunneling-for-public-access-to-a-dcs-instance.md",sourceDirName:"best-practices/databases/distributed-cache-service",slug:"/best-practices/databases/distributed-cache-service/using-ssh-tunneling-for-public-access-to-a-dcs-instance",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/databases/distributed-cache-service/using-ssh-tunneling-for-public-access-to-a-dcs-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/databases/distributed-cache-service/using-ssh-tunneling-for-public-access-to-a-dcs-instance.md",tags:[{inline:!0,label:"dcs",permalink:"/docs-next/pr-preview/pr-153/docs/tags/dcs"},{inline:!0,label:"ssh",permalink:"/docs-next/pr-preview/pr-153/docs/tags/ssh"},{inline:!0,label:"redis",permalink:"/docs-next/pr-preview/pr-153/docs/tags/redis"},{inline:!0,label:"tunneling",permalink:"/docs-next/pr-preview/pr-153/docs/tags/tunneling"},{inline:!0,label:"jump-server",permalink:"/docs-next/pr-preview/pr-153/docs/tags/jump-server"}],version:"current",frontMatter:{id:"using-ssh-tunneling-for-public-access-to-a-dcs-instance",title:"Using SSH Tunneling for Public Access to a DCS Instance",tags:["dcs","ssh","redis","tunneling","jump-server"]},sidebar:"bestPracticesSidebar",previous:{title:"Using Nginx for Public Access of DCS Redis Instances",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/databases/distributed-cache-service/using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances"},next:{title:"Using ELB for Public Access to DCS",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs"}},a={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using MobaXterm to Create a Tunnel as a Jump Server",id:"using-mobaxterm-to-create-a-tunnel-as-a-jump-server",level:2}];function o(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-ssh-tunneling-for-public-access-to-a-dcs-instance",children:"Using SSH Tunneling for Public Access to a DCS Instance"}),"\n",(0,t.jsx)(n.p,{children:"VPCs are used to ensure network security of public cloud services, such\nas DCS. Your DCS instance can be accessed only by an ECS that is in the\nsame VPC as the instance."}),"\n",(0,t.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,t.jsx)(n.p,{children:"If an EIP is bound to a Open Telekom Cloud ECS, you can remotely access\nthe ECS from a local computer. You can create an SSH tunnel as a proxy to connect\nyour DCS instance and local computer to achieve proxy forwarding."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Redis Cluster DCS Redis 4.0, 5.0, or 6.0 instances do not support\npublic access using this solution."}),"\n",(0,t.jsx)(n.li,{children:"Do not use public network access in the production environment.\nClient access exceptions caused by poor public network performance\nwill not be included in the SLA."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"You have a DCS instance and a local computer that can connect to the\nInternet. Tools such as MobaXterm and the Redis client have been\ninstalled."}),"\n",(0,t.jsx)(n.p,{children:"You have an ECS that meets the following requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The ECS is bound with an EIP for public access."}),"\n",(0,t.jsx)(n.li,{children:"The VPC and subnet configured for the ECS are the same as those\nconfigured for the DCS instance."}),"\n",(0,t.jsx)(n.li,{children:"Security group rules have been correctly configured for the ECS."}),"\n",(0,t.jsx)(n.li,{children:"The ECS runs the Linux OS."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If these prerequisites are met, the ECS can communicate with the DCS\ninstance and you can remotely connect to the ECS using SSH from a local\ncomputer."}),"\n",(0,t.jsx)(n.h2,{id:"using-mobaxterm-to-create-a-tunnel-as-a-jump-server",children:"Using MobaXterm to Create a Tunnel as a Jump Server"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an SSH session for connecting to the ECS using port 22."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 1 Creating an SSH session",src:s(96657).A+"",width:"894",height:"593"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After the session is configured, enter the username and password to\nlog in to the ECS. After login, enter ",(0,t.jsx)(n.code,{children:"TMOUT=0"})," to prevent the\nsession from being automatically closed due to timeout."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 2 Entering &quot;TMOUT=0&quot;",src:s(13275).A+"",width:"1021",height:"547"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.em,{children:"Tunneling"})," to create a tunnel."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 3 Creating a tunnel",src:s(17584).A+"",width:"999",height:"710"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the local IP address to ",(0,t.jsx)(n.code,{children:"127.0.0.1"})," and start the tunnel."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 4 Starting the tunnel",src:s(84221).A+"",width:"997",height:"390"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the Redis client on the local computer. The following uses the\nRedis CLI as an example. Run the following command to access the DCS\ninstance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"**Redis-cli -h 127.0.0.1 -p 3306 -a {password}**\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parameter description:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-h"})," host name: ",(0,t.jsx)(n.code,{children:"localhost"})," or ",(0,t.jsx)(n.code,{children:"127.0.0.1"}),", which is the same as\nthe local IP address configured for the tunnel."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-p"})," port number: ",(0,t.jsx)(n.code,{children:"3306"}),", which is the same as the forward port\nconfigured for the tunnel."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-a"})," password: password of the DCS instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the connection is successful, the following information is\ndisplayed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 5 Successfully connecting to a DCS instance",src:s(49727).A+"",width:"561",height:"303"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},13275:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001109406512-731bb2c21e0a3f14f5929b9435a82930.png"},17584:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001110063992-6da70c2b1fb6da1784c827df350c1263.png"},84221:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001110225672-7abdaf3567b4a9e8f1ecfe27218204ac.png"},96657:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001156281773-4bd096e42bbc2e3425ce3eaea03e0f98.png"},49727:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(96540);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);