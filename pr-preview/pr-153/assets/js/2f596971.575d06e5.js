"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[74362],{13125:(e,o,l)=>{l.r(o),l.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var s=l(74848),n=l(28453);const t={id:"google-deploy",title:"How to deploy your application on Google Cloud",tags:["multi-cloud","google","gcp","cloud-create"]},i="How to deploy your application on Google Cloud",r={id:"best-practices/management-and-deployment/cloud-create/google-cloud/google-deploy",title:"How to deploy your application on Google Cloud",description:"Prerequisites",source:"@site/docs/best-practices/management-and-deployment/cloud-create/google-cloud/google-deploy.md",sourceDirName:"best-practices/management-and-deployment/cloud-create/google-cloud",slug:"/best-practices/management-and-deployment/cloud-create/google-cloud/google-deploy",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/management-and-deployment/cloud-create/google-cloud/google-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/management-and-deployment/cloud-create/google-cloud/google-deploy.md",tags:[{inline:!0,label:"multi-cloud",permalink:"/docs-next/pr-preview/pr-153/docs/tags/multi-cloud"},{inline:!0,label:"google",permalink:"/docs-next/pr-preview/pr-153/docs/tags/google"},{inline:!0,label:"gcp",permalink:"/docs-next/pr-preview/pr-153/docs/tags/gcp"},{inline:!0,label:"cloud-create",permalink:"/docs-next/pr-preview/pr-153/docs/tags/cloud-create"}],version:"current",frontMatter:{id:"google-deploy",title:"How to deploy your application on Google Cloud",tags:["multi-cloud","google","gcp","cloud-create"]},sidebar:"bestPracticesSidebar",previous:{title:"Multicloud Google Cloud",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/management-and-deployment/cloud-create/google-cloud/google"},next:{title:"Design with static subnets in multiple regions",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/management-and-deployment/cloud-create/google-cloud/multi-region"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to assign a role to a principal",id:"how-to-assign-a-role-to-a-principal",level:3},{value:"How to enable an API on Google Cloud",id:"how-to-enable-an-api-on-google-cloud",level:3},{value:"How to deploy",id:"how-to-deploy",level:2},{value:"Choose the Google Cloud location",id:"choose-the-google-cloud-location",level:3},{value:"Authenticate for the first time",id:"authenticate-for-the-first-time",level:3},{value:"Choose a Google project to deploy",id:"choose-a-google-project-to-deploy",level:3},{value:"Choose an availability zone and keypair (optional)",id:"choose-an-availability-zone-and-keypair-optional",level:3},{value:"Deploy",id:"deploy",level:3},{value:"How to revoke access",id:"how-to-revoke-access",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"how-to-deploy-your-application-on-google-cloud",children:"How to deploy your application on Google Cloud"}),"\n",(0,s.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(o.p,{children:"To deploy on Google Cloud, you need to:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Have a Google Cloud account."}),"\n",(0,s.jsxs)(o.li,{children:["Your account has one of the following roles ",(0,s.jsx)(o.code,{children:"roles/compute.admin"}),", ",(0,s.jsx)(o.code,{children:"roles/editor"}),", or ",(0,s.jsx)(o.code,{children:"roles/owner"})," assigned to a Google project. This role allows you to create a compute resource in the given project."]}),"\n",(0,s.jsxs)(o.li,{children:["Your account has one of the following roles ",(0,s.jsx)(o.code,{children:"roles/browser"}),", ",(0,s.jsx)(o.code,{children:"roles/editor"}),", or ",(0,s.jsx)(o.code,{children:"roles/owner"}),". This role allows Telekom Cloud Create to read the ",(0,s.jsx)(o.a,{href:"https://cloud.google.com/resource-manager/docs/access-control-proj",children:"IAM access control policy"})," of the project to check for access permissions before a deployment can start."]}),"\n",(0,s.jsxs)(o.li,{children:["Enable the ",(0,s.jsx)(o.strong,{children:"Compute Engine API"})," and ",(0,s.jsx)(o.strong,{children:"Cloud Resource Manager API"})," in your google project."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"how-to-assign-a-role-to-a-principal",children:"How to assign a role to a principal"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Go to: ",(0,s.jsx)(o.strong,{children:"IAM & Admin"})," / ",(0,s.jsx)(o.strong,{children:"IAM"})]}),"\n",(0,s.jsxs)(o.li,{children:["Go to ",(0,s.jsx)(o.strong,{children:"Principal"}),", click ",(0,s.jsx)(o.strong,{children:"Edit"})," and assign roles. The following example assigns the role ",(0,s.jsx)(o.code,{children:"roles/browser"})," and ",(0,s.jsx)(o.code,{children:"roles/compute.admin"})," to a principal."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/set-roles.png",children:(0,s.jsx)(o.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/set-roles.png",alt:"../_images/set-roles.png"})})}),"\n",(0,s.jsx)(o.p,{children:"Figure 1. Set IAM roles for a user"}),"\n",(0,s.jsx)(o.h3,{id:"how-to-enable-an-api-on-google-cloud",children:"How to enable an API on Google Cloud"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Go to: ",(0,s.jsx)(o.strong,{children:"APIs & Services"})," / ",(0,s.jsx)(o.strong,{children:"Library"})]}),"\n",(0,s.jsxs)(o.li,{children:["Search for an API (e.g., ",(0,s.jsx)(o.code,{children:"Compute Engine"})," or ",(0,s.jsx)(o.code,{children:"Cloud Resource"}),")"]}),"\n",(0,s.jsxs)(o.li,{children:["Click ",(0,s.jsx)(o.strong,{children:"Enable"})]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/enable-api.png",children:(0,s.jsx)(o.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/enable-api.png",alt:"../_images/enable-api.png"})})}),"\n",(0,s.jsx)(o.p,{children:"Figure 2. Enable Compute Engine API"}),"\n",(0,s.jsx)(o.h2,{id:"how-to-deploy",children:"How to deploy"}),"\n",(0,s.jsx)(o.h3,{id:"choose-the-google-cloud-location",children:"Choose the Google Cloud location"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Go to: ",(0,s.jsx)(o.strong,{children:"Deploy"})]}),"\n",(0,s.jsxs)(o.li,{children:["Choose ",(0,s.jsx)(o.strong,{children:"Google"})]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step1.png",children:(0,s.jsx)(o.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step1.png",alt:"../_images/deploy-step1.png"})})}),"\n",(0,s.jsx)(o.p,{children:"Figure 3. Choose Google Cloud location"}),"\n",(0,s.jsx)(o.h3,{id:"authenticate-for-the-first-time",children:"Authenticate for the first time"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"The first time you deploy an application on Google Cloud, Cloud Create redirects you to Google Cloud to loggin."}),"\n",(0,s.jsxs)(o.li,{children:["After logging sucessfully, click on the ",(0,s.jsx)(o.strong,{children:"allow"})," button to grant the permissions for Cloud Create to manage compute resources on Google Cloud on your behalf."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step2.png",children:(0,s.jsx)(o.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step2.png",alt:"../_images/deploy-step2.png"})})}),"\n",(0,s.jsx)(o.p,{children:"Figure 4. Authenticate and grant permissions"}),"\n",(0,s.jsxs)(o.admonition,{type:"important",children:[(0,s.jsx)(o.p,{children:"By clicking the allow button, you allow Cloud Create to access the following information:"}),(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Read your email address for authentication purpose."}),"\n",(0,s.jsx)(o.li,{children:"List your Google projects so you can choose a Google project to deploy."}),"\n",(0,s.jsx)(o.li,{children:"Manage compute resources on Google Cloud (e.g., to create and delete a VM)."}),"\n"]}),(0,s.jsx)(o.p,{children:"In particular, Cloud Create requests the following OAuth scopes:"}),(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"https://www.googleapis.com/auth/userinfo.email"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"https://www.googleapis.com/auth/cloudplatformprojects.readonly"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"https://www.googleapis.com/auth/compute"})}),"\n"]})]}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["You can revoke access any time later. See ",(0,s.jsx)(o.a,{href:"#google-revoke-access",children:"3. How to revoke access"}),"."]})}),"\n",(0,s.jsx)(o.h3,{id:"choose-a-google-project-to-deploy",children:"Choose a Google project to deploy"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Cloud Create displays a list of the Google projects, which you have the permissions to create a compute resource."}),"\n",(0,s.jsx)(o.li,{children:"Choose one Google project you want to deploy your app into."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step3.png",children:(0,s.jsx)(o.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step3.png",alt:"../_images/deploy-step3.png"})})}),"\n",(0,s.jsx)(o.p,{children:"Figure 5. Choose a google project to deploy"}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["If no projects are dislayed, it means you do not have the roles mentioned in the ",(0,s.jsx)(o.a,{href:"#google-prerequisites",children:"1. Prerequisites"}),". In such a case, ask your Google administrators to assign a role in a Google project for you."]})}),"\n",(0,s.jsx)(o.h3,{id:"choose-an-availability-zone-and-keypair-optional",children:"Choose an availability zone and keypair (optional)"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Click ",(0,s.jsx)(o.strong,{children:"Configure cloud provider"})]}),"\n",(0,s.jsxs)(o.li,{children:["Choose a ",(0,s.jsx)(o.strong,{children:"Compute"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Choose an availability ",(0,s.jsx)(o.strong,{children:"zone"})," from the dropbox. The default availability zone is ",(0,s.jsx)(o.code,{children:"europe-west1-c"})," if not set."]}),"\n",(0,s.jsxs)(o.li,{children:["Choose a ",(0,s.jsx)(o.strong,{children:"keypair"})," from the dropbox."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step4.png",children:(0,s.jsx)(o.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step4.png",alt:"../_images/deploy-step4.png"})})}),"\n",(0,s.jsx)(o.p,{children:"Figure 6. Choose a zone and keypair"}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsx)(o.p,{children:"If the keypair dropbox is empty, you can create a keypair from the Open Telekom Cloud console and refresh the page to display it."})}),"\n",(0,s.jsx)(o.h3,{id:"deploy",children:"Deploy"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Click ",(0,s.jsx)(o.strong,{children:"Deploy"})," to start."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"how-to-revoke-access",children:"How to revoke access"}),"\n",(0,s.jsx)(o.p,{children:"In step 2, you grant Cloud Create the permissions to manage compute resources on your behalf. You can revoke this access anytime."}),"\n",(0,s.jsx)(o.p,{children:"To revoke:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Go to: 1. ",(0,s.jsx)(o.strong,{children:"Manage your Google account"})," / 2. ",(0,s.jsx)(o.strong,{children:"Security"})," / 3. ",(0,s.jsx)(o.strong,{children:"Third party apps with account access"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Click on ",(0,s.jsx)(o.strong,{children:"Revoke access"})," button."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-revoke.png",children:(0,s.jsx)(o.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-revoke.png",alt:"../_images/deploy-revoke.png"})})}),"\n",(0,s.jsx)(o.p,{children:"Figure 7. Revoke token"}),"\n",(0,s.jsx)(o.p,{children:"After the access is revoked, if you deploy your app on Google Cloud again, Cloud Create will ask you to authenticate to Google Cloud again (i.e., it will repeat step 2)."})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,o,l)=>{l.d(o,{R:()=>i,x:()=>r});var s=l(96540);const n={},t=s.createContext(n);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);