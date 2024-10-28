"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[3771],{98551:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>A,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(74848),i=s(28453);const a={id:"using-rds-postgresql-to-setup-umami-on-ecs",title:"Using RDS for PostgreSQL to Set Up Umami on ECS",tags:["umami","analytics","web-analytics","ecs","rds","postgresql"]},A="Using RDS for PostgreSQL to Set Up Umami on ECS",r={id:"blueprints/by-use-case/analytics/umami/using-rds-postgresql-to-setup-umami-on-ecs",title:"Using RDS for PostgreSQL to Set Up Umami on ECS",description:"In this blueprint we are going to set up Umami on Open Telekom Cloud leveraging an Elastic Cloud Server (ECS), while using Relational Database Service (RDS) for PostgreSQL to manage the database.",source:"@site/docs/blueprints/by-use-case/analytics/umami/using-rds-postgresql-to-setup-umami-on-ecs.md",sourceDirName:"blueprints/by-use-case/analytics/umami",slug:"/blueprints/by-use-case/analytics/umami/using-rds-postgresql-to-setup-umami-on-ecs",permalink:"/docs-next/pr-preview/pr-151/docs/blueprints/by-use-case/analytics/umami/using-rds-postgresql-to-setup-umami-on-ecs",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/analytics/umami/using-rds-postgresql-to-setup-umami-on-ecs.md",tags:[{inline:!0,label:"umami",permalink:"/docs-next/pr-preview/pr-151/docs/tags/umami"},{inline:!0,label:"analytics",permalink:"/docs-next/pr-preview/pr-151/docs/tags/analytics"},{inline:!0,label:"web-analytics",permalink:"/docs-next/pr-preview/pr-151/docs/tags/web-analytics"},{inline:!0,label:"ecs",permalink:"/docs-next/pr-preview/pr-151/docs/tags/ecs"},{inline:!0,label:"rds",permalink:"/docs-next/pr-preview/pr-151/docs/tags/rds"},{inline:!0,label:"postgresql",permalink:"/docs-next/pr-preview/pr-151/docs/tags/postgresql"}],version:"current",frontMatter:{id:"using-rds-postgresql-to-setup-umami-on-ecs",title:"Using RDS for PostgreSQL to Set Up Umami on ECS",tags:["umami","analytics","web-analytics","ecs","rds","postgresql"]},sidebar:"blueprintsSidebar",previous:{title:"Deploy Umami on CCE",permalink:"/docs-next/pr-preview/pr-151/docs/blueprints/by-use-case/analytics/umami/deploy-umami-cce"},next:{title:"Computing",permalink:"/docs-next/pr-preview/pr-151/docs/blueprints/by-use-case/computing/"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating an ECS Server",id:"creating-an-ecs-server",level:2},{value:"Creating a PostgreSQL Database",id:"creating-a-postgresql-database",level:2},{value:"Installing Cryptographic Functions Plugins",id:"installing-cryptographic-functions-plugins",level:3},{value:"Establishing Connectivity",id:"establishing-connectivity",level:2},{value:"Creating Security Group for RDS",id:"creating-security-group-for-rds",level:3},{value:"Creating Security Group for ECS",id:"creating-security-group-for-ecs",level:3},{value:"Creating Outbound Rule for PostgreSQL",id:"creating-outbound-rule-for-postgresql",level:4},{value:"Creating Inbound Rule for SSH",id:"creating-inbound-rule-for-ssh",level:4},{value:"Creating Inbound Rule for Umami",id:"creating-inbound-rule-for-umami",level:4},{value:"Deploying Umami",id:"deploying-umami",level:2},{value:"Creating the Database",id:"creating-the-database",level:3},{value:"Installing the PostgreSQL client tools",id:"installing-the-postgresql-client-tools",level:4},{value:"Creating the Umami Database",id:"creating-the-umami-database",level:4},{value:"Creating Roles and Assign Privileges",id:"creating-roles-and-assign-privileges",level:4},{value:"Installing Docker",id:"installing-docker",level:3},{value:"Setup Docker&#39;s apt repository",id:"setup-dockers-apt-repository",level:4},{value:"Instal the Docker packages",id:"instal-the-docker-packages",level:4},{value:"Post-Installation Steps",id:"post-installation-steps",level:4},{value:"Installing Umami as Docker Container",id:"installing-umami-as-docker-container",level:3},{value:"Create an APP_SECRET and export Credentials",id:"create-an-app_secret-and-export-credentials",level:4},{value:"Create a Docker Compose file",id:"create-a-docker-compose-file",level:4},{value:"Exposing Umami",id:"exposing-umami",level:2},{value:"Creating an Elastic Load Balancer",id:"creating-an-elastic-load-balancer",level:3},{value:"Creating a Listener",id:"creating-a-listener",level:3},{value:"Verification",id:"verification",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-rds-for-postgresql-to-set-up-umami-on-ecs",children:"Using RDS for PostgreSQL to Set Up Umami on ECS"}),"\n",(0,t.jsx)(n.p,{children:"In this blueprint we are going to set up Umami on Open Telekom Cloud leveraging an Elastic Cloud Server (ECS), while using Relational Database Service (RDS) for PostgreSQL to manage the database."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"We are going to need, create and configure the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a PostgreSQL Instance in RDS: RDS automates database management tasks like backups, patching, and scaling. It simplifies deploying a PostgreSQL instance without needing to manage the infrastructure directly."}),"\n",(0,t.jsx)(n.li,{children:"an ECS Server for Umami: The server will be used to run Umami's application layer. You will install and configure Umami on this ECS instance, which will interact with the PostgreSQL database."}),"\n",(0,t.jsx)(n.li,{children:"Networking: Set up secure network configurations between your ECS and RDS, ensuring communication between the Umami application and the PostgreSQL instance."}),"\n",(0,t.jsx)(n.li,{children:"Deployment: After configuring the ECS and connecting it to the RDS database, you can deploy Umami, connect it to the database, and start monitoring your web traffic."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-ecs-server",children:"Creating an ECS Server"}),"\n",(0,t.jsxs)(n.p,{children:["Click on the console ",(0,t.jsx)(n.em,{children:"Elastic Cloud Server"}),"->",(0,t.jsx)(n.em,{children:"Create ECS"})," and pick the flavor and operating system that suits your needs. Make sure though, you place it in the same VPC/Subnet that you are planning to install your RDS DB instance. For this blueprint we are going to set up Ubuntu 22.04 on a ",(0,t.jsx)(n.em,{children:"s7n.large.4"})," flavor. Consequently some of the commands that are going to be executed later, will assume you are working on a Ubuntu (or Debian-based) distribution."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(66466).A+"",width:"1927",height:"758"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-postgresql-database",children:"Creating a PostgreSQL Database"}),"\n",(0,t.jsxs)(n.p,{children:["We are going to create a single, non highly available PostgreSQL v16. In ",(0,t.jsx)(n.em,{children:"Relational Database Service"})," click ",(0,t.jsx)(n.em,{children:"Create DB Instance"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create a Database Wizard Part 1",src:s(39842).A+"",width:"1918",height:"857"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you place the database server in the same VPC/Subnet that the ECS instance lives. Choose the flavor of your liking, provide the ",(0,t.jsx)(n.strong,{children:"root"})," password and press ",(0,t.jsx)(n.em,{children:"Create Now"}),". For the time being, we are going to make no changes in the Security Groups; we are going to fix this in the next step."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create a Database Wizard Part 2",src:s(65124).A+"",width:"1918",height:"857"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Picking a single non-HA instance is just for demonstration purposes and ",(0,t.jsx)(n.strong,{children:"not"})," suitable for production. While implementing this blueprint adjust instances and replicas according to your needs and volume projections."]})}),"\n",(0,t.jsx)(n.h3,{id:"installing-cryptographic-functions-plugins",children:"Installing Cryptographic Functions Plugins"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"Relational Database Service"})," click your instance and then navigate to ",(0,t.jsx)(n.em,{children:"Plugins"}),". Search the list for the plugin ",(0,t.jsx)(n.strong,{children:"pgcrypto"}),", and install it by click the ",(0,t.jsx)(n.em,{children:"Install"})," link."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(68018).A+"",width:"1911",height:"449"})}),"\n",(0,t.jsx)(n.h2,{id:"establishing-connectivity",children:"Establishing Connectivity"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"Relational Database Service"})," click your instance and then navigate to ",(0,t.jsx)(n.em,{children:"Connectivity & Security"})," and under ",(0,t.jsx)(n.em,{children:"Connection Topology"})," choose ",(0,t.jsx)(n.em,{children:"Private Connection"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Establishing Connectivity",src:s(72634).A+"",width:"1273",height:"517"})}),"\n",(0,t.jsxs)(n.p,{children:["In this blueprint, we are interested in variant 2, where our database instance (with floating IP ",(0,t.jsx)(n.code,{children:"172.16.0.30"}),") needs to establish two-way communication with the ECS(B) instance, which in our case is the ECS instance that hold the Umami installation. For that matter we need to create two Security Groups, one that will allow inbound connections to port ",(0,t.jsx)(n.code,{children:"5432"})," and will be assigned to our RDS instance and a second one that will allow outbound connections from port ",(0,t.jsx)(n.code,{children:"5432"})," and will be assigned to the ECS instance that our workload will run."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-security-group-for-rds",children:"Creating Security Group for RDS"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Adding Inbound Rules for RDS Instances",src:s(20023).A+"",width:"1620",height:"438"})}),"\n",(0,t.jsxs)(n.p,{children:["For additional security, make sure you set as ",(0,t.jsx)(n.strong,{children:"Source"})," the CIDR of the your Subnet (in this case ",(0,t.jsx)(n.code,{children:"172.16.0.0/24"}),"); in that way you prohibit anyone access your database outside your VPC/Subnet."]}),"\n",(0,t.jsxs)(n.p,{children:["Go back to the ",(0,t.jsx)(n.em,{children:"Connectivity & Security"})," panel of your database and replace under ",(0,t.jsx)(n.em,{children:"Security Group Rules"})," -> ",(0,t.jsx)(n.em,{children:"Security Group"}),", the default Security Group with the one we just created:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(16394).A+"",width:"1657",height:"733"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-security-group-for-ecs",children:"Creating Security Group for ECS"}),"\n",(0,t.jsx)(n.h4,{id:"creating-outbound-rule-for-postgresql",children:"Creating Outbound Rule for PostgreSQL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Adding Outbound Rules for ECS",src:s(41951).A+"",width:"1620",height:"438"})}),"\n",(0,t.jsxs)(n.p,{children:["In the same notion, set as ",(0,t.jsx)(n.strong,{children:"Destination"})," the CIDR of the your Subnet (in this case ",(0,t.jsx)(n.code,{children:"172.16.0.0/24"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["On our ECS instance, click ",(0,t.jsx)(n.em,{children:"Security Groups"})," -> ",(0,t.jsx)(n.em,{children:"Change Security Group"}),", and add additionally the new Security Group to the list."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(57334).A+"",width:"1686",height:"469"})}),"\n",(0,t.jsx)(n.h4,{id:"creating-inbound-rule-for-ssh",children:"Creating Inbound Rule for SSH"}),"\n",(0,t.jsxs)(n.p,{children:["You are going to need an additionnal inbound rule to allow actors accessing this ECS Server via SSH. Add in the existing Security Group (or create new one for finer granularity of permissions and reusability among more instances) port ",(0,t.jsx)(n.code,{children:"22"})," in the ",(0,t.jsx)(n.em,{children:"Inbound Rules"})," list, and set the value of ",(0,t.jsx)(n.strong,{children:"Remote End"})," as ",(0,t.jsx)(n.code,{children:"0.0.0.0/24"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(50949).A+"",width:"1922",height:"522"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"How you are going to establish this SSH connection, is entirely up to you. You can use a bastion or an Elastic IP bound to your ECS or a DNAT Rule in a NAT Gateway. Depends on your needs and your assessment."})}),"\n",(0,t.jsx)(n.h4,{id:"creating-inbound-rule-for-umami",children:"Creating Inbound Rule for Umami"}),"\n",(0,t.jsx)(n.h2,{id:"deploying-umami",children:"Deploying Umami"}),"\n",(0,t.jsx)(n.h3,{id:"creating-the-database",children:"Creating the Database"}),"\n",(0,t.jsx)(n.h4,{id:"installing-the-postgresql-client-tools",children:"Installing the PostgreSQL client tools"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update\nsudo apt-get -y install postgresql-client-14\n"})}),"\n",(0,t.jsx)(n.h4,{id:"creating-the-umami-database",children:"Creating the Umami Database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"createdb umami --host=172.16.0.30 --username=root\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"You will be asked to provide the root password you've set during the installation."})}),"\n",(0,t.jsx)(n.h4,{id:"creating-roles-and-assign-privileges",children:"Creating Roles and Assign Privileges"}),"\n",(0,t.jsx)(n.p,{children:"Connect to database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"psql -h 172.16.0.30 --username=root umami\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create Role & Privileges and make sure the Cryptographics Functions Plugin is on:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE ROLE umami WITH LOGIN PASSWORD '{value}\u2019;\nGRANT ALL PRIVILEGES ON DATABASE umami TO umami;\n\\c umami \nCREATE EXTENSION IF NOT EXISTS pgcrypto;\nGRANT ALL PRIVILEGES ON SCHEMA public TO umami;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"{value}"})," with your own password!"]})}),"\n",(0,t.jsx)(n.h3,{id:"installing-docker",children:"Installing Docker"}),"\n",(0,t.jsx)(n.h4,{id:"setup-dockers-apt-repository",children:"Setup Docker's apt repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'sudo apt-get update\nsudo apt-get install ca-certificates curl\nsudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\\n  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n  \nsudo apt-get update\n'})}),"\n",(0,t.jsx)(n.h4,{id:"instal-the-docker-packages",children:"Instal the Docker packages"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n"})}),"\n",(0,t.jsx)(n.h4,{id:"post-installation-steps",children:"Post-Installation Steps"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo groupadd docker\nsudo usermod -aG docker $USER\nnewgrp docker\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installing-umami-as-docker-container",children:"Installing Umami as Docker Container"}),"\n",(0,t.jsx)(n.h4,{id:"create-an-app_secret-and-export-credentials",children:"Create an APP_SECRET and export Credentials"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export APP_SECRET=$(openssl rand 30 | openssl base64 -A)\nexport PSQL_HOST=172.16.0.30\nexport PSQL_ROOT_PASSWORD={value}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"PSQL_HOST"})," and ",(0,t.jsx)(n.code,{children:"PSQL_ROOT_PASSWORD"})," values with your own ones."]})}),"\n",(0,t.jsx)(n.h4,{id:"create-a-docker-compose-file",children:"Create a Docker Compose file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:'version: \'3\'\nservices:\n  umami:\n    image: ghcr.io/umami-software/umami:postgresql-latest\n    ports:\n      - "3000:3000"\n    environment:\n      DATABASE_URL: postgresql://root:${PSQL_ROOT_PASSWORD}@${PSQL_HOST}:5432/umami\n      DATABASE_TYPE: postgresql\n      APP_SECRET: ${APP_SECRET}\n    restart: always\n    healthcheck:\n      test: ["CMD-SHELL", "curl http://localhost:3000/api/heartbeat"]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker compose up -d\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exposing-umami",children:"Exposing Umami"}),"\n",(0,t.jsx)(n.h3,{id:"creating-an-elastic-load-balancer",children:"Creating an Elastic Load Balancer"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.em,{children:"Network Console"}),"->",(0,t.jsx)(n.em,{children:"Elastic Load Balancing"})," and click ",(0,t.jsx)(n.em,{children:"Create Elastic Load Balancer"}),". Choose to create ",(0,t.jsx)(n.em,{children:"Shared Load Balancer"})," and choose ",(0,t.jsx)(n.em,{children:"New EIP"})," so the new ELB is automatically bound to a new elastic IP:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(52633).A+"",width:"1909",height:"733"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-listener",children:"Creating a Listener"}),"\n",(0,t.jsxs)(n.p,{children:["Choose your Elastic Load Balancer from the console and click ",(0,t.jsx)(n.em,{children:"Add Listener"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(31646).A+"",width:"1910",height:"521"})}),"\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.em,{children:"Frontend Protocol"})," as ",(0,t.jsx)(n.code,{children:"TCP"}),", and ",(0,t.jsx)(n.em,{children:"Frontend Port"})," as ",(0,t.jsx)(n.code,{children:"80"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(5721).A+"",width:"1918",height:"751"})}),"\n",(0,t.jsxs)(n.p,{children:["Configure a new Routing Policy, supported by a new Backend Server Group and set ",(0,t.jsx)(n.em,{children:"Backend Protocol"})," as ",(0,t.jsx)(n.code,{children:"TCP"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(80864).A+"",width:"1918",height:"751"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, you need to add members to the newly created Backend Group. Click ",(0,t.jsx)(n.em,{children:"Add Backend Server"})," and choose the Umami ECS Instance from the list:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(5204).A+"",width:"1918",height:"751"})}),"\n",(0,t.jsxs)(n.p,{children:["and set the Backend Port to ",(0,t.jsx)(n.code,{children:"3000"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(31226).A+"",width:"1918",height:"751"})}),"\n",(0,t.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(n.p,{children:["Open in a browser the address: ",(0,t.jsx)(n.code,{children:"http://ELB_EIP"})," and you should now land at the logon page of Umami:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:s(28271).A+"",width:"918",height:"468"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Umami uses ",(0,t.jsx)(n.code,{children:"admin"}),"/",(0,t.jsx)(n.code,{children:"umami"})," as default credentials. ",(0,t.jsx)(n.strong,{children:"Change them immediatelly after you log in!"})]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},72634:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-09 13-53-46-4f318fda9a47444235f3427239019645.png"},20023:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-09 14-03-16-24aa5365d66fc8d76623afb90b90e54d.png"},41951:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-09 14-10-01-c41986ffd22ab5902b77d69c31693df0.png"},16394:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-09 14-12-28-0193458b15b4951e390b09835de0e24e.png"},57334:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-09 14-16-19-5c98dae3a20fb1315ccd921e8b980cd3.png"},66466:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 12-40-41-48046a1cc376d9140e88829a281f11d2.png"},50949:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 12-47-36-76318568b043049279dc040ae9d07808.png"},68018:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 13-14-30-b2155a9abea98f8f2ab02d61100e09e1.png"},52633:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 14-32-38-565246c0f934d660226ff7f35f41b3d6.png"},31646:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 14-38-26-c34991ddcef9a545bc47ba885fb3fe3d.png"},5721:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 14-38-50-c76eef3d86b407faf2127d5fe170d77d.png"},80864:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 14-39-09-405897246fe08908445ba62465589f19.png"},5204:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 14-39-38-7c470b84a97f63e1215a59ca58e98ffc.png"},31226:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot from 2024-09-10 14-39-50-2cc97d77af570ce26e2dec2190be4461.png"},28271:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},39842:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot_from_2024-09-09_12-51-39-d8de9e5f86691bbad206531018ea4238.png"},65124:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot_from_2024-09-09_12-52-14-75a03a7b900274a63da2848fcd41f778.png"},28453:(e,n,s)=>{s.d(n,{R:()=>A,x:()=>r});var t=s(96540);const i={},a=t.createContext(i);function A(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:A(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);