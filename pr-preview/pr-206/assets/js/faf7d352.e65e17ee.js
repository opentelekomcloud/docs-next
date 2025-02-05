"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[27787],{48180:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"best-practices/databases/distributed-cache-service/using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances","title":"Using Nginx for Public Access of DCS Redis Instances","description":"This section describes how to access a single-node, master/standby, read/write splitting, or Proxy Cluster DCS Redis 4.0, 5.0, or 6.0 instance by using a jump server. This solution cannot be used to access a Redis Cluster instance over public networks.","source":"@site/docs/best-practices/databases/distributed-cache-service/using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances.md","sourceDirName":"best-practices/databases/distributed-cache-service","slug":"/best-practices/databases/distributed-cache-service/using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/databases/distributed-cache-service/using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/databases/distributed-cache-service/using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances.md","tags":[{"inline":true,"label":"dcs","permalink":"/docs-next/pr-preview/pr-206/docs/tags/dcs"},{"inline":true,"label":"nginx","permalink":"/docs-next/pr-preview/pr-206/docs/tags/nginx"},{"inline":true,"label":"redis","permalink":"/docs-next/pr-preview/pr-206/docs/tags/redis"},{"inline":true,"label":"jump-server","permalink":"/docs-next/pr-preview/pr-206/docs/tags/jump-server"}],"version":"current","frontMatter":{"id":"using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances","title":"Using Nginx for Public Access of DCS Redis Instances","tags":["dcs","nginx","redis","jump-server"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Migrating Container Images","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/containers/software-repository/migrating-container-images"},"next":{"title":"Using SSH Tunneling for Public Access to a DCS Instance","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/databases/distributed-cache-service/using-ssh-tunneling-for-public-access-to-a-dcs-instance"}}');var t=s(74848),c=s(28453);const r={id:"using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances",title:"Using Nginx for Public Access of DCS Redis Instances",tags:["dcs","nginx","redis","jump-server"]},a="Using Nginx for Public Access of DCS Redis Instances",o={},d=[{value:"Creating an ECS",id:"creating-an-ecs",level:2},{value:"Installing Nginx",id:"installing-nginx",level:2},{value:"Setting Up Nginx",id:"setting-up-nginx",level:2},{value:"(Optional) Persistent Connections",id:"optional-persistent-connections",level:2},{value:"Accessing DCS Redis Instances Using Nginx",id:"accessing-dcs-redis-instances-using-nginx",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"using-nginx-for-public-access-of-dcs-redis-instances",children:"Using Nginx for Public Access of DCS Redis Instances"})}),"\n",(0,t.jsxs)(n.p,{children:["This section describes how to access a single-node, master/standby, read/write splitting, or Proxy Cluster DCS Redis 4.0, 5.0, or 6.0 instance ",(0,t.jsx)(n.strong,{children:"by using a jump server"}),". This solution ",(0,t.jsx)(n.strong,{children:"cannot be used"})," to access a Redis Cluster instance over public networks."]}),"\n",(0,t.jsx)(n.p,{children:"Currently, DCS Redis 4.0, 5.0, and 6.0 instances cannot be bound with\nelastic IP addresses (EIPs) and cannot be accessed over public networks\ndirectly."}),"\n",(0,t.jsx)(n.p,{children:"As shown in figure below, the ECS where\nNginx is installed is a jump server. The ECS is in the same VPC as the\nDCS Redis instances and can access the DCS Redis instances through the\nsubnet IP addresses. After an EIP is bound to the ECS, the ECS can be\naccessed over the public network. Nginx can listen on multiple ports and\nforward requests to different DCS Redis instances."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 1 Accessing DCS Redis instances in a VPC by usingNginx",src:s(61181).A+"",width:"771",height:"241"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Do not"})," use public network access in the production environment. Client\naccess exceptions caused by poor public network performance will not be\nincluded in the SLA."]})}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-ecs",children:"Creating an ECS"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Obtain the VPC where the DCS Redis instance is deployed."}),"\n",(0,t.jsxs)(n.p,{children:["As shown in the following figure, the master/standby instance is\ndeployed in the ",(0,t.jsx)(n.code,{children:"vpc-demo"})," VPC."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 2 DCS Redis instance details",src:s(22709).A+"",width:"1608",height:"660"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an ECS. Configure the ECS with the ",(0,t.jsx)(n.code,{children:"vpc-demo"})," VPC, bind an\nEIP to the ECS, and select the bandwidth as required."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 3 ECS details",src:s(92889).A+"",width:"1354",height:"176"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installing-nginx",children:"Installing Nginx"}),"\n",(0,t.jsx)(n.p,{children:"After Creating an ECS, install Nginx on the ECS. The following uses\nCentOS Stream 9 as an example to describe how to install Nginx. The\ncommands vary depending on the OS."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to add Nginx to the Yum repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to check whether Nginx has been added\nsuccessfully:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yum search nginx\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to install Nginx:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo yum install -y nginx\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to install the stream module:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo yum install nginx-mod-stream --skip-broken\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following commands to start Nginx and set it to run\nautomatically upon system startup:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start nginx.service\nsudo systemctl enable nginx.service\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the address box of a browser, enter the server address (the EIP\nof the ECS) to check whether Nginx is installed successfully."}),"\n",(0,t.jsx)(n.p,{children:"If the following page is displayed, Nginx has been installed\nsuccessfully."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image1",src:s(88394).A+"",width:"1283",height:"721"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-nginx",children:"Setting Up Nginx"}),"\n",(0,t.jsx)(n.p,{children:"After installing Nginx, configure request forwarding rules to specify\nthe ports that Nginx listens on and the DCS Redis instances that Nginx\nforwards requests to."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open and modify the configuration file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /etc/nginx\nsudo vi nginx.conf\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The following is a configuration example. To access multiple DCS\nRedis instances over public networks, configure multiple ",(0,t.jsx)(n.code,{children:"server"}),"\nsections and configure the DCS Redis instance connection addresses\nfor ",(0,t.jsx)(n.code,{children:"proxy\\pass"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="nginx.conf"',children:"    stream {\n        server {\n            listen 8080;\n            proxy_pass 192.168.0.5:6379;\n        }\n        server {\n            listen 8081;\n            proxy_pass 192.168.0.6:6379;\n        }\n    }\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"proxy\\pass"})," to the IP address of the DCS Redis instance in\nthe same VPC. You can obtain the IP address from the ",(0,t.jsx)(n.em,{children:"Connection"}),"\narea on the DCS instance details page."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 4 Adding Nginx configurations",src:s(81447).A+"",width:"841",height:"794"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restarting Nginx."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo service nginx restart\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify whether Nginx has been started."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"netstat -an|grep 808\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 5 Starting Nginx and verifying the start",src:s(80396).A+"",width:"828",height:"170"})}),"\n",(0,t.jsxs)(n.p,{children:["If Nginx is listening on ports ",(0,t.jsx)(n.code,{children:"8080"})," and ",(0,t.jsx)(n.code,{children:"8081"}),", Nginx has been started successfully."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"optional-persistent-connections",children:"(Optional) Persistent Connections"}),"\n",(0,t.jsxs)(n.p,{children:["If persistent connections (",(0,t.jsx)(n.strong,{children:"pconnect"})," in Redis terminology) are required\nfor public network access, add the following configuration in\n",(0,t.jsx)(n.a,{href:"#setting-up-nginx",children:"Setting up Nginx"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Timeout of a connection from Nginx to the server"'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"    stream {\n        server {\n            listen 8080;\n            proxy_pass 192.168.0.5:6379;\n            proxy_socket_keepalive on;\n            proxy_timeout 60m;\n            proxy_connect_timeout 60s;\n        }\n        server {\n            listen 8081;\n            proxy_pass 192.168.0.6:6379;\n            proxy_socket_keepalive on;\n            proxy_timeout 60m;\n            proxy_connect_timeout 60s;\n        }\n    }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default value of ",(0,t.jsx)(n.code,{children:"proxy\\timeout"})," is ",(0,t.jsx)(n.code,{children:"10m"}),". You can set it\nto ",(0,t.jsx)(n.code,{children:"60m"})," or other values as required. For details about this\nparameter, see ",(0,t.jsx)(n.a,{href:"http://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#",children:"the Nginx official website"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Timeout of a connection from the client to Nginx:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"    http {\n        keepalive_timeout 3600s;\n    }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default value of ",(0,t.jsx)(n.code,{children:"keepalive\\_timeout"})," is ",(0,t.jsx)(n.code,{children:"75s"}),". You can set\nit to ",(0,t.jsx)(n.code,{children:"3600s"})," or other values as required. For details about this\nparameter, see ",(0,t.jsx)(n.a,{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#http",children:"the Nginx official website"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-dcs-redis-instances-using-nginx",children:"Accessing DCS Redis Instances Using Nginx"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Log in to the ECS console and check the security group rules of the\nECS that serves as the jump server. Ensure that access over ports\n",(0,t.jsx)(n.code,{children:"8080"})," and ",(0,t.jsx)(n.code,{children:"8081"})," is allowed."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click the ECS name to go to the details page."}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.em,{children:"Security Groups"})," tab page, click ",(0,t.jsx)(n.em,{children:"Modify Security\nGroup Rule"}),". The security group configuration page is\ndisplayed."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 6 Checking the ECS security group",src:s(33196).A+"",width:"1740",height:"254"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 7 Adding an inbound rule for the security group",src:s(26725).A+"",width:"1788",height:"635"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the public network environment, open the ",(0,t.jsx)(n.strong,{children:"redis-cli"})," and run the\nfollowing command to check whether the login and query are\nsuccessful:"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Ensure that redis-cli has been installed in the public network\nenvironment by referring to\n",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/accessing_an_instance/accessing_a_dcs_redis_instance_through_redis-cli.html",children:"redis-cli"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"**./redis-cli -h** *{myeip}* **-p** *{port}* **-a** *{mypassword}*\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the preceding command, ",(0,t.jsx)(n.code,{children:"{myeip}"})," indicates the host connection\naddress, which should be replaced with the EIP of the ECS. Replace\n",(0,t.jsx)(n.code,{children:"{port}"})," with the listening port of Nginx."]}),"\n",(0,t.jsxs)(n.p,{children:["As shown in the following figures, the two listening ports are ",(0,t.jsx)(n.code,{children:"8080"}),"\nand ",(0,t.jsx)(n.code,{children:"8081"}),", which correspond to two DCS Redis instances."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 8 Accessing the first DCS Redis instance using Nginx",src:s(13554).A+"",width:"969",height:"208"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 9 Accessing the second DCS Redis instance using Nginx",src:s(23049).A+"",width:"970",height:"205"})}),"\n",(0,t.jsx)(n.p,{children:"The jump server has now been set up. You can access Redis over\npublic networks."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},33196:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001275281529-934199d28c95ce16c676874bd6deb93b.png"},26725:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001275484437-0855411de86fbf28b44d23ca3596fd01.png"},61181:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0245102971-9201fd3a7732836eb414c4ca90faacab.png"},88394:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0245105425-0c47ce40fe587262797fd0c3ee540998.png"},80396:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0245110151-6f7912284246badfa00777387fdff40b.png"},23049:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0245112233-9749fa178321a05b6103e4d2651c1d4a.png"},13554:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0245112317-f4336a0bcd87d58eeb9fe60a46a77472.png"},92889:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0245116251-64d182f0160f2bd32c561ba2f2e959dd.png"},22709:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0254645094-46236515adf0e27c40cbab6b13c88b34.png"},81447:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0267127015-76b50a83c2991b0a3664fa43ebe7f2eb.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(96540);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);