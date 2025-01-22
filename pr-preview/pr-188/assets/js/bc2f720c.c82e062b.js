"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[60166],{92262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"best-practices/containers/cloud-container-engine/backup-kubernetes-objects","title":"Backing Up Kubernetes Objects of other Clusters","description":"1.  To back up a WordPress application with PV data, add an annotation","source":"@site/docs/best-practices/containers/cloud-container-engine/backup-kubernetes-objects.md","sourceDirName":"best-practices/containers/cloud-container-engine","slug":"/best-practices/containers/cloud-container-engine/backup-kubernetes-objects","permalink":"/docs-next/pr-preview/pr-188/docs/best-practices/containers/cloud-container-engine/backup-kubernetes-objects","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/containers/cloud-container-engine/backup-kubernetes-objects.md","tags":[{"inline":true,"label":"cce","permalink":"/docs-next/pr-preview/pr-188/docs/tags/cce"},{"inline":true,"label":"migration","permalink":"/docs-next/pr-preview/pr-188/docs/tags/migration"},{"inline":true,"label":"velero","permalink":"/docs-next/pr-preview/pr-188/docs/tags/velero"},{"inline":true,"label":"obs","permalink":"/docs-next/pr-preview/pr-188/docs/tags/obs"}],"version":"current","frontMatter":{"id":"backup-kubernetes-objects","title":"Backing Up Kubernetes Objects of other Clusters","tags":["cce","migration","velero","obs"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Migrating Clusters from Other Clouds to CCE","permalink":"/docs-next/pr-preview/pr-188/docs/best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce"},"next":{"title":"Restoring Kubernetes Objects in a CCE Cluster","permalink":"/docs-next/pr-preview/pr-188/docs/best-practices/containers/cloud-container-engine/restore-kubernetes-objects"}}');var r=t(74848),o=t(28453);const c={id:"backup-kubernetes-objects",title:"Backing Up Kubernetes Objects of other Clusters",tags:["cce","migration","velero","obs"]},a="Backing Up Kubernetes Objects of other Clusters",i={},p=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"backing-up-kubernetes-objects-of-other-clusters",children:"Backing Up Kubernetes Objects of other Clusters"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To back up a WordPress application with PV data, add an ",(0,r.jsx)(n.code,{children:"annotation"}),"\nto the corresponding pod. If you do not need to back up the PV data, skip this step."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# kubectl -n YOUR_POD_NAMESPACE annotate pod/YOUR_POD_NAME backup.velero.io/backup-volumes=YOUR_VOLUME_NAME_1,YOUR_VOLUME_NAME_2,...\n\n[root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# kubectl get pod -n wordpress\nNAME   READY   STATUSRESTARTS   AGE\nwordpress-67796d86b5-f9bfm 1/1 Running   1  39m\nwordpress-mysql-645b796d8d-6k8wh   1/1 Running   0  38m\n\n[root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# kubectl -n wordpress annotate pod/wordpress-67796d86b5-f9bfm backup.velero.io/backup-volumes=wordpress-pvc\npod/wordpress-67796d86b5-f9bfm annotated\n[root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# kubectl -n wordpress annotate pod/wordpress-mysql-645b796d8d-6k8wh backup.velero.io/backup-volumes=wordpress-mysql-pvc\npod/wordpress-mysql-645b796d8d-6k8wh annotated\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the backup task."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'[root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# velero backup create  wordpress-backup --include-namespaces wordpress\nBackup request "wordpress-backup" submitted successfully.\nRun `velero backup describe wordpress-backup` or `velero backup logs wordpress-backup` for more details.\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check whether the backup task is successful."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# velero backup get\nNAME   STATUS   CREATED EXPIRES   STORAGE LOCATION   SELECTOR\nwordpress-backup   InProgress   2020-07-07 20:31:19 +0800 CST   29d   default<none>\n[root@iZbp1cqobeh1iyyf7qgvvzZ ack2cce]# velero backup get\nNAME   STATUS  CREATED EXPIRES   STORAGE LOCATION   SELECTOR\nwordpress-backup   Completed   2020-07-07 20:31:19 +0800 CST   29d   default<none>\n"})}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);