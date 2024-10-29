"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[386],{36795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const o={id:"vpc-and-subnet-planning-suggestions",title:"VPC and Subnet Planning Suggestions",tags:["vpc"]},a="VPC and Subnet Planning Suggestions",r={id:"best-practices/networking/virtual-private-cloud/vpc-and-subnet-planning-suggestions",title:"VPC and Subnet Planning Suggestions",description:"Before creating your VPCs, determine how many VPCs, the number of",source:"@site/docs/best-practices/networking/virtual-private-cloud/vpc-and-subnet-planning-suggestions.md",sourceDirName:"best-practices/networking/virtual-private-cloud",slug:"/best-practices/networking/virtual-private-cloud/vpc-and-subnet-planning-suggestions",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/networking/virtual-private-cloud/vpc-and-subnet-planning-suggestions",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/networking/virtual-private-cloud/vpc-and-subnet-planning-suggestions.md",tags:[{inline:!0,label:"vpc",permalink:"/docs-next/pr-preview/pr-153/docs/tags/vpc"}],version:"current",frontMatter:{id:"vpc-and-subnet-planning-suggestions",title:"VPC and Subnet Planning Suggestions",tags:["vpc"]},sidebar:"bestPracticesSidebar",previous:{title:"Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/networking/nat-gateway/using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet"},next:{title:"Unsupported VPC Peering Configurations",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/networking/virtual-private-cloud/unsupported-vpc-peering-configurations"}},c={},l=[{value:"How Do I Determine How Many VPCs I Need?",id:"how-do-i-determine-how-many-vpcs-i-need",level:2},{value:"One VPC",id:"one-vpc",level:4},{value:"Multiple VPCs",id:"multiple-vpcs",level:4},{value:"How Do I Plan Subnets?",id:"how-do-i-plan-subnets",level:2},{value:"How Do I Plan Routing Policies?",id:"how-do-i-plan-routing-policies",level:2},{value:"How Do I Connect to an On-Premises Data Center?",id:"how-do-i-connect-to-an-on-premises-data-center",level:2},{value:"How Do I Access the Internet?",id:"how-do-i-access-the-internet",level:2},{value:"Use EIPs to enable a small number of ECSs to access the Internet",id:"use-eips-to-enable-a-small-number-of-ecss-to-access-the-internet",level:3},{value:"Use a NAT gateway to enable a large number of ECSs to access the Internet",id:"use-a-nat-gateway-to-enable-a-large-number-of-ecss-to-access-the-internet",level:3},{value:"Use ELB to access the Internet If there are a large number of concurrent requests",id:"use-elb-to-access-the-internet-if-there-are-a-large-number-of-concurrent-requests",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vpc-and-subnet-planning-suggestions",children:"VPC and Subnet Planning Suggestions"}),"\n",(0,s.jsx)(n.p,{children:"Before creating your VPCs, determine how many VPCs, the number of\nsubnets, and what IP address ranges or connectivity options you will\nneed."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#vpc-and-subnet-planning-suggestions",children:"VPC and Subnet Planning Suggestions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#how-do-i-determine-how-many-vpcs-i-need",children:"How Do I Determine How Many VPCs I Need?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#one-vpc",children:"One VPC"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#multiple-vpcs",children:"Multiple VPCs"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#how-do-i-plan-subnets",children:"How Do I Plan Subnets?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#how-do-i-plan-routing-policies",children:"How Do I Plan Routing Policies?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#how-do-i-connect-to-an-on-premises-data-center",children:"How Do I Connect to an On-Premises Data Center?"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#how-do-i-access-the-internet",children:"How Do I Access the Internet?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#use-eips-to-enable-a-small-number-of-ecss-to-access-the-internet",children:"Use EIPs to enable a small number of ECSs to access the Internet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#use-a-nat-gateway-to-enable-a-large-number-of-ecss-to-access-the-internet",children:"Use a NAT gateway to enable a large number of ECSs to access the Internet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#use-elb-to-access-the-internet-if-there-are-a-large-number-of-concurrent-requests",children:"Use ELB to access the Internet If there are a large number of concurrent requests"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#additional-resources",children:"Additional Resources"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-do-i-determine-how-many-vpcs-i-need",children:"How Do I Determine How Many VPCs I Need?"}),"\n",(0,s.jsx)(n.p,{children:"VPCs are region-specific. By default, networks in VPCs in different\nregions or even in the same region are not connected."}),"\n",(0,s.jsx)(n.h4,{id:"one-vpc",children:"One VPC"}),"\n",(0,s.jsx)(n.p,{children:"If your services do not require network isolation, a single VPC\nshould be enough."}),"\n",(0,s.jsx)(n.h4,{id:"multiple-vpcs",children:"Multiple VPCs"}),"\n",(0,s.jsx)(n.p,{children:"If you have multiple service systems in a region and each service system\nrequires an isolated network, you can create a separate VPC for each\nservice system."}),"\n",(0,s.jsx)(n.p,{children:"If you require network connectivity between separate VPCs in the same\naccount or in different accounts, you can use VPC peering connections or\nCloud Connect."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If two VPCs are in the same region, use a ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/vpc_peering_connection_overview.html",children:"VPC peering\nconnection"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["By default, you can create a ",(0,s.jsx)(n.strong,{children:"maximum of five VPCs in each region"}),". If\nthis cannot meet your service requirements, request a quota increase.\nFor details, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/faq/general_questions/what_is_a_quota.html",children:"How Do I Apply for a Higher\nQuota?"})]})}),"\n",(0,s.jsx)(n.p,{children:"The following table lists the private CIDR blocks that you can specify\nwhen creating a VPC. Consider the following when selecting a VPC CIDR\nblock:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Number of IP addresses: Reserve sufficient IP addresses in case of\nbusiness growth."}),"\n",(0,s.jsx)(n.li,{children:"IP address range: Avoid IP address conflicts if you need to connect\na VPC to an on-premises data center or connect two VPCs."}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"VPC CIDR Block  Addresses"}),(0,s.jsx)(n.th,{children:"IP Address Range"}),(0,s.jsx)(n.th,{children:"Maximum Number IP"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10.0.0.0/8-24"}),(0,s.jsx)(n.td,{children:"10.0.0.0-10.255.255.255"}),(0,s.jsx)(n.td,{children:"2^24-2=16777214"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"172.16.0.0/12-24"}),(0,s.jsx)(n.td,{children:"172.16.0.0-172.31.255.255"}),(0,s.jsx)(n.td,{children:"2^20-2=1048574"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"192.168.0.0/16-24"}),(0,s.jsx)(n.td,{children:"192.168.0.0-192.168.255.255"}),(0,s.jsx)(n.td,{children:"2^16-2=65534"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[": ",(0,s.jsx)(n.strong,{children:"Table 1"})," VPC CIDR blocks"]}),"\n",(0,s.jsx)(n.h2,{id:"how-do-i-plan-subnets",children:"How Do I Plan Subnets?"}),"\n",(0,s.jsx)(n.p,{children:"A subnet is a unique CIDR block with a range of IP addresses in a VPC.\nAll resources in a VPC must be deployed on subnets."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"By default, all instances in different subnets of the same VPC can\ncommunicate with each other and the subnets can be located in\ndifferent AZs. For example, VPC-A has subnet A01 in AZ A and subnet\nA02 in AZ B. Subnet A01 and subnet B01 can communicate with each\nother by default."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After a subnet is created, its CIDR block cannot be modified.\nSubnets in the same VPC cannot overlap."}),"\n",(0,s.jsxs)(n.p,{children:["When you create a VPC, a default subnet will be created together. If\nyou need more subnets, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/subnet/creating_a_subnet_for_the_vpc.html",children:"Creating a Subnet for the\nVPC"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A subnet mask can be between the netmask of its VPC CIDR block and\n/28 netmask. If a VPC CIDR block is 10.0.0.0/16, its subnet mask can\nbetween 16 to 28."}),"\n",(0,s.jsx)(n.p,{children:"For example, if the CIDR block of VPC-A is 10.0.0.0/16, you can\nspecify 10.0.0.0/24 for subnet A01, 10.0.1.0/24 for subnet A02, and\n10.0.3.0/24 for subnet A03."}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["By default, you can create a ",(0,s.jsx)(n.strong,{children:"maximum of 100 subnets in each region"}),".\nIf this cannot meet your service requirements, request a quota\nincrease by referring to ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/faq/general_questions/what_is_a_quota.html",children:"How Do I Apply for a Higher\nQuota?"})]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When planning subnets, consider the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You create different subnets for different modules in a VPC. For\nexample, in VPC-A, you can create subnet A01 for web services,\nsubnet A02 for management services, and subnet A03 for data\nservices. You can leverage network ACLs to control access to each\nsubnet."}),"\n",(0,s.jsx)(n.li,{children:"If your VPC needs to communicate with an on-premises data center\nthrough VPN or Direct Connect, ensure that the VPC subnet and the\nCIDR block used for communication in the data center do not overlap."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-do-i-plan-routing-policies",children:"How Do I Plan Routing Policies?"}),"\n",(0,s.jsx)(n.p,{children:"When you create a VPC, the system automatically generates a default\nroute table for the VPC. If you create a subnet in the VPC, the subnet\nautomatically associates with the default route table. A route table\ncontains a set of routes that are used to determine where network\ntraffic from your subnets in a VPC is directed. The default route table\nensures that subnets in a VPC can communicate with each other."}),"\n",(0,s.jsx)(n.p,{children:"If you do not want to use the default route table, you can now create a\ncustom route table and associate it with the subnets. The custom route\ntable associated with a subnet affects only the outbound traffic. The\ndefault route table controls the inbound traffic."}),"\n",(0,s.jsx)(n.p,{children:"You can add routes to default and custom route tables and configure the\ndestination, next hop type, and next hop in the routes to determine\nwhere network traffic is directed. Routes are classified into system\nroutes and custom routes."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"System routes"}),": Routes that are automatically added by the system and\ncannot be modified or deleted. System routes allow instances in a\nVPC to communicate with each other."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Custom routes"}),": Routes that can be modified and deleted. The\ndestination of a custom route cannot overlap with that of a system\nroute."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"You cannot add two routes with the same destination to a VPC route\ntable even if their next hop types are different, because the\ndestination determines the route priority. According to the longest\nmatch routing rule, the destination with a higher matching degree is\npreferentially selected for packet forwarding."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-do-i-connect-to-an-on-premises-data-center",children:"How Do I Connect to an On-Premises Data Center?"}),"\n",(0,s.jsx)(n.p,{children:"If you require interconnection between a VPC and an on-premises data\ncenter, ensure that the VPC does not have an overlapping IP address\nrange with the on-premises data center to be connected."}),"\n",(0,s.jsx)(n.p,{children:"As shown in below, you have VPC 1 in region A and VPC 2 and VPC 3 in region B.\nTo connect to an on-premises data center, they can use a VPN, as VPC 1\ndoes in Region A; or a Direct Connect connection, as VPC 2 does in\nRegion B. VPC 2 connects to the data center through a Direct Connect\nconnection, but to connect to another VPC in that region, like VPC 3, a\nVPC peering connection must be established."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 1 Connections to on-premises data\ncenters",src:t(32297).A+"",width:"1126",height:"599"})}),"\n",(0,s.jsx)(n.p,{children:"When planning CIDR blocks for VPC 1, VPC 2, and VPC 3:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The CIDR block of VPC 1 cannot overlap with the CIDR block of the\non-premises data center in Region A."}),"\n",(0,s.jsx)(n.li,{children:"The CIDR block of VPC 2 cannot overlap with the CIDR block of the\non-premises data center in Region B."}),"\n",(0,s.jsx)(n.li,{children:"The CIDR blocks of VPC 2 and VPC 3 cannot overlap."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-do-i-access-the-internet",children:"How Do I Access the Internet?"}),"\n",(0,s.jsx)(n.h3,{id:"use-eips-to-enable-a-small-number-of-ecss-to-access-the-internet",children:"Use EIPs to enable a small number of ECSs to access the Internet"}),"\n",(0,s.jsx)(n.p,{children:"When only a few ECSs need to access the Internet, you can bind the EIPs\nto the ECSs. This will provide them with Internet access. You can also\ndynamically unbind the EIPs from the ECSs and bind them to NAT gateways\nand load balancers instead, which will also provide Internet access. The\nprocess is not complicated."}),"\n",(0,s.jsxs)(n.p,{children:["For more information about EIP, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-ip/umn/service_overview/index.html",children:"EIP\nOverview"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"use-a-nat-gateway-to-enable-a-large-number-of-ecss-to-access-the-internet",children:"Use a NAT gateway to enable a large number of ECSs to access the Internet"}),"\n",(0,s.jsx)(n.p,{children:"When a large number of ECSs need to access the Internet, the public\ncloud provides NAT gateways for your ECSs. With NAT gateways, you do not\nneed to assign an EIP to each ECS. NAT gateways reduce costs as you do\nnot need so many EIPs. NAT gateways offer both source network address\ntranslation (SNAT) and destination network address translation (DNAT).\nSNAT allows multiple ECSs in the same VPC to share one or more EIPs to\naccess the Internet. SNAT prevents the EIPs of ECSs from being exposed\nto the Internet. DNAT can implement port-level data forwarding. It maps\nEIP ports to ECS ports so that the ECSs in a VPC can share the same EIP\nand bandwidth to provide Internet-accessible services."}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/nat-gateway/umn/",children:"NAT Gateway User\nGuide"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"use-elb-to-access-the-internet-if-there-are-a-large-number-of-concurrent-requests",children:"Use ELB to access the Internet If there are a large number of concurrent requests"}),"\n",(0,s.jsx)(n.p,{children:"In high-concurrency scenarios, such as e-commerce, you can use load\nbalancers provided by the ELB service to evenly distribute incoming\ntraffic across multiple ECSs, allowing a large number of users to\nconcurrently access your business system or application. ELB is deployed\nin the cluster mode. It provides fault tolerance for your applications\nby automatically balancing traffic across multiple AZs. You can also\ntake advantage of deep integration with Auto Scaling (AS), which enables\nautomatic scaling based on service traffic and ensures service stability\nand reliability."}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/",children:"Elastic Load Balance User\nGuide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsx)(n.admonition,{title:"See Also",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/service_overview/application_scenarios.html",children:"Application Scenarios"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://support.huaweicloud.com/intl/en-us/bestpractice-vpc/bestpractice_0007.html",children:"Private Network Access"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://support.huaweicloud.com/intl/en-us/bestpractice-vpc/bestpractice_0004.html",children:"Public Network Access"})}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},32297:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0287297889-c6e3dcfe9ab4c72107fdc2b1b04af081.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);