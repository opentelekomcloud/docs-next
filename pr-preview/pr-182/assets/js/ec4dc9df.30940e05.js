"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[49965],{5655:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(74848),r=s(28453);const i={id:"zone-redundant-nfs",title:"Zone-redundant NFS Server",tags:["ecs","evs","sdrs","nfs","disaster-recovery","storage","zone-redundant","failover"]},o="Zone-redundant NFS Server",l={id:"blueprints/by-use-case/storage/zone-redundant-nfs",title:"Zone-redundant NFS Server",description:"The main target of this guide is to provide a zone-redundant NFS Server",source:"@site/docs/blueprints/by-use-case/storage/zone-redundant-nfs.md",sourceDirName:"blueprints/by-use-case/storage",slug:"/blueprints/by-use-case/storage/zone-redundant-nfs",permalink:"/docs-next/pr-preview/pr-182/docs/blueprints/by-use-case/storage/zone-redundant-nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/storage/zone-redundant-nfs.md",tags:[{inline:!0,label:"ecs",permalink:"/docs-next/pr-preview/pr-182/docs/tags/ecs"},{inline:!0,label:"evs",permalink:"/docs-next/pr-preview/pr-182/docs/tags/evs"},{inline:!0,label:"sdrs",permalink:"/docs-next/pr-preview/pr-182/docs/tags/sdrs"},{inline:!0,label:"nfs",permalink:"/docs-next/pr-preview/pr-182/docs/tags/nfs"},{inline:!0,label:"disaster-recovery",permalink:"/docs-next/pr-preview/pr-182/docs/tags/disaster-recovery"},{inline:!0,label:"storage",permalink:"/docs-next/pr-preview/pr-182/docs/tags/storage"},{inline:!0,label:"zone-redundant",permalink:"/docs-next/pr-preview/pr-182/docs/tags/zone-redundant"},{inline:!0,label:"failover",permalink:"/docs-next/pr-preview/pr-182/docs/tags/failover"}],version:"current",frontMatter:{id:"zone-redundant-nfs",title:"Zone-redundant NFS Server",tags:["ecs","evs","sdrs","nfs","disaster-recovery","storage","zone-redundant","failover"]},sidebar:"blueprintsSidebar",previous:{title:"Storage",permalink:"/docs-next/pr-preview/pr-182/docs/blueprints/by-use-case/storage/"},next:{title:"By Industry",permalink:"/docs-next/pr-preview/pr-182/docs/blueprints/by-industry/"}},a={},c=[{value:"Solution Design",id:"solution-design",level:2},{value:"Setting up the infrastructure",id:"setting-up-the-infrastructure",level:2},{value:"Setting up the NFS Server",id:"setting-up-the-nfs-server",level:2},{value:"Automating NFS Server Setup using Ansible",id:"automating-nfs-server-setup-using-ansible",level:2},{value:"Adding a new NFS Share",id:"adding-a-new-nfs-share",level:2},{value:"Online resizing of the NFS Export",id:"online-resizing-of-the-nfs-export",level:2},{value:"Decommissioning of the NFS Share",id:"decommissioning-of-the-nfs-share",level:2},{value:"DR-drill/Failover to a secondary site",id:"dr-drillfailover-to-a-secondary-site",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"zone-redundant-nfs-server",children:"Zone-redundant NFS Server"}),"\n",(0,t.jsx)(n.p,{children:"The main target of this guide is to provide a zone-redundant NFS Server\nwith the option to perform a failover. We are going to use ECS, EVS and\nStorage Disaster Recovery Service of Open Telekom Cloud for that. Additionally we will\ncover operational tasks like extending the size of the NFS Share."}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:"This guide is to be treated as proposal and it's only intend is to\ndemonstrate the capabilities of SDRS in conjunction with high available\nNFS storage."})}),"\n",(0,t.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:s(93245).A+"",width:"946",height:"523"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"As you can see one can optionally use an ELB in front of the NFS Server,\nbut for this build we will focus on using an internal NIC only."})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-the-infrastructure",children:"Setting up the infrastructure"}),"\n",(0,t.jsxs)(n.p,{children:["Create an ECS with an additional Disk which should be the ",(0,t.jsx)(n.strong,{children:"same size"})," as\nyour desired NFS Share. If you are planning to use more shares (which\nwill be the case for most use-cases), simply add up your desired size\nand you are good to go."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["If the size is exceeding ",(0,t.jsx)(n.code,{children:"16TB"}),", you may use\nanother EVS-Disk, as each disk can ",(0,t.jsx)(n.strong,{children:"only"})," be ",(0,t.jsx)(n.code,{children:"16TB"})," in size."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create an ECS in your primary location (zone) e.g. ",(0,t.jsx)(n.strong,{children:"eu-de-01"})," (in this\nexample we'll choose Ubuntu as base-image)"]}),"\n",(0,t.jsx)(n.li,{children:"Add datadisk(s) of your desired size"}),"\n",(0,t.jsx)(n.li,{children:"Place the ECS in a reasonable Network/Subnet and attach an\nappropriate Security Group to the interface."}),"\n",(0,t.jsx)(n.li,{children:"Once the ECS is up and running, create a protection Group using the\nStorage Disaster Recovery Service (SDRS)"}),"\n",(0,t.jsxs)(n.li,{children:["In the protection group select the ECS and a target Zone (should\ndiffer from the primary zone you chose earlier) and hit ",(0,t.jsx)(n.em,{children:"Create"}),".\nAfter about 10mins everything should be created."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.em,{children:"Protection group"})," and Click on ",(0,t.jsx)(n.em,{children:"Enable protection"})]}),"\n",(0,t.jsx)(n.li,{children:"This will start the synchronization, which takes about 3-5mins,\ndepending on the size of disks etc."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:s(56077).A+"",width:"605",height:"251"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"What is the sync doing"}),": It is setting up an ECS instance as a cold\nstandby with a set of replication pairs. Once the sync is done, everything\nis ready and you can proceed with the NFS Server setup."]})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-the-nfs-server",children:"Setting up the NFS Server"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to setup everything automatically using Ansible, click ",(0,t.jsx)(n.a,{href:"#automating-nfs-server-setup-using-ansible",children:"here"}),". Otherwise, continue reading here:"]}),"\n",(0,t.jsxs)(n.p,{children:["You now need to access the newly created NFS Server (do this using\nSSH key or using the ",(0,t.jsx)(n.em,{children:"VNC-Console"}),"). Depending on the chosen operating\nsystem you need to install some prerequisites first:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Install the following packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install nfs-kernel-server -y\nsudo apt install lvm2 -y\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Creating a Volumegroup and a Logical Volume"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   # check the disk-names (vdb, vdc, ...)\n   lsblk\n\n   # vgcreate -> creates volumegroup\n   vgcreate -s 32 vg_nfs /dev/vdb [/dev/vd... #add all needed disks here in one line if you require more]\n\n   # lvcreate -> creates lvol #it is advised to create an lvol for each export\n   lvcreate -n export1 -L 10g vg_nfs #for acceptable size values see 'man lvcreate'\n   lvcreate -n export2 -L 20g vg_nfs\n   lvcreate -n export3 -L 30g vg_nfs\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Making lvols mount persistent"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Place them into ",(0,t.jsx)(n.strong,{children:"/etc/fstab"})," so that it looks like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   cat /etc/fstab\n   #\n   /dev/nfs_vg/export1 /export1 ext4 defaults 0 0\n   /dev/nfs_vg/export2 /export2 ext4 defaults 0 0\n   /dev/nfs_vg/export3 /export3 ext4 defaults 0 0\n   #\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Creating directories and mount everything"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   mkdir -p /export1 /export2 /export3\n\n   #mount and verify \n   mount -a\n   df \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Exporting the mounts"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.strong,{children:"/etc/exports"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   cat /etc/exports\n   /export1 *(rw,sync,no_root_squash,no_subtree_check)\n   /export2 *(rw,sync,no_root_squash,no_subtree_check)\n   /export3 *(rw,sync,no_root_squash,no_subtree_check)\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Ensuring that the NFS Server is enabled and running"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   systemctl enable nfs-server.service\n   Created symlink /etc/systemd/system/multi-user.target.wants/nfs-server.service \u2192 /lib/systemd/system/nfs-server.service.\n\n   systemctl start nfs-server.service\n\n   systemctl status nfs-server.service\n   \u25cf nfs-server.service - NFS server and services\n        Loaded: loaded (/lib/systemd/system/nfs-server.service; enabled; vendor preset: enabled)\n       Drop-In: /run/systemd/generator/nfs-server.service.d\n                \u2514\u2500order-with-mounts.conf\n        Active: active (exited) since Mon 2024-03-11 11:31:59 UTC; 23h ago\n      Main PID: 2908 (code=exited, status=0/SUCCESS)\n           CPU: 5ms\n\n   Mar 11 11:31:59 nfs-server systemd[1]: Starting NFS server and services...\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Ensuring that the exports are exported and visible to others"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n   exportfs -a\n\n   #on any client you can now verify the exports by running:\n   # <on client machine>\n\n   showmount -e <IP adress of NFS-Server>\n   Export list for <IP adress of NFS-Server>:\n   /export1 *\n   /export2 *\n   /export3 *\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now you have successfully setup a very basic NFS Server."}),"\n",(0,t.jsx)(n.h2,{id:"automating-nfs-server-setup-using-ansible",children:"Automating NFS Server Setup using Ansible"}),"\n",(0,t.jsx)(n.p,{children:"Assuming the following circumstances, that the nfs-server has 1\nadditional disk of minimum 100GB, the following ansible playbook can be run\nlocally (feel free to adjust):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'   - hosts: localhost\n     connection: local\n     become: yes\n     tags:\n       - never\n     tasks:\n     - name: Install NFS server packages\n       apt:\n         name:\n           - nfs-kernel-server\n           - lvm2\n         state: present\n       tags: \n         - installation\n\n     - name: Setup physical volume\n       community.general.lvg:\n         vg: nfs_vg\n         pvs: /dev/vdb\n       tags: \n         - volume_group\n\n     - name: Create a logical volume\n       community.general.lvol:\n         vg: nfs_vg\n         lv: nfs_lv\n         size: 95g\n       tags: \n         - logical_volume\n\n     - name: Format the logical volume with ext4\n       filesystem:\n         fstype: ext4\n         dev: /dev/nfs_vg/nfs_lv\n       tags: \n         - filesystem\n\n     - name: Mount the logical volume\n       mount:\n         path: /export\n         src: /dev/nfs_vg/nfs_lv\n         fstype: ext4\n         state: mounted\n       tags: \n         - mounting\n\n     - name: Configure NFS export\n       lineinfile:\n         path: /etc/exports\n         line: "/export *(rw,sync,no_root_squash,no_subtree_check)"\n         create: yes\n       tags: \n         - nfs_configuration\n\n     - name: Ensure NFS server is running\n       service:\n         name: nfs-kernel-server\n         state: started\n         enabled: yes\n       tags: \n         - service_management\n\n     - name: Apply NFS export table changes\n       command: exportfs -a\n       tags: \n         - exports\n'})}),"\n",(0,t.jsx)(n.h2,{id:"adding-a-new-nfs-share",children:"Adding a new NFS Share"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This section covers the steps to add a new NFS export, specifically\nfocusing on ",(0,t.jsx)(n.code,{children:"export4"})," as an example."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Before proceeding, ensure that there is enough available space in the volume\ngroup (",(0,t.jsx)(n.code,{children:"vg_nfs"}),") to allocate to the NFS export. If there is ",(0,t.jsx)(n.strong,{children:"NOT"})," enough\nspace, update the disk and resize the ",(0,t.jsx)(n.em,{children:"pvol"})," as follows."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Extend the Disk size by the needed amount"}),"\n",(0,t.jsxs)(n.li,{children:["Resize the physical Volume ",(0,t.jsx)(n.code,{children:"pvresize /dev/vd<DEVICELETTER>"})]}),"\n",(0,t.jsxs)(n.li,{children:["check results with ",(0,t.jsx)(n.code,{children:"vgs"})," The VFree column should now contain enough\nspace"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Adding the Logical Volume"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.strong,{children:"lvcreate"})," to create the logical volume associated with ",(0,t.jsx)(n.code,{children:"export4"}),". Use\nthe following iptions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-L"})," to specify space you want to have, e.g. ",(0,t.jsx)(n.code,{children:"-L 5g"})," will create\na 5g logical volume."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-n"})," to specify the name of the new volume"]}),"\n",(0,t.jsx)(n.li,{children:"at the end provide the name of the volumegroup."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   lvcreate -L 5g -n export4 vg_nfs\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Creating the filesystem"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In our case we will use ",(0,t.jsx)(n.strong,{children:"ext4"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   mkfs.ext4 /dev/nfs_vg/export4\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Creating a mountpoint (directory)"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   mkdir -p /export4 # feel free to change this to your needs\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Making the newly created lvol mount persistent"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Simply add it as a new line into ",(0,t.jsx)(n.strong,{children:"/etc/fstab"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   cat /etc/fstab\n   #\n   /dev/nfs_vg/export1 /export1 ext4 defaults 0 0\n   /dev/nfs_vg/export2 /export2 ext4 defaults 0 0\n   /dev/nfs_vg/export3 /export3 ext4 defaults 0 0\n   # new export below\n   /dev/nfs_vg/export4 /export4 ext4 defaults 0 0\n   #\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Mounting and verifying"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n   mount -a\n   df\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Modifying /etc/exports"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Add a new line for the new export:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n   cat /etc/exports\n   /export1 *(rw,sync,no_root_squash,no_subtree_check)\n   /export2 *(rw,sync,no_root_squash,no_subtree_check)\n   /export3 *(rw,sync,no_root_squash,no_subtree_check)\n   # new export below\n   /export4 *(rw,sync,no_root_squash,no_subtree_check)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Ensuring that the exports are exported"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n   exportfs -a\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Verifing Exports"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"On any client, you can now verify the exports by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   # <on client machine>\n\n   showmount -e <IP adress of NFS-Server>\n   Export list for <IP adress of NFS-Server>:\n   /export1 *\n   /export2 *\n   /export3 *\n"})}),"\n",(0,t.jsx)(n.h2,{id:"online-resizing-of-the-nfs-export",children:"Online resizing of the NFS Export"}),"\n",(0,t.jsxs)(n.p,{children:["This section covers the steps to perform an online resize of your NFS\nexport, specifically focusing on ",(0,t.jsx)(n.code,{children:"export2"})," as an example. This\noperation allows you to increase the available storage capacity of the\nNFS export without interrupting its availability to clients."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Before proceeding, ensure that there is available space in the volume\ngroup (",(0,t.jsx)(n.code,{children:"vg_nfs"}),") to allocate to the NFS export. If there is ",(0,t.jsx)(n.strong,{children:"NOT"})," enough\nspace, update the disk and resize the pvol as follows."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Extend the Disk size by the needed amount"}),"\n",(0,t.jsxs)(n.li,{children:["Resize the physical Volume ",(0,t.jsx)(n.code,{children:"pvresize /dev/vd<DEVICELETTER>"})]}),"\n",(0,t.jsxs)(n.li,{children:["check results with ",(0,t.jsx)(n.code,{children:"vgs"})," The VFree column should now contain enough\nspace"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Extending the Logical Volume"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.strong,{children:"lvextend"})," to increase the size of the logical volume associated with\n",(0,t.jsx)(n.code,{children:"export2"}),". Use ",(0,t.jsx)(n.code,{children:"-L+"})," to add the additional space you want to have, e.g. ",(0,t.jsx)(n.code,{children:"+5g"}),"\nwill add 5g to the logical volume:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   lvextend -L+5g /dev/vg_nfs/export2\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Resizing the Filesystem"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After extending the logical volume, resize the filesystem sitting on top\nof it to utilize the new space. For ext-filesystems, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   resize2fs /dev/vg_nfs/export2\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you are not using ",(0,t.jsx)(n.strong,{children:"ext"})," filesystems, feel free to use the according\nother tools for extending the filesystem (like ",(0,t.jsx)(n.code,{children:"growpart"})," or\n",(0,t.jsx)(n.code,{children:"xfs_growfs"})," and so on)"]})}),"\n",(0,t.jsx)(n.h2,{id:"decommissioning-of-the-nfs-share",children:"Decommissioning of the NFS Share"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Decommisioning a share is a non-reversive action, proceed with ",(0,t.jsx)(n.strong,{children:"caution"}),"!\nEnsure all clients have the NFS share unmounted! This prevents data loss and ensures no client is attempting to access\nthe share during the decommissioning process!"]})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Unexporting the NFS-Share"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After you have ensured, that the NFS Share is not used by any client,\nremove the export configuration for the share you are decommissioning.\nFor ",(0,t.jsx)(n.code,{children:"export4"}),", edit ",(0,t.jsx)(n.strong,{children:"/etc/exports"})," and remove the line corresponding\nto ",(0,t.jsx)(n.code,{children:"/export4"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   # Example line to remove:\n   /export4 *(rw,sync,no_root_squash,no_subtree_check)\n"})}),"\n",(0,t.jsx)(n.p,{children:"After editing, apply the changes:"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This will cut off any active connections to the share"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   exportfs -ra\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Unmounting the NFS Share"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ensure no process is using the share and then unmount it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   fuser -c /export4 # should return nothing\n   umount /export4\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Removing the entry from /etc/fstab"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.strong,{children:"/etc/fstab"})," and remove the line that corresponds to ",(0,t.jsx)(n.code,{children:"/export4"}),", to\nprevent it from mounting on reboot."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   # Example line to remove:\n   /dev/vg_nfs/export4 /export4 ext4 defaults 0 0\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Deleting the Logical Volume"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Remove the logical volume associated with ",(0,t.jsx)(n.code,{children:"export4"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   lvremove /dev/vg_nfs/export4 # confirm with 'y'\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Removing the Directory (optional)"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the directory ",(0,t.jsx)(n.code,{children:"/export4"})," is no longer needed, it can be removed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   rm -r /export4\n"})}),"\n",(0,t.jsx)(n.p,{children:"Finally you can verify that the logical volume is removed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   lvs\n"})}),"\n",(0,t.jsx)(n.p,{children:"Optionally ensure NFS exports have been updated, by checking on a client machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   # <on client machine>\n   showmount -e <NFS-Server IP>\n"})}),"\n",(0,t.jsx)(n.p,{children:"This concludes the decommissioning process of an NFS-share."}),"\n",(0,t.jsx)(n.h2,{id:"dr-drillfailover-to-a-secondary-site",children:"DR-drill/Failover to a secondary site"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Preparation"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In a real-outage scenario, when one AZ is declared as ",(0,t.jsx)(n.strong,{children:"down"}),", you must\ndo a failover using the Open Telekom Cloud Console. Before we perform a test failover,\nlet's have a client mounting the actual NFS Share:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   df\n\n   Filesystem         1K-blocks    Used Available Use% Mounted on\n   tmpfs                 812816    1096    811720   1% /run\n   /dev/vda1            5810764 4597652    892788  84% /\n   tmpfs                4064076       0   4064076   0% /dev/shm\n   tmpfs                   5120       0      5120   0% /run/lock\n   tmpfs                 812812       4    812808   1% /run/user/1000\n   10.0.0.180:/export  97466368       0  92469248   0% /tmp/hla\n"})}),"\n",(0,t.jsxs)(n.p,{children:["and simulate some ",(0,t.jsx)(n.em,{children:"work"})," on it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'   root@nfs-client:/tmp/hla# while true ; do echo "$(date)" >> check_time.txt ; sleep 1 ; done\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This will echo the time into a file once per second while having a\nfile-descriptor open the whole time (the process is started in the Share\nitself)"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Performing failover"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the Open Telekom Cloud Console  -> ",(0,t.jsx)(n.em,{children:"SDRS"})," -> Select protection group and click ",(0,t.jsx)(n.em,{children:"More"})," ->\n",(0,t.jsx)(n.em,{children:"Fail Over"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:s(16132).A+"",width:"605",height:"114"})}),"\n",(0,t.jsx)(n.p,{children:"This will have the following effect:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It ",(0,t.jsx)(n.em,{children:"unplugs"})," the NIC from the running server and attaches it to the\ntarget host (note we were previously running in ",(0,t.jsx)(n.strong,{children:"eu-de-01"}),"):"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:s(97787).A+"",width:"605",height:"119"})}),"\n",(0,t.jsx)(n.p,{children:"This results to the client operating-system setting the nfs-share to\nreadonly (as it is not able to reach it):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'   root@nfs-client:/tmp/hla# while true ; do echo "$(date)" >> check_time.txt ; sleep 1 ; done\n\n   -bash: check_time.txt: Read-only file system\n   -bash: check_time.txt: Read-only file system\n   -bash: check_time.txt: Read-only file system\n   -bash: check_time.txt: Read-only file system\n   -bash: check_time.txt: Read-only file system\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It stops the previous production server (in eu-de-01)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:s(83570).A+"",width:"605",height:"150"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Failover complete \u2013 now you must actively start the nfs-server\nresource in ",(0,t.jsx)(n.strong,{children:"eu-de-02"}),". There is a shortcut to do that in\nthe overview of SRDS:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:s(90633).A+"",width:"605",height:"132"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If set up correctly, the nfs-server should start everything on its\nown."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you try to access the nfs-Server, it should throw an error\nmessage like this:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   ssh nfs-server\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n   @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n   IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\n   Someone could be eavesdropping on you right now (man-in-the-middle attack)!\n   It is also possible that a host key has just been changed.\n   The fingerprint for the ECDSA key sent by the remote host is\n   SHA256:IfRWy+RVAgSr+sHbxwQfuoreNZAU9wfO142vfQix27c.\n   Please contact your system administrator.\n   Add correct host key in /home/linux/.ssh/known_hosts to get rid of this message.\n   Offending ECDSA key in /home/linux/.ssh/known_hosts:5\n   You can use following command to remove the offending key:\n   ssh-keygen -R 10.0.0.180 -f /home/linux/.ssh/known_hosts\n   ECDSA host key for 10.0.0.180 has changed and you have requested strict checking.\n   Host key verification failed.\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is expected, as the nfs-server is technically now another ECS instance with\nthe same name, ssh-key etc.; but with different ECDSA Key\n(fingerprint). To get rid off this message, simply use the suggested\ncommand, and re-accept the fingerprint:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"   ssh-keygen -R 10.0.0.180 -f /home/linux/.ssh/known_hosts\n   # Host 10.0.0.180 found: line 5\n   /home/linux/.ssh/known_hosts updated.\n   Original contents retained as /home/linux/.ssh/known_hosts.old\n   linux@bastion:~> ssh nfs-server\n   The authenticity of host '10.0.0.180 (10.0.0.180)' can't be established.\n   ECDSA key fingerprint is SHA256:IfRWy+RVAgSr+sHbxwQfuoreNZAU9wfO142vfQix27c.\n   No matching host key fingerprint found in DNS.\n   Are you sure you want to continue connecting (yes/no/[fingerprint])? yes\n   Warning: Permanently added '10.0.0.180' (ECDSA) to the list of known hosts.\n   Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-100-generic x86_64)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Checking on the client side we can see that the process continued its work, as long as it regained connection"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n   root@nfs-client:~# cat /tmp/hla/check_time.txt\n   .\n   .\n   Mon Mar 18 07:08:20 UTC 2024\n   Mon Mar 18 07:08:21 UTC 2024\n   Mon Mar 18 07:08:22 UTC 2024\n   Mon Mar 18 07:08:23 UTC 2024\n   Mon Mar 18 07:08:46 UTC 2024 #failover started here\n   Mon Mar 18 07:10:50 UTC 2024\n   Mon Mar 18 07:10:51 UTC 2024\n   Mon Mar 18 07:10:52 UTC 2024\n   Mon Mar 18 07:10:53 UTC 2024\n   Mon Mar 18 07:10:54 UTC 2024\n   Mon Mar 18 07:10:55 UTC 2024\n   Mon Mar 18 07:10:56 UTC 2024\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The according timeout settings in the nfs-client can be set via ",(0,t.jsx)(n.strong,{children:"fstab"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"timeo=n"})," The time in deciseconds (tenths of a second) the NFS\nclient waits for a response before it retries an NFS request."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"retrans=n"})," The number of times the NFS client retries a request\nbefore it attempts further recovery action."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},56077:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Bild2-2cac1f4461e7160d13a8908a9085dbfa.png"},16132:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Bild3-4be62a8fe4a44e0d849cbca2e82e2fa1.png"},97787:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Bild4-3c20358a78940ea89e0689f535f58337.png"},83570:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Bild5-2064d7562db3010231e6b4529bea5d72.png"},90633:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Bild6-c412e4526b8916dfe9ef04eeea4f881d.png"},93245:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/architecture-6bd62323d52fee0bc67f47dd716c1ebb.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);