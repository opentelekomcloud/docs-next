"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[7807],{82236:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"best-practices/storage/elastic-volume-service/raid-array-creation-with-evs-disks","title":"RAID Array Creation with EVS Disks","description":"Redundant Array of Independent Disks (RAID) is a technology that combines multiple physical disks into one or more logical units for the purposes of data redundancy and performance improvement.","source":"@site/docs/best-practices/storage/elastic-volume-service/raid-array-creation-with-evs-disks.md","sourceDirName":"best-practices/storage/elastic-volume-service","slug":"/best-practices/storage/elastic-volume-service/raid-array-creation-with-evs-disks","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/storage/elastic-volume-service/raid-array-creation-with-evs-disks","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/storage/elastic-volume-service/raid-array-creation-with-evs-disks.md","tags":[{"inline":true,"label":"storage","permalink":"/docs-next/pr-preview/pr-192/docs/tags/storage"},{"inline":true,"label":"evs","permalink":"/docs-next/pr-preview/pr-192/docs/tags/evs"},{"inline":true,"label":"raid","permalink":"/docs-next/pr-preview/pr-192/docs/tags/raid"}],"version":"current","frontMatter":{"id":"raid-array-creation-with-evs-disks","title":"RAID Array Creation with EVS Disks","tags":["storage","evs","raid"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Configuring Anti-Crawler Rules to Prevent Crawler Attacks","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/security-services/web-application-firewall/configuring-anti-crawler-rules-to-prevent-crawler-attacks"},"next":{"title":"Accessing OBS Through an NGINX Reverse Proxy","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/storage/object-storage-service/accessing-obs-through-an-nginx-reverse-proxy"}}');var r=s(74848),a=s(28453);const t={id:"raid-array-creation-with-evs-disks",title:"RAID Array Creation with EVS Disks",tags:["storage","evs","raid"]},d="RAID Array Creation with EVS Disks",o={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating an ECS",id:"creating-an-ecs",level:2},{value:"Creating and Attaching EVS Disks",id:"creating-and-attaching-evs-disks",level:2},{value:"Creating a RAID Array Using mdadm",id:"creating-a-raid-array-using-mdadm",level:2},{value:"Configuring Automatic Start of the RAID Array at Server Startup",id:"configuring-automatic-start-of-the-raid-array-at-server-startup",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Introduction to Common RAID Arrays",id:"introduction-to-common-raid-arrays",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"raid-array-creation-with-evs-disks",children:"RAID Array Creation with EVS Disks"})}),"\n",(0,r.jsx)(n.p,{children:"Redundant Array of Independent Disks (RAID) is a technology that combines multiple physical disks into one or more logical units for the purposes of data redundancy and performance improvement."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"In this document, Elastic Volume Service (EVS) disks instead of physical\ndisks are used to create RAID arrays. The working principles are the\nsame."})}),"\n",(0,r.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,r.jsxs)(n.p,{children:["This document uses CentOS Stream 9 as the sample OS to describe how to\ncreate a RAID 10 array with four EVS disks. A RAID 10 array consists of\nRAID 0 and RAID 1 arrays. In this example, EVS disks are used to create\na mirroring array (RAID 1) and then create a RAID 0 array to store data\nin stripes. At least ",(0,r.jsx)(n.strong,{children:"four"})," EVS disks are required."]}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"This practice describes the servers and disks planned for creating a RAID\n10 array:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ECS Name"}),": ",(0,r.jsx)(n.code,{children:"ecs-raid10"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ECS Image"}),": ",(0,r.jsx)(n.code,{children:"CentOS Strean 9"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ECS Specifications"}),": ",(0,r.jsx)(n.code,{children:"General computing, s3.medium.2 (1 vCPU, 2 GiB memory)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Elastic IP Address"}),": ",(0,r.jsx)(n.code,{children:"80.158.xxx.xxx"})," if you want to access it from public internet. Alternatively you could use a bastion."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["Setting up ",(0,r.jsx)(n.strong,{children:"RAID 10"})," requires ",(0,r.jsx)(n.strong,{children:"at least 4 disks"}),". Therefore, 4 EVS disks are\ncreated and attached to the ECS in this example."]})}),"\n",(0,r.jsx)(n.h2,{id:"creating-an-ecs",children:"Creating an ECS"}),"\n",(0,r.jsxs)(n.p,{children:["This section shows how to create an ECS. In this example, one ECS needs\nto be created. For details about the ECS parameter configurations, see ",(0,r.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.em,{children:"Computing"}),", click ",(0,r.jsx)(n.em,{children:"Elastic Cloud Server"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.em,{children:"Create ECS"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Configure the following parameters as planned:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Image"}),": Select ",(0,r.jsx)(n.em,{children:"CentOS"})," and choose\n",(0,r.jsx)(n.code,{children:"Standard_CentOS_Stream-9_latest(6GB)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EIP"}),": An EIP is mandatory if the ECS needs to access the\npublic network. In this example, the multiple devices admin\n(mdadm) tool needs to be installed. Therefore, an EIP must be\nconfigured. Assign an EIP or configure an existing one based on\nthe environment condition."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-and-attaching-evs-disks",children:"Creating and Attaching EVS Disks"}),"\n",(0,r.jsxs)(n.p,{children:["This section shows how to ",(0,r.jsx)(n.strong,{children:"create four EVS disks in a batch"})," and attach\nthe disks to the ECS."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.em,{children:"Storage"}),", click ",(0,r.jsx)(n.em,{children:"Elastic Volume Service"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.em,{children:"Create Disk"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Figure 1 EVS disk specifications",src:s(51234).A+"",width:"1522",height:"758"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Attach the disks to the ECS."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-raid-array-using-mdadm",children:"Creating a RAID Array Using mdadm"}),"\n",(0,r.jsx)(n.p,{children:"This section shows how to create a RAID 10 array using mdadm."}),"\n",(0,r.jsx)(n.p,{children:"In this example, the ECS runs CentOS Stream 9. Configurations vary\ndepending on the OS running on the ECS. This section is used for\nreference only. For the detailed operations and differences, see the\ncorresponding OS documents."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log in to the ECS as user ",(0,r.jsx)(n.strong,{children:"root"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to view and take note of the device names:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"fdisk -l \\| grep /dev/vd \\| grep -v vda\n"})}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# fdisk -l | grep /dev/vd | grep -v vda\nDisk /dev/vdb: 10.7 GB, 10737418240 bytes, 20971520 sectors\nDisk /dev/vdc: 10.7 GB, 10737418240 bytes, 20971520 sectors\nDisk /dev/vdd: 10.7 GB, 10737418240 bytes, 20971520 sectors\nDisk /dev/vde: 10.7 GB, 10737418240 bytes, 20971520 sectors\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the command output, four disks are attached to the ECS, and the\ndevice names are ",(0,r.jsx)(n.code,{children:"/dev/vdb"}),", ",(0,r.jsx)(n.code,{children:"/dev/vdc"}),", ",(0,r.jsx)(n.code,{children:"/dev/vdd"}),", and\n",(0,r.jsx)(n.code,{children:"/dev/vde"}),", respectively."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the following command to install ",(0,r.jsx)(n.strong,{children:"mdadm"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yum install mdadm -y\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"mdadm"})," is a utility to create and manage software RAID arrays on\nLinux. Ensure that an EIP has been bound to the ECS where mdadm is\nto be installed."]})}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# yum install mdadm -y\n......\nInstalled:\n  mdadm.x86_64 0:4.0-13.el7\n\nDependency Installed:\n  libreport-filesystem.x86_64 0:2.1.11-40.el7.centos\n\nComplete!\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to create a RAID array using the four\ndisks:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mdadm -Cv /dev/md0 -a yes -n 4 -l 10 /dev/vdb /dev/vdc /dev/vdd /dev/vde\n"})}),"\n",(0,r.jsx)(n.p,{children:"Parameter description:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RAID array device name"}),": The value can be user-definable. In\nthis example, ",(0,r.jsx)(n.code,{children:"/dev/md0"})," is used."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Disk quantity"}),": Set this parameter based on the actual\ncondition. In this example, RAID 10 is created, and at least\nfour disks are required. The minimum number of disks required varies depending on the\nRAID level. See ",(0,r.jsx)(n.a,{href:"#introduction-to-common-raid-arrays",children:"Introduction to Common RAID Arrays"})," for details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RAID level"}),": Set this parameter based on the actual condition.\nIn this example, set it to ",(0,r.jsx)(n.code,{children:"RAID 10"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Device name of the disk"}),": Enter the device names of all the\ndisks that will be used to create the RAID array. ",(0,r.jsx)(n.strong,{children:"Multiple names\nare separated with spaces"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# mdadm -Cv /dev/md0 -a yes -n 4 -l 10 /dev/vdb /dev/vdc /dev/vdd /dev/vde\nmdadm: layout defaults to n2\nmdadm: layout defaults to n2\nmdadm: chunk size defaults to 512K\nmdadm: size set to 10476544K\nmdadm: Defaulting to version 1.2 metadata\nmdadm: array /dev/md0 started.\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to format the created RAID array:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkfs.ext4 /dev/md0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# mkfs.ext4 /dev/md0\nmke2fs 1.42.9 (28-Dec-2013)\nFilesystem label=\nOS type: Linux\nBlock size=4096 (log=2)\nFragment size=4096 (log=2)\nStride=128 blocks, Stripe width=256 blocks\n1310720 inodes, 5238272 blocks\n261913 blocks (5.00%) reserved for the super user\nFirst data block=0\nMaximum filesystem blocks=2153775104\n160 block groups\n32768 blocks per group, 32768 fragments per group\n8192 inodes per group\nSuperblock backups stored on blocks:\n        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,\n        4096000\n\nAllocating group tables: done\nWriting inode tables: done\nCreating journal (32768 blocks): done\nWriting superblocks and filesystem accounting information: done\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to create a mounting directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir /RAID10\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to mount the RAID array:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mount /dev/md0 /RAID10\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to view the mount result:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"df -h\n"})}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# df -h\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vda2        39G  1.5G   35G   5% /\ndevtmpfs        911M     0  911M   0% /dev\ntmpfs           920M     0  920M   0% /dev/shm\ntmpfs           920M  8.6M  911M   1% /run\ntmpfs           920M     0  920M   0% /sys/fs/cgroup\n/dev/vda1       976M  146M  764M  17% /boot\ntmpfs           184M     0  184M   0% /run/user/0\n/dev/md0         20G   45M   19G   1% /RAID10\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Perform the following operations to enable automatic mounting of the\nRAID array at the system start:"}),"\n",(0,r.jsxs)(n.p,{children:["a.  Run the following command to open the ",(0,r.jsx)(n.strong,{children:"/etc/fstab"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vi /etc/fstab\n"})}),"\n",(0,r.jsxs)(n.p,{children:["b.  Press ",(0,r.jsx)(n.em,{children:"i"})," to enter ",(0,r.jsx)(n.em,{children:"editing mode"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# vi /etc/fstab\n\n#\n# /etc/fstab\n# Created by anaconda on Tue Nov  7 14:28:26 2017\n#\n# Accessible filesystems, by reference, are maintained under '/dev/disk'\n# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info\n#\nUUID=27f9be47-838b-4155-b20b-e4c5e013cdf3 /                       ext4    defaults        1 1\nUUID=2b2000b1-f926-4b6b-ade8-695ee244a901 /boot                   ext4    defaults        1 2\n"})}),"\n",(0,r.jsx)(n.p,{children:"c.  Add the following information to the end of the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"/dev/md0                                  /RAID10                 ext4    defaults        0 0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["d.  Press ",(0,r.jsx)(n.em,{children:"ESC"}),", enter ",(0,r.jsx)(n.code,{children:":wq!"}),", and press ",(0,r.jsx)(n.em,{children:"ENTER"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The system saves the modifications and exits the vi editor."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to view the RAID array information:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mdadm -D /dev/md0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# mdadm -D /dev/md0\n/dev/md0:\n           Version : 1.2\n     Creation Time : Thu Nov  8 15:49:02 2018\n        Raid Level : raid10\n        Array Size : 20953088 (19.98 GiB 21.46 GB)\n     Used Dev Size : 10476544 (9.99 GiB 10.73 GB)\n      Raid Devices : 4\n     Total Devices : 4\n       Persistence : Superblock is persistent\n\n       Update Time : Thu Nov  8 16:15:11 2018\n             State : clean\n    Active Devices : 4\n   Working Devices : 4\n    Failed Devices : 0\n     Spare Devices : 0\n\n            Layout : near=2\n        Chunk Size : 512K\n\nConsistency Policy : resync\n\n              Name : ecs-raid10.novalocal:0  (local to host ecs-raid10.novalocal)\n              UUID : f400dbf9:60d211d9:e006e07b:98f8758c\n            Events : 19\n\n    Number   Major   Minor   RaidDevice State\n       0     253       16        0      active sync set-A   /dev/vdb\n       1     253       32        1      active sync set-B   /dev/vdc\n       2     253       48        2      active sync set-A   /dev/vdd\n       3     253       64        3      active sync set-B   /dev/vde\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-automatic-start-of-the-raid-array-at-server-startup",children:"Configuring Automatic Start of the RAID Array at Server Startup"}),"\n",(0,r.jsx)(n.p,{children:"This section shows how to add RAID array information, such as the device\nname and UUID to the mdadm configuration file. In this case, the RAID\narray can be started by querying information in the configuration file\nwhen the system starts."}),"\n",(0,r.jsx)(n.p,{children:"In this example, the ECS runs CentOS Stream 9. Configurations vary\ndepending on the OS running on the ECS. This section is used for\nreference only. For the detailed operations and differences, see the\ncorresponding OS documents."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log in to the ECS as user ",(0,r.jsx)(n.strong,{children:"root"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to view the RAID array information:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mdadm \\--detail \\--scan\n"})}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# mdadm --detail --scan\nARRAY /dev/md0 metadata=1.2 name=ecs-raid10.novalocal:0 UUID=f400dbf9:60d211d9:e006e07b:98f8758c\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Perform the following operations to add information of the new RAID array to the mdadm file:"}),"\n",(0,r.jsxs)(n.p,{children:["a.  Run the following command to open the ",(0,r.jsx)(n.strong,{children:"mdadm.conf"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vi /etc/mdadm.conf\n"})}),"\n",(0,r.jsxs)(n.p,{children:["b.  Press ",(0,r.jsx)(n.em,{children:"i"})," to enter ",(0,r.jsx)(n.em,{children:"editing mode"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"c.  Add the following information to the end of the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"DEVICE /dev/vdb /dev/vdc /dev/vdd /dev/vde\nARRAY /dev/md0 metadata=1.2 name=ecs-raid10.novalocal:0 UUID=f400dbf9:60d211d9:e006e07b:98f8758c\n"})}),"\n",(0,r.jsx)(n.p,{children:"Description:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DEVICE"})," line: Indicates the device names of the disks that\nset up the RAID array. Multiple device names are separated\nwith spaces."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ARRAY"})," line: Indicates RAID array information. Input the RAID\narray information."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The preceding information is used for reference only. Add RAID\narray information based on your configuration and outputs."})}),"\n",(0,r.jsxs)(n.p,{children:["d.  Press ",(0,r.jsx)(n.em,{children:"ESC"}),", enter ",(0,r.jsx)(n.code,{children:":wq!"}),", and press ",(0,r.jsx)(n.em,{children:"ENTER"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The system saves the modifications and exits the vi editor."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the following command to check whether the ",(0,r.jsx)(n.strong,{children:"mdadm.conf"})," file\nis modified:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"more /etc/mdadm.conf\n"})}),"\n",(0,r.jsx)(n.p,{children:"Information similar to the following is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[root@ecs-raid10 ~]# more /etc/mdadm.conf\nDEVICE /dev/vdb /dev/vdc /dev/vdd /dev/vde\nARRAY /dev/md0 metadata=1.2 name=ecs-raid10.novalocal:0 UUID=f400dbf9:60d211d9:e006e07b:98f8758c\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the information added is displayed, the file is successfully modified."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,r.jsx)(n.h3,{id:"introduction-to-common-raid-arrays",children:"Introduction to Common RAID Arrays"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["RAID Level: RAID 0","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Description: RAID 0 stores data on multiple disks, implementing parallel read/write and providing the fastest read/write speed."}),"\n",(0,r.jsx)(n.li,{children:"Read/Write Performance: Parallel read/write from multiple disks achieves high performance."}),"\n",(0,r.jsx)(n.li,{children:"Security: Worst No redundancy capability. If one disk is damaged, the data of the entire RAID array is unavailable."}),"\n",(0,r.jsx)(n.li,{children:"Disk Usage: 100%"}),"\n",(0,r.jsx)(n.li,{children:"Min. Number of Disks Required: 2"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RAID Level: RAID 1","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Description: RAID 1 implements data redundancy based on data mirroring. Half of the disk capacity in the RAID array is used, and the other half is used for mirroring to provide data backup."}),"\n",(0,r.jsx)(n.li,{children:"Read/Write Performance: Read performance: Same as a single disk Write performance: Data needs to be written into two disks. The write performance is lower than that of a single disk."}),"\n",(0,r.jsx)(n.li,{children:"Security: Highest Provides full backup of disk data. If a disk in the RAID array fails, the system automatically uses the data on the mirror disk."}),"\n",(0,r.jsx)(n.li,{children:"Disk Usage: 50%"}),"\n",(0,r.jsx)(n.li,{children:"Min. Number of Disks Required: 2"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RAID Level: RAID 01","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Description: RAID 01 combines RAID 0 and RAID 1, in which half disks are first grouped into RAID 0 stripes and then used together with the other half to set up a RAID 1 array."}),"\n",(0,r.jsx)(n.li,{children:"Read/Write Performance: Read performance: Same as RAID 0 Write performance: Same as RAID 1"}),"\n",(0,r.jsx)(n.li,{children:"Security: The security of RAID 01 is lower than that of RAID 10."}),"\n",(0,r.jsx)(n.li,{children:"Disk Usage: 50%"}),"\n",(0,r.jsx)(n.li,{children:"Min. Number of Disks Required: 4"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RAID Level: RAID 10","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Description: RAID 10 combines RAID 1 and RAID 0, in which half disks are first set up as a RAID 1 array and then used together with the other half to create RAID 0 stripes."}),"\n",(0,r.jsx)(n.li,{children:"Read/Write Performance: Read performance: Same as RAID 0 Write performance: Same as RAID 1"}),"\n",(0,r.jsx)(n.li,{children:"Security: The security performance of RAID 10 is the same as that of RAID 1."}),"\n",(0,r.jsx)(n.li,{children:"Disk Usage: 50%"}),"\n",(0,r.jsx)(n.li,{children:"Min. Number of Disks Required: 4"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RAID Level: RAID 5","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Description: RAID 5 does not specify a dedicated parity disk and consists of block-level striping with parity information distributed among the disks."}),"\n",(0,r.jsx)(n.li,{children:"Read/Write Performance: Read performance: Same as RAID 0 Write performance: Because parity data needs to be written into disks, the write performance is lower than that of a single disk."}),"\n",(0,r.jsx)(n.li,{children:"Security: The security of RAID 5 is lower than that of RAID 10."}),"\n",(0,r.jsx)(n.li,{children:"Disk Usage: 66.7%"}),"\n",(0,r.jsx)(n.li,{children:"Min. Number of Disks Required: 3"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},51234:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0139689760-c3ff630708b83e74c8f80d0b0dd9bf58.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(96540);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);