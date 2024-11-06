"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[21613],{30225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=s(74848),r=s(28453);const a={id:"routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer",title:"Routing Traffic to Backend Servers in the Same VPC as the Load Balancer",tags:["vpc","elb","load-balancing"]},t="Routing Traffic to Backend Servers in the Same VPC as the Load Balancer {#elb_bp_0303}",c={id:"best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer",title:"Routing Traffic to Backend Servers in the Same VPC as the Load Balancer",description:"elbbp0303}",source:"@site/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer.md",sourceDirName:"best-practices/networking/elastic-load-balancing",slug:"/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer",permalink:"/docs-next/pr-preview/pr-155/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer.md",tags:[{inline:!0,label:"vpc",permalink:"/docs-next/pr-preview/pr-155/docs/tags/vpc"},{inline:!0,label:"elb",permalink:"/docs-next/pr-preview/pr-155/docs/tags/elb"},{inline:!0,label:"load-balancing",permalink:"/docs-next/pr-preview/pr-155/docs/tags/load-balancing"}],version:"current",frontMatter:{id:"routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer",title:"Routing Traffic to Backend Servers in the Same VPC as the Load Balancer",tags:["vpc","elb","load-balancing"]},sidebar:"bestPracticesSidebar",previous:{title:"Using Advanced Forwarding for Application Iteration",permalink:"/docs-next/pr-preview/pr-155/docs/best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration"},next:{title:"Routing Traffic to Backend Servers in Different VPCs from the Load Balancer",permalink:"/docs-next/pr-preview/pr-155/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer"}},d={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedure",id:"procedure",level:3},{value:"Creating a VPC",id:"creating-a-vpc",level:2},{value:"Creating an ECS",id:"creating-an-ecs",level:2},{value:"Creating a Dedicated Load Balancer and Adding an HTTP Listener and a Backend Server Group to the Load Balancer",id:"creating-a-dedicated-load-balancer-and-adding-an-http-listener-and-a-backend-server-group-to-the-load-balancer",level:2},{value:"Adding the ECS to the Backend Server Group",id:"adding-the-ecs-to-the-backend-server-group",level:2},{value:"Verifying Traffic Routing",id:"verifying-traffic-routing",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"elb_bp_0303",children:"Routing Traffic to Backend Servers in the Same VPC as the Load Balancer"}),"\n",(0,i.jsx)(n.p,{children:"You can route traffic to backend servers in the VPC where the load\nbalancer is running."}),"\n",(0,i.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A dedicated load balancer ",(0,i.jsx)(n.code,{children:"ELB-Test"})," is running in a VPC named\n",(0,i.jsx)(n.code,{children:"vpc-Test"})," (",(0,i.jsx)(n.code,{children:"10.1.0.0/16"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["The backend server ",(0,i.jsx)(n.code,{children:"ECS-Test"})," is also running in ",(0,i.jsx)(n.code,{children:"vpc-Test"}),"\n(",(0,i.jsx)(n.code,{children:"10.1.0.0/16"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ECS-Test"})," needs to be added to the backend server group\nassociated with ",(0,i.jsx)(n.code,{children:"ELB-Test"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1 Adding a backend server in the same VPC as the load\nbalancer",src:s(29867).A+"",width:"656",height:"521"})}),"\n",(0,i.jsx)(n.admonition,{title:"Advantages",type:"note",children:(0,i.jsx)(n.p,{children:"You can add servers in the same VPC as the load balancer to the backend\nserver group of the load balancer and then route incoming traffic to the\nservers."})}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To calculate the fees you can visit Open Telekom Cloud ",(0,i.jsx)(n.a,{href:"https://open-telekom-cloud.com/en/prices/price-calculator",children:"Price\ncalculator"}),"."]})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Resource Type"}),(0,i.jsx)(n.th,{children:"Resource Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Quantity"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VPC"}),(0,i.jsx)(n.td,{children:"vpc-Test"}),(0,i.jsxs)(n.td,{children:["The VPC where ELB-Test and ECS-Test are running: ",(0,i.jsx)(n.code,{children:"10.1.0.0/16"})]}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ELB"}),(0,i.jsx)(n.td,{children:"ELB-Test"}),(0,i.jsx)(n.td,{children:"The dedicated load balancer named ELB-Test"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"EIP"}),(0,i.jsx)(n.td,{children:"EIP-Test"}),(0,i.jsx)(n.td,{children:"The EIP bound to ELB-Test"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsx)(n.td,{children:"ECS-Test"}),(0,i.jsx)(n.td,{children:"The ECS works in vpc-Test"}),(0,i.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 1"})," Resource planning"]}),"\n",(0,i.jsx)(n.h3,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 2 Process for adding backend servers in the same VPC as the\nload balancer",src:s(74328).A+"",width:"673",height:"570"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-vpc",children:"Creating a VPC"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.em,{children:"Networking"}),", select ",(0,i.jsx)(n.em,{children:"Virtual Private Cloud"}),". On the\n",(0,i.jsx)(n.em,{children:"Virtual Private Cloud"})," page displayed, click ",(0,i.jsx)(n.em,{children:"Create VPC"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the parameters as follows and click ",(0,i.jsx)(n.em,{children:"Create Now"}),". For\ndetails on how to create a VPC, see the ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html",children:"Virtual Private Cloud User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"vpc-Test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IPv4 CIDR Block"}),": ",(0,i.jsx)(n.code,{children:"10.1.0.0/16"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 3 Creating\nvpc-Test",src:s(13547).A+"",width:"1192",height:"621"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-ecs",children:"Creating an ECS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.em,{children:"Computing"}),", click ",(0,i.jsx)(n.em,{children:"Elastic Cloud Server"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the upper right corner, click ",(0,i.jsx)(n.em,{children:"Create ECS"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the parameters as required. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/overview.html",children:"Elastic\nCloud Server User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"vpc-Test"})," for VPC and set ",(0,i.jsx)(n.em,{children:"Name"})," to ",(0,i.jsx)(n.code,{children:"ECS-Test"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 6 Creating\nECS-Test",src:s(99728).A+"",width:"1020",height:"263"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deploy Nginx on the ECS."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 7 Deploying Nginx on\nECS-Test",src:s(68370).A+"",width:"1027",height:"386"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-dedicated-load-balancer-and-adding-an-http-listener-and-a-backend-server-group-to-the-load-balancer",children:"Creating a Dedicated Load Balancer and Adding an HTTP Listener and a Backend Server Group to the Load Balancer"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.em,{children:"Networking"}),", click ",(0,i.jsx)(n.em,{children:"Elastic Load Balance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the upper right corner, click ",(0,i.jsx)(n.em,{children:"Create Elastic Load Balancer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the parameters as follows. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html",children:"Elastic Load\nBalance User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"Dedicated"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IP as a Backend"}),": ",(0,i.jsx)(n.code,{children:"Enable"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VPC"}),": ",(0,i.jsx)(n.code,{children:"vpc-Test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"ELB-Test"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 8 Creating a dedicated load balancer named\nELB-Test",src:s(12024).A+"",width:"1495",height:"302"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add an HTTP listener and a backend server group to the created\ndedicated load balancer. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_an_http_listener.html",children:"Elastic Load Balance User\nGuide"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-the-ecs-to-the-backend-server-group",children:"Adding the ECS to the Backend Server Group"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the dedicated load balancer and click its name ",(0,i.jsx)(n.em,{children:"ELB-Test"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Listeners"})," tab page, locate the HTTP listener added to the\ndedicated load balancer and click its name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Backend Server Groups"})," tab on the right, click ",(0,i.jsx)(n.em,{children:"Add\nBackend Server"}),", configure the parameters, and click ",(0,i.jsx)(n.em,{children:"OK"}),". For\ndetails, see ",(0,i.jsx)(n.em,{children:"Elastic Load Balance User Guide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backend Server"}),": ",(0,i.jsx)(n.code,{children:"ECS-Test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backend Port"}),": the port enabled for Nginx on ",(0,i.jsx)(n.code,{children:"ECS-Test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Weight"}),": Configure this parameter as required."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 9 Adding IP as backend\nservers",src:s(22591).A+"",width:"900",height:"374"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"verifying-traffic-routing",children:"Verifying Traffic Routing"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"EIP is not necessary as long as you don't want to access the ELB\nexternally, you can always access the ELB from its private IP."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the dedicated load balancer ",(0,i.jsx)(n.em,{children:"ELB-Test"})," and click ",(0,i.jsx)(n.em,{children:"More"}),"\nin the ",(0,i.jsx)(n.em,{children:"Operation"})," column."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"Bind IPv4 EIP"})," to bind an EIP to ",(0,i.jsx)(n.code,{children:"ELB-Test"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 10 EIP bound to the load\nbalancer",src:s(95778).A+"",width:"1495",height:"302"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"http://<EIP>"})," in the address box of your browser to\naccess the dedicated load balancer. If the following page is\ndisplayed, the load balancer routes the request to ",(0,i.jsx)(n.code,{children:"ECS-Test"}),",\nwhich processes the request and returns the requested page."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"In case of unhealthy connection of the backend server group, check\nif the ECS subnet and ELB subnet are associated with the above\ncreated route tables."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 11 Verifying traffic\nrouting",src:s(67286).A+"",width:"1168",height:"699"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},99728:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625299518-b0454f56094e741f720121090322ba5c.png"},13547:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625459326-5aaa62034a5e2cafcdfd0077db7cf0eb.png"},67286:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625459334-5bad38b7305ce0454e8f68ea28df4ef6.png"},29867:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625619218-83d33d04b610fa59867d666153ed91b3.png"},68370:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625619246-741946f483921ee537290435b4a18c96.png"},12024:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001673939093-2dda02ceb01b03805cd845e5018eda7f.png"},74328:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674059073-7a35c808f8ffb70988af7b5380cdb198.png"},22591:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674059081-bcab3ff78b7bd0989fff34661072fc7f.png"},95778:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674259073-1b535464a0c65f080849e88518812849.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);