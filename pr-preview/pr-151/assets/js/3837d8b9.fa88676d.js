"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[29147],{26018:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=s(74848),r=s(28453);const t={id:"migrating-container-images",title:"Migrating Container Images",tags:["swr","image-syncer","harbor","migration"]},o="Migrating Container Images",a={id:"best-practices/containers/software-repository/migrating-container-images",title:"Migrating Container Images",description:"Containers are growing in popularity. Many enterprises choose to build their own Kubernetes clusters. However, the O&M workload of on-premises clusters is heavy, and O&M personnel need to configure the management systems and monitoring solutions by themselves. For enterprises, managing a large number of images requires high O&M, labor, and management costs, and the efficiency is low. SoftWare Repository for Container (SWR) manages container images that function on multiple architectures, such as Linux and Arm. Enterprises can migrate their image repositories to SWR to reduce costs.",source:"@site/docs/best-practices/containers/software-repository/migrating-container-images.md",sourceDirName:"best-practices/containers/software-repository",slug:"/best-practices/containers/software-repository/migrating-container-images",permalink:"/docs-next/pr-preview/pr-151/docs/best-practices/containers/software-repository/migrating-container-images",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/containers/software-repository/migrating-container-images.md",tags:[{inline:!0,label:"swr",permalink:"/docs-next/pr-preview/pr-151/docs/tags/swr"},{inline:!0,label:"image-syncer",permalink:"/docs-next/pr-preview/pr-151/docs/tags/image-syncer"},{inline:!0,label:"harbor",permalink:"/docs-next/pr-preview/pr-151/docs/tags/harbor"},{inline:!0,label:"migration",permalink:"/docs-next/pr-preview/pr-151/docs/tags/migration"}],version:"current",frontMatter:{id:"migrating-container-images",title:"Migrating Container Images",tags:["swr","image-syncer","harbor","migration"]},sidebar:"bestPracticesSidebar",previous:{title:"Debugging and Starting the Application",permalink:"/docs-next/pr-preview/pr-151/docs/best-practices/containers/cloud-container-engine/debugging-and-starting-the-application"},next:{title:"Using Nginx for Public Access of DCS Redis Instances",permalink:"/docs-next/pr-preview/pr-151/docs/best-practices/databases/distributed-cache-service/using-nginx-for-public-access-to-single-node-master-standby-or-proxy-cluster-dcs-redis-instances"}},c={},d=[{value:"Migrating Images to SWR using Docker Commands",id:"migrating-images-to-swr-using-docker-commands",level:2},{value:"Migrating Images to SWR using image-syncer",id:"cce_bestpractice_0331",level:2},{value:"Synchronizing Images Across Clouds from Harbor to SWR",id:"synchronizing-images-across-clouds-from-harbor-to-swr",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"migrating-container-images",children:"Migrating Container Images"}),"\n",(0,i.jsxs)(n.p,{children:["Containers are growing in popularity. Many enterprises choose to build their own Kubernetes clusters. However, the O&M workload of on-premises clusters is heavy, and O&M personnel need to configure the management systems and monitoring solutions by themselves. For enterprises, managing a large number of images requires high O&M, labor, and management costs, and the efficiency is low. ",(0,i.jsx)(n.strong,{children:"SoftWare Repository for Container (SWR)"})," manages container images that function on multiple architectures, such as Linux and Arm. Enterprises can migrate their image repositories to SWR to reduce costs."]}),"\n",(0,i.jsx)(n.p,{children:"This blueprint describes three different scenarios for migrating image repositories to SWR smoothly. You can select one as required:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Solution"}),(0,i.jsx)(n.th,{children:"Application Scenario"}),(0,i.jsx)(n.th,{children:"Precautions"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Migrating images to SWR using ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#migrating-images-to-swr-using-docker-commands",children:"Docker commands"})})]}),(0,i.jsx)(n.td,{children:"Small quantity of images"}),(0,i.jsx)(n.td,{children:"-  Disk storage leads to the timely deletion of local images and time-cost flushing."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  Docker daemon strictly restricts the number of concurrent pull/push operations, so high-concurrency synchronization cannot be performed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  Scripts are complex because HTTP APIs are needed to perform the operations that cannot be implemented through Docker CLI."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Migrating images to SWR using ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#migrating-images-to-swr-using-image-syncer",children:"image-syncer"})})]}),(0,i.jsx)(n.td,{children:"A large number of images"}),(0,i.jsx)(n.td,{children:"-  Many-to-many image repository synchronization is supported."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  Docker Registry V2-based image repositories (such as Docker Hub, Quay, and Harbor) can be migrated to SWR."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  Memory- and network-dependent synchronization is fast."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  Flushing the Blob information of synchronized images avoids repetition."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  The number of concurrent synchronization tasks can be adjusted in the configuration file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  Automatically retrying failed synchronization tasks can resolve most network jitter during image synchronization."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"-  Docker or other programs are not required."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Synchronizing images across clouds ",(0,i.jsxs)(n.a,{href:"#synchronizing-images-across-clouds-from-harbor-to-swr",children:["from ",(0,i.jsx)(n.strong,{children:"Harbor"})," to SWR"]})]}),(0,i.jsx)(n.td,{children:"A customer deploys services in multiple clouds and uses Harbor as their image repository."}),(0,i.jsx)(n.td,{children:"Only Harbor v1.10.5 and later versions are supported."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"migrating-images-to-swr-using-docker-commands",children:"Migrating Images to SWR using Docker Commands"}),"\n",(0,i.jsxs)(n.p,{children:["SWR provides easy-to-use image hosting and efficient distribution\nservices. If small quantity of images need to be migrated, enterprises\ncan use the ",(0,i.jsx)(n.strong,{children:"docker pull/push"})," command to migrate images to SWR:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pull images from the source repository.\nRun the ",(0,i.jsx)(n.code,{children:"docker pull"})," command to pull the images."]}),"\n",(0,i.jsx)(n.admonition,{title:"Example",type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"docker pull nginx:latest"})})}),"\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.code,{children:"docker images"})," command to check whether the images are\nsuccessfully pulled."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker images\nREPOSITORY                        TAG       IMAGE ID       CREATED         SIZE\nnginx                             latest    22f2bf2e2b4f   5 hours ago     22.8MB\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Push the images pulled to SWR."}),"\n",(0,i.jsxs)(n.p,{children:["a.  Log in to the VM where the target container is located and log\nin to SWR. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/software-repository-container/umn/image_management/uploading_an_image_through_the_client.html",children:"Uploading an Image Through a Container Engine Client"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["b.  Tag the images: ",(0,i.jsx)(n.strong,{children:"docker tag"})," ",(0,i.jsxs)(n.strong,{children:["[Image name",":Tag"," name] [Image repository\naddress]/[Organization name]/[Image name",":Tag"," name]"]})]}),"\n",(0,i.jsx)(n.admonition,{title:"example",type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"docker tag nginx:v1 swr.eu-de.otc.t-systems.com/cloud-develop/nginx:v1"})})}),"\n",(0,i.jsxs)(n.p,{children:["c.  Run the following command to push the images to the target image\nrepository: ",(0,i.jsx)(n.strong,{children:"docker push"})," ",(0,i.jsxs)(n.strong,{children:["[Image repository address]/[Organization\nname]/[Image name",":Tag"," name]"]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Example",type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"docker push swr.eu-de.otc.t-systems.com/cloud-develop/nginx:v1"})})}),"\n",(0,i.jsx)(n.p,{children:"d.  Check whether the following information is returned. If yes, the\npush is successful."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"fbce26647e70: Pushed\nfb04ab8effa8: Pushed\n8f736d52032f: Pushed\n009f1d338b57: Pushed\n678bbd796838: Pushed\nd1279c519351: Pushed\nf68ef921efae: Pushed\nv1: digest: sha256:0cdfc7910db531bfa7726de4c19ec556bc9190aad9bd3de93787e8bce3385f8d size: 1780\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To view the pushed image, refresh the ",(0,i.jsx)(n.em,{children:"My Images"})," page."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cce_bestpractice_0331",children:"Migrating Images to SWR using image-syncer"}),"\n",(0,i.jsxs)(n.p,{children:["If small quantity of images need to be migrated, you can use Docker\ncommands. However, for thousands of images and several TBs of image\nrepository data, it takes a long time and even data may be lost. In this\ncase, you can use the open-source image migration tool\n",(0,i.jsx)(n.a,{href:"https://github.com/AliyunContainerService/image-syncer",children:"image-syncer"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Download, decompress, and run image-syncer."}),"\n",(0,i.jsxs)(n.p,{children:["The following uses ",(0,i.jsx)(n.strong,{children:"image-syncer v1.3.1"})," as an example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/AliyunContainerService/image-syncer/releases/download/v1.3.1/image-syncer-v1.3.1-linux-amd64.tar.gz\ntar -zvxf image-syncer-v1.3.1-linux-amd64.tar.gz\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.strong,{children:"auth.json"}),", the authentication information file of the\nimage repositories."]}),"\n",(0,i.jsxs)(n.p,{children:["image-syncer supports the Docker image repository based on Docker\nRegistry V2. Enter the authentication information as required. In\nthe following example, ",(0,i.jsx)(n.strong,{children:"the image repository of eu-de is migrated to\neu-nl"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following describes how to write the authentication information\nof the source and target repositories."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "swr.eu-de.otc.t-systems.com": {\n        "username": "eu-de_otc@F1I3Q......",\n        "password": "2fd4c969ea0......"\n    },\n    "swr.eu-nl.otc.t-systems.com": {\n        "username": "eu-nl_otc@4N3FA......",\n        "password": "f1c82b57855f9d35......"\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the preceding commands, ",(0,i.jsx)(n.code,{children:"swr.eu-de.otc.t-systems.com"})," indicates\nthe image repository address. You can obtain the ",(0,i.jsx)(n.code,{children:"username"})," and\n",(0,i.jsx)(n.code,{children:"password"})," from the login command as follows:"]}),"\n",(0,i.jsxs)(n.p,{children:["Log in to the ",(0,i.jsx)(n.em,{children:"SWR console"}),", and click ",(0,i.jsx)(n.em,{children:"Generate Login Command"})," in\nthe upper right corner to obtain the login command in the dialog box\ndisplayed, as shown in the following figure."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1 Generating a login command",src:s(58123).A+"",width:"545",height:"232"})}),"\n",(0,i.jsx)(n.p,{children:"In the above figure :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eu-de_otc@9LA\\...\\..."})," is the ",(0,i.jsx)(n.code,{children:"username"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"077be\\...\\...\\...\\....."})," is the ",(0,i.jsx)(n.code,{children:"password"})," and"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"swr.eu-de.otc.t-systems.com"})," is the image repository address."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.strong,{children:"images.json"}),", the image synchronization description file."]}),"\n",(0,i.jsxs)(n.p,{children:["In the following example, the source repository address is on the\nleft, and the target repository address is on the right.\nimage-syncer also supports other description modes. For details, see\n",(0,i.jsx)(n.a,{href:"https://github.com/AliyunContainerService/image-syncer/blob/master/README.md",children:"README.md"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "swr.eu-de.otc.t-systems.com/org-ss/canary-consumer": "swr.eu-nl.otc.t-systems.com/dev-container/canary-consumer"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the following command to migrate the images to SWR:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./image-syncer \\--auth=./auth.json \\--images=./images.json\n\\--namespace=dev-container \\--registry=swr.eu-de.otc.t-systems.com\n\\--retries=3 \\--log=./log\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"synchronizing-images-across-clouds-from-harbor-to-swr",children:"Synchronizing Images Across Clouds from Harbor to SWR"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://goharbor.io/",children:"Harbor"})," is an open-source enterprise-class Docker Registry server\ndeveloped by VMware. It extends the Docker Distribution by adding the\nfunctionalities such as role-based access control (RBAC), image\nscanning, and image replication. Harbor has been widely used to store\nand distribute container images."]}),"\n",(0,i.jsxs)(n.p,{children:["Our scenarion in this blueprint is a customer that deploys services in ",(0,i.jsx)(n.strong,{children:"multiple clouds"})," and uses Harbor as their\nimage repository. We are going to be accessing SWR through a ",(0,i.jsx)(n.strong,{children:"public"})," network."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure a registry endpoint on Harbor."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Open Telekom Cloud SWR has not yet integrated with Harbor. You need clone ",(0,i.jsx)(n.a,{href:"https://github.com/akyriako/harbor/tree/opentelekomcloud_adapter",children:"this repo"})," and build it from branch ",(0,i.jsx)(n.strong,{children:"opentelekomcloud_adapter"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Add an endpoint and configure the following parameters."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image2",src:s(49879).A+"",width:"564",height:"524"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Provider"}),": Select ",(0,i.jsx)(n.code,{children:"Open Telekom Cloud SWR"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"}),": Enter a customized name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Endpoint URL"}),": Enter the public network domain name of\nSWR in the format of ",(0,i.jsx)(n.code,{children:"https://{SWR image repository address}"}),". To obtain the image repository address, log in\nto the SWR console, choose ",(0,i.jsx)(n.em,{children:"My Images"}),", and click ",(0,i.jsx)(n.em,{children:"Upload\nThrough Client"}),". You can view the image repository address\nof the current region on the page that is displayed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Access ID"}),": Enter an access ID in the format of ",(0,i.jsx)(n.code,{children:"Regional project name@\\[AK\\]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Access Secret"}),": Enter an AK/SK. To obtain an AK/SK, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/software-repository-container/umn/image_management/obtaining_a_long-term_valid_login_command.html",children:"Obtaining a Long-Term Valid Login Command"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Verify Remote Cert"}),": ",(0,i.jsx)(n.em,{children:"Deselect"})," the option."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure a replication rule."}),"\n",(0,i.jsx)(n.p,{children:"a.  Create a replication rule."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image1",src:s(40496).A+"",width:"1221",height:"572"})}),"\n",(0,i.jsx)(n.p,{children:"b.  Configure the following parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"}),": Enter a customized name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Replication mode"}),": Select ",(0,i.jsx)(n.code,{children:"Push-based"}),", indicating that images are pushed ",(0,i.jsx)(n.strong,{children:"from"})," the local Harbor ",(0,i.jsx)(n.strong,{children:"to"})," the remote repository."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Source resource filter"}),": Filters images on Harbor based on the configured rules."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Destination registry"}),": Select the endpoint created previously."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Destination"}),"\n",(0,i.jsx)(n.code,{children:"Namespace"}),": Enter the organization name on SWR.\n",(0,i.jsx)(n.code,{children:"Flattening"}),": Select ",(0,i.jsx)(n.code,{children:"Flatten All Levels"}),", indicating\nthat the hierarchy of the registry is reduced when copying\nimages. If the directory of Harbor registry is\n",(0,i.jsx)(n.strong,{children:"library/nginx"})," and the directory of the endpoint\nnamespace is ",(0,i.jsx)(n.strong,{children:"dev-container"}),", after you flatten all\nlevels, the directory of the endpoint namespace is\n",(0,i.jsx)(n.strong,{children:"library/nginx -> dev-container/nginx"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Trigger Mode"}),": Select ",(0,i.jsx)(n.code,{children:"Manual"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Bandwidth"}),": Set the maximum network bandwidth when\nexecuting the replication rule. The value ",(0,i.jsx)(n.code,{children:"-1"})," indicates\nno limitation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After creating the replication rule, select it and click\n",(0,i.jsx)(n.em,{children:"REPLICATE"})," to complete the replication."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image2",src:s(24435).A+"",width:"1095",height:"499"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},58123:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001400827629-159f9ade75ec5109ffd26ea4acaf5ca8.png"},49879:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001418569120-36f24b545226960fb1aeb248a4fbdadc.png"},24435:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001418729104-aae4c5fd907cab4256a7116e9037c09a.png"},40496:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001468885853-8eaae4b34f5362d15a2f4792e829b618.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);