"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[62009],{64810:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=n(74848),l=n(28453);const i={id:"deploy-clickhouse-cce",title:"Deploy ClickHouse on CCE",tags:["clickhouse","analytics","cce"]},a="Deploy ClickHouse on CCE",c={id:"blueprints/by-use-case/analytics/deploy-clickhouse-cce",title:"Deploy ClickHouse on CCE",description:"ClickHouse is a high-performance columnar database management system optimized for online analytical processing (OLAP). It is designed to handle large volumes of data and execute complex queries swiftly. The system uses a columnar storage format, which significantly accelerates read and write operations and enhances data compression. ClickHouse supports SQL queries and provides extensive tools for data analysis. It is built to scale horizontally, allowing for distributed processing across multiple servers. Its architecture ensures high availability and fault tolerance. Ideal for real-time data analytics, ClickHouse is widely adopted for tasks requiring fast query performance over extensive datasets.",source:"@site/docs/blueprints/by-use-case/analytics/deploy-clickhouse-cce.md",sourceDirName:"blueprints/by-use-case/analytics",slug:"/blueprints/by-use-case/analytics/deploy-clickhouse-cce",permalink:"/docs-next/pr-preview/pr-171/docs/blueprints/by-use-case/analytics/deploy-clickhouse-cce",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/analytics/deploy-clickhouse-cce.md",tags:[{inline:!0,label:"clickhouse",permalink:"/docs-next/pr-preview/pr-171/docs/tags/clickhouse"},{inline:!0,label:"analytics",permalink:"/docs-next/pr-preview/pr-171/docs/tags/analytics"},{inline:!0,label:"cce",permalink:"/docs-next/pr-preview/pr-171/docs/tags/cce"}],version:"current",frontMatter:{id:"deploy-clickhouse-cce",title:"Deploy ClickHouse on CCE",tags:["clickhouse","analytics","cce"]},sidebar:"blueprintsSidebar",previous:{title:"Analytics",permalink:"/docs-next/pr-preview/pr-171/docs/blueprints/by-use-case/analytics/"},next:{title:"Umami",permalink:"/docs-next/pr-preview/pr-171/docs/blueprints/by-use-case/analytics/umami/umami"}},r={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying ClickHouse Operator",id:"deploying-clickhouse-operator",level:2},{value:"Examples",id:"examples",level:2},{value:"Creating a Namespace",id:"creating-a-namespace",level:3},{value:"Simple Example",id:"simple-example",level:3},{value:"Simple Persistent Volume Example",id:"simple-persistent-volume-example",level:3},{value:"Simple Load Balancer Example",id:"simple-load-balancer-example",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"deploy-clickhouse-on-cce",children:"Deploy ClickHouse on CCE"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://clickhouse.com/",children:"ClickHouse"})," is a high-performance columnar database management system optimized for online analytical processing (OLAP). It is designed to handle large volumes of data and execute complex queries swiftly. The system uses a columnar storage format, which significantly accelerates read and write operations and enhances data compression. ClickHouse supports SQL queries and provides extensive tools for data analysis. It is built to scale horizontally, allowing for distributed processing across multiple servers. Its architecture ensures high availability and fault tolerance. Ideal for real-time data analytics, ClickHouse is widely adopted for tasks requiring fast query performance over extensive datasets."]}),"\n",(0,t.jsx)(s.p,{children:"In this blueprint we are going to use ClickHouse Operator to install it on a CCE Cluster. ClickHouse Operator creates, configures, and manages ClickHouse clusters running on Kubernetes."}),"\n",(0,t.jsxs)(s.p,{children:["The sections below describe how to install and deploy ClickHouse Operator on\nCCE clusters and provide examples of creating ClickHouse cluster\nresources. For more details, see ",(0,t.jsx)(s.a,{href:"https://github.com/Altinity/clickhouse-operator",children:"https://github.com/Altinity/clickhouse-operator"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(s.p,{children:"ClickHouse Operator can be installed in CCE clusters of v1.15.11 and\nlater. In this example, ClickHouse Operator is installed in a cluster of\nv1.19."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Resource"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Cluster type"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"CCE cluster"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Cluster version"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"1.25.3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Region"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"eu-de"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Container Runtime"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"containerd 1.6.14"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Network model"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"VPC network"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Service forwarding mode"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"iptables"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"deploying-clickhouse-operator",children:"Deploying ClickHouse Operator"}),"\n",(0,t.jsx)(s.p,{children:"Run the following command to deploy ClickHouse operator on your cluster:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f \\\nhttps://raw.githubusercontent.com/Altinity/clickhouse-operator/master/deploy/operator/clickhouse-operator-install-bundle.yaml\n"})}),"\n",(0,t.jsx)(s.p,{children:"you see similar output after applying the manifest:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/Altinity/clickhouse-operator/master/deploy/operator/clickhouse-operator-install-bundle.yaml\n\ncustomresourcedefinition.apiextensions.k8s.io/clickhouseinstallations.clickhouse.altinity.com created\ncustomresourcedefinition.apiextensions.k8s.io/clickhouseinstallationtemplates.clickhouse.altinity.com created\ncustomresourcedefinition.apiextensions.k8s.io/clickhouseoperatorconfigurations.clickhouse.altinity.com created\ncustomresourcedefinition.apiextensions.k8s.io/clickhousekeeperinstallations.clickhouse-keeper.altinity.com created\nserviceaccount/clickhouse-operator created\nclusterrole.rbac.authorization.k8s.io/clickhouse-operator-kube-system created\nclusterrolebinding.rbac.authorization.k8s.io/clickhouse-operator-kube-system created\nconfigmap/etc-clickhouse-operator-files created\nconfigmap/etc-clickhouse-operator-confd-files created\nconfigmap/etc-clickhouse-operator-configd-files created\nconfigmap/etc-clickhouse-operator-templatesd-files created\nconfigmap/etc-clickhouse-operator-usersd-files created\nsecret/clickhouse-operator created\ndeployment.apps/clickhouse-operator created\nservice/clickhouse-operator-metrics created\n"})}),"\n",(0,t.jsx)(s.p,{children:"After a period of time, check the running status of ClickHouse Operator."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep clickhouse\n"})}),"\n",(0,t.jsx)(s.p,{children:"command output:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl get pod -n kube-system | grep clickhouse\n\nclickhouse-operator-5b8b958bd8-8w2cg       2/2     Running   0          12s\n"})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.h3,{id:"creating-a-namespace",children:"Creating a Namespace"}),"\n",(0,t.jsxs)(s.p,{children:["Create a namespace named ",(0,t.jsx)(s.code,{children:"test-clickhouse-operator"})," to facilitate\nverification of basic functions."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl create namespace test-clickhouse-operator\n"})}),"\n",(0,t.jsx)(s.h3,{id:"simple-example",children:"Simple Example"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["This example is available at\n",(0,t.jsx)(s.a,{href:"https://github.com/Altinity/clickhouse-operator/blob/master/docs/chi-examples/01-simple-layout-01-1shard-1repl.yaml",children:"https://github.com/Altinity/clickhouse-operator/blob/master/docs/chi-examples/01-simple-layout-01-1shard-1repl.yaml"}),"."]})}),"\n",(0,t.jsx)(s.p,{children:"The YAML file is as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'apiVersion: "clickhouse.altinity.com/v1"\nkind: "ClickHouseInstallation"\nmetadata:\n  name: "simple-01"\nspec:\n  configuration:\n    users:\n      # printf \'test_password\' | sha256sum\n      test_user/password_sha256_hex: 10a6e6cc8311a3e2bcc09bf6c199adecd5dd59408c343e926b129c4914f3cb01\n      test_user/password: test_password\n      # to allow access outside from kubernetes\n      test_user/networks/ip:\n        - 0.0.0.0/0\n    clusters:\n      - name: "simple"\n'})}),"\n",(0,t.jsx)(s.p,{children:"Run the following command:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -n test-clickhouse-operator -f \\\nhttps://raw.githubusercontent.com/Altinity/clickhouse-operator/master/docs/chi-examples/01-simple-layout-01-1shard-1repl.yaml\n"})}),"\n",(0,t.jsx)(s.p,{children:"After a period of time, check the resource running status."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl get pod -n test-clickhouse-operator\n\nNAME                         READY   STATUS    RESTARTS   AGE\nchi-simple-01-simple-0-0-0   1/1     Running   0          30s\n\nkubectl get service -n test-clickhouse-operator\n\nNAME                       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                      AGE\nchi-simple-01-simple-0-0   ClusterIP   None         <none>        9000/TCP,8123/TCP,9009/TCP   14s\nclickhouse-simple-01       ClusterIP   None         <none>        8123/TCP,9000/TCP            12s\n"})}),"\n",(0,t.jsx)(s.p,{children:"Connect to the ClickHouse database."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'kubectl -n test-clickhouse-operator exec -ti chi-simple-01-simple-0-0-0 -- clickhouse-client\n\nClickHouse client version 24.4.1.2088 (official build).\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 24.4.1.\n\nWarnings:\n* Linux transparent hugepages are set to "always". Check /sys/kernel/mm/transparent_hugepage/enabled\n\n\nchi-simple-01-simple-0-0-0.chi-simple-01-simple-0-0.test-clickhouse-operator.svc.cluster.local :)\n'})}),"\n",(0,t.jsx)(s.h3,{id:"simple-persistent-volume-example",children:"Simple Persistent Volume Example"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["This example is available at\n",(0,t.jsx)(s.a,{href:"https://github.com/Altinity/clickhouse-operator/blob/master/docs/chi-examples/03-persistent-volume-01-default-volume.yaml",children:"https://github.com/Altinity/clickhouse-operator/blob/master/docs/chi-examples/03-persistent-volume-01-default-volume.yaml"}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Before"})," using this YAML file to create a PVC on CCE, modify the file\nbased on the storage volume you want to use."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If an EVS disk is used as a storage volume, do as follows:","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Create a ",(0,t.jsx)(s.code,{children:"StorageClass"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"By default, the CSI disk type supported by CCE is SAS. If you\nwant to use ultra-high I/O EVS disks, create the corresponding\nStorageClass."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",metastring:'title="csi-disk-ssd.yaml"',children:'allowVolumeExpansion: true\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: csi-disk-ssd\nparameters:\n  csi.storage.k8s.io/csi-driver-name: disk.csi.everest.io\n  csi.storage.k8s.io/fstype: ext4\n  everest.io/disk-volume-type: SSD\n  everest.io/passthrough: "true"\nprovisioner: everest-csi-provisioner\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n'})}),"\n",(0,t.jsx)(s.p,{children:"Save the file and create the StorageClass in your cluster."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl create -f csi-disk-ssd.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Change ",(0,t.jsx)(s.code,{children:"accessModes"})," to ",(0,t.jsx)(s.code,{children:"ReadWriteOnce"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Append ",(0,t.jsx)(s.code,{children:"storageClassName: csi-disk-ssd"})," under the path\n",(0,t.jsx)(s.code,{children:"spec.templates.volumeClaimTemplates.spec"})," of example\nyaml."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["If an SFS file system is used as a storage volume, do as follows:","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Change ",(0,t.jsx)(s.code,{children:"accessModes"})," to ",(0,t.jsx)(s.code,{children:"ReadWriteMany"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Append ",(0,t.jsx)(s.code,{children:"storageClassName: csi-nas"})," under the path\n",(0,t.jsx)(s.code,{children:"spec.templates.volumeClaimTemplates.spec"})," of example\nyaml."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For example, if an SFS file system is used, the YAML file content is as\nfollows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'apiVersion: "clickhouse.altinity.com/v1"\nkind: "ClickHouseInstallation"\nmetadata:\n  name: "pv-simple"\nspec:\n  defaults:\n    templates:\n      dataVolumeClaimTemplate: data-volume-template\n      logVolumeClaimTemplate: log-volume-template\n  configuration:\n    clusters:\n      - name: "simple"\n        layout:\n          shardsCount: 1\n          replicasCount: 1\n  templates:\n    volumeClaimTemplates:\n      - name: data-volume-template\n        spec:\n          accessModes:\n            - ReadWriteMany\n          resources:\n            requests:\n              storage: 10Gi\n          storageClassName: csi-nas\n      - name: log-volume-template\n        spec:\n          accessModes:\n            - ReadWriteMany\n          resources:\n            requests:\n              storage: 10Gi\n          storageClassName: csi-nas\n'})}),"\n",(0,t.jsx)(s.p,{children:"Run the following command to create a PV:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl -n test-clickhouse-operator create -f \\\n03-persistent-volume-01-default-volume.yaml\n"})}),"\n",(0,t.jsx)(s.p,{children:"After a period of time, check the resource running status:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl get pvc -n test-clickhouse-operator\n\nNAME                                              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\ndata-volume-template-chi-pv-simple-simple-0-0-0   Bound    pvc-98cb51b7-46ef-415f-b43b-edaa3638f4ef   1Gi        RWO            csi-disk-ssd   55s\nlog-volume-template-chi-pv-simple-simple-0-0-0    Bound    pvc-404c31c6-8360-441f-a1c7-df19e3497886   100Mi      RWO            csi-disk-ssd   55s\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl get pod -n test-clickhouse-operator\n\nNAME                         READY   STATUS    RESTARTS   AGE\nchi-pv-simple-simple-0-0-0   2/2     Running   0          2m59s\n"})}),"\n",(0,t.jsx)(s.p,{children:"Run the following command to check the mounting status of the storage\nvolume:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl -n test-clickhouse-operator exec -ti chi-pv-simple-simple-0-0-0 -c clickhouse -- bash\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"df -h\n\nroot@chi-pv-simple-simple-0-0-0:/# df -h\nFilesystem                                        Size  Used Avail Use% Mounted on\noverlay                                            89G  6.2G   78G   8% /\ntmpfs                                              64M     0   64M   0% /dev\ntmpfs                                             7.8G     0  7.8G   0% /sys/fs/cgroup\nsfs-nas1.eu-de.otc.t-systems.com:/share-29e28acd  9.8G  118M  9.2G   2% /etc/hosts\nsfs-nas1.eu-de.otc.t-systems.com:/share-62e28aab  89G  6.2G   78G   8% /etc/hostname\nshm                                               64M     0   64M   0% /dev/shm\n/dev/sdf                                          974M   13M  945M   2% /var/lib/clickhouse\n/dev/sdg                                          974M  108K  958M   1% /var/log/clickhouse-server\ntmpfs                                              14G   12K   14G   1% /run/secrets/kubernetes.io/serviceaccount\ntmpfs                                             7.8G     0  7.8G   0% /proc/acpi\ntmpfs                                             7.8G     0  7.8G   0% /proc/scsi\ntmpfs                                             7.8G     0  7.8G   0% /sys/firmware\n"})}),"\n",(0,t.jsx)(s.p,{children:"Connect to the ClickHouse database:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"kubectl -n test-clickhouse-operator exec -ti chi-simple-01-simple-0-0-0 -- clickhouse-client\n\nClickHouse client version 24.4.1.2088 (official build).\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 24.4.1.\n"})}),"\n",(0,t.jsx)(s.h3,{id:"simple-load-balancer-example",children:"Simple Load Balancer Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'apiVersion: "clickhouse.altinity.com/v1"\nkind: "ClickHouseInstallation"\nmetadata:\n  name: "ck-elb"\nspec:\n  defaults:\n    templates:\n      dataVolumeClaimTemplate: data-volume-nas\n      serviceTemplate: chi-service-elb\n  configuration:\n    clusters:\n      - name: "ck-elb"\n        templates:\n          podTemplate: pod-template-with-nas\n        layout:\n          shardsCount: 1\n          replicasCount: 1\n  templates:\n    podTemplates:\n      - name: pod-template-with-nas\n        spec:\n          containers:\n            - name: clickhouse\n              image: yandex/clickhouse-server:21.6.3.14\n              volumeMounts:\n                - name: data-volume-nas\n                  mountPath: /var/lib/clickhouse\n    volumeClaimTemplates:\n      - name: data-volume-nas\n        spec:\n          accessModes:\n            - ReadWriteMany\n          resources:\n            requests:\n              storage: 20Gi\n          storageClassName: csi-nas\n    serviceTemplates:\n      - name: chi-service-elb\n        metadata:\n          annotations:\n            kubernetes.io/elb.class: union\n            kubernetes.io/elb.autocreate: >-\n              {"type":"public","bandwidth_name":"cce-bandwidth-ck","bandwidth_chargemode":"bandwidth","bandwidth_size":5,"bandwidth_sharetype":"PER","eip_type":"5_bgp"}\n        spec:\n          ports:\n            - name: http\n              port: 8123\n            - name: client\n              port: 9000\n          type: LoadBalancer\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Add the information in bold to the YAML file. The following table\ndescribes the parameters supported by ",(0,t.jsx)(s.code,{children:"annotations kubernetes.io/elb.autocreate"}),"."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Name of the automatically created load balancer. Value range: a string of 1 to 64 characters, including lowercase letters, digits, and underscores (_). The value must start with a lowercase letter and end with a lowercase letter or digit."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Network type of the load balancer.  public: public network load balancer inner: private network load balancer"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bandwidth_name"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsxs)(s.td,{children:["Bandwidth name. The default value is ",(0,t.jsx)(s.code,{children:"cce-bandwidth-**"}),". Value range: a string of 1 to 64 characters, including lowercase letters, digits, and underscores (_). The value must start with a lowercase letter and end with a lowercase letter or digit."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bandwidth_chargemode"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Bandwidth billing mode.  bandwidth: billed by bandwidth traffic: billed by traffic"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bandwidth_size"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"Bandwidth."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bandwidth_sharetype"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Bandwidth sharing mode.  PER: dedicated bandwidth"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"eip_type"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"EIP type."})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(96540);const l={},i=t.createContext(l);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);