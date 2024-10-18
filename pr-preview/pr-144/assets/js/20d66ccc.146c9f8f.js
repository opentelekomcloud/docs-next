"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[22756],{61400:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=n(74848),t=n(28453);const a={id:"migrating-service-data-across-accounts-data-disks",title:"Migrating Service Data Across Accounts (Data Disks)",tags:["ims","migration"]},c="Migrating Service Data Across Accounts (Data Disks)",r={id:"best-practices/computing/image-management-service/migrating-service-data-across-accounts-data-disks",title:"Migrating Service Data Across Accounts (Data Disks)",description:"Generally, service data is stored on data disks. To migrate the data",source:"@site/docs/best-practices/computing/image-management-service/migrating-service-data-across-accounts-data-disks.md",sourceDirName:"best-practices/computing/image-management-service",slug:"/best-practices/computing/image-management-service/migrating-service-data-across-accounts-data-disks",permalink:"/docs-next/pr-preview/pr-144/docs/best-practices/computing/image-management-service/migrating-service-data-across-accounts-data-disks",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/computing/image-management-service/migrating-service-data-across-accounts-data-disks.md",tags:[{inline:!0,label:"ims",permalink:"/docs-next/pr-preview/pr-144/docs/tags/ims"},{inline:!0,label:"migration",permalink:"/docs-next/pr-preview/pr-144/docs/tags/migration"}],version:"current",frontMatter:{id:"migrating-service-data-across-accounts-data-disks",title:"Migrating Service Data Across Accounts (Data Disks)",tags:["ims","migration"]},sidebar:"bestPracticesSidebar",previous:{title:"Migrating Kafka Services",permalink:"/docs-next/pr-preview/pr-144/docs/best-practices/application-services/distributed-message-service/migrating-kafka-services"},next:{title:"Creating a Linux Image Using VirtualBox and an ISO File",permalink:"/docs-next/pr-preview/pr-144/docs/best-practices/computing/image-management-service/creating-a-linux-Image-using-virtualBox-and-an-iso-file"}},d={},h=[{value:"Solution Design",id:"solution-design",level:2},{value:"Creating a Data Disk Image",id:"creating-a-data-disk-image",level:2},{value:"Sharing the Image with the Target Account",id:"sharing-the-image-with-the-target-account",level:2},{value:"Accepting the Shared Image",id:"accepting-the-shared-image",level:2},{value:"Creating a Data Disk or an ECS",id:"creating-a-data-disk-or-an-ecs",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"migrating-service-data-across-accounts-data-disks",children:"Migrating Service Data Across Accounts (Data Disks)"}),"\n",(0,s.jsx)(i.p,{children:"Generally, service data is stored on data disks. To migrate the data\nacross accounts, you need to create data disk images and share them with\nthe target account. This section uses Linux as an example to describe\nhow to migrate service data (only data disks) across accounts in the\nsame region."}),"\n",(0,s.jsx)(i.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,s.jsx)(i.p,{children:"To migrate service data stored on a data disk across accounts, create an\nimage for the data disk, share the image with the target account. The\ntarget account accepts the shared image and attaches the new data disk\ncreated from the shared image to an existing or new ECS."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Figure 1 Migration process",src:n(81884).A+"",width:"846",height:"519"})}),"\n",(0,s.jsx)(i.h2,{id:"creating-a-data-disk-image",children:"Creating a Data Disk Image"}),"\n",(0,s.jsxs)(i.p,{children:["Assume that ",(0,s.jsx)(i.em,{children:"hello-world.txt"})," is stored on the data disk of your ECS\nand you want to migrate the file to another account."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image1",src:n(26323).A+"",width:"534",height:"215"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Log in to the management console and switch to the related region."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Under ",(0,s.jsx)(i.em,{children:"Service List"}),", choose ",(0,s.jsx)(i.em,{children:"Compute"})," -> ",(0,s.jsx)(i.em,{children:"Image ManagementService"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.em,{children:"Image Management Service"})," page is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the upper right corner, click ",(0,s.jsx)(i.em,{children:"Create Image"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.em,{children:"Create Image"})," page is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Set parameters."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Figure 2 Creating a data disk\nimage",src:n(26103).A+"",width:"1199",height:"727"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Type"}),": Select ",(0,s.jsx)(i.em,{children:"Data disk image"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Source"}),": Select ",(0,s.jsx)(i.em,{children:"ECS"})," and then select the ",(0,s.jsx)(i.code,{children:"data disk   ecs-disk-image-test-volume"})," data disk."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Name"}),": Enter a name for the data disk image, for example, ",(0,s.jsx)(i.code,{children:"disk-image-test"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Enterprise Project"}),": Select ",(0,s.jsx)(i.code,{children:"default"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.em,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Confirm the settings, read and agree to the agreement, and click\n",(0,s.jsx)(i.em,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The system redirects to the private image list. Wait for several\nminutes and check whether the data disk image is successfully\ncreated."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Figure 3 Viewing private\nimages",src:n(12605).A+"",width:"865",height:"84"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"sharing-the-image-with-the-target-account",children:"Sharing the Image with the Target Account"}),"\n",(0,s.jsxs)(i.p,{children:["Share the data disk image created in ",(0,s.jsx)(i.a,{href:"#creating-a-data-disk-image",children:"Step 1"})," with the target account. Before the image sharing, obtain\nthe project ID of the target account. (You can obtain the project ID from ",(0,s.jsx)(i.em,{children:"My Credentials"}),":"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Figure 4 Viewing the project\nID",src:n(2993).A+"",width:"1221",height:"417"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Locate the row that contains the ",(0,s.jsx)(i.code,{children:"disk-image-test"})," private image.\nChoose ",(0,s.jsx)(i.em,{children:"More"})," -> ",(0,s.jsx)(i.em,{children:"Share"})," in the ",(0,s.jsx)(i.em,{children:"Operation"})," column."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.em,{children:"Share Image"})," dialog box is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the ",(0,s.jsx)(i.em,{children:"Share Image"})," dialog box, enter the project ID of the\ntarget account."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.em,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"accepting-the-shared-image",children:"Accepting the Shared Image"}),"\n",(0,s.jsx)(i.p,{children:"Accept the shared data disk image."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Log in to the management console using the account the image is\nshared with and switch to the related region."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Under ",(0,s.jsx)(i.em,{children:"Service List"}),", choose ",(0,s.jsx)(i.em,{children:"Compute"})," -> ",(0,s.jsx)(i.em,{children:"Image Management\nService"}),". Then, click the ",(0,s.jsx)(i.em,{children:"Images Shared with Me"})," tab."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Select ",(0,s.jsx)(i.em,{children:"disk-image-test"})," and click ",(0,s.jsx)(i.em,{children:"Accept"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Figure 5 Accepting a shared\nimage",src:n(14046).A+"",width:"966",height:"281"})}),"\n",(0,s.jsx)(i.p,{children:"After the image is accepted, it is displayed in the shared image\nlist."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"creating-a-data-disk-or-an-ecs",children:"Creating a Data Disk or an ECS"}),"\n",(0,s.jsx)(i.p,{children:"Use the shared image to create a new data disk and attach it to an\nexisting ECS. Alternatively, create an ECS with a data disk created from\nthe shared image. Then, check whether the service data is successfully\nmigrated."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Create a new data disk and attach it to an existing ECS.","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Locate the row that contains the shared image\n",(0,s.jsx)(i.code,{children:"disk-image-test"}),", and click ",(0,s.jsx)(i.em,{children:"Create Data Disk"})," in the\n",(0,s.jsx)(i.em,{children:"Operation"})," column."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Figure 6 Creating a data\ndisk",src:n(2464).A+"",width:"1609",height:"80"})}),"\n",(0,s.jsx)(i.p,{children:"The page for purchasing EVS disks is displayed."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Configure the billing mode and disk specifications as needed.\n",(0,s.jsx)(i.strong,{children:"The AZ must be the same as that of the ECS to which the data\ndisk will be attached"}),". Click ",(0,s.jsx)(i.em,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Return to the EVS disk list. ",(0,s.jsx)(i.strong,{children:"Wait"})," for several minutes until the\nEVS disk is created successfully."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Locate the row that contains the new EVS disk and click\n",(0,s.jsx)(i.em,{children:"Attach"})," in the ",(0,s.jsx)(i.em,{children:"Operation"})," column to attach the data disk\nto the ECS."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Log in to the ECS and check whether the service data is\nsuccessfully migrated."}),"\n",(0,s.jsxs)(i.p,{children:["Run the ",(0,s.jsx)(i.code,{children:"fdisk -l"})," command. The command output shows that the\nnew data disk has been partitioned."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image2",src:n(47631).A+"",width:"572",height:"404"})}),"\n",(0,s.jsxs)(i.p,{children:["Mount the new partition to a directory of the ECS and check the\n",(0,s.jsx)(i.em,{children:"hello-world.txt"})," file. The file content is properly printed,\nwhich means that the service data migration is successful."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image3",src:n(29225).A+"",width:"429",height:"217"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Create an ECS with a data disk attached.","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Under ",(0,s.jsx)(i.em,{children:"Service List"}),", choose ",(0,s.jsx)(i.em,{children:"Compute"})," -> ",(0,s.jsx)(i.em,{children:"Elastic Cloud\nServer"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the upper right corner, click ",(0,s.jsx)(i.em,{children:"Create ECS"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"The page for purchasing ECSs is displayed."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Configure the billing mode, AZ, and specifications as needed and\nadd a data disk which will be created from the shared data disk\nimage. Complete the ECS creation as instructed."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Figure 7 Adding a data\ndisk",src:n(32865).A+"",width:"838",height:"195"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Wait for several minutes and check whether the new ECS is\ndisplayed in the ECS list."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Log in to the new ECS and check whether the service data is\nsuccessfully migrated."}),"\n",(0,s.jsxs)(i.p,{children:["Run the ",(0,s.jsx)(i.code,{children:"fdisk -l"})," command. The command output shows that the\nnew data disk has been partitioned. Mount the new partition to a\ndirectory of the ECS and check the ",(0,s.jsx)(i.em,{children:"hello-world.txt"})," file. The\nfile content is properly printed, which means that the service\ndata migration is successful."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image4",src:n(67381).A+"",width:"565",height:"570"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2993:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0000001138989308-d00739932f445bb26755e35a3b9c295f.png"},26103:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0000001251619009-cf3bb0e1b31a77675c6de772bb70129d.png"},14046:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0000001251966577-8b104358976ed863fac58c2f5ec26fc1.png"},81884:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295094264-7e3556cdc6abb17dc000a8ad41246b5b.png"},26323:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295099813-ba8299040d7f3e8556444b63f8a11e26.png"},12605:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295100003-1b0bce06bbc7c252b6dc52ee78023743.png"},2464:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295117864-4659d6be92bf64793576e8a988c68b9b.png"},47631:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295125718-502c48febb7133c3caba1fc5374b8699.png"},29225:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295125796-ea2c9a1ced9274b3298743f3007cc8e7.png"},32865:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295128562-d35fb06ee5d89729c5cfe763da7a7df8.png"},67381:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/en-us_image_0295129442-8151d9083306c0216af034f6c963b9ee.png"},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>r});var s=n(96540);const t={},a=s.createContext(t);function c(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);