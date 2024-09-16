"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[97870],{21095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=r(74848),i=r(28453);const t={id:"configuring-private-domain-names-for-ecss",title:"Configuring Private Domain Names for ECSs",tags:["dns","ecs"]},d="Configuring Private Domain Names for ECSs",o={id:"best-practices/networking/domain-name-service/configuring-private-domain-names-for-ecss",title:"Configuring Private Domain Names for ECSs",description:"If one of your ECSs is not working normally and you need to use the",source:"@site/docs/best-practices/networking/domain-name-service/configuring-private-domain-names-for-ecss.md",sourceDirName:"best-practices/networking/domain-name-service",slug:"/best-practices/networking/domain-name-service/configuring-private-domain-names-for-ecss",permalink:"/docs-next/pr-preview/pr-102/docs/best-practices/networking/domain-name-service/configuring-private-domain-names-for-ecss",draft:!1,unlisted:!1,editUrl:"https://github.com/akyriako/docs-next/tree/main/docs/best-practices/networking/domain-name-service/configuring-private-domain-names-for-ecss.md",tags:[{inline:!0,label:"dns",permalink:"/docs-next/pr-preview/pr-102/docs/tags/dns"},{inline:!0,label:"ecs",permalink:"/docs-next/pr-preview/pr-102/docs/tags/ecs"}],version:"current",frontMatter:{id:"configuring-private-domain-names-for-ecss",title:"Configuring Private Domain Names for ECSs",tags:["dns","ecs"]},sidebar:"bestPracticesSidebar",previous:{title:"Resource Group Monitoring",permalink:"/docs-next/pr-preview/pr-102/docs/best-practices/management-and-deployment/cloud-eye/resource-group-monitoring"},next:{title:"Using Advanced Forwarding for Application Iteration",permalink:"/docs-next/pr-preview/pr-102/docs/best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration"}},c={},a=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Private Zones",id:"configuring-private-zones",level:2},{value:"Summary",id:"summary",level:3},{value:"Procedure",id:"procedure",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuring-private-domain-names-for-ecss",children:"Configuring Private Domain Names for ECSs"}),"\n",(0,s.jsx)(n.p,{children:"If one of your ECSs is not working normally and you need to use the\nbackup ECS to handle requests, but you have not configured private zones\nfor the two ECSs, you need to change the private IP address in the code\nfor the faulty ECS. This will interrupt your services and cause you to\npublish your website again, which is time- and labor-consuming."}),"\n",(0,s.jsx)(n.p,{children:"Assume that you have configured private zones for the ECSs and have\nincluded their private domain names in the code. If one ECS is\nmalfunctioning, you only need to change the DNS records to direct\ntraffic to a normal ECS. Your services will not be interrupted, and you\ndo not need to publish the website again."}),"\n",(0,s.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,s.jsx)(n.p,{children:"The figure below shows the networking of\na website where ECSs and RDS instances are deployed in a VPC."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ECS0"}),": primary service node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ECS1"}),": public service node -> ",(0,s.jsx)(n.strong,{children:"ECS2"}),": backup service node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RDS1"}),": service database -> ",(0,s.jsx)(n.strong,{children:"RDS2"}),": backup database"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 1 Networking example",src:r(68028).A+"",width:"923",height:"564"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Higher efficiency and security"}),": You can use private domain names\nto access ECSs in the VPCs, without going through the Internet."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Easier management"}),": Compared with IP addresses, domain names are\neasier to modify in the code. When an ECS is changed, you only need\nto change the DNS records without modifying the code."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"This table lists private zones and record sets planned for the cloud\nservers."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Resource"}),(0,s.jsx)(n.th,{children:"Private Zone"}),(0,s.jsx)(n.th,{children:"Associated"}),(0,s.jsx)(n.th,{children:"Private IP"}),(0,s.jsx)(n.th,{children:"Record Set Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ECS1"}),(0,s.jsx)(n.td,{children:"api.ecs.com"}),(0,s.jsx)(n.td,{children:"VPC_001"}),(0,s.jsx)(n.td,{children:"192.168.2.8"}),(0,s.jsx)(n.td,{children:"A"}),(0,s.jsx)(n.td,{children:"Public service node"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ECS2"}),(0,s.jsx)(n.td,{children:"api.ecs.com"}),(0,s.jsx)(n.td,{children:"VPC_001"}),(0,s.jsx)(n.td,{children:"192.168.3.8"}),(0,s.jsx)(n.td,{children:"A"}),(0,s.jsx)(n.td,{children:"Backup for the public service node"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RDS1"}),(0,s.jsx)(n.td,{children:"db.com"}),(0,s.jsx)(n.td,{children:"VPC_001"}),(0,s.jsx)(n.td,{children:"192.168.2.5"}),(0,s.jsx)(n.td,{children:"A"}),(0,s.jsx)(n.td,{children:"Service database"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RDS2"}),(0,s.jsx)(n.td,{children:"db.com"}),(0,s.jsx)(n.td,{children:"VPC_001"}),(0,s.jsx)(n.td,{children:"192.168.3.5"}),(0,s.jsx)(n.td,{children:"A"}),(0,s.jsx)(n.td,{children:"Backup database"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Table 1"})," Private zones and record sets for each server"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Region"}),(0,s.jsx)(n.th,{children:"Service"}),(0,s.jsx)(n.th,{children:"Resource"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Quantity"}),(0,s.jsx)(n.th,{children:"Monthly Price"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eu-de"}),(0,s.jsx)(n.td,{children:"VPC"}),(0,s.jsx)(n.td,{children:"VPC_001"}),(0,s.jsxs)(n.td,{children:["The DNS server addresses must be the same as the private DNS server addresses of Open Telekom Cloud. For details, see ",(0,s.jsx)(n.a,{href:"https://www.open-telekom-cloud.com/en/support/release-notes/secondary-dns",children:"Availability of secondary DNS"})]}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Free"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"ECS"}),(0,s.jsx)(n.td,{children:"ECS0 ECS1 ECS2"}),(0,s.jsxs)(n.td,{children:["Private domain name: ",(0,s.jsx)(n.code,{children:"api.ecs.com"})," ",(0,s.jsx)("br",{})," Associated VPC: ",(0,s.jsx)(n.code,{children:"VPC_001"})," ",(0,s.jsx)("br",{})," ECS1: public service node ",(0,s.jsx)("br",{})," Private IP address: ",(0,s.jsx)(n.code,{children:"192.168.2.8"})," ",(0,s.jsx)("br",{})," ECS2: backup service node Private IP address: ",(0,s.jsx)(n.code,{children:"192.168.3.8"})]}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsxs)(n.td,{children:["For details, see ",(0,s.jsx)(n.a,{href:"https://open-telekom-cloud.com/en/prices/price-calculator",children:"ECS Product Pricing Details"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"RDS"}),(0,s.jsx)(n.td,{children:"RDS1 RDS2"}),(0,s.jsxs)(n.td,{children:["Private domain name: ",(0,s.jsx)(n.code,{children:"db.com"})," ",(0,s.jsx)("br",{})," Associated VPC: ",(0,s.jsx)(n.code,{children:"VPC_001"})," ",(0,s.jsx)("br",{})," RDS1: service database ",(0,s.jsx)("br",{})," Private IP address: ",(0,s.jsx)(n.code,{children:"192.168.2.5"})," ",(0,s.jsx)("br",{})," RDS2: backup database ",(0,s.jsx)("br",{})," Private IP address: ",(0,s.jsx)(n.code,{children:"192.168.3.5"})]}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["For details, see ",(0,s.jsx)(n.a,{href:"https://open-telekom-cloud.com/en/prices/price-calculator",children:"RDS Product Pricing Details"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"DNS"}),(0,s.jsx)(n.td,{children:"api.ecs.com db.com"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"api.ecs.com"}),": Associated VPC: ",(0,s.jsx)(n.code,{children:"VPC_001"})," ",(0,s.jsx)("br",{})," Record set type: ",(0,s.jsx)(n.code,{children:"A"})," Value: ",(0,s.jsx)(n.code,{children:"192.168.2.8"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.strong,{children:"db.com"}),": Associated VPC: ",(0,s.jsx)(n.code,{children:"VPC_001"})," Record set type: ",(0,s.jsx)(n.code,{children:"A"})," Value: ",(0,s.jsx)(n.code,{children:"192.168.2.5"})]}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Free"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Table 2"})," Resource planning"]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-private-zones",children:"Configuring Private Zones"}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"The figure below shows the process for configuring private zones:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 2 Process for configuring private\nzones",src:r(39802).A+"",width:"309",height:"446"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"(Optional) Create a VPC and a subnet on the VPC console. This\noperation is required when you are configuring private domain names\nfor servers during website deployment."}),"\n",(0,s.jsx)(n.li,{children:"Create private zones and associate them with the VPC and add a\nrecord set to each private zone on the DNS console."}),"\n",(0,s.jsx)(n.li,{children:"(Optional) Change the DNS server addresses of the VPC subnet on the\nVPC console. This operation is required when you are configuring\nprivate domain names for servers where your website is running."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Optional) Create a VPC and a subnet."}),"\n",(0,s.jsx)(n.p,{children:"Before configuring private domain names for the ECSs and databases\nrequired by your website, you need to create a VPC and a subnet."}),"\n",(0,s.jsx)(n.p,{children:"a.  Log in to the management console."}),"\n",(0,s.jsxs)(n.p,{children:["b.  Click ",(0,s.jsx)(n.img,{alt:"image1",src:r(18005).A+"",width:"48",height:"47"})," in\nthe upper left corner and select the desired region and project."]}),"\n",(0,s.jsxs)(n.p,{children:["c.  Choose ",(0,s.jsx)(n.em,{children:"Network"})," -> ",(0,s.jsx)(n.em,{children:"Virtual Private Cloud"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["d.  In the navigation pane on the left, choose ",(0,s.jsx)(n.em,{children:"Virtual Private\nCloud"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["e.  Click ",(0,s.jsx)(n.em,{children:"Create VPC"})," and configure the parameters based on\n",(0,s.jsx)(n.code,{children:"Table 3 <dns_bestprac_0002__table65603559163645>"})]}),"\n",(0,s.jsxs)(n.p,{children:["f.  Click ",(0,s.jsx)(n.em,{children:"Create Now"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create private zones."}),"\n",(0,s.jsx)(n.p,{children:"Create private zones for the domain names used by ECS1 and RDS1."}),"\n",(0,s.jsxs)(n.p,{children:["a.  Choose ",(0,s.jsx)(n.em,{children:"Network"})," -> ",(0,s.jsx)(n.em,{children:"Domain Name Service"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The DNS console is displayed."}),"\n",(0,s.jsxs)(n.p,{children:["b.  In the navigation pane on the left, choose ",(0,s.jsx)(n.em,{children:"Private Zones"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["c. Click ",(0,s.jsx)(n.em,{children:"Create Private Zone"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"d.  Configure the parameters based on"}),"\n",(0,s.jsxs)(n.p,{children:["e.  Click ",(0,s.jsx)(n.em,{children:"OK"}),". Then check the private zone created for ",(0,s.jsx)(n.code,{children:"api.ecs.com"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can view details about this private zone on the ",(0,s.jsx)(n.em,{children:"Private\nZones"})," page."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Click the domain name to view SOA and NS record sets\nautomatically generated for the zone."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The SOA record set identifies the base DNS information about\nthe domain name."}),"\n",(0,s.jsx)(n.li,{children:"The NS record set defines authoritative DNS servers for the\ndomain name."}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["f.  Repeat steps to create a private zone for ",(0,s.jsx)(n.code,{children:"db.com"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add a record set to each private zone."}),"\n",(0,s.jsx)(n.p,{children:"Add record sets to translate private domain names to private IP\naddresses of ECS1 and RDS1."}),"\n",(0,s.jsx)(n.p,{children:"a.  Click the domain name."}),"\n",(0,s.jsx)(n.p,{children:"The record set page is displayed."}),"\n",(0,s.jsxs)(n.p,{children:["b.  Click ",(0,s.jsx)(n.em,{children:"Add Record Set"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"c.  Configure the parameters"}),"\n",(0,s.jsxs)(n.p,{children:["d.  Click ",(0,s.jsx)(n.em,{children:"OK"}),". An A record set is added for ",(0,s.jsx)(n.code,{children:"api.ecs.com"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["e.  Repeat steps to add an A record set for ",(0,s.jsx)(n.code,{children:"db.com"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Set the record set value of ",(0,s.jsx)(n.code,{children:"db.com"})," to ",(0,s.jsx)(n.code,{children:"192.168.2.5"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Optional) Change the DNS server addresses of the VPC subnet."}),"\n",(0,s.jsx)(n.p,{children:"After you configure private domain names for nodes in the website\napplication, you need to change the DNS servers of the VPC subnet to\nthose provided by the DNS service so that the domain names can be\nresolved."}),"\n",(0,s.jsxs)(n.p,{children:["For details, see ",(0,s.jsx)(n.a,{href:"https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_005.html",children:"How Do I Change Default DNS Servers of an ECS to\nHuawei Cloud Private DNS\nServers?"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Switch to the backup ECS."}),"\n",(0,s.jsxs)(n.p,{children:["When ECS1 becomes faulty, you can switch services to ECS2 by\nchanging the value of the record set added to private zone\n",(0,s.jsx)(n.code,{children:"api.ecs.com"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"a.  Log in to the management console."}),"\n",(0,s.jsxs)(n.p,{children:["b.  Click ",(0,s.jsx)(n.img,{alt:"image1",src:r(18005).A+"",width:"48",height:"47"})," in\nthe upper left and select ",(0,s.jsx)(n.em,{children:"eu-de"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["c.  Choose ",(0,s.jsx)(n.em,{children:"Network"})," -> ",(0,s.jsx)(n.em,{children:"Domain Name Service"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The DNS console is displayed."}),"\n",(0,s.jsxs)(n.p,{children:["d.  In the navigation pane on the left, choose ",(0,s.jsx)(n.em,{children:"Private Zones"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["e.  In the private zone list, click the name of the zone\n",(0,s.jsx)(n.code,{children:"api.ecs.com"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["f.  Locate the A record set and click ",(0,s.jsx)(n.em,{children:"Modify"})," under\n",(0,s.jsx)(n.em,{children:"Operation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["g.  Change the value to ",(0,s.jsx)(n.code,{children:"192.168.3.8"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["h.  Click ",(0,s.jsx)(n.em,{children:"OK"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Traffic to ECS1 will be directed to ECS2 by the private DNS server."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},68028:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/en-us_image_0000001394829705-eeedf52893f7530a71ee209732c20405.png"},18005:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABxaVRYdFNuaXBNZXRhZGF0YQAAAAAAeyJjbGlwUG9pbnRzIjpbeyJ4IjotOTQwLCJ5IjotNDU3fSx7IngiOi04ODUsInkiOi00NTd9LHsieCI6LTg4NSwieSI6LTQxMH0seyJ4IjotOTQwLCJ5IjotNDEwfV191gzZ2gAAANVJREFUaEPt1yEKAkEYxfG3IisI2gx6A5OYRbyAh7B4A4tBMHoDg+AVzB5gMVosVsFkGBARJq2G7wIDg89h36/sfvHPsvPtZs65EgnLyi+7T1LNrslSAJsC2BTApgA2BbApgC35gODP6cdxg/n+alME/Rl26wk6NoYKDzgsMFqdbIpgvESxnf4uwN8vON+8TRE0exgOumjYGEp/ZGwKYKvgHvizY7R6TwD+hefb7mOo52i3chvCaQ+wKYCtei+x9kBk2gNsOkbZFMCmADYFsCmALfEA4ANHf13uHv/nUQAAAABJRU5ErkJggg=="},39802:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var s=r(96540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);