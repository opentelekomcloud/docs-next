"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[473],{2044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(74848),s=n(28453);const a={id:"cloud-create",title:"Cloud Create",tags:["cloud-create"]},r="Cloud Create",i={id:"best-practices/management-and-deployment/cloud-create/cloud-create",title:"Cloud Create",description:"Overview",source:"@site/docs/best-practices/management-and-deployment/cloud-create/cloud-create.md",sourceDirName:"best-practices/management-and-deployment/cloud-create",slug:"/best-practices/management-and-deployment/cloud-create/",permalink:"/docs-next/pr-preview/pr-162/docs/best-practices/management-and-deployment/cloud-create/",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/management-and-deployment/cloud-create/cloud-create.md",tags:[{inline:!0,label:"cloud-create",permalink:"/docs-next/pr-preview/pr-162/docs/tags/cloud-create"}],version:"current",frontMatter:{id:"cloud-create",title:"Cloud Create",tags:["cloud-create"]},sidebar:"bestPracticesSidebar",previous:{title:"How Do Replica Sets Achieve High Availability and Read/Write Splitting?",permalink:"/docs-next/pr-preview/pr-162/docs/best-practices/databases/document-database-service/how-do-replica-sets-achieve-high-availability-and-readwrite-splitting"},next:{title:"Multicloud Google Cloud",permalink:"/docs-next/pr-preview/pr-162/docs/best-practices/management-and-deployment/cloud-create/google-cloud/google"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"How cloud architects design the application",id:"how-cloud-architects-design-the-application",level:3},{value:"How administrators deploy the application",id:"how-administrators-deploy-the-application",level:3},{value:"Why Cloud Create?",id:"why-cloud-create",level:2},{value:"New features",id:"new-features",level:2},{value:"OpenShift template (v2.13)",id:"openshift-template-v213",level:3},{value:"FAQ",id:"faq",level:2},{value:"What are the differences between Cloud Create and the Web console",id:"what-are-the-differences-between-cloud-create-and-the-web-console",level:3},{value:"How can I login in to Cloud Create",id:"how-can-i-login-in-to-cloud-create",level:3},{value:"Which components are supported",id:"which-components-are-supported",level:3},{value:"Is Cloud Create opensource",id:"is-cloud-create-opensource",level:3},{value:"Which Terraform version do you use",id:"which-terraform-version-do-you-use",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"cloud-create",children:"Cloud Create"}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:["Cloud Create is a ",(0,o.jsx)(t.strong,{children:"free-to-use"})," Development and Management Platform, which enables cloud developers to create applications on Open Telekom Cloud ",(0,o.jsx)(t.strong,{children:"fast"}),"."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Cloud architects create applications from premade templates."}),"\n",(0,o.jsx)(t.li,{children:"They can visually design and adjust the application to fit their needs."}),"\n",(0,o.jsx)(t.li,{children:"An administrator deploys and updates the application on Open Telekom Cloud."}),"\n",(0,o.jsx)(t.li,{children:"Cloud architects can save a design as a private template for personal use or share it public with other users."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview.png",children:(0,o.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview.png",alt:"_images/overview.png"})})}),"\n",(0,o.jsx)(t.p,{children:"Figure 1. Overview"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Cloud architects and administrators can be the same user."}),"\n",(0,o.jsx)(t.li,{children:'Deployment on Swiss Open Telekom Cloud and the function "Save & Share templates" are upcoming features.'}),"\n"]})}),"\n",(0,o.jsx)(t.h3,{id:"how-cloud-architects-design-the-application",children:"How cloud architects design the application"}),"\n",(0,o.jsxs)(t.p,{children:["Cloud architects can design the application from scratch or from ",(0,o.jsx)(t.strong,{children:"premade templates"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-templates.png",children:(0,o.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-templates.png",alt:"_images/overview-templates.png"})})}),"\n",(0,o.jsx)(t.p,{children:"Figure 2. Select an app template to start."}),"\n",(0,o.jsx)(t.p,{children:"They can quickly deploy a template or start a new design from it:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-templates2.png",children:(0,o.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-templates2.png",alt:"_images/overview-templates2.png"})})}),"\n",(0,o.jsx)(t.p,{children:"Figure 3. Quick deploy OpenShift or Design using this template."}),"\n",(0,o.jsx)(t.p,{children:"Cloud Create also comes up with a visual designer for less-coding or no-coding. Developers can drag and drop the components together like lego bricks as in the following example:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-design.png",children:(0,o.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-design.png",alt:"_images/overview-design.png"})})}),"\n",(0,o.jsx)(t.p,{children:"Figure 4. An application example with network, compute, ansible, bash scripts, and Grafana component."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["In the above example, the network and compute are ",(0,o.jsx)(t.strong,{children:"infrastructure"})," components. AnsibleTasks, Bash, and Grafana are ",(0,o.jsx)(t.strong,{children:"service"})," components."]}),"\n",(0,o.jsx)(t.li,{children:"By using the Ansible and Bash components, developers can write code to execute on a compute directly."}),"\n",(0,o.jsxs)(t.li,{children:["Grafana is an example of a ready-to-use service available in the designer. Developers can define new services and import them to the designer as well. More details on Section ",(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/tosca_tutorials/index.html#how-to-define-and-import-and-a-new-service",children:"How to define and import and a new service"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["App templates and service components are ",(0,o.jsx)(t.a,{href:"https://github.com/opentelekomcloud-blueprints/tosca-service-catalogs",children:"opensource and available on our Github"}),"."]})}),"\n",(0,o.jsx)(t.h3,{id:"how-administrators-deploy-the-application",children:"How administrators deploy the application"}),"\n",(0,o.jsxs)(t.p,{children:["Before the deployment can start, administrators select a ",(0,o.jsx)(t.strong,{children:"Version"}),", provide ",(0,o.jsx)(t.strong,{children:"Inputs"}),", which were designed by the cloud architects, and select a cloud provider (e.g., Open Telekom Cloud) to deploy. In addition, administrators can review the auto-generated workflow before it starts."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-deploy.png",children:(0,o.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/overview-deploy.png",alt:"_images/overview-deploy.png"})})}),"\n",(0,o.jsx)(t.p,{children:"Figure 5. Administrators select Open Telekom Cloud (OTC) to deploy"}),"\n",(0,o.jsxs)(t.p,{children:["During the deployment, administrators can interactively click on a workflow step and see ",(0,o.jsx)(t.strong,{children:"Terraform"})," is applied for the infrastructure components. For the service components, the deployment script of the service (e.g., Ansible) is applied on the target compute."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deployment_logs.png",children:(0,o.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deployment_logs.png",alt:"_images/deployment_logs.png"})})}),"\n",(0,o.jsx)(t.p,{children:"Figure 6. An example Terraform is generated and applied for a Compute"}),"\n",(0,o.jsx)(t.h2,{id:"why-cloud-create",children:"Why Cloud Create?"}),"\n",(0,o.jsx)(t.p,{children:"The following table shows the differences between the Web console / other tools and Cloud Create:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/features_compare.png",children:(0,o.jsx)(t.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/features_compare.png",alt:"_images/features_compare.png"})})}),"\n",(0,o.jsx)(t.p,{children:"Figure 7. Features comparison"}),"\n",(0,o.jsx)(t.p,{children:"Both the Web console and Cloud Create can deploy one cloud service. However, an application nowadays consists of multiple cloud services but not just one. Furthermore, each application has individual needs to adapt to the cloud differently. The Web console can bring up one service up and running separately but cannot automate an application with multiple services."}),"\n",(0,o.jsx)(t.p,{children:"With Cloud Create, after creating an application from a template, you can modify the application to fit your individual needs. For example, one of our customer used Cloud Create to create their application from the OpenShift template, then they added a worker node with the GPU capability and wrote an Ansible script to deploy packages on the bastion host, etc. The given example shows that the modification can happen in every corner, from the cloud infrastructure to the software layer of your application. Finally, you can run update between versions on operation day 2 as well. To update between versions, Cloud Create auto-calculates the differences between the two versions and auto-generates the update workflow steps from one version to other one."}),"\n",(0,o.jsx)(t.h2,{id:"new-features",children:"New features"}),"\n",(0,o.jsx)(t.h3,{id:"openshift-template-v213",children:"OpenShift template (v2.13)"}),"\n",(0,o.jsxs)(t.p,{children:["Users can create a ",(0,o.jsx)(t.a,{href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/container-platform",children:"Self-managed OpenShift Container Platform"})," on Open Telekom Cloud from the ",(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/service_catalogs/openshift.html#openshift",children:"OpenShift template"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(t.h3,{id:"what-are-the-differences-between-cloud-create-and-the-web-console",children:"What are the differences between Cloud Create and the Web console"}),"\n",(0,o.jsxs)(t.p,{children:["With the ",(0,o.jsx)(t.a,{href:"https://console.otc.t-systems.com/",children:"Web console"}),", users can only create the cloud infrastructure manually. It means, they can create a network, a storage, a VM separately but without automation."]}),"\n",(0,o.jsx)(t.p,{children:"On the other hand, Cloud Create enables developers to design and automate the deployment of the whole application including the cloud infrastructure and services. In addition, developers can design the application in various versions and run update between them. Finally, Cloud Create provides premade templates (e.g., OpenShift) to re-use and extend."}),"\n",(0,o.jsx)(t.h3,{id:"how-can-i-login-in-to-cloud-create",children:"How can I login in to Cloud Create"}),"\n",(0,o.jsxs)(t.p,{children:["You can log in to Cloud Create using an IAM user account with the ",(0,o.jsx)(t.strong,{children:"Tenant Administrator"})," role. This is the same credentials when you log in to the web console, ",(0,o.jsx)(t.strong,{children:"not the ICU account"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you do not have a user account in the IAM, see ",(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/register.html#how-to-login",children:"How to create a user account & login"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"which-components-are-supported",children:"Which components are supported"}),"\n",(0,o.jsxs)(t.p,{children:["An overview of all supported components is available in Section ",(0,o.jsx)(t.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/components_overview.html#components-overview",children:"Components overview"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"is-cloud-create-opensource",children:"Is Cloud Create opensource"}),"\n",(0,o.jsx)(t.p,{children:"Cloud Create is based on two opensource projects Application Lifecycle Enablement for Cloud (Alien4cloud) and Ystia Orchestrator (Yorc). At Open Telekom Cloud, we further integrate it with OpenStack and Google Cloud, provide an easy-to-use UI, added features (e.g., secrets management, deployment update, OpenShift template, etc.), and enforce the strictest Privacy and Security Assessment (PSA) process of Deutsche Telekom."}),"\n",(0,o.jsxs)(t.p,{children:["All premade templates and service components are opensource and available on ",(0,o.jsx)(t.a,{href:"https://github.com/opentelekomcloud-blueprints/tosca-service-catalogs",children:"our Github"}),". You can create pull requests to add more components and fix bugs."]}),"\n",(0,o.jsx)(t.h3,{id:"which-terraform-version-do-you-use",children:"Which Terraform version do you use"}),"\n",(0,o.jsx)(t.p,{children:"We use Terraform 1.5.4 under the Mozilla Public License v2.0 (MPL 2.0)."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);