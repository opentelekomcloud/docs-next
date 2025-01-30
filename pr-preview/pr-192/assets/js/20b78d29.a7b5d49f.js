"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[7411],{46294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"best-practices/security-services/web-application-firewall/combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports","title":"Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports","description":"This topic walks you through how to combine dedicated WAF instances and layer-7 load balancers to protect your services over non-standard ports that cannot be protected with WAF alone. For ports supported by WAF, see Ports Supported by WAF.","source":"@site/docs/best-practices/security-services/web-application-firewall/combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports.md","sourceDirName":"best-practices/security-services/web-application-firewall","slug":"/best-practices/security-services/web-application-firewall/combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/security-services/web-application-firewall/combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/security-services/web-application-firewall/combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports.md","tags":[{"inline":true,"label":"waf","permalink":"/docs-next/pr-preview/pr-192/docs/tags/waf"},{"inline":true,"label":"load-balancer","permalink":"/docs-next/pr-preview/pr-192/docs/tags/load-balancer"},{"inline":true,"label":"security","permalink":"/docs-next/pr-preview/pr-192/docs/tags/security"}],"version":"current","frontMatter":{"id":"combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports","title":"Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports","tags":["waf","load-balancer","security"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Connecting Multiple On-Premises Branch Networks Through a VPN Hub","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/networking/virtual-private-network/connecting-multiple-on-premises-branch-networks-through-a-vpn-hub"},"next":{"title":"Using LTS to Quickly Query and Analyze WAF Access Logs","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/security-services/web-application-firewall/using-lts-to-quickly-query-and-analyze-waf-access-logs"}}');var s=t(74848),r=t(28453);const a={id:"combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports",title:"Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports",tags:["waf","load-balancer","security"]},c="Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports",o={},d=[{value:"Protection Scenarios",id:"protection-scenarios",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2},{value:"How the Combination Protects Traffic",id:"how-the-combination-protects-traffic",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports",children:"Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports"})}),"\n",(0,s.jsxs)(n.p,{children:["This topic walks you through how to combine dedicated WAF instances and layer-7 load balancers to protect your services over non-standard ports that cannot be protected with WAF alone. For ports supported by WAF, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/web-application-firewall-dedicated/umn/enabling_waf_protection/ports_supported_by_waf.html",children:"Ports Supported by WAF"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"protection-scenarios",children:"Protection Scenarios"}),"\n",(0,s.jsxs)(n.p,{children:["The following procedure describes how WAF and ELB together protect\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"http://www.example.com:9876",children:"www.example.com:9876"})}),". Port ",(0,s.jsx)(n.code,{children:"9876"})," is a non-standard port WAF alone\ncannot protect."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You have purchased a dedicated layer-7 load balancer. For details\nabout load balancer types, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/service_overview/differences_between_dedicated_and_shared_load_balancers.html",children:"Differences Between Dedicated and\nShared Load\nBalancers"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Dedicated WAF instances issued before April 2023 cannot be used with\ndedicated network load balancers. If you use a dedicated network\nload balancer (TCP/UDP), ensure that your dedicated WAF instance has\nbeen upgraded to the latest version (issued after April 2023)."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Related ports have been enabled in the security group to which the\ndedicated WAF instance belongs."}),"\n",(0,s.jsx)(n.p,{children:"You can configure your security group as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Inbound rules"})}),"\n",(0,s.jsxs)(n.p,{children:["Add an inbound rule to allow incoming network traffic to pass\nthrough over a specified port based on your service\nrequirements. For example, if you want to allow access from port\n80, add a rule that allows ",(0,s.jsx)(n.code,{children:"TCP"})," and port ",(0,s.jsx)(n.code,{children:"80"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Outbound rules"})}),"\n",(0,s.jsx)(n.p,{children:"Retain the default settings. All outgoing network traffic is\nallowed by default."}),"\n",(0,s.jsxs)(n.p,{children:["For more details, see ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/virtual-private-network/umn/getting_started/optional_configure_security_group_rules/adding_a_security_group_rule.html",children:"Adding a Security Group\nRule"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/web-application-firewall-dedicated/umn/applying_for_a_dedicated_waf_instance.html",children:"Apply for a dedicated WAF instance"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Connect ",(0,s.jsx)(n.a,{href:"http://www.example.com",children:"www.example.com"})," to WAF by referring to ",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/web-application-firewall-dedicated/umn/enabling_waf_protection/connecting_a_website_to_waf/connection_process_dedicated_mode.html#waf-01-0326",children:"Adding a Website to\nWAF (Dedicated\nMode)"}),".\nSelect any non-standard port as the protected port, for example,\nport 86, set ",(0,s.jsx)(n.strong,{children:"Server Port"})," to ",(0,s.jsx)(n.code,{children:"9876"}),", and set ",(0,s.jsx)(n.strong,{children:"Proxy\nConfigured"})," to ",(0,s.jsx)(n.code,{children:"Layer-7 proxy"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 1 Adding a domain name to\nWAF",src:t(41546).A+"",width:"830",height:"762"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add listeners and backend server groups to the load balancer."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click\n",(0,s.jsx)(n.img,{alt:"image1",src:t(32474).A+"",width:"19",height:"23"})," in\nthe upper left corner of the management console and select a\nregion or project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click\n",(0,s.jsx)(n.img,{alt:"image2",src:t(61474).A+"",width:"26",height:"23"})," in\nthe upper left corner of the page and choose ",(0,s.jsx)(n.em,{children:"Elastic Load\nBalance"})," under ",(0,s.jsx)(n.em,{children:"Networking"})," to go to the ",(0,s.jsx)(n.em,{children:"Load Balancers"}),"\npage."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the name of the load balancer in the ",(0,s.jsx)(n.em,{children:"Name"})," column to go\nto the ",(0,s.jsx)(n.em,{children:"Basic Information"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.em,{children:"Listeners"})," tab and then click ",(0,s.jsx)(n.em,{children:"Add Listener"}),". On\nthe displayed page, configure the listener. In the ",(0,s.jsx)(n.em,{children:"Frontend\nPort"})," text box, enter the port you want to protect. In this\ncase, enter ",(0,s.jsx)(n.code,{children:"9876"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 2 Configuring a\nlistener",src:t(71077).A+"",width:"1083",height:"560"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:"Next: Configure Request Routing Policy"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 3 Configuring a backend server\ngroup",src:t(59144).A+"",width:"1484",height:"409"})}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you select ",(0,s.jsx)(n.strong,{children:"Weighted round robin"})," for ",(0,s.jsx)(n.strong,{children:"Load Balancing\nAlgorithm"}),", disable ",(0,s.jsx)(n.strong,{children:"Sticky Session"}),". If you enable\n",(0,s.jsx)(n.strong,{children:"Sticky Session"}),", the same requests will be forwarded to\nthe same dedicated WAF instance. If this instance becomes\nfaulty, an error will occur when the requests come to it\nnext time."]}),"\n",(0,s.jsxs)(n.li,{children:["For details about ELB traffic distribution policies, see\n",(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/elastic-load-balancing/umn/backend_server_group/key_functions/load_balancing_algorithms.html",children:"Load Balancing\nAlgorithms"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:"Next: Add Backend Server"})," and click ",(0,s.jsx)(n.em,{children:"Next: Confirm"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the WAF instance to the load balancer."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click\n",(0,s.jsx)(n.img,{alt:"image3",src:t(2460).A+"",width:"19",height:"23"})," in\nthe upper left corner of the management console and select a\nregion or project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click\n",(0,s.jsx)(n.img,{alt:"image4",src:t(71276).A+"",width:"27",height:"27"})," in\nthe upper left corner, select a region, and choose ",(0,s.jsx)(n.em,{children:"Security"})," -> ",(0,s.jsx)(n.em,{children:"Web Application Firewall (Dedicated)"})," to go to the\n",(0,s.jsx)(n.em,{children:"Dashboard"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the navigation pane on the left, choose ",(0,s.jsx)(n.em,{children:"Instance\nManagement"})," -> ",(0,s.jsx)(n.em,{children:"Dedicated Engine"})," to go to the dedicated WAF\ninstance page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 4 Dedicated engine\nlist",src:t(94938).A+"",width:"1617",height:"93"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Locate the row containing the WAF instance. In the ",(0,s.jsx)(n.em,{children:"Operation"}),"\ncolumn, click ",(0,s.jsx)(n.em,{children:"More"})," -> ",(0,s.jsx)(n.em,{children:"Add to ELB"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"Add to ELB"})," dialog box, specify ",(0,s.jsx)(n.em,{children:"ELB (Load\nBalancer)"}),", ",(0,s.jsx)(n.em,{children:"ELB Listener"}),", and ",(0,s.jsx)(n.em,{children:"Backend Server Group"}),"\nbased on previous step."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 5 Add to\nELB",src:t(30589).A+"",width:"575",height:"559"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:"Confirm"}),". Then, configure service port for the WAF\ninstance. In this example, configure ",(0,s.jsx)(n.em,{children:"Backend Port"})," to ",(0,s.jsx)(n.code,{children:"86"}),",\nwhich is the one we configured in step 2."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Figure 6 Configuring Backend\nPort",src:t(94174).A+"",width:"681",height:"365"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:"Confirm"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/web-application-firewall-dedicated/umn/enabling_waf_protection/connecting_a_website_to_waf/step_3_bind_an_eip_to_a_load_balancer.html",children:"Bind an EIP to a Load\nBalancer"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.otc.t-systems.com/web-application-firewall-dedicated/umn/enabling_waf_protection/connecting_a_website_to_waf/step_4_whitelist_the_back-to-source_ip_addresses_of_your_dedicated_waf_instances.html",children:"Whitelist IP addresses of your dedicated WAF\ninstances"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-the-combination-protects-traffic",children:"How the Combination Protects Traffic"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image5",src:t(67513).A+"",width:"683",height:"222"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},94174:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001369344100-7ad8ecca86f8d6a23038d0f65c613414.png"},71077:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001369483086-c8ff5281eec0134024ad609d223a1653.png"},94938:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001369501992-6aeaf7152ebf5cce271389cbb5faa79b.png"},61474:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAIAAACatshHAAAAOElEQVR42mP8//8/A/UA46hx1DLuSqtO+kKSDQlbdSXfgA7GUdmzo8aRb9xoQhk1jijjRhMKCQAAj0di0zHSG9AAAAAASUVORK5CYII="},71276:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAIAAAACtmMCAAAAO0lEQVR42mP8//8/A1UB46iJQ8PEfbU6tStJNsRz+pUaZ7qZSH1fj5pIHRNHU8+oieSbOJp6Rk0kAQAAcfRuy59/sAIAAAAASUVORK5CYII="},30589:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001369683888-5fbc27aa0673f7597de4c49c558205b6.png"},32474:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAXABMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3WSRURpJGCqoySegFVYNStbmVY45DuYZUMhXcPbI5pNUhefTpEjG5hhtv97Bzis8Ol7dW4t53l3Si4bcf9So/h9snjFdFOlGUG2Zzm07I3KKKK5zQkaPnK/lUMdokLO0cSqZG3MR3NFFO7Ak8tvSiiikB/9k="},2460:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAXABMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3WSRURpJGCqoySegFVYNStbmVY45DuYZUMhXcPbI5pNUhefTpEjG5hhtv97Bzis8Ol7dW4t53l3Si4bcf9So/h9snjFdFOlGUG2Zzm07I3KKKK5zQkaPnK/lUMdokLO0cSqZG3MR3NFFO7Ak8tvSiiikB/9k="},59144:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001423609253-9712c91b54f98dbe07a0fa223bee8f27.png"},67513:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001764240765-c723a76ee1fb383d1bde19f54e6b01a8.png"},41546:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/en-us_image_0000001764480001-cd042668a96490da0e78c5d4f864a96e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);