"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[14499],{24563:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=n(74848),r=n(28453);const c={id:"debugging-and-starting-the-application",title:"Debugging and Starting the Application",tags:["cce","migration","velero","obs"]},s="Debugging and Starting the Application",a={id:"best-practices/containers/cloud-container-engine/debugging-and-starting-the-application",title:"Debugging and Starting the Application",description:"Application Verification",source:"@site/docs/best-practices/containers/cloud-container-engine/debugging-and-starting-the-application.md",sourceDirName:"best-practices/containers/cloud-container-engine",slug:"/best-practices/containers/cloud-container-engine/debugging-and-starting-the-application",permalink:"/docs-next/pr-preview/pr-144/docs/best-practices/containers/cloud-container-engine/debugging-and-starting-the-application",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/containers/cloud-container-engine/debugging-and-starting-the-application.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-144/docs/tags/cce"},{inline:!0,label:"migration",permalink:"/docs-next/pr-preview/pr-144/docs/tags/migration"},{inline:!0,label:"velero",permalink:"/docs-next/pr-preview/pr-144/docs/tags/velero"},{inline:!0,label:"obs",permalink:"/docs-next/pr-preview/pr-144/docs/tags/obs"}],version:"current",frontMatter:{id:"debugging-and-starting-the-application",title:"Debugging and Starting the Application",tags:["cce","migration","velero","obs"]},sidebar:"bestPracticesSidebar",previous:{title:"Updating Resources Accordingly",permalink:"/docs-next/pr-preview/pr-144/docs/best-practices/containers/cloud-container-engine/updating-resources"},next:{title:"Migrating Container Images",permalink:"/docs-next/pr-preview/pr-144/docs/best-practices/containers/software-repository/migrating-container-images"}},o={},l=[{value:"Application Verification",id:"application-verification",level:2},{value:"Service Verification",id:"service-verification",level:2},{value:"Switching Live Traffic to the CCE Cluster",id:"switching-live-traffic-to-the-cce-cluster",level:3},{value:"Bringing Other Cluster Offline",id:"bringing-other-cluster-offline",level:3}];function d(e){const i={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"debugging-and-starting-the-application",children:"Debugging and Starting the Application"}),"\n",(0,t.jsx)(i.h2,{id:"application-verification",children:"Application Verification"}),"\n",(0,t.jsx)(i.p,{children:"Debug and access the application to check data:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["In the navigation pane, choose ",(0,t.jsx)(i.em,{children:"Resource Management"})," -> ",(0,t.jsx)(i.em,{children:"Network"}),". Pick the EIP next to the WordPress Service."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Figure 1 Obtaining the access address",src:n(26345).A+"",width:"1611",height:"153"})}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsx)(i.li,{children:"If the access is normal, and the migration is successful."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Figure 2 WordPress welcome page",src:n(55168).A+"",width:"1889",height:"827"})}),"\n",(0,t.jsx)(i.h2,{id:"service-verification",children:"Service Verification"}),"\n",(0,t.jsx)(i.p,{children:"Testing personnel check the functions of the new cluster without interrupting the live traffic."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Configure a test domain name."}),"\n",(0,t.jsx)(i.li,{children:"Test service functions."}),"\n",(0,t.jsx)(i.li,{children:"Check O&M functions, such as log monitoring and alarm reporting."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"switching-live-traffic-to-the-cce-cluster",children:"Switching Live Traffic to the CCE Cluster"}),"\n",(0,t.jsx)(i.p,{children:"O&M switch DNS to direct live traffic to the CCE cluster."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"DNS traffic switching: Adjust the DNS configuration to switch traffic."}),"\n",(0,t.jsx)(i.li,{children:"Client traffic switching: Upgrade the client code or update the configuration to switch traffic."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"bringing-other-cluster-offline",children:"Bringing Other Cluster Offline"}),"\n",(0,t.jsx)(i.p,{children:"After confirming that the service on the CCE cluster is normal, bring other cluster offline and delete the backup files."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Verify that the service on the CCE cluster is running properly."}),"\n",(0,t.jsx)(i.li,{children:"Bring other cluster offline."}),"\n",(0,t.jsx)(i.li,{children:"Delete backup files."}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},26345:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/en-us_image_0264587870-17a5353ccb74d8a196632708b7752ddd.png"},55168:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/en-us_image_0264587871-841b87bbde5d5a4a78e6554a6728174d.png"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(96540);const r={},c=t.createContext(r);function s(e){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);