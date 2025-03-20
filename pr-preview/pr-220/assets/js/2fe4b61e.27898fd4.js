"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[21990],{98468:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc","title":"Establish a Point-to-Site VPN Connection between your Development Machine and a VPC","description":"Establishing a Point-to-Site (P2S) VPN connection between your development machine and a Virtual Private Cloud (VPC) offers several advantages for developers. This setup allows you to securely access resources within the VPC from your local environment as if they were part of your private network, without exposing them on the public internet.","source":"@site/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc.md","sourceDirName":"blueprints/by-use-case/networking","slug":"/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc","permalink":"/docs-next/pr-preview/pr-220/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/networking/establish-a-p2s-vpn-connection-with-a-vpc.md","tags":[{"inline":true,"label":"vpc","permalink":"/docs-next/pr-preview/pr-220/docs/tags/vpc"},{"inline":true,"label":"vpn","permalink":"/docs-next/pr-preview/pr-220/docs/tags/vpn"},{"inline":true,"label":"openvpn","permalink":"/docs-next/pr-preview/pr-220/docs/tags/openvpn"}],"version":"current","frontMatter":{"id":"establish-a-p2s-vpn-connection-with-a-vpc","title":"Establish a Point-to-Site VPN Connection between your Development Machine and a VPC","tags":["vpc","vpn","openvpn"]},"sidebar":"blueprintsSidebar","previous":{"title":"Create a Public DNS Endpoint with ExternalDNS","permalink":"/docs-next/pr-preview/pr-220/docs/blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns"},"next":{"title":"Observability","permalink":"/docs-next/pr-preview/pr-220/docs/blueprints/by-use-case/observability/"}}');var s=i(74848),r=i(28453);const o={id:"establish-a-p2s-vpn-connection-with-a-vpc",title:"Establish a Point-to-Site VPN Connection between your Development Machine and a VPC",tags:["vpc","vpn","openvpn"]},l="Establish a Point-to-Site VPN Connection between your Development Machine and a VPC",c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating an ECS Server",id:"creating-an-ecs-server",level:2},{value:"Installing &amp; Configuring an OpenVPN Server",id:"installing--configuring-an-openvpn-server",level:2},{value:"Validating the OpenVPN Server",id:"validating-the-openvpn-server",level:2},{value:"Installing &amp; Configuring an OpenVPN Client",id:"installing--configuring-an-openvpn-client",level:2},{value:"Validating the OpenVPN Client",id:"validating-the-openvpn-client",level:2},{value:"Validating Connectivity",id:"validating-connectivity",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"establish-a-point-to-site-vpn-connection-between-your-development-machine-and-a-vpc",children:"Establish a Point-to-Site VPN Connection between your Development Machine and a VPC"})}),"\n",(0,s.jsx)(n.p,{children:"Establishing a Point-to-Site (P2S) VPN connection between your development machine and a Virtual Private Cloud (VPC) offers several advantages for developers. This setup allows you to securely access resources within the VPC from your local environment as if they were part of your private network, without exposing them on the public internet."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(71520).A+"",width:"1800",height:"423"})}),"\n",(0,s.jsx)(n.p,{children:"One key reason to set up such a connection is to enhance security. By using a P2S VPN, all data exchanged between your development machine and the VPC travels through an encrypted tunnel, protecting sensitive information from potential interception. This secure pathway is crucial for developers working with proprietary or confidential projects that require robust protection measures. Additionally, this configuration is convenient as it enables remote access to resources within the VPC without the need for a dedicated on-premises server. Developers can work seamlessly across different locations while maintaining direct and private connectivity to their cloud environments. It also facilitates collaboration among team members who may be distributed geographically but need consistent access to shared development resources. Moreover, setting up a P2S VPN minimizes latency issues compared to accessing the VPC through public internet routes, ensuring smoother interactions with cloud-hosted applications or databases. This setup not only optimizes performance but also allows for more efficient debugging and testing of applications within their intended deployment environment. Overall, establishing this type of connection is an effective way to bolster security, improve accessibility, and streamline development workflows in a cloud-centric architecture."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before we begin setting up a Point-to-Site (P2S) VPN connection between your development machine and an Open Telekom Cloud Virtual Private Cloud (VPC), we are going to need:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["an ",(0,s.jsx)(n.strong,{children:"ECS Server (Ubuntu 22.04)"}),": A General-purpose (1 vCPU, 2 GiB) ",(0,s.jsx)(n.code,{children:"s3.medium.2"})," instance will suffice."]}),"\n",(0,s.jsxs)(n.li,{children:["an ",(0,s.jsx)(n.strong,{children:"OpenVPN"})," server: You need to install OpenVPN on the ECS server. OpenVPN serves as the backbone for setting up the P2S VPN by allowing secure encrypted communication between your development machine and the VPC."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-an-ecs-server",children:"Creating an ECS Server"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.em,{children:"Open Telekom Cloud Console"})," -> ",(0,s.jsx)(n.em,{children:"Elastic Cloud Server"}),", click ",(0,s.jsx)(n.em,{children:"Create ECS"}),". Choose the ",(0,s.jsx)(n.strong,{children:"Flavor"})," and ",(0,s.jsx)(n.strong,{children:"Image"})," as depicted below and assign a ",(0,s.jsx)(n.code,{children:"40GB"})," as the ",(0,s.jsx)(n.strong,{children:"System Disk"})," size."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(83601).A+"",width:"1906",height:"787"})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:"Next: Configure Network"}),"."]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose the VPC you want to establish a connection with, let OTC ",(0,s.jsx)(n.strong,{children:"Auto assign"})," an EIP to the ECS instance and set ",(0,s.jsx)(n.strong,{children:"Bandwidth Size"})," to ",(0,s.jsx)(n.code,{children:"100Mbit/s"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(37892).A+"",width:"1906",height:"787"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Follow the remaining steps of the wizard and wait until the ECS instance is provisioned."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.em,{children:"Network Console"})," -> ",(0,s.jsx)(n.em,{children:"Security Groups"})," and click ",(0,s.jsx)(n.em,{children:"Create Security Group"}),". Add two new ",(0,s.jsx)(n.strong,{children:"Inbound Rules"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Protocol"}),": ",(0,s.jsx)(n.code,{children:"TCP"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Port"}),": ",(0,s.jsx)(n.code,{children:"22"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source"}),": ",(0,s.jsx)(n.code,{children:"0.0.0.0/0"}),"\n",(0,s.jsx)("br",{})," ---"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Protocol"}),": ",(0,s.jsx)(n.code,{children:"ICMP"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Port"}),": ",(0,s.jsx)(n.code,{children:"all"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source"}),": ",(0,s.jsx)(n.code,{children:"0.0.0.0/0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the new Security Group to the Security Groups of the ECS Server"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installing--configuring-an-openvpn-server",children:"Installing & Configuring an OpenVPN Server"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Establish an SSH connection to the ECS server using its Elastic IP."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In order to install OpenVPN in an easy and streamlined fashion, we are going to utilize the script provided by ",(0,s.jsx)(n.a,{href:"https://github.com/angristan/openvpn-install",children:"openvpn-install"})," project."]}),"\n",(0,s.jsx)(n.p,{children:"Download the script and make it executable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh\nchmod +x openvpn-install.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Execute the script & follow the wizard:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo ./openvpn-install.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(10517).A+"",width:"1105",height:"944"})}),"\n",(0,s.jsx)(n.admonition,{title:"Make sure:",type:"important",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"you declare as IP address the EIP of the ECS Server. If you don't know the EIP, either look it up in the Open Telekom Cloud Console or simply run the following command in the terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl ifconfig.me\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["write down the port you set OpenVPN to listen to (unless you left the default ",(0,s.jsx)(n.code,{children:"1194"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["choose ",(0,s.jsx)(n.code,{children:"UDP"})," as the protocol"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:"Let the wizard create a client (that would be your development machine):"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(36525).A+"",width:"1207",height:"578"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You will find the configuration file for the client in ",(0,s.jsx)(n.strong,{children:"~/client_name.ovpn"}),". Copy that file to your development machine."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.em,{children:"Network Console"})," -> ",(0,s.jsx)(n.em,{children:"Security Groups"}),", and click ",(0,s.jsx)(n.em,{children:"Create Security Group"}),". Add a new ",(0,s.jsx)(n.strong,{children:"Inbound Rule"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Protocol"}),": ",(0,s.jsx)(n.code,{children:"UDP"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Port"}),": ",(0,s.jsx)(n.code,{children:"1194"})," (or the custom port you set OpenVPN to listen to during the wizard)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source"}),": ",(0,s.jsx)(n.code,{children:"0.0.0.0/0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Attach the new security group to the ECS server."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"validating-the-openvpn-server",children:"Validating the OpenVPN Server"}),"\n",(0,s.jsxs)(n.p,{children:["Let's inspect the network interfaces and their configuration using ",(0,s.jsx)(n.code,{children:"ip a"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(50061).A+"",width:"1032",height:"369"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can observe, we have a new tunnel interface, ",(0,s.jsx)(n.code,{children:"tun0"}),", with IPv4 address ",(0,s.jsx)(n.code,{children:"10.8.0.1/24"})," which is up and running."]}),"\n",(0,s.jsx)(n.p,{children:"Lastly, let's list all listening TCP and UDP sockets associated with OpenVPN processes on this system, displaying their addresses, port numbers, and related process information by running the following command in the terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'sudo ss -tupln | grep openvpn\n\nudp   UNCONN 0   0   0.0.0.0:1194   0.0.0.0:*   users:(("openvpn",pid=3431,fd=7))                       \n'})}),"\n",(0,s.jsx)(n.p,{children:"That means we are good to go and configure our client."}),"\n",(0,s.jsx)(n.h2,{id:"installing--configuring-an-openvpn-client",children:"Installing & Configuring an OpenVPN Client"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In this blueprint, we will demonstrate how to configure an OpenVPN client specifically in a Linux/GNOME environment. Please note that terminal-based configuration methods or setups for other operating systems are not covered in this document."})}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.em,{children:"Settings"})," -> ",(0,s.jsx)(n.em,{children:"Network"})," -> ",(0,s.jsx)(n.em,{children:"VPN"}),", click the ",(0,s.jsx)(n.em,{children:"add symbol"})," and then select ",(0,s.jsx)(n.em,{children:"Import from file..."}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(64315).A+"",width:"1003",height:"843"})}),"\n",(0,s.jsxs)(n.p,{children:["and import the ",(0,s.jsx)(n.strong,{children:"client_name.ovpn"})," file we copied from the ECS Server in the previous step."]}),"\n",(0,s.jsx)(n.h2,{id:"validating-the-openvpn-client",children:"Validating the OpenVPN Client"}),"\n",(0,s.jsxs)(n.p,{children:["Establish the VPN connection and then inspect, on your development machine the network interfaces and their configuration with ",(0,s.jsx)(n.code,{children:"ip a"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(78603).A+"",width:"1124",height:"327"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can observe we have a new tunnel interface, ",(0,s.jsx)(n.code,{children:"tun0"}),", with IPv4 address ",(0,s.jsx)(n.code,{children:"10.8.0.2/24"})," which is up and running. If you inquire for the public IP address of your development machine now, with ",(0,s.jsx)(n.code,{children:"curl ifconfig.me"}),", you will notice it returns the EIP that is assigned to OpenVPN instance running on the ECS server."]}),"\n",(0,s.jsx)(n.h2,{id:"validating-connectivity",children:"Validating Connectivity"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ping ",(0,s.jsx)(n.code,{children:"10.8.0.1"})," from your development machine; this test should succeed, otherwise make sure you have allowed inbound ICMP traffic to your ECS Server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create, an additional ECS server in the same VPC with the OpenVPN Server and allow inbound ICMP traffic via a security group. Ping the private IP address of the new ECS server from your development machine. This test should succeed as well, otherwise ensure that inbound ICMP traffic is allowed to the ECS server."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["e.g., in our lab, the VPC has the following CIDR ",(0,s.jsx)(n.code,{children:"192.168.10.0/24"})," and the new ECS server got assigned the IP address ",(0,s.jsx)(n.code,{children:"192.168.10.183"})," while\nthe OpenVPN Server has been assigned the IP address ",(0,s.jsx)(n.code,{children:"192.168.10.16"}),". In our case we are going to ping ",(0,s.jsx)(n.code,{children:"192.168.10.183"})," from our development machine. Adjust accordingly to your VPC CIDR."]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},83601:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-01-24_08-26-41-ac8d26369a9de447e8f9202d28e9a501.png"},37892:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-01-24_08-37-06-b3c7123906675293b8c06818dd1f3425.png"},10517:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-01-24_08-59-07-0def07e301f78e4b4225c5f25f59acf3.png"},36525:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-01-24_09-25-27-c7005396d2a151137d43586ab21e0004.png"},64315:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-01-24_12-02-35-bdd560ff02febb13b57fc9537ba97068.png"},50061:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-01-24_12-09-29-3a1fd50df220f32811aa4bbfba3c534e.png"},78603:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-01-24_12-22-20-3b06da031159b1d455d55a16ec10235b.png"},71520:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Screenshot_from_2025-02-06_07-47-41-b35a2bdad0444a515c8dbb120e44f762.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);