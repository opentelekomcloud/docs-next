"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[31396],{52399:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(74848),A=s(28453);const t={id:"using-lts-to-quickly-query-and-analyze-waf-access-logs",title:"Using LTS to Quickly Query and Analyze WAF Access Logs",tags:["waf","logging","lts"]},a="Using LTS to Quickly Query and Analyze WAF Access Logs",c={id:"best-practices/security-services/web-application-firewall/using-lts-to-quickly-query-and-analyze-waf-access-logs",title:"Using LTS to Quickly Query and Analyze WAF Access Logs",description:"After you authorize WAF to access Log Tank Service (LTS), you can use",source:"@site/docs/best-practices/security-services/web-application-firewall/using-lts-to-quickly-query-and-analyze-waf-access-logs.md",sourceDirName:"best-practices/security-services/web-application-firewall",slug:"/best-practices/security-services/web-application-firewall/using-lts-to-quickly-query-and-analyze-waf-access-logs",permalink:"/docs-next/pr-preview/pr-150/docs/best-practices/security-services/web-application-firewall/using-lts-to-quickly-query-and-analyze-waf-access-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/security-services/web-application-firewall/using-lts-to-quickly-query-and-analyze-waf-access-logs.md",tags:[{inline:!0,label:"waf",permalink:"/docs-next/pr-preview/pr-150/docs/tags/waf"},{inline:!0,label:"logging",permalink:"/docs-next/pr-preview/pr-150/docs/tags/logging"},{inline:!0,label:"lts",permalink:"/docs-next/pr-preview/pr-150/docs/tags/lts"}],version:"current",frontMatter:{id:"using-lts-to-quickly-query-and-analyze-waf-access-logs",title:"Using LTS to Quickly Query and Analyze WAF Access Logs",tags:["waf","logging","lts"]},sidebar:"bestPracticesSidebar",previous:{title:"Combining WAF and Layer-7 Load Balancers to Protect Services over Any Ports",permalink:"/docs-next/pr-preview/pr-150/docs/best-practices/security-services/web-application-firewall/combining-waf-and-layer-7-load-balancers-to-protect-services-over-any-ports"},next:{title:"Configuring Anti-Crawler Rules to Prevent Crawler Attacks",permalink:"/docs-next/pr-preview/pr-150/docs/best-practices/security-services/web-application-firewall/configuring-anti-crawler-rules-to-prevent-crawler-attacks"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2}];function g(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,A.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"using-lts-to-quickly-query-and-analyze-waf-access-logs",children:"Using LTS to Quickly Query and Analyze WAF Access Logs"}),"\n",(0,i.jsxs)(n.p,{children:["After you authorize WAF to access Log Tank Service (LTS), you can use\nthe WAF logs recorded by\n",(0,i.jsx)(n.a,{href:"https://www.open-telekom-cloud.com/en/products-services/core-services/log-tank-service",children:"LTS"}),"\nfor quick and efficient real-time analysis, device O&M management, and\nanalysis of service trends."]}),"\n",(0,i.jsxs)(n.p,{children:["This practice uses the access log stream ",(0,i.jsx)(n.strong,{children:"lts-waf-access"})," of log group\n",(0,i.jsx)(n.strong,{children:"lts-waf"})," as an example to describe how to use LTS to quickly query\nand analyze logs."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You have connected the website you want to protect to WAF."}),"\n",(0,i.jsxs)(n.li,{children:["You have ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/web-application-firewall-dedicated/umn/enabling_lts_for_waf_logging.html",children:"enabled LTS for WAF\nlogging"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to the management console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.img,{alt:"image1",src:s(57178).A+"",width:"19",height:"23"})," in\nthe upper left corner of the management console and select a region\nor project."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.img,{alt:"image2",src:s(25187).A+"",width:"26",height:"23"})," in\nthe upper left corner of the page and choose ",(0,i.jsx)(n.em,{children:"Management &\nGovernance"})," -> ",(0,i.jsx)(n.em,{children:"Log Tank Service"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Log Group Name"})," column, click the name of the target log\ngroup (for example, ",(0,i.jsx)(n.strong,{children:"lts-group-waf"}),") to go the log stream page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Log Stream Name"})," column, click the name of the log stream\nused for WAF access logs (for example, ",(0,i.jsx)(n.strong,{children:"lts-topic-waf-access"}),").\nThen, select the ",(0,i.jsx)(n.em,{children:"Log Stream"})," tab."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1 Accessing the log stream\npage",src:s(32759).A+"",width:"1178",height:"344"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the log stream details page, click\n",(0,i.jsx)(n.img,{alt:"image3",src:s(82631).A+"",width:"27",height:"21"})," in the\nupper right corner. On the page displayed, click the ",(0,i.jsx)(n.em,{children:"Cloud\nStructured Parsing"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.em,{children:"JSON"})," as the log structure, as shown in figure below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 2\nJSON",src:s(90673).A+"",width:"695",height:"148"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Step 1 Select a sample log event."})," area, click ",(0,i.jsx)(n.em,{children:"Select\nfrom existing log events"}),". In the displayed ",(0,i.jsx)(n.em,{children:"Select Log Event"}),"\ndialog box, select a log and click ",(0,i.jsx)(n.em,{children:"OK"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 3 Select Log\nEvent",src:s(45302).A+"",width:"1568",height:"713"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Step 2 Extract fields"})," area, click ",(0,i.jsx)(n.em,{children:"Intelligent\nExtraction"})," and enable quick analysis for the log field you want to\nanalyze (for example, ",(0,i.jsx)(n.strong,{children:"remote_ip"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"remote_ip"}),": IP address of a client from which the request\noriginates."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 4 Selecting log fields for quick\nanalysis",src:s(83043).A+"",width:"1053",height:"45"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"Save"}),". Then, LTS will start a quick analysis and do\nstatistics for logs collected in a certain period."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 5 Quickly analysis of access\nlogs",src:s(37636).A+"",width:"743",height:"616"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the navigation pane, choose ",(0,i.jsx)(n.em,{children:"Visualization"}),". On the right pane,\nselect a log query time range, enter an SQL statement in the search\nbox, and click ",(0,i.jsx)(n.em,{children:"Query"})," to query the specified log."]}),"\n",(0,i.jsx)(n.p,{children:"You can enter either of the following SQL statements in the search\nbox to query logs of a specified IP address:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * where remote_ip = 'xx.xx.xx.xx' \n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * where remote_ip like 'xx.xx.xx%'\n"})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,A.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},45302:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001192108582-6cf9b09dbadc6ed382e5ba44373b4f6a.png"},37636:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001192109594-d7dee41d7a4eef234867d0159fb82444.png"},83043:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABB0AAAAtCAYAAADiMBMgAAALeklEQVR4Xu3dT6hU1x0A4PPk2aBJVQrhmQTdtHt9jRWElsZulCAugu22FqVmYSAJaat1IS6stg0xkCziQrDbVLIIIeCmprTgIlJ1n64eRh+BNIpGjA/tnJHzct7kzsydN3fGmTvfgOCbuff8+c7vXu79zblnph42XsGLAAECBAgQIECAAAECBAgQIFCxwJSkQ8WiiiNAgAABAgQIECBAgAABAgSaApIOAoEAAQIECBAgQIAAAQIECBAYiICkw0BYFUqAAAECBAgQIECAAAECBAhIOogBAgQIECBAgAABAgQIECBAYCACkg4DYVUoAQIECBAgQIAAAQIECBAgIOkgBggQIECAAAECBAgQIECAAIGBCEg6DIRVoQQIECBAgAABAgQIECBAgICkgxggQIAAAQIECBAgQIAAAQIEBiIg6TAQVoUSIECAAAECBAgQIECAAAECkg5igAABAgQIECBAgAABAgQIEBiIgKTDQFgVSoAAAQIECBAgQIAAAQIECEg6iAECBAgQIECAAAECBAjUXODL354L9y58Fhau3Qrh7v1qe7tqZZh+bk1Y/avNYe3xndWWrbSxF5B0GPsh1AECBAgQIECAAAECBAgUC9w8/HG49eY/Q1h40NxgqvHvYcVYS8qcXhHWvPHzsPbEixXXorhxFZB0GNeR024CBAgQIECAAAECBAh0EJj/8alw7/K1sKKRaqg60dCu2piAeNCo7YnZ58LMf14zPgSCpIMgIECAAAECBAgQIECAQM0E5mffCveufD7UhEMiXEw8bH42zFx+vWayutOrgKRDr2K2J0CAAAECBAgQIECAwAgLxEcqbp78x8ASDk/+ekt46tWfhe81kgrx9U0juXH77X+FO3+7tKiSEg9rD/3CoxYjHCvDaNrIJx2uXr0a9u3bFy5d+jaAe4W5ceNG2LVrVzhz5kzYtGlTr7vbvkYCKRZSlzZu3Bg++OCDvnpYRYy2K6O1vamhx48fb8ZymbjuFv9btmxxbPQVAY93507x123sH2/L1T5JAi+99NJ3zrVl38udqtqn3zInaez0lQCB8RSYW/mHMNVYw6HqRypWrFsVnr7w8mKyoVUnJh++2P5eePDV3eZHzbUeGms8bLj/5/GE1OpKBCYi6VCJlELGXiDdnOXJ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"},57178:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAXABMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3WSRURpJGCqoySegFVYNStbmVY45DuYZUMhXcPbI5pNUhefTpEjG5hhtv97Bzis8Ol7dW4t53l3Si4bcf9So/h9snjFdFOlGUG2Zzm07I3KKKK5zQkaPnK/lUMdokLO0cSqZG3MR3NFFO7Ak8tvSiiikB/9k="},90673:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001236748339-c127a6235b5f0d12ed5674328f275ac1.png"},25187:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAIAAACatshHAAAAOElEQVR42mP8//8/A/UA46hx1DLuSqtO+kKSDQlbdSXfgA7GUdmzo8aRb9xoQhk1jijjRhMKCQAAj0di0zHSG9AAAAAASUVORK5CYII="},32759:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/en-us_image_0000001698121802-5501d36f2a57ff20609a3d0764631d22.png"},82631:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAVCAYAAAC33pUlAAABPUlEQVRIDeWUsWvCQBSH/ZcdbsggkmbI4FAhQgoZVLoI4iDFqZBBUBCHQJcMN2QQIaGIRCFDMnwlYqItZ2kr3NKD8O6S935f+N27a6BxNDSy+O+wZE3PbNMU58fss0h+vwHf25gX5EDsOzzM3mv1ePaI7ZfrgrxM+OG4CYvnLkK0EaaDbVr0lsdaMl326/dNYdGZX36kTlJM1LAs4MnwWBwgTyLC7QVUaaRbiUwKOKzpGs+ssurL7aiERRP7bNNVYb5HrgNWQcTui3WlzcZkc5WsniphbwOLzjQirWpyybBlYXtjhp6DaI0Ja+AROXURg7DKvhmVMLINL45Nx9+fCtOlhzGStUg4sume93DnuxjOK9FfbdQK02qj1gZBZ+uXnaDvUFd9p+u6qninqOUi/kS8f6E+1PfrKhW0wj4AnTVzhcAqQA8AAAAASUVORK5CYII="},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(96540);const A={},t=i.createContext(A);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);