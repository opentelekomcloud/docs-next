"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[68371],{30360:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(74848),r=s(28453);const i={id:"migrating-from-other_clouds-to-cce",title:"Migrating Clusters from Other Clouds to CCE",tags:["cce","migration","minio","velero","obs"]},o="Migrating Clusters from Other Clouds to CCE",a={id:"best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce",title:"Migrating Clusters from Other Clouds to CCE",description:"Assume that you have deployed the WordPress on 3rd party cloud provider and created your own blog; this document will drive you through how to smoothly migrate an application from a managed Kubernetes cluster on that provider to a Open Telekom Cloud CCE in six easy steps without interrupting the service.",source:"@site/docs/best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce.md",sourceDirName:"best-practices/containers/cloud-container-engine",slug:"/best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce",permalink:"/docs-next/pr-preview/pr-150/docs/best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-150/docs/tags/cce"},{inline:!0,label:"migration",permalink:"/docs-next/pr-preview/pr-150/docs/tags/migration"},{inline:!0,label:"minio",permalink:"/docs-next/pr-preview/pr-150/docs/tags/minio"},{inline:!0,label:"velero",permalink:"/docs-next/pr-preview/pr-150/docs/tags/velero"},{inline:!0,label:"obs",permalink:"/docs-next/pr-preview/pr-150/docs/tags/obs"}],version:"current",frontMatter:{id:"migrating-from-other_clouds-to-cce",title:"Migrating Clusters from Other Clouds to CCE",tags:["cce","migration","minio","velero","obs"]},sidebar:"bestPracticesSidebar",previous:{title:"Auto Scaling Based on ELB Monitoring Metrics",permalink:"/docs-next/pr-preview/pr-150/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics"},next:{title:"Backing Up Kubernetes Objects of other Clusters",permalink:"/docs-next/pr-preview/pr-150/docs/best-practices/containers/cloud-container-engine/backup-kubernetes-objects"}},l={},c=[{value:"Solution Design",id:"solution-design",level:2},{value:"Migrating Data",id:"migrating-data",level:2},{value:"Migrating Databases and Storage",id:"migrating-databases-and-storage",level:3},{value:"Migrating Container Images",id:"migrating-container-images",level:3},{value:"Installing the Migration Tool",id:"installing-the-migration-tool",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing MinIO",id:"installing-minio",level:3},{value:"Installing Velero",id:"installing-velero",level:3},{value:"Migrating Resources in a Cluster",id:"migrating-resources-in-a-cluster",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Backing Up an Application in the Source Cluster",id:"backing-up-an-application-in-the-source-cluster",level:3},{value:"Restoring Applications in the Target Cluster",id:"restoring-applications-in-the-target-cluster",level:3},{value:"Preparing Object Storage and Velero",id:"preparing-object-storage-and-velero",level:2},{value:"Preparing Object Storage MinIO",id:"preparing-object-storage-minio",level:3},{value:"Preparing Velero",id:"preparing-velero",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"migrating-clusters-from-other-clouds-to-cce",children:"Migrating Clusters from Other Clouds to CCE"}),"\n",(0,t.jsx)(n.p,{children:"Assume that you have deployed the WordPress on 3rd party cloud provider and created your own blog; this document will drive you through how to smoothly migrate an application from a managed Kubernetes cluster on that provider to a Open Telekom Cloud CCE in six easy steps without interrupting the service."}),"\n",(0,t.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"image1",src:s(68986).A+"",width:"719",height:"512"}),"\n",(0,t.jsx)(n.img,{alt:"image1",src:s(70557).A+"",width:"731",height:"751"})]}),"\n",(0,t.jsx)(n.h2,{id:"migrating-data",children:"Migrating Data"}),"\n",(0,t.jsx)(n.h3,{id:"migrating-databases-and-storage",children:"Migrating Databases and Storage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Storage Migration: Create a bucket on OBS. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/object-storage-service/umn/obs_console_operation_guide/getting_started/creating_a_bucket.html",children:"Creating a Bucket"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"migrating-container-images",children:"Migrating Container Images"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Export the container images used in the other clusters: Pull the images to the client by referring to the operation guide of\nother Cloud Container Registry."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Upload the image files to Open Telekom Cloud SWR: Run the ",(0,t.jsx)(n.code,{children:"docker pull"})," command to push the image to Open Telekom\nCloud. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/software-repository-container/umn/image_management/uploading_an_image_through_the_client.html",children:"Uploading an Image Through the Client"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-migration-tool",children:"Installing the Migration Tool"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://velero.io/",children:"Velero"})," is an open-source backup and migration tool for Kubernetes\nclusters. It integrates the Persistent Volume(PV) data backup\ncapability of the Restic tool and can be used to back up Kubernetes\nresource objects (such as Deployments, Jobs, Services, and ConfigMaps)\nin the source cluster. Data in the PV mounted to the Pod are backed up\nand uploaded to the object storage. When a disruption or a major incident occurs or a migration\nis required, the target cluster can use Velero to obtain the\ncorresponding backup data from OBS and restore cluster resources as\nrequired."]}),"\n",(0,t.jsxs)(n.p,{children:["You need to prepare temporary object storage to store backup files before the\nmigration. Velero supports OBS or ",(0,t.jsx)(n.a,{href:"https://min.io/",children:"MinIO"})," as the object\nstorage (For more details about how to deploy MinIO, see ",(0,t.jsx)(n.a,{href:"#installing-minio",children:"Installing MinIO"}),"). OBS requires sufficient storage space for storing backup files.You can estimate the storage space based on your cluster scale and data volume. ",(0,t.jsx)(n.strong,{children:"You are advised to use OBS for backup"}),". For details about how to\ndeploy Velero, see ",(0,t.jsx)(n.a,{href:"#installing-velero",children:"Installing Velero"})]}),"\n",(0,t.jsxs)(n.p,{children:["CCE supports backup and restore using the ",(0,t.jsx)(n.strong,{children:"e-backup add-on"}),", which is\ncompatible with Velero and uses OBS as the storage backend. You can use\nVelero in on-premises clusters and use e-backup in CCE."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Without e-backup"}),": Install Velero in the source and target and\nmigrate resources by referring to ",(0,t.jsx)(n.a,{href:"#migrating-resources-in-a-cluster",children:"Migrating Resources in a Cluster (Velero)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"With e-backup"}),": Install Velero in the source cluster and use OBS as\nthe storage backend by following the instructions described in ",(0,t.jsx)(n.a,{href:"#installing-velero",children:"Installing Velero"}),", and install e-backup in the target CCE cluster and migrate resources by referring to ",(0,t.jsx)(n.a,{href:"#migrating-resources-in-a-cluster",children:"Migrating Resources in a Cluster (Velero)"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Kubernetes version of the source on-premises cluster must be\n1.10 or later, and the cluster can use DNS and Internet services\nproperly."}),"\n",(0,t.jsxs)(n.li,{children:["If you use OBS to store backup files, obtain the AK/SK of a user who\nhas the right to operate OBS. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/object-storage-service/api-ref/appendixes/obtaining_access_keys_ak_sk.html",children:"Obtaining Access Keys (AK/SK)"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If you use MinIO to store backup files, bind an EIP to the server\nwhere MinIO is installed and enable the API and console port of\nMinIO in the security group."}),"\n",(0,t.jsx)(n.li,{children:"The target CCE cluster has been created."}),"\n",(0,t.jsx)(n.li,{children:"The source cluster and target cluster must each have at least one\nidle node. It is recommended that the node specifications be 4 vCPUs\nand 8 GiB memory or higher."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installing-minio",children:"Installing MinIO"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://min.io/",children:"MinIO"})," is an open-source, high-performance object storage tool compatible\nwith the S3 API protocol. If MinIO is used to store backup files for\ncluster migration, you need a temporary server to deploy MinIO and\nprovide services for external systems. If you use OBS to store backup\nfiles, skip this section and go to ",(0,t.jsx)(n.a,{href:"#installing-velero",children:"Installing Velero"})]}),"\n",(0,t.jsx)(n.p,{children:"MinIO can be installed in any of the following locations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Temporary ECS outside a cluster. If the MinIO server is installed outside the cluster, backup files\nwill not be affected when a catastrophic fault occurs in the\ncluster."}),"\n",(0,t.jsxs)(n.li,{children:["Idle nodes in a cluster. You can remotely log in to a node to install the MinIO server or\ncontainerize MinIO. For details, see the ",(0,t.jsx)(n.a,{href:"https://velero.io/docs/v1.7/contributions/minio/#set-up-server",children:"official Velero\ndocumentation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsx)(n.p,{children:"For example, to containerize MinIO, do as follows:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Change the storage type (",(0,t.jsx)(n.code,{children:"empty dir"}),") in the YAML file\nprovided by Velero to ",(0,t.jsx)(n.code,{children:"HostPath"})," or ",(0,t.jsx)(n.code,{children:"Local"}),". Otherwise,\nbackup files will be permanently lost after the pod are restarted."]}),"\n",(0,t.jsxs)(n.li,{children:["Change the Service type to ",(0,t.jsx)(n.code,{children:"NodePort"})," or use other types of\nServices that support public network access to ensure that MinIO\ncan be accessed by external networks. Otherwise, backup files\ncannot be downloaded outside the cluster."]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Regardless of which deployment method is used, the server where MinIO is\ninstalled must have sufficient storage space, an EIP must be bound to\nthe server, and the MinIO service port must be enabled in the security\ngroup. Otherwise, backup files cannot be uploaded or downloaded."}),"\n",(0,t.jsx)(n.p,{children:"In this example, MinIO is installed on a temporary ECS outside the\ncluster."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download MinIO."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/minio\nmkdir /opt/miniodata\ncd /opt/minio\nwget https://dl.minio.io/server/minio/release/linux-amd64/minio\nchmod +x minio\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure the username and password of MinIO."}),"\n",(0,t.jsx)(n.p,{children:"The username and password set using this method are temporary\nenvironment variables and must be reset after the service is\nrestarted. Otherwise, the default root credential will be used to\ncreate the service."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export MINIO_ROOT_USER=minio\nexport MINIO_ROOT_PASSWORD=minio123\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a service. In the command, ",(0,t.jsx)(n.code,{children:"/opt/miniodata/"})," indicates the\nlocal disk path for MinIO to store data."]}),"\n",(0,t.jsxs)(n.p,{children:["The default API port of MinIO is ",(0,t.jsx)(n.code,{children:"9000"}),", and the console port is\nrandomly generated. You can use the ",(0,t.jsx)(n.code,{children:"\\--console-address"})," parameter\nto specify a console port."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'./minio server /opt/miniodata/ --console-address ":30840" &\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Enable the API and console ports in the firewall and security group\non the server where MinIO is to be installed. Otherwise, access to\nthe object bucket will fail."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use a browser to access ",(0,t.jsx)(n.code,{children:"http://<EIP of the node where MinIO resides>:30840"}),". The MinIO console page is displayed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installing-velero",children:"Installing Velero"}),"\n",(0,t.jsxs)(n.p,{children:["Go to the OBS or MinIO console and create a bucket named ",(0,t.jsx)(n.code,{children:"velero"})," to\nstore backup files. You can custom the bucket name, which must be used\nwhen installing Velero. Otherwise, the bucket cannot be accessed and the\nbackup fails."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Velero instances need to be installed and deployed in both the\n",(0,t.jsx)(n.strong,{children:"source and target clusters"}),". The installation procedures are the\nsame, which are used for backup and restoration, respectively."]}),"\n",(0,t.jsxs)(n.li,{children:["The master node of a CCE cluster does not provide a port for remote\nlogin. You can install Velero using ",(0,t.jsx)(n.code,{children:"kubectl"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If there are a large number of resources to back up, you are advised\nto adjust the CPU and memory resources of Velero and Restic to 1\nvCPU and 1 GiB memory or higher."}),"\n",(0,t.jsxs)(n.li,{children:["The object storage bucket for storing backup files must be\n",(0,t.jsx)(n.strong,{children:"empty"}),"."]}),"\n"]})}),"\n",(0,t.jsxs)(n.p,{children:["Download the latest, ",(0,t.jsx)(n.a,{href:"https://github.com/vmware-tanzu/velero/releases",children:"stable binary file"}),". This article uses\nVelero ",(0,t.jsx)(n.code,{children:"1.7.0"})," as an example. ",(0,t.jsx)(n.strong,{children:"The installation process in the source cluster is the same as that in the target cluster"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download the binary file of Velero 1.7.0."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/vmware-tanzu/velero/releases/download/v1.7.0/velero-v1.7.0-linux-amd64.tar.gz\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the Velero client."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tar -xvf velero-v1.7.0-linux-amd64.tar.gz\ncp ./velero-v1.7.0-linux-amd64/velero /usr/local/bin\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create the access key file ",(0,t.jsx)(n.strong,{children:"credentials-velero"})," for the backup\nobject storage."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vim credentials-velero\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace the AK/SK in the file based on the site requirements. When\nyou use OBS, you can obtain the AK/SK by referring to ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/object-storage-service/api-ref/appendixes/obtaining_access_keys_ak_sk.html",children:"Obtaining Access Keys (AK/SK)"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If MinIO is used, create an AK/SK pair in MinIO panel"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[default]\naws_access_key_id={AK}\naws_secret_access_key={SK}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Deploy the Velero server. Change the value of ",(0,t.jsx)(n.code,{children:"\\--bucket"})," to the\nname of the created object storage bucket. In this example, the\nbucket name is ",(0,t.jsx)(n.code,{children:"velero"}),". For more information about custom\ninstallation parameters, see ",(0,t.jsx)(n.a,{href:"https://velero.io/docs/v1.7/customize-installation/",children:"Customize Velero Install"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'velero install \\\n  --provider aws \\\n  --plugins velero/velero-plugin-for-aws:v1.2.1 \\\n  --bucket velero \\\n  --secret-file ./credentials-velero \\\n  --use-restic \\\n  --use-volume-snapshots=false \\\n  --backup-location-config region=eu-de,s3ForcePathStyle="true",s3Url=http://obs.eu-de.otc.t-systems.com\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--provider"}),(0,t.jsx)(n.td,{children:"Vendor who provides the plug-in."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--plugins"}),(0,t.jsx)(n.td,{children:"API component compatible with AWS S3. Both OBS and MinIO support the S3 protocol."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--bucket"}),(0,t.jsx)(n.td,{children:"Name of the object storage bucket for storing backup files. The bucket must be created in advance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--secret-file"}),(0,t.jsxs)(n.td,{children:["Secret file for accessing the object storage, that is, the ",(0,t.jsx)(n.strong,{children:"credentials-velero"})," file created before"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--use-restic"}),(0,t.jsxs)(n.td,{children:["Whether to use ",(0,t.jsx)(n.strong,{children:"Restic"})," to support PV data backup. You are advised to enable this function. Otherwise, storage volume resources cannot be backed up."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--use-volume-snapshots"}),(0,t.jsx)(n.td,{children:"Whether to create the VolumeSnapshotLocation object for PV snapshot, which requires support from the snapshot program. Set this parameter to false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--backup-location-config"}),(0,t.jsxs)(n.td,{children:["OBS bucket configurations, including ",(0,t.jsx)(n.code,{children:"region"}),", ",(0,t.jsx)(n.code,{children:"s3ForcePathStyle"}),", and ",(0,t.jsx)(n.code,{children:"s3Url"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"region"}),(0,t.jsxs)(n.td,{children:["Region to which object storage bucket belongs.  If OBS is used, set this parameter according to your region, for example, ",(0,t.jsx)(n.code,{children:"eu-nl"}),". If MinIO is used, set this parameter to minio."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s3ForcePathStyle"}),(0,t.jsx)(n.td,{children:"The value true indicates that the S3 file path format is used."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s3Url"}),(0,t.jsxs)(n.td,{children:["API access address of the object storage bucket.  If OBS is used, set this parameter to ",(0,t.jsx)(n.code,{children:"http://obs.{region}.otc.t-systems.com"})," (region indicates the region where the object storage bucket is located). For example, if the region is Germany (",(0,t.jsx)(n.code,{children:"eu-de"}),"), the value is ",(0,t.jsx)(n.code,{children:"http://obs.eu-de.otc.t-systems.com"}),". If MinIO is used, set this parameter to ",(0,t.jsx)(n.code,{children:"http://{EIP of the node where minio is located}:9000"}),". The value of this parameter is determined based on the IP address and port of the node where MinIO is installed.   ",(0,t.jsx)(n.strong,{children:"Note"}),": The access port in s3Url must be set to the API port of MinIO instead of the console port. The default API port of MinIO is ",(0,t.jsx)(n.code,{children:"9000"}),". To access MinIO installed outside the cluster, enter the public IP address of MinIO."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table 1"})," Installation parameters of Velero"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["By default, a namespace named ",(0,t.jsx)(n.code,{children:"velero"})," is created for the Velero\ninstance. Run the following command to view the pod status:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n velero\nNAME                   READY   STATUS    RESTARTS   AGE\nrestic-rn29c           1/1     Running   0          16s\nvelero-c9ddd56-tkzpk   1/1     Running   0          16s\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"To prevent memory insufficiency during backup in the actual\nproduction environment, change the CPU and memory allocated to\nRestic and Velero."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the interconnection between Velero and the object storage and\nensure that the status is ",(0,t.jsx)(n.code,{children:"Available"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ velero backup-location get\nNAME      PROVIDER   BUCKET/PREFIX   PHASE       LAST VALIDATED                  ACCESS MODE   DEFAULT\ndefault   aws        velero          Available   2021-10-22 15:21:12 +0800 CST   ReadWrite     true\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"migrating-resources-in-a-cluster",children:"Migrating Resources in a Cluster"}),"\n",(0,t.jsx)(n.p,{children:"WordPress is used as an example to describe how to migrate an\napplication from a Kubernetes cluster to a CCE cluster. The WordPress\napplication consists of the WordPress and MySQL components, which are\ncontainerized. The two components are bound to two local storage volumes\nof the Local type respectively and provide external access through the\nNodePort Service."}),"\n",(0,t.jsxs)(n.p,{children:["Before the migration, use a browser to access the WordPress site, create\na site named ",(0,t.jsx)(n.strong,{children:"Migrate to CCE"}),", and publish an article to verify the\nintegrity of PV data after the migration. The article published in\nWordPress will be stored in the ",(0,t.jsx)(n.code,{children:"wp_posts"})," table of the MySQL\ndatabase. If the migration is successful, all contents in the database\nwill be migrated to the new cluster. You can verify the PV data\nmigration based on the migration result."]}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Before the migration, clear the abnormal pod resources in the source\ncluster. If the pod is in the abnormal state and has a PVC mounted,\nthe PVC is in the pending state after the cluster is migrated."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that the cluster on the CCE side does not have the same\nresources as the cluster to be migrated because Velero does not\nrestore the same resources by default."}),"\n",(0,t.jsx)(n.li,{children:"To ensure that container images can be properly pulled after cluster\nmigration, migrate the images to SWR."}),"\n",(0,t.jsxs)(n.li,{children:["CCE ",(0,t.jsx)(n.strong,{children:"does not"})," support EVS disks of the ",(0,t.jsx)(n.code,{children:"ReadWriteMany"})," type. If\nresources of this type exist in the source cluster, change the\nstorage type to ",(0,t.jsx)(n.code,{children:"ReadWriteOnce"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Velero integrates the Restic tool to back up and restore storage\nvolumes. Currently, the storage volumes of the HostPath type are not\nsupported. For details, see ",(0,t.jsx)(n.a,{href:"https://velero.io/docs/v1.7/restic/#limitations",children:"Restic Restrictions"}),". To\nback up storage volumes of this type, replace the ",(0,t.jsx)(n.code,{children:"hostPath"})," volumes\nwith ",(0,t.jsx)(n.code,{children:"local"})," volumes."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["If a backup task involves storage of the\n",(0,t.jsx)(n.code,{children:"HostPath"})," type, the storage volumes of this type will be\nautomatically skipped and a warning message will be generated. This\nwill not cause a backup failure."]})}),"\n",(0,t.jsx)(n.h3,{id:"backing-up-an-application-in-the-source-cluster",children:"Backing Up an Application in the Source Cluster"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) To back up the data of a specified storage volume in the\npod, add an annotation to the pod. The annotation template is as\nfollows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n <namespace> annotate <pod/pod_name> backup.velero.io/backup-volumes=<volume_name_1>,<volume_name_2>,...\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\\<namespace\\>"}),": namespace where the pod is located."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\\<pod_name\\>"}),": pod name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\\<volume_name\\>"}),": name of the persistent volume mounted to\nthe pod. You can run the ",(0,t.jsx)(n.code,{children:"describe"})," statement to query the pod\ninformation. The ",(0,t.jsx)(n.code,{children:"Volume"})," field indicates the names of all\npersistent volumes attached to the pod."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Add annotations to the pods of WordPress and MySQL. The pod names\nare something like ",(0,t.jsx)(n.code,{children:"wordpress-758fbf6fc7-s7fsr"})," and\n",(0,t.jsx)(n.code,{children:"mysql-5ffdfbc498-c45lh"}),". As long as the pods are in the default namespace\n",(0,t.jsx)(n.code,{children:"default"}),", the ",(0,t.jsx)(n.code,{children:"-n \\<NAMESPACE\\>"})," parameter can be omitted."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl annotate pod/wordpress-758fbf6fc7-s7fsr backup.velero.io/backup-volumes=wp-storage\nkubectl annotate pod/mysql-5ffdfbc498-c45lh backup.velero.io/backup-volumes=mysql-storage\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Back up the application. During the backup, you can specify\nresources based on parameters. If no parameter is added, the entire\ncluster resources are backed up by default. For details about the\nparameters, see ",(0,t.jsx)(n.a,{href:"https://velero.io/docs/v1.7/resource-filtering/",children:"Resource filtering"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\\--default-volumes-to-restic"}),": indicates that Restic is used\nto back up all storage volumes mounted to a pod. ",(0,t.jsx)(n.code,{children:"HostPath"}),"\nvolumes are not supported. If this parameter is left blank, the\nstorage volume specified by annotation in\ncce_bestpractice_0024__en-us_topic_0000001171703796_li686918502812> is backed up by default. This parameter is available\nonly if ",(0,t.jsx)(n.code,{children:"\\--use-restic"})," is specified during ",(0,t.jsx)(n.a,{href:"#installing-velero",children:"Velero Installation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"velero backup create <backup-name> --default-volumes-to-restic\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\\--include-namespaces"}),": backs up resources in a specified namespace."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"velero backup create <backup-name> --include-namespaces <namespace>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\\--include-resources"}),": backs up the specified resources."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"velero backup create <backup-name> --include-resources deployments\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\\--selector"}),": backs up resources that match the selector."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"velero backup create <backup-name> --selector <key>=<value>\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In this section, resources in the namespace ",(0,t.jsx)(n.code,{children:"default"})," are backed\nup. ",(0,t.jsx)(n.code,{children:"wordpress-backup"})," is the backup name. Specify the same backup\nname when restoring applications. The following is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"velero backup create wordpress-backup --include-namespaces default --default-volumes-to-restic\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the following information is displayed, the backup task is ",(0,t.jsx)(n.strong,{children:"successfully"})," created:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'Backup request "wordpress-backup" submitted successfully. Run `velero backup describe wordpress-backup` or `velero backup logs wordpress-backup` for more details.\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the backup status."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"velero backup get\n"})}),"\n",(0,t.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NAME               STATUS      ERRORS   WARNINGS   CREATED                         EXPIRES   STORAGE LOCATION   SELECTOR\nwordpress-backup   Completed   0        0          2021-10-14 15:32:07 +0800 CST   29d       default            <none>\n"})}),"\n",(0,t.jsx)(n.p,{children:"In addition, you can go to the object bucket to view the backup\nfiles. The backups path is the application resource backup path, and\nthe restic path is the PV data backup path."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image1",src:s(98219).A+"",width:"2528",height:"666"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"restoring-applications-in-the-target-cluster",children:"Restoring Applications in the Target Cluster"}),"\n",(0,t.jsxs)(n.p,{children:["The storage infrastructure of an on-premises cluster is different from\nthat of a cloud cluster. After the cluster is migrated, PVs cannot be\nmounted to pods. Therefore, during the migration, update the storage\nclass of the target cluster to shield the differences of underlying\nstorage interfaces between the two clusters when creating a workload and\nrequest storage resources of the corresponding type. For details, see\n",(0,t.jsx)(n.a,{href:"./updating-resources#updating-the-storage-class",children:"Updating the Storage Class"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"ConfigMap"})," in the CCE cluster and map the storage class used\nby the source cluster to the default storage class of the CCE\ncluster."]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the storage class name of the source cluster is\n",(0,t.jsx)(n.code,{children:"default"})," and the storage class name of the target cluster is\n",(0,t.jsx)(n.code,{children:"csi-disk"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When an application containing PV data is restored in a CCE\ncluster, the defined storage class dynamically creates and\nmounts storage resources (such as EVS volumes) based on the PVC."}),"\n",(0,t.jsxs)(n.li,{children:["The storage resources of the cluster can be changed as required,\nnot limited to EVS volumes. To mount other types of storage,\nsuch as file storage and object storage, see\n",(0,t.jsx)(n.a,{href:"./updating-resources#updating-the-storage-class",children:"Updating the Storage Class"})]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"YAML file for the migrated cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\nname: change-storageclass-plugin-config\nnamespace: velero\nlabels:\n   app.kubernetes.io/name: velero\n   velero.io/plugin-config: "true"\n   velero.io/change-storage-class: RestoreItemAction\ndata:\n   default:csi-disk\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the Velero tool to create a restore and specify a backup named\n",(0,t.jsx)(n.code,{children:"wordpress-backup"})," to restore the WordPress application to the CCE\ncluster."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"velero restore create --from-backup wordpress-backup\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can run the ",(0,t.jsx)(n.code,{children:"velero restore get"})," statement to view the\napplication restoration status."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After the restoration is complete, check whether the application is\nrunning properly. If other adaptation problems may occur, rectify\nthe fault by following the procedure described in\n",(0,t.jsx)(n.a,{href:"./updating-resources",children:"Updating Resources Accordingly"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"preparing-object-storage-and-velero",children:"Preparing Object Storage and Velero"}),"\n",(0,t.jsx)(n.h3,{id:"preparing-object-storage-minio",children:"Preparing Object Storage MinIO"}),"\n",(0,t.jsx)(n.p,{children:"Prepare the object storage and save its AK/SK."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the MinIO."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Binary installation\nmkdir /opt/minio\nmkdir /opt/miniodata\ncd /opt/minio\nwget https://dl.minio.io/server/minio/release/linux-amd64/minio\nchmod +x minio\nexport MINIO_ACCESS_KEY=minio\nexport MINIO_SECRET_KEY=minio123\n./minio server /opt/miniodata/ &\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"http://<EIP of the node where MinIO is deployed>:9000"})," in the address box of a browser. Note that the corresponding ports on the firewall and security group must be enabled."]}),"\n",(0,t.jsxs)(n.p,{children:["To release the MinIO service as a service that can be accessed from outside the cluster, change the service type in ",(0,t.jsx)(n.code,{children:"00-minio-deployment.yaml"})," to ",(0,t.jsx)(n.code,{children:"NodePort"})," or ",(0,t.jsx)(n.code,{children:"LoadBalancer"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl apply -f ./velero-v1.4.0-linux-amd64/examples/minio/00-minio-deployment.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a bucket, which will be used in the migration."}),"\n",(0,t.jsxs)(n.p,{children:["Open the web page of the MinIO service. Use ",(0,t.jsx)(n.code,{children:"MINIO_ACCESS_KEY"}),"/",(0,t.jsx)(n.code,{children:"MINIO_SECRET_KEY"})," to log in to the MinIO service. In this example, use ",(0,t.jsx)(n.code,{children:"minio"}),"/",(0,t.jsx)(n.code,{children:"minio123"}),". Click ",(0,t.jsx)(n.em,{children:"Create bucket"}),". In this example, create a bucket named ",(0,t.jsx)(n.code,{children:"velero"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"preparing-velero",children:"Preparing Velero"}),"\n",(0,t.jsxs)(n.p,{children:["Perform the following operations on other cluster and CCE nodes that can run ",(0,t.jsx)(n.code,{children:"kubectl"})," commands:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the latest stable version of the migration tool from ",(0,t.jsx)(n.a,{href:"https://github.com/heptio/velero/releases",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This article uses ",(0,t.jsx)(n.strong,{children:"velero-v1.4.0-linux-amd64.tar.gz"})," as an example."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the Velero client."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/ack2cce\ncd /opt/ack2cce\ntar -xvf velero-v1.4.0-linux-amd64.tar.gz -C /opt/ack2cce\ncp /opt/ack2cce/velero-v1.4.0-linux-amd64/velero /usr/local/bin\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the Velero server."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Prepare the MinIO authentication file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /opt/ack2cce\nvi credentials-velero\n\n[default]\naws_access_key_id = minio\naws_secret_access_key = minio123\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the Velero server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'velero install \\\n --provider aws \\\n --plugins velero/velero-plugin-for-aws:v1.0.0 \\\n --bucket velero \\\n --secret-file ./credentials-velero \\\n --use-restic \\\n --use-volume-snapshots=false \\\n --backup-location-config region=minio,s3ForcePathStyle="true",s3Url=http://{EIP of the node where minio runs}:9000\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"s3Url"})," must be set to the actual MinIO address."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},68986:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001402114285-a22a695a80314852081dc4ac62700377.png"},98219:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001480191270-adc2492d8eb498d182134039db9474b5.png"},70557:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0264642164-6d1ea00afa15183e93982d174884c95b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);