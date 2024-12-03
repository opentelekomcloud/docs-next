"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[41764],{21746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(74848),r=t(28453);const i={id:"create-a-public-dns-endpoint-with-externaldns",title:"Create a Public DNS Endpoint with ExternalDNS",tags:["cce","networking","dns","cname","externaldns"]},a="Create a Public DNS Endpoint with ExternalDNS",o={id:"blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns",title:"Create a Public DNS Endpoint with ExternalDNS",description:"ExternalDNS is a Kubernetes component used to manage DNS records for services and applications running in a Kubernetes cluster. It automates the creation, update, and deletion of DNS records based on the state of resources within the cluster. ExternalDNS is typically employed in scenarios where you need to expose services running inside a Kubernetes cluster to the outside world with fully qualified domain names (FQDNs), ensuring they are accessible by external users.",source:"@site/docs/blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns.md",sourceDirName:"blueprints/by-use-case/networking",slug:"/blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-99/docs/tags/cce"},{inline:!0,label:"networking",permalink:"/docs-next/pr-preview/pr-99/docs/tags/networking"},{inline:!0,label:"dns",permalink:"/docs-next/pr-preview/pr-99/docs/tags/dns"},{inline:!0,label:"cname",permalink:"/docs-next/pr-preview/pr-99/docs/tags/cname"},{inline:!0,label:"externaldns",permalink:"/docs-next/pr-preview/pr-99/docs/tags/externaldns"}],version:"current",frontMatter:{id:"create-a-public-dns-endpoint-with-externaldns",title:"Create a Public DNS Endpoint with ExternalDNS",tags:["cce","networking","dns","cname","externaldns"]},sidebar:"blueprintsSidebar",previous:{title:"Networking",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/networking/"},next:{title:"Observability",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/observability/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring your registar",id:"configuring-your-registar",level:2},{value:"Creating a dedicated DNS Service Account",id:"creating-a-dedicated-dns-service-account",level:2},{value:"Deploying ExternalDNS on CCE",id:"deploying-externaldns-on-cce",level:2},{value:"Verification",id:"verification",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-a-public-dns-endpoint-with-externaldns",children:"Create a Public DNS Endpoint with ExternalDNS"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dns",children:"ExternalDNS"})," is a Kubernetes component used to manage DNS records for services and applications running in a Kubernetes cluster. It automates the creation, update, and deletion of DNS records based on the state of resources within the cluster. ExternalDNS is typically employed in scenarios where you need to expose services running inside a Kubernetes cluster to the outside world with fully qualified domain names (FQDNs), ensuring they are accessible by external users."]}),"\n",(0,s.jsx)(n.p,{children:"The most common use cases that ExternalDNS comes to apply are the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Expose Services via Custom DNS Names"}),"\nWhen you want to expose Kubernetes services (e.g., a web application or API) using custom DNS names, ExternalDNS automates the process. Instead of manually creating and updating DNS entries in your DNS provider (like Open Telekom Cloud DNS, AWS Route 53, Google Cloud DNS, or Azure DNS), ExternalDNS dynamically manages these records for you."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use case"}),": You deploy an app in Kubernetes, and you want it to be reachable via a domain like ",(0,s.jsx)(n.code,{children:"app.example.com"}),". ExternalDNS can automatically configure the DNS provider to point ",(0,s.jsx)(n.code,{children:"app.example.com"})," to the service's Elastic IP."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Automating DNS for Load Balancers"}),"\nExternalDNS is often used with Elastic Load Balancers that expose CCE services. For instance, when you create a ",(0,s.jsx)(n.code,{children:"LoadBalancer"})," type service, the Open Telekom Cloud can assign (if not requested otherwise) an Elastic IP. ExternalDNS will create the corresponding DNS record and map the FQDN to that IP address."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use case"}),": You have a service with type ",(0,s.jsx)(n.code,{children:"LoadBalancer"})," on CCE, and ExternalDNS creates a Open Telekom Cloud DNS Record that points your desired domain (like ",(0,s.jsx)(n.code,{children:"api.example.com"}),") to the public IP of the Elastic Load Balancer."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Handling Multi-Cluster or Multi-Region Deployments"}),"\nIn multi-cluster or multi-region environments, you may want to expose services from multiple clusters under the same DNS domain. ExternalDNS helps manage DNS records across clusters to ensure traffic is routed to the right endpoints. It can help distribute traffic geographically using DNS routing mechanisms like geo-routing or latency-based routing."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use case"}),": You have a cross-region application deployed in multiple clusters in both Open Telekom Cloud regions (eu-de & eu-nl for that matter), and you want DNS to automatically direct users to the closest cluster."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Managing Dynamic or Short-Lived Services"}),"\nIf your environment frequently scales up and down, with services being created and destroyed dynamically (e.g., in CI/CD pipelines or microservices architectures), ExternalDNS ensures that DNS records are kept up-to-date with these changes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use case"}),": In a microservices architecture, as new versions of services are rolled out or as services are spun up and torn down, ExternalDNS updates DNS records to reflect these dynamic changes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Integrating with Ingress Controllers"}),"\nWhen you use an Ingress controller (such as NGINX Ingress, Traefik or CCE) to expose services via HTTP/HTTPS, ExternalDNS can manage the DNS records for the hostnames defined in your Ingress resources. It ensures that DNS is automatically set up to direct traffic to the appropriate Ingress endpoints."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use case"}),": You define an Ingress rule to expose ",(0,s.jsx)(n.code,{children:"blog.example.com"})," via an Ingress controller. ExternalDNS automatically creates or updates a DNS record to point to the Ingress endpoint."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cloud-Native DNS Management"}),"\nIn cloud-native environments where automation and scalability are key, ExternalDNS helps reduce manual intervention for DNS management. It integrates with Open Telekom Cloud DNS service to provide cloud-native DNS functionality for Kubernetes workloads."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use case"}),": ExternalDNS automatically manages DNS entries for applications, ensuring they remain aligned with the cluster\u2019s state."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Managing Wildcard DNS Records"}),"\nIn cases where you need to manage wildcard DNS entries, such as for multi-tenant applications or subdomain-based routing, ExternalDNS can handle the automatic creation and management of wildcard records for your Kubernetes/CCE services."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use case"}),": You have a wildcard DNS entry like ",(0,s.jsx)(n.code,{children:"*.tenant.example.com"}),", and you want each tenant to be routed to different backend services based on the subdomain. ExternalDNS helps maintain the necessary DNS records."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"For this blueprint we will assume the existence of one CCE Cluster and a domain that you own and you can configure its DNS behaviour/parameters by your registar."}),"\n",(0,s.jsx)(n.h2,{id:"configuring-your-registar",children:"Configuring your registar"}),"\n",(0,s.jsx)(n.p,{children:"We have to transfer the management of the NS-Records of your domain to the Domain Name Service of Open Telekom\nCloud. Go on the site of your registar and make sure you configure the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Turn off any Dynamic DNS service for the domain or the subdomains you are going to bind with Open Telekom Cloud DNS."}),"\n",(0,s.jsxs)(n.li,{children:["Change the NS-Records of your domain or the subdomains to point to:",(0,s.jsx)(n.code,{children:"ns1.open-telekom-cloud.com"})," ",(0,s.jsx)(n.strong,{children:"and"})," ",(0,s.jsx)(n.code,{children:"ns2.open-telekom-cloud.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If those two prerequisites are met, then you are ready to configure a new DNS Public Zone and Record Sets for your domain in Open Telekom\nCloud. We do have two mutually exclusive options to do that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create manually from Open Telekom Cloud Console, a new Public DNS Zone that binds to your domain and an A-Record in that zone that\npoints to the EIP of the Elastic Load Balancer."}),"\n",(0,s.jsxs)(n.li,{children:["Automate everything using\n",(0,s.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dns",children:"ExternalDNS"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-dedicated-dns-service-account",children:"Creating a dedicated DNS Service Account"}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.em,{children:"IAM management console"}),", and create a new User that permits\n",(0,s.jsx)(n.strong,{children:"programmatic access"})," to Open Telekom Cloud resources:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:t(43601).A+"",width:"2638",height:"920"})}),"\n",(0,s.jsxs)(n.p,{children:["Grant this User the following permissions or add him directly to User\nGroup ",(0,s.jsx)(n.code,{children:"dns-admins"})," (if it exists, otherwise create it for a more rigid permissions management but that's completely optional)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:t(49577).A+"",width:"2338",height:"1138"})}),"\n",(0,s.jsx)(n.h2,{id:"deploying-externaldns-on-cce",children:"Deploying ExternalDNS on CCE"}),"\n",(0,s.jsx)(n.p,{children:"We are going to deploy ExternalDNS with Helm as well. First let's lay\ndown the configuration of the chart:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="overrides.yaml" linenos="" emphasize-lines="11,13-14"',children:'sources:\n  - crd\n  - service\n  - ingress\nprovider: designate\ncombineFQDNAnnotation: true\ncrd:\n  create: true\nlogFormat: json\ndesignate:\n  username: "OTCAC_DNS_ServiceAccount"\n  password: <<OTCAC_DNS_ServiceAccount_PASSWORD>>\n  authUrl: "https://iam.eu-de.otc.t-systems.com:443/v3"\n  regionName: "eu-de"\n  userDomainName: "OTCXXXXXXXXXXXXXXXXXXXX"\n  projectName: "eu-de_XXXXXXXXXXX"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Special attention required here. Although DNS is a global\nservice, ",(0,s.jsx)(n.strong,{children:"all"})," changes have to be applied in Region ",(0,s.jsx)(n.strong,{children:"eu-de"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Install the chart (it will deploy all the necessary resources in an\nautomatically created namespace called ",(0,s.jsx)(n.code,{children:"external-dns"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\n\nhelm upgrade --install -f overrides.yaml external-dns bitnami/external-dns -n external-dns --create-namespace\n"})}),"\n",(0,s.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(n.p,{children:["We have now laid all the groundwork in order to automatically provision\na Public DNS Zone and a dedicated A-Record that will bind the Elastic IP of our\nElastic Load Balancer with the FQDN of thesubdomain we configure above. For that matter we need to install\na Custom Resource based on a CRD installed by ExternalDNS that is called ",(0,s.jsx)(n.code,{children:"DNSEndpoint"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="dns-endpoint.yaml"',children:"apiVersion: externaldns.k8s.io/v1alpha1\nkind: DNSEndpoint\nmetadata:\n  name: keycloak\n  namespace: keycloak\nspec:\n  endpoints:\n  - dnsName: blog.example.com\n    recordTTL: 300\n    recordType: A\n    targets:\n    - XXX.XXX.XXX.XXX\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Replace the placeholder value ",(0,s.jsx)(n.code,{children:"XXX.XXX.XXX.XXX"})," of ",(0,s.jsx)(n.code,{children:"targets"})," with the Elastic IP Address that is\nassigned to your Elastic Load Balancer. Additionally, replace the value of ",(0,s.jsx)(n.code,{children:"dnsName"})," with the FQDN of your (sub)domain."]})}),"\n",(0,s.jsx)(n.p,{children:"Wait for a couple of seconds, till the reconciliation loop of the\nExternalDNS controller is done, and if all went well you should now see\nthe Record Sets of your Public Zone populated with various entries:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:t(42176).A+"",width:"2706",height:"1048"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},49577:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/SCR-20231212-df8-a5fedeacf3d1234d1ccd488ab5c1955d.png"},43601:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/SCR-20231212-dfp-6f9f9fd0dc58c2e8f39845f26f22f237.png"},42176:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/SCR-20231212-dsj-e0806146ec35d5f2e8fe075c346eb483.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);