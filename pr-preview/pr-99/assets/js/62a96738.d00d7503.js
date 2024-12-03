"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[521],{79072:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>A,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(74848),t=i(28453);const s={id:"resource-group-monitoring",title:"Resource Group Monitoring",tags:[]},A="Resource Group Monitoring",c={id:"best-practices/management-and-deployment/cloud-eye/resource-group-monitoring",title:"Resource Group Monitoring",description:"Cloud Eye provides the resource group and alarm functions. How to effectively group and monitor resources and receive alarm notifications of the resources in different groups?",source:"@site/docs/best-practices/management-and-deployment/cloud-eye/resource-group-monitoring.md",sourceDirName:"best-practices/management-and-deployment/cloud-eye",slug:"/best-practices/management-and-deployment/cloud-eye/resource-group-monitoring",permalink:"/docs-next/pr-preview/pr-99/docs/best-practices/management-and-deployment/cloud-eye/resource-group-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/management-and-deployment/cloud-eye/resource-group-monitoring.md",tags:[],version:"current",frontMatter:{id:"resource-group-monitoring",title:"Resource Group Monitoring",tags:[]},sidebar:"bestPracticesSidebar",previous:{title:"OpenShift Template",permalink:"/docs-next/pr-preview/pr-99/docs/best-practices/management-and-deployment/cloud-create/service-catalogs/openshift-template"},next:{title:"Auditing and Analyzing Logins and Logouts with Functiongraph",permalink:"/docs-next/pr-preview/pr-99/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph"}},o={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Resource Group",id:"creating-a-resource-group",level:2},{value:"Creating a Topic and Configuring the Notification Object",id:"creating-a-topic-and-configuring-the-notification-object",level:2},{value:"Creating an Alarm Rule",id:"creating-an-alarm-rule",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"resource-group-monitoring",children:"Resource Group Monitoring"}),"\n",(0,r.jsx)(n.p,{children:"Cloud Eye provides the resource group and alarm functions. How to effectively group and monitor resources and receive alarm notifications of the resources in different groups?"}),"\n",(0,r.jsx)(n.p,{children:"Assume that there are four ECSs, namely ECS-01, ECS-02, ECS-03, and ECS-04. ECS-01 and ECS-02 are used by the development team. ECS-03 and ECS-04 are used by the test team. You need to obtain the running status of the two ECSs in the development team in a timely manner, including their CPU usage, idle CPU usage, average load, I/O usage, disk usage, memory usage, and percentage of total inode used."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ECS Name"}),(0,r.jsx)(n.th,{children:"Group"}),(0,r.jsx)(n.th,{children:"Whether to Install the Agent"}),(0,r.jsx)(n.th,{children:"Department"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ECS-01"}),(0,r.jsx)(n.td,{children:"Development team resources"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Development team"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ECS-02"}),(0,r.jsx)(n.td,{children:"Development team resources"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Development team"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ECS-03"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Test team"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ECS-04"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Test team"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table 1"})," ECS list and group planning"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["The Agent has been installed on ECS-01 and ECS-02. For details, see ",(0,r.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-eye/umn/server_monitoring/agent_installation_and_configuration.html",children:"Agent Installation and Configuration"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-resource-group",children:"Creating a Resource Group"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the upper left corner, select a region and a project."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Choose ",(0,r.jsx)(n.em,{children:"Service List"})," -> ",(0,r.jsx)(n.em,{children:"Management & Deployment"})," -> ",(0,r.jsx)(n.em,{children:"Cloud Eye"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the navigation pane on the left, choose ",(0,r.jsx)(n.em,{children:"Resource Groups"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the upper right corner, click ",(0,r.jsx)(n.em,{children:"Create Resource Group"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter the group name as prompted. In this example, enter ",(0,r.jsx)(n.em,{children:"Development-group-resources"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select the target cloud service resources."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 1 Selecting cloud service resources",src:i(7328).A+"",width:"1788",height:"413"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.em,{children:"Create"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-topic-and-configuring-the-notification-object",children:"Creating a Topic and Configuring the Notification Object"}),"\n",(0,r.jsx)(n.p,{children:"When resource exceptions occur, an alarm notification can be sent to the configured topic subscribers."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the upper left corner, select a region and a project."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.em,{children:"Application"}),", select ",(0,r.jsx)(n.em,{children:"Simple Message Notification"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The SMN console is displayed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the navigation pane on the left, choose ",(0,r.jsx)(n.em,{children:"Topics"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"Topics"})," page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the upper right corner, click ",(0,r.jsx)(n.em,{children:"Create Topic"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"Create Topic"})," dialog box is displayed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 2 Create Topic",src:i(48356).A+"",width:"624",height:"407"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter a topic name and display name."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.em,{children:"OK."})]}),"\n",(0,r.jsx)(n.p,{children:"The topic you created is displayed in the topic list."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Click the topic name to view the topic details and the total number of topic subscriptions."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the topic list, locate the new topic. Click the topic name and in the upper right corner, select ",(0,r.jsx)(n.em,{children:"Add Subscription"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 3 Add Subscription",src:i(17959).A+"",width:"649",height:"845"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the subscription protocol and endpoints."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.em,{children:"OK"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The subscriptions you added are displayed in the subscription list."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-an-alarm-rule",children:"Creating an Alarm Rule"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Log in to the management console."}),"\n",(0,r.jsx)(n.li,{children:"In the upper left corner, select a region and a project."}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.em,{children:"Service List"})," -> ",(0,r.jsx)(n.em,{children:"Management & Deployment"})," -> ",(0,r.jsx)(n.em,{children:"Cloud Eye"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In the navigation pane on the left, choose ",(0,r.jsx)(n.em,{children:"Alarm Management"})," -> ",(0,r.jsx)(n.em,{children:"Alarm Rules"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In the upper right corner, click ",(0,r.jsx)(n.em,{children:"Create Alarm Rule"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.em,{children:"Create Alarm Rule"})," page, follow the prompts to set the parameters.","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set the alarm rule name."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 4 Setting an alarm rule name",src:i(37372).A+"",width:"860",height:"157"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set the monitored object and alarm triggering conditions."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 5 Configuring an alarm rule",src:i(31385).A+"",width:"1801",height:"707"})}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.strong,{children:"Group"})," to ",(0,r.jsx)(n.em,{children:"Development group resources"})," created in ",(0,r.jsx)(n.a,{href:"#step-1-creating-a-resource-group",children:"Step 1 Creating a Resource Group"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.strong,{children:"Alarm Notification"})," parameters."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 6 Configuring alarm notification",src:i(13738).A+"",width:"1042",height:"195"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Note: When configuring ",(0,r.jsx)(n.strong,{children:"Notification Object"}),", select ",(0,r.jsx)(n.strong,{children:"Mytopic"})," created in ",(0,r.jsx)(n.a,{href:"#step-2-creating-a-topic-and-configuring-the-notification-object",children:"Step 2 Creating a Topic and Configuring the Notification Object"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.em,{children:"Create"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After the alarm rule is added, if the metric data reaches the threshold, Cloud Eye immediately informs you that the metric data of group ",(0,r.jsx)(n.strong,{children:"Development group resources"})," (ECS-01 and ECS-02) is abnormal through SMN."]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},37372:(e,n,i)=>{i.d(n,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1wAAACdCAYAAACguXlIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABFpSURBVHhe7d0PlNd1ne/xFyBjTg1qssrQQoAUrH+mRcG64bboWTVZi7bFttSsVc8tu+5eqQN6wq6Uq0elwk1T64iVi+uGtIkVmrgudh1TUOcuKDuzInjhyqCNy791iBmB+/v95osaodnGlx308Tjnd/i+P9/vb34z58wZePL9/r7TZ0dFAAAA2OP6Fn8CAACwhwkuAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkgguAACAkvTZUVFsw16x+epF2TjjnuzY0l2swMv6HNA/B844OQ3TJhQrAAD7LsHFXvf/6r+YQcunZr9hBxcr8LIXn16fdUfMzO93XlGsAADsu1xSyF5XPbMltng11e8NZz8BgDcKwQUAAFASwQUAAFASwQUAAFASwQUAAFASwQUAAFASwcU+Z+mN7881/6cYSrY3XwsAgDee0oOr86HZeeahDcW0e+0/mZHPTLkxizuLhap1CzLj0gVpL0Z4SVdXsbEX7PJazz98c87/k7G/GmFr78vV552ZM8+uPD4/J22v/D4GAOBNrfTg2rZqQbas+mUxvbr6vm25/fuPx2/fobfa/LOr85VlR2fSxGKhZm3mTp+TYZfcmltvuTXfOaMjV920NHsxCQEA6MXKCa4VP8+zrRvyYjHu9ELrgvxiRTHs4sATz82fdnwvtyzdTXJtas61F0/N1Opj6vTc+NCm2nLLtz+TG+9pzuwvT8/UL0zJVXe1pvUn12bGxVNywdRZWbSudljl38SLcu2lxfOvmp+VW4t1erVq4NTOGlUf512TJbs5Ufpqxyz9xthc88P7ctlfnpJpC57vmX/anOv/+pycOfn0XLKgLW13Xp3zzz49p5xxWe57rud5r6XhA9Pyt+eNy+D9ioWajqxd1pTRw3qmurEnZuydD6T1327OpCubi/DqSvOVY3PJvZtrU7YtzTWTb07btp4RAIA3rlKC6z/WPJjOae/PyqP/NL+4bVV2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"},31385:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/en-us_image_0229987653-2a7a7ddaa377b3559621fbcc18d74d1d.png"},13738:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/en-us_image_0229987913-ba93a3d6acbb320896f1e57c635c27ac.png"},7328:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/en-us_image_0230389993-16d66c875d91e81939eb01db19919f03.png"},48356:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/en-us_image_0230390003-fac47ca7c6649e6ea0cda69fb555ff99.png"},17959:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/en-us_image_0230391072-a96675b44e91f0778c39bd3aeca27131.png"},28453:(e,n,i)=>{i.d(n,{R:()=>A,x:()=>c});var r=i(96540);const t={},s=r.createContext(t);function A(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:A(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);