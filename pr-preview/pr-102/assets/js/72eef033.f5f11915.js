"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[83886],{93179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=s(74848),r=s(28453);const t={id:"routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer",title:"Routing Traffic to Backend Servers in Different VPCs from the Load Balancer",tags:["vpc","elb","load-balancing"]},c="Routing Traffic to Backend Servers in Different VPCs from the Load Balancer {#elb_bp_0302}",d={id:"best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer",title:"Routing Traffic to Backend Servers in Different VPCs from the Load Balancer",description:"elbbp0302}",source:"@site/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer.md",sourceDirName:"best-practices/networking/elastic-load-balancing",slug:"/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer",permalink:"/docs-next/pr-preview/pr-102/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer",draft:!1,unlisted:!1,editUrl:"https://github.com/akyriako/docs-next/tree/main/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer.md",tags:[{inline:!0,label:"vpc",permalink:"/docs-next/pr-preview/pr-102/docs/tags/vpc"},{inline:!0,label:"elb",permalink:"/docs-next/pr-preview/pr-102/docs/tags/elb"},{inline:!0,label:"load-balancing",permalink:"/docs-next/pr-preview/pr-102/docs/tags/load-balancing"}],version:"current",frontMatter:{id:"routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer",title:"Routing Traffic to Backend Servers in Different VPCs from the Load Balancer",tags:["vpc","elb","load-balancing"]},sidebar:"bestPracticesSidebar",previous:{title:"Routing Traffic to Backend Servers in the Same VPC as the Load Balancer",permalink:"/docs-next/pr-preview/pr-102/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer"},next:{title:"Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet",permalink:"/docs-next/pr-preview/pr-102/docs/best-practices/networking/nat-gateway/using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet"}},a={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedure",id:"procedure",level:3},{value:"Creating VPCs",id:"creating-vpcs",level:2},{value:"Creating a VPC Peering Connection",id:"creating-a-vpc-peering-connection",level:2},{value:"Adding Routes for the VPC Peering Connection",id:"adding-routes-for-the-vpc-peering-connection",level:2},{value:"Creating an ECS",id:"creating-an-ecs",level:2},{value:"Creating a Dedicated Load Balancer and Adding an HTTP Listener and a Backend Server Group to the Load Balancer",id:"creating-a-dedicated-load-balancer-and-adding-an-http-listener-and-a-backend-server-group-to-the-load-balancer",level:2},{value:"Adding the ECS to the Backend Server Group",id:"adding-the-ecs-to-the-backend-server-group",level:2},{value:"Verifying Traffic Routing",id:"verifying-traffic-routing",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"elb_bp_0302",children:"Routing Traffic to Backend Servers in Different VPCs from the Load Balancer"}),"\n",(0,i.jsx)(n.p,{children:"You can use ELB to route traffic to backend servers in two VPCs\nconnected over a VPC peering connection."}),"\n",(0,i.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A dedicated load balancer named ",(0,i.jsx)(n.code,{children:"ELB-Test"})," is running in\n",(0,i.jsx)(n.code,{children:"VPC-Test-01"})," (",(0,i.jsx)(n.code,{children:"172.18.0.0/24"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["An ECS named ",(0,i.jsx)(n.code,{children:"ECS-Test"})," is running in ",(0,i.jsx)(n.code,{children:"VPC-Test-02"}),"\n(",(0,i.jsx)(n.code,{children:"172.17.0.0/24"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"IP as a Backend"})," is enabled for the dedicated load balancer\n",(0,i.jsx)(n.code,{children:"ELB-Test"}),", and ",(0,i.jsx)(n.code,{children:"ECS-Test"})," in ",(0,i.jsx)(n.code,{children:"VPC-Test-02"})," (",(0,i.jsx)(n.code,{children:"172.17.0.0/24"}),") is\nadded to the backend server group associated with ",(0,i.jsx)(n.code,{children:"ELB-Test"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1\nTopology",src:s(62869).A+"",width:"1101",height:"518"})}),"\n",(0,i.jsx)(n.admonition,{title:"Advantages",type:"note",children:(0,i.jsxs)(n.p,{children:["You can enable ",(0,i.jsx)(n.code,{children:"IP as a Backend"})," for the dedicated load balancer to\nroute incoming traffic to servers in different VPCs from the load\nbalancer."]})}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Resource Type"}),(0,i.jsx)(n.th,{children:"Resource Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Quantity"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VPC"}),(0,i.jsx)(n.td,{children:"VPC-Test-01"}),(0,i.jsxs)(n.td,{children:["The VPC where ELB-Test is running: ",(0,i.jsx)(n.code,{children:"172.18.0.0/24"})]}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"VPC-Test-02"}),(0,i.jsxs)(n.td,{children:["The VPC where ECS-Test is running: ",(0,i.jsx)(n.code,{children:"172.17.0.0/24"})]}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VPC peering connection"}),(0,i.jsx)(n.td,{children:"Peering-Test"}),(0,i.jsxs)(n.td,{children:["The connection that connects the VPC where ELB-Test is running and the VPC where ECS-Test is running Local VPC: ",(0,i.jsx)(n.code,{children:"172.18.0.0/24"})," Peer VPC: ",(0,i.jsx)(n.code,{children:"172.17.0.0/24"})]}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Route table"}),(0,i.jsx)(n.td,{children:"Route-VPC-Test-01"}),(0,i.jsxs)(n.td,{children:["The route table of VPC-Test-01 Destination: ",(0,i.jsx)(n.code,{children:"172.17.0.0/24"})]}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Route-VPC-Test-02"}),(0,i.jsxs)(n.td,{children:["The route table of VPC-Test-02 Destination: ",(0,i.jsx)(n.code,{children:"172.18.0.0/24"})]}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ELB"}),(0,i.jsx)(n.td,{children:"ELB-Test"}),(0,i.jsx)(n.td,{children:"The dedicated load balancer"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"EIP"}),(0,i.jsx)(n.td,{children:"EIP-Test"}),(0,i.jsx)(n.td,{children:"The EIP bound to ELB-Test"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsx)(n.td,{children:"ECS-Test"}),(0,i.jsx)(n.td,{children:"The ECS works in VPC-Test-02"}),(0,i.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 1"})," Resource planning"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To calculate the fees you can visit Open Telekom Cloud ",(0,i.jsx)(n.a,{href:"https://open-telekom-cloud.com/en/prices/price-calculator",children:"Price\ncalculator"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 2 Process of associating servers in a VPC that is different\nfrom the dedicated load\nbalancer",src:s(78768).A+"",width:"595",height:"565"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-vpcs",children:"Creating VPCs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.em,{children:"Networking"}),", select ",(0,i.jsx)(n.em,{children:"Virtual Private Cloud"}),". On the\n",(0,i.jsx)(n.em,{children:"Virtual Private Cloud"})," page displayed, click ",(0,i.jsx)(n.em,{children:"Create VPC"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the parameters as follows and click ",(0,i.jsx)(n.em,{children:"Create Now"}),". For\ndetails on how to create a VPC, see the ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html",children:"Virtual Private Cloud User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"VPC-Test-01"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IPv4 CIDR Block"}),": ",(0,i.jsx)(n.code,{children:"172.18.0.0/24"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 3 Creating\nVPC-Test-01",src:s(58641).A+"",width:"1212",height:"442"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Repeat steps 2 & 3 to create the other VPC."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"VPC-Test-02"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IPv4 CIDR Block"}),": ",(0,i.jsx)(n.code,{children:"172.17.0.0/24"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 4 Creating\nVPC-Test-02",src:s(92027).A+"",width:"962",height:"172"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-vpc-peering-connection",children:"Creating a VPC Peering Connection"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the navigation pane on the left, click ",(0,i.jsx)(n.em,{children:"VPC Peering"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the upper right corner, click ",(0,i.jsx)(n.em,{children:"Create VPC Peering Connection"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the parameters as follows and click ",(0,i.jsx)(n.em,{children:"OK"}),". For details on\nhow to create a VPC peering connection, see the ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/creating_a_vpc_peering_connection_with_another_vpc_in_your_account.html",children:"Virtual Private\nCloud User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"Peering-Test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Local VPC"}),": ",(0,i.jsx)(n.code,{children:"VPC-Test-01"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Peer VPC"}),": ",(0,i.jsx)(n.code,{children:"VPC-Test-02"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 5 Creating\nPeering-Test",src:s(56669).A+"",width:"609",height:"691"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-routes-for-the-vpc-peering-connection",children:"Adding Routes for the VPC Peering Connection"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the navigation pane on the left, click ",(0,i.jsx)(n.em,{children:"Route Tables"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the upper right corner, click ",(0,i.jsx)(n.em,{children:"Create Route Table"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the parameters as follows and click ",(0,i.jsx)(n.em,{children:"OK"}),". For details on\nhow to create a route table, see the ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/route_tables/creating_a_custom_route_table.html",children:"Virtual Private Cloud User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"Route-VPC-Test-01"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VPC"}),": ",(0,i.jsx)(n.code,{children:"VPC-Test-01"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Destination"}),": ",(0,i.jsx)(n.code,{children:"172.17.0.0/24"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Next Hop Type"}),": ",(0,i.jsx)(n.code,{children:"VPC peering connection"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Next Hop"}),": ",(0,i.jsx)(n.code,{children:"Peering-Test"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 6 Creating\nRoute-VPC-Test-01",src:s(78504).A+"",width:"900",height:"642"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Repeat steps 2 & 3 to create the other route table."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"Route-VPC-Test-02"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VPC"}),": ",(0,i.jsx)(n.code,{children:"VPC-Test-02"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Destination"}),": ",(0,i.jsx)(n.code,{children:"172.18.0.0/24"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Next Hop Type"}),": ",(0,i.jsx)(n.code,{children:"VPC peering connection"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Next Hop"}),": ",(0,i.jsx)(n.code,{children:"Peering-Test"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-ecs",children:"Creating an ECS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.em,{children:"Computing"}),", click ",(0,i.jsx)(n.em,{children:"Elastic Cloud Server"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the upper right corner, click ",(0,i.jsx)(n.em,{children:"Create ECS"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"VPC-Test-02"})," as the ",(0,i.jsx)(n.em,{children:"VPC"})," and set ",(0,i.jsx)(n.em,{children:"ECS Name"})," to\n",(0,i.jsx)(n.code,{children:"ECS-Test"}),". Configure other parameters as required. For details,\nsee ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/overview.html",children:"Elastic Cloud Server User\nGuide"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 7 Creating\nECS-Test",src:s(16055).A+"",width:"1144",height:"219"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deploy Nginx on the ECS."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 8 Deploying Nginx on\nECS-Test",src:s(97905).A+"",width:"1031",height:"400"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-dedicated-load-balancer-and-adding-an-http-listener-and-a-backend-server-group-to-the-load-balancer",children:"Creating a Dedicated Load Balancer and Adding an HTTP Listener and a Backend Server Group to the Load Balancer"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.em,{children:"Networking"}),", click ",(0,i.jsx)(n.em,{children:"Elastic Load Balance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the upper right corner, click ",(0,i.jsx)(n.em,{children:"Create Elastic Load Balancer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the parameters as follows. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html",children:"Elastic Load\nBalance User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"Dedicated"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IP as a Backend"}),": ",(0,i.jsx)(n.code,{children:"Enable"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VPC"}),": ",(0,i.jsx)(n.code,{children:"VPC-Test-01"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"ELB-Test"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 9 Creating\nELB-Test",src:s(76009).A+"",width:"1493",height:"331"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add an HTTP listener and a backend server group to the dedicated\nload balancer. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_an_http_listener.html",children:"Elastic Load Balance User\nGuide"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 10 HTTP listener and backend server\ngroup",src:s(12903).A+"",width:"1210",height:"400"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-the-ecs-to-the-backend-server-group",children:"Adding the ECS to the Backend Server Group"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the created dedicated load balancer and click its name\n",(0,i.jsx)(n.em,{children:"ELB-Test"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Listeners"})," tab page, locate the HTTP listener added to the\ndedicated load balancer and click its name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Backend Server Groups"})," tab on the right, click ",(0,i.jsx)(n.em,{children:"IP as\nBackend Servers"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 11 IP as backend\nservers",src:s(8277).A+"",width:"1191",height:"782"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"Add IP as Backend Server"}),", configure the parameters, and\nclick ",(0,i.jsx)(n.em,{children:"OK"}),". For details, see ",(0,i.jsx)(n.em,{children:"Elastic Load Balance User Guide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backend Server IP Address"}),": Private IP address of\n",(0,i.jsx)(n.code,{children:"ECS-Test"})," (",(0,i.jsx)(n.code,{children:"172.17.0.205"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backend Port"}),": the port enabled for Nginx on ",(0,i.jsx)(n.code,{children:"ECS-Test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Weight"}),": Set this parameter as required."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 12 Adding ECS-Test using its IP\naddress",src:s(74279).A+"",width:"700",height:"436"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"verifying-traffic-routing",children:"Verifying Traffic Routing"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"EIP is not necessary as long as you don't want to access the ELB\nexternally, you can always access the ELB from its private IP."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the dedicated load balancer ",(0,i.jsx)(n.em,{children:"ELB-Test"})," and click ",(0,i.jsx)(n.em,{children:"More"}),"\nin the ",(0,i.jsx)(n.em,{children:"Operation"})," column."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"Bind IPv4 EIP"})," to bind an EIP to ",(0,i.jsx)(n.code,{children:"ELB-Test"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 13 EIP bound to the load\nbalancer",src:s(3699).A+"",width:"1495",height:"302"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"http://<EIP>"})," in the address box of your browser to\naccess the dedicated load balancer. If the following page is\ndisplayed, the load balancer routes the request to ",(0,i.jsx)(n.code,{children:"ECS-Test"}),",\nwhich processes the request and returns the requested page."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"In case of unhealthy connection of the backend server group, check\nif the ECS subnet and ELB subnet are associated with the above\ncreated route tables."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 14 Verifying that the request is routed to\nECS-Test",src:s(98213).A+"",width:"1240",height:"572"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},78504:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625299482-70fc8c0e12d8757dc22828c89da1dcbc.png"},98213:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625299490-3739996f41d134eab973836b2cebdf4a.png"},58641:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625459302-8d9240400ca4dd3c43272335cca9ccf2.png"},8277:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625459306-c9fc6ccd15f5651494a75db21707427a.png"},16055:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625619214-0f5ed67553825decbc241274ff7cf715.png"},56669:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625779198-4797a6390aa4aaca6c50e800533a0318.png"},3699:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001625779202-2dda02ceb01b03805cd845e5018eda7f.png"},97905:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001673939081-1575d63a0a65ea45a334fa128ab05017.png"},62869:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674059065-52c74702ca439b1c11c71d8883e29750.png"},76009:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674059069-d4e293cee23a4eef178c3af0f1c0054d.png"},92027:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674139185-f16d36dd6b9d203eb4df8cb4344e21e9.png"},74279:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674139189-9f7248ad988ccfe327ef9293167dfa6e.png"},78768:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674259057-cd243861964f904afe3c1ce74918010e.png"},12903:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001674259061-e067652c08047b1393be8e8e2a164c8e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(96540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);