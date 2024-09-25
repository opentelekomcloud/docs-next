"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[12087],{68897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(74848),i=t(28453);const s={id:"cce-keycloak",title:"Deploy Keycloak on CCE",tags:["cce","keycloak","security","rds","postgresql","ingress","nginx-ngress","externaldns","dns"]},o="Deploy Keycloak on CCE",l={id:"blueprints/by-use-case/security/keycloak/cce-keycloak",title:"Deploy Keycloak on CCE",description:"In this blueprint, we are going to discuss the steps to install",source:"@site/docs/blueprints/by-use-case/security/keycloak/cce-keycloak.md",sourceDirName:"blueprints/by-use-case/security/keycloak",slug:"/blueprints/by-use-case/security/keycloak/cce-keycloak",permalink:"/docs-next/pr-preview/pr-114/docs/blueprints/by-use-case/security/keycloak/cce-keycloak",draft:!1,unlisted:!1,editUrl:"https://github.com/akyriako/docs-next/tree/main/docs/blueprints/by-use-case/security/keycloak/cce-keycloak.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-114/docs/tags/cce"},{inline:!0,label:"keycloak",permalink:"/docs-next/pr-preview/pr-114/docs/tags/keycloak"},{inline:!0,label:"security",permalink:"/docs-next/pr-preview/pr-114/docs/tags/security"},{inline:!0,label:"rds",permalink:"/docs-next/pr-preview/pr-114/docs/tags/rds"},{inline:!0,label:"postgresql",permalink:"/docs-next/pr-preview/pr-114/docs/tags/postgresql"},{inline:!0,label:"ingress",permalink:"/docs-next/pr-preview/pr-114/docs/tags/ingress"},{inline:!0,label:"nginx-ngress",permalink:"/docs-next/pr-preview/pr-114/docs/tags/nginx-ngress"},{inline:!0,label:"externaldns",permalink:"/docs-next/pr-preview/pr-114/docs/tags/externaldns"},{inline:!0,label:"dns",permalink:"/docs-next/pr-preview/pr-114/docs/tags/dns"}],version:"current",frontMatter:{id:"cce-keycloak",title:"Deploy Keycloak on CCE",tags:["cce","keycloak","security","rds","postgresql","ingress","nginx-ngress","externaldns","dns"]},sidebar:"blueprintsSidebar",previous:{title:"Keycloak",permalink:"/docs-next/pr-preview/pr-114/docs/blueprints/by-use-case/security/keycloak/keycloak"},next:{title:"Identity Federation with GitHub",permalink:"/docs-next/pr-preview/pr-114/docs/blueprints/by-use-case/security/keycloak/identity-federation-github"}},r={},c=[{value:"Creating a VPC and a Subnet",id:"creating-a-vpc-and-a-subnet",level:2},{value:"Deploying a PostgreSQL with RDS",id:"deploying-a-postgresql-with-rds",level:2},{value:"Creating Security Groups",id:"creating-security-groups",level:3},{value:"Provisioning a Database",id:"provisioning-a-database",level:3},{value:"Creating a Private DNS Zone",id:"creating-a-private-dns-zone",level:3},{value:"Provisioning a CCE Cluster",id:"provisioning-a-cce-cluster",level:2},{value:"Deploying Keycloak",id:"deploying-keycloak",level:2},{value:"Deploying Keycloak Secrets",id:"deploying-keycloak-secrets",level:3},{value:"Deploying Keycloak Application",id:"deploying-keycloak-application",level:3},{value:"Deploying Keycloak Service",id:"deploying-keycloak-service",level:3},{value:"Exposing Keycloak",id:"exposing-keycloak",level:2},{value:"Creating an Elastic Load Balancer",id:"creating-an-elastic-load-balancer",level:3},{value:"Deploying Nginx Ingress on CCE",id:"deploying-nginx-ingress-on-cce",level:3},{value:"Creating a Public DNS Endpoint",id:"creating-a-public-dns-endpoint",level:3},{value:"Creating the Endpoint manually",id:"creating-the-endpoint-manually",level:4},{value:"Creating the Endpoint with ExternalDNS",id:"creating-the-endpoint-with-externaldns",level:4},{value:"Deploying a Keycloak Endpoint",id:"deploying-a-keycloak-endpoint",level:5},{value:"Deploying Keycloak Ingress",id:"deploying-keycloak-ingress",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"deploy-keycloak-on-cce",children:"Deploy Keycloak on CCE"}),"\n",(0,a.jsx)(n.p,{children:"In this blueprint, we are going to discuss the steps to install\nKeycloak, in Open Telekom Cloud, on a CCE Cluster."}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-vpc-and-a-subnet",children:"Creating a VPC and a Subnet"}),"\n",(0,a.jsx)(n.p,{children:"We are going to need a Virtual Private Cloud (VPC) and at least one\nSubnet where we are going to provision both RDS instances and CCE nodes.\nFor enhanced security granularity, we could split those resources in two\ndifferent Subnets."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(52674).A+"",width:"2366",height:"838"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"RDS and CCE nodes have to be on the same VPC."})}),"\n",(0,a.jsx)(n.h2,{id:"deploying-a-postgresql-with-rds",children:"Deploying a PostgreSQL with RDS"}),"\n",(0,a.jsx)(n.p,{children:"Keycloak, as a stateful workload, requires the presence of a persistent\nstorage in order to maintain its data and configuration during pod\nrestarts. We could deploy a PostgreSQL database as a CCE workload, but\nthis would require additional administrative overhead from your side.\nThe Managed Relational Database Service of Open Telekom Cloud is a\nperfect fit for this scenario. A scalable turn-key solution, that fully\nintegrated with the rest of managed services of the platform without\ndemanding from the consumer additional administrative effort."}),"\n",(0,a.jsx)(n.h3,{id:"creating-security-groups",children:"Creating Security Groups"}),"\n",(0,a.jsxs)(n.p,{children:["We are going to need two different Security Groups. One for the RDS\nnodes, so it can accept client calls on port ",(0,a.jsx)(n.code,{children:"5432"})," (Inbound Rules),\nwhich they only reside in the same Subnet (in case we went for a single\nSubnet solution):"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(20811).A+"",width:"2724",height:"724"})}),"\n",(0,a.jsx)(n.p,{children:"And one Security Group for the client nodes that need to access the\ndatabase (Outbound Rules), in our case those would be the CCE nodes\nwhere Keycloak is going to be installed on."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(64547).A+"",width:"2758",height:"688"})}),"\n",(0,a.jsx)(n.h3,{id:"provisioning-a-database",children:"Provisioning a Database"}),"\n",(0,a.jsx)(n.p,{children:"Now as next, we need to provision a PostgreSQL 14 database. Pick the\ninstance and storage class size that fit your needs:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(68793).A+"",width:"2724",height:"1030"})}),"\n",(0,a.jsx)(n.p,{children:"and make sure that you:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"you place the RDS nodes in the same VPC with the CCE nodes"}),"\n",(0,a.jsxs)(n.li,{children:["assign ",(0,a.jsx)(n.code,{children:"rds-instances"})," as the Security Group for the RDS nodes"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(44789).A+"",width:"2738",height:"954"})}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-private-dns-zone",children:"Creating a Private DNS Zone"}),"\n",(0,a.jsxs)(n.p,{children:["We are provisioning PostgreSQL in order to support the functionality of\nKeycloak. For that matter, although Open Telekom Cloud employs this RDS\ninstance with a floating IP address, it would be better that we connect\nthe RDS instance with Keycloak via a fully qualified domain name and let\nthe Open Telekom Cloud's DNS service to manage the resolution of that\nendpoints. In the Domain Name Service management panel click ",(0,a.jsx)(n.em,{children:"Private\nZone"})," and create a new one that points to the VPC that CCE and RDS nodes\nare placed:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(90340).A+"",width:"2312",height:"1240"})}),"\n",(0,a.jsxs)(n.p,{children:["and then click ",(0,a.jsx)(n.em,{children:"Manage Record Set"})," to add a new ",(0,a.jsx)(n.em,{children:"A Record"})," to this zone:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(51622).A+"",width:"1654",height:"1286"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"The domain name, will be a fictitious domain representing your solution\nand not a public one. It can be virtually any domain or subdomain that\nconforms to the a FQDN rules."})}),"\n",(0,a.jsx)(n.p,{children:"The floating IP of the RDS instance can be found in the Basic\nInformation panel of the database:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(37096).A+"",width:"2724",height:"1160"})}),"\n",(0,a.jsx)(n.h2,{id:"provisioning-a-cce-cluster",children:"Provisioning a CCE Cluster"}),"\n",(0,a.jsx)(n.p,{children:"We are going to need a CCE Cluster. In order to provision one, you can\nfollow the configuration steps of the wizard paying attention to the\nfollowing details:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"We are not going to need an HA cluster - of course adjust to your\nneeds because this is not something you can change in the future."}),"\n",(0,a.jsx)(n.li,{children:"We need to provision the CCE Cluster in the same VPC as the RDS\nnodes."}),"\n",(0,a.jsx)(n.li,{children:"If you follow the single Subnet lab instructions make sure you place\nthe CCE Nodes in the same Subnet that RDS nodes reside."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(65988).A+"",width:"1884",height:"1046"})}),"\n",(0,a.jsxs)(n.p,{children:["Add worker nodes to the CCE cluster using the wizard, and wait all nodes\nto become operational. Then add to ",(0,a.jsx)(n.strong,{children:"each"})," node an additional Security\nGroup, in particular the ",(0,a.jsx)(n.code,{children:"rds-client"})," that we created earlier in this\nlab."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(6527).A+"",width:"2666",height:"1198"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Make your own decision how you're going to access this CCE Cluster\nafterwards. You can assign an Elastic IP Address and access it over the\nInternet or provision and additional public-facing bastion host and\naccess it through this machine. ",(0,a.jsx)(n.strong,{children:"We categorically recommend the\nlatter"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"deploying-keycloak",children:"Deploying Keycloak"}),"\n",(0,a.jsx)(n.p,{children:"We are going to deploy Keycloak using simple Kubernetes manifests.\nDeploy those YAML manifests in the order described below using the\ncommand on your bastion host (or in any other machine if you chose to go\nfor an EIP):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f <<filename.yaml>>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"deploying-keycloak-secrets",children:"Deploying Keycloak Secrets"}),"\n",(0,a.jsx)(n.p,{children:"First we are going to need a Namespace in our CCE Cluster, in order to\ndeploy all the resources required by Keycloak:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl create namespace keycloak\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We are going to need two Secrets. One, ",(0,a.jsx)(n.code,{children:"postgres-credentials"}),", that will\ncontain the credentials to access the PostgreSQL database instance and a\nsecond one, ",(0,a.jsx)(n.code,{children:"keycloak-secrets"}),", that will contain the necessary\ncredential to access the web console of Keycloak:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="credentials.yaml" linenos="" emphasize-lines="9,20"}',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: postgres-credentials\n  namespace: keycloak\ntype: Opaque\nstringData:\n  POSTGRES_USER: root\n  POSTGRES_PASSWORD: <<POSTGRES_PASSWORD>>\n  POSTGRES_DB: postgres\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: keycloak-secrets\n  namespace: keycloak\ntype: Opaque\nstringData:\n  KEYCLOAK_ADMIN: admin\n  KEYCLOAK_ADMIN_PASSWORD: <<KEYCLOAK_ADMIN_PASSWORD>>\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"POSTGRES_PASSWORD"})," is the password for the ",(0,a.jsx)(n.code,{children:"root"})," user your provided\nduring the creation of the RDS instance."]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"KEYCLOAK_ADMIN_PASSWORD"}),", as we mentioned before, is the password for\nthe ",(0,a.jsx)(n.code,{children:"admin"})," user of the Keycloak web console. You can easily create\nrandom strong passwords, in Linux terminal, with the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"openssl rand -base64 14\n"})}),"\n",(0,a.jsx)(n.h3,{id:"deploying-keycloak-application",children:"Deploying Keycloak Application"}),"\n",(0,a.jsx)(n.p,{children:"Next step, is deploying Keycloak itself:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="deployment.yaml" linenos="" emphasize-lines="23,26,27,31,32,48,49,50,51,55,56,60,61"}',children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: keycloak\n  namespace: keycloak\n  labels:\n    app: keycloak\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: keycloak\n  template:\n    metadata:\n      labels:\n        app: keycloak\n    spec:\n      containers:\n      - name: keycloak\n        image: quay.io/keycloak/keycloak:21.0.2\n        args: ["start-dev"]\n        env:\n        - name: KEYCLOAK_ADMIN\n          valueFrom:\n            secretKeyRef:\n              key: KEYCLOAK_ADMIN\n              name: keycloak-secrets\n        - name: KEYCLOAK_ADMIN_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              key: KEYCLOAK_ADMIN_PASSWORD\n              name: keycloak-secrets\n        - name: KC_PROXY\n          value: "edge"\n        - name: KC_HEALTH_ENABLED\n          value: "true"\n        - name: KC_METRICS_ENABLED\n          value: "true"\n        - name: KC_HOSTNAME_STRICT_HTTPS\n          value: "true"\n        - name: KC_LOG_LEVEL\n          value: INFO\n        - name: KC_DB\n          value: postgres\n        - name: POSTGRES_DB\n          valueFrom:\n            secretKeyRef:\n              name: postgres-credentials\n              key: POSTGRES_DB\n        - name: KC_DB_URL\n          value: jdbc:postgresql://postgresql.blueprints.arc:5432/$(POSTGRES_DB)\n        - name: KC_DB_USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: postgres-credentials\n              key: POSTGRES_USER\n        - name: KC_DB_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgres-credentials\n              key: POSTGRES_PASSWORD\n        ports:\n        - name: http\n          containerPort: 8080\n        readinessProbe:\n          httpGet:\n            path: /health/ready\n            port: 8080\n          initialDelaySeconds: 250\n          periodSeconds: 10\n        livenessProbe:\n          httpGet:\n            path: /health/live\n            port: 8080\n          initialDelaySeconds: 500\n          periodSeconds: 30\n        resources:\n            limits:\n              memory: 512Mi\n              cpu: "1"\n            requests:\n              memory: 256Mi\n              cpu: "0.2"\n'})}),"\n",(0,a.jsx)(n.p,{children:"As you will notice in the highlighted lines, we parameterize the\ncredentials portion of this manifest by referencing the variables and\ntheir values we installed in the previous step with the Secrets.\nImportant to mention the significance of line 51, where we connect\nKeycloak with the RDS instance using the FQDN we created in our Private\nDNS Zone for this instance."}),"\n",(0,a.jsx)(n.h3,{id:"deploying-keycloak-service",children:"Deploying Keycloak Service"}),"\n",(0,a.jsx)(n.p,{children:"We deployed the application, but at the time being is not accessible by\nan internal or external actor (direct access from Pods does not count in\nthis case). For that matter, we need to deploy a Service that will\nexpose Keycloak's workload:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="service.yaml" linenos="" emphasize-lines="15"',children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: keycloak\n  namespace: keycloak\n  labels:\n    app: keycloak\nspec:\n  ports:\n  - name: https\n    port: 443\n    targetPort: 8080\n  selector:\n    app: keycloak\n  type: NodePort\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Pay attention to ",(0,a.jsx)(n.strong,{children:"line 15"}),", where we set the ",(0,a.jsx)(n.code,{children:"type"})," as ",(0,a.jsx)(n.code,{children:"NodePort"}),".\nThat's because we want to expose this service externally, in a later\nstep, via an Ingress."]})}),"\n",(0,a.jsx)(n.h2,{id:"exposing-keycloak",children:"Exposing Keycloak"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(70858).A+"",width:"1342",height:"720"})}),"\n",(0,a.jsx)(n.h3,{id:"creating-an-elastic-load-balancer",children:"Creating an Elastic Load Balancer"}),"\n",(0,a.jsx)(n.p,{children:"First in our list for this part, is to create an Elastic Load Balancer\nthat will be employed with the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"An EIP address"}),"\n",(0,a.jsx)(n.li,{children:"Support L4 and L7 load balancing"}),"\n",(0,a.jsx)(n.li,{children:"Be in the same VPC/Subnet as the nodes of our CCE Cluster"}),"\n",(0,a.jsxs)(n.li,{children:["Associate backend servers by using their IP addresses (",(0,a.jsx)(n.em,{children:"IP as\nBackend"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(62589).A+"",width:"2758",height:"926"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Note down the ",(0,a.jsx)(n.strong,{children:"ELB ID"}),", we are going to need it to configure the Nginx\nIngress that we will deploy next."]})}),"\n",(0,a.jsx)(n.h3,{id:"deploying-nginx-ingress-on-cce",children:"Deploying Nginx Ingress on CCE"}),"\n",(0,a.jsxs)(n.p,{children:["We are going to deploy in this step the Ingress that will sit between\nour ELB and the Keycloak Service and expose it in the address of our\npreference (",(0,a.jsx)(n.code,{children:"keycloak.example.com"})," for this lab)"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Do not forget that the FQDN we are going to use to expose the Keycloak\nService has to point to a ",(0,a.jsx)(n.strong,{children:"real"})," domain or subdomain that you actually\n",(0,a.jsx)(n.strong,{children:"own"}),"!"]})}),"\n",(0,a.jsxs)(n.p,{children:["We will use ",(0,a.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," to deploy Nginx Ingress to our CCE\nCluster. Helm is the de-facto package manager of Kubernetes and if you\ndon't have it already installed on your remote machine or your bastion\nhost, you can do it with the following commands:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nchmod 700 get_helm.sh\n./get_helm.sh\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We have to provide to the helm chart a couple configuration values\n(",(0,a.jsx)(n.strong,{children:"overrides.yaml"}),"), among them the internal ID of the Elastic Load\nBalancer is the most important - as it will bind the future ingresses\nthat will be created using this ingress class with the specific load\nbalancer."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="overrides.yaml" linenos="" emphasize-lines="6"',children:'controller:\n  replicaCount: 1\n  service:\n    externalTrafficPolicy: Cluster\n    annotations:\n      kubernetes.io/elb.id: "0000000-0000-0000-0000-000000000000"\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Special attention required at ",(0,a.jsx)(n.strong,{children:"line 6"}),", replace the placeholder value\nwith the ID you copied from the main panel of your newly created Elastic\nLoad Balancer."]})}),"\n",(0,a.jsxs)(n.p,{children:["We can now install the chart (it will automatically create and deploy\neverything in a namespace named ",(0,a.jsx)(n.code,{children:"nginx-system"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm upgrade --install -f overrides.yaml --install ingress-nginx ingress-nginx \\\n--repo https://kubernetes.github.io/ingress-nginx \\\n--namespace nginx-system --create-namespace\n"})}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-public-dns-endpoint",children:"Creating a Public DNS Endpoint"}),"\n",(0,a.jsx)(n.p,{children:"As we will see later, when we will reach to the point that we are ready\nto register this Keycloak installation as an Identity Provider (IdP) in\nour Open Telekom Cloud tenant, it is really pertinent that the EIP of\nour ELB resolves to a real, secure URL address:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(79401).A+"",width:"1634",height:"1058"})}),"\n",(0,a.jsx)(n.p,{children:"In order to accomplish that, we have to transfer the management of the\nNS-Records of your domain to the Domain Name Service of Open Telekom\nCloud. Go on the site of your registar and make sure you configure the\nfollowing:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Turn off any dynamic dns service for the domain or the subdomains\nyou are going to bind with Keycloak."}),"\n",(0,a.jsxs)(n.li,{children:["Change the NS-Records of your domain to point to:\n",(0,a.jsx)(n.code,{children:"ns1.open-telekom-cloud.com"})," ",(0,a.jsx)(n.strong,{children:"and"})," ",(0,a.jsx)(n.code,{children:"ns2.open-telekom-cloud.com"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If those two prerequisites are met, then you are ready to configure a\nnew DNS Public Zone and Record Sets for your domain in Open Telekom\nCloud. We do have two mutually exclusive options to do that:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create manually from Open Telekom Cloud Console, a new Public DNS\nZone that binds to your domain and an A-Record in that zone that\npoints to the EIP of the external load balancer."}),"\n",(0,a.jsxs)(n.li,{children:["Automate everything using\n",(0,a.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dns",children:"ExternalDNS"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"creating-the-endpoint-manually",children:"Creating the Endpoint manually"}),"\n",(0,a.jsx)(n.p,{children:"Follow the same steps we did earlier for the Private Zone, but this time\ncreate a Public Zone targeting to your domain and add an A-Record that\nbinds your Keycloak's (sub)domain with the Elastic IP Address of the\nElastic Load Balancer."}),"\n",(0,a.jsx)(n.h4,{id:"creating-the-endpoint-with-externaldns",children:"Creating the Endpoint with ExternalDNS"}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, we can automate the whole process by using ExternalDNS. You can find the necessary steps in blueprint:\n",(0,a.jsx)(n.a,{href:"/docs-next/pr-preview/pr-114/docs/blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns",children:"Create a Public DNS Endpoint with ExternalDNS"}),"."]}),"\n",(0,a.jsx)(n.h5,{id:"deploying-a-keycloak-endpoint",children:"Deploying a Keycloak Endpoint"}),"\n",(0,a.jsxs)(n.p,{children:["We have now laid all the groundwork in order to automatically provision\na Public DNS Zone and a dedicated A-Record that will bind the EIP of our\nELB with Keycloak's subdomain FQDN. For that matter we need to install\na Custom Resource based on a CRD installed by ExternalDNS that is called\n",(0,a.jsx)(n.code,{children:"DNSEndpoint"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="dns-endpoint.yaml" linenos="" emphasize-lines="8, 12"',children:"apiVersion: externaldns.k8s.io/v1alpha1\nkind: DNSEndpoint\nmetadata:\n  name: keycloak\n  namespace: keycloak\nspec:\n  endpoints:\n  - dnsName: keycloak.example.de\n    recordTTL: 300\n    recordType: A\n    targets:\n    - XXX.XXX.XXX.XXX\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"At line 12, replace the placeholder with the Elastic IP Address that is\nassigned to your Elastic Load Balancer. At line 8, replace the\n(sub)domain with the one of yours"})}),"\n",(0,a.jsx)(n.p,{children:"Wait for a couple of seconds, till the reconciliation loop of the\nExternalDNS controller is done, and if all went well you should now see\nthe Record Sets of your Public Zone populated with various entries:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(42176).A+"",width:"2706",height:"1048"})}),"\n",(0,a.jsx)(n.h3,{id:"deploying-keycloak-ingress",children:"Deploying Keycloak Ingress"}),"\n",(0,a.jsx)(n.p,{children:"And finally, the last step of this lab is to deploy an ingress for the\nKeycloak Service:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="ingress.yaml" linenos=""',children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: keycloak-ingress\n  namespace: keycloak\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\n    kubernetes.io/ingress.class: nginx\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: keycloak\n            port:\n              number: 443\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can now open the url address we defined in our Public DNS Zone for\nthis application and land on the welcome page of Keycloak:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(96120).A+"",width:"1968",height:"1192"})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs-next/pr-preview/pr-114/docs/blueprints/by-use-case/security/keycloak/identity-federation-github",children:"Identity Federation with GitHub"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},52674:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231208-ezg-dc0935df86fc3db25c3bf18e475f910b.png"},20811:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231208-fh3-aba0718b1c45f1e4434c9d089928f5ea.png"},64547:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231208-k2x-69db699e4fdd4a2e04d6ae384f4dcb70.png"},68793:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231208-k8t-197173f09467b4b5b2898a3f56cbf140.png"},44789:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231208-ka7-c4da47db72eb78e7b3db4ab32b2107ae.png"},70858:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-di1-d76805f807269b701b20cfb91c660321.png"},90340:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-f5u-7a85e011210a573a141dfcb1fe2cbb37.png"},51622:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-ffb-c3e1bcc9f3ab9c8d78008f5b466cb91f.png"},37096:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-fj8-4eb6e51091814ee6b12cb632394f5fe2.png"},65988:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-fp6-8a560149b7f7389e0dccb3d85317b310.png"},6527:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-g7y-fd08313314be51ab168179be8402cf02.png"},62589:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-i88-b8344560a68f1ec85b2c88ba65f160c0.png"},79401:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231211-ni4-6ff6d493b331ceddc9ec291272cdc933.png"},42176:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231212-dsj-e0806146ec35d5f2e8fe075c346eb483.png"},96120:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/SCR-20231212-fhq-9cd0b2e1497be6bfefa9a83b05acbd49.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(96540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);