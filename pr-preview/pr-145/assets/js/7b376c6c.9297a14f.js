"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[23990],{70251:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(74848),t=s(28453);const r={id:"ci-jenkins-swr-cce",title:"Build a CI Pipeline with Jenkins, SWR and CCE",tags:["devops","ci","jenkins","swr","cce"]},a="Build a CI Pipeline with Jenkins, SWR and CCE",l={id:"blueprints/by-use-case/devops/ci-jenkins-swr-cce",title:"Build a CI Pipeline with Jenkins, SWR and CCE",description:"This blueprint covers integrating Jenkins with Open Telekom Cloud Container Engine (CCE) for efficient CI/CD pipelines. It details installing Jenkins in CCE clusters, emphasizing using containerized Masters and dynamic Agents managed by Kubernetes for optimal resource utilization and self-healing. The Master schedules jobs, which Agents execute within Kubernetes pods. This setup enhances security and maintenance efficiency.",source:"@site/docs/blueprints/by-use-case/devops/ci-jenkins-swr-cce.md",sourceDirName:"blueprints/by-use-case/devops",slug:"/blueprints/by-use-case/devops/ci-jenkins-swr-cce",permalink:"/docs-next/pr-preview/pr-145/docs/blueprints/by-use-case/devops/ci-jenkins-swr-cce",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/devops/ci-jenkins-swr-cce.md",tags:[{inline:!0,label:"devops",permalink:"/docs-next/pr-preview/pr-145/docs/tags/devops"},{inline:!0,label:"ci",permalink:"/docs-next/pr-preview/pr-145/docs/tags/ci"},{inline:!0,label:"jenkins",permalink:"/docs-next/pr-preview/pr-145/docs/tags/jenkins"},{inline:!0,label:"swr",permalink:"/docs-next/pr-preview/pr-145/docs/tags/swr"},{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-145/docs/tags/cce"}],version:"current",frontMatter:{id:"ci-jenkins-swr-cce",title:"Build a CI Pipeline with Jenkins, SWR and CCE",tags:["devops","ci","jenkins","swr","cce"]},sidebar:"blueprintsSidebar",previous:{title:"Build a CI/CD Pipeline with Devtron, SWR and CCE",permalink:"/docs-next/pr-preview/pr-145/docs/blueprints/by-use-case/devops/ci-devtron-swr-cce"},next:{title:"Hybrid & MultiCloud",permalink:"/docs-next/pr-preview/pr-145/docs/blueprints/by-use-case/hybrid/"}},c={},o=[{value:"Solution Design",id:"solution-design",level:2},{value:"Installing and Deploying Jenkins Master",id:"installing-and-deploying-jenkins-master",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing Jenkins on CCE",id:"installing-jenkins-on-cce",level:3},{value:"Logging In and Initializing Jenkins",id:"logging-in-and-initializing-jenkins",level:3},{value:"Modifying the number of Concurrent Build Jobs",id:"modifying-the-number-of-concurrent-build-jobs",level:3},{value:"Configuring Jenkins Agent",id:"configuring-jenkins-agent",level:2},{value:"Setting a Dynamic Agent for Jenkins",id:"setting-a-dynamic-agent-for-jenkins",level:3},{value:"Setting Cluster Access Credentials",id:"setting-cluster-access-credentials",level:3},{value:"Using Jenkins to Build a Pipeline",id:"using-jenkins-to-build-a-pipeline",level:2},{value:"Obtaining a long-term SWR Login Command",id:"obtaining-a-long-term-swr-login-command",level:3},{value:"Creating a Pipeline to Build and Push Images",id:"creating-a-pipeline-to-build-and-push-images",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"build-a-ci-pipeline-with-jenkins-swr-and-cce",children:"Build a CI Pipeline with Jenkins, SWR and CCE"}),"\n",(0,i.jsx)(n.p,{children:"This blueprint covers integrating Jenkins with Open Telekom Cloud Container Engine (CCE) for efficient CI/CD pipelines. It details installing Jenkins in CCE clusters, emphasizing using containerized Masters and dynamic Agents managed by Kubernetes for optimal resource utilization and self-healing. The Master schedules jobs, which Agents execute within Kubernetes pods. This setup enhances security and maintenance efficiency."}),"\n",(0,i.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.jenkins.io/",children:"Jenkins"})," is an open source continuous integration (CI) tool that provides\nuser-friendly GUIs. It originates from ",(0,i.jsx)(n.a,{href:"https://projects.eclipse.org/projects/technology.hudson",children:"Hudson"})," and is used to automate\nall sorts of tasks related to building, testing, and delivering or\ndeploying software."]}),"\n",(0,i.jsx)(n.p,{children:"Jenkins is written in Java and can run in popular servlet containers\nsuch as Tomcat, or run independently. It is usually used together with\nthe version control tools (or SCM tools) and build tools. Jenkins\nsupports various languages and is compatible with third-party build\ntools, such as Maven, Ant, and Gradle. It seamlessly integrates with\ncommon version control tools, such as SVN and Git, and can directly\nconnect to source code hosting services, such as GitHub."}),"\n",(0,i.jsx)(n.admonition,{title:"Constrains",type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This solution can be deployed only in CCE clusters. It is not supported in DeC."}),"\n",(0,i.jsx)(n.li,{children:"CCE does not provide maintenance and support for Jenkins. The maintenance is provided by the developers."}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"You can install Jenkins using one of the following methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can use a ",(0,i.jsx)(n.strong,{children:"single Master"})," to install Jenkins. The Master handles\njobs and builds and releases services. However, security risks may\nexist."]}),"\n",(0,i.jsxs)(n.li,{children:["or use ",(0,i.jsx)(n.strong,{children:"Master & Agents"}),". Master schedules build jobs to\nAgents for execution, and monitors the Agent(s) status. Agents execute\nthe build jobs dispatched by the Master and return the job progress and\nresult. You can install the Master and Agents on VMs, containers, or combination\nof the two."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In this blueprint, Jenkins is installed with a containerized Master and\nAgents. Kubernetes schedules the dynamic Agents:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1 Installing Jenkins onKubernetes",src:s(51759).A+"",width:"633",height:"424"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Master handles jobs. Install Kubernetes add-ons on the Master to\nuse the Kubernetes platform resources."}),"\n",(0,i.jsx)(n.li,{children:"The Kubernetes platform generates pods for Agents to execute jobs.\nWhen a job is scheduled on the Master, the Master sends a request to\nthe Kubernetes platform using the Kubernetes add-on. After receiving\nthe request, Kubernetes builds a pod using the pod template to send\nrequests to the Master. After the Master is successfully connected,\nyou can execute the job on the pod."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-and-deploying-jenkins-master",children:"Installing and Deploying Jenkins Master"}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:["Select an image from Docker Hub. For this test, ",(0,i.jsx)(n.code,{children:"jenkins/jenkins:latest"})," was selected, which is the official jenkins image with\nall add-ons and functions. For details, see ",(0,i.jsx)(n.a,{href:"https://www.jenkins.io/doc/book/installing/",children:"Installing Jenkins"}),"."]}),(0,i.jsxs)(n.p,{children:["It is ",(0,i.jsx)(n.strong,{children:"not"})," advised to use ",(0,i.jsx)(n.code,{children:"latest"})," images on production, choose a specific version!"]})]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Before creating a containerized workload, create a cluster (the\ncluster must contain at least one node with 4 vCPUs and 8 GB\nmemory). For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/creating_a_cce_cluster.html",children:"Creating a CCE Cluster"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In order to manage your CCE cluster through ",(0,i.jsx)(n.code,{children:"kubectl"}),", you need to\nconfigure kubectl so that it can communicate with the cluster. This\ninvolves obtaining the cluster's credentials from CCE and setting\nup a ",(0,i.jsx)(n.code,{children:"kubeconfig"})," file that kubectl will use to connect. For details,\nsee ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/connecting_to_a_cluster/connecting_to_a_cluster_using_kubectl.html",children:"Connecting to a Cluster Using kubectl"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"To enable access to a workload from a public network, ensure that an\nelastic IP address (EIP) has been bound to or a load balancer has\nbeen configured for at least one node in the cluster."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installing-jenkins-on-cce",children:"Installing Jenkins on CCE"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The first step is to create a dedicated Kubernetes namespace for\nJenkins using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace jenkins\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create service account. Jenkins needs access to the Kubernetes API\nto manage resources. The ",(0,i.jsx)(n.strong,{children:"sa.yaml"})," file defines a ClusterRole to\ngrant admin access, a ServiceAccount, and a ClusterRoleBinding to\nlink them. This is created with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="sa.yaml"',children:'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\nname: jenkins-admin\nrules:\n- apiGroups: [""]\nresources: ["*"]\nverbs: ["*"]\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\nname: jenkins-admin\nnamespace: jenkins\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\nname: jenkins-admin\nroleRef:\napiGroup: rbac.authorization.k8s.io\nkind: ClusterRole\nname: jenkins-admin\nsubjects:\n- kind: ServiceAccount\nname: jenkins-admin\nnamespace: jenkins\n'})}),"\n",(0,i.jsx)(n.p,{children:"and apply with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl create -f sa.yaml --namespace jenkins\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create persistent volume claim. To persist Jenkins data, a\n",(0,i.jsx)(n.code,{children:"PersistentVolumeClaim"})," is defined in ",(0,i.jsx)(n.strong,{children:"storage.yaml"}),". An available\n",(0,i.jsx)(n.code,{children:"10Gi"})," volume will be dynamically provisioned when the claim is\ncreated:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="storage.yaml"',children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\nname: jenkins-pv-claim\nnamespace: jenkins\nannotations:\neverest.io/disk-volume-type: SSD\nspec:\naccessModes:\n- ReadWriteOnce\nresources:\nrequests:\n    storage: 10Gi\nstorageClassName: csi-disk\n"})}),"\n",(0,i.jsx)(n.p,{children:"and apply with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl create -f storage.yaml --namespace jenkins\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create Jenkins deployment. The ",(0,i.jsx)(n.strong,{children:"deployment.yaml"})," defines a Jenkins\n",(0,i.jsx)(n.code,{children:"Deployment"})," and associated Kubernetes objects like ",(0,i.jsx)(n.code,{children:"Services"})," and\n",(0,i.jsx)(n.code,{children:"Probes"}),". This spins up the Jenkins pod with the persistent volume\nmounted:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="deployment.yaml"',children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: jenkins\nnamespace: jenkins\nspec:\nreplicas: 1\nselector:\nmatchLabels:\n    app: jenkins\ntemplate:\nmetadata:\n    labels:\n    app: jenkins\nspec:\n    securityContext:\n            fsGroup: 1000\n            runAsUser: 1000\n    serviceAccountName: jenkins-admin\n    containers:\n    - name: jenkins\n        image: jenkins/jenkins:lts\n        resources:\n            limits:\n            memory: "2Gi"\n            cpu: "1000m"\n            requests:\n            memory: "500Mi"\n            cpu: "500m"\n        ports:\n            - name: httpport\n            containerPort: 8080\n            - name: jnlpport\n            containerPort: 50000\n        livenessProbe:\n            httpGet:\n            path: "/login"\n            port: 8080\n            initialDelaySeconds: 90\n            periodSeconds: 10\n            timeoutSeconds: 5\n            failureThreshold: 5\n        readinessProbe:\n            httpGet:\n            path: "/login"\n            port: 8080\n            initialDelaySeconds: 60\n            periodSeconds: 10\n            timeoutSeconds: 5\n            failureThreshold: 3\n        volumeMounts:\n            - name: jenkins-data\n            mountPath: /var/jenkins_home\n    volumes:\n    - name: jenkins-data\n        persistentVolumeClaim:\n            claimName: jenkins-pv-claim\n'})}),"\n",(0,i.jsx)(n.p,{children:"and apply with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl create -f deployment.yaml --namespace jenkins\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create Jenkins service. The Jenkins service exposes Jenkins on a ",(0,i.jsx)(n.code,{children:"NodePort"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the Jenkins service is exposed internally through a\n",(0,i.jsx)(n.code,{children:"NodePort"}),". This makes Jenkins available of any Kubernetes node IP."]}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, a dedicated external IP can be assigned by switching\nthe service type to ",(0,i.jsx)(n.code,{children:"LoadBalancer"}),". This will provision a cloud load\nbalancer that handles routing external traffic to Jenkins. For\ndetails, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/network/service/loadbalancer/creating_a_loadbalancer_service.html",children:"Creating a LoadBalancer Service"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="service.yaml"',children:"apiVersion: v1\nkind: Service\nmetadata:\nname: jenkins-service\nnamespace: jenkins\nannotations:\n    prometheus.io/scrape: 'true'\n    prometheus.io/path:   /\n    prometheus.io/port:   '8080'\nspec:\nselector: \napp: jenkins\ntype: NodePort  \nports:\n- name: httpport\n    port: 8080\n    targetPort: 8080\n    nodePort: 32000\n- name: jnlpport\n    port: 50000\n    targetPort: 50000\n"})}),"\n",(0,i.jsx)(n.p,{children:"and apply with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl create -f service.yaml --namespace jenkins\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"logging-in-and-initializing-jenkins",children:"Logging In and Initializing Jenkins"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the CCE console, click the target cluster. Choose ",(0,i.jsx)(n.em,{children:"Networking"}),"\nin the navigation pane. On the ",(0,i.jsx)(n.em,{children:"Services"})," tab , view the\nJenkins access mode."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image1",src:s(52520).A+"",width:"1658",height:"336"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"http://<ElasticLoadBalancerIPv4Address>:8080"})," in the browser address box to visit the Jenkins configuration page."]}),"\n",(0,i.jsxs)(n.p,{children:["When you visit the page for the first time, you are prompted to\nobtain the initial administrator password. You can obtain the\npassword from the Jenkins pod. Before running the following\ncommands, connect to the cluster using ",(0,i.jsx)(n.code,{children:"kubectl"}),". For details, see\n",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/using_kubectl_to_run_a_cluster/connecting_to_a_cluster_using_kubectl.html",children:"Connecting to a Cluster Using kubectl"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# kubectl get pod -n cicd\n\nNAME                                     READY   STATUS    RESTARTS   AGE\njenkins-544d9765c4-pqgd8                  1/1     Running   0          1h\n\n# kubectl exec -it jenkins-544d9765c4-pqgd8 -n cicd -- /bin/sh\n# cat /var/jenkins_home/secrets/initialAdminPassword\nb10eabe29a9f427c9b54c01a9c3383ae\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The system prompts you to select the default recommended add-on and\ncreate an administrator upon the first login. After the initial\nconfiguration is complete, the Jenkins page is displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image1",src:s(98736).A+"",width:"1691",height:"704"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modifying-the-number-of-concurrent-build-jobs",children:"Modifying the number of Concurrent Build Jobs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the Jenkins dashboard page, click ",(0,i.jsx)(n.em,{children:"Manage Jenkins"})," on the left,\nchoose ",(0,i.jsx)(n.em,{children:"System Configuration"})," -> ",(0,i.jsx)(n.em,{children:"Manage nodes and clouds"}),", and\nselect ",(0,i.jsx)(n.em,{children:"Configure"})," from the drop-down list of the target node."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image2",src:s(55034).A+"",width:"2509",height:"540"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can modify the number of concurrent build jobs on both\nMaster and Agent. The following uses Master as an example."}),"\n",(0,i.jsxs)(n.li,{children:["If the Master is used with Agents, you are advised to set the number of concurrent\nbuild jobs of Master to ",(0,i.jsx)(n.code,{children:"0"}),". That is, all build jobs are performed using Agents. If a\nsingle Master is used, you ",(0,i.jsx)(n.strong,{children:"do not need"})," to change the value to ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modify the maximum number of concurrent build jobs. In this example,\nthe value is changed to ",(0,i.jsx)(n.code,{children:"2"}),". You can change the value as required."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image3",src:s(49566).A+"",width:"1739",height:"552"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-jenkins-agent",children:"Configuring Jenkins Agent"}),"\n",(0,i.jsx)(n.p,{children:"After Jenkins is installed, the following information may display,\nindicating that Jenkins uses a Master for local build and Agents are not\nconfigured."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image1",src:s(71874).A+"",width:"1761",height:"268"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you install Jenkins using a Master, you can build a pipeline after\nperforming operations in ",(0,i.jsx)(n.a,{href:"#installing-and-deploying-jenkins-master",children:"Installing and Deploying Jenkins Master"}),".\nFor details, see ",(0,i.jsx)(n.a,{href:"#using-jenkins-to-build-a-pipeline",children:"Using Jenkins to Build a Pipeline"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"setting-a-dynamic-agent-for-jenkins",children:"Setting a Dynamic Agent for Jenkins"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install the plug-in"})}),"\n",(0,i.jsxs)(n.p,{children:["On the Jenkins dashboard page, click ",(0,i.jsx)(n.em,{children:"Manage Jenkins"})," on the left\nand choose ",(0,i.jsx)(n.em,{children:"System Configuration"})," -> ",(0,i.jsx)(n.em,{children:"Manage Plugins"}),". On the\n",(0,i.jsx)(n.em,{children:"Available"})," tab page, filter and install ",(0,i.jsx)(n.em,{children:"Kubernetes Plugin"})," and\n",(0,i.jsx)(n.em,{children:"Kubernetes CLI Plugin"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image6",src:s(19150).A+"",width:"2513",height:"1089"})}),"\n",(0,i.jsx)(n.p,{children:"The plug-in version may change with time. Select a plug-in version\nas required:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://plugins.jenkins.io/kubernetes/",children:"Kubernetes Plugin"}),":",(0,i.jsx)(n.code,{children:"3734.v562b_b_a_627ea_c"})]}),"\n",(0,i.jsx)(n.p,{children:"It is used to run dynamic Agents in the Kubernetes cluster,\ncreate a Kubernetes pod for each started Agent, and stop the pod\nafter each build is complete."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://plugins.jenkins.io/kubernetes-cli/",children:"Kubernetes CLI Plugin"}),":",(0,i.jsx)(n.code,{children:"1.10.3"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"kubectl"})," can be configured for jobs to interact with Kubernetes clusters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The Jenkins plug-ins are provided by the plug-in maintainer and may\nbe iterated due to security risks."})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Add cluster access credentials to Jenkins"})}),"\n",(0,i.jsxs)(n.p,{children:["Add cluster access credentials to Jenkins in advance. For details, see ",(0,i.jsx)(n.a,{href:"#setting-cluster-access-credentials",children:"Setting Cluster Access Credentials"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure basic cluster information"})}),"\n",(0,i.jsxs)(n.p,{children:["On the Jenkins dashboard page, click ",(0,i.jsx)(n.em,{children:"Manage Jenkins"})," on the left\nand choose ",(0,i.jsx)(n.em,{children:"System Configuration"})," -> ",(0,i.jsx)(n.em,{children:"Manage nodes and clouds"}),".\nClick ",(0,i.jsx)(n.em,{children:"Configure Clouds"})," on the left to configure the cluster.\nClick ",(0,i.jsx)(n.em,{children:"Add a new cloud"})," and select ",(0,i.jsx)(n.em,{children:"Kubernetes"}),". The cluster\nname can be customized."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Enter Kubernetes Cloud details"})}),"\n",(0,i.jsx)(n.p,{children:"Set the following cluster parameters and retain the values for other parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes URL"}),": cluster API server address. You can enter ",(0,i.jsx)(n.code,{children:"https://kubernetes.default.svc.cluster.local:443"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes server certificate key"}),": your cluster CA certificate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Credentials"}),": Select the cluster credential added in. You can click ",(0,i.jsx)(n.em,{children:"Test Connection"})," to check whether the cluster is connected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Jenkins URL"}),": Jenkins access path. Enter the IP address of port 8080 set in installing process ",(0,i.jsx)(n.strong,{children:"(ports 8080 and 50000 must\nbe enabled for the IP address, that is, the intra-cluster access\naddress)"}),", for example, ",(0,i.jsx)(n.code,{children:"http://10.247.222.254:8080"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1Example",src:s(16742).A+"",width:"1261",height:"1354"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pod Template"}),": Click ",(0,i.jsx)(n.em,{children:"Add Pod Template -> Pod Template details"}),"\nand set the pod template parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"jenkins-agent"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Namespace"}),": ",(0,i.jsx)(n.code,{children:"cicd"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Labels"}),": ",(0,i.jsx)(n.code,{children:"jenkins-agent"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),": Select ",(0,i.jsx)(n.code,{children:"Use this node as much as possible"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 2 Basic parameters of the podtemplate",src:s(64031).A+"",width:"1590",height:"920"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a container. Click ",(0,i.jsx)(n.em,{children:"Add Container -> Container Template"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": The value must be ",(0,i.jsx)(n.code,{children:"jnlp"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Docker image"}),": ",(0,i.jsx)(n.code,{children:"jenkins/inbound-agent:4.13.3-1"}),". The\nimage version may change with time. Select an image version\nas required or use the latest version."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Working directory"}),": ",(0,i.jsx)(n.code,{children:"/home/jenkins/agent"})," is selected\nby default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Command to run"}),"/",(0,i.jsx)(n.strong,{children:"Arguments to pass to the command"}),":\nDelete the existing default values and leave these two\nparameters empty."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Allocate pseudo-TTY"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Run in privileged"})," mode and set ",(0,i.jsx)(n.strong,{children:"Run As User ID"}),"\nto ",(0,i.jsx)(n.code,{children:"0"})," (",(0,i.jsx)(n.strong,{children:"root"})," user)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 3 Container template parameters",src:s(76606).A+"",width:"1596",height:"1121"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"setting-cluster-access-credentials",children:"Setting Cluster Access Credentials"}),"\n",(0,i.jsxs)(n.p,{children:["The certificate file that can be identified in Jenkins is in ",(0,i.jsx)(n.strong,{children:"PKCS#12"}),"\nformat. Therefore, convert the cluster certificate to a PFX certificate\nfile in PKCS#12 format."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to the ",(0,i.jsx)(n.em,{children:"CCE console"})," and go to the cluster console. Choose\n",(0,i.jsx)(n.em,{children:"Cluster Information -> Connection Information"})," to download the\ncluster certificate. The downloaded certificate contains three\nfiles: ",(0,i.jsx)(n.strong,{children:"ca.crt"}),", ",(0,i.jsx)(n.strong,{children:"client.crt"}),", and ",(0,i.jsx)(n.strong,{children:"client.key"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to a Linux host, place the three certificate files in the\nsame directory, and use ",(0,i.jsx)(n.strong,{children:"OpenSSL"})," to convert the certificate into a\n",(0,i.jsx)(n.strong,{children:"cert.pfx"})," certificate. After the certificate is generated, the\nsystem prompts you to enter a custom password."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl pkcs12 -export -out cert.pfx -inkey client.key -in client.crt -certfile ca.crt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Jenkins console"}),", choose ",(0,i.jsx)(n.em,{children:"Manage Jenkins"})," -> ",(0,i.jsx)(n.em,{children:"Manage\nCredentials"})," and click ",(0,i.jsx)(n.em,{children:"Global"}),". You can also create a domain."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image8",src:s(61513).A+"",width:"2522",height:"728"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"Add Credential"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": Select ",(0,i.jsx)(n.code,{children:"Certificate"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scope"}),": Select ",(0,i.jsx)(n.code,{children:"Global"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Certificate"}),": Select ",(0,i.jsx)(n.em,{children:"Upload PKCS#12 certificate"})," and upload the ",(0,i.jsx)(n.strong,{children:"cert.pfx"})," file generated in."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Password"}),": The password customized during ",(0,i.jsx)(n.strong,{children:"cert.pfx"})," conversion."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ID"}),": Set this parameter to ",(0,i.jsx)(n.code,{children:"k8s-test-cert"}),", which can be customized."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image9",src:s(4435).A+"",width:"1816",height:"1022"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-jenkins-to-build-a-pipeline",children:"Using Jenkins to Build a Pipeline"}),"\n",(0,i.jsx)(n.h3,{id:"obtaining-a-long-term-swr-login-command",children:"Obtaining a long-term SWR Login Command"}),"\n",(0,i.jsxs)(n.p,{children:["During Jenkins installation and deployment, the Docker commands have\nbeen configured in the container. Therefore, no additional configuration\nis required for interconnecting Jenkins with SWR. You can directly run\nthe Docker commands. You only need to obtain a long-term valid SWR login\ncommand. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/software-repository-container/umn/image_management/obtaining_a_long-term_valid_login_command.html",children:"Obtaining a Long-Term Valid Login Command"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the command of this account is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker login -u eu-de_otcxxxxx@xxxxx -p xxxxx swr.eu-de.otc.t-systems.com\n"})}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-pipeline-to-build-and-push-images",children:"Creating a Pipeline to Build and Push Images"}),"\n",(0,i.jsx)(n.p,{children:"In this example, Jenkins is used to build a pipeline to pull code from\nthe code repository, package the code into an image, and push the image\nto SWR."}),"\n",(0,i.jsx)(n.p,{children:"The pipeline creation procedure is as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"New Item"})," on the Jenkins page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter a task name and select ",(0,i.jsx)(n.em,{children:"Create Pipeline"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image1",src:s(75375).A+"",width:"1451",height:"956"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure only the pipeline script."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image2",src:s(35977).A+"",width:"1648",height:"1077"})}),"\n",(0,i.jsxs)(n.p,{children:["The following pipeline scripts are for reference only. You can\ncustomize the script. For details about the syntax, see\n",(0,i.jsx)(n.a,{href:"https://www.jenkins.io/doc/book/pipeline/",children:"Pipeline"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Some parameters in the example need to be modified:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"git_url"}),": Address of your code repository. Replace it with the actual address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"swr_login"}),": The login command obtained in ",(0,i.jsx)(n.a,{href:"#obtaining-a-long-term-swr-login-command",children:"Obtaining a long-term SWR Login Command"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"swr_region"}),": SWR region."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"organization"}),": The actual organization name in SWR."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"build_name"}),": Name of the created image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"credential"})," The cluster credential added to Jenkins. Enter\nthe credential ID. If you want to deploy the service in another\ncluster, add the access credential of the cluster to Jenkins\nagain. For details, see ",(0,i.jsx)(n.a,{href:"#setting-cluster-access-credentials",children:"Setting Cluster Access Credentials"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"apiserver"}),": IP address of the API server where the application cluster is deployed. Ensure that the IP address can\nbe accessed from the Jenkins cluster."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"//Define the code repository address.\ndef git_url = 'https://github.com/cnych/jenkins-demo.git'\n//Define the SWR login command.\ndef swr_login = 'docker login -u eu-dexxxx@xxxxxxx -p xxxxxxxxxxxx swr.eu-de.otc.t-systems.com'\n//Define the SWR region.\ndef swr_region = 'eu-de'\n//Define the name of the SWR organization to be uploaded.\ndef organization = 'batch'\n//Define the image name.\ndef build_name = 'jenkins-demo'\n//Certificate ID of the cluster to be deployed\ndef credential = 'k8s-token'\n//API server address of the cluster. Ensure that the address can be accessed from the Jenkins cluster.\ndef apiserver = 'https://kubernetes.default.svc.cluster.local:443'\n\npipeline {\n    agent any\n    stages {\n        stage('Clone') {\n            steps{\n                echo \"1.Clone Stage\"\n                git url: git_url\n                script {\n                    build_tag = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()\n                }\n            }\n        }\n        stage('Test') {\n            steps{\n                echo \"2.Test Stage\"\n            }\n        }\n        stage('Build') {\n            steps{\n                echo \"3.Build Docker Image Stage\"\n                sh \"docker build -t swr.${swr_region}.otc.t-systems.com/${organization}/${build_name}:${build_tag} .\"\n                //${build_tag} indicates that the build_tag variable is obtained as the image tag. It is the return value of the git rev-parse --short HEAD command, that is, commit ID.\n            }\n        }\n        stage('Push') {\n            steps{\n                echo \"4.Push Docker Image Stage\"\n                sh swr_login\n                sh \"docker push swr.${swr_region}.otc.t-systems.com/${organization}/${build_name}:${build_tag}\"\n            }\n        }\n        stage('Deploy') {\n            steps{\n                echo \"5. Deploy Stage\"\n                script {\n                try {\n                    withKubeConfig([credentialsId: credential, serverUrl: apiserver]) {\n                        sh \"sed -i 's/<BUILD_TAG>/${build_tag}/' k8s.yaml\"\n                        sh \"kubectl apply -f k8s.yaml --record\"\n                        //The YAML file is stored in the code repository. The following is only an example. Replace it as required.\n                    }\n                } catch (e) {\n                    println \"oh no! Deployment failed! \"\n                    println e\n                }\n                }\n            }\n        }\n    }\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the settings and execute the Jenkins job."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},51759:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001348013634-93434b23a6694e0f4cadd3addf4406f2.png"},52520:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001349490578-e2a07ad5d3c9cee247345892943d8bb6.png"},16742:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001349986824-a9db074c7ecbce307e37d973599d1acd.png"},76606:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001350206690-228b28a1f746965b856d9602e488d762.png"},64031:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001399744097-3ee445caa495d62933633e78635897a5.png"},4435:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001400577445-6bc9007000dad67d2aa448c17dc223d0.png"},35977:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001416249976-fc372f648b3191f7ad7c9e8457656b56.png"},49566:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001416531766-534ddae9da1aa28a1542538fcef8eea1.png"},61513:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001416735446-00881c015c0b651705850ea5cbbef107.png"},98736:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001465971797-e433eb2c2f1d4b0c75a650b43d62816c.png"},71874:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001465972145-7a78f7a0bc9df12bfec826025491ed44.png"},75375:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001466646017-721e356b51d15d06865bef32bf28b84e.png"},55034:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001471311349-10a6d88e906f5daafbb591dd64bc22c1.png"},19150:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001471430697-47fa226a3d9cc0554e9b8e07aa46d799.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);