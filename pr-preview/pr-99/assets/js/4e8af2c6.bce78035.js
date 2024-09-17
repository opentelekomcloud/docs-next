"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[40552],{9343:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=n(74848),s=n(28453);const i={id:"deploy-umami-cce",title:"Deploy Umami on CCE",tags:["umami","analytics","web-analytics","cce","postgresql","zalando-postgres-operator"]},t="Deploy Umami on CCE",r={id:"blueprints/by-use-case/analytics/umami/deploy-umami-cce",title:"Deploy Umami on CCE",description:"In this blueprint we are going to set up Umami on Open Telekom Cloud's Cloud Container Engine (CCE), leveraging Kubernetes for scalability and flexibility. For the database backend, we will use the Zalando PostgreSQL Operator to provision and manage a PostgreSQL cluster within the CCE environment.",source:"@site/docs/blueprints/by-use-case/analytics/umami/deploy-umami-cce.md",sourceDirName:"blueprints/by-use-case/analytics/umami",slug:"/blueprints/by-use-case/analytics/umami/deploy-umami-cce",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/analytics/umami/deploy-umami-cce",draft:!1,unlisted:!1,editUrl:"https://github.com/akyriako/docs-next/tree/main/docs/blueprints/by-use-case/analytics/umami/deploy-umami-cce.md",tags:[{inline:!0,label:"umami",permalink:"/docs-next/pr-preview/pr-99/docs/tags/umami"},{inline:!0,label:"analytics",permalink:"/docs-next/pr-preview/pr-99/docs/tags/analytics"},{inline:!0,label:"web-analytics",permalink:"/docs-next/pr-preview/pr-99/docs/tags/web-analytics"},{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-99/docs/tags/cce"},{inline:!0,label:"postgresql",permalink:"/docs-next/pr-preview/pr-99/docs/tags/postgresql"},{inline:!0,label:"zalando-postgres-operator",permalink:"/docs-next/pr-preview/pr-99/docs/tags/zalando-postgres-operator"}],version:"current",frontMatter:{id:"deploy-umami-cce",title:"Deploy Umami on CCE",tags:["umami","analytics","web-analytics","cce","postgresql","zalando-postgres-operator"]},sidebar:"blueprintsSidebar",previous:{title:"Umami",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/analytics/umami/umami"},next:{title:"Using RDS for PostgreSQL to Set Up Umami on ECS",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/analytics/umami/using-rds-postgresql-to-setup-umami-on-ecs"}},l={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Zalando Postgres Operator",id:"installing-zalando-postgres-operator",level:2},{value:"Installing Umami",id:"installing-umami",level:2},{value:"Provisioning a Database",id:"provisioning-a-database",level:3},{value:"Deploying Umami",id:"deploying-umami",level:3},{value:"Creating an Elastic Load Balancer",id:"creating-an-elastic-load-balancer",level:2},{value:"Exposing Umami",id:"exposing-umami",level:2},{value:"Creating a Service",id:"creating-a-service",level:3},{value:"Creating an Ingress (optional)",id:"creating-an-ingress-optional",level:3},{value:"Verification",id:"verification",level:2}];function d(e){const A={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.h1,{id:"deploy-umami-on-cce",children:"Deploy Umami on CCE"}),"\n",(0,a.jsx)(A.p,{children:"In this blueprint we are going to set up Umami on Open Telekom Cloud's Cloud Container Engine (CCE), leveraging Kubernetes for scalability and flexibility. For the database backend, we will use the Zalando PostgreSQL Operator to provision and manage a PostgreSQL cluster within the CCE environment."}),"\n",(0,a.jsx)(A.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(A.p,{children:["We are going to need a CCE Cluster (its provisioning is out of the scope of this blueprint) and the ",(0,a.jsx)(A.strong,{children:"zalando-postgres-operator"}),". This operator automates the management of PostgreSQL clusters on Kubernetes, handling tasks like scaling, backups, and failover. It simplifies the deployment and maintenance of a highly available PostgreSQL database within the CCE cluster. Additionally we are going to need an Elastic Load Balancer in order to expose Umami."]}),"\n",(0,a.jsx)(A.h2,{id:"installing-zalando-postgres-operator",children:"Installing Zalando Postgres Operator"}),"\n",(0,a.jsx)(A.p,{children:"We are going to install the operator by using the provided Helm chart:"}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-shell",children:"helm repo add postgres-operator-charts https://opensource.zalando.com/postgres-operator/charts/postgres-operator\nhelm repo update\n\nhelm install postgres-operator postgres-operator-charts/postgres-operator\n"})}),"\n",(0,a.jsx)(A.h2,{id:"installing-umami",children:"Installing Umami"}),"\n",(0,a.jsx)(A.h3,{id:"provisioning-a-database",children:"Provisioning a Database"}),"\n",(0,a.jsx)(A.p,{children:"As we priorly discussed, we are going to use zalando-postgres-operator in order to provision a PostgreSQL Cluster in CCE:"}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-yaml",metastring:'title="umami-postgresql.yaml"',children:'apiVersion: acid.zalan.do/v1\nkind: postgresql\nmetadata:\n  labels:\n    application: umami\n  name: umami-psql\nspec:\n  databases:\n    umami: umami\n  numberOfInstances: 1\n  postgresql:\n    version: "16"\n    parameters:  \n      huge_pages: "false"\n  preparedDatabases:\n    umami:\n      defaultUsers: true\n      schemas:\n        data: {}\n        history:\n          defaultRoles: true\n          defaultUsers: false\n  resources:\n    limits:\n      cpu: 500m\n      memory: 500Mi\n    requests:\n      cpu: 10m\n      memory: 100Mi\n  teamId: default\n  users:\n    admin:\n      - superuser\n      - createdb\n    umami: []\n  volume:\n    size: 1Gi\n    storageClass: csi-disk\n'})}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-shell",children:"kubectl apply -f umami-postgresql.yaml\n"})}),"\n",(0,a.jsx)(A.h3,{id:"deploying-umami",children:"Deploying Umami"}),"\n",(0,a.jsx)(A.p,{children:"Create the follow manifest:"}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-yaml",metastring:'title="umami-web-deployment.yaml"',children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: umami-web    \nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: umami-web\n  template:\n    metadata:\n      labels:\n        app: umami-web\n    spec:\n      containers:\n        - name: web\n          image: ghcr.io/umami-software/umami:postgresql-latest\n          ports:\n            - containerPort: 5000\n              protocol: TCP\n          env:\n            - name: PORT\n              value: '5000'\n            - name: DB_DATABASE\n              value: \"umami\"\n            - name: DB_HOST\n              value: umami-psql.docs-next.svc.cluster.local\n            - name: DB_PORT\n              value: '5432'\n            - name: DB_USERNAME\n              valueFrom:\n                secretKeyRef:\n                  name: umami.umami-psql.credentials.postgresql.acid.zalan.do\n                  key: username\n            - name: DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: umami.umami-psql.credentials.postgresql.acid.zalan.do\n                  key: password\n            - name: DATABASE_URL\n              value: \"postgres://$(DB_USERNAME):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE)\"\n          imagePullPolicy: IfNotPresent\n"})}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-shell",children:"kubectl apply -f umami-web-deployment.yaml\n"})}),"\n",(0,a.jsx)(A.admonition,{type:"important",children:(0,a.jsxs)(A.p,{children:["A Kubernetes Secret with the name ",(0,a.jsx)(A.code,{children:"umami.umami-psql.credentials.postgresql.acid.zalan.do"}),", containing the credentials of the ",(0,a.jsx)(A.code,{children:"umami"})," database, will be automatically provisioned by the zalando-postgres-operator during the application of manifest ",(0,a.jsx)(A.strong,{children:"umami-postgresql.yaml"}),". The environmental variables ",(0,a.jsx)(A.code,{children:"DB_USERNAME"})," & ",(0,a.jsx)(A.code,{children:"DB_PASSWORD"})," are getting their values by referencing this Secret."]})}),"\n",(0,a.jsx)(A.h2,{id:"creating-an-elastic-load-balancer",children:"Creating an Elastic Load Balancer"}),"\n",(0,a.jsxs)(A.p,{children:["Navigate to ",(0,a.jsx)(A.em,{children:"Network Console"}),"->",(0,a.jsx)(A.em,{children:"Elastic Load Balancing"})," and click ",(0,a.jsx)(A.em,{children:"Create Elastic Load Balancer"}),". Choose to create ",(0,a.jsx)(A.em,{children:"Shared Load Balancer"})," and choose ",(0,a.jsx)(A.em,{children:"New EIP"})," so the new ELB is automatically bound to a new elastic IP:"]}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.img,{alt:"alt text",src:n(52633).A+"",width:"1909",height:"733"})}),"\n",(0,a.jsx)(A.admonition,{type:"tip",children:(0,a.jsx)(A.p,{children:"Write down the ID of the Elastic Load Balancer we are going to need it in the next steps."})}),"\n",(0,a.jsx)(A.h2,{id:"exposing-umami",children:"Exposing Umami"}),"\n",(0,a.jsx)(A.h3,{id:"creating-a-service",children:"Creating a Service"}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-yaml",metastring:'title="umami-service.yaml"',children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: umami-web\nspec:\n  type: NodePort\n  ports:\n    - protocol: TCP\n      name: umami\n      port: 5000\n      targetPort: 5000\n  selector:\n    app: umami-web\n"})}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-shell",children:"kubectl apply -f umami-service.yaml\n"})}),"\n",(0,a.jsx)(A.admonition,{type:"note",children:(0,a.jsxs)(A.p,{children:["If you are ",(0,a.jsx)(A.strong,{children:"not"})," planning to expose the service via an ",(0,a.jsx)(A.code,{children:"Ingress"})," object, change the ",(0,a.jsx)(A.strong,{children:"type"})," to ",(0,a.jsx)(A.code,{children:"ClusterIP"}),"."]})}),"\n",(0,a.jsx)(A.h3,{id:"creating-an-ingress-optional",children:"Creating an Ingress (optional)"}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-yaml",metastring:'title="umami-ingress.yaml"',children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: umami-ingress\n  labels:\n    app: umami-web\n  annotations:\n    kubernetes.io/elb.class: union\n    kubernetes.io/elb.id: {value}\n    kubernetes.io/elb.port: 80\nspec:\n  ingressClassName: cce\n  rules:\n  - host: umami.example.com\n    http:\n      paths:\n      - backend:\n          service:\n            name: umami-web\n            port:\n              number: 5000\n        path: /\n        pathType: ImplementationSpecific\n"})}),"\n",(0,a.jsx)(A.admonition,{type:"important",children:(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:["Replace the placeholder ",(0,a.jsx)(A.code,{children:"{value}"})," of annotation ",(0,a.jsx)(A.strong,{children:"kubernetes.io/elb.id"})," with the ID of the Elastic Load Balancer we created before."]}),"\n",(0,a.jsxs)(A.li,{children:["If the Elastic Load Balancer you created was a shared one then the annotation ",(0,a.jsx)(A.strong,{children:"kubernetes.io/elb.class"})," should have the value ",(0,a.jsx)(A.code,{children:"union"}),"."]}),"\n",(0,a.jsxs)(A.li,{children:["Replace ",(0,a.jsx)(A.code,{children:"umami.example.com"})," in ",(0,a.jsx)(A.strong,{children:"host"}),", with the FQDN of yours."]}),"\n"]})}),"\n",(0,a.jsx)(A.pre,{children:(0,a.jsx)(A.code,{className:"language-shell",children:"kubectl apply -f umami-ingress.yaml\n"})}),"\n",(0,a.jsx)(A.h2,{id:"verification",children:"Verification"}),"\n",(0,a.jsxs)(A.p,{children:["Open in a browser the address: ",(0,a.jsx)(A.code,{children:"http://ELB_EIP"})," and you should now land at the logon page of Umami:"]}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.img,{alt:"alt text",src:n(28271).A+"",width:"918",height:"468"})}),"\n",(0,a.jsx)(A.admonition,{type:"warning",children:(0,a.jsxs)(A.p,{children:["Umami uses ",(0,a.jsx)(A.code,{children:"admin"}),"/",(0,a.jsx)(A.code,{children:"umami"})," as default credentials. ",(0,a.jsx)(A.strong,{children:"Change them immediatelly after you log in!"})]})})]})}function c(e={}){const{wrapper:A}={...(0,s.R)(),...e.components};return A?(0,a.jsx)(A,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},52633:(e,A,n)=>{n.d(A,{A:()=>a});const a=n.p+"assets/images/Screenshot from 2024-09-10 14-32-38-565246c0f934d660226ff7f35f41b3d6.png"},28271:(e,A,n)=>{n.d(A,{A:()=>a});const a="data:image/png;base64,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"},28453:(e,A,n)=>{n.d(A,{R:()=>t,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function t(e){const A=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function r(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:A},e.children)}}}]);