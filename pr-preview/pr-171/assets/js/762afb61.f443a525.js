"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[14788],{75838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(74848),o=t(28453);const i={id:"multi-region",title:"Design with static subnets in multiple regions",tags:["multi-cloud","google","gcp","cloud-create"]},c="Design with static subnets in multiple regions",r={id:"best-practices/management-and-deployment/cloud-create/google-cloud/multi-region",title:"Design with static subnets in multiple regions",description:"The following tutorial describes how to design an application with one (global) private network spanning in two regions of Google Cloud. Each region has one subnet and one compute connecting to the subnet (e.g., Compute connects to Subnet, Compute2 connects to Subnet2). The compute in the first region (e.g., Compute) has access to the internet.",source:"@site/docs/best-practices/management-and-deployment/cloud-create/google-cloud/multi-region.md",sourceDirName:"best-practices/management-and-deployment/cloud-create/google-cloud",slug:"/best-practices/management-and-deployment/cloud-create/google-cloud/multi-region",permalink:"/docs-next/pr-preview/pr-171/docs/best-practices/management-and-deployment/cloud-create/google-cloud/multi-region",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/management-and-deployment/cloud-create/google-cloud/multi-region.md",tags:[{inline:!0,label:"multi-cloud",permalink:"/docs-next/pr-preview/pr-171/docs/tags/multi-cloud"},{inline:!0,label:"google",permalink:"/docs-next/pr-preview/pr-171/docs/tags/google"},{inline:!0,label:"gcp",permalink:"/docs-next/pr-preview/pr-171/docs/tags/gcp"},{inline:!0,label:"cloud-create",permalink:"/docs-next/pr-preview/pr-171/docs/tags/cloud-create"}],version:"current",frontMatter:{id:"multi-region",title:"Design with static subnets in multiple regions",tags:["multi-cloud","google","gcp","cloud-create"]},sidebar:"bestPracticesSidebar",previous:{title:"How to deploy your application on Google Cloud",permalink:"/docs-next/pr-preview/pr-171/docs/best-practices/management-and-deployment/cloud-create/google-cloud/google-deploy"},next:{title:"Design with dynamic subnets",permalink:"/docs-next/pr-preview/pr-171/docs/best-practices/management-and-deployment/cloud-create/google-cloud/application-dynamic-subnets"}},d={},l=[{value:"Design",id:"design",level:2},{value:"Define a subnet for the network",id:"define-a-subnet-for-the-network",level:3},{value:"Connect a compute to the subnet",id:"connect-a-compute-to-the-subnet",level:3},{value:"Define a CIDR range for the subnet",id:"define-a-cidr-range-for-the-subnet",level:3},{value:"Define a fixed ip address for the compute (optional)",id:"define-a-fixed-ip-address-for-the-compute-optional",level:3},{value:"Define the second compute and subnet",id:"define-the-second-compute-and-subnet",level:3},{value:"Connect the first compute to the public",id:"connect-the-first-compute-to-the-public",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Expected result",id:"expected-result",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"design-with-static-subnets-in-multiple-regions",children:"Design with static subnets in multiple regions"}),"\n",(0,s.jsxs)(n.p,{children:["The following tutorial describes how to design an application with one (global) private network spanning in two regions of Google Cloud. Each region has one subnet and one compute connecting to the subnet (e.g., ",(0,s.jsx)(n.code,{children:"Compute"})," connects to ",(0,s.jsx)(n.code,{children:"Subnet"}),", ",(0,s.jsx)(n.code,{children:"Compute_2"})," connects to ",(0,s.jsx)(n.code,{children:"Subnet_2"}),"). The compute in the first region (e.g., ",(0,s.jsx)(n.code,{children:"Compute"}),") has access to the internet."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions.png",alt:"../_images/multi-regions.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 1. Multiple subnets example"}),"\n",(0,s.jsx)(n.h2,{id:"design",children:"Design"}),"\n",(0,s.jsx)(n.h3,{id:"define-a-subnet-for-the-network",children:"Define a subnet for the network"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Drop the ",(0,s.jsx)(n.strong,{children:"Subnet"})," component on the ",(0,s.jsx)(n.strong,{children:"Private"})," network."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step1.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step1.png",alt:"../_images/subnet-step1.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 2. Define a subnet"}),"\n",(0,s.jsx)(n.h3,{id:"connect-a-compute-to-the-subnet",children:"Connect a compute to the subnet"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on the network point (on the right side of the ",(0,s.jsx)(n.strong,{children:"Compute"}),") and connect it to the connection point of the ",(0,s.jsx)(n.strong,{children:"Subnet"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step2.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step2.png",alt:"../_images/subnet-step2.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 3. Connect a compute to the subnet"}),"\n",(0,s.jsx)(n.h3,{id:"define-a-cidr-range-for-the-subnet",children:"Define a CIDR range for the subnet"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Subnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Type ",(0,s.jsx)(n.code,{children:"10.0.0.0/24"})," in the ",(0,s.jsx)(n.strong,{children:"cidr"})," field."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step3.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step3.png",alt:"../_images/subnet-step3.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 3. Define CIDR"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The cidr field is mandatory for defining a subnet."})}),"\n",(0,s.jsx)(n.h3,{id:"define-a-fixed-ip-address-for-the-compute-optional",children:"Define a fixed ip address for the compute (optional)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Port"})," of the compute."]}),"\n",(0,s.jsxs)(n.li,{children:["Type ",(0,s.jsx)(n.code,{children:"10.0.0.3"})," in the ",(0,s.jsx)(n.strong,{children:"ip_address"})," field. The ip_address ",(0,s.jsx)(n.code,{children:"10.0.0.3"})," is within the range of the network above (",(0,s.jsx)(n.code,{children:"10.0.0.0/24"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step4.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step4.png",alt:"../_images/subnet-step4.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 4. Define fixed ip address"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If no ip_address specified, an ip address will be auto-generated within the ip range of the subnet during the deployment."})}),"\n",(0,s.jsx)(n.h3,{id:"define-the-second-compute-and-subnet",children:"Define the second compute and subnet"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Drop another ",(0,s.jsx)(n.strong,{children:"Subnet"})," component on the Private network. Now we have two subnets: ",(0,s.jsx)(n.code,{children:"Subnet"})," and ",(0,s.jsx)(n.code,{children:"Subnet_2"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Subnet_2"}),". Type ",(0,s.jsx)(n.code,{children:"10.0.1.0/24"})," in the ",(0,s.jsx)(n.strong,{children:"cidr"})," field."]}),"\n",(0,s.jsxs)(n.li,{children:["Drop another ",(0,s.jsx)(n.strong,{children:"Compute"})," component (e.g., ",(0,s.jsx)(n.code,{children:"Compute_2"}),") and connect it to ",(0,s.jsx)(n.strong,{children:"Subnet_2"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step5.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step5.png",alt:"../_images/subnet-step5.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 5. Define second subnet"}),"\n",(0,s.jsx)(n.h3,{id:"connect-the-first-compute-to-the-public",children:"Connect the first compute to the public"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Drop a ",(0,s.jsx)(n.strong,{children:"Public"})," network."]}),"\n",(0,s.jsxs)(n.li,{children:["Connect the ",(0,s.jsx)(n.strong,{children:"Port"})," of ",(0,s.jsx)(n.code,{children:"Compute"})," to the link point (on the left side) of the ",(0,s.jsx)(n.strong,{children:"Public"})," network."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step6.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step6.png",alt:"../_images/subnet-step6.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 6. Connect compute to public"}),"\n",(0,s.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Deploy"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Choose the ",(0,s.jsx)(n.strong,{children:"Google"})," provider."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Configure cloud provider"}),":"]}),"\n",(0,s.jsxs)(n.li,{children:["Choose the ",(0,s.jsx)(n.strong,{children:"zone"})," for the computes in ",(0,s.jsx)(n.strong,{children:"different regions"})," (e.g., ",(0,s.jsx)(n.code,{children:"europe-north1-a"})," for ",(0,s.jsx)(n.code,{children:"Compute"})," and ",(0,s.jsx)(n.code,{children:"europe-west1-c"})," for ",(0,s.jsx)(n.code,{children:"Compute_2"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7.png",alt:"../_images/subnet-step7.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 7. Choose zone europe-north1-a for Compute"}),"\n",(0,s.jsx)(n.p,{children:"In summary, we have two computes with two subnets in two different regions:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7b.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7b.png",alt:"../_images/subnet-step7b.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 8. Two computes in two different regions europe-north1 and europe-west1"}),"\n",(0,s.jsx)(n.h2,{id:"expected-result",children:"Expected result"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The VPC ",(0,s.jsx)(n.code,{children:"private"})," network is created with two subnets (e.g., ",(0,s.jsx)(n.code,{children:"private-subnet"})," and ",(0,s.jsx)(n.code,{children:"private-subnet-2"}),") in two cidr ranges (",(0,s.jsx)(n.code,{children:"10.0.0.0/24"})," and ",(0,s.jsx)(n.code,{children:"10.0.1.0/24"}),") and in two regions (e.g., ",(0,s.jsx)(n.code,{children:"europe-north1"})," and ",(0,s.jsx)(n.code,{children:"europe-west1"}),"), respectively."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result2.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result2.png",alt:"../_images/multi-regions-result2.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 9. Two subnets are created"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Two VMs will be created in the two separated subnets."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Compute-0"})," has a fixed ip address ",(0,s.jsx)(n.code,{children:"10.0.0.3"})," (as specified in step 4) and has an external IP."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result1.png",children:(0,s.jsx)(n.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result1.png",alt:"../_images/multi-regions-result1.png"})})}),"\n",(0,s.jsx)(n.p,{children:"Figure 10. Two computes are created"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);