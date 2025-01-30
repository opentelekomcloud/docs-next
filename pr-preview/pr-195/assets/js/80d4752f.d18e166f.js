"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[47951],{98765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"blueprints/by-use-case/ai/securely-expose-remote-ollama-endpoints-to-your-developmentd-machine","title":"Securely Expose Remote Ollama Endpoints to your Development Machine","description":"Exposing Ollama endpoints directly from your cloud environment to your local development machine can be highly beneficial, especially when it comes to optimizing the use of expensive resources like GPUs and integrating them with local cost-effective development hardware.","source":"@site/docs/blueprints/by-use-case/ai/securely-expose-remote-ollama-endpoints-to-your-developmentd-machine.md","sourceDirName":"blueprints/by-use-case/ai","slug":"/blueprints/by-use-case/ai/securely-expose-remote-ollama-endpoints-to-your-developmentd-machine","permalink":"/docs-next/pr-preview/pr-195/docs/blueprints/by-use-case/ai/securely-expose-remote-ollama-endpoints-to-your-developmentd-machine","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/ai/securely-expose-remote-ollama-endpoints-to-your-developmentd-machine.md","tags":[{"inline":true,"label":"ollama","permalink":"/docs-next/pr-preview/pr-195/docs/tags/ollama"},{"inline":true,"label":"vpn","permalink":"/docs-next/pr-preview/pr-195/docs/tags/vpn"}],"version":"current","frontMatter":{"id":"securely-expose-remote-ollama-endpoints-to-your-developmentd-machine","title":"Securely Expose Remote Ollama Endpoints to your Development Machine","tags":["ollama","vpn"]},"sidebar":"blueprintsSidebar","previous":{"title":"AI & LLMs","permalink":"/docs-next/pr-preview/pr-195/docs/blueprints/by-use-case/ai/"},"next":{"title":"Analytics","permalink":"/docs-next/pr-preview/pr-195/docs/blueprints/by-use-case/analytics/"}}');var s=t(74848),a=t(28453);const o={id:"securely-expose-remote-ollama-endpoints-to-your-developmentd-machine",title:"Securely Expose Remote Ollama Endpoints to your Development Machine",tags:["ollama","vpn"]},l="Securely Expose Remote Ollama Endpoints to your Development Machine",r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Point-to-Site VPN",id:"creating-a-point-to-site-vpn",level:2},{value:"Changing Ollama&#39;s Listening Address",id:"changing-ollamas-listening-address",level:2},{value:"Creating Security Group",id:"creating-security-group",level:2},{value:"Validation",id:"validation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"securely-expose-remote-ollama-endpoints-to-your-development-machine",children:"Securely Expose Remote Ollama Endpoints to your Development Machine"})}),"\n",(0,s.jsx)(n.p,{children:"Exposing Ollama endpoints directly from your cloud environment to your local development machine can be highly beneficial, especially when it comes to optimizing the use of expensive resources like GPUs and integrating them with local cost-effective development hardware."}),"\n",(0,s.jsx)(n.p,{children:"The benefits of integrating remote Ollama endpoints to local development workflows are multi-faceted but not limited to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhanced Development Workflow"})," : By securely exposing Ollama endpoints locally, you can streamline the development process. This setup allows you to test changes in real-time without deploying them in a public or external environment, accelerating iteration and debugging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Privacy and Security"})," : Keeping data within your local machine minimizes exposure to potential security vulnerabilities associated with cloud environments. By ensuring secure access protocols (such as HTTPS), you protect sensitive information from unauthorized access."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cost Efficiency"})," : Local testing reduces reliance on cloud resources for every test or development cycle, which can lead to cost savings, especially in scenarios requiring frequent updates and tests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customized Environment Testing"})," : Exposing endpoints locally allows you to create a controlled environment that mirrors your production setup. This capability ensures that any AI model behavior is consistent with expectations before deploying broadly."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Latency Reduction"})," : By running services on your local machine, you can significantly reduce latency compared to accessing cloud-hosted endpoints, which enhances the speed and responsiveness of development tools and testing scripts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compliance and Regulation Adherence"})," : Certain industries have stringent compliance requirements for data processing and storage. Running AI models locally helps adhere to these regulations by ensuring that data does not leave your secure environment without proper safeguards."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By securely exposing Ollama endpoints, you can achieve a balance between operational efficiency, security, and compliance while facilitating a robust development process for AI models on your machine."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Be aware that this Blueprint can incur additional costs, concerning ingress and egress data."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"For this Blueprint, we are going to need:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["an ",(0,s.jsx)(n.strong,{children:"ECS Server (Ubuntu 22.04)"}),": a GPU-accelerated instance (8 vCPUs, 32 GiB) ",(0,s.jsx)(n.code,{children:"pi2.2xlarge.4"})," will suffice."]}),"\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.strong,{children:"Point-to-Site VPN connection"}),": We need to establish a connection between our development machine and the VPC hosting the Ollama VM."]}),"\n",(0,s.jsxs)(n.li,{children:["an ",(0,s.jsx)(n.strong,{children:"Ollama"})," instance: Ollama must be installed on the ECS server above."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.p,{children:["If you don't currently have an Ollama setup, please refer to the official guide for both manual and automated installation options available at this ",(0,s.jsx)(n.a,{href:"https://github.com/ollama/ollama/blob/main/docs/linux.md",children:"link"}),"."]}),(0,s.jsxs)(n.p,{children:["Make sure you ",(0,s.jsx)(n.a,{href:"https://github.com/ollama/ollama/blob/main/docs/linux.md#adding-ollama-as-a-startup-service-recommended",children:(0,s.jsx)(n.strong,{children:"add Ollama as a startup service"})}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-point-to-site-vpn",children:"Creating a Point-to-Site VPN"}),"\n",(0,s.jsx)(n.p,{children:"Exposing an Ollama endpoint by assigning an Elastic IP (EIP) directly to a Virtual Machine or using Destination Network Address Translation (DNAT) through a NAT Gateway is considered dangerous due to several key concerns. First, assigning an EIP makes the VM accessible from the internet, significantly increasing its exposure and risk of unauthorized access. This direct accessibility enlarges the attack surface, leaving it vulnerable to potential breaches."}),"\n",(0,s.jsx)(n.p,{children:"Additionally, having such an endpoint exposed can make it a target for Distributed Denial of Service (DDoS) attacks aimed at overwhelming your service with excessive traffic, potentially causing downtime or degraded performance. Moreover, using DNAT via a NAT Gateway does not eliminate these risks entirely; it still requires meticulous configuration and management of security groups and firewall rules to ensure only legitimate traffic is allowed. Misconfigurations in this setup can easily lead to unintentional exposure."}),"\n",(0,s.jsx)(n.p,{children:"From a compliance perspective, direct internet exposure might violate certain regulatory requirements that mandate strict data protection and access controls, depending on the industry or region."}),"\n",(0,s.jsx)(n.p,{children:"On the other hand, using a Point-to-Site (P2S) VPN to connect to the VPC where the Ollama VM resides is often viewed as a secure solution and aligns with best practices for several reasons. A P2S VPN establishes an encrypted tunnel between your local machine(s) and the respective Open Telekom Cloud VPC, ensuring that transmitted data remains secure from eavesdropping."}),"\n",(0,s.jsx)(n.p,{children:"Moreover, a P2S VPN provides flexibility for multiple users to securely connect from different locations without needing complex infrastructure changes. This approach also facilitates compliance with data protection regulations since access can be restricted to authorized users only and connections can be monitored and logged for auditing and incident response purposes."}),"\n",(0,s.jsxs)(n.p,{children:["You can find instruction on how to create and establish a P2S VPN connection here: ",(0,s.jsx)(n.a,{href:"/docs-next/pr-preview/pr-195/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc",children:"Establish a Point-to-Site VPN Connection between your Development Machine and a VPC"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"changing-ollamas-listening-address",children:"Changing Ollama's Listening Address"}),"\n",(0,s.jsx)(n.p,{children:"Let's inspect the network sockets associated with Ollama service:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'sudo ss -tupln | grep ollama\n\ntcp   LISTEN   0   4096   127.0.0.1:11434   0.0.0.0:*   users:(("ollama",pid=2728253,fd=3))\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We instantly notice that although Ollama is bound to all available network interfaces (",(0,s.jsx)(n.code,{children:"0.0.0.0"}),") and listens on any port (",(0,s.jsx)(n.code,{children:"*"}),"), in practice, it restricts incoming connections to ",(0,s.jsx)(n.code,{children:"127.0.0.1:11434"}),". ",(0,s.jsx)(n.code,{children:"127.0.0.1"})," is the loopback IP address (localhost), meaning ",(0,s.jsx)(n.strong,{children:"it's accessible only from the same machine"}),". The port ",(0,s.jsx)(n.code,{children:"11434"})," is where connections should be made to communicate with Ollama. That will naturally prohibit us accessing the Ollama endpoint from our development machine, or any other machine for that matter. What we need to do is to instruct Ollama service to allow incoming connection to any (or even better to a specific interface). For that matter we need to:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop temporarily the Ollama service:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo systemctl stop ollama\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change the systemd service unit for Ollama to accept incoming connections to all interfaces:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo nano /etc/systemd/system/ollama.service\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and add to it an additionall environment variable: ",(0,s.jsx)(n.code,{children:"OLLAMA_HOST=0.0.0.0:11434"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'[Unit]\nDescription=Ollama Service\nAfter=network-online.target\n\n[Service]\nExecStart=/usr/local/bin/ollama serve\nUser=ollama\nGroup=ollama\nRestart=always\nRestartSec=3\nEnvironment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"\nEnvironment="OLLAMA_HOST=0.0.0.0:11434"\n\n[Install]\nWantedBy=default.target\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reload systemd configuration files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo systemctl daemon-reload\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the Ollama service on your system"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo systemctl start ollama\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-security-group",children:"Creating Security Group"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.em,{children:"Network Console"})," -> ",(0,s.jsx)(n.em,{children:"Security Groups"}),", and click ",(0,s.jsx)(n.em,{children:"Create Security Group"}),". Add two new ",(0,s.jsx)(n.strong,{children:"Inbound Rules"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Protocol"}),": ",(0,s.jsx)(n.code,{children:"TCP"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Port"}),": ",(0,s.jsx)(n.code,{children:"11434"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source"}),": ",(0,s.jsx)(n.code,{children:"192.168.10.0/24"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["Although we configured Ollama service to listen to any interface, we want to restrict access to the Ollama endpoint ",(0,s.jsx)(n.strong,{children:"only"})," to resources that reside inside the same VPC ",(0,s.jsx)(n.strong,{children:"and not to anyone that might potentially reach this VM"}),", ",(0,s.jsx)(n.code,{children:"0.0.0.0/0"}),"."]}),(0,s.jsxs)(n.p,{children:["The VPC CIDR for this lab was ",(0,s.jsx)(n.code,{children:"192.168.10.0/24"}),", this might differ in your environment given your individual configuration of the VPC and its Subnets so adjust the ",(0,s.jsx)(n.strong,{children:"Source"})," of the Inbound Rule accordingly."]}),(0,s.jsx)(n.p,{children:"After establishing the P2S VPN connection, your development machine will be technically a part of this VPC and will be allowed to access the Ollama endpoint."})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Add the new Security Group to the Security Groups of the ECS Server."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,s.jsx)(n.p,{children:"Check connectivity from your development machine with cURL:"}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Requires that you have already established the VPN connection."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"192.168.10.183"})," is the private IP address assigned by the DHCP server of our VPC to the ECS Server that Ollama is installed on. Remember from the step before that the VPC CIDR for this lab was ",(0,s.jsx)(n.code,{children:"192.168.10.0/24"}),", this might differ in your environment given your individual configuration of the VPC and its Subnets."]}),"\n"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl http://192.168.10.183:11434/api/tags | jq\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you have already pulled some models, the response should look similar to this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "models": [\n    {\n      "name": "nomic-embed-text:latest",\n      "model": "nomic-embed-text:latest",\n      "modified_at": "2025-01-20T23:46:07.861519801Z",\n      "size": 274302450,\n      "digest": "0a109f422b47e3a30ba2b10eca18548e944e8a23073ee3f3e947efcf3c45e59f",\n      "details": {\n        "parent_model": "",\n        "format": "gguf",\n        "family": "nomic-bert",\n        "families": [\n          "nomic-bert"\n        ],\n        "parameter_size": "137M",\n        "quantization_level": "F16"\n      }\n    },\n    {\n      "name": "llama3.3:latest",\n      "model": "llama3.3:latest",\n      "modified_at": "2025-01-17T09:17:50.765928869Z",\n      "size": 42520413916,\n      "digest": "a6eb4748fd2990ad2952b2335a95a7f952d1a06119a0aa6a2df6cd052a93a3fa",\n      "details": {\n        "parent_model": "",\n        "format": "gguf",\n        "family": "llama",\n        "families": [\n          "llama"\n        ],\n        "parameter_size": "70.6B",\n        "quantization_level": "Q4_K_M"\n      }\n    },\n    {\n      "name": "phi4:latest",\n      "model": "phi4:latest",\n      "modified_at": "2025-01-14T09:16:25.911933283Z",\n      "size": 9053116391,\n      "digest": "ac896e5b8b34a1f4efa7b14d7520725140d5512484457fab45d2a4ea14c69dba",\n      "details": {\n        "parent_model": "",\n        "format": "gguf",\n        "family": "phi3",\n        "families": [\n          "phi3"\n        ],\n        "parameter_size": "14.7B",\n        "quantization_level": "Q4_K_M"\n      }\n    },\n    {\n      "name": "deepseek-coder-v2:latest",\n      "model": "deepseek-coder-v2:latest",\n      "modified_at": "2024-11-09T08:07:18.67583696Z",\n      "size": 8905126121,\n      "digest": "63fb193b3a9b4322a18e8c6b250ca2e70a5ff531e962dbf95ba089b2566f2fa5",\n      "details": {\n        "parent_model": "",\n        "format": "gguf",\n        "family": "deepseek2",\n        "families": [\n          "deepseek2"\n        ],\n        "parameter_size": "15.7B",\n        "quantization_level": "Q4_0"\n      }\n    },\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);