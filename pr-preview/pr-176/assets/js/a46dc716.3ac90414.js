"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[65649],{60183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const r={id:"auto-scaling-based-on-elb-monitoring-metrics",title:"Auto Scaling Based on ELB Monitoring Metrics",tags:["cce","elb","hpa","prometheus","prometheus-exporter","prometheus-adapter","metrics","cloudeye","swr"]},o="Auto Scaling Based on ELB Monitoring Metrics",a={id:"best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics",title:"Auto Scaling Based on ELB Monitoring Metrics",description:"By default, Kubernetes scales a workload based on resource usage metrics",source:"@site/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics.md",sourceDirName:"best-practices/containers/cloud-container-engine",slug:"/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics",permalink:"/docs-next/pr-preview/pr-176/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-176/docs/tags/cce"},{inline:!0,label:"elb",permalink:"/docs-next/pr-preview/pr-176/docs/tags/elb"},{inline:!0,label:"hpa",permalink:"/docs-next/pr-preview/pr-176/docs/tags/hpa"},{inline:!0,label:"prometheus",permalink:"/docs-next/pr-preview/pr-176/docs/tags/prometheus"},{inline:!0,label:"prometheus-exporter",permalink:"/docs-next/pr-preview/pr-176/docs/tags/prometheus-exporter"},{inline:!0,label:"prometheus-adapter",permalink:"/docs-next/pr-preview/pr-176/docs/tags/prometheus-adapter"},{inline:!0,label:"metrics",permalink:"/docs-next/pr-preview/pr-176/docs/tags/metrics"},{inline:!0,label:"cloudeye",permalink:"/docs-next/pr-preview/pr-176/docs/tags/cloudeye"},{inline:!0,label:"swr",permalink:"/docs-next/pr-preview/pr-176/docs/tags/swr"}],version:"current",frontMatter:{id:"auto-scaling-based-on-elb-monitoring-metrics",title:"Auto Scaling Based on ELB Monitoring Metrics",tags:["cce","elb","hpa","prometheus","prometheus-exporter","prometheus-adapter","metrics","cloudeye","swr"]},sidebar:"bestPracticesSidebar",previous:{title:"Issue an ACME Certificate with DNS01 Solver in CCE",permalink:"/docs-next/pr-preview/pr-176/docs/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce"},next:{title:"Migrating Clusters from Other Clouds to CCE",permalink:"/docs-next/pr-preview/pr-176/docs/best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce"}},l={},c=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building the Exporter Image",id:"building-the-exporter-image",level:2},{value:"Installing Buildpacks",id:"installing-buildpacks",level:3},{value:"Building the image",id:"building-the-image",level:3},{value:"Pushing the image to SWR",id:"pushing-the-image-to-swr",level:3},{value:"Installing Prometheus/Grafana Stack &amp; cloudeye-exporter artifacts",id:"installing-prometheusgrafana-stack--cloudeye-exporter-artifacts",level:2},{value:"Deploying the Exporter",id:"deploying-the-exporter",level:2},{value:"Getting ELB and ELB Listener IDs",id:"getting-elb-and-elb-listener-ids",level:2},{value:"Installing Nginx Ingress Controller",id:"installing-nginx-ingress-controller",level:2},{value:"Installing an Nginx Demo Workload",id:"installing-an-nginx-demo-workload",level:2},{value:"Installing prometheus-adapter",id:"installing-prometheus-adapter",level:2},{value:"Creating an HPA Policy",id:"creating-an-hpa-policy",level:2},{value:"Appendix",id:"appendix",level:2},{value:"ELB Listener Metrics",id:"elb-listener-metrics",level:3},{value:"Developing an Exporter",id:"developing-an-exporter",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"auto-scaling-based-on-elb-monitoring-metrics",children:"Auto Scaling Based on ELB Monitoring Metrics"}),"\n",(0,s.jsx)(n.p,{children:"By default, Kubernetes scales a workload based on resource usage metrics\nsuch as CPU and memory. However, this mechanism cannot reflect the\nreal-time resource usage when traffic bursts arrive, because the\ncollected CPU and memory usage data lags behind the actual load balancer\ntraffic metrics. For some services (such as flash sale and social media)\nthat require fast auto scaling, scaling based on this rule may not be\nperformed in a timely manner and cannot meet these services' actual\nneeds. In this case, auto scaling based on ELB QPS data can respond to\nservice requirements more timely."}),"\n",(0,s.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,s.jsx)(n.p,{children:"This section describes an auto scaling solution based on ELB monitoring\nmetrics. Compared with CPU/memory usage-based auto scaling, auto scaling\nbased on ELB QPS data is more targeted and timely."}),"\n",(0,s.jsx)(n.p,{children:"The key of this solution is to obtain the ELB metric data and report the\ndata to Prometheus, convert the data in Prometheus to the metric data\nthat can be identified by HPA, and then perform auto scaling based on\nthe converted data."}),"\n",(0,s.jsx)(n.p,{children:"The implementation scheme is as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Develop a Prometheus exporter to obtain ELB metric data"}),"\n",(0,s.jsx)(n.li,{children:"Convert the data into the format required by Prometheus"}),"\n",(0,s.jsx)(n.li,{children:"Report it to Prometheus."}),"\n",(0,s.jsx)(n.li,{children:"Convert the Prometheus data into the Kubernetes metric API for the HPA controller to use."}),"\n",(0,s.jsx)(n.li,{children:"Set an HPA rule to use ELB monitoring data as auto scaling metrics."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This section uses ",(0,s.jsx)(n.a,{href:"https://github.com/akyriako/cloudeye-exporter",children:"cloudeye-exporter"})," as an example."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 1 ELB traffic flows and monitoring\ndata",src:t(59491).A+"",width:"2680",height:"1594"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Other metrics can be collected in the similar way."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"You must be familiar with Prometheus and be able to write the Prometheus exporter."}),"\n",(0,s.jsxs)(n.li,{children:["You have the Cloud Native Cluster Monitoring add-on installed in your cluster. This add-on supports clusters ",(0,s.jsx)(n.strong,{children:"of v1.17 or later"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Set the deployment mode of Cloud Native Cluster Monitoring to the ",(0,s.jsx)(n.code,{children:"server mode"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"building-the-exporter-image",children:"Building the Exporter Image"}),"\n",(0,s.jsxs)(n.p,{children:["This section uses ",(0,s.jsx)(n.a,{href:"https://github.com/akyriako/cloudeye-exporter",children:"cloudeye-exporter"})," to\nmonitor load balancer metrics."]}),"\n",(0,s.jsx)(n.h3,{id:"installing-buildpacks",children:"Installing Buildpacks"}),"\n",(0,s.jsxs)(n.p,{children:["In this tutorial we build the image wite the help of ",(0,s.jsx)(n.a,{href:"https://buildpacks.io/",children:"Buildpacks"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"With this approach we are building an OCI image which is\ncompatible whit almost all of the container runtimes which support\nOCI. In addition the image can also be build with Dockerfile and\ndocker build."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'git clone https://github.com/akyriako/cloudeye-exporter\ncurl -sSL "https://github.com/buildpacks/pack/releases/download/v0.32.1/pack-v0.32.1-linux.tgz" | sudo tar -C /usr/local/bin/ --no-same-owner -xzv pack\n'})}),"\n",(0,s.jsx)(n.h3,{id:"building-the-image",children:"Building the image"}),"\n",(0,s.jsxs)(n.p,{children:["The image name is ",(0,s.jsx)(n.code,{children:"cloudeye-exporter"})," and the image version is ",(0,s.jsx)(n.code,{children:"1.0"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd cloudeye-exporter\npack build cloudeye-exporter:v1 --builder gcr.io/buildpacks/builder:v1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"pushing-the-image-to-swr",children:"Pushing the image to SWR"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["(Optional) Log in to the ",(0,s.jsx)(n.em,{children:"SWR console"}),", choose ",(0,s.jsx)(n.em,{children:"Organizations"}),"\nin the navigation pane, and click ",(0,s.jsx)(n.em,{children:"Create Organization"})," in the\nupper right corner of the page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the navigation pane, choose ",(0,s.jsx)(n.em,{children:"My Images"})," and then click\n",(0,s.jsx)(n.em,{children:"Upload Through Client"}),". On the page displayed, click\n",(0,s.jsx)(n.em,{children:"Generate a temporary login command"})," and click\n",(0,s.jsx)(n.img,{alt:"image1",src:t(40915).A+"",width:"20",height:"21"})," to\ncopy the command."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Run the login command copied in the previous step on the cluster\nnode. If the login is successful, the message "Login\nSucceeded" is displayed.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Tag the ",(0,s.jsx)(n.code,{children:"cloudeye-exporter"})," image."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"**docker tag** *{Image name 1*:*Tag 1}*/*{Image repository address}*/*{Organization name}*/*{Image name 2*:*Tag 2}* \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{Image name 1:Tag 1}"}),": name and tag of the local image to be uploaded."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{Image repository address}"}),": The domain name at the end of the login command in is the image repository address, which can be obtained on the SWR console."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{Organization name}"}),": name of the organization created in."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{Image name 2:Tag 2}"}),": desired image name and tag to be displayed on the SWR console."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Example",type:"note",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker tag cloudeye-exporter:1.0 swr.eu-de.otc.t-systems.com/cloud-develop/cloudeye-exporter:1.0"})})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Pushing the image to the image repository."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"**docker push** *{Image repository address}*/*{Organizationname}*/*{Image name 2:Tag 2}*\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Example",type:"note",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker push swr.eu-de.otc.t-systems.com/cloud-develop/cloudeye-exporter:1.0"})})}),"\n",(0,s.jsx)(n.p,{children:"The following information will be returned upon a successful push:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"The push refers to repository [swr.eu-de.otc.t-systems.com/cloud-develop/cloudeye-exporter]\n030***: Pushed\nv1.0: digest: sha256:eb7e3bbd*** size: **\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To view the pushed image, go to the SWR console and refresh the ",(0,s.jsx)(n.em,{children:"My Images"})," page."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-prometheusgrafana-stack--cloudeye-exporter-artifacts",children:"Installing Prometheus/Grafana Stack & cloudeye-exporter artifacts"}),"\n",(0,s.jsxs)(n.p,{children:["Install Prometheus/Grafana stack via the kube-prometheus-stack chart.\nThe configuration values used will be autogenerated at\n",(0,s.jsx)(n.strong,{children:"deploy/manifests/prometheus-stack/override.yaml"}),". You could diff them\nwith the default values ",(0,s.jsx)(n.strong,{children:"default.yaml"})," to figure out the changes."]}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"./install-stack.sh"}),". This script will deploy, besides the\n",(0,s.jsx)(n.strong,{children:"kube-prometheus-stack"}),", all the ",(0,s.jsx)(n.strong,{children:"cloudeye-exporter"})," related artifacts."]}),"\n",(0,s.jsx)(n.h2,{id:"deploying-the-exporter",children:"Deploying the Exporter"}),"\n",(0,s.jsxs)(n.p,{children:["Prometheus can dynamically monitor pods if you add Prometheus\nannotations to the pods (the default path is ",(0,s.jsx)(n.code,{children:"/metrics"}),"). This section\nuses ",(0,s.jsx)(n.a,{href:"https://github.com/akyriako/cloudeye-exporter",children:"cloudeye-exporter"}),"\nas an example."]}),"\n",(0,s.jsx)(n.p,{children:"Common annotations in Prometheus are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prometheus.io/scrape"}),": If the value is ",(0,s.jsx)(n.code,{children:"true"}),", the pod will bemonitored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prometheus.io/path"}),": URL from which the data is collected. The default value is ",(0,s.jsx)(n.code,{children:"/metrics"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prometheus.io/port"}),": port number of the endpoint to collect data from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prometheus.io/scheme"}),": Defaults to ",(0,s.jsx)(n.code,{children:"http"}),". If HTTPS is configured for security purposes, change the value to ",(0,s.jsx)(n.code,{children:"https"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use kubectl to connect to the cluster."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a secret, which will be used by ",(0,s.jsx)(n.strong,{children:"cloudeye-exporter"})," for\nauthentication."]}),"\n",(0,s.jsxs)(n.p,{children:["a.  Create a copy of clouds.tpl template, name it ",(0,s.jsx)(n.strong,{children:"clouds.yml"}),"\nfile with the following content:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"auth_url"}),": indicates the IAM endpoint, which can be obtained from ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/en-us/endpoint/index.html",children:"Regions and Endpoints"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"project_name"}),": indicates the project name. On the ",(0,s.jsx)(n.em,{children:"My Credential"})," page, view the project name and project ID in the ",(0,s.jsx)(n.em,{children:"Projects"})," area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"access_key"})," and ",(0,s.jsx)(n.code,{children:"secret_key"}),": You can obtain them from ",(0,s.jsx)(n.em,{children:"Access Keys"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"region"}),": indicates the region name, which must correspond to the project in ",(0,s.jsx)(n.code,{children:"project_name"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"b.  Then encode it to base64 with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"base64 -i clouds.yaml \n"})}),"\n",(0,s.jsxs)(n.p,{children:["c.  Create the ",(0,s.jsx)(n.strong,{children:"cloudeye-exporter-clouds-secret.yaml"})," file with\nthe following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="cloudeye-exporter-clouds-secret.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudeye-exporter-clouds\n  namespace: default\ntype: Opaque\ndata:\n  clouds.yaml: Z2xvYmFsOg************************************************************\n"})}),"\n",(0,s.jsx)(n.p,{children:"d.  Create secret and deploy the exporter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f cloudeye-exporter-clouds-secret.yaml\nkubectl apply -f cloudeye-exporter-clouds-secret.yaml\nkubectl apply -f cloudeye-exporter-clouds-secret.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-elb-and-elb-listener-ids",children:"Getting ELB and ELB Listener IDs"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ELB metrics associated with the workload need to be\nmonitored. Therefore, the target workload must use the Service or\nIngress of the ",(0,s.jsx)(n.code,{children:"LoadBalancer"})," type."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"View the access mode of the workload to be monitored and obtain the\nELB ID and ELB listener ID."}),"\n",(0,s.jsxs)(n.p,{children:["a.  On the CCE cluster console, choose ",(0,s.jsx)(n.em,{children:"Networking"}),". On the\n",(0,s.jsx)(n.em,{children:"Services"})," or ",(0,s.jsx)(n.em,{children:"Ingresses"})," tab page, view the Service or\nIngress of the ",(0,s.jsx)(n.code,{children:"LoadBalancer"})," type and click the load balancer\nto access the load balancer page and copy the ELB ID."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image2",src:t(63178).A+"",width:"1182",height:"231"})}),"\n",(0,s.jsxs)(n.p,{children:["b.  On the ",(0,s.jsx)(n.em,{children:"Listeners"})," tab, view the listener corresponding to the\nworkload and copy the listener ID which corresponds to port ",(0,s.jsx)(n.code,{children:"80"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image3",src:t(56665).A+"",width:"2464",height:"640"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Export the Elastic Load Balancer's ID and listener ID as an env\nvariables"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export ELB_ID="66872*****"\nexport ELB_LISTENER_ID="94424*****"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installing-nginx-ingress-controller",children:"Installing Nginx Ingress Controller"}),"\n",(0,s.jsxs)(n.p,{children:["Next, we are going to install the Nginx Ingress Controller using the\nscript ",(0,s.jsx)(n.strong,{children:"./install-ingress.sh"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="install-ingress.sh"',children:"envsubst < nginx-ingress-controller/override.tpl  nginx-ingress-controller/override.yaml\nsleep 15\n\nhelm upgrade --install -f nginx-ingress-controller/override.yaml --install ingress-nginx ingress-nginx \\\n--repo https://kubernetes.github.io/ingress-nginx --namespace ingress-nginx --create-namespace\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-an-nginx-demo-workload",children:"Installing an Nginx Demo Workload"}),"\n",(0,s.jsxs)(n.p,{children:["We are going to need a workload to test ",(0,s.jsx)(n.strong,{children:"HPA"})," and the autoscaling via our\ncustom ",(0,s.jsx)(n.strong,{children:"CloudEye"})," derived metrics. For that matter we will deploy a dummy\nnginx deployment and service using the script ",(0,s.jsx)(n.strong,{children:"./install-workload.sh"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create namespace applications\nkubectl apply -f deploy/manifests/nginx-deployment.yaml\nkubectl apply -f deploy/manifests/nginx-ingress.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-prometheus-adapter",children:"Installing prometheus-adapter"}),"\n",(0,s.jsxs)(n.p,{children:["Next, and last step, of the installation sequence is the deployment of\n",(0,s.jsx)(n.strong,{children:"prometheus-adapter"})," that will give an additional custom metrics api\nendpoint that will bind our custom ",(0,s.jsx)(n.strong,{children:"CloudEye"})," metrics with ",(0,s.jsx)(n.strong,{children:"HPA"}),"\n",(0,s.jsx)(n.strong,{children:"./install-adapter.sh"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="install-adapter.sh"',children:"envsubst < prometheus-adapter/override.tpl  prometheus-adapter/override.yaml\nsleep 15\n\nhelm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\n\nhelm upgrade --install --values prometheus-adapter/override.yaml prometheus-adapter prometheus-community/prometheus-adapter -n monitoring\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The configuration values used for the prometheus-adapter chart will be\nautogenerated at ",(0,s.jsx)(n.strong,{children:"deploy/manifests/prometheus-adapter/override.yaml"}),". You\ncould diff them with the default values ",(0,s.jsx)(n.strong,{children:"default.yaml"})," to figure out the\nchanges."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-an-hpa-policy",children:"Creating an HPA Policy"}),"\n",(0,s.jsx)(n.p,{children:"After the data reported by the exporter to Prometheus is converted into\nthe Kubernetes metric API by using the Prometheus adapter, you can\ncreate an HPA policy for auto scaling."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create an HPA policy. The inbound traffic of the ELB load balancer\nis used to trigger scale-out. When the value of ",(0,s.jsx)(n.code,{children:"m7_in_Bps"}),"\n(inbound traffic rate) exceeds ",(0,s.jsx)(n.code,{children:"1000"}),", the nginx Deployment will be\nscaled."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: nginx\n  namespace: default\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: nginx\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n    - type: Object\n      object:\n        metric:\n          name: elb01_listener_m7_in_Bps\n        describedObject:\n          apiVersion: v1\n          kind: Service\n          name: cloudeye-exporter\n        target:\n          type: Value\n          value: 1000\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 2 Created HPA Policy",src:t(5238).A+"",width:"2165",height:"391"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After the HPA policy is created, perform a pressure test on the\nworkload (accessing the pods through ELB). Then, the HPA controller\ndetermines whether scaling is required based on the configured\nvalue."}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"Events"})," dialog box, obtain scaling records in the ",(0,s.jsx)(n.em,{children:"Kubernetes Event"})," column."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 3 Scaling events",src:t(69421).A+"",width:"1339",height:"511"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,s.jsx)(n.h3,{id:"elb-listener-metrics",children:"ELB Listener Metrics"}),"\n",(0,s.jsx)(n.p,{children:"The following table lists the Elastic Load Balancer Listener metrics that can be collected\nusing the method described in sections above."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Metric"}),(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Unit"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m1_cps"})}),(0,s.jsx)(n.td,{children:"Concurrent Connections"}),(0,s.jsx)(n.td,{children:"Count"}),(0,s.jsx)(n.td,{children:"Number of concurrent connections processed by a load balance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m1e_server_rps"})}),(0,s.jsx)(n.td,{children:"Reset Packets from Backend Servers"}),(0,s.jsx)(n.td,{children:"Count/Second"}),(0,s.jsx)(n.td,{children:"Number of reset packets sent from the backend server to clients. These reset packages are generated by the backend server and then forwarded by load balancers."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m1f_lvs_rps"})}),(0,s.jsx)(n.td,{children:"Reset Packets from Load Balancers"}),(0,s.jsx)(n.td,{children:"Count/Second"}),(0,s.jsx)(n.td,{children:"Number of reset packets sent from load balancers."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m21_client_rps"})}),(0,s.jsx)(n.td,{children:"Reset Packets from Clients"}),(0,s.jsx)(n.td,{children:"Count/Second"}),(0,s.jsx)(n.td,{children:"Number of reset packets sent from clients to the backend server. These reset packages are generated by the clients and then forwarded by load balancers."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m22_in_bandwidth"})}),(0,s.jsx)(n.td,{children:"Inbound Bandwidth"}),(0,s.jsx)(n.td,{children:"bit/s"}),(0,s.jsx)(n.td,{children:"Inbound bandwidth of a load balancer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m23_out_bandwidth"})}),(0,s.jsx)(n.td,{children:"Outbound Bandwidth"}),(0,s.jsx)(n.td,{children:"bit/s"}),(0,s.jsx)(n.td,{children:"Outbound bandwidth of a load balancer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m2_act_conn"})}),(0,s.jsx)(n.td,{children:"Active Connections"}),(0,s.jsx)(n.td,{children:"Count"}),(0,s.jsx)(n.td,{children:"Number of current active connections."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m3_inact_conn"})}),(0,s.jsx)(n.td,{children:"Inactive Connections"}),(0,s.jsx)(n.td,{children:"Count"}),(0,s.jsx)(n.td,{children:"Number of current inactive connections."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m4_ncps"})}),(0,s.jsx)(n.td,{children:"New Connections"}),(0,s.jsx)(n.td,{children:"Count"}),(0,s.jsx)(n.td,{children:"Number of current new connections."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m5_in_pps"})}),(0,s.jsx)(n.td,{children:"Incoming Packets"}),(0,s.jsx)(n.td,{children:"Count"}),(0,s.jsx)(n.td,{children:"Number of packets sent to a load balancer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m6_out_pps"})}),(0,s.jsx)(n.td,{children:"Outgoing Packets"}),(0,s.jsx)(n.td,{children:"Count"}),(0,s.jsx)(n.td,{children:"Number of packets sent from a load balancer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m7_in_Bps"})}),(0,s.jsx)(n.td,{children:"Inbound Rate"}),(0,s.jsx)(n.td,{children:"byte/s"}),(0,s.jsx)(n.td,{children:"Number of incoming bytes per second on a load balancer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"m8_out_Bps"})}),(0,s.jsx)(n.td,{children:"Outbound Rate"}),(0,s.jsx)(n.td,{children:"byte/s"}),(0,s.jsx)(n.td,{children:"Number of outgoing bytes per second on a load balancer."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"developing-an-exporter",children:"Developing an Exporter"}),"\n",(0,s.jsxs)(n.p,{children:["Prometheus periodically calls the ",(0,s.jsx)(n.code,{children:"/metrics"})," API of the exporter to obtain metric data. Applications only need to report monitoring data\nthrough ",(0,s.jsx)(n.code,{children:"/metrics"}),". You can select a Prometheus client in a desired language and integrate it into applications to implement the\n",(0,s.jsx)(n.code,{children:"/metrics"})," API. For details about the client, see ",(0,s.jsx)(n.a,{href:"https://prometheus.io/docs/instrumenting/clientlibs/",children:"Prometheus Client Libraries"}),". For\ndetails about how to write the exporter, see ",(0,s.jsx)(n.a,{href:"https://prometheus.io/docs/instrumenting/writing_exporters/",children:"Writing Exporters"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The monitoring data must be in the format that Prometheus supports. Each\ndata record provides the ELB ID, listener ID, namespace where the\nService is located, Service name, and Service UID as labels, as shown in\nthe following figure."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image5",src:t(51384).A+"",width:"1452",height:"227"})}),"\n",(0,s.jsx)(n.p,{children:"To obtain the preceding data, perform the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Obtain all Services."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"annotations"})," field in the returned information contains the\nELB associated with the Service."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"kubernetes.io/elb.id"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"kubernetes.io/elb.class"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use APIs in Querying Listeners to get the listener ID based on the\nload balancer ID obtained in the previous step."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Obtain the ELB monitoring data."}),"\n",(0,s.jsx)(n.p,{children:"The ELB monitoring data is obtained using the CES APIs described in\nQuerying Monitoring Data in Batches. For details about ELB\nmonitoring metrics, see Monitoring Metrics. Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m1_cps"}),": number of concurrent connections"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m5_in_pps"}),": number of incoming data packets"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m6_out_pps"}),": number of outgoing data packets"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m7_in_Bps"}),": incoming rate"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m8_out_Bps"}),": outgoing rate"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Aggregate data in the format that Prometheus supports and expose the\ndata through the ",(0,s.jsx)(n.code,{children:"/metrics"})," API."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},59491:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001160642449-2c86ff97112c5a6e54850807f5c15d5d.png"},40915:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACqSURBVDhPY/jy9dt/auJRA6H447v/L16+wovffMSiD4ixGvhgZ9f/8vJyvLhr5yMMfSCM1cAPDy/9P3nyFHa8d97/JkIGPjk47X9TUxMReNX/Cw93/e8iZCDMi1VYDYHiKpBX5/0/Q7yBXf93PsRUAMMQNaMGYlFHuoFPD/2fBoykaQefYVVHuoFY5JAxLQ0kMh2iGYCOwQaSlFPQDEDHYAOpiQe7gd/+AwBIw9kI+PIQ4wAAAABJRU5ErkJggg=="},56665:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001380992506-4d5619a715514bf7525bb634554ee347.png"},51384:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001381152106-c0afc526298384aa11a22dfa95af734e.png"},63178:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001431432309-f6d88205377fb0bf73570be4219097ae.png"},69421:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001606845825-2fc64d535bb9bfd1030c7b034f7f2a99.png"},5238:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001606847653-fa31af0c30cd700e2fee1dca63f50408.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);