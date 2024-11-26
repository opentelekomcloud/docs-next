"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[42655],{53466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(74848),s=t(28453);const r={id:"unsupported-vpc-peering-configurations",title:"Unsupported VPC Peering Configurations",tags:["vpc","vpc-peering"]},o="Unsupported VPC Peering Configurations",c={id:"best-practices/networking/virtual-private-cloud/unsupported-vpc-peering-configurations",title:"Unsupported VPC Peering Configurations",description:"Scenarios",source:"@site/docs/best-practices/networking/virtual-private-cloud/unsupported-vpc-peering-configurations.md",sourceDirName:"best-practices/networking/virtual-private-cloud",slug:"/best-practices/networking/virtual-private-cloud/unsupported-vpc-peering-configurations",permalink:"/docs-next/pr-preview/pr-169/docs/best-practices/networking/virtual-private-cloud/unsupported-vpc-peering-configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/networking/virtual-private-cloud/unsupported-vpc-peering-configurations.md",tags:[{inline:!0,label:"vpc",permalink:"/docs-next/pr-preview/pr-169/docs/tags/vpc"},{inline:!0,label:"vpc-peering",permalink:"/docs-next/pr-preview/pr-169/docs/tags/vpc-peering"}],version:"current",frontMatter:{id:"unsupported-vpc-peering-configurations",title:"Unsupported VPC Peering Configurations",tags:["vpc","vpc-peering"]},sidebar:"bestPracticesSidebar",previous:{title:"VPC and Subnet Planning Suggestions",permalink:"/docs-next/pr-preview/pr-169/docs/best-practices/networking/virtual-private-cloud/vpc-and-subnet-planning-suggestions"},next:{title:"Connecting Multiple On-Premises Branch Networks Through a VPN Hub",permalink:"/docs-next/pr-preview/pr-169/docs/best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub"}},a={},d=[{value:"Scenarios",id:"scenarios",level:2},{value:"Notes and Constraints",id:"notes-and-constraints",level:2},{value:"Invalid VPC Peering for Overlapping VPC CIDR Blocks",id:"invalid-vpc-peering-for-overlapping-vpc-cidr-blocks",level:2},{value:"Invalid VPC Peering for Sharing an EIP",id:"invalid-vpc-peering-for-sharing-an-eip",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"unsupported-vpc-peering-configurations",children:"Unsupported VPC Peering Configurations"}),"\n",(0,i.jsx)(n.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,i.jsx)(n.p,{children:"The VPC peering connection configurations are not supported in table below:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Scenario"}),(0,i.jsx)(n.th,{children:"Example"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"If VPCs with the same CIDR block also include subnets that overlap, VPC peering connections are not usable. If two VPCs have overlapping CIDR blocks but some of their subnets do not overlap, you cannot create a VPC peering connection to connect specific subnets that do not overlap."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"#invalid-vpc-peering-for-overlapping-vpc-cidr-blocks",children:"Invalid VPC Peering for Overlapping"}),": VPC CIDR Blocks VPCs with the same CIDR block also include subnets that overlap. Two VPCs have overlapping CIDR blocks but some of their subnets do not overlap."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VPC peering connections cannot enable ECSs in their VPCs to share an EIP to access the Internet. If VPC-A and VPC-B are peered and ECS-A01 in VPC-A has an EIP, ECS-B01 in VPC-B cannot access the Internet using the EIP bound to ECS-A01."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#invalid-vpc-peering-for-sharing-an-eip",children:"Invalid VPC Peering for Sharing an EIP"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 1"})," Scenarios that VPC peering connections are invalid"]}),"\n",(0,i.jsx)(n.h2,{id:"notes-and-constraints",children:"Notes and Constraints"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the ECSs in VPCs connected by a VPC peering connections are in\ndifferent security groups, you need to add rules to the security\ngroups to allow access to each other. For details, ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/access_control/security_group/security_group_configuration_examples.html#en-us-topic-0081124350",children:"Enabling ECSs in\nDifferent Security Groups to Communicate with Each Other Through an\nInternal\nNetwork"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"In all examples in this section, the ECSs in local and peer VPCs are\nin the same security group. No additional security group rule is\nrequired."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Each route table of a VPC can have a maximum of 200 routes. If you\nwant to establish VPC peering connections between multiple VPCs,\nconsider this restriction when planning networking."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In a VPC route table, the route priority is as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Local route: A route that is automatically added by the system\nfor communication within a VPC. It has a higher priority than a\ncustom route."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom route: A route added by a user. It uses the longest\nprefix match rule to find a destination for packet forwarding."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image1",src:t(58974).A+"",width:"1810",height:"551"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"invalid-vpc-peering-for-overlapping-vpc-cidr-blocks",children:"Invalid VPC Peering for Overlapping VPC CIDR Blocks"}),"\n",(0,i.jsx)(n.p,{children:"If two VPCs have overlapping CIDR blocks, the VPC peering connection may\nnot take effect due to route conflicts. The following describes the\nreasons and configuration suggestions."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"VPCs with the same CIDR block also include subnets that overlap."}),"\n",(0,i.jsxs)(n.p,{children:["VPC peering connections are not usable. As shown in\n",(0,i.jsx)(n.strong,{children:"Table 2"}),", VPC-A and\nVPC-B, and their subnets have the same CIDR block. If you create a\nVPC peering connection between VPC-A and VPC-B, their route tables\nare shown in ",(0,i.jsx)(n.strong,{children:"Table 2"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In the rtb-VPC-A route table, the custom route for routing traffic\nfrom VPC-A to VPC-B and the local route have overlapping\ndestinations. The local route has a higher priority and traffic will\nbe forwarded within VPC-A and cannot reach VPC-B."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1 Networking diagram\n(IPv4)",src:t(45824).A+"",width:"420",height:"326"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Route Table"}),(0,i.jsx)(n.th,{children:"Destination"}),(0,i.jsx)(n.th,{children:"Next Hop"}),(0,i.jsx)(n.th,{children:"Route Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rtb-VPC-A"}),(0,i.jsx)(n.td,{children:"10.0.0.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{children:"Local routes are automatically added for communications within a VPC."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.1.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.0.0/16 (VPC-B)"}),(0,i.jsx)(n.td,{children:"Peering-AB"}),(0,i.jsx)(n.td,{children:"Custom"}),(0,i.jsx)(n.td,{children:"Add a route with the CIDR block of VPC-B as the destination and Peering-AB as the next hop."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rtb-VPC-B"}),(0,i.jsx)(n.td,{children:"10.0.0.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{children:"Local routes are automatically added for communications within a VPC."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.1.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.0.0/16 (VPC-A)"}),(0,i.jsx)(n.td,{children:"Peering-AB"}),(0,i.jsx)(n.td,{children:"Custom"}),(0,i.jsx)(n.td,{children:"Add a route with the CIDR block of VPC-A as the destination and Peering-AB as the next hop."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 2"})," VPC route table details"]}),"\n",(0,i.jsx)(n.p,{children:"If two VPCs want to use their IPv6 CIDR blocks for communication by\na VPC peering connection but the IPv4 CIDR blocks of the VPCs or\nsubnets overlap, the connection is not usable."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 2 Networking diagram\n(IPv6)",src:t(17391).A+"",width:"558",height:"350"})}),"\n",(0,i.jsx)(n.p,{children:"Two VPCs have overlapping CIDR blocks but some of their subnets do\nnot overlap. VPC peering connections will not take effect in the following\nscenarios:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connecting overlapping CIDR blocks of VPCs"}),"\n",(0,i.jsx)(n.p,{children:"As shown in Figure 3,\nif you create a VPC peering connection between VPC-A and VPC-B,\nthe VPC peering connection will not take effect because the two\nVPCs have the same CIDR block."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connecting overlapping subnets from different VPCs"}),"\n",(0,i.jsx)(n.p,{children:"If you create a VPC peering connection between Subnet-A01 and\nSubnet-B02, the route tables are shown in table below. In the\nrtb-VPC-B route table, the custom route for routing traffic from\nSubnet-B02 to Subnet-A01 and the local route have overlapping\ndestinations. The local route has a higher priority and traffic\nwill be forwarded within Subnet-B02 and cannot reach Subnet-A01."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 3 Networking diagram\n(IPv4)",src:t(28987).A+"",width:"420",height:"326"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Route Table"}),(0,i.jsx)(n.th,{children:"Destination"}),(0,i.jsx)(n.th,{children:"Next Hop"}),(0,i.jsx)(n.th,{children:"Route Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rtb-VPC-A"}),(0,i.jsx)(n.td,{children:"10.0.0.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{children:"Local routes are automatically added for communications within a VPC."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.1.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.2.0/24 (Subnet-B02)"}),(0,i.jsx)(n.td,{children:"Peering-AB"}),(0,i.jsx)(n.td,{children:"Custom"}),(0,i.jsx)(n.td,{children:"Add a route with the CIDR block of Subnet-B02 as the destination and Peering-AB as the next hop."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rtb-VPC-B"}),(0,i.jsx)(n.td,{children:"10.0.0.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{children:"Local routes are automatically added for communications within a VPC."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.2.0/24"}),(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"System"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10.0.0.0/24 (Subnet-A01)"}),(0,i.jsx)(n.td,{children:"Peering-AB"}),(0,i.jsx)(n.td,{children:"Custom"}),(0,i.jsx)(n.td,{children:"Add a route with the CIDR block of Subnet-A01 as the destination and Peering-AB as the next hop."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 3"})," VPC route table details"]}),"\n",(0,i.jsx)(n.p,{children:"If the subnets connected by a VPC peering connection do not overlap,\nthe connection will take effect. As shown in Figure 4, you can create a\nVPC peering connection between Subnet-A02 and Subnet-B02. In this\ncase, the routes do not conflict and the VPC peering connection\ntakes effect."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 4 Networking diagram\n(IPv4)",src:t(61970).A+"",width:"420",height:"326"})}),"\n",(0,i.jsx)(n.p,{children:"If two VPCs want to use their IPv6 CIDR blocks for communication by\na VPC peering connection but the IPv4 CIDR blocks of the VPCs or\nsubnets overlap, the connection is not usable."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 5 Networking diagram\n(IPv6)",src:t(42857).A+"",width:"558",height:"350"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"invalid-vpc-peering-for-sharing-an-eip",children:"Invalid VPC Peering for Sharing an EIP"}),"\n",(0,i.jsx)(n.p,{children:"As shown in Figure 6, although\nVPC-A and VPC-B are peered and ECS-A01 in VPC-A has an EIP, ECS-B01 in\nVPC-B cannot access the Internet using the EIP bound to ECS-A01."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 6 Networking\ndiagram",src:t(22879).A+"",width:"372",height:"474"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},17391:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001209300412-805c5805701b9f48b0f781dd53ebb7b1.png"},61970:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001209321492-5d47ed8a7bcf6905fc4a13551d48d93b.png"},28987:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001209777270-902ee0f1ef613b1f047b55fad93e1253.png"},42857:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001254241751-fa1d7f15829b37ad1806205a5a85aae5.png"},45824:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001254335981-b58a5986835047864680e63e6d979269.png"},22879:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001254608729-a92ec9703aa5068b2892f54ac41578cc.png"},58974:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001261140071-dd517071923daf60d5589952f3d612e2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);