"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[80639],{21487:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(74848),r=s(28453);const i={id:"connecting-multiple-on-premises-branch-networks-through-a-vpn-hub",title:"Connecting Multiple On-Premises Branch Networks Through a VPN Hub",tags:["vpn","hybrid","networking"]},d="Connecting Multiple On-Premises Branch Networks Through a VPN Hub",c={id:"best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub",title:"Connecting Multiple On-Premises Branch Networks Through a VPN Hub",description:"To meet service requirements, enterprise A needs to implement communication between its two on-premises data centers.",source:"@site/docs/best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub.md",sourceDirName:"best-practices/networking/virtual-private-network",slug:"/best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub",permalink:"/docs-next/pr-preview/pr-126/docs/best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub.md",tags:[{inline:!0,label:"vpn",permalink:"/docs-next/pr-preview/pr-126/docs/tags/vpn"},{inline:!0,label:"hybrid",permalink:"/docs-next/pr-preview/pr-126/docs/tags/hybrid"},{inline:!0,label:"networking",permalink:"/docs-next/pr-preview/pr-126/docs/tags/networking"}],version:"current",frontMatter:{id:"connecting-multiple-on-premises-branch-networks-through-a-vpn-hub",title:"Connecting Multiple On-Premises Branch Networks Through a VPN Hub",tags:["vpn","hybrid","networking"]},sidebar:"bestPracticesSidebar",previous:{title:"Unsupported VPC Peering Configurations",permalink:"/docs-next/pr-preview/pr-126/docs/best-practices/networking/virtual-private-cloud/unsupported-vpc-peering-configurations"},next:{title:"Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports",permalink:"/docs-next/pr-preview/pr-126/docs/best-practices/security-services/web-application-firewall/combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports"}},a={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Limitations and Constraints",id:"limitations-and-constraints",level:3},{value:"Planning Networks and Resources",id:"planning-networks-and-resources",level:2},{value:"Data Plan",id:"data-plan",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Verification",id:"verification",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"connecting-multiple-on-premises-branch-networks-through-a-vpn-hub",children:"Connecting Multiple On-Premises Branch Networks Through a VPN Hub"}),"\n",(0,t.jsx)(n.p,{children:"To meet service requirements, enterprise A needs to implement communication between its two on-premises data centers."}),"\n",(0,t.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#figure-1",children:"Figure 1"})," shows the networking where the VPN service is used to connect the two on-premises data centers."]}),"\n",(0,t.jsx)("a",{id:"figure-1"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(76526).A+"",width:"781",height:"468"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Figure 1"}),": Networking diagram"]}),"\n",(0,t.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A VPN gateway on the cloud can function as a VPN hub to enable communication between on-premises branch sites. This eliminates the need to configure VPN connections between every two sites."}),"\n",(0,t.jsx)(n.li,{children:"A VPN gateway provides two IP addresses to establish dual independent VPN connections with each customer gateway. If one VPN connection fails, traffic can be quickly switched to the other VPN connection, ensuring reliability."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"limitations-and-constraints",children:"Limitations and Constraints"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The local and customer subnets of the VPN gateway cannot be the same. That is, the VPC subnet and the data center subnet to be interconnected cannot be the same."}),"\n",(0,t.jsx)(n.li,{children:"The IKE policy, IPsec policy, and PSK of the VPN gateway must be the same as those of the customer gateway."}),"\n",(0,t.jsx)(n.li,{children:"The local and remote interface address configurations on the VPN gateway and customer gateway are reversed."}),"\n",(0,t.jsx)(n.li,{children:"The security groups associated with ECSs in the VPC permit access from and to the on-premises data center."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"planning-networks-and-resources",children:"Planning Networks and Resources"}),"\n",(0,t.jsx)(n.h3,{id:"data-plan",children:"Data Plan"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Category"}),(0,t.jsx)("th",{children:"Item"}),(0,t.jsx)("th",{children:"Data"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"VPC"}),(0,t.jsx)("td",{children:"Subnet that needs to access the on-premises data centers"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"192.168.0.0/24"}),(0,t.jsx)("br",{}),"\n\u2022 ",(0,t.jsx)(n.code,{children:"192.168.1.0/24"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"VPN gateway"}),(0,t.jsx)("td",{children:"Interconnection subnet"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["This subnet is used for communication between the VPN gateway and VPC. Ensure that the selected interconnection subnet has four or more assignable IP addresses.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.code,{children:"192.168.2.0/24"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"HA Mode"}),(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Active-active"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"EIP"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["EIPs are automatically generated when you create them. By default, a VPN gateway uses two EIPs. In this example, the EIPs are as follows:",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\n\u2022 Active EIP: ",(0,t.jsx)(n.code,{children:"1.1.1.2"}),(0,t.jsx)("br",{}),"\n\u2022 Active EIP 2: ",(0,t.jsx)(n.code,{children:"2.2.2.2"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"VPN connection"}),(0,t.jsx)("td",{children:"Tunnel interface address"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["This address is used by a VPN gateway to establish an IPsec tunnel with a customer gateway. At the two ends of the IPsec tunnel, the configured local and remote tunnel interface addresses must be reversed.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\nVPN connections set up with on-premises data center 1:",(0,t.jsx)("br",{}),"\n\u2022 VPN connection 1: ",(0,t.jsx)(n.code,{children:"169.254.70.1/30"}),(0,t.jsx)("br",{}),"\n\u2022 VPN connection 2: ",(0,t.jsx)(n.code,{children:"169.254.71.1/30"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\nVPN connections set up with on-premises data center 2:",(0,t.jsx)("br",{}),"\n\u2022 VPN connection 3: ",(0,t.jsx)(n.code,{children:"169.254.72.1/30"}),(0,t.jsx)("br",{}),"\n\u2022 VPN connection 4: ",(0,t.jsx)(n.code,{children:"169.254.73.1/30"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"On-premises data center 1"}),(0,t.jsx)("td",{children:"Subnet that needs to access the VPC"}),(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"172.16.0.0/16"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"Customer gateway in on-premises data center 1"}),(0,t.jsx)("td",{children:"Public IP address"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["This public IP address is assigned by a carrier. In this example, the public IP address is:",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.code,{children:"1.1.1.1"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Tunnel interface address"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["\u2022 VPN connection 1: ",(0,t.jsx)(n.code,{children:"169.254.70.2/30"}),(0,t.jsx)("br",{}),"\n\u2022 VPN connection 2: ",(0,t.jsx)(n.code,{children:"169.254.71.2/30"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"On-premises data center 2"}),(0,t.jsx)("td",{children:"Subnet that needs to access the VPC"}),(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"10.10.0.0/16"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"Customer gateway in on-premises data center 2"}),(0,t.jsx)("td",{children:"Public IP address"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["This public IP address is assigned by a carrier. In this example, the public IP address is:",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.code,{children:"2.2.2.1"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Tunnel interface address"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["\u2022 VPN connection 3: ",(0,t.jsx)(n.code,{children:"169.254.72.2/30"}),(0,t.jsx)("br",{}),"\n\u2022 VPN connection 4: ",(0,t.jsx)(n.code,{children:"169.254.73.2/30"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"IKE and IPsec policies"}),(0,t.jsx)("td",{children:"PSK"}),(0,t.jsx)("td",{children:"Test@123"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"IKE policy"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["\u2022 Authentication algorithm: ",(0,t.jsx)(n.code,{children:"SHA2-256"}),(0,t.jsx)("br",{}),"\n\u2022 Encryption algorithm: ",(0,t.jsx)(n.code,{children:"AES-128"}),(0,t.jsx)("br",{}),"\n\u2022 DH algorithm: ",(0,t.jsx)(n.code,{children:"Group 15"}),(0,t.jsx)("br",{}),"\n\u2022 Version: ",(0,t.jsx)(n.code,{children:"v2"}),(0,t.jsx)("br",{}),"\n\u2022 Lifetime (s): ",(0,t.jsx)(n.code,{children:"86400"}),(0,t.jsx)("br",{}),"\n\u2022 Local ID: ",(0,t.jsx)(n.em,{children:"IP address"}),(0,t.jsx)("br",{}),"\n\u2022 Peer ID: ",(0,t.jsx)(n.em,{children:"IP address"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"IPsec policy"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["\u2022 Authentication algorithm: ",(0,t.jsx)(n.code,{children:"SHA2-256"}),(0,t.jsx)("br",{}),"\n\u2022 Encryption algorithm: ",(0,t.jsx)(n.code,{children:"AES-128"}),(0,t.jsx)("br",{}),"\n\u2022 PFS: DH ",(0,t.jsx)(n.code,{children:"Group15"}),(0,t.jsx)("br",{}),"\n\u2022 Transfer protocol: ",(0,t.jsx)(n.code,{children:"ESP"}),(0,t.jsx)("br",{}),"\n\u2022 Lifetime (s): ",(0,t.jsx)(n.code,{children:"3600"})]})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 1"}),": Data Plan"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cloud side","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A VPC has been created. For details about how to create a VPC, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html",children:"Creating a VPC"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Security group rules have been configured for the VPC, and ECSs can communicate with other devices on the cloud. For details about how to configure security group rules, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/access_control/security_group/managing_security_group_rules/adding_a_security_group_rule.html",children:"Security Group Rules"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Data center side","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["IPsec has been configured on the VPN devices in the two on-premises data centers. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-network/umn/administrator_guide/index.html",children:"Administrator Guide"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"The remote subnets of the VPN device in on-premises data center 1 must contain the local subnet of the Open Telekom Cloud VPC and the subnet to be interconnected in on-premises data center 2. The remote subnets of the VPN device in on-premises data center 2 must contain the local subnet of the Open Telekom Cloud VPC and the subnet to be interconnected in on-premises data center 1."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Open Telekom Cloud VPNs support static routing mode, BGP routing mode, and policy-based mode. The following uses the static routing mode as an example."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure a VPN gateway."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.em,{children:"Virtual Private Network"})," -> ",(0,t.jsx)(n.em,{children:"Enterprise \u2013 VPN Gateways"}),", and click ",(0,t.jsx)(n.em,{children:"Create VPN Gateway"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set parameters as prompted."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#table-1",children:"Table 1"})," only describes the key parameters for creating a VPN gateway."]}),"\n",(0,t.jsx)("a",{id:"table-1"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 1"})," Description of VPN gateway parameters"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"Name of a VPN gateway."}),(0,t.jsx)(n.td,{children:"vpngw-001"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Network Type"}),(0,t.jsxs)(n.td,{children:["Select ",(0,t.jsx)(n.strong,{children:"Public network"}),"."]}),(0,t.jsx)(n.td,{children:"Public network"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Associate With"}),(0,t.jsxs)(n.td,{children:["Select ",(0,t.jsx)(n.strong,{children:"VPC"}),". If the VPN gateway is associated with an enterprise router, select ",(0,t.jsx)(n.strong,{children:"Enterprise Router"}),"."]}),(0,t.jsx)(n.td,{children:"VPC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VPC"}),(0,t.jsx)(n.td,{children:"Open Telekom Cloud VPC that the on-premises data centers need to access."}),(0,t.jsx)(n.td,{children:"vpc-001(192.168.0.0/16)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Local Subnet"}),(0,t.jsx)(n.td,{children:"VPC subnets that the on-premises data centers need to access."}),(0,t.jsx)(n.td,{children:"192.168.0.0/24,192.168.1.0/24"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interconnection Subnet"}),(0,t.jsx)(n.td,{children:"This subnet is used for communication between the VPN gateway and VPC. Ensure that the selected interconnection subnet has four or more assignable IP addresses."}),(0,t.jsx)(n.td,{children:"192.168.2.0/24"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BGP ASN"}),(0,t.jsx)(n.td,{children:"BGP AS number."}),(0,t.jsx)(n.td,{children:"64512"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HA Mode"}),(0,t.jsxs)(n.td,{children:["Select ",(0,t.jsx)(n.strong,{children:"Active-active"}),"."]}),(0,t.jsx)(n.td,{children:"Active-active"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Active EIP"}),(0,t.jsx)(n.td,{children:"EIP 1 used by the VPN gateway to access the on-premises data center."}),(0,t.jsx)(n.td,{children:"1.1.1.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Active EIP 2"}),(0,t.jsx)(n.td,{children:"EIP 2 used by the VPN gateway to access the on-premises data center."}),(0,t.jsx)(n.td,{children:"2.2.2.2"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure customer gateways."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.em,{children:"Virtual Private Network"})," -> ",(0,t.jsx)(n.em,{children:"Enterprise \u2013 Customer Gateways"}),", and click ",(0,t.jsx)(n.em,{children:"Create Customer Gateway"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set parameters as prompted."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#table-2",children:"Table 2"})," only describes the key parameters for creating a customer gateway."]}),"\n",(0,t.jsx)("a",{id:"table-2"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 2"})," Description of customer gateway parameters"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"Name of a customer gateway."}),(0,t.jsx)(n.td,{children:"cgw-fw1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Routing Mode"}),(0,t.jsxs)(n.td,{children:["Select ",(0,t.jsx)(n.strong,{children:"Static"}),"."]}),(0,t.jsx)(n.td,{children:"Static"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Gateway IP Address"}),(0,t.jsxs)(n.td,{children:["IP address used by the customer gateway in on-premises data center 1 to communicate with the Open Telekom Cloud VPN gateway. ",(0,t.jsx)("br",{})," Ensure that UDP port 4500 is permitted on the customer gateway device in the on-premises data center."]}),(0,t.jsx)(n.td,{children:"1.1.1.1"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat the preceding operations to configure the customer gateway (2.2.2.1) in on-premises data center 2."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure VPN connections between the cloud side and on-premises data center 1."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.em,{children:"Virtual Private Network"})," -> ",(0,t.jsx)(n.em,{children:"Enterprise \u2013 VPN Connections"}),", and click ",(0,t.jsx)(n.em,{children:"Create VPN Connection"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set parameters for VPN connection 1 and click ",(0,t.jsx)(n.em,{children:"Submit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#table-3",children:"Table 3"})," only describes the key parameters for creating a VPN connection."]}),"\n",(0,t.jsx)("a",{id:"table-3"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 3"})," Description of VPN connection parameters"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"Name of a VPN connection."}),(0,t.jsx)(n.td,{children:"vpn-001"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VPN Gateway"}),(0,t.jsx)(n.td,{children:"VPN gateway for which the VPN connection is created."}),(0,t.jsx)(n.td,{children:"vpngw-001"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Gateway IP Address"}),(0,t.jsx)(n.td,{children:"Active EIP bound to the VPN gateway."}),(0,t.jsx)(n.td,{children:"1.1.1.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VPN Type"}),(0,t.jsxs)(n.td,{children:["Select ",(0,t.jsx)(n.strong,{children:"Static routing"}),"."]}),(0,t.jsx)(n.td,{children:"Static routing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Gateway"}),(0,t.jsx)(n.td,{children:"Name of a customer gateway."}),(0,t.jsx)(n.td,{children:"cgw-fw1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Subnet"}),(0,t.jsx)(n.td,{children:"Subnet in on-premises data center 1 that needs to access the VPC on Open Telekom Cloud.  A customer subnet cannot be included in any local subnet or any subnet of the VPC to which the VPN gateway is attached.   Reserved VPC CIDR blocks such as 100.64.0.0/10 and 214.0.0.0/8 cannot be used as customer subnets."}),(0,t.jsx)(n.td,{children:"172.16.0.0/16"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interface IP Address Assignment"}),(0,t.jsxs)(n.td,{children:["Manually specify In this example, select ",(0,t.jsx)(n.strong,{children:"Manually specify"}),". Automatically assign"]}),(0,t.jsx)(n.td,{children:"Manually specify"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Local Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel interface IP address configured on the VPN gateway."}),(0,t.jsx)(n.td,{children:"169.254.70.1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel interface IP address configured on the customer gateway device."}),(0,t.jsx)(n.td,{children:"169.254.70.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Link Detection"}),(0,t.jsx)(n.td,{children:"Whether to enable route reachability detection in multi-link scenarios. When NQA is enabled, ICMP packets are sent for detection and your device needs to respond to these ICMP packets."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"NQA"})," enabled"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PSK, Confirm PSK"}),(0,t.jsx)(n.td,{children:"The value must be the same as the PSK configured on the customer gateway device."}),(0,t.jsx)(n.td,{children:"Test@123"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Policy Settings"}),(0,t.jsx)(n.td,{children:"The policy settings must be the same as those on the customer gateway device."}),(0,t.jsx)(n.td,{children:"Default"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create VPN connection 2."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For VPN connection 2, you are advised to use the same parameter settings as VPN connection 1, except the parameters listed in the following table."})}),"\n",(0,t.jsx)("a",{id:"table-4"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 4"})," Parameter settings for VPN connection 2"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"Name of a VPN connection."}),(0,t.jsx)(n.td,{children:"vpn-002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Gateway IP Address"}),(0,t.jsx)(n.td,{children:"Active EIP 2 bound to the VPN gateway."}),(0,t.jsx)(n.td,{children:"2.2.2.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Local Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel IP address of the VPN gateway."}),(0,t.jsx)(n.td,{children:"169.254.71.1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel IP address of the customer gateway."}),(0,t.jsx)(n.td,{children:"169.254.71.2"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure VPN connections between the cloud side and on-premises data center 2."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.em,{children:"Virtual Private Network"})," -> ",(0,t.jsx)(n.em,{children:"Enterprise \u2013 VPN Connections"}),", and click ",(0,t.jsx)(n.em,{children:"Create VPN Connection"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set parameters for VPN connection 1 as prompted and click ",(0,t.jsx)(n.em,{children:"Submit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#table-5",children:"Table 5"})," only describes the key parameters for creating a VPN connection."]}),"\n",(0,t.jsx)("a",{id:"table-5"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 5"})," Description of VPN connection parameters"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"Name of a VPN connection."}),(0,t.jsx)(n.td,{children:"vpn-003"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VPN Gateway"}),(0,t.jsx)(n.td,{children:"VPN gateway for which the VPN connection is created."}),(0,t.jsx)(n.td,{children:"vpngw-001"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Gateway IP Address"}),(0,t.jsx)(n.td,{children:"Active EIP bound to the VPN gateway."}),(0,t.jsx)(n.td,{children:"1.1.1.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Gateway"}),(0,t.jsx)(n.td,{children:"Name of a customer gateway."}),(0,t.jsx)(n.td,{children:"cgw-fw2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VPN Type"}),(0,t.jsxs)(n.td,{children:["Select ",(0,t.jsx)(n.strong,{children:"Static routing"}),"."]}),(0,t.jsx)(n.td,{children:"Static routing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Subnet"}),(0,t.jsx)(n.td,{children:"Subnet in on-premises data center 2 that needs to access the VPC on Open Telekom Cloud.  A customer subnet cannot be included in any local subnet or any subnet of the VPC to which the VPN gateway is attached.   Reserved VPC CIDR blocks such as 100.64.0.0/10 and 214.0.0.0/8 cannot be used as customer subnets."}),(0,t.jsx)(n.td,{children:"10.10.0.0/16"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interface IP Address Assignment"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Manually specify"})," In this example, select Manually specify. Automatically assign"]}),(0,t.jsx)(n.td,{children:"Manually specify"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Local Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel interface IP address configured on the VPN gateway."}),(0,t.jsx)(n.td,{children:"169.254.72.1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel interface IP address configured on the customer gateway device."}),(0,t.jsx)(n.td,{children:"169.254.72.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Link Detection"}),(0,t.jsx)(n.td,{children:"Whether to enable route reachability detection in multi-link scenarios. When NQA is enabled, ICMP packets are sent for detection and your device needs to respond to these ICMP packets."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"NQA"})," enabled"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PSK, Confirm PSK"}),(0,t.jsx)(n.td,{children:"The value must be the same as the PSK configured on the customer gateway device in on-premises data center 2."}),(0,t.jsx)(n.td,{children:"Test@123"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Policy Settings"}),(0,t.jsx)(n.td,{children:"The policy settings must be the same as those configured on the customer gateway device in on-premises data center 2."}),(0,t.jsx)(n.td,{children:"Default"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create VPN connection 2."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"For VPN connection 2, you are advised to use the same parameter settings as VPN connection 1, except the parameters listed in the following table."})]}),"\n",(0,t.jsx)("a",{id:"table-6"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 6"})," Parameter settings for VPN connection 2"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"Name of a VPN connection."}),(0,t.jsx)(n.td,{children:"vpn-004"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Gateway IP Address"}),(0,t.jsx)(n.td,{children:"Active EIP 2 bound to the VPN gateway."}),(0,t.jsx)(n.td,{children:"2.2.2.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Local Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel IP address of the VPN gateway."}),(0,t.jsx)(n.td,{children:"169.254.73.1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Customer Tunnel Interface Address"}),(0,t.jsx)(n.td,{children:"Tunnel IP address of the customer gateway in on-premises data center 2."}),(0,t.jsx)(n.td,{children:"169.254.73.2"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure customer gateway devices in on-premises data centers 1 and 2."}),"\n",(0,t.jsxs)(n.p,{children:["The configuration procedures may vary according to the type of the customer gateway device. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-network/umn/administrator_guide/index.html",children:"Administrator Guide"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"About 5 minutes later, check states of the VPN connections."}),"\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.em,{children:"Virtual Private Network"})," -> ",(0,t.jsx)(n.em,{children:"Enterprise \u2013 VPN Connections"}),". The states of the four VPN connections are all ",(0,t.jsx)(n.em,{children:"Normal"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify that servers in on-premises data center 1 and servers in on-premises data center 2 can ping each other."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},76526:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001592878805-ee35ba0f7d705df1e2210650b72b77f0.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);