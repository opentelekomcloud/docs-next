"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[54588],{90549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"best-practices/storage/object-storage-service/migrating-local-data-to-obs","title":"Migrating Local Data to OBS","description":"Background","source":"@site/docs/best-practices/storage/object-storage-service/migrating-local-data-to-obs.md","sourceDirName":"best-practices/storage/object-storage-service","slug":"/best-practices/storage/object-storage-service/migrating-local-data-to-obs","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/storage/object-storage-service/migrating-local-data-to-obs","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/storage/object-storage-service/migrating-local-data-to-obs.md","tags":[{"inline":true,"label":"storage","permalink":"/docs-next/pr-preview/pr-203/docs/tags/storage"},{"inline":true,"label":"obs","permalink":"/docs-next/pr-preview/pr-203/docs/tags/obs"}],"version":"current","frontMatter":{"id":"migrating-local-data-to-obs","title":"Migrating Local Data to OBS","tags":["storage","obs"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Accessing OBS Through an NGINX Reverse Proxy","permalink":"/docs-next/pr-preview/pr-203/docs/best-practices/storage/object-storage-service/accessing-obs-through-an-nginx-reverse-proxy"}}');var o=n(74848),a=n(28453);const s={id:"migrating-local-data-to-obs",title:"Migrating Local Data to OBS",tags:["storage","obs"]},r="Migrating Local Data to OBS",c={},l=[{value:"Background",id:"background",level:2},{value:"Migration Solutions",id:"migration-solutions",level:2},{value:"Using OBS Tools to Migrate Data",id:"using-obs-tools-to-migrate-data",level:2},{value:"Using a Direct Connect Connection to Migrate Data",id:"using-a-direct-connect-connection-to-migrate-data",level:2}];function d(e){const t={a:"a",br:"br",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"migrating-local-data-to-obs",children:"Migrating Local Data to OBS"})}),"\n",(0,o.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(t.p,{children:"Conventional on-premises storage servers cannot meet the storage demands for massive amounts of data. The main reasons are as follows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Storage capacity is subject to hardware devices. If the storage capacity becomes insufficient, you need to purchase disks and expand the capacity manually."}),"\n",(0,o.jsx)(t.li,{children:"The initial deployment requires high investments and a long construction period, but it quickly lags behind as enterprise services change so fast."}),"\n",(0,o.jsx)(t.li,{children:"Network information vulnerabilities, technical vulnerabilities, and unintended operations may result in security risks."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In contrast, OBS provides massive, stable, and secure cloud storage capabilities. With OBS, you do not need to worry about the storage capacity because it can be expanded infinitely. OBS can store unstructured data of any type and size. OBS ensures high stability and security for your data, featuring a multi-level reliability architecture, server-side encryption, log management, and permission control. In terms of the cost, OBS is available upon service subscription, eliminating the need for the investment in physical server deployment and maintenance."}),"\n",(0,o.jsxs)(t.p,{children:["Open Telekom Cloud provides diverse ",(0,o.jsx)(t.a,{href:"#migration-solutions",children:"migration solutions"})," to help you migrate data from your on-premises storage servers to OBS in a cost-effective, secure, and efficient manner. You can select a suitable migration solution according to your data volume, time arrangement, and budget."]}),"\n",(0,o.jsx)(t.h2,{id:"migration-solutions",children:"Migration Solutions"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"#table1",children:"Table 1"})," describes the migration solutions provided by Open Telekom Cloud."]}),"\n",(0,o.jsx)("a",{id:"table1",children:"Table 1 Migration solutions"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Solution"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Data Volume"}),(0,o.jsx)(t.th,{children:"Requirement"}),(0,o.jsx)(t.th,{children:"Time Required"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Pricing"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,o.jsx)(t.a,{href:"#using-obs-tools-to-migrate-data",children:"Using OBS Tools to Migrate Data"})," (online)"]}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Not larger than 1 TB"}),(0,o.jsx)(t.td,{children:"The public network bandwidth must be idle and manual operations on clients or scripts are required to start data upload."}),(0,o.jsx)(t.td,{children:"About 1 day for 1 TB data with the bandwidth of 100 Mbit/s"}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Data transmission is free. Only the storage space used on OBS is charged."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,o.jsx)(t.a,{href:"#using-a-direct-connect-connection-to-migrate-data",children:"Using a Direct Connect Connection to Migrate Data"})," (real-time)"]}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"More than 100 TB data that needs real-time online transmission every month"}),(0,o.jsx)(t.td,{children:"A Direct Connect connection must be deployed."}),(0,o.jsx)(t.td,{children:"Depends on the bandwidth of the Direct Connect connection."}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["Fees are charged based on the distance and bandwidth of the connection. For details, see  ",(0,o.jsx)(t.a,{href:"https://open-telekom-cloud.com/en/prices/price-calculator",children:"Direct Connect Pricing Details"}),"."]})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"using-obs-tools-to-migrate-data",children:"Using OBS Tools to Migrate Data"}),"\n",(0,o.jsx)(t.p,{children:"OBS provides various client tools, such as OBS Browser+ and obsutil, to migrate hundreds of gigabytes local data to OBS. You are advised to migrate data during off-peak hours so as to minimize the impact on major services on the public network."}),"\n",(0,o.jsxs)(t.p,{children:["For details about the scenarios and operation guidelines of each tool, see ",(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/object-storage-service/tool-guide/",children:"OBS Tool Guide"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"using-a-direct-connect-connection-to-migrate-data",children:"Using a Direct Connect Connection to Migrate Data"}),"\n",(0,o.jsx)(t.p,{children:"Direct Connect connects your data center to Open Telekom Cloud, so that you can upload local data directly to Open Telekom Cloud OBS. Direct Connect provides low-latency and high-bandwidth services, which is suitable for you to upload data to OBS at any time, and is therefore recommended when local data needs to be migrated to OBS frequently or in real time."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Figure 4"})," Migrating data to OBS using a Direct Connect connection",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.img,{src:n(94892).A+"",width:"726",height:"239"})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Create an OBS bucket."}),"\n",(0,o.jsx)(t.p,{children:"Log in to OBS Console and create one or more buckets."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Enable Direct Connect."}),"\n",(0,o.jsxs)(t.p,{children:["Log in to Direct Connect Console, fill in the application form and submit an order. After the administrator approves the application, you can pay for the order and contact the carrier for physical line connections. Open Telekom Cloud engineers will assist in configuring the connection. For details, see ",(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/direct-connect/umn/getting_started/enabling_direct_connect/index.html#dc-02-0200",children:"Enabling Direct Connect"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Start data transmission."}),"\n",(0,o.jsx)(t.p,{children:"After Direct Connect is enabled, upload your local data to OBS using OBS Console, relevant tools, APIs, or SDKs."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},94892:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/migrating-local-data-to-obs-direct-connect-b27196d6d74710823c478c5fb859e38a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);