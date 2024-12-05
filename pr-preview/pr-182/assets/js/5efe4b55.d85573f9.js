"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[69490],{24628:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=n(74848),o=n(28453);const i={id:"openshift-template",title:"OpenShift Template",tags:["openshift","cloud-create"],last_update:{date:"7/5/2024",author:"Dr. Tri Vo"}},r="OpenShift Template",l={id:"best-practices/management-and-deployment/cloud-create/service-catalogs/openshift-template",title:"OpenShift Template",description:"The following tutorial shows you how to register a (trial) subscription key from Red Hat and uses it to create an OpenShift cluster using the OpenShift template.",source:"@site/docs/best-practices/management-and-deployment/cloud-create/service-catalogs/openshift-template.md",sourceDirName:"best-practices/management-and-deployment/cloud-create/service-catalogs",slug:"/best-practices/management-and-deployment/cloud-create/service-catalogs/openshift-template",permalink:"/docs-next/pr-preview/pr-182/docs/best-practices/management-and-deployment/cloud-create/service-catalogs/openshift-template",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/management-and-deployment/cloud-create/service-catalogs/openshift-template.md",tags:[{inline:!0,label:"openshift",permalink:"/docs-next/pr-preview/pr-182/docs/tags/openshift"},{inline:!0,label:"cloud-create",permalink:"/docs-next/pr-preview/pr-182/docs/tags/cloud-create"}],version:"current",frontMatter:{id:"openshift-template",title:"OpenShift Template",tags:["openshift","cloud-create"],last_update:{date:"7/5/2024",author:"Dr. Tri Vo"}},sidebar:"bestPracticesSidebar",previous:{title:"Service catalogs",permalink:"/docs-next/pr-preview/pr-182/docs/best-practices/management-and-deployment/cloud-create/service-catalogs/"},next:{title:"Resource Group Monitoring",permalink:"/docs-next/pr-preview/pr-182/docs/best-practices/management-and-deployment/cloud-eye/resource-group-monitoring"}},c={},a=[{value:"How to use",id:"how-to-use",level:2},{value:"How to deploy",id:"how-to-deploy",level:3},{value:"Deploy Setup",id:"deploy-setup",level:3},{value:"Specify base_domain",id:"specify-base_domain",level:4},{value:"Specify pull_secret",id:"specify-pull_secret",level:4},{value:"Specify os_password",id:"specify-os_password",level:4},{value:"(Optional) Specify ssh_public_key",id:"optional-specify-ssh_public_key",level:4},{value:"(Optional) Specify other paramters",id:"optional-specify-other-paramters",level:4},{value:"Expect result",id:"expect-result",level:2},{value:"Access the console",id:"access-the-console",level:3},{value:"Access the bastion host",id:"access-the-bastion-host",level:3},{value:"How to create storages",id:"how-to-create-storages",level:2},{value:"Elastic Volume Service (EVS)",id:"elastic-volume-service-evs",level:3},{value:"Scalable File Service &amp; SFS Turbo",id:"scalable-file-service--sfs-turbo",level:3},{value:"Tear down",id:"tear-down",level:2},{value:"Links",id:"links",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"openshift-template",children:"OpenShift Template"}),"\n",(0,t.jsx)(s.p,{children:"The following tutorial shows you how to register a (trial) subscription key from Red Hat and uses it to create an OpenShift cluster using the OpenShift template."}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The OpenShift template deploys a ",(0,t.jsx)(s.a,{href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/container-platform",children:"Self-managed OpenShift Container Platform"})," on Open Telekom Cloud with Bring Your Own License (BYOL)."]}),"\n",(0,t.jsxs)(s.li,{children:["Your license/subscription will cover technical support from Red Hat as well as upgrades between OpenShift versions. ",(0,t.jsx)(s.a,{href:"https://www.redhat.com/en/about/value-of-Red-Hat",children:"Read more"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Supported versions: 4.12.39 and 4.13.x."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(s.h3,{id:"how-to-deploy",children:"How to deploy"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Create a new application using the template ",(0,t.jsx)(s.strong,{children:"OpenShift"})," or ",(0,t.jsx)(s.strong,{children:"OpenShift HA"})," with a selected version (e.g., 4.13.19)"]}),"\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.strong,{children:"Quick Deploy"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"deploy-setup",children:"Deploy Setup"}),"\n",(0,t.jsx)(s.h4,{id:"specify-base_domain",children:"Specify base_domain"}),"\n",(0,t.jsxs)(s.p,{children:["Specify the ",(0,t.jsx)(s.strong,{children:"base_domain"})," (e.g., ",(0,t.jsx)(s.code,{children:"tri-test.com"}),"). This is the domain name that you will use to access the OpenShift console after the deployment completes. A DNS Public Zone will be created on Open Telekom Cloud with this name. Therefore this domain name ",(0,t.jsx)(s.strong,{children:"must be unique"})," in the Domain Name Service of Open Telekom Cloud."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config1.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config1.png",alt:"../_images/openshift_config1.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 1. Specify a domain name"}),"\n",(0,t.jsx)(s.h4,{id:"specify-pull_secret",children:"Specify pull_secret"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Register ",(0,t.jsx)(s.a,{href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/ocp-self-managed-trial",children:"a trial account at Red Hat"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Go to the ",(0,t.jsx)(s.a,{href:"https://console.redhat.com/openshift",children:"Redhat Console"})," and copy the pull secret in Section ",(0,t.jsx)(s.strong,{children:"Downloads"})," / ",(0,t.jsx)(s.strong,{children:"Tokens"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_redhat_console.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_redhat_console.png",alt:"../_images/openshift_redhat_console.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 2. Copy pull secret"}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["Paste the content in the ",(0,t.jsx)(s.strong,{children:"pull_secret"})," in the Section ",(0,t.jsx)(s.strong,{children:"Secrets Inputs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_pull_secrect.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_pull_secrect.png",alt:"../_images/openshift_pull_secrect.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 2. Paste the pull secret"}),"\n",(0,t.jsx)(s.h4,{id:"specify-os_password",children:"Specify os_password"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Specfiy the ",(0,t.jsx)(s.strong,{children:"os_password"}),". This is the password when you login to Cloud Create."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"We do not store your password but the OpenShift install needs it one time for the installation process. In the next release, we will replace this password with an application credential for password protection."})}),"\n",(0,t.jsx)(s.h4,{id:"optional-specify-ssh_public_key",children:"(Optional) Specify ssh_public_key"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Specify the ",(0,t.jsx)(s.strong,{children:"ssh_public_key"})," with your SSH public key (e.g., ",(0,t.jsx)(s.code,{children:"ssh-ed25519 AAAAC3N..."}),"). This public key will be injected in the bastion host, master and worker nodes so that you can SSH to them later on."]}),"\n",(0,t.jsxs)(s.li,{children:["If ssh_public_key is ",(0,t.jsx)(s.strong,{children:"not specified"}),", we will auto-select one of your ",(0,t.jsx)(s.strong,{children:"existing key pair"})," from the Open Telekom Cloud console instead."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config2.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config2.png",alt:"../_images/openshift_config2.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 3. Specify your SSH public key"}),"\n",(0,t.jsx)(s.h4,{id:"optional-specify-other-paramters",children:"(Optional) Specify other paramters"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Specify the ",(0,t.jsx)(s.strong,{children:"number_workers"})," (e.g., 2). OpenShift requires a minimum of 2 worker nodes in total."]}),"\n",(0,t.jsxs)(s.li,{children:["Specify the ",(0,t.jsx)(s.strong,{children:"nat_gateway_specs"})," (e.g., Small). This is the flavor of the NAT Gateway for outgoing traffic."]}),"\n",(0,t.jsxs)(s.li,{children:["Specify the ",(0,t.jsx)(s.strong,{children:"worker_num_cpus"})," (e.g., 4) and ",(0,t.jsx)(s.strong,{children:"worker_mem_size"})," (e.g., 16 GB). OpenShift requires a minimum of 4vCPU and 16 GB memory for the worker node."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config3.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config3.png",alt:"../_images/openshift_config3.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 4. Specify your SSH public key"}),"\n",(0,t.jsx)(s.h2,{id:"expect-result",children:"Expect result"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"It takes about 2 minutes to create all compute resources on Open Telekom Cloud. Afterwards, the OpenShift bootstrap process continues to setup the master and worker nodes."}),"\n",(0,t.jsxs)(s.li,{children:["After about 31 minutes, the ",(0,t.jsx)(s.strong,{children:"CheckOpenShiftStatus"})," job checks the OpenShift boostrap process and reports the status."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_check_result.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_check_result.png",alt:"../_images/openshift_check_result.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 5. CheckOpenShiftStatus waits 31 minutes and checks the status"}),"\n",(0,t.jsx)(s.h3,{id:"access-the-console",children:"Access the console"}),"\n",(0,t.jsx)(s.p,{children:"After the deployment completes, you can access the OpenShift console as follows."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Copy ",(0,t.jsx)(s.strong,{children:"console_hostname"}),", ",(0,t.jsx)(s.strong,{children:"oauth_hostanme"}),", and the ",(0,t.jsx)(s.strong,{children:"INGRESS_VIP"})," from the deployment outputs."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result1.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result1.png",alt:"../_images/openshift_result1.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 6. Copy the hostname and VIP address"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Paste ",(0,t.jsx)(s.strong,{children:"console_hostname"})," and ",(0,t.jsx)(s.strong,{children:"oauth_hostanme"})," and the ",(0,t.jsx)(s.strong,{children:"INGRESS_VIP"})," in your ",(0,t.jsx)(s.strong,{children:"/etc/hosts"})]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# vim /etc/hosts\n80.158.36.243 console-openshift-console.apps.openshift.tri-test.com\n80.158.36.243 oauth-openshift.apps.openshift.tri-test.com\n\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Access the OpenShift console URL via the web browser with the ",(0,t.jsx)(s.strong,{children:"kubeadmin_username"})," and ",(0,t.jsx)(s.strong,{children:"kubeadmin_password"})," from the deployment outputs."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'# The output of the "console_url"\nhttps://console-openshift-console.apps.openshift.tri-test.com\n\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result2.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result2.png",alt:"../_images/openshift_result2.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 7. Access the OpenShift console"}),"\n",(0,t.jsx)(s.h3,{id:"access-the-bastion-host",children:"Access the bastion host"}),"\n",(0,t.jsx)(s.p,{children:"During the OpenShift bootstrap process, you can access to the bastion host as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Copy ",(0,t.jsx)(s.strong,{children:"public_address"})," of the ",(0,t.jsx)(s.strong,{children:"Bastionhost"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result3.png",alt:"../_images/openshift_result3.png"})}),"\n",(0,t.jsx)(s.p,{children:"Figure 8. The public IP address of the bastion host"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Access the bastion host with the IP"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# We use Ubuntu OS for the bastion host\nssh ubuntu@164.30.10.109\n\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Check nodes are ready"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'# Set KUBECONFIG\nexport KUBECONFIG="/home/ubuntu/openshift/auth/kubeconfig"\n\n# Check all nodes are ready\n$ oc get nodes\nNAME                        STATUS   ROLES                  AGE    VERSION\nopenshift-k55b9-master-0    Ready    control-plane,master   179m   v1.26.9+636f2be\nopenshift-k55b9-master-1    Ready    control-plane,master   179m   v1.26.9+636f2be\nopenshift-k55b9-master-2    Ready    control-plane,master   179m   v1.26.9+636f2be\nopenshift-k55b9-workers-0   Ready    worker                 163m   v1.26.9+636f2be\nopenshift-k55b9-workers-1   Ready    worker                 163m   v1.26.9+636f2be\n\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Check all cluster operators are available"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"$ oc get clusteroperators\n  NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE\n  authentication                             4.13.19   True        False         False      156m\n  baremetal                                  4.13.19   True        False         False      174m\n  cloud-controller-manager                   4.13.19   True        False         False      3h1m\n  cloud-credential                           4.13.19   True        False         False      3h4m\n  cluster-autoscaler                         4.13.19   True        False         False      175m\n  config-operator                            4.13.19   True        False         False      175m\n  console                                    4.13.19   True        False         False      161m\n  control-plane-machine-set                  4.13.19   True        False         False      175m\n  csi-snapshot-controller                    4.13.19   True        False         False      175m\n  dns                                        4.13.19   True        False         False      174m\n  etcd                                       4.13.19   True        False         False      174m\n  image-registry                             4.13.19   True        False         False      163m\n  ingress                                    4.13.19   True        False         False      163m\n  insights                                   4.13.19   True        False         False      168m\n  kube-apiserver                             4.13.19   True        False         False      164m\n  kube-controller-manager                    4.13.19   True        False         False      172m\n  kube-scheduler                             4.13.19   True        False         False      172m\n  kube-storage-version-migrator              4.13.19   True        False         False      164m\n  machine-api                                4.13.19   True        False         False      171m\n  machine-approver                           4.13.19   True        False         False      174m\n  machine-config                             4.13.19   True        False         False      174m\n  marketplace                                4.13.19   True        False         False      174m\n  monitoring                                 4.13.19   True        False         False      162m\n  network                                    4.13.19   True        False         False      177m\n  node-tuning                                4.13.19   True        False         False      174m\n  openshift-apiserver                        4.13.19   True        False         False      165m\n  openshift-controller-manager               4.13.19   True        False         False      174m\n  openshift-samples                          4.13.19   True        False         False      168m\n  operator-lifecycle-manager                 4.13.19   True        False         False      174m\n  operator-lifecycle-manager-catalog         4.13.19   True        False         False      175m\n  operator-lifecycle-manager-packageserver   4.13.19   True        False         False      169m\n  service-ca                                 4.13.19   True        False         False      175m\n  storage                                    4.13.19   True        False         False      170m\n\n"})}),"\n",(0,t.jsx)(s.h2,{id:"how-to-create-storages",children:"How to create storages"}),"\n",(0,t.jsx)(s.h3,{id:"elastic-volume-service-evs",children:"Elastic Volume Service (EVS)"}),"\n",(0,t.jsx)(s.p,{children:"In OpenShift you can provision an EVS on Open Telekom Cloud dynamically:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Create a new ",(0,t.jsx)(s.strong,{children:"storage class"})," (e.g., ",(0,t.jsx)(s.code,{children:"ssd-csi"}),") with a volume type (e.g., ",(0,t.jsx)(s.code,{children:"SSD"}),"):"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: ssd-csi\nprovisioner: cinder.csi.openstack.org\nparameters:\n  type: SSD # Choose 'SSD' for 'Ultra high I/O', 'SAS' for 'High I/O', 'SATA' for 'Common I/O'\nreclaimPolicy: Delete\nallowVolumeExpansion: true\nvolumeBindingMode: WaitForFirstConsumer # PVC is PENDING until the Pod is created. As a result, the volume is created in the same AZ as the POD.\n\n"})}),"\n",(0,t.jsxs)(s.p,{children:["(Alternative) Create a storage class with specific AZ (e.g., ",(0,t.jsx)(s.code,{children:"eu-de-01"}),") so that volumes will be created only in this AZ:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: eu-de-01-ssd-csi\nprovisioner: cinder.csi.openstack.org\nparameters:\n  type: SSD # Choose 'SSD' for 'Ultra high I/O', 'SAS' for 'High I/O', 'SATA' for 'Common I/O'\nreclaimPolicy: Delete\nallowVolumeExpansion: true\nallowedTopologies:\n- matchLabelExpressions:\n  - key: topology.cinder.csi.openstack.org/zone\n    values:\n    - eu-de-01 # Choose 'eu-de-01', 'eu-de-02', 'eu-de-03'\n\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["Create a ",(0,t.jsx)(s.strong,{children:"PersistentVolumeClaim"})," (e.g., ",(0,t.jsx)(s.code,{children:"ssd-pvc"}),") with the storage class ",(0,t.jsx)(s.code,{children:"ssd-csi"}),":"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: ssd-pvc\n  namespace: <YOUR_NAMESPACE>\nspec:\n  storageClassName: ssd-csi\n  accessModes:\n    - ReadWriteOnce\n  volumeMode: Filesystem\n  resources:\n    requests:\n      storage: 10Gi\n\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["Create a Pod ",(0,t.jsx)(s.code,{children:"example"})," with the PersistentVolumeClaim ",(0,t.jsx)(s.code,{children:"ssd-pvc"}),":"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: example\n  labels:\n    app: httpd\n  namespace: <YOUR_NAMESPACE>\nspec:\n  securityContext:\n    runAsNonRoot: true\n    seccompProfile:\n      type: RuntimeDefault\n  containers:\n    - name: httpd\n      image: 'image-registry.openshift-image-registry.svc:5000/openshift/httpd:latest'\n      ports:\n        - containerPort: 8080\n      securityContext:\n        allowPrivilegeEscalation: false\n        capabilities:\n          drop:\n            - ALL\n      volumeMounts: # Add the following lines to the 'example' Pod to test the PVC\n        - name: ssd-volume\n          mountPath: /test\n  volumes:\n    - name: ssd-volume\n      persistentVolumeClaim:\n        claimName: ssd-pvc\n\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"On OpenShift console, see Pod is running:"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_pod.png",alt:"../_images/openshift_pod.png"})}),"\n",(0,t.jsx)(s.p,{children:"Figure 9. Pod example is running"}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"On Open Telekom Cloud, see EVS is created:"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_evs.png",alt:"../_images/openshift_evs.png"})}),"\n",(0,t.jsx)(s.p,{children:'Figure 10. A new EVS is created with the volume type "Ultra High I/O"'}),"\n",(0,t.jsx)(s.h3,{id:"scalable-file-service--sfs-turbo",children:"Scalable File Service & SFS Turbo"}),"\n",(0,t.jsxs)(s.p,{children:["You can create a SFS on Open Telekom Cloud manually and create a ",(0,t.jsx)(s.a,{href:"https://docs.openshift.com/container-platform/4.13/storage/persistent_storage/persistent-storage-nfs.html",children:"PersistentVolume using NFS"})," in OpenShift, which connects to SFS via NFS protocol:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to the ",(0,t.jsx)(s.a,{href:"https://console.otc.t-systems.com/",children:"webconsole of Open Telekom Cloud"})," and create a SFS or SFS Turbo:"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_sfs.png",children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_sfs.png",alt:"../_images/openshift_sfs.png"})})}),"\n",(0,t.jsx)(s.p,{children:"Figure 11. Create SFS via webconsole"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Choose the VPC and subnet of your OpenShift so that the SFS is created in the same subnet. The VPC ",(0,t.jsx)(s.code,{children:"cc-environment-openshift00"})," in this example was created by Cloud Create, which starts with the prefix ",(0,t.jsx)(s.code,{children:"cc"}),", followed by the environement name ",(0,t.jsx)(s.code,{children:"enviroment"})," and the application name ",(0,t.jsx)(s.code,{children:"openshift00"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Choose the security group sg-worker. This is the security group of the worker nodes."}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Copy the SFS endpoint"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_sfs2.png",alt:"../_images/openshift_sfs2.png"})}),"\n",(0,t.jsxs)(s.p,{children:["Figure 12. Copy the SFS endpoint ",(0,t.jsx)(s.code,{children:"10.0.207.136"})]}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["Create a PersistentVolume (e.g., ",(0,t.jsx)(s.code,{children:"sfs-pv"}),") with the SFS endpoint:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: sfs-pv\nspec:\n  capacity:\n    storage: 500Gi\n  accessModes:\n  - ReadWriteMany\n  nfs:\n    server: 10.0.207.136 # SFS endpoint\n    path: /\n  persistentVolumeReclaimPolicy: Retain\n\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["Create a PersistentVolumeClaim (e.g., ",(0,t.jsx)(s.code,{children:"sfs-pvc"}),") with the ",(0,t.jsx)(s.code,{children:"sfs-pv"}),":"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: sfs-pvc\n  namespace: <YOUR_NAMESPACE>\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 500Gi\n  volumeName: sfs-pv\n  storageClassName: "" # Important\n\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsxs)(s.li,{children:["Create a Pod to use ",(0,t.jsx)(s.code,{children:"sfs-pvc"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"tear-down",children:"Tear down"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["In Cloud Create, go to ",(0,t.jsx)(s.strong,{children:"Action"})," / ",(0,t.jsx)(s.strong,{children:"Undeploy"})," to delete the OpenShift cluster."]}),"\n",(0,t.jsx)(s.li,{children:"The PVC storages, which were created by OpenShift, will not be deleted automatically. You have to delete them manually."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_tear_down.png",alt:"../_images/openshift_tear_down.png"})}),"\n",(0,t.jsx)(s.p,{children:"Figure 12. Check PVC with Available status"}),"\n",(0,t.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Our ",(0,t.jsx)(s.a,{href:"https://github.com/opentelekomcloud-blueprints/tosca-service-catalogs/blob/main/templates/openshift/4.13/topology.yml",children:"OpenShift app template in TOSCA"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["How to create a ",(0,t.jsx)(s.a,{href:"https://docs.openshift.com/container-platform/4.13/storage/persistent_storage/persistent-storage-nfs.html",children:"PersistentVolume using NFS in OpenShift"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(96540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);