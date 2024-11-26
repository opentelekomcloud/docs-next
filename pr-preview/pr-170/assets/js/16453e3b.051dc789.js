"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[36588],{99817:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(74848),t=r(28453);const i={id:"restore-kubernetes-objects",title:"Restoring Kubernetes Objects in a CCE Cluster",tags:["cce","migration","azure","velero","obs"]},o="Restoring Kubernetes Objects in a CCE Cluster",c={id:"best-practices/containers/cloud-container-engine/restore-kubernetes-objects",title:"Restoring Kubernetes Objects in a CCE Cluster",description:"Creating a StorageClass",source:"@site/docs/best-practices/containers/cloud-container-engine/restore-kubernetes-objects.md",sourceDirName:"best-practices/containers/cloud-container-engine",slug:"/best-practices/containers/cloud-container-engine/restore-kubernetes-objects",permalink:"/docs-next/pr-preview/pr-170/docs/best-practices/containers/cloud-container-engine/restore-kubernetes-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/containers/cloud-container-engine/restore-kubernetes-objects.md",tags:[{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-170/docs/tags/cce"},{inline:!0,label:"migration",permalink:"/docs-next/pr-preview/pr-170/docs/tags/migration"},{inline:!0,label:"azure",permalink:"/docs-next/pr-preview/pr-170/docs/tags/azure"},{inline:!0,label:"velero",permalink:"/docs-next/pr-preview/pr-170/docs/tags/velero"},{inline:!0,label:"obs",permalink:"/docs-next/pr-preview/pr-170/docs/tags/obs"}],version:"current",frontMatter:{id:"restore-kubernetes-objects",title:"Restoring Kubernetes Objects in a CCE Cluster",tags:["cce","migration","azure","velero","obs"]},sidebar:"bestPracticesSidebar",previous:{title:"Backing Up Kubernetes Objects of other Clusters",permalink:"/docs-next/pr-preview/pr-170/docs/best-practices/containers/cloud-container-engine/backup-kubernetes-objects"},next:{title:"Updating Resources Accordingly",permalink:"/docs-next/pr-preview/pr-170/docs/best-practices/containers/cloud-container-engine/updating-resources"}},a={},l=[{value:"Creating a StorageClass",id:"creating-a-storageclass",level:2},{value:"Restoring the Application",id:"restoring-the-application",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"restoring-kubernetes-objects-in-a-cce-cluster",children:"Restoring Kubernetes Objects in a CCE Cluster"}),"\n",(0,n.jsx)(s.h2,{id:"creating-a-storageclass",children:"Creating a StorageClass"}),"\n",(0,n.jsx)(s.p,{children:"In this example, the WordPress application uses Azure SSD persistent\ndata volumes, which need to be replaced with Open Telekom Cloud SSDs."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"StorageClass"})," used in this example is ",(0,n.jsx)(s.code,{children:"azurefile-csi"}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"You must"})," create a ",(0,n.jsx)(s.code,{children:"StorageClass"})," with the ",(0,n.jsx)(s.strong,{children:"exact same name"})," as in the other cloud provider and use it in Open Telekom Cloud. In this case SSDs as backend storage media will be mapped to a new ",(0,n.jsx)(s.code,{children:"StorageClass"})," that has the same name, ",(0,n.jsx)(s.code,{children:"azurefile-csi"}),", as their equivalent in Azure."]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",metastring:'title="cce-sc-csidisk.yaml"',children:'allowVolumeExpansion: true\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: azurefile-csi\n  selfLink: /apis/storage.k8s.io/v1/storageclasses/csi-disk\nparameters:\n  csi.storage.k8s.io/csi-driver-name: disk.csi.everest.io\n  csi.storage.k8s.io/fstype: ext4\n  everest.io/disk-volume-type: SSD\n  everest.io/passthrough: "true"\nprovisioner: everest-csi-provisioner\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"[root@ccenode-roprr hujun]# kubectl create -f cce-sc-csidisk.yaml\n"})}),"\n",(0,n.jsx)(s.h2,{id:"restoring-the-application",children:"Restoring the Application"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'[root@ccenode-roprr hujun]# velero restore create --from-backup   wordpress-backup\nRestore request "wordpress-backup-20200707212519" submitted successfully.\nRun `velero restore describe wordpress-backup-20200707212519` or `velero restore logs wordpress-backup-20200707212519` for more details\n\n[root@ccenode-roprr hujun]# velero restore get\nNAME  BACKUP STATUS  WARNINGS   ERRORS   CREATED SELECTOR\nwordpress-backup-20200708112940   wordpress-backup   Completed   0  02020-07-08 11:29:42 +0800 CST   <none>\n'})}),"\n",(0,n.jsx)(s.p,{children:"Check the running status of the WordPress application. Make adaptation\nif issues such as image pulling failures and service access failures\noccur."})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var n=r(96540);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);