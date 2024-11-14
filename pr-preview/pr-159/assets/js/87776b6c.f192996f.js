"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[34715],{91995:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(74848),r=s(28453);const t={id:"using-advanced-forwarding-for-application-iteration",title:"Using Advanced Forwarding for Application Iteration",tags:["vpc","elb","load-balancing"]},d="Using Advanced Forwarding for Application Iteration",a={id:"best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration",title:"Using Advanced Forwarding for Application Iteration",description:"As the business grows, you may need to upgrade your application. Both",source:"@site/docs/best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration.md",sourceDirName:"best-practices/networking/elastic-load-balancing",slug:"/best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration",permalink:"/docs-next/pr-preview/pr-159/docs/best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration.md",tags:[{inline:!0,label:"vpc",permalink:"/docs-next/pr-preview/pr-159/docs/tags/vpc"},{inline:!0,label:"elb",permalink:"/docs-next/pr-preview/pr-159/docs/tags/elb"},{inline:!0,label:"load-balancing",permalink:"/docs-next/pr-preview/pr-159/docs/tags/load-balancing"}],version:"current",frontMatter:{id:"using-advanced-forwarding-for-application-iteration",title:"Using Advanced Forwarding for Application Iteration",tags:["vpc","elb","load-balancing"]},sidebar:"bestPracticesSidebar",previous:{title:"Configuring Private Domain Names for ECSs",permalink:"/docs-next/pr-preview/pr-159/docs/best-practices/networking/domain-name-service/configuring-private-domain-names-for-ecss"},next:{title:"Routing Traffic to Backend Servers in the Same VPC as the Load Balancer",permalink:"/docs-next/pr-preview/pr-159/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer"}},o={},c=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedure",id:"procedure",level:3},{value:"Configuring a Dedicated Load Balancer",id:"configuring-a-dedicated-load-balancer",level:2},{value:"Creating Backend Server Groups and Adding Backend Servers",id:"creating-backend-server-groups-and-adding-backend-servers",level:2},{value:"Forwarding Requests to Different Versions of the Application based on HTTP Request Methods",id:"forwarding-requests-to-different-versions-of-the-application-based-on-http-request-methods",level:2},{value:"Forwarding Requests to Different Versions of the Application based on HTTP Headers",id:"forwarding-requests-to-different-versions-of-the-application-based-on-http-headers",level:2},{value:"Forwarding Requests to Different Versions of the Application based on Query Strings",id:"forwarding-requests-to-different-versions-of-the-application-based-on-query-strings",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"using-advanced-forwarding-for-application-iteration",children:"Using Advanced Forwarding for Application Iteration"}),"\n",(0,i.jsx)(n.p,{children:"As the business grows, you may need to upgrade your application. Both\nthe old and new versions are used. Now, the new version is optimized\nbased on users'  feedback, and you want all the users to use the new\nversion. In this process, you can use advanced forwarding to route\nrequests to different versions."}),"\n",(0,i.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An Open Telekom Cloud account is available and real-name\nauthentication has been completed."}),"\n",(0,i.jsx)(n.li,{children:"The account balance is sufficient to pay for the resources involved\nin this best practice."}),"\n",(0,i.jsx)(n.li,{children:"Six (6) ECSs are available, with three having the application of the old\nversion deployed and the other three having the new version\ndeployed."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1\nFlowchart",src:s(73928).A+"",width:"611",height:"480"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Resource Name"}),(0,i.jsx)(n.th,{children:"Resource Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ELB-Test"}),(0,i.jsx)(n.td,{children:"Dedicated"}),(0,i.jsx)(n.td,{children:"Only dedicated load balancers support advanced load balancer forwarding."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Server_Group-Test01"}),(0,i.jsx)(n.td,{children:"Backend"}),(0,i.jsx)(n.td,{children:"Used to manage the ECSs where the application  server group  of the old version is deployed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Server_Group-Test02"}),(0,i.jsx)(n.td,{children:"Backend"}),(0,i.jsx)(n.td,{children:"Used to manage the ECSs where the application  server group  of the new version is deployed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS01"}),(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsxs)(n.td,{children:["Used to deploy the application of the old      version and added to ",(0,i.jsx)(n.em,{children:"Server_Group-Test01"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS02"}),(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsxs)(n.td,{children:["Used to deploy the application of the old      version and added to ",(0,i.jsx)(n.em,{children:"Server_Group-Test01"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS03"}),(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsxs)(n.td,{children:["Used to deploy the application of the old      version and added to ",(0,i.jsx)(n.em,{children:"Server_Group-Test01"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS04"}),(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsxs)(n.td,{children:["Used to deploy the application of the new       version and added to ",(0,i.jsx)(n.em,{children:"Server_Group-Test02"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS05"}),(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsxs)(n.td,{children:["Used to deploy the application of the new       version and added to ",(0,i.jsx)(n.em,{children:"Server_Group-Test02"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS06"}),(0,i.jsx)(n.td,{children:"ECS"}),(0,i.jsxs)(n.td,{children:["Used to deploy the application of the new      version and added to ",(0,i.jsx)(n.em,{children:"Server_Group-Test02"}),"."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 1"})," Resource planning"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In this practice, the dedicated load balancer is in the same VPC as the\nECSs. You can also add servers in a different VPC or in an on-premises\ndata center as needed. For details, see\n",(0,i.jsx)(n.a,{href:"/docs-next/pr-preview/pr-159/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer",children:"Routing Traffic to Backend Servers in Different VPCs"})]})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-a-dedicated-load-balancer",children:"Configuring a Dedicated Load Balancer"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.em,{children:"Networking"}),", click ",(0,i.jsx)(n.em,{children:"Elastic Load Balance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the upper right corner, click ",(0,i.jsx)(n.em,{children:"Create Elastic Load Balancer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a dedicated load balancer ",(0,i.jsx)(n.em,{children:"ELB-Test"}),". Configure the\nparameters as follows. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/load_balancer/creating_a_dedicated_load_balancer.html",children:"Elastic Load Balance User\nGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"Dedicated"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"ELB-Test"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add an HTTP listener to ",(0,i.jsx)(n.em,{children:"ELB-Test"}),". For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/listener/adding_an_http_listener.html",children:"Elastic Load\nBalance User\nGuide"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 2 HTTP\nlistener",src:s(58527).A+"",width:"1232",height:"526"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enable advanced forwarding. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/advanced_features_of_http_https_listeners/advanced_forwarding_dedicated_load_balancers/configuring_advanced_forwarding.html",children:"Elastic Load Balance\nUser\nGuide"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 3 Enabling advanced\nforwarding",src:s(90267).A+"",width:"1162",height:"379"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-backend-server-groups-and-adding-backend-servers",children:"Creating Backend Server Groups and Adding Backend Servers"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate ",(0,i.jsx)(n.em,{children:"ELB-Test"})," and click its name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Listeners"})," tab, click ",(0,i.jsx)(n.em,{children:"Create Backend Server Group"})," in\nthe upper right corner."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Name: ",(0,i.jsx)(n.code,{children:"Server_Group-Test01"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Backend Protocol"}),": ",(0,i.jsx)(n.code,{children:"HTTP"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure other parameters as required."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Repeat ",(0,i.jsx)(n.em,{children:"Step 2"})," to create backend server group ",(0,i.jsx)(n.code,{children:"Server_Group-Test02"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 4 Backend server\ngroups",src:s(86585).A+"",width:"1232",height:"305"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"ECS01"}),", ",(0,i.jsx)(n.code,{children:"ECS02"}),", and ",(0,i.jsx)(n.code,{children:"ECS03"})," to backend server group\n",(0,i.jsx)(n.code,{children:"Server_Group-Test01"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"ECS04"}),", ",(0,i.jsx)(n.code,{children:"ECS05"}),", and ",(0,i.jsx)(n.code,{children:"ECS06"})," to backend server group\n",(0,i.jsx)(n.code,{children:"Server_Group-Test02"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"forwarding-requests-to-different-versions-of-the-application-based-on-http-request-methods",children:"Forwarding Requests to Different Versions of the Application based on HTTP Request Methods"}),"\n",(0,i.jsx)(n.p,{children:"Configure two advanced forwarding policies with the HTTP request method\nas the condition to route GET and DELETE requests to the application of\nthe old version and POST and PUT requests to the application of the new\nversion. When the application of the new version runs stably, direct all\nthe requests to the application."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 5 Forwarding requests based on HTTP request\nmethods",src:s(29227).A+"",width:"638",height:"586"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the dedicated load balancer and click its name ",(0,i.jsx)(n.em,{children:"ELB-Test"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Listeners"})," tab page, locate the HTTP listener added to the\ndedicated load balancer and click its name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Forwarding Policies"})," tab page on the right, click ",(0,i.jsx)(n.em,{children:"Add\nForwarding Policy"})," to forward GET and DELETE requests to the old\nversion."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"GET"})," and ",(0,i.jsx)(n.em,{children:"DELETE"})," from the ",(0,i.jsx)(n.em,{children:"HTTP request method"}),"\ndrop-down list, select ",(0,i.jsx)(n.em,{children:"Forward to backend server group"})," for\n",(0,i.jsx)(n.em,{children:"Action"}),", and select ",(0,i.jsx)(n.em,{children:"Server_Group-Test01"})," from the ",(0,i.jsx)(n.em,{children:"Backend\nServer Group"})," drop-down list."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 6 Forwarding GET and DELETE requests to the application\nof the old\nversion",src:s(49178).A+"",width:"1201",height:"524"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"Save"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Repeat ",(0,i.jsx)(n.em,{children:"Step 3"})," and ",(0,i.jsx)(n.em,{children:"Step 4"})," to add a forwarding policy to forward PUT and POST\nrequests to the application of the new version."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"PUT"})," and ",(0,i.jsx)(n.em,{children:"POST"})," from the ",(0,i.jsx)(n.em,{children:"HTTP request method"}),"\ndrop-down list, select ",(0,i.jsx)(n.em,{children:"Forward to backend server group"})," for\n",(0,i.jsx)(n.em,{children:"Action"}),", and select ",(0,i.jsx)(n.em,{children:"Server_Group-Test02"})," from the ",(0,i.jsx)(n.em,{children:"Backend\nServer Group"})," drop-down list."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 7 Forwarding PUT and POST requests to the application\nof the new\nversion",src:s(49197).A+"",width:"1201",height:"529"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"forwarding-requests-to-different-versions-of-the-application-based-on-http-headers",children:"Forwarding Requests to Different Versions of the Application based on HTTP Headers"}),"\n",(0,i.jsx)(n.p,{children:"If the old version supports for example both Chinese and English, but the new\nversion only supports English because the Chinese version is still under\ndevelopment, you can configure two advanced forwarding policies with the\nHTTP header as the condition to route requests to the Chinese\napplication to the old version and requests to the English application\nto the new version. When the application of the new version supports the\nChinese language, direct all the requests to the application."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 8 Smooth application transition between the old and new\nversions based on the HTTP request\nheader",src:s(21037).A+"",width:"655",height:"583"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the dedicated load balancer and click its name ",(0,i.jsx)(n.em,{children:"ELB-Test"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Listeners"})," tab page, locate the HTTP listener added to the\ndedicated load balancer and click its name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Forwarding Policies"})," tab page on the right, and click\n",(0,i.jsx)(n.em,{children:"Add Forwarding Policy"})," to forward requests to the old version."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"HTTP header"})," from the drop-down list, set the key to\n",(0,i.jsx)(n.em,{children:"Accept-Language"})," and value to ",(0,i.jsx)(n.em,{children:"zh-cn"}),", set the action to\n",(0,i.jsx)(n.em,{children:"Forward to backend server group"}),", and select\n",(0,i.jsx)(n.em,{children:"Server_Group-Test01"})," as the backend server group."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 9 Forwarding requests to the application of the old\nversion",src:s(49381).A+"",width:"1203",height:"524"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"Save"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Repeat ",(0,i.jsx)(n.em,{children:"Step 3"})," and ",(0,i.jsx)(n.em,{children:"Step 4"})," to add a forwarding policy to add a forwarding policy to forward requests to the application of the new version."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"HTTP header"})," from the drop-down list, set the key to\n",(0,i.jsx)(n.em,{children:"Accept-Language"})," and value to ",(0,i.jsx)(n.em,{children:"en-us"}),", set the action to\n",(0,i.jsx)(n.em,{children:"Forward to backend server group"}),", and select\n",(0,i.jsx)(n.em,{children:"Server_Group-Test02"})," as the backend server group."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 10 Forwarding requests to the application of the new\nversion",src:s(63152).A+"",width:"1198",height:"529"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"forwarding-requests-to-different-versions-of-the-application-based-on-query-strings",children:"Forwarding Requests to Different Versions of the Application based on Query Strings"}),"\n",(0,i.jsx)(n.p,{children:"If the application is deployed across regions, you can configure two\nadvanced forwarding policies with query string as the condition to\nforward requests to the application in region 1 to the old version and\nrequests to the application in region 2 to the new version. When the\napplication of the new version runs stably, direct all the requests to\nthe new version."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 11 Forwarding requests based on query\nstrings",src:s(16393).A+"",width:"637",height:"586"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dedicated load balancers can distribute traffic across VPCs or\nregions."}),"\n",(0,i.jsx)(n.li,{children:"In this example, you need to use Cloud Connect to connect the VPCs\nin the two regions and then use the dedicated load balancer to route\ntraffic to backend servers in the two regions."}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the dedicated load balancer and click its name ",(0,i.jsx)(n.em,{children:"ELB-Test"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Listeners"})," tab page, locate the HTTP listener added to the\ndedicated load balancer and click its name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Forwarding Policies"})," tab page on the right, and click\n",(0,i.jsx)(n.em,{children:"Add Forwarding Policy"})," to forward requests to application of the\nold version."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"Query string"})," from the drop-down list, set the key to\n",(0,i.jsx)(n.em,{children:"region"})," and value to ",(0,i.jsx)(n.em,{children:"region01"}),", set ",(0,i.jsx)(n.em,{children:"Action"})," to ",(0,i.jsx)(n.em,{children:"Forward to\nbackend server group"}),", and select ",(0,i.jsx)(n.em,{children:"Server_Group-Test01"})," as the\nbackend server group."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 12 Forwarding requests to the old\nversion",src:s(10281).A+"",width:"1189",height:"519"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"Save"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Repeat ",(0,i.jsx)(n.em,{children:"Step 3"})," and ",(0,i.jsx)(n.em,{children:"Step 4"})," to add a forwarding policy to add a forwarding policy to forward requests to the\napplication of the new version."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"Query string"})," from the drop-down list, set the key to\n",(0,i.jsx)(n.em,{children:"region"})," and value to ",(0,i.jsx)(n.em,{children:"region02"}),", set ",(0,i.jsx)(n.em,{children:"Action"})," to ",(0,i.jsx)(n.em,{children:"Forward to\nbackend server group"}),", and select ",(0,i.jsx)(n.em,{children:"Server_Group-Test02"})," as the\nbackend server group."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 13 Forwarding requests to the new\nversion",src:s(63524).A+"",width:"1194",height:"531"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},90267:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001220740254-232f350a0ed64a22c8485d8836138e96.png"},73928:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001221220190-3daa23376bf75c814abe45d0a2692851.png"},16393:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001221308334-e2a5149aeefa35200c7f30a83e9047e1.png"},10281:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001221328134-9603fc588cffe906afa7b1fad02768d4.png"},58527:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265145841-749bba47973dd4eae91c0dc4c88a8a1a.png"},21037:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265465929-3384597acfc8887ec4808b1d10e8898b.png"},63152:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265488349-dc41f8898ab4f1aab9a2dd036fdc3af0.png"},86585:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265579817-e2013aaddc7d640d0e40b903ee5bc473.png"},49197:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265646757-3f551813bee4b0091e4e5f4295a74419.png"},63524:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265648321-20b6a5d21696c5dafdae228890194f74.png"},29227:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265745537-eb5aef442320fd3809ccbd755687c0d0.png"},49178:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265924809-9b21f116b66b1c8666bd1fb85a29c267.png"},49381:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001265928345-db9a28dfd60ac9225a70e1ec6e796e0b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var i=s(96540);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);