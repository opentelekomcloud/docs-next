"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[18346],{56383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=t(74848),a=t(28453);const r={id:"using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet",title:"Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet",tags:["nat-gateway","vpc-peering"]},c="Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet",i={id:"best-practices/networking/nat-gateway/using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet",title:"Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet",description:"Two VPCs, VPC A and VPC B are in the same region. A public NAT gateway is configured for subnet A in VPC A and you can add SNAT and DNAT rules for Internet connectivity. Subnet B connects to subnet A through a VPC peering connection and uses the public NAT gateway of subnet A to communicate with the Internet.",source:"@site/docs/best-practices/networking/nat-gateway/using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet.md",sourceDirName:"best-practices/networking/nat-gateway",slug:"/best-practices/networking/nat-gateway/using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet",permalink:"/docs-next/pr-preview/pr-145/docs/best-practices/networking/nat-gateway/using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/networking/nat-gateway/using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet.md",tags:[{inline:!0,label:"nat-gateway",permalink:"/docs-next/pr-preview/pr-145/docs/tags/nat-gateway"},{inline:!0,label:"vpc-peering",permalink:"/docs-next/pr-preview/pr-145/docs/tags/vpc-peering"}],version:"current",frontMatter:{id:"using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet",title:"Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet",tags:["nat-gateway","vpc-peering"]},sidebar:"bestPracticesSidebar",previous:{title:"Routing Traffic to Backend Servers in Different VPCs from the Load Balancer",permalink:"/docs-next/pr-preview/pr-145/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer"},next:{title:"VPC and Subnet Planning Suggestions",permalink:"/docs-next/pr-preview/pr-145/docs/best-practices/networking/virtual-private-cloud/vpc-and-subnet-planning-suggestions"}},d={},o=[{value:"Solution Design",id:"solution-design",level:2},{value:"Topology",id:"topology",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Verifying Connectivity",id:"verifying-connectivity",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-a-public-nat-gateway-and-vpc-peering-to-enable-communications-between-vpcs-and-the-internet",children:"Using a Public NAT Gateway and VPC Peering to Enable Communications Between VPCs and the Internet"}),"\n",(0,s.jsx)(n.p,{children:"Two VPCs, VPC A and VPC B are in the same region. A public NAT gateway is configured for subnet A in VPC A and you can add SNAT and DNAT rules for Internet connectivity. Subnet B connects to subnet A through a VPC peering connection and uses the public NAT gateway of subnet A to communicate with the Internet."}),"\n",(0,s.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,s.jsxs)(n.p,{children:["The CIDR block of VPC A is ",(0,s.jsx)(n.code,{children:"192.168.0.0/16"})," and that of subnet A is ",(0,s.jsx)(n.code,{children:"192.168.1.0/24"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The CIDR block of VPC B is ",(0,s.jsx)(n.code,{children:"192.168.0.0/16"})," and that of subnet B is ",(0,s.jsx)(n.code,{children:"192.168.2.0/24"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"topology",children:"Topology"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A VPC peering connection is used to connect subnet A in VPC A to subnet B in VPC B."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A public NAT gateway is created in VPC A, and subnet B can use the public NAT gateway to communicate the Internet."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 1 Network topology",src:t(92881).A+"",width:"823",height:"308"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Advantages",type:"note",children:(0,s.jsx)(n.p,{children:"Only one public NAT gateway needs to be configured. Servers in the two VPCs can share the same public NAT gateway to communicate with the Internet, saving gateway resources."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If VPCs connected by a VPC peering connection have overlapping CIDR blocks, the connection can only enable communications between specific (non-overlapping) subnets in the VPCs."}),"\n",(0,s.jsxs)(n.li,{children:["All subnets of the two VPCs do not overlap with each other. For details, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/vpc_peering_connection_usage_examples.html",children:"VPC Peering Connection Usage Examples"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create VPC A, VPC B, subnet A, and subnet B."}),"\n",(0,s.jsxs)(n.p,{children:["For detailed operations, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_and_subnet/vpc/creating_a_vpc.html",children:"Creating a VPC"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a VPC peering connection."}),"\n",(0,s.jsxs)(n.p,{children:["Create a VPC peering connection between subnet A and subnet B. For detailed operations, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-cloud/umn/vpc_peering_connection/creating_a_vpc_peering_connection_with_another_vpc_in_your_account.html",children:"Creating a VPC Peering Connection with Another VPC in Your Account"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The local VPC is VPC A, and the peer VPC is VPC B."}),"\n",(0,s.jsxs)(n.p,{children:["Add a route in the route table of VPC B. Set ",(0,s.jsx)(n.em,{children:"Destination"})," to ",(0,s.jsx)(n.code,{children:"0.0.0.0/0"})," and ",(0,s.jsx)(n.em,{children:"Next Hop"})," to the created VPC peering connection between VPC A and VPC B."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a public NAT gateway."}),"\n",(0,s.jsxs)(n.p,{children:["Create a public NAT gateway with ",(0,s.jsx)(n.em,{children:"VPC"})," set to VPC A. For details about how to configure other parameters, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/nat-gateway/umn/managing_nat_gateways/creating_a_public_nat_gateway.html",children:"Creating a Public NAT Gateway"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add an SNAT rule."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.em,{children:"VPC"})," for ",(0,s.jsx)(n.em,{children:"Scenario"})," and subnet A for ",(0,s.jsx)(n.em,{children:"Subnet"}),". For more details, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/nat-gateway/umn/managing_snat_rules/adding_an_snat_rule.html",children:"Adding an SNAT Rule"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Add an SNAT rule for subnet B. Set ",(0,s.jsx)(n.em,{children:"Scenario"})," to ",(0,s.jsx)(n.em,{children:"Direct Connect/Cloud Connect"})," and enter the CIDR block of subnet B."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add a DNAT rule."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a DNAT rule for subnet A. Select ",(0,s.jsx)(n.em,{children:"VPC"})," for ",(0,s.jsx)(n.em,{children:"Scenario"})," and enter an IP address of a server in subnet A for ",(0,s.jsx)(n.em,{children:"Private IP Address"}),". For more details, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/nat-gateway/umn/managing_dnat_rules/adding_a_dnat_rule.html",children:"Adding a DNAT Rule"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Add a DNAT rule for subnet B. Set ",(0,s.jsx)(n.em,{children:"Scenario"})," to ",(0,s.jsx)(n.em,{children:"Direct Connect/Cloud Connect"})," and enter an IP address of a server in subnet B for ",(0,s.jsx)(n.em,{children:"Private IP Address"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verifying-connectivity",children:"Verifying Connectivity"}),"\n",(0,s.jsx)(n.p,{children:"After the configuration is complete, test the network connectivity."}),"\n",(0,s.jsx)(n.p,{children:"Log in to a server in subnet B and ping a public IP address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 2",src:t(26997).A+"",width:"619",height:"154"})}),"\n",(0,s.jsxs)(n.p,{children:["Log in to a server that can access the Internet and is not deployed in VPC A or VPC B. Use ",(0,s.jsx)(n.strong,{children:"curl"})," to check whether the server can communicate with subnet B via the EIP associated with the DNAT rule configured for subnet B."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 3",src:t(38179).A+"",width:"562",height:"665"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},92881:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001089261095-633fb26f35896808f68fc0fb09c97d3b.png"},26997:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmsAAACaCAYAAAD2HQ9xAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACPnSURBVHhe7ZxNbi1ZcJx7VYZX4G0IArQKAx57ZsADb8KAhvbAC/HAM6+kjWshoVAgMjNOVV3y8jEGH3QyfrLqskn20esn/fW//8///TuEEEIIIXwmf/3H//Sf/2b+4R//6e//8T//1//nde7AjMpvfkfXw7PKTjrO7DHsd/nS2T+dGfTVGTXOdBrO7DFdts6ocUbNm6a8d6Keh9rmOzrCGdVxtUkvlI/a5m+6q3X6pikfUT5qm7/pdzQF57ae8ruOm0Vt85nJU2BenVFTnRDCv+W//Nf/9vdf/+7f/4e/mX/+7//8b/jrr79attzmKzDfnXFmfcrWufSOymNH9TYdQQ+zDOa38+S9zkjpykMws52Vxz57yOS9C3wnZsrgDs4p7wX2K8caorqolc4aUj3FlMEdnOt0ZPNfOH08K7iHTBncwblOR7oM6wj2K7t1XnCv6ygPO4zjT7vYV2B2OyPVDyH8W14XNnlZU+FwnfwyCiGEEMIVcll7E3w5y2UthBBCCFfIZe2N1AUtF7UQQgghXCWXtRBCCCGEDyaXtRBCCCGEDyaXtRBCCCGED2a9rH3C37vqnsvv1uW+C+f9Og91Zsrgjg3uqR2YYe+r+M5nfxdPfs23PU8+K4QQwvPYlzUsfSXd85XeZb8D5/1UZvJQ2/wNzNZ56iofNeU/xTt3fzJPfW5nz1PPCiGE8Dy5rH0h+H5X3nXrK+0ptucpP9zjK7+m+ecXQgify+XLGup15hzqp77yXrBfs9JqRlT+qn8C96/sww73a0btSabnMdjrwOzU7TzUtkzpKtPRZUu/67OuwD2qs/mc2XzMbLNDdRDXn7SaQwjht3DrT9bKK787c97xVafT66y0rXPVPwGfyxqDGYR9nOuM2tOo3agpf4M73Q5Xx3nyHLp86Xd91hWY3XqT33moc2abN1QeNdfvwF4IIfzpPHJZUzN7p/6ksV7nSUO437FlymdUBrVOv5JFD89Po3ajpvwN7nQ7XB3nyXPo8qXf9VlXcLabkfIQ5bF2Om9seeWj5pxDCOG38OhlbfNQ2/xJY73OSsMOsvlF5ZwsM/WU52qoo9dln0DtRk35G9zpdrg6zpPngHl1VtqJ/zpvcBbnyWOUx9rpvLHllY+acw4hhN/CH3dZU75i85mn88p3tU7vsk/Au2tWYG+C813f1XGePAfMq7PSTvzXeYOzOE8eozzWTueNLa981JxzCCH8Fn7UZa07K5SP2l1/Y+tv/qR1epd9gu15yt/gTrfD1XGePIfKvwv1LNSUjvPkMcpj7XRGlLdpJ353DiGE34J9WeNfkp2OcIZzm69ynf4d/oTqFlMGd2CGdfQQlbvDtB815W9UB9kyyttmpDwH7jw9uzrS+Th3mcnD2fU51+mI6+PcnUMI4bewXtZCeBdf+S/e/Es+hBDCTyWXtfBtvPMCxbvf+awQQgjhneSyFr6Fujy98xL1Fc8IIYQQ3k0uayGEEEIIH0wuayGEEEIIH0wuayGEEEIIH0x7WeO/71Pwgs7nedOU95s5+ZpMuZM9fzLO10h5hZNhqoNMOaUpMOegeriPcXyHrbv5mGF9A3cyXQ51ZusqH+n8rddRvStd5okd7+KJz3l3x51nh/AU45+s8Td49w2v9NJQP51/O+7Xo8uh3mV+A9NnL2/62jgZRuUnzcleofY4+1Hb/I2tv/mOPuF03L0q52qoKw995U1c7SFP7HgX+G533/Nq/+5zQ3iKL7msldedEaX9VrqvkQv3f+PXdvoalnc348I7cC/qKnsF3O3s2nLung7sq11KczzFlnf3dTmlT5rykM1XXOkwT+x4F/xud97z6ue82gvhab7ssoZ0nRO6ful3fdYVuMftINznHagpH/XJY73ALmdxVr4D9lR/8ietZgen02VQ7zIuU195U/4Ud9eWc/d0YF/tUprjKba8u6/LKZ01nNljNl9RHdXdtDozKn/V39j6SjsFd/OuE6+YMuiF8DTWZW37hlQeanVWGnZO6Pql3/VZ3zjtqTxrNZfGPueUpjz0J22bJ1QWNdfvwN6Ek1cZ1lTGZesqvzQGMy5Od8s4OxTVU332CsxwVnkK3Ie4PudYRw9hr5uZzVdgh/s8n2idjtrmb2z9OqN2Cna3PZ2/9Qo3F8JVjv5krUPlWKu5NHVGbaPL4p47PusK3HPSK7YO+13+VEdPwZluntiyykfNOTs4eZUpTYG5Dafj7nVzzNa767vcec7WdcAdap+rdTpqdVZgp5i8Du7gzN6JhrqCM9hzUV3WVMbF2VUagj5mWEcPUbkQnuDLLmusbf4GZtVZaSf+6zzBObfHVE91WXdzm755BWecTrFllY+ac3Zw8k9lGLfzdI6ZetvOzT/hzrO2rgPuUPtcrdO77Oa92HwFd3Bm70SbdKZyThZRHdZUxmXbtc2nepcL4SlyWRt2TXDO7XWoPmsqc0XfvIIzTqfYsspHzTk7OPmnMshJ3s2e7ESm3rZz80+486yt64A71D5X6/Quu3kvNl/BHZzZO9EmveOJPGsq47Lt2uZTvcuF8BTfdllz5onKvgv1rElTmclztG2+qncea9s86Zt24ndnl63j7JwyynO1Tne1SS8m/063UBlXu+t1qA5qm7/prnbXm+Aezuw5WnfessrfcPoq47Lt2mald2c1I5MXgkt7WatvsO0brcvxvGmlsz+BvXfMrl7elut0RHms1cw59Dod4QznWFMZR0dcH+fufILqlcZgRuU6X2mKLTP55SGdhz1EZVBDNv9FlykdmXz0OKO8Ddyt9mw+onzsKb/LKQ81F9yp9ij/BWY41+lX/I2p3+kncJ93bX6X63SVmfQQThj/ZC2EEMKfQS4NIfxcclkLIYQ/nFzUQvjZ5LIWQgh/GHU5Q1QuhPAzyGUthBBCCOGDyWUthBBCCOGDyWUthBBCCOGDWS9r7t95OP17Ee5ehyd2XOXJz/EunPe78hmqg0w5pSkw56B6uI9xfIetu/knTH1nt5NhqoNMOaUpMOegeriPcXyHrbv5mGH9Sb7iGT+Zu1+frTv59ezT52OPmfLK29h6d3ZfpZ6pUHlG9Yopr7xPYbysuR+gcqcf9kqHeWLHVfDZ3/keE/Ve07s5GUblJ83JXuFkP2qbv7H1N/+EqVfetNfJMCo/aU72Cif7Udv8ja2/+Y7+FO/e/5Opr83Vr8/WdXY7GeakU9nTZ7xweld33+HuM1W/21m68j6J9rLmvjx+UCePXOkwT+y4Cj/7u96jo96P3/M048I7cC/qKnsF3O3s2nLung7sq11K25g65d3NuPAO3Iu6yl4Bdzu7tpy7pwP7apfS7nrhOvV1vfP13brObifDuJ3KuXnmau/dvOO91M7SlPdp3LqsYcbJM9VR3U2rM6PyV/2NqYNenTmLOvuTVrNL10O9y7hMfeVN+VPcXVvO3dOBfbVLaRtOp8ug3mVcpr7ypvwp7q4t5+7pwL7apbS73kZ1VR89zkxad67ZBXuqf+LjrHykfM6xPoH7ENdHOg97yNRBTvNI5Zkpt+ndjJTX+S/Qw/xdeCfO7G1UHjvdjJR3hfWyxlRxmx2ww32eT7ROR23zNyo7ddjvzpzHcwf2NlSHNZVx2brKL43BjIvT3TLODkX1VJ+9AjMbTkdlWFMZl62r/NIYzLg43S3j7FBUT/XZKzDDWeXdRe3etDp3qB08T6gsaqc+zye8s+vsdjJMdRj2u9nF6alMaRuqg1oH7kBU1oH727xR+Q3VQe2Eoz9ZQ63OCuxMcB5n9k401BWcwd4JW599nNmb/O7sojqlKTC34XTcvW6O2Xp3fZd3PMfpqExpCsxtOB13r5tjtt5d3+XOc7buHdTu7XnoO2c1b0z58hToc77mE97ZdXY7GQfcU2cF9yacjsqgps4TuOeEq33VK02BuQ7MOucnuHxZYyavgzs4s3eiTTpTOSfLbL3JVx5qztnF6bxr74unc8zU23Zu/gnveJbTeSrDuJ2nc8zU23Zu/gl3nrV176B2b89D3zmr2aE63Nt2sa/ypTGYwRzrDlvX2d1lSmc4V0z+1u1weiqDmjqj1sHZQmVfbL7C7Zzuxnx3xhm1q/z6y1pxmn+xdSZfeag5Zxenc7r3JO9mT3YiU2/bufknvONZTuepDHKSd7MnO5Gpt+3c/BPuPOuq56D62070nbOaTzjddZqfeGfX2e1kHKY9V5/h9FQGNXVG7Smu7HQ7p7sx352RTj/hj7qsdectq3yHLT/5ykPNObs4nSmjPFfrdFeb9GLy73QLlXE1x9vYus7uKaM8V+t0V5v0YvLvdAuVcbW73ovN31D9TTs9q3lCZVE79Xk+4amu2rP5kz6hOtOeyZvAXrdD6aipM2qqs3HS7/TNQ9xcgXl1Rk11rtBe1l4mPnR6kJNRcI+7yn+BGc51+hV/YuttvspgDufuvFFZZst1vtIUW2byy0M6D3uIyqCGbP6LLlM6MvnonaJ24G4EMyrX+UpTbJnJLw/pPOwhKoMasvkvukzpyOSjxxnlPQE+n5/DHvo4b2ek+g5b/66/ofovVHZi604+esqf4G7XdzITUxc99HHezkj1Hdz+Va+ojJMtMLudkepfYbysfRpPfOAQQgg7n/T7Nr/7w2/nx1zW8sMaQghfx/Q7t7wO1bnDu/aG8FP42Msa/uDnBzWEEL6OT/rd+0nvEsJ38aP+M2gIIYQQwm8jl7UQQgghhA8ml7UQQgghhA9mvay5f1fg9O8TuHsdnthxlSc/x7tw3u/KZ6gOMuWUpsCcg+rhPsbxHbbu5p8w9Z3dToapDjLllKbAnIPq4T7G8R227uZjhvUn+Ypn/ETq64Ko3MbWm/yrz8YeM+WVt7H17uy+Sj1TofIbW/fO7q9ivKy5H6Bypx/2Sod5YsdV8Nnf+R4T9V7TuzkZRuUnzcle4WQ/apu/sfU3/4SpV96018kwKj9pTvYKJ/tR2/yNrb/5jv4U797/E1Ffkytfp63j7HQyzEmnsqfPeOH0ru6+w5PPrF3dvs3/FNrLmvvy+EGdPHKlwzyx4yr87O96j456P37P04wL78C9qKvsFXC3s2vLuXs6sK92KW1j6pR3N+PCO3Av6ip7Bdzt7Npy7p4O7KtdSrvrhee48nXeOs5OJ8O4ncq5eeZq79089V61p9u3+Z/ErcsaZpw8Ux3V3bQ6Myp/1d+YOujVmbOosz9pNbt0PdS7jMvUV96UP8XdteXcPR3YV7uUtuF0ugzqXcZl6itvyp/i7tpy7p4O7KtdSrvrbVRX9dHjzKR155pdsKf6Jz7OykfKRyZPgfsQ10c6D3vI1EFO80jlmSm36d2MlNf5L9DD/Cnbvs2fqDx2uhkp7wrrZY2p4jY7YIf7PJ9onY7a5m9Uduqw3505j+cO7G2oDmsq47J1lV8agxkXp7tlnB2K6qk+ewVmNpyOyrCmMi5bV/mlMZhxcbpbxtmhqJ7qs1dghrPKu4vavWl17lA7eJ5QWdROfZ5PeGfX2e1kmOow7Hezi9NTmdI2VAe1DtyBqKyC86fzRuU3VAe1E47+ZA21OiuwM8F5nNk70VBXcAZ7J2x99nFmb/K7s4vqlKbA3IbTcfe6OWbr3fVd3vEcp6MypSkwt+F03L1ujtl6d32XO8/ZundQu7fnoe+c1bwx5ctToM/5ml2u9oqt7+x3Mg64p84K7k04HZVBTZ0ncM8JJ318HuP4G5h1zk9w+bLGTF4Hd3Bm70SbdKZyTpbZepOvPNScs4vTedfeF0/nmKm37dz8E97xLKfzVIZxO0/nmKm37dz8E+48a+veQe3enoe+c1azQ3W4t+1iX+VLY6bOKdsO5xldpnSGc8Xkb90Op6cyqKkzah2cLVT2xeZPPL0b890ZZ9Su8usva8Vp/sXWmXzloeacXZzO6d6TvJs92YlMvW3n5p/wjmc5nacyyEnezZ7sRKbetnPzT7jzrKueg+pvO9F3zmo+4XTXaZ45zXdse5znOBmHac/VZzg9lUFNnVF7ijs7t+7pbsx3Z6TTT/ijLmvdecsq32HLT77yUHPOLk5nyijP1Trd1Sa9mPw73UJlXM3xNraus3vKKM/VOt3VJr2Y/DvdQmVc7a73YvM3VH/TTs9qnlBZ1E59njdU/nTHC+yo/uZP+oTqTHsmbwJ73Q6lo6bOqKnOxkm/05Et4+xAMK/O6KvOFdrL2svEh04PcjIK7nFX+S8ww7lOv+JP4DNVb/NVBnM4d+eNyjJbrvOVptgyk18e0nnYQ1QGNWTzX3SZ0pHJR+8UtQN3I5hRuc5XmmLLTH55SOdhD1EZ1JDNf9FlSkcmHz3OKO8J8Pn8HPbQx3k7I9V32Pp3/QnVLVR+YutOPnrKn+Bu13cyE1MXPfRx3s5I9R3c/uS9wL7Kbb4Cs9sZqf4Vxsvap/HEBw4hhLDzSb9v87s//HZ+zGUtP6whhPB1TL9zy+tQnTu8a28IP4WPvazhD35+UEMI4ev4pN+9n/QuIXwXP+o/g4YQQggh/DZyWQshhBBC+GByWQshhBBC+GDWy5r7dwVO/z6Bu9fhiR1XefJzvAvn/a58huogU05pCsw5qB7uYxzfYetu/glT39ntZJjqIFNOaQrMOage7mMc32Hrbj5mWH+Sr3jGT6S+LojKbWy9yb/6bOwxU155G1vvzu6r1DMVKq/Yupv/aYyXNfcDXP2wVzrMEzuugs/+zveYqPea3s3JMCo/aU72Cif7Udv8ja2/+SdMvfKmvU6GUflJc7JXONmP2uZvbP3Nd/SnePf+n4j6mlz5Om0dZ6eTYU46lT19xgund3X3He4+U/VR2/xPpL2suS9eOTePXOkwT+y4Cj/7u96jo96P3/M048I7cC/qKnsF3O3s2nLung7sq11K25g65d3NuPAO3Iu6yl4Bdzu7tpy7pwP7apfS7nrhOa58nbeOs9PJMG6ncm6eudp7N+94r23nO575JLcua5hx8kx1VHfT6syo/FV/Y+qgV2fOos7+pNXs0vVQ7zIuU195U/4Ud9eWc/d0YF/tUtqG0+kyqHcZl6mvvCl/irtry7l7OrCvdintrrdRXdVHjzOT1p1rdsGe6p/4OCsfKZ/ZfAT3Ia6PdB72kKmDnOaRyjNTbtO7GSmv81+gh/m7bDtPnllZzHczUt4V1ssaU8VtdsAO93k+0Todtc3fqOzUYb87cx7PHdjbUB3WVMZl6yq/NAYzLk53yzg7FNVTffYKzGw4HZVhTWVctq7yS2Mw4+J0t4yzQ1E91WevwAxnlXcXtXvT6tyhdvA8obKonfo8u1Tvbl95L5y9ToapDsN+N7s4PZUpbUN1UOvAHYjKTmz9ze/gXofqoHbC0Z+soVZnBXYmOI8zeyca6grOYO+Erc8+zuxNfnd2UZ3SFJjbcDruXjfHbL27vss7nuN0VKY0BeY2nI67180xW++u73LnOVv3Dmr39jz0nbOaN6Z8eQr0OV/zFa7s2DrOTifjgHvqrODehNNRGdTUeQL3nPDu/sl+zDrnJ7h8WWMmr4M7OLN3ok06Uzkny2y9yVceas7Zxem8a++Lp3PM9B6T92LzT3jHs5zOUxnG7TydY6betnPzT7jzrK17B7V7ex76zlnNDtXh3raLfZUvjcEMsvmKJ3Z2mdIZzhWTv3U7nJ7KoKbOqHVwtlDZF5u/8eR+zHZnnFG7yq+/rBWn+RdbZ/KVh5pzdnE6p3tP8m72ZCcy9badm3/CO57ldJ7KICd5N3uyE5l6287NP+HOs656Dqq/7UTfOav5hNNdp3mHKzu2jrPTyThMe64+w+mpDGrqjNpT3N259U/2Y7Y7I51+wh91WevOW1b5Dlt+8pWHmnN2cTpTRnmu1umuNunF5N/pFirjao63sXWd3VNGea7W6a426cXk3+kWKuNqd70Xm7+h+pt2elbzhMqidurzvKHypzteYEf1N3/SJ1Rn2jN5E9jrdigdNXVGTXU2TvpuFrXN38CsOqOmOldoL2svEx86PcjJKLjHXeW/wAznOv2KP7H1Nl9lMIdzd96oLLPlOl9pii0z+eUhnYc9RGVQQzb/RZcpHZl89E5RO3A3ghmV63ylKbbM5JeHdB72EJVBDdn8F12mdGTy0eOM8p4An8/PYQ99nLczUn2HrX/X37jbL7b+5KOn/Anudn0nMzF10UMf5+2MVN/B7Xce9lRm8ycwv52R6l9hvKx9Gk984BBCCDuf9Ps2v/vDb+fHXNbywxpCCF/H9Du3vA7VucO79obwU/jYyxr+4OcHNYQQvo5P+t37Se8Swnfxo/4zaAghhBDCb8O6rOV/mwkhhBBC+B7Wy1r++DmEEEII4fsYL2t4SesubKV3fgghhBBCuE57WVOXL9a2OYQQQggh3OPy/4FBdzHLZS2EEEII4Tkev6yFEEIIIYTnyGUthBBCCOGDyWUthBBCCOGDyWUthBBCCOGDyf+BQQghhBDCB3P5svaCL2zdBS6EEEIIIVzj1mXtRV3QclELIYQQQnie25e1EEIIIYTwPnJZCyGEEEL4YHJZCyGEEEL4YHJZCyGEEEL4YHJZCyGEEEL4YHJZCyGEEEL4YHJZ+yZO/t+dTLmTPb+VT//63H23rX/38797fwghhJlc1r4R919yXQ71LhM++2tz992c/p1nvHt/CCGEnVzWvpG7/5Ljfv6F+fN4+nvgad69P4QQws7HXta6f0mUftdnXYF73A7Cfd6BmvJRnzzWC+xyFmflO2BP9Sd/0mqewGydVbfzUNsypavMBPa5q7wXU3/yCsxwbvI4o7wX2Ofc5KnM5ocQQvgXclkzOe2pPGs1l8Y+55SmPPQnbZsnVBY11+/AXgdnu66r4zx5Dirvaoou5/RV5o7GuD3UNj+EEMK/Ml7W6pcnU2XlvXD9iS6Le+74rCtwz0mv2Drsd/lTHT0FZ7p5YssqHzXnvMHZruvqOE+ei9OZMuUhXYZ15B1dRGWu9k6oPvOUH0IIn8KP+JM1dVbaif86T3DO7THVU13W3dymb17BGadTbFnlo+acNzjbdV0d58k7oXpdt/NYd3OKKVPe5iuvUBmn96JyTjaEEH4ruaw1cM7tdag+aypzRd+8gjNOp9iyykfNOW9wtuu6Os6Td4Wu7+puTnEnc7Xr9JDTfAgh/CY+/rL2LtSzJk1lJs/Rtvmq3nmsbfOkb9qJ3503ONt1XR3nyXNQ+U3rzmpWupO5oym/0zdt80MIIfwrH3tZe8G/vJ+eXb28LdfpiPJYq5lz6HU6whnOsaYyjo64Ps7deaOyyJZR3jYj5Tm4/c5nXWVUrvPYZ499lZs89tk79UMIIfwLH31ZC2HiK/8Fn8tECCGE7yKXtfBjeecFine/81khhBDCRC5r4UdSl6d3XqK+4hkhhBDCRi5rIYQQQggfTC5rIYQQQggfTC5rIYQQQggfzHhZ47+z80l/b+fJd3r35/qkr9sVtq/z9vnufv56/t09DO59x/6v4t3v/q6vD+59x/538uQ739nx5Ht8F9u7f9fnq+ciX+mHgLSXNfXN82nfUE+8z7s/07v3fwXTZ9g+3+a7PLWnUPuefsZX8RXv/fQz1L6nn/FunnjfT9nxXTjv/h2fTz0TtXf7ITBH/xn0076Znnifd3+md+//brbP99Tnf2rPxFc846fy9NdG7UNN+aWz9l1073jCp+z4Ln7Su+O7qvc+8RWbH343b7usYbbO3EWdPeVzhrVuRibvRflbf0N1X7DP2fJZ7zzOqYzyJ63mLsc64vpdBn2VYf9JTp6B2TpzF/V3+JxROmqs1xnp8p1/Fd7Hz2C/0zowW2fuos6e8jnDWjcjk/ei/BO6Lu5Vmbv+HdTuF1Nu07sZKe8U7ndzaZuvQF/luxkpL/x5rJe1O98M3Jl2ONkpM3mnWqd32YmpU175TnbScGav8zu6HjN5Lzpf6azhzN5T1N4r+7nXnTn/hL/pW1b5rOHM3l3UbtSYyevgzrTDyU6ZyTvVTnH3onbXfwpnp8qUtqE6qDlsu+qstM4vOo/1DrULtfDn8Nb/DMr5bka6rAJ7nGUPUTnUHM/lZH83I+VN+W5G0OvOKstM3ovOL12hejy/g9NncB7nOitUl8E802U3DfUJ1ef5LrUP9+JZZVnf4F43I11WgT3OsoeoHGqnuHtZUxlk85/AeYbKoKbOE7hno+vgvvLVWWm1g+myzjn8+XzbZW3y1KyojMoqTbHlynd2KabuiaeyJ5lOn84qy0zei84/7W35Jzh9xpTfdt31EZXt+qV3fsH+lj+l9m3PUJoLd3GePDUrKqOySlO4uQm141Rj3fXv4uxWGdTUGbWrTDvUM3DefAX6zhln1MKfyR9xWeOzmjuezjFT78RTWSfTeTh3Z5VlJu9F55/2pvzknXC6Z8pvu+76SJdlHWf2GPan/OR1qA5rKnPCtG/y1KzADOd57nBzE2qHqzneizvdCaerMqipM2pX2PrKR23zFeg7Z6TTw59De1lT//BPvyE4j/PkqdnJ4Myeo3VnlXXBDvd5RpzslGFv8rtzoTTlqVzn43nLqhmZvA7VOd0z5ZWH2l3f0dHjDM+ssc8zMnkdqoPa5jtwHufJU7OTwZk9R1O+g+pt2l3f0R2w2+1ROmrqjJrqbGz9r/TVGbVCaeHPYfyTNfymuPKNsPVZ5wz6k8eayrCHdD7qyndRfdRQR9jnrDsjKtudcWYdueqjvvk4Y2bSN6qHqJzC6XGGc3d9lWEfM52OdD7OmJn0jeoh6GG2NKV3VB7pfJyVP3msqQx7yOZPYJf77D3tc055DtN+9NDHeTsj1d9Q3WLKbDtcH+ftjFQ//Hkc/WfQU/INFN5Nvse+l0/++ud74/3kaxzC15DLWgjhjyS/f0IIfwpvu6zVL8r8wgwhfDX5/RNC+JN465+shRBCCCGEe+SyFkIIIYTwweSyFkIIIYTwwTxyWdv+Tsi7/85I/l7K91Jf/5/0zwDfmVF5xda960+obqHyjOoVU+akP6F6hcozqldMeaUh6G/c7RddF/eqzOaHEP4cbl/Wtl8SX/FL5CueEWZ+2j+Du++r+qjd9TdOsoqtr3zUNn/jJKtQ/W5n6eiprNI67vaL6ji7UNv8EMKfxR9xWXuS737Xn/r8n/jP+en33Xbe9V+U72Qntr7yr3SY8p3sKWpnacpj3Ez9T846faTyqudqyOaHEH4u7WUNf/DrjL8IUENcf0N11A6VQ33KMJzBHuoqq/Q684x5RGUx382sq+yms1dnzPLMuc1Dn+dNV1SWUVnmJOuy7Zz8rfsCM05+YuuzX/NJh0F/y16Bd+LMHrP5LzDD+ZpRc1E9V3M8ReWx081IeSGEr2X8kzX+IVU/sEpDNr+jeh0qi5rSu9zmvWC/y5fOPs9Ml+/ALuYnTWU6r+YO7uBZzawpf9Kfpp7DqOzE1t98zCiv4EzNDHYmVPcF+ypbGWTyXrBfM4OdE7i/zcjkFZzBuc6ondD1cGeXwZzyOnDnhOqgFkL4GqzLWoXVD6vSkM3vwF53VtlJd3OsI+xhHnX2eUaUh9p2RqpfbD5mOk2dUeOMyiEqzz3Wv4K7z976yt86L5zMCzfXgf06Kw07k15sfuHmGNUrTaFyqDFTDz08n6B6dzQH7DnnEML3cnRZU2wZZ4cCe91ZZSdd5ZSm9G1mnX2eT3R1Ro0zzBUPdXVGjTNqZjp/6yGVZVTW4d199rf8CydTnGQV2K8z7uO505DNR06yhdtROafbZUpHr8tuqJ6jqYwLdrszzqiFEL6eX31Z4xlxslNm8iZNeeqMGmcQzLKvNOWpM2qcUbPiSued3H3+1kd/y75wMshpnsG+2uVqjqc4zb9wO5xzelNGeVN+wt2FmvJP6HbhGen0EMLX8OhlTeU3v6Pr4VllJx1n9hj2u3zp7J/ODPrqjBpnOg1n9pguW2fUOKPmTVPeO1HP697BzaL2Dh/Znr/pW3/zJ23SJ19pk755CO/mmTXlI8rvOp1eKH/TNn8Ds+qMmuqEEL6W9rKGP7DbD+iW23wF5rszzqxP2TqX3lF57KjepiPoYZbB/HaevNcZKV15CGa2s/LYZw+ZvHeC7zW9Q+dhT2UmX3lF+ZXt4F7X6TzsqczmY0bprDHVRabcqVdUBrOsIeXjDgX3uk7nYQ+Z/K37ojITmN3OSPVDCF/L+Cdr4Tnyyy6EEEIIV8hl7U3w5SyXtRBCCCFcIZe1N1IXtFzUQgghhHCVXNZCCCGEED6YXNZCCCGEED6YXNZCCCGEED6Y9bL2CX/vqnsuv1uX+y6c9+s81Jkpgzs2uKd2YIa9EEIIIbyff/jHf/r7/wGQFRjG4/xvxAAAAABJRU5ErkJggg=="},38179:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/en-us_image_0000001093306041-3dea734d2ff14a052c7b569fd84f5da1.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);