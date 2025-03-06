"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[73453],{87421:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"blueprints/by-use-case/ai/deploy-the-nvidia-gpu-operator-on-cce","title":"Deploy the NVIDIA GPU Operator on CCE","description":"The NVIDIA GPU Operator is a critical tool for effectively managing GPU resources in Kubernetes clusters. It serves as an abstraction layer over Kubernetes APIs, automating tasks such as dynamic provisioning, driver updates, resource allocation, and optimization for GPU-intensive workloads, thereby simplifying the deployment and management of GPU-accelerated applications. Its functionality extends to dynamic provisioning of GPUs on demand, managing driver updates, optimizing resource allocation for varied workloads, and integrating with monitoring tools for comprehensive insights into GPU usage and health. This guide outlines how to deploy the NVIDIA GPU Operator on CCE cluster. The process involves preparing GPU nodes, installing necessary components, configuring the cluster for GPU support, deploying an application leveraging GPUs, and verifying functionality.","source":"@site/docs/blueprints/by-use-case/ai/deploy-the-nvidia-gpu-operator-on-cce.md","sourceDirName":"blueprints/by-use-case/ai","slug":"/blueprints/by-use-case/ai/deploy-the-nvidia-gpu-operator-on-cce","permalink":"/docs-next/pr-preview/pr-217/docs/blueprints/by-use-case/ai/deploy-the-nvidia-gpu-operator-on-cce","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/ai/deploy-the-nvidia-gpu-operator-on-cce.md","tags":[{"inline":true,"label":"nvidia","permalink":"/docs-next/pr-preview/pr-217/docs/tags/nvidia"},{"inline":true,"label":"nvidia-operator","permalink":"/docs-next/pr-preview/pr-217/docs/tags/nvidia-operator"},{"inline":true,"label":"gpu","permalink":"/docs-next/pr-preview/pr-217/docs/tags/gpu"},{"inline":true,"label":"ai","permalink":"/docs-next/pr-preview/pr-217/docs/tags/ai"}],"version":"current","frontMatter":{"id":"deploy-the-nvidia-gpu-operator-on-cce","title":"Deploy the NVIDIA GPU Operator on CCE","tags":["nvidia","nvidia-operator","gpu","ai"]},"sidebar":"blueprintsSidebar","previous":{"title":"AI & LLMs","permalink":"/docs-next/pr-preview/pr-217/docs/blueprints/by-use-case/ai/"},"next":{"title":"Securely Expose Remote Ollama Endpoints to your Development Machine","permalink":"/docs-next/pr-preview/pr-217/docs/blueprints/by-use-case/ai/securely-expose-remote-ollama-endpoints-to-your-development-machine"}}');var t=i(74848),s=i(28453);const a={id:"deploy-the-nvidia-gpu-operator-on-cce",title:"Deploy the NVIDIA GPU Operator on CCE",tags:["nvidia","nvidia-operator","gpu","ai"]},r="Deploy the NVIDIA GPU Operator on CCE",l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing &amp; Configuring a GPU Node Pool",id:"preparing--configuring-a-gpu-node-pool",level:2},{value:"Node Pool Configuration",id:"node-pool-configuration",level:3},{value:"Verification",id:"verification",level:3},{value:"Installing the NVIDIA GPU Plugin",id:"installing-the-nvidia-gpu-plugin",level:2},{value:"Installation",id:"installation",level:3},{value:"Plugin Configuration",id:"plugin-configuration",level:3},{value:"Deploying the NVIDIA GPU Operator via Helm",id:"deploying-the-nvidia-gpu-operator-via-helm",level:2},{value:"Deploying an application with GPU Support",id:"deploying-an-application-with-gpu-support",level:2},{value:"Validation",id:"validation",level:3},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-the-nvidia-gpu-operator-on-cce",children:"Deploy the NVIDIA GPU Operator on CCE"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/NVIDIA/gpu-operator",children:"NVIDIA GPU Operator"})," is a critical tool for effectively managing GPU resources in Kubernetes clusters. It serves as an abstraction layer over Kubernetes APIs, automating tasks such as dynamic provisioning, driver updates, resource allocation, and optimization for GPU-intensive workloads, thereby simplifying the deployment and management of GPU-accelerated applications. Its functionality extends to dynamic provisioning of GPUs on demand, managing driver updates, optimizing resource allocation for varied workloads, and integrating with monitoring tools for comprehensive insights into GPU usage and health. This guide outlines how to deploy the NVIDIA GPU Operator on CCE cluster. The process involves preparing GPU nodes, installing necessary components, configuring the cluster for GPU support, deploying an application leveraging GPUs, and verifying functionality."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"This blueprint requires:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Access to the CCE cluster with ",(0,t.jsx)(n.strong,{children:"kubectl"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Helm installed on your system."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"preparing--configuring-a-gpu-node-pool",children:"Preparing & Configuring a GPU Node Pool"}),"\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.em,{children:"Open Telekom Cloud console"})," and choose the specific cluster you want to add the GPU node pool to. At the left sidebar select ",(0,t.jsx)(n.em,{children:"Nodes"})," and click  ",(0,t.jsx)(n.em,{children:"Create Node Pool"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"node-pool-configuration",children:"Node Pool Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Use the following values to configure the newly created GPU Node Pool:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": Assign a meaningful name to your GPU node pool, such as ",(0,t.jsx)(n.code,{children:"gpu-workers"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flavor Selection"}),": Choose a flavor that includes GPU resources. Look for options like ",(0,t.jsx)(n.code,{children:"pi2.2xlarge"})," or similar GPU-accelerated instances available."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Annotations"}),": If required by your cluster's configuration, add any necessary annotations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Taints or Tolerations"}),": Set taints or tolerations to manage pod scheduling. For GPU nodes, you might set a taint like ",(0,t.jsx)(n.code,{children:"nvidia.com/gpu=true:NoExecute"})," and ensure pods requiring GPUs have the appropriate toleration."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(85595).A+"",width:"1067",height:"826"})}),"\n",(0,t.jsx)(n.p,{children:"After creating the Node Pool scale it to the desired size."}),"\n",(0,t.jsx)(n.h3,{id:"verification",children:"Verification"}),"\n",(0,t.jsx)(n.p,{children:"Wait for some minutes until the nodes get provisioned and check if they have successfully joined the cluster with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl get nodes --show-labels | grep "nvidia"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["New GPU nodes should contain a label with ",(0,t.jsx)(n.code,{children:"accelerator"})," as key and ",(0,t.jsx)(n.code,{children:"nvidia*"})," as value (e.g.  ",(0,t.jsx)(n.strong,{children:"accelerator=nvidia-t4"}),")."]})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-nvidia-gpu-plugin",children:"Installing the NVIDIA GPU Plugin"}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["From sidebar select ",(0,t.jsx)(n.em,{children:"Add-ons"})," and install the ",(0,t.jsx)(n.strong,{children:"CCE AI Suite (NVIDIA GPU)"}),"."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(21156).A+"",width:"656",height:"498"})})}),"\n",(0,t.jsx)(n.h3,{id:"plugin-configuration",children:"Plugin Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["For more information see ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dnshttps://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html",children:"CCE AI Suite (NVIDIA GPU)"}),".\n",(0,t.jsx)(n.img,{alt:"image",src:i(54275).A+"",width:"895",height:"648"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"The selected driver must be compatible with the GPU nodes and supported by NVIDIA GPU Operator, otherwise the cluster will not be able to allocate GPU resources.\nCheck supported drivers at:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dnshttps://docs.otc.t-systems.com/cloud-container-engine/umn/add-ons/cloud_native_heterogeneous_computing_add-ons/cce_ai_suite_nvidia_gpu.html",children:"CCE AI Suite (NVIDIA GPU)"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html",children:"Platform Support"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"deploying-the-nvidia-gpu-operator-via-helm",children:"Deploying the NVIDIA GPU Operator via Helm"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"values.yaml"})," file to include the required Helm Chart configuration values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'  hostPaths:\n    driverInstallDir: "/usr/local/nvidia/"\n\n  driver:\n    enabled: false\n\n  toolkit:\n    enabled: false\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hostPaths.driverInstallDir"}),": The driver installation directory on CCE is different. ",(0,t.jsx)(n.em,{children:"Do not change"})," this value!"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"driver.enabled"}),": Driver installation is disabled because it's already installed via CCE AI Suite."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toolkit.enabled"}),": The container toolkit installation is disabled because it's already installed via CCE AI Suite."]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"Now deploy the operator via helm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add nvidia https://helm.ngc.nvidia.com/nvidia\nhelm repo update\n\nhelm install --wait gpu-operator \\\n  -n gpu-operator --create-namespace \\\n  nvidia/gpu-operator \\\n  -f values.yaml \\\n  --version=v24.9.2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deploying-an-application-with-gpu-support",children:"Deploying an application with GPU Support"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create a Pod Manifest"}),": For example, deploying a CUDA job."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="cuda-example.yaml"',children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: cuda-vectoradd\nspec:\n  restartPolicy: OnFailure\n  containers:\n  - name: cuda-vectoradd\n    image: "nvcr.io/nvidia/k8s/cuda-sample:vectoradd-cuda11.7.1-ubuntu20.04"\n    resources:\n      limits:\n        nvidia.com/gpu: 1\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Apply the Manifest"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f cuda-example.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Check Pod Status"}),": Ensure pods are running."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n default\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Verify Logs"}),": Check logs for GPU activity."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl logs -f cuda-example-<pod-name> -n default\n"})}),"\n",(0,t.jsx)(n.p,{children:"The containers' logs should indicate that the operation was succesfull, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[Vector addition of 50000 elements]\nCopy input data from the host memory to the CUDA device\nCUDA kernel launch with 196 blocks of 256 threads\nCopy output data from the CUDA device to the host memory\nTest PASSED\nDone\n"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting-tips",children:"Troubleshooting Tips"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify NVIDIA drivers are installed on nodes."}),"\n",(0,t.jsx)(n.li,{children:"Check resource requests and limits against cluster capacity."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},54275:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/configure-plugin-1b6d956a809dad2efa39b93cfd533e86.png"},85595:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/create-node-pool-b1057ce3e16a4958f3b14db0b78d7f99.png"},21156:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/install-plugin-1f8a18536e91e328ef9c196b2a8cc4cd.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var o=i(96540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);