"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[8647],{14003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),i=t(28453);const r={id:"issue-an-acme-certificate-with-dns01-solver-in-cce",title:"Issue an ACME Certificate with DNS01 Solver in CCE",tags:["cce","acme","lets-encrypt","certificates","cert-manager","dns-solver","cert-manager-webhook-opentelekomcloud"]},a="Issue an ACME Certificate with DNS01 Solver in CCE",o={id:"best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce",title:"Issue an ACME Certificate with DNS01 Solver in CCE",description:"A DNS01 challenge is a type of challenge used in the Domain Name System (DNS) to verify ownership of a domain during the process of obtaining an SSL/TLS certificate, often through services like Let's Encrypt.",source:"@site/docs/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce.md",sourceDirName:"best-practices/containers/cloud-container-engine",slug:"/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-153/docs/tags/cce"},{inline:!0,label:"acme",permalink:"/docs-next/pr-preview/pr-153/docs/tags/acme"},{inline:!0,label:"lets-encrypt",permalink:"/docs-next/pr-preview/pr-153/docs/tags/lets-encrypt"},{inline:!0,label:"certificates",permalink:"/docs-next/pr-preview/pr-153/docs/tags/certificates"},{inline:!0,label:"cert-manager",permalink:"/docs-next/pr-preview/pr-153/docs/tags/cert-manager"},{inline:!0,label:"dns-solver",permalink:"/docs-next/pr-preview/pr-153/docs/tags/dns-solver"},{inline:!0,label:"cert-manager-webhook-opentelekomcloud",permalink:"/docs-next/pr-preview/pr-153/docs/tags/cert-manager-webhook-opentelekomcloud"}],version:"current",frontMatter:{id:"issue-an-acme-certificate-with-dns01-solver-in-cce",title:"Issue an ACME Certificate with DNS01 Solver in CCE",tags:["cce","acme","lets-encrypt","certificates","cert-manager","dns-solver","cert-manager-webhook-opentelekomcloud"]},sidebar:"bestPracticesSidebar",previous:{title:"Creating a Linux Image Using VirtualBox and an ISO File",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/computing/image-management-service/creating-a-linux-Image-using-virtualBox-and-an-iso-file"},next:{title:"Auto Scaling Based on ELB Monitoring Metrics",permalink:"/docs-next/pr-preview/pr-153/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing the ACME DNS01 Solver",id:"installing-the-acme-dns01-solver",level:2},{value:"Acquiring Access/Secret Keys",id:"acquiring-accesssecret-keys",level:3},{value:"Installing the Helm Chart",id:"installing-the-helm-chart",level:3},{value:"Installing Cluster Issuers",id:"installing-cluster-issuers",level:2},{value:"For Staging",id:"for-staging",level:3},{value:"For Production",id:"for-production",level:3},{value:"Requesting a Certificate",id:"requesting-a-certificate",level:2},{value:"Exposing a workload with Ingress",id:"exposing-a-workload-with-ingress",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"issue-an-acme-certificate-with-dns01-solver-in-cce",children:"Issue an ACME Certificate with DNS01 Solver in CCE"}),"\n",(0,s.jsx)(n.p,{children:"A DNS01 challenge is a type of challenge used in the Domain Name System (DNS) to verify ownership of a domain during the process of obtaining an SSL/TLS certificate, often through services like Let's Encrypt."}),"\n",(0,s.jsx)(n.p,{children:"When you request a certificate, the Certificate Authority (CA) needs to ensure that you have control over the domain for which you're requesting the certificate. The DNS01 challenge is one of the methods used to prove this control. Here's how it generally works:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Challenge Issuance"}),": The CA provides you with a unique token (a random string of characters) that needs to be added to your domain's DNS records."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DNS Record Addition"}),": You must create a specific DNS TXT record for your domain that includes the token provided by the CA. This record usually follows a format like ",(0,s.jsx)(n.code,{children:"_acme-challenge.example.com"})," with a value corresponding to the token."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Verification"}),": Once you've added the TXT record to your domain's DNS configuration, the CA will query your domain's DNS records to look for the TXT record. If it finds the correct token, it confirms that you control the domain."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Certificate Issuance"}),": After successful verification, the CA will issue the SSL/TLS certificate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The DNS01 challenge is commonly used because it allows for domain validation without needing to serve files over HTTP, which can be advantageous in certain situations, such as when you don't have a web server configured or when you're managing multiple subdomains."}),"\n",(0,s.jsxs)(n.p,{children:["One of the tools, that can be employed in the context of Kubernetes, to secure certificates from a Certificate Authority (CA) via the ACME protocol using the the DNS01 challenge, is ",(0,s.jsx)(n.a,{href:"https://cert-manager.io",children:"cert-manager"}),". Specifically for Open Telekom Cloud, we can use an additional webhook that acts as an ACME DNS01 solver for Open Telekom Cloud's Domain Name Service, ",(0,s.jsx)(n.a,{href:"https://github.com/akyriako/cert-manager-webhook-opentelekomcloud",children:"cert-manager-webhook-opentelekomcloud"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Only prerequisite is cert-manager. If you don't have it already installed on your CCE Cluster, this can be very easily done using a Helm Chart:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo add jetstack https://charts.jetstack.io \nhelm repo update \n\nhelm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.15.3 \\\n  --set crds.enabled=true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-acme-dns01-solver",children:"Installing the ACME DNS01 Solver"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"cert-manager-webhook-opentelekomcloud"})," is an ACME DNS01 solver webhook for Open Telekom Cloud DNS written in Golang, and requires ",(0,s.jsx)(n.strong,{children:"cert-manager"})," to be installed first."]}),"\n",(0,s.jsx)(n.h3,{id:"acquiring-accesssecret-keys",children:"Acquiring Access/Secret Keys"}),"\n",(0,s.jsxs)(n.p,{children:["In the console, go to ",(0,s.jsx)(n.em,{children:"My Credentials"})," -> ",(0,s.jsx)(n.em,{children:"Access Keys"})," and either pick up an existing pair or create a new one:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(38599).A+"",width:"1914",height:"847"})}),"\n",(0,s.jsx)(n.p,{children:"Export this pair as environment variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export OS_ACCESS_KEY={value}\nexport OS_SECRET_KEY={value}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installing-the-helm-chart",children:"Installing the Helm Chart"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo add cert-manager-webhook-opentelekomcloud https://akyriako.github.io/cert-manager-webhook-opentelekomcloud/\nhelm repo update\n\nhelm upgrade --install \\\n    acme-dns cert-manager-webhook-opentelekomcloud/cert-manager-webhook-opentelekomcloud \\\n  --set opentelekomcloud.accessKey=$OS_ACCESS_KEY \\\n  --set opentelekomcloud.secretKey=$OS_SECRET_KEY \\\n  --namespace cert-manager\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-cluster-issuers",children:"Installing Cluster Issuers"}),"\n",(0,s.jsxs)(n.p,{children:["You are going to need one ",(0,s.jsx)(n.code,{children:"ClusterIssuer"})," for the ",(0,s.jsx)(n.em,{children:"production"})," and one for the ",(0,s.jsx)(n.em,{children:"staging"})," Let's Encrypt endpoint."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"cert-manager"})," has a known bug, that prevents custom webhooks to work with an ",(0,s.jsx)(n.code,{children:"Issuer"}),". For that reason you need to install your issuer as ",(0,s.jsx)(n.code,{children:"ClusterIssuer"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"for-staging",children:"For Staging"}),"\n",(0,s.jsx)(n.p,{children:"Create and deploy the following manifest:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="opentelekomcloud-letsencrypt-staging.yaml"',children:'apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: opentelekomcloud-letsencrypt-staging\n  namespace: cert-manager\nspec:\n  acme:\n    email: user@company.com\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: opentelekomcloud-letsencrypt-staging-tls-key\n    solvers:\n    - dns01:\n        webhook:\n          groupName: acme.opentelekomcloud.com\n          solverName: opentelekomcloud\n          config:\n            region: "eu-de"\n            accessKeySecretRef:\n              name: cert-manager-webhook-opentelekomcloud-creds\n              key: accessKey\n            secretKeySecretRef:\n              name: cert-manager-webhook-opentelekomcloud-creds\n              key: secretKey\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Replace placeholder ",(0,s.jsx)(n.strong,{children:"email"})," value, ",(0,s.jsx)(n.code,{children:"user@company.com"}),", with the email that will be used for requesting certificates from Let's Encrypt."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f opentelekomcloud-letsencrypt-staging.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"for-production",children:"For Production"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="opentelekomcloud-letsencrypt.yaml"',children:'apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: opentelekomcloud-letsencrypt\n  namespace: cert-manager\nspec:\n  acme:\n    email: user@company.com\n    server: https://acme-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: opentelekomcloud-letsencrypt-tls-key\n    solvers:\n    - dns01:\n        webhook:\n          groupName: acme.opentelekomcloud.com\n          solverName: opentelekomcloud\n          config:\n            region: "eu-de"\n            accessKeySecretRef:\n              name: cert-manager-webhook-opentelekomcloud-creds\n              key: accessKey\n            secretKeySecretRef:\n              name: cert-manager-webhook-opentelekomcloud-creds\n              key: secretKey\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Replace placeholder ",(0,s.jsx)(n.strong,{children:"email"})," value, ",(0,s.jsx)(n.code,{children:"user@company.com"}),", with the email that will be used for requesting certificates from Let's Encrypt."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f opentelekomcloud-letsencrypt.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"requesting-a-certificate",children:"Requesting a Certificate"}),"\n",(0,s.jsx)(n.p,{children:"Create and deploy the following manifest:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="certificate-subdomain-example-com"',children:"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: certificate-subdomain-example-com\nspec:\n  dnsNames:\n  - '*.subdomain.example.com'\n  issuerRef:\n    kind: ClusterIssuer\n    name: opentelekomcloud-letsencrypt-staging\n  secretName: certificate-subdomain-example-com-tls\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Replace placeholder DNS name ",(0,s.jsx)(n.code,{children:"*.subdomain.example.com"}),", with one that you own and will be used to request a certificate from Let's Encrypt."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f certificate-subdomain-example-com\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.em,{children:"staging"})," endpoint of Let's Encrypt before moving to the ",(0,s.jsx)(n.em,{children:"production"})," endpoint is a best practice. Let's Encrypt imposes rate limits on the number of certificates you can request in a given period to prevent abuse. By testing with the staging environment, you avoid hitting these limits during your development and testing phases."]})}),"\n",(0,s.jsx)(n.h2,{id:"exposing-a-workload-with-ingress",children:"Exposing a workload with Ingress"}),"\n",(0,s.jsx)(n.p,{children:"Create and deploy the following manifest:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="workload-ingress.yaml"',children:'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: workload-ingress\n  labels:\n    app: workload\n  annotations:\n    kubernetes.io/elb.class: union\n    kubernetes.io/elb.id: "{value}"\n    kubernetes.io/elb.port: 443\nspec:\n  ingressClassName: cce\n  tls:\n  - hosts:\n      - subdomain.example.com\n    secretName: certificate-subdomain-example-com-tls\n  rules:\n  - host: subdomain.example.com\n    http:\n      paths:\n      - backend:\n          service:\n            name: workload-svc\n            port:\n              number: 80\n        path: /\n        pathType: ImplementationSpecific\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"You need to have:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.em,{children:"workload"})," installed in your CCE Cluster (you can experiment with ",(0,s.jsx)(n.strong,{children:"traefik/whoami"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["this workload exposed with a ",(0,s.jsx)(n.code,{children:"Service"}),", ",(0,s.jsx)(n.em,{children:"workload-svc"}),", of type ",(0,s.jsx)(n.code,{children:"NodePort"})]}),"\n",(0,s.jsx)(n.li,{children:"a Shared Elastic Load Balancer"}),"\n"]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kubernetes.io/elb.class"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"union"}),", if it is a Shared Elastic Load Balancer"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kubernetes.io/elb.id"}),(0,s.jsxs)(n.td,{children:["Replace placeholder value ",(0,s.jsx)(n.code,{children:"{value}"})," with the ID of the Elastic Load Balancer"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kubernetes.io/elb.port"}),(0,s.jsx)(n.td,{children:"443"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ingressClassName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cce"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tls.hosts[0]"}),(0,s.jsxs)(n.td,{children:["Replace placeholder value ",(0,s.jsx)(n.code,{children:"subdomain.example.com"})," with your own"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tls.secretName"}),(0,s.jsxs)(n.td,{children:["Use the name of the ",(0,s.jsx)(n.code,{children:"Secret"})," that was created from ",(0,s.jsx)(n.code,{children:"Certificate"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rules.host[0]"}),(0,s.jsxs)(n.td,{children:["Replace placeholder value ",(0,s.jsx)(n.code,{children:"subdomain.example.com"})," with your own"]})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f workload-ingress.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you visit in your browser the address ",(0,s.jsx)(n.a,{href:"https://subdomain.example.com",children:"https://subdomain.example.com"})," you will notice that the endpoint is served in HTTPS and is secured by a valid certificate."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},38599:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Screenshot from 2024-09-07 11-33-33-5c50ba1a71dd86f605a7fb38662afdd8.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);