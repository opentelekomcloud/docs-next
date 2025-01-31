"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[57780],{75267:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"best-practices/storage/object-storage-service/accessing-obs-through-an-nginx-reverse-proxy","title":"Accessing OBS Through an NGINX Reverse Proxy","description":"Generally, you can access OBS using a bucket\'s access domain name (for example, https://bucketname.obs.eu-de.otc.t-systems.com) provided by OBS or using a user-defined domain name bound to an OBS bucket.","source":"@site/docs/best-practices/storage/object-storage-service/accessing-obs-through-an-nginx-reverse-proxy.md","sourceDirName":"best-practices/storage/object-storage-service","slug":"/best-practices/storage/object-storage-service/accessing-obs-through-an-nginx-reverse-proxy","permalink":"/docs-next/pr-preview/pr-200/docs/best-practices/storage/object-storage-service/accessing-obs-through-an-nginx-reverse-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/storage/object-storage-service/accessing-obs-through-an-nginx-reverse-proxy.md","tags":[{"inline":true,"label":"storage","permalink":"/docs-next/pr-preview/pr-200/docs/tags/storage"},{"inline":true,"label":"obs","permalink":"/docs-next/pr-preview/pr-200/docs/tags/obs"},{"inline":true,"label":"reverse-proxy","permalink":"/docs-next/pr-preview/pr-200/docs/tags/reverse-proxy"},{"inline":true,"label":"nginx","permalink":"/docs-next/pr-preview/pr-200/docs/tags/nginx"}],"version":"current","frontMatter":{"id":"accessing-obs-through-an-nginx-reverse-proxy","title":"Accessing OBS Through an NGINX Reverse Proxy","tags":["storage","obs","reverse-proxy","nginx"]},"sidebar":"bestPracticesSidebar","previous":{"title":"RAID Array Creation with EVS Disks","permalink":"/docs-next/pr-preview/pr-200/docs/best-practices/storage/elastic-volume-service/raid-array-creation-with-evs-disks"}}');var t=n(74848),i=n(28453);const o={id:"accessing-obs-through-an-nginx-reverse-proxy",title:"Accessing OBS Through an NGINX Reverse Proxy",tags:["storage","obs","reverse-proxy","nginx"]},c="Accessing OBS Through an NGINX Reverse Proxy",a={},d=[{value:"Solution Design",id:"solution-design",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing NGINX on an ECS",id:"installing-nginx-on-an-ecs",level:2},{value:"Configuring NGINX as reverse proxy for your OBS bucket",id:"configuring-nginx-as-reverse-proxy-for-your-obs-bucket",level:2},{value:"Configuring an OBS bucket policy to allow the IP address of the NGINX proxy server to access OBS",id:"configuring-an-obs-bucket-policy-to-allow-the-ip-address-of-the-nginx-proxy-server-to-access-obs",level:2},{value:"Verifying the reverse proxy configuration",id:"verifying-the-reverse-proxy-configuration",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"accessing-obs-through-an-nginx-reverse-proxy",children:"Accessing OBS Through an NGINX Reverse Proxy"})}),"\n",(0,t.jsxs)(s.p,{children:["Generally, you can access OBS using a bucket's access domain name (for example, ",(0,t.jsxs)(s.strong,{children:["https://",(0,t.jsx)(s.code,{children:"bucketname"}),".obs.eu-de.otc.t-systems.com"]}),") provided by OBS or using a user-defined domain name bound to an OBS bucket."]}),"\n",(0,t.jsx)(s.p,{children:"In some cases, you may need to use a fixed IP address to access OBS. For\nsecurity purposes, some enterprises need to set a blacklist and a\nwhitelist of external IP addresses. In this case, a fixed IP address is\nrequired. Also for security purposes, an OBS bucket does not have a\nfixed IP address, because the DNS service of Open Telekom Cloud resolves\nthe bucket access domain name to different IP addresses."}),"\n",(0,t.jsx)(s.p,{children:"In this case, you can set up an NGINX reverse proxy server on an ECS so\nthat you can access OBS through a fixed IP address."}),"\n",(0,t.jsx)(s.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,t.jsx)(s.p,{children:"This part explains how to deploy NGINX on an ECS and set up an NGINX\nreverse proxy server. The proxy is imperceptible. Requests are sent to\nthe reverse proxy server, which then obtains the required data from OBS\nand returns the data to users. The reverse proxy server and OBS work as\na whole. Only the IP address of the proxy server is exposed, while the\nactual domain name or IP address of OBS is hidden."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Figure 1 Principles of accessing OBS through an NGINX reverse\nproxy",src:n(89571).A+"",width:"777",height:"534"})}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["You know the region and access domain name of the bucket. For example, the access domain name of a bucket named ",(0,t.jsx)(s.code,{children:"nginx-obs"})," in the ",(0,t.jsx)(s.strong,{children:"eu-de"})," region is ",(0,t.jsx)(s.code,{children:"nginx-obs.obs.eu-de.otc.t-systems.com"}),". To obtain the information, see ",(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/object-storage-service/umn/obs_browser_operation_guide/managing_buckets/viewing_basic_information_of_a_bucket.html",children:"Querying Basic Information of a\nBucket"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["You have a Linux ECS ",(0,t.jsx)(s.strong,{children:"in the same region"}),". CentOS is used here as an\nexample. For details, see ",(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/elastic-cloud-server/umn/getting_started/creating_an_ecs/index.html",children:"Creating an\nECS"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"The ECS is bound with an EIP, so that you can download the NGINX\ninstallation package over the public network."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"installing-nginx-on-an-ecs",children:"Installing NGINX on an ECS"}),"\n",(0,t.jsx)(s.p,{children:"In this example, CentOS Stream 9 is used as an example."}),"\n",(0,t.jsx)(s.p,{children:"a.  Log in to the ECS where you will set up the NGINX reverse proxy\nserver."}),"\n",(0,t.jsx)(s.p,{children:"b.  Run the following command to install NGINX:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo dnf install nginx\n"})}),"\n",(0,t.jsx)(s.p,{children:"c.  Run the following commands to start NGINX and configure NGINX to\nstart upon system startup:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo systemctl start nginx\nsudo systemctl enable nginx\n"})}),"\n",(0,t.jsx)(s.p,{children:"d.  Run the following commands to allow HTTP and HTTPS traffic and\nthen restart the firewall:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo firewall-cmd --permanent --zone=public --add-service=http\nsudo firewall-cmd --permanent --zone=public --add-service=https\nsudo firewall-cmd --reload \n"})}),"\n",(0,t.jsxs)(s.p,{children:["e.  Use a browser on any device to access ",(0,t.jsx)(s.code,{children:"http://**ECS EIP/"}),". If\nthe following information is displayed, NGINX is successfully\ninstalled."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Figure 2 NGINX installed\nsuccessfully",src:n(17252).A+"",width:"1262",height:"1085"})}),"\n",(0,t.jsx)(s.h2,{id:"configuring-nginx-as-reverse-proxy-for-your-obs-bucket",children:"Configuring NGINX as reverse proxy for your OBS bucket"}),"\n",(0,t.jsxs)(s.p,{children:["a.  Run the following command to open the ",(0,t.jsx)(s.em,{children:"default.conf"})," file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"vim /etc/nginx/conf.d/default.conf\n"})}),"\n",(0,t.jsxs)(s.p,{children:["b.  Press the ",(0,t.jsx)(s.em,{children:"i"})," key to go to the edit mode and modify the\n",(0,t.jsx)(s.em,{children:"default.conf"})," file."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"server {\n      listen       80;\n      server_name  *.*.*.*;  # Enter the EIP of the ECS.\n      proxy_buffering off;  # Disable the proxy buffer (memory).\n\n      location / {\n           proxy_pass  https://nginx-obs.obs.eu-de.otc.t-systems.com;  #Enter the OBS bucket domain name that starts with http:// or https://.\n           index  index.html index.htm ;  #Specify the homepage of the website. If there are multiple files, Nginx checks the files based on their enumeration sequence.\n        }\n}\n"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"server_name"}),(0,t.jsx)(s.td,{children:"IP address that provides the reverse proxy service. It is the fixed IP address that is exposed to end users for access. Enter the EIP of the ECS where the NGINX reverse proxy service is deployed."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"proxy_pass"}),(0,t.jsxs)(s.td,{children:["IP address of the proxied server. Enter the OBS bucket access domain name required in ",(0,t.jsx)(s.a,{href:"#prerequisites",children:"Prerequisites"}),". The domain name must start with http:// or https://. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Example: ",(0,t.jsx)(s.a,{href:"https://nginx-obs.obs.eu-de.otc.t-systems.com",children:"https://nginx-obs.obs.eu-de.otc.t-systems.com"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"proxy_buffering"}),(0,t.jsxs)(s.td,{children:["Whether to enable the proxy buffer. The value can be ",(0,t.jsx)(s.code,{children:"on"})," or ",(0,t.jsx)(s.code,{children:"off"}),". If this parameter is set to on, Nginx stores the response returned by the backend in a buffer and then sends the data to the client. If this parameter is set to off, Nginx sends the response to the client as soon as it receives the data from the backend. Default value: ",(0,t.jsx)(s.code,{children:"on"})," ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Example: ",(0,t.jsx)(s.code,{children:"proxy_buffering off"})]})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["When you use an API, SDK, or obsutil for calling, set ",(0,t.jsx)(s.strong,{children:"proxy_pass"})," to the region domain name. The following is an example: ",(0,t.jsx)(s.code,{children:"obs.eu-de.otc.t-systems.com"}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:["c.  Press the ",(0,t.jsx)(s.em,{children:"ESC"})," key and enter ",(0,t.jsx)(s.em,{children:":wq"})," to save the\nconfiguration and exit."]}),"\n",(0,t.jsx)(s.p,{children:"d.  Run the following command to check the status of the NGINX\nconfiguration file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo nginx -t\n"})}),"\n",(0,t.jsx)(s.p,{children:"e.  Run the following command to restart the NGINX service for the\nconfiguration to take effect:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo systemctl restart nginx\n"})}),"\n",(0,t.jsx)(s.h2,{id:"configuring-an-obs-bucket-policy-to-allow-the-ip-address-of-the-nginx-proxy-server-to-access-obs",children:"Configuring an OBS bucket policy to allow the IP address of the NGINX proxy server to access OBS"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["This step is ",(0,t.jsx)(s.strong,{children:"optional"}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:["If your bucket is publicly read or the URL needs to have a signature\ncontained when accessing objects in a private bucket, skip this\nstep. For details, see ",(0,t.jsx)(s.a,{href:"https://docs.otc.t-systems.com/object-storage-service/api-ref/calling_apis/authentication/authentication_of_signature_in_a_url.html",children:"Authentication of Signature in a\nURL"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"If you do not want URLs containing a signature to access resources\nin your private bucket, configure the following bucket policy that\nallows only the IP address of the NGINX proxy server to access your\nbucket."}),"\n",(0,t.jsxs)(s.p,{children:["a.  In the navigation pane of OBS Console, choose ",(0,t.jsx)(s.em,{children:"Object\nStorage"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["b.  In the bucket list, click the bucket you want to go to the\n",(0,t.jsx)(s.em,{children:"Objects"})," page."]}),"\n",(0,t.jsxs)(s.p,{children:["c.  In the navigation pane, choose ",(0,t.jsx)(s.em,{children:"Permissions"})," -> ",(0,t.jsx)(s.em,{children:"Bucket\nPolicies"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["d.  Click ",(0,t.jsx)(s.em,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["e.  Choose a policy configuration method you like. ",(0,t.jsx)(s.em,{children:"Visual Editor"})," is used here."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Figure 3  ",src:n(49500).A+"",width:"998",height:"742"})}),"\n",(0,t.jsx)(s.p,{children:"f.  Configure the following parameters."}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("caption",{children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{children:"Table 2"}),"\nBucket policy parameters"]})}),(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Parameter"}),(0,t.jsx)("th",{}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Policy Name"}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Enter a policy name."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Policy content"}),(0,t.jsx)("td",{children:"Effect"}),(0,t.jsxs)("td",{children:["Select ",(0,t.jsx)("strong",{children:"Allow"}),"."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Principal"}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:["To select ",(0,t.jsx)("strong",{children:"All accounts"})," enter ",(0,t.jsx)("strong",{children:"*"}),"."]})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Resources"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.p,{children:"Method 1:"}),(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:["Select ",(0,t.jsx)("strong",{children:"Entire bucket (including the objects in it)"}),"."]})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.p,{children:"Method 2:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Select ",(0,t.jsx)("strong",{children:"Current bucket"})," and ",(0,t.jsx)("strong",{children:"Specified objects"}),"."]}),(0,t.jsxs)("li",{children:["Set the resource path to ",(0,t.jsx)("strong",{children:"*"})," to indicate all objects in the bucket."]})]})]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Actions"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Choose ",(0,t.jsx)("strong",{children:"Customize"}),"."]}),(0,t.jsxs)("li",{children:["Select ",(0,t.jsx)("strong",{children:"Get*"})," and ",(0,t.jsx)("strong",{children:"List*"}),"."]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Conditions (Optional)"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Key"}),": Select ",(0,t.jsx)("strong",{children:"SourceIp"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Condition Operator"}),": Select ",(0,t.jsx)("strong",{children:"IpAddress"})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{children:"Value"}),":"]}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("p",{children:"If the ECS uses a public DNS, the value is as follows:"}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"Elastic IP address of the ECS"})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("p",{children:"If the ECS uses a Open Telekom Cloud private DNS, the value is as follows:"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"100.64.0.0/10,214.0.0.0/7,"}),(0,t.jsx)("em",{children:"Private IP address of the ECS"})]})]})]})]})]})})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["In conditions you can click ",(0,t.jsx)(s.strong,{children:"Add"})," to configure IP addresses (CIDR blocks).\nIP addresses in the range starting with ",(0,t.jsx)(s.strong,{children:"100"})," or ",(0,t.jsx)(s.strong,{children:"214"})," are for ECSs to access OBS through an internal network."]})}),"\n",(0,t.jsxs)(s.p,{children:["g.  Click ",(0,t.jsx)(s.em,{children:"Create"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"verifying-the-reverse-proxy-configuration",children:"Verifying the reverse proxy configuration"}),"\n",(0,t.jsx)(s.p,{children:"On any device, use the ECS EIP and object name to access specified\nOBS resources. If the resources are properly accessed, the\nconfiguration is successful."}),"\n",(0,t.jsxs)(s.p,{children:["For example, visit ",(0,t.jsx)(s.code,{children:"http://**ECS EIP**/otc.jpg"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Figure 4 Using a fixed IP address to access OBS\nresources",src:n(12175).A+"",width:"584",height:"409"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},17252:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/en-us_image_0273792190-f2c923a5984009612a0b2e24f7e68acd.png"},89571:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/en-us_image_0273872842-ba97206f658bf04a1c82220720165d9e.png"},12175:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/en-us_image_0273876194-3b9dee255502bf19e42a7ccb16955404.png"},49500:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/policy-visual-editor-511b51141a7397415cb939f069de0c74.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);