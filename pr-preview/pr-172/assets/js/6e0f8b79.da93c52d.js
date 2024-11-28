"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[22076],{40921:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=s(74848),o=s(28453);const i={id:"application-dynamic-subnets",title:"Design with dynamic subnets",tags:["multi-cloud","google","gcp","cloud-create"]},c="Design with dynamic subnets",r={id:"best-practices/management-and-deployment/cloud-create/google-cloud/application-dynamic-subnets",title:"Design with dynamic subnets",description:"The Section Design your application with static subnets in multiple regions shows how to define multiple subnets for a network explicitly. However, users may not want to define the subnets explicitly. In such a case, the Cloud Create will auto-generate one subnet for each region dynamically as follows:",source:"@site/docs/best-practices/management-and-deployment/cloud-create/google-cloud/application-dynamic-subnets.md",sourceDirName:"best-practices/management-and-deployment/cloud-create/google-cloud",slug:"/best-practices/management-and-deployment/cloud-create/google-cloud/application-dynamic-subnets",permalink:"/docs-next/pr-preview/pr-172/docs/best-practices/management-and-deployment/cloud-create/google-cloud/application-dynamic-subnets",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/management-and-deployment/cloud-create/google-cloud/application-dynamic-subnets.md",tags:[{inline:!0,label:"multi-cloud",permalink:"/docs-next/pr-preview/pr-172/docs/tags/multi-cloud"},{inline:!0,label:"google",permalink:"/docs-next/pr-preview/pr-172/docs/tags/google"},{inline:!0,label:"gcp",permalink:"/docs-next/pr-preview/pr-172/docs/tags/gcp"},{inline:!0,label:"cloud-create",permalink:"/docs-next/pr-preview/pr-172/docs/tags/cloud-create"}],version:"current",frontMatter:{id:"application-dynamic-subnets",title:"Design with dynamic subnets",tags:["multi-cloud","google","gcp","cloud-create"]},sidebar:"bestPracticesSidebar",previous:{title:"Design with static subnets in multiple regions",permalink:"/docs-next/pr-preview/pr-172/docs/best-practices/management-and-deployment/cloud-create/google-cloud/multi-region"},next:{title:"Service catalogs",permalink:"/docs-next/pr-preview/pr-172/docs/best-practices/management-and-deployment/cloud-create/service-catalogs/"}},l={},d=[{value:"Design",id:"design",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Case 1. Two computes in the same region",id:"case-1-two-computes-in-the-same-region",level:3},{value:"Expected result",id:"expected-result",level:4},{value:"Case 2. Two computes in different regions",id:"case-2-two-computes-in-different-regions",level:3},{value:"Expected result",id:"expected-result-1",level:4}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"design-with-dynamic-subnets",children:"Design with dynamic subnets"}),"\n",(0,n.jsxs)(t.p,{children:["The Section ",(0,n.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/google/multi_regions.html#google-static-subnets",children:"Design your application with static subnets in multiple regions"})," shows how to define multiple subnets for a network ",(0,n.jsx)(t.strong,{children:"explicitly"}),". However, users may not want to define the subnets explicitly. In such a case, the Cloud Create will auto-generate one subnet for each region dynamically as follows:"]}),"\n",(0,n.jsx)(t.h2,{id:"design",children:"Design"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Design an application with two computes connecting to the same ",(0,n.jsx)(t.code,{children:"Private"})," network. The Private network has no subnets."]}),"\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.code,{children:"Private"})," network and specify the ",(0,n.jsx)(t.strong,{children:"cidr"}),": ",(0,n.jsx)(t.code,{children:"10.0.0.0/24"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Connect the first compute (e.g., ",(0,n.jsx)(t.code,{children:"Compute"}),") to the ",(0,n.jsx)(t.code,{children:"Public"})," network."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets.png",children:(0,n.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets.png",alt:"../_images/auto-subnets.png"})})}),"\n",(0,n.jsx)(t.p,{children:"Figure 1. Auto-generated subnet example"}),"\n",(0,n.jsx)(t.h2,{id:"deploy",children:"Deploy"}),"\n",(0,n.jsx)(t.h3,{id:"case-1-two-computes-in-the-same-region",children:"Case 1. Two computes in the same region"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.strong,{children:"Deploy"})," / ",(0,n.jsx)(t.strong,{children:"Google"})," / ",(0,n.jsx)(t.strong,{children:"Configure cloud provider"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Choose the ",(0,n.jsx)(t.strong,{children:"zone"})," for the two computes in the ",(0,n.jsx)(t.strong,{children:"same region"})," ",(0,n.jsx)(t.code,{children:"europe-west1"})," (e.g., choose ",(0,n.jsx)(t.code,{children:"europe-west1-b"})," and ",(0,n.jsx)(t.code,{children:"europe-west1-c"})," for ",(0,n.jsx)(t.code,{children:"Compute"})," and ",(0,n.jsx)(t.code,{children:"Compute_2"}),", respectively)."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"expected-result",children:"Expected result"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Google Cloud requires one region has at least one subnet. The designer auto-generates one subnet ",(0,n.jsx)(t.code,{children:"Private_subnet_europe_west1"})," for the region ",(0,n.jsx)(t.code,{children:"europe-west1"})," in the ",(0,n.jsx)(t.code,{children:"Private"})," network."]}),"\n",(0,n.jsxs)(t.li,{children:["The subnet has the ",(0,n.jsx)(t.strong,{children:"same cidr"})," of the ",(0,n.jsx)(t.code,{children:"Private"})," network (i.e., ",(0,n.jsx)(t.code,{children:"10.0.0.0/24"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Both computes ",(0,n.jsx)(t.code,{children:"Compute"})," and ",(0,n.jsx)(t.code,{children:"Compute-2"})," connect to this subnet."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets2.png",children:(0,n.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets2.png",alt:"../_images/auto-subnets2.png"})})}),"\n",(0,n.jsx)(t.p,{children:"Figure 2. Private_subnet_europe_west1 is auto-generated for two computes in one region"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"routing_mode"})," of the ",(0,n.jsx)(t.code,{children:"Private"})," network is auto set to ",(0,n.jsx)(t.code,{children:"REGIONAL"})," (if not set) since all computes are in the same region."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result1b.png",children:(0,n.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result1b.png",alt:"../_images/auto-subnets-result1b.png"})})}),"\n",(0,n.jsx)(t.p,{children:"Figure 3. The routing_mode is auto set to REGIONAL"}),"\n",(0,n.jsx)(t.h3,{id:"case-2-two-computes-in-different-regions",children:"Case 2. Two computes in different regions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.strong,{children:"Deploy"})," / ",(0,n.jsx)(t.strong,{children:"Google"})," / ",(0,n.jsx)(t.strong,{children:"Configure cloud provider"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Choose the ",(0,n.jsx)(t.strong,{children:"zone"})," for the computes in ",(0,n.jsx)(t.strong,{children:"two different regions"})," (e.g., choose the zone ",(0,n.jsx)(t.code,{children:"europe-north1-a"})," and ",(0,n.jsx)(t.code,{children:"europe-west1-c"})," for ",(0,n.jsx)(t.code,{children:"Compute"})," and ",(0,n.jsx)(t.code,{children:"Compute_2"}),", respectively)."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"expected-result-1",children:"Expected result"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Google Cloud requires one region has at least one subnet. Because we have two regions, the designer auto-generates two subnets for the region ",(0,n.jsx)(t.code,{children:"europe-north1"})," and ",(0,n.jsx)(t.code,{children:"europe-west1"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The cidr of the ",(0,n.jsx)(t.code,{children:"Private"})," network (i.e., ",(0,n.jsx)(t.code,{children:"10.0.0.0/24"}),") is ",(0,n.jsx)(t.strong,{children:"auto subnetting"})," in two ",(0,n.jsx)(t.strong,{children:"equal ranges"})," for each subnet (i.e., ",(0,n.jsx)(t.code,{children:"10.0.0.0/25"})," and ",(0,n.jsx)(t.code,{children:"10.0.0.128/25"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"Two computes connect to two separated subnets in different regions."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2.png",children:(0,n.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2.png",alt:"../_images/auto-subnets-result2.png"})})}),"\n",(0,n.jsx)(t.p,{children:"Figure 4. Two subnets are auto-generated for two regions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"routing_mode"})," of the ",(0,n.jsx)(t.code,{children:"Private"})," network is auto set to ",(0,n.jsx)(t.code,{children:"GLOBAL"})," (if not set) so that the two computes from different regions can access each other via the internal IP address."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2b.png",children:(0,n.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2b.png",alt:"../_images/auto-subnets-result2b.png"})})}),"\n",(0,n.jsx)(t.p,{children:"Figure 5. The routing_mode is auto set to GLOBAL"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Auto-generated subnet is useful if you cannot decide the location of the computes at the design time (i.e., whether the computes are co-located in one or in different regions) but at the deployment time. In such a case, Cloud Create will transform the topology before the deployment for you."})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var n=s(96540);const o={},i=n.createContext(o);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);