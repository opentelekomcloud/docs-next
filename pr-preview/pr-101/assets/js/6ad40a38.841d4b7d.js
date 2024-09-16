"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[86456],{84219:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(74848),i=s(28453);const r={id:"updating-resources",title:"Updating Resources Accordingly",tags:["cce","migration","minio","velero","obs","swr"]},a="Updating Resources Accordingly",o={id:"best-practices/containers/cloud-container-engine/updating-resources",title:"Updating Resources Accordingly",description:"Updating Images",source:"@site/docs/best-practices/containers/cloud-container-engine/updating-resources.md",sourceDirName:"best-practices/containers/cloud-container-engine",slug:"/best-practices/containers/cloud-container-engine/updating-resources",permalink:"/docs-next/pr-preview/pr-101/docs/best-practices/containers/cloud-container-engine/updating-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/akyriako/docs-next/tree/main/docs/best-practices/containers/cloud-container-engine/updating-resources.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-101/docs/tags/cce"},{inline:!0,label:"migration",permalink:"/docs-next/pr-preview/pr-101/docs/tags/migration"},{inline:!0,label:"minio",permalink:"/docs-next/pr-preview/pr-101/docs/tags/minio"},{inline:!0,label:"velero",permalink:"/docs-next/pr-preview/pr-101/docs/tags/velero"},{inline:!0,label:"obs",permalink:"/docs-next/pr-preview/pr-101/docs/tags/obs"},{inline:!0,label:"swr",permalink:"/docs-next/pr-preview/pr-101/docs/tags/swr"}],version:"current",frontMatter:{id:"updating-resources",title:"Updating Resources Accordingly",tags:["cce","migration","minio","velero","obs","swr"]},sidebar:"bestPracticesSidebar",previous:{title:"Restoring Kubernetes Objects in a CCE Cluster",permalink:"/docs-next/pr-preview/pr-101/docs/best-practices/containers/cloud-container-engine/restore-kubernetes-objects"},next:{title:"Debugging and Starting the Application",permalink:"/docs-next/pr-preview/pr-101/docs/best-practices/containers/cloud-container-engine/debugging-and-starting-the-application"}},c={},l=[{value:"Updating Images",id:"updating-images",level:2},{value:"Updating Services",id:"updating-services",level:2},{value:"Updating the Storage Class",id:"updating-the-storage-class",level:2},{value:"Method 1: Creating a ConfigMap mapping",id:"method-1-creating-a-configmap-mapping",level:3},{value:"Method 2: Creating a storage class with the same name",id:"method-2-creating-a-storage-class-with-the-same-name",level:3},{value:"Updating Databases",id:"updating-databases",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"updating-resources-accordingly",children:"Updating Resources Accordingly"}),"\n",(0,t.jsx)(n.h2,{id:"updating-images",children:"Updating Images"}),"\n",(0,t.jsxs)(n.p,{children:["The WordPress and MySQL images used in this example can be pulled from\nSWR. Therefore, the image pull failure (",(0,t.jsx)(n.code,{children:"ErrImagePull"}),") will not occur. If\nthe application to be migrated is created from a private image, perform\nthe following steps to update the image:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Migrate the image resources to SWR. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/usermanual/swr/swr_01_0011.html",children:"Uploading an Image Through the Client"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to the SWR console and obtain the image path used after the\nmigration."}),"\n",(0,t.jsx)(n.p,{children:"The image path is in the following format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"'swr.{Region}.otc.t-systems.com/{Organization name}/{Image name}:{Tag}'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the following command to modify the workload and replace the\n",(0,t.jsx)(n.code,{children:"image"})," field in the YAML file with the image path:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl edit deploy wordpress\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the running status of the workload."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating-services",children:"Updating Services"}),"\n",(0,t.jsxs)(n.p,{children:["After the cluster is migrated, the Service of the source cluster may\nfail to take effect. You can perform the following steps to update the\nService. If ingresses are configured in the source cluster, connect the\nnew cluster to ELB again after the migration. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/en-us/usermanual2/cce/cce_10_0252.html",children:"Using kubectl to Create an ELB Ingress"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connect to the cluster using ",(0,t.jsx)(n.code,{children:"kubectl"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Edit the YAML file of the corresponding Service to change the\nService type and port number."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl edit svc wordpress\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To update load balancer resources, connect to ELB again. Add the\n",(0,t.jsx)(n.code,{children:"annotations"})," by following the procedure described in ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/en-us/usermanual2/cce/cce_10_0014.html",children:"LoadBalancer"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"annotations:\n  kubernetes.io/elb.class: union # Shared load balancer\n  kubernetes.io/elb.id: 9d06a39d-xxxx-xxxx-xxxx-c204397498a3    # Load balancer ID, which can be queried on the ELB console.\n  kubernetes.io/elb.subnet-id: f86ba71c-xxxx-xxxx-xxxx-39c8a7d4bb36    # ID of the cluster where the subnet resides\n  kubernetes.io/session-affinity-mode: SOURCE_IP    # Enable the sticky session based on the source IP address.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use a browser to check whether the Service is available."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-storage-class",children:"Updating the Storage Class"}),"\n",(0,t.jsx)(n.p,{children:"As the storage infrastructures of clusters may be different, storage\nvolumes cannot be mounted to the target cluster. You can use either of\nthe following methods to update the volumes:"}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:"Both update methods can be performed only before the application is\nrestored in the target cluster. Otherwise, PV data resources may fail to\nbe restored. In this case, use Velero to restore applications after the\nstorage class update is complete."})}),"\n",(0,t.jsx)(n.h3,{id:"method-1-creating-a-configmap-mapping",children:"Method 1: Creating a ConfigMap mapping"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"ConfigMap"})," in the CCE cluster and map the storage class used\nby the source cluster to the default storage class of the CCE\ncluster."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: change-storageclass-plugin-config\n  namespace: velero\n  labels:\n    app.kubernetes.io/name: velero\n    velero.io/plugin-config: "true"\n    velero.io/change-storage-class: RestoreItemAction\ndata:\n  {Storage class name01 in the source cluster}: {Storage class name01 in the target cluster}\n  {Storage class name02 in the source cluster}: {Storage class name02 in the target cluster}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to apply the ConfigMap configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create -f change-storage-class.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"method-2-creating-a-storage-class-with-the-same-name",children:"Method 2: Creating a storage class with the same name"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to query the default storage class\nsupported by CCE:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get sc\n"})}),"\n",(0,t.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NAME                PROVISIONER                     RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\ncsi-disk            everest-csi-provisioner         Delete          Immediate              true                   3d23h\ncsi-disk-topology   everest-csi-provisioner         Delete          WaitForFirstConsumer   true                   3d23h\ncsi-nas             everest-csi-provisioner         Delete          Immediate              true                   3d23h\ncsi-obs             everest-csi-provisioner         Delete          Immediate              false                  3d23h\ncsi-sfsturbo        everest-csi-provisioner         Delete          Immediate              true                   3d23h\n\n  Storage Class       Storage Resource\n  ------------------- --------------------------\n  csi-disk            EVS\n  csi-disk-topology   EVS with delayed binding\n  csi-nas             SFS\n  csi-obs             OBS\n  csi-sfsturbo        SFS Turbo\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to export the required storage class\ndetails in YAML format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get sc <storageclass-name> -o=yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy the YAML file and create a new storage class."}),"\n",(0,t.jsx)(n.p,{children:"Change the storage class name to the name used in the source cluster\nto call basic storage resources of the cloud."}),"\n",(0,t.jsxs)(n.p,{children:["The YAML file of csi-obs is used as an example. Delete the\nunnecessary information in italic under the ",(0,t.jsx)(n.code,{children:"metadata"})," field and\nmodify the information in bold. You are advised not to modify other\nparameters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  creationTimestamp: "2021-10-18T06:41:36Z"\n  name: <your_storageclass_name>     # Use the name of the storage class used in the source cluster.\n  resourceVersion: "747"\n  selfLink: /apis/storage.k8s.io/v1/storageclasses/csi-obs\n  uid: 4dbbe557-ddd1-4ce8-bb7b-7fa15459aac7\nparameters:\n  csi.storage.k8s.io/csi-driver-name: obs.csi.everest.io\n  csi.storage.k8s.io/fstype: obsfs\n  everest.io/obs-volume-type: STANDARD\nprovisioner: everest-csi-provisioner\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["SFS Turbo file systems cannot be directly created using\n",(0,t.jsx)(n.code,{children:"StorageClass"}),". Go to the SFS Turbo console to create SFS Turbo\nfile systems that belong to the same VPC subnet and have inbound\nports (",(0,t.jsx)(n.code,{children:"111"}),", ",(0,t.jsx)(n.code,{children:"445"}),", ",(0,t.jsx)(n.code,{children:"2049"}),", ",(0,t.jsx)(n.code,{children:"2051"}),", ",(0,t.jsx)(n.code,{children:"2052"}),", and ",(0,t.jsx)(n.code,{children:"20048"}),") enabled in the\nsecurity group."]}),"\n",(0,t.jsxs)(n.li,{children:["CCE ",(0,t.jsx)(n.strong,{children:"does not"})," support EVS disks of the ",(0,t.jsx)(n.code,{children:"ReadWriteMany"})," type. If\nresources of this type exist in the source cluster, change the\nstorage type to ",(0,t.jsx)(n.code,{children:"ReadWriteOnce"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restore the cluster application by referring to\n",(0,t.jsx)(n.a,{href:"./migrating-from-other_clouds-to-cce#restoring-applications-in-the-target-cluster",children:"Restoring Applications in the Target Cluster"})," and check whether the PVC is successfully created."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pvc\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the command output, the ",(0,t.jsx)(n.code,{children:"VOLUME"})," column indicates the name of\nthe PV automatically created using the storage class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NAME   STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npvc    Bound    pvc-4c8e655a-1dbc-4897-ae6c-446b502f5e77   5Gi        RWX            local          13s\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating-databases",children:"Updating Databases"}),"\n",(0,t.jsx)(n.p,{children:"In this example, the database is a local MySQL database and does not\nneed to be reconfigured after the migration."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the RDS instance ",(0,t.jsx)(n.strong,{children:"is in the same VPC"})," as the CCE cluster, it can be\naccessed using the private IP address. Otherwise, it can only be\naccessed only through public networks by binding an EIP. You are\nadvised to use the private network access mode for high security and\ngood RDS performance."]}),"\n",(0,t.jsx)(n.li,{children:"Ensure that the inbound rule of the security group to which RDS\nbelongs has been enabled for the cluster. Otherwise, the connection\nwill fail."}),"\n"]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Log in to the ",(0,t.jsx)(n.em,{children:"RDS console"})," and obtain the private IP address and port\nnumber of the DB instance on the ",(0,t.jsx)(n.em,{children:"Basic Information"})," page."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to modify the WordPress workload:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl edit deploy wordpress\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Set the environment variables in the ",(0,t.jsx)(n.code,{children:"env"})," field."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WORDPRESS_DB_HOST"}),": address and port number used for accessing the database, that is, the internal network address and port number obtained in the previous step."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WORDPRESS_DB_USER"}),": username for accessing the database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WORDPRESS_DB_PASSWORD"}),": password for accessing the database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WORDPRESS_DB_NAME"}),": name of the database to be connected."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check whether the RDS database is properly connected."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);