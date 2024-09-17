"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[34211],{18774:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=s(74848),i=s(28453);const t={id:"kubernetes-logging-with-loki",title:"CCE Logging with Grafana Loki & Promtail",tags:["cce","observability","logging","grafana","loki","promtail","kubernetes"]},r="CCE Logging with Grafana Loki & Promtail",l={id:"blueprints/by-use-case/observability/kubernetes-logging-with-loki",title:"CCE Logging with Grafana Loki & Promtail",description:"In this blueprint, we'll consolidate all the logs generated in our Kubernetes cluster into a neat, real-time dashboard in Grafana.",source:"@site/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki.md",sourceDirName:"blueprints/by-use-case/observability",slug:"/blueprints/by-use-case/observability/kubernetes-logging-with-loki",permalink:"/docs-next/pr-preview/pr-100/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki",draft:!1,unlisted:!1,editUrl:"https://github.com/akyriako/docs-next/tree/main/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-100/docs/tags/cce"},{inline:!0,label:"observability",permalink:"/docs-next/pr-preview/pr-100/docs/tags/observability"},{inline:!0,label:"logging",permalink:"/docs-next/pr-preview/pr-100/docs/tags/logging"},{inline:!0,label:"grafana",permalink:"/docs-next/pr-preview/pr-100/docs/tags/grafana"},{inline:!0,label:"loki",permalink:"/docs-next/pr-preview/pr-100/docs/tags/loki"},{inline:!0,label:"promtail",permalink:"/docs-next/pr-preview/pr-100/docs/tags/promtail"},{inline:!0,label:"kubernetes",permalink:"/docs-next/pr-preview/pr-100/docs/tags/kubernetes"}],version:"current",frontMatter:{id:"kubernetes-logging-with-loki",title:"CCE Logging with Grafana Loki & Promtail",tags:["cce","observability","logging","grafana","loki","promtail","kubernetes"]},sidebar:"blueprintsSidebar",previous:{title:"Observability",permalink:"/docs-next/pr-preview/pr-100/docs/blueprints/by-use-case/observability/"},next:{title:"Security",permalink:"/docs-next/pr-preview/pr-100/docs/blueprints/by-use-case/security/"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Grafana",id:"installing-grafana",level:2},{value:"Installing Loki",id:"installing-loki",level:2},{value:"Installing Promtail",id:"installing-promtail",level:2},{value:"Configuring Grafana Data Sources &amp; Dashboard",id:"configuring-grafana-data-sources--dashboard",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"cce-logging-with-grafana-loki--promtail",children:"CCE Logging with Grafana Loki & Promtail"}),"\n",(0,n.jsx)(a.p,{children:"In this blueprint, we'll consolidate all the logs generated in our Kubernetes cluster into a neat, real-time dashboard in Grafana."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://grafana.com/",children:"Grafana"})," is an analytics and interactive visualization platform. It offers a rich variety of charts, graphs, and alerts and connects to a plethora of supported data sources such as Prometheus, time-series databases, or well-known RDBMS. Grafana allows you to query, visualize, and create alerts on your metrics regardless of where they are stored."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"Think of it as the equivalent of Kibana in the ELK stack."})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://grafana.com/oss/loki/",children:"Grafana Loki"})," is a logs aggregation system designed to be horizontally scalable, highly available, and cost-effective. Inspired by Prometheus, Loki does not index the contents of the logs but rather a set of labels for each log stream. It was launched in 2018 by Grafana Labs."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(44877).A+"",width:"931",height:"364"})}),"\n",(0,n.jsxs)(a.p,{children:["Loki uses ",(0,n.jsx)(a.a,{href:"https://grafana.com/docs/loki/latest/send-data/promtail/",children:"Promtail"})," to aggregate logs. Promtail is a logs collector agent that collects, labels, and ships logs to Loki. It runs on each Kubernetes node, using the same service discovery as Prometheus and supporting similar methods for labeling, transforming, and filtering logs before their ingestion to Loki."]}),"\n",(0,n.jsx)(a.p,{children:"Loki groups log entries into streams and indexes them with labels, which reduces overall costs and the time between log entry ingestion and query availability."}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"Think of Loki as the equivalent (not 1-to-1 but in a broader context) of Elasticsearch in the ELK stack."})}),"\n",(0,n.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"CCE"})," cluster."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Grafana"})," installation."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Grafana Loki"})," installation."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Promtail"})," agent on every node of the CCE cluster."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"installing-grafana",children:"Installing Grafana"}),"\n",(0,n.jsx)(a.p,{children:"The installation is straightforward using Helm. If you haven\u2019t installed Helm on your workstation, you can do it either with brew on macOS:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"brew install helm\n"})}),"\n",(0,n.jsx)(a.p,{children:"or with the following bash commands on Debian/Ubuntu Linux:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null\nsudo apt-get install apt-transport-https --yes\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list\nsudo apt-get update\nsudo apt-get install helm --yes\n'})}),"\n",(0,n.jsx)(a.p,{children:"Now, we can install the Helm chart for Grafana:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"helm repo add grafana https://grafana.github.io/helm-charts\nhelm repo update\nhelm install grafana grafana/grafana --namespace grafana --create-namespace\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(78223).A+"",width:"1374",height:"414"})}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["By default, the ",(0,n.jsx)(a.code,{children:"service/grafana"})," will be of type ",(0,n.jsx)(a.code,{children:"ClusterIP"}),". If you are not working on CCE, you can use ",(0,n.jsx)(a.a,{href:"https://metallb.io/",children:"MetalLB"})," as a network load balancer and patch the service to be of type ",(0,n.jsx)(a.code,{children:"LoadBalancer"}),". Alternatively, port-forwarding this service will suffice for now."]})}),"\n",(0,n.jsx)(a.h2,{id:"installing-loki",children:"Installing Loki"}),"\n",(0,n.jsx)(a.p,{children:"Loki consists of multiple components/microservices that can be deployed in three different modes:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(8464).A+"",width:"726",height:"556"})}),"\n",(0,n.jsxs)(a.p,{children:["that can be deployed in ",(0,n.jsx)(a.strong,{children:"3 different modes"}),":"]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#monolithic-mode",children:"Monolithic"})," mode: All of Loki\u2019s microservice components run inside a single process as a single binary."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#simple-scalable-deployment-mode",children:"Simple Scalable"})," mode:  Separate read and write paths."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#microservices-mode",children:"Microservices"})," mode: Every Loki component runs as a distinct process."]}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"important",children:(0,n.jsxs)(a.p,{children:["The scalable installation requires an S3 compatible object store such as AWS S3, Google Cloud Storage, Open Telekom Cloud OBS, or a self-hosted store like MinIO. In monolithic deployment mode, ",(0,n.jsx)(a.strong,{children:"only"})," the filesystem can be used for storage."]})}),"\n",(0,n.jsxs)(a.p,{children:["In this lab, we will use the ",(0,n.jsx)(a.strong,{children:"microservices"})," deployment mode with Open Telekom Cloud OBS as Loki\u2019s storage. We will configure and install Loki and Promtail using Helm charts."]}),"\n",(0,n.jsxs)(a.p,{children:["First, let's download the default chart values for each chart and make the necessary changes. For Loki, assuming you chose the ",(0,n.jsx)(a.code,{children:"loki-distributed"})," chart:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"helm show values grafana/loki-distributed > loki-distributed-overrides.yaml\n"})}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"If you are using S3 compatible storage, update the object and shared store target to S3 in your Helm chart values:"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(94026).A+"",width:"2768",height:"848"})}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsx)(a.li,{children:"Configure your storage to point to the designated S3 bucket:"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(95478).A+"",width:"2008",height:"492"})}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["The format of S3 endpoint is ",(0,n.jsx)(a.code,{children:"s3://{AK}:{SK}@{endpoint}/{region}/{bucket}"})]})}),"\n",(0,n.jsxs)(a.ol,{start:"3",children:["\n",(0,n.jsx)(a.li,{children:"Next you have to enable the compactor:"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(70527).A+"",width:"1982",height:"386"})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsx)(a.li,{children:"Then configure the compactor:"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(96519).A+"",width:"1946",height:"168"})}),"\n",(0,n.jsxs)(a.ol,{start:"5",children:["\n",(0,n.jsx)(a.li,{children:"Now that the Loki values are set, install Loki and then move on to Promtail:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"helm upgrade --install --values loki-distributed-overrides.yaml loki grafana/loki-distributed -n grafana-loki --create-namespace\n"})}),"\n",(0,n.jsx)(a.p,{children:"Get all the components that we installed from the Loki chart:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"kubectl get all -n grafana-loki\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(73775).A+"",width:"2236",height:"1466"})}),"\n",(0,n.jsx)(a.h2,{id:"installing-promtail",children:"Installing Promtail"}),"\n",(0,n.jsxs)(a.p,{children:["We need the endpoint of Loki\u2019s gateway as the designated endpoint that Promtail will use to push logs to Loki. In our case, that would be ",(0,n.jsx)(a.code,{children:"loki-loki-distributed-gateway.grafana-loki.svc.cluster.local"}),". Add this endpoint to the Promtail chart values:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"helm show values grafana/promtail > promtail-overrides.yaml\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(97334).A+"",width:"1818",height:"146"})}),"\n",(0,n.jsx)(a.p,{children:"We are now ready to deploy Promtail. Run the command and wait for all pods to reach a Ready state:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"helm upgrade --install --values promtail-overrides.yaml promtail grafana/promtail -n grafana-loki\n"})}),"\n",(0,n.jsx)(a.h2,{id:"configuring-grafana-data-sources--dashboard",children:"Configuring Grafana Data Sources & Dashboard"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["With all deployments completed, set up Grafana. As mentioned, Grafana has a simple service. Port-forward it and access Grafana directly from  ",(0,n.jsx)(a.code,{children:"[http://localhost:8080/](http://localhost:8080/)"}),":"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"kubectl port-forward service/grafana 8080:80 -n grafana\n"})}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"You can also expose this service in other ways, either by assigning an external IP via a Load Balancer or as an ingress route through your chosen Ingress solution."})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(20164).A+"",width:"1502",height:"1316"})}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsxs)(a.li,{children:["You will need these credentials to log in. The default ",(0,n.jsx)(a.em,{children:"user"})," is ",(0,n.jsx)(a.strong,{children:"admin"}),", but you will need to retrieve the password. Get all the ",(0,n.jsx)(a.code,{children:"Secrets"})," in the ",(0,n.jsx)(a.strong,{children:"grafana"})," namespace:"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"kubectl get secrets -n grafana\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(19539).A+"",width:"1078",height:"142"})}),"\n",(0,n.jsx)(a.p,{children:"Extract and decode the password:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'kubectl get secret grafana -n grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo\n'})}),"\n",(0,n.jsxs)(a.ol,{start:"3",children:["\n",(0,n.jsx)(a.li,{children:"Now logged into the Grafana Dashboard, add Grafana Loki as a data source:"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(15149).A+"",width:"2706",height:"448"})}),"\n",(0,n.jsxs)(a.p,{children:["Use the endpoint of the Grafana Loki gateway service as the URL ",(0,n.jsx)(a.code,{children:"[http://loki-loki-distributed-gateway.grafana-loki.svc.cluster.local](http://loki-loki-distributed-gateway.grafana-loki.svc.cluster.local/)"}),". Test, save, and exit!"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(40981).A+"",width:"2422",height:"1152"})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsxs)(a.li,{children:["Finally, add a dashboard to view your logs. Start with an existing dashboard and tailor it to your needs. A good starting point is this dashboard: : ",(0,n.jsx)(a.a,{href:"https://grafana.com/grafana/dashboards/15141-kubernetes-service-logs/",children:"https://grafana.com/grafana/dashboards/15141-kubernetes-service-logs/"})]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Copy the dashboard template ID and paste it into the text field of your Grafana Dashboard import page:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(12419).A+"",width:"1312",height:"1200"})}),"\n",(0,n.jsx)(a.p,{children:"Now all the pieces should come together, and you should be able to see logs from your Kubernetes workloads directly in your Grafana interface, providing an almost real-time experience:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"image",src:s(25027).A+"",width:"2736",height:"1434"})})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},97334:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_-MaxuCNpIezRgFm-VQZ_ow-bf2e0c6ee7b0792598eeeef0c0764dfe.webp"},40981:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_0ILMUg1ZbO5W--NfKjkeWQ-140a6ab61457342e15eeb7278d8d8ed8.webp"},73775:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_0WVdeJICkfrez73x43r1bQ-1a319e50f1be62452a55afb25e6c0e05.webp"},25027:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_JhD38QI651EA3UW_LYF_qg-568e81d89e23fc64bb3525f082a5ff45.webp"},70527:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_QQU5x7QDEmOBj95hOiAaAw-cbea7f9a540c32f7c4475240defb3aa0.webp"},15149:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_R2CxfRgIMj9uXGzYMcA0GA-14fb92208510905d370be5e0643b6baa.webp"},96519:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_SL6Snpm9qU_ubI3DrfPskA-62f15d3f02a4b3cbb1db9a01d20d304f.webp"},12419:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_bPVWpLNj1oS71KIZQI6A9Q-111bb016228ad320c95c4f79a7776cd6.webp"},95478:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_be63glOSUO7fwc21h1KVDA-56d50840c4e98ecde749b25ecea34780.webp"},20164:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_dSCLtTxGHOeAawTkJGI0lg-4d79a8103bfa9f44d4f2113011e1481b.webp"},8464:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_dxVzmGkmFHgkuyJmW1VK3g-6316d9334084b8b0c0d1078316fe867b.webp"},94026:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_m6H5W8D5FxdxunL0PYZjmQ-69a353a5df0b1f91b5efc4a7e9d215b9.webp"},78223:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_m8J4oWftIIhbRunvacQ9JA-1a8b6fb216e19b7672bca0fd3526a0fa.webp"},19539:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_t_0OqRNB4kaMlbUpQZkshQ-b5eb9d96d1ef52b82660dbfc50f553ce.webp"},44877:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/1_x7vfbTFPrJDX9n99xuigmw-bfad1fc6310e353a1107dbecf4a40269.webp"},28453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>l});var n=s(96540);const i={},t=n.createContext(i);function r(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);