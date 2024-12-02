"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[73305],{72730:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=s(74848),t=s(28453);const c={id:"connecting-a-redis-client-to-dcs-through-cce",title:"Connecting a Redis Client to DCS Through CCE",tags:["dcs","redis","cce"]},r="Connecting a Redis Client to DCS Through CCE",d={id:"best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce",title:"Connecting a Redis Client to DCS Through CCE",description:"With the development of the container technology, more and more",source:"@site/docs/best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce.md",sourceDirName:"best-practices/databases/distributed-cache-service",slug:"/best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce",permalink:"/docs-next/pr-preview/pr-174/docs/best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce.md",tags:[{inline:!0,label:"dcs",permalink:"/docs-next/pr-preview/pr-174/docs/tags/dcs"},{inline:!0,label:"redis",permalink:"/docs-next/pr-preview/pr-174/docs/tags/redis"},{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-174/docs/tags/cce"}],version:"current",frontMatter:{id:"connecting-a-redis-client-to-dcs-through-cce",title:"Connecting a Redis Client to DCS Through CCE",tags:["dcs","redis","cce"]},sidebar:"bestPracticesSidebar",previous:{title:"Using ELB for Public Access to DCS",permalink:"/docs-next/pr-preview/pr-174/docs/best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs"},next:{title:"From ECS-hosted MongoDB to DDS",permalink:"/docs-next/pr-preview/pr-174/docs/best-practices/databases/document-database-service/from-ecs-hosted-mongodb-to-dds"}},a={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Solution Design",id:"solution-design",level:2},{value:"Creating a Client Image",id:"creating-a-client-image",level:2},{value:"Creating a Workload",id:"creating-a-workload",level:2},{value:"Testing the Workload",id:"testing-the-workload",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"connecting-a-redis-client-to-dcs-through-cce",children:"Connecting a Redis Client to DCS Through CCE"}),"\n",(0,i.jsx)(n.p,{children:"With the development of the container technology, more and more\napplications are deployed in containers. This section describes how to\ndeploy a Redis client in a Cloud Container Engine (CCE) cluster\ncontainer and connect it to DCS."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image1",src:s(79846).A+"",width:"451",height:"389"})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Prepare the following resources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VPC and subnet"}),", for example, ",(0,i.jsx)(n.code,{children:"vpc-test"}),". For details, see\n",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html#en-us-topic-0013935842",children:"Creating a VPC"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"(Optional) Create two subnets. Place your DCS instance in one subnet (subnet 1) and your CCE cluster in the other (subnet 2)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DCS instance"}),", for example, ",(0,i.jsx)(n.code,{children:"dcs-test"}),". For details, see\n",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/distributed-cache-service/umn/getting_started/creating_an_instance/creating_a_dcs_redis_instance.html#dcs-ug-0326008",children:"Creating a DCS Redis Instance"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When creating a DCS instance, select the created VPC (",(0,i.jsx)(n.code,{children:"vpc-test"}),") and subnet 1."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CCE cluster"}),", for example, ",(0,i.jsx)(n.code,{children:"cce-test"}),". For details, see\n",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/creating_a_cluster/creating_a_cluster.html#cce-10-0028",children:"Creating a CCE Cluster"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When creating a CCE cluster, set ",(0,i.jsx)(n.code,{children:"Network Model"})," to ",(0,i.jsx)(n.code,{children:"VPC network"}),", and select VPC ",(0,i.jsx)(n.code,{children:"vpc-test"})," and subnet 2."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CCE node pool"}),", for example, ",(0,i.jsx)(n.code,{children:"cce-test-nodepool"}),". For details,\nsee ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/node_pools/creating_a_node_pool.html#cce-10-0012",children:"Creating a Node Pool"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When creating a node pool, set ",(0,i.jsx)(n.code,{children:"Node Type"})," to ",(0,i.jsx)(n.code,{children:"Elastic Cloud Server (VM)"}),", ",(0,i.jsx)(n.code,{children:"Container Engine"})," to ",(0,i.jsx)(n.code,{children:"Docker"}),", ",(0,i.jsx)(n.code,{children:"OS"})," to\n",(0,i.jsx)(n.code,{children:"CentOS 7.7"}),", and bind an existing EIP or create one."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image2",src:s(75987).A+"",width:"445",height:"308"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-client-image",children:"Creating a Client Image"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Download a Redis client."}),"\n",(0,i.jsx)(n.p,{children:"a.  Log in to the CCE cluster node."}),"\n",(0,i.jsxs)(n.p,{children:["Click the name of the created node pool. On the displayed page,\nclick ",(0,i.jsx)(n.em,{children:"Remote Login"})," in the upper right corner."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image3",src:s(9294).A+"",width:"1785",height:"183"})}),"\n",(0,i.jsxs)(n.p,{children:["b.  Run the ",(0,i.jsx)(n.code,{children:"gcc --version"})," command to check whether the GCC\ncompiler for compiling the Redis program is installed in the OS.\nThe following figure shows that the GCC compiler has been\ninstalled."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image4",src:s(63786).A+"",width:"705",height:"104"})}),"\n",(0,i.jsx)(n.p,{children:"If the GCC compiler is not installed, run the following commands\nto install it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo yum update\nyum -y install gcc\nyum -y install gcc-c++\n"})}),"\n",(0,i.jsxs)(n.p,{children:["c.  Run the following command to create the ",(0,i.jsx)(n.strong,{children:"redis"})," directory in\nthe ",(0,i.jsx)(n.strong,{children:"home"})," directory, and then go to the directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd /home \nmkdir redis\ncd redis\n"})}),"\n",(0,i.jsxs)(n.p,{children:["d.  Run the following command to download the Redis client. The\nfollowing takes version ",(0,i.jsx)(n.code,{children:"5.0.13"})," as an example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo wget https://download.redis.io/releases/redis-5.0.13.tar.gz\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image5",src:s(11263).A+"",width:"1478",height:"184"})}),"\n",(0,i.jsx)(n.p,{children:"e.  Decompress the Redis package, go to the Redis directory, run the\ncompilation command, and return to the Redis directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tar xvzf redis-5.0.13.tar.gz\ncd redis-5.0.13 \nmake redis-cli\ncd ..\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a Dockerfile."}),"\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.code,{children:"vim Dockerfile"})," command to create a Dockerfile and enter\nthe following information:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Dockerfile"',children:"FROM centos:7\nRUN useradd -d /home/redis -m redis\nCOPY ./redis-5.0.13 /home/redis/redis-5.0.13\nRUN chown redis:redis /home/redis/redis-5.0.13 -R\nUSER redis\nENV  HW_HOME=/home/redis/redis-5.0.13\nENV  PATH=$HW_HOME/src:$PATH\nWORKDIR /home/redis/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Press ",(0,i.jsx)(n.em,{children:"ESC"})," to exit the editing mode and type ",(0,i.jsx)(n.code,{children:":wq!"})," to save the\nconfiguration and exit the editing interface."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build a client image."}),"\n",(0,i.jsxs)(n.p,{children:["a.  Choose ",(0,i.jsx)(n.em,{children:"Software Repository for Container"})," from the service\nlist to go to the SWR console."]}),"\n",(0,i.jsxs)(n.p,{children:["b.  Click ",(0,i.jsx)(n.em,{children:"Create Organization"})," in the upper right corner and\nenter an organization name to create an organization. You can\nalso use an existing organization. (Click ",(0,i.jsx)(n.em,{children:"Organization\nManagement"})," in the navigation pane to view organizations.)"]}),"\n",(0,i.jsxs)(n.p,{children:["c.  On the SWR ",(0,i.jsx)(n.em,{children:"Dashboard"})," page, click ",(0,i.jsx)(n.em,{children:"Generate Login Command"}),"\nin the upper right corner to obtain and copy the login command.\n(",(0,i.jsx)(n.code,{children:"swr.xxxxxx.com"})," at the end of the login command is the image\nrepository address.)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1 Obtaining a login command",src:s(64427).A+"",width:"1907",height:"590"})}),"\n",(0,i.jsx)(n.p,{children:"d.  Run the copied login command on the CCE node to log in to SWR."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 2 Logging in to SWR",src:s(46547).A+"",width:"1511",height:"106"})}),"\n",(0,i.jsx)(n.p,{children:"e.  Run the following command to build an image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker build -t <Image repository address>/<Organization name>/<Image name :version>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Image repository address"})," indicates the address of the image\nrepository, which is at the end of the login command.\n",(0,i.jsx)(n.em,{children:"Organization name"})," indicates the name of the organization. ",(0,i.jsx)(n.em,{children:"Image name"}),"\nindicates the name of the image to be built. ",(0,i.jsx)(n.em,{children:"version"})," indicates\nthe image version. Replace them with the actual values."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 3 Building an image",src:s(69152).A+"",width:"903",height:"557"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the following command to upload the client image to SWR:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker push <Image repository address>/<Organization name>/<Image name :version>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 4 Uploading an image",src:s(6298).A+"",width:"867",height:"106"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After the image is uploaded, you can view it on the ",(0,i.jsx)(n.em,{children:"My Images"}),"\npage of the SWR console."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 5 Viewing images",src:s(96740).A+"",width:"1896",height:"367"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-workload",children:"Creating a Workload"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the DCS console, click the created Redis instance ",(0,i.jsx)(n.code,{children:"dcs-test"})," to\ngo to the details page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Connection"})," area, obtain the IP address and port number of\nthe Redis instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"Connect to Redis"})," in the upper right corner to use the Web\nCLI."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the Web CLI, run a ",(0,i.jsx)(n.code,{children:"SET"})," command. The following figure uses\n",(0,i.jsx)(n.code,{children:'SET hello "hello redis!"'})," as an example."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image6",src:s(74775).A+"",width:"1366",height:"234"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the CCE console, click the created CCE cluster ",(0,i.jsx)(n.code,{children:"cce-test"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the navigation pane, choose ",(0,i.jsx)(n.em,{children:"Workloads"}),". Click ",(0,i.jsx)(n.em,{children:"Create\nWorkload"})," in the upper right corner. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/workloads/creating_a_workload/creating_a_deployment.html#cce-10-0047",children:"Creating a\nWorkload"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Container Settings"})," -> ",(0,i.jsx)(n.em,{children:"Basic Info"})," area, set\n",(0,i.jsx)(n.em,{children:"Image Name"})," to the name of the created Redis image."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Container Settings"})," -> ",(0,i.jsx)(n.em,{children:"Lifecycle"})," area, configure\nthe parameters as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Command"}),": ",(0,i.jsx)(n.code,{children:"/bin/bash"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Args"}),": ",(0,i.jsx)(n.code,{children:"-c"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"while true ;do sleep 10;/home/redis/redis-5.0.13/src/redis-cli h** **{10.0.0.0}** **-p** **6379** **-a** **{DCS instance password}** **get** **hello;done**"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the preceding command, ",(0,i.jsx)(n.code,{children:"10.0.0.0"})," indicates the IP address\nof the DCS instance, ",(0,i.jsx)(n.code,{children:"6379"})," indicates the port number of the\nDCS instance, ",(0,i.jsx)(n.code,{children:"{DCS instance password}"})," indicates the password\nof the DCS instance, and ",(0,i.jsx)(n.code,{children:"hello"})," indicates the data set when\nyou connect to Redis through the Web CLI. Replace them with the\nactual values."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 6 Configuring lifecycle parameters",src:s(28243).A+"",width:"1813",height:"642"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the workload is in the ",(0,i.jsx)(n.code,{children:"Running"})," state, it has been\nsuccessfully created."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 7 Checking the workload status",src:s(42467).A+"",width:"1630",height:"279"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"testing-the-workload",children:"Testing the Workload"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to the CCE cluster node."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download and configure the ",(0,i.jsx)(n.code,{children:"kubectl"})," configuration file by referring\nto ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/connecting_to_a_cluster/connecting_to_a_cluster_using_kubectl.html",children:"Connecting to a Cluster Using kubectl"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the following command. If ",(0,i.jsx)(n.code,{children:"Running"})," is returned, the Redis\ncontainer is running."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get pod -n default\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image7",src:s(34379).A+"",width:"473",height:"49"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the following command to view the logs of the Redis container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl logs --tail 10 -f redis-xxxxxxxx -n default\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"redis-xxxxxxxx"})," indicates the name of the created workload pod.\n(Click the workload name to view the workload pod name.)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image8",src:s(80710).A+"",width:"804",height:"137"})}),"\n",(0,i.jsxs)(n.p,{children:["In the command output, the information returned by DCS is ",(0,i.jsx)(n.code,{children:"hello redis!"}),", which is the data you've previously set."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The test is complete."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11263:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001425667664-3880b32b2b0e160386fac5ab7a9608e7.png"},74775:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001425685956-7ccbafb9ead3b40bf46047ae7b2e3b5b.png"},63786:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001425794174-2fedc687cb6d67826c5a320d9af0a973.png"},64427:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001425958670-f96c42f35b860b60508a053b2f4aeb4f.png"},9294:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001426108974-0d28a9a894810f1a61a769ac5338c7ff.png"},46547:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001426121394-eec13967231ee22723401845f96b8bb3.png"},69152:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001426145908-bdb57f51e89d6e43f42828160e04fb69.png"},6298:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001426146644-8af8631f8d13f031f1807ef230658932.png"},34379:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},75987:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001427434044-f4207f5a30ad379eb087ad941793333a.png"},96740:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001476188661-f8a456755a92678818bf76b8fcaab8e7.png"},80710:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001476217873-b32eb6451369c59ac6f1f9e65d76f289.png"},28243:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001476223097-31f583423d35b1779aeaad1b6bfd6c78.png"},42467:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001476227677-5966de3f4beebab89d521d70e52cfe30.png"},79846:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001479114773-40f92eae87e30c3edb2cd6f3a5a4baf2.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(96540);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);