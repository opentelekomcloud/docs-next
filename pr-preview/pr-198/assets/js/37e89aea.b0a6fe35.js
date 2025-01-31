"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[22702],{7160:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"blueprints/by-use-case/security/authentik/cce-authentik","title":"Deploy Authentik on CCE","description":"This tutorial will guide you through the process of setting up authentik on your CCE Kubernetes environment.","source":"@site/docs/blueprints/by-use-case/security/authentik/1_cce-authentik.md","sourceDirName":"blueprints/by-use-case/security/authentik","slug":"/blueprints/by-use-case/security/authentik/cce-authentik","permalink":"/docs-next/pr-preview/pr-198/docs/blueprints/by-use-case/security/authentik/cce-authentik","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/security/authentik/1_cce-authentik.md","tags":[{"inline":true,"label":"cce","permalink":"/docs-next/pr-preview/pr-198/docs/tags/cce"},{"inline":true,"label":"authentik","permalink":"/docs-next/pr-preview/pr-198/docs/tags/authentik"},{"inline":true,"label":"security","permalink":"/docs-next/pr-preview/pr-198/docs/tags/security"},{"inline":true,"label":"ingress","permalink":"/docs-next/pr-preview/pr-198/docs/tags/ingress"},{"inline":true,"label":"nginx-ingress","permalink":"/docs-next/pr-preview/pr-198/docs/tags/nginx-ingress"}],"version":"current","sidebarPosition":1,"frontMatter":{"id":"cce-authentik","title":"Deploy Authentik on CCE","tags":["cce","authentik","security","ingress","nginx-ingress"]},"sidebar":"blueprintsSidebar","previous":{"title":"Authentik","permalink":"/docs-next/pr-preview/pr-198/docs/blueprints/by-use-case/security/authentik/authentik"},"next":{"title":"Identity Federation with GitHub","permalink":"/docs-next/pr-preview/pr-198/docs/blueprints/by-use-case/security/authentik/identity-federation-github"}}');var i=s(74848),r=s(28453);const l={id:"cce-authentik",title:"Deploy Authentik on CCE",tags:["cce","authentik","security","ingress","nginx-ingress"]},a="Deploy Authentik on CCE",c={},o=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Generating Secure Passwords",id:"generating-secure-passwords",level:3},{value:"Creating the Values File",id:"creating-the-values-file",level:3},{value:"Installing Authentik Using Helm",id:"installing-authentik-using-helm",level:3},{value:"Accessing Authentik",id:"accessing-authentik",level:3}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"deploy-authentik-on-cce",children:"Deploy Authentik on CCE"})}),"\n",(0,i.jsx)(n.p,{children:"This tutorial will guide you through the process of setting up authentik on your CCE Kubernetes environment."}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before starting the installation, ensure you have the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A running Kubernetes cluster (CCE)"}),"\n",(0,i.jsx)(n.li,{children:"Helm installed on your local machine"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"generating-secure-passwords",children:"Generating Secure Passwords"}),"\n",(0,i.jsx)(n.p,{children:"Begin by generating secure passwords for the database and cache. Use one of these commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pwgen -s 50 1\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"openssl rand 60 | base64 -w 0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"creating-the-values-file",children:"Creating the Values File"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a file named ",(0,i.jsx)(n.strong,{children:"values.yaml"})," in your working directory."]}),"\n",(0,i.jsx)(n.li,{children:"Add the following content to the file:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'authentik:\n    secret_key: "PleaseGenerateASecureKey"\n    error_reporting:\n        enabled: true\n    postgresql:\n        password: "ThisIsNotASecurePassword"\n\nserver:\n    ingress:\n        ingressClassName: nginx\n        enabled: true\n        hosts:\n            - authentik.test-domain.com\n\npostgresql:\n    enabled: true\n    auth:\n        password: "ThisIsNotASecurePassword"\nredis:\n    enabled: true\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.code,{children:"PleaseGenerateASecureKey"})," and ",(0,i.jsx)(n.code,{children:"ThisIsNotASecurePassword"})," with secure passwords you generated earlier."]}),"\n",(0,i.jsxs)(n.li,{children:["Here we are using nginx as ingress controller if you use other ingress controller (like traefik or kong) specify it under path ",(0,i.jsx)(n.code,{children:"server.ingress.ingressClassName"}),". Also replace ",(0,i.jsx)(n.code,{children:"authentik.test-domain.com"})," with the domain name you intend for Authentik."]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"installing-authentik-using-helm",children:"Installing Authentik Using Helm"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the authentik Helm repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm repo add authentik https://charts.goauthentik.io\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update your Helm repositories:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm repo update\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install authentik using Helm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm upgrade --install authentik authentik/authentik -f values.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command will install authentik or upgrade an existing installation using the values specified in your ",(0,i.jsx)(n.strong,{children:"values.yaml"})," file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"accessing-authentik",children:"Accessing Authentik"}),"\n",(0,i.jsx)(n.p,{children:"Once the installation is complete, you can access authentik by following these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open your web browser and navigate to ",(0,i.jsx)(n.code,{children:"https://<ingress-host-name>/if/flow/initial-setup/"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set a password for the default ",(0,i.jsx)(n.code,{children:"akadmin"})," user."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Setting admin password for first time:\n",(0,i.jsx)(n.img,{alt:"image",src:s(21425).A+"",title:"Setting admin password for first time",width:"1475",height:"884"})]}),"\n",(0,i.jsxs)(n.p,{children:["Authentik dashboard:\n",(0,i.jsx)(n.img,{alt:"image",src:s(44994).A+"",title:"Authentik dashboard",width:"1920",height:"918"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},44994:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot-Admin-authentik-e3f638178fb2b12a27a9cc839477c714.png"},21425:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Screenshot-chpassword-authentik-d55a64f9a68c01abcd61c4688efeca32.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);