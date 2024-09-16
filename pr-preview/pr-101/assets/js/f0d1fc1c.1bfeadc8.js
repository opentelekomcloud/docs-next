"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[5345],{43084:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const r={id:"identity-federation-github",title:"Identity Federation with GitHub",tags:["keycloak","security","github","oauth2","iam","federation"]},a="Identity Federation with GitHub",o={id:"blueprints/by-use-case/security/keycloak/identity-federation-github",title:"Identity Federation with GitHub",description:"Identity Federation in Keycloak refers to the ability to use external identity providers to authenticate users in your",source:"@site/docs/blueprints/by-use-case/security/keycloak/identity-federation-github.md",sourceDirName:"blueprints/by-use-case/security/keycloak",slug:"/blueprints/by-use-case/security/keycloak/identity-federation-github",permalink:"/docs-next/pr-preview/pr-101/docs/blueprints/by-use-case/security/keycloak/identity-federation-github",draft:!1,unlisted:!1,editUrl:"https://github.com/akyriako/docs-next/tree/main/docs/blueprints/by-use-case/security/keycloak/identity-federation-github.md",tags:[{inline:!0,label:"keycloak",permalink:"/docs-next/pr-preview/pr-101/docs/tags/keycloak"},{inline:!0,label:"security",permalink:"/docs-next/pr-preview/pr-101/docs/tags/security"},{inline:!0,label:"github",permalink:"/docs-next/pr-preview/pr-101/docs/tags/github"},{inline:!0,label:"oauth2",permalink:"/docs-next/pr-preview/pr-101/docs/tags/oauth-2"},{inline:!0,label:"iam",permalink:"/docs-next/pr-preview/pr-101/docs/tags/iam"},{inline:!0,label:"federation",permalink:"/docs-next/pr-preview/pr-101/docs/tags/federation"}],version:"current",frontMatter:{id:"identity-federation-github",title:"Identity Federation with GitHub",tags:["keycloak","security","github","oauth2","iam","federation"]},sidebar:"blueprintsSidebar",previous:{title:"Deploy Keycloak on CCE",permalink:"/docs-next/pr-preview/pr-101/docs/blueprints/by-use-case/security/keycloak/cce-keycloak"},next:{title:"Storage",permalink:"/docs-next/pr-preview/pr-101/docs/blueprints/by-use-case/storage/"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying Keycloak",id:"deploying-keycloak",level:2},{value:"Configuring Keycloak &amp; IAM",id:"configuring-keycloak--iam",level:2},{value:"Creating a new Realm",id:"creating-a-new-realm",level:3},{value:"Creating a new Client",id:"creating-a-new-client",level:3},{value:"Configuring Mappers",id:"configuring-mappers",level:3},{value:"Get OpenID Endpoint Configuration",id:"get-openid-endpoint-configuration",level:3},{value:"Creating a new IAM Identity Provider",id:"creating-a-new-iam-identity-provider",level:2},{value:"Configuring the IAM Identity Provider",id:"configuring-the-iam-identity-provider",level:3},{value:"Configuring Client&#39;s Access Settings",id:"configuring-clients-access-settings",level:2},{value:"GitHub Integration",id:"github-integration",level:2},{value:"Adding GitHub as Identity Provider",id:"adding-github-as-identity-provider",level:3},{value:"Creating new GitHub OAuth App",id:"creating-new-github-oauth-app",level:3},{value:"Configuring GitHub Identity Provider",id:"configuring-github-identity-provider",level:3},{value:"Configuring the IAM Identity Provider Conversion Rules",id:"configuring-the-iam-identity-provider-conversion-rules",level:2},{value:"Appendix",id:"appendix",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"identity-federation-with-github",children:"Identity Federation with GitHub"}),"\n",(0,t.jsx)(n.p,{children:"Identity Federation in Keycloak refers to the ability to use external identity providers to authenticate users in your\napplication. In this context, GitHub can be used as an identity provider, allowing users to log in to your\nOpen Telekom Cloud tenant using their GitHub credentials. Users can choose to log in with their GitHub accounts and\nKeycloak takes care of the authentication process, providing a seamless experience for users while ensuring security\nand centralized identity management for external accounts that are not actively managed in your tenant's IAM."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"For this lab, you are going to need a:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Keycloak"})," server: You should have a Keycloak server instance set up and running"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GitHub"})," account: You need a GitHub account to register your application and obtain client ID and secret"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploying-keycloak",children:"Deploying Keycloak"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can follow the blueprint ",(0,t.jsx)(n.a,{href:"/docs-next/pr-preview/pr-101/docs/blueprints/by-use-case/security/keycloak/cce-keycloak",children:"Deploy Keycloak on CCE"})," in order to setup a working instance of Keycloak on CCE."]})}),"\n",(0,t.jsx)(n.h2,{id:"configuring-keycloak--iam",children:"Configuring Keycloak & IAM"}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-new-realm",children:"Creating a new Realm"}),"\n",(0,t.jsx)(n.p,{children:"A realm manages users, credentials, roles, and groups. A user belongs to and logs into the realm he is assigned to.\nRealms are isolated from one another and can  manage and authenticate only those users that they belong to them."}),"\n",(0,t.jsxs)(n.p,{children:["Open and login to your Keycloak instance. Create a new realm (let's call it ",(0,t.jsx)(n.code,{children:"otcac_test_company_1"})," for the course of\nthis blueprint) and mark it as enabled:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(69256).A+"",width:"2262",height:"1188"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-new-client",children:"Creating a new Client"}),"\n",(0,t.jsxs)(n.p,{children:["Clients are applications, or services, that can request the authentication of a user. Create a new client (let's call it\n",(0,t.jsx)(n.code,{children:"otcac_test_company_1_client"})," with type ",(0,t.jsx)(n.code,{children:"OpenID Connect"})," and in the ",(0,t.jsx)(n.em,{children:"Capability config"})," step of the wizard, activate the following Authentication\nflows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Standard flow"}),"\n",(0,t.jsx)(n.li,{children:"Implicit flow"}),"\n",(0,t.jsx)(n.li,{children:"Direct access grants"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(69561).A+"",width:"1860",height:"816"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-mappers",children:"Configuring Mappers"}),"\n",(0,t.jsxs)(n.p,{children:["Open the management console of the Client you just created, and navigate to the ",(0,t.jsx)(n.em,{children:"Client scopes"})," tab. Click on the list\nitem with the name: ",(0,t.jsx)(n.code,{children:"otcac_test_company_1_client-dedicated"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(55861).A+"",width:"2272",height:"1252"})}),"\n",(0,t.jsx)(n.p,{children:"Now we need to add some mappers. We will first add one of the predefined ones:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(16377).A+"",width:"2266",height:"874"})}),"\n",(0,t.jsxs)(n.p,{children:["and from the list choose ",(0,t.jsx)(n.code,{children:"email"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(43541).A+"",width:"1638",height:"1306"})}),"\n",(0,t.jsxs)(n.p,{children:["Next we need to add a group membership mapper. Click ",(0,t.jsx)(n.em,{children:"Add mapper"})," -> ",(0,t.jsx)(n.em,{children:"By Configuration"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(60511).A+"",width:"2280",height:"776"})}),"\n",(0,t.jsxs)(n.p,{children:["and from the list choose ",(0,t.jsx)(n.em,{children:"Group Membership"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(5003).A+"",width:"1662",height:"1344"})}),"\n",(0,t.jsxs)(n.p,{children:["Open the configuration of the mapper. Insert a mapper and token name as ",(0,t.jsx)(n.code,{children:"gruppen"}),". The token name will be used in the\nOTC Conversion Rules. ",(0,t.jsx)(n.strong,{children:"Disable"})," the ",(0,t.jsx)(n.em,{children:"Full group path"})," option:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(74667).A+"",width:"2254",height:"1092"})}),"\n",(0,t.jsx)(n.h3,{id:"get-openid-endpoint-configuration",children:"Get OpenID Endpoint Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.em,{children:"Realm Settings"})," and click on ",(0,t.jsx)(n.em,{children:"OpenID Endpoint Configuration"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(15947).A+"",width:"1972",height:"1244"})}),"\n",(0,t.jsx)(n.p,{children:"You will be redirected to web page rendering, as JSON, all the endpoints and the current configuration of your realm:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(26196).A+"",width:"2864",height:"898"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"It is recommended to keep this web page open in a separate tab or screen, because we are going to need to\ngrab some values from it, for our the next steps."})}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-new-iam-identity-provider",children:"Creating a new IAM Identity Provider"}),"\n",(0,t.jsxs)(n.p,{children:["For this step we will change to Open Telekom Cloud Console and particularly to IAM and Identity Providers. Create a new\none, and set ",(0,t.jsx)(n.strong,{children:"Protocol"})," to ",(0,t.jsx)(n.code,{children:"OpenID Connect"}),", ",(0,t.jsx)(n.strong,{children:"SSO Type"})," to ",(0,t.jsx)(n.code,{children:"Virtual User"})," and ",(0,t.jsx)(n.strong,{children:"Status"})," to ",(0,t.jsx)(n.code,{children:"Enabled"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(76985).A+"",width:"1564",height:"906"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-iam-identity-provider",children:"Configuring the IAM Identity Provider"}),"\n",(0,t.jsxs)(n.p,{children:["Find your newly created provider in Identity Providers list and click ",(0,t.jsx)(n.em,{children:"Modify"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(21025).A+"",width:"2372",height:"580"})}),"\n",(0,t.jsx)(n.p,{children:"Set the following values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access Type"}),": ",(0,t.jsx)(n.em,{children:"Programmatic access and management console access"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client ID"}),": The id of your client as defined in Keycloak (in this example is ",(0,t.jsx)(n.code,{children:"otcac_test_company_1_client"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authorization Endpoint"}),": copy the value from key ",(0,t.jsx)(n.strong,{children:"authorization_endpoint"})," of the ",(0,t.jsx)(n.em,{children:"OpenID Endpoint Configuration"})," JSON output"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Response Mode"}),": ",(0,t.jsx)(n.code,{children:"form_post"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Signing Key"}),": open in a new tab the URL address that is value of the key ",(0,t.jsx)(n.code,{children:"jwks_uri"})," of the ",(0,t.jsx)(n.em,{children:"OpenID Endpoint Configuration"})," JSON output. Copy the whole output of the new page and paste it as is in the respective textbox for ",(0,t.jsx)(n.em,{children:"Signing Key"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(8240).A+"",width:"2692",height:"1236"})}),"\n",(0,t.jsxs)(n.p,{children:["Save the changes, ",(0,t.jsx)(n.strong,{children:"but before closing this panel copy the value"})," of the ",(0,t.jsx)(n.em,{children:"Identity Provider URL"})," because we are going to\nneed this value in the next step of this blueprint."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-clients-access-settings",children:"Configuring Client's Access Settings"}),"\n",(0,t.jsxs)(n.p,{children:["For this step we will switch back to ",(0,t.jsx)(n.em,{children:"Keycloak Administration Console"}),", and navigate to ",(0,t.jsx)(n.em,{children:"Access Settings"})," for our client:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(71357).A+"",width:"2464",height:"1262"})}),"\n",(0,t.jsx)(n.p,{children:"Set the following values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Root URL"}),": The ",(0,t.jsx)(n.em,{children:"Identity Provider URL"})," you copied in the previous step."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Home URL"}),": ",(0,t.jsx)(n.code,{children:"https://auth.otc.t-systems.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Valid redirect URIs"}),": ",(0,t.jsx)(n.code,{children:"https://auth.otc.t-systems.com/authui/oidc/post"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"github-integration",children:"GitHub Integration"}),"\n",(0,t.jsx)(n.h3,{id:"adding-github-as-identity-provider",children:"Adding GitHub as Identity Provider"}),"\n",(0,t.jsx)(n.p,{children:"Then we have to add a new Identity Provider that will allow users to authenticate using their GitHub accounts:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(67627).A+"",width:"2268",height:"1144"})}),"\n",(0,t.jsxs)(n.p,{children:["Enable the provider and copy the ",(0,t.jsx)(n.em,{children:"Redirect URI"})," because we are going to need in the next step, that will interconnect\nthis Keycloak realm with a GitHub OAuth application."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(39107).A+"",width:"1618",height:"324"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-new-github-oauth-app",children:"Creating new GitHub OAuth App"}),"\n",(0,t.jsxs)(n.p,{children:["Open your GitHub account and find ",(0,t.jsx)(n.em,{children:"OAuth Apps"})," under ",(0,t.jsx)(n.em,{children:"Settings"})," -> ",(0,t.jsx)(n.em,{children:"Developer Settings"})," and create a new app:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(11773).A+"",width:"2754",height:"916"})}),"\n",(0,t.jsx)(n.p,{children:"and set the following values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Homepage URL"}),": ",(0,t.jsx)(n.code,{children:"https://auth.otc.t-systems.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authorization call back URL"}),": the ",(0,t.jsx)(n.em,{children:"Redirect URI"})," we picked up from the previous step"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(96588).A+"",width:"1426",height:"1018"})}),"\n",(0,t.jsx)(n.p,{children:"Last piece of creating an OAuth App is to generate a client secret:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(12249).A+"",width:"1518",height:"534"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Make immediately a copy of the client secret value. We are going to need it (along with the ",(0,t.jsx)(n.em,{children:"Client ID"})," of the app)\nduring our next step and additionally that is the last time that it will be visible on the GitHub console."]})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-github-identity-provider",children:"Configuring GitHub Identity Provider"}),"\n",(0,t.jsx)(n.p,{children:"Next, let's return back to the configuration panel of our newly created GitHub Identity Provider in Keycloak, and set\nthe following values:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(71660).A+"",width:"2864",height:"1210"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client ID"}),": the ",(0,t.jsx)(n.em,{children:"Client ID"})," of the GitHub OAUth app we just created"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client Secret"}),": the ",(0,t.jsx)(n.em,{children:"Client Secret"})," of the GitHub OAUth app"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-the-iam-identity-provider-conversion-rules",children:"Configuring the IAM Identity Provider Conversion Rules"}),"\n",(0,t.jsxs)(n.p,{children:["By default federated users are named ",(0,t.jsx)(n.code,{children:"FederationUser"})," in the Open Telekom Cloud platform. These users can only log in to\nthe cloud platform and they do not have ",(0,t.jsx)(n.strong,{children:"any"})," other permissions. You can configure identity conversion rules on the\nIAM console to achieve the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Display enterprise users with different names in the cloud platform."}),"\n",(0,t.jsx)(n.li,{children:"Assign permissions to enterprise users to use the cloud platform resources by mapping these users to IAM user groups.\nEnsure that you have created the required user groups."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This can be achieved by editing the ",(0,t.jsx)(n.em,{children:"Identity Conversion Rules"})," under ",(0,t.jsx)(n.em,{children:"IAM"})," -> ",(0,t.jsx)(n.em,{children:"Identity Providers"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(27559).A+"",width:"1725",height:"764"})}),"\n",(0,t.jsxs)(n.p,{children:["Paste the following conversion rule in the ",(0,t.jsx)(n.em,{children:"Edit Rule"})," panel:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'    [\n      {\n        "remote": [\n        {\n          "type": "email"\n        },\n        {\n          "type": "gruppen"\n        }],\n        "local": [\n        {\n          "user": {\n            "name": "{0}"\n          }\n        },\n        {\n          "groups": "{1}"\n        }]\n      }\n    ]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"remote"})," part describes the ",(0,t.jsx)(n.em,{children:"Predefined Mappers"})," (",(0,t.jsx)(n.code,{children:"email"})," and ",(0,t.jsx)(n.code,{children:"gruppen"}),") we created in KeyCloak Client's configuration.\nThe ",(0,t.jsx)(n.em,{children:"local"})," part defines the mapping between the remote properties and the OTC account. The user will get as ",(0,t.jsx)(n.code,{children:"name"}),"\nthe the value of ",(0,t.jsx)(n.code,{children:"remote.email"})," and will automatically belong to the ",(0,t.jsx)(n.code,{children:"groups"})," defined in ",(0,t.jsx)(n.code,{children:"remote.gruppen"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Bear in mind, that we have to create those OTC groups on before hands so they match 1-1 name-wise in order\nthe mapping to work and our federated user to get the desired permissions."})}),"\n",(0,t.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,t.jsx)(n.admonition,{title:"See Also",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/virtual_user_sso_via_openid_connect/step_2_configure_identity_conversion_rules.html",children:"Configure Identity Conversion Rules"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/syntax_of_identity_conversion_rules.html#en-us-topic-0079620340",children:"Syntax of Identity Conversion Rules"})}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},69256:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-mfl-0328d7c11fd4f52fea290bba1a96eb78.png"},69561:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-mmx-ef555b9fc41473378fb98d834d9a3e0e.png"},55861:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-mr5-7be1dd3243dc3d4006da460679d9173b.png"},43541:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-n0d-9d378c9cd3aeaae74e4ca835cf557e86.png"},60511:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-n0n-c081cef89288838051b0077c02d0cbf3.png"},5003:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-n15-43ff3835aeda24903d9e5ccd1b6d5519.png"},16377:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-n1w-ffa32c8afe1a0f81c5cfc24df1db87b5.png"},74667:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-n8b-188f62a44d8d48fe09ad89fd768cefd5.png"},26196:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-ngd-3b38fdb11455d2f365690dd4a46ee3fe.png"},15947:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-nj4-75bee1baebbe88ad21fb7d2ca72206f7.png"},76985:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-nq7-820de863556c25f39dd1b5ce803273b8.png"},21025:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-nw9-8a535cf8a63baff8a849d0f7a2354e23.png"},8240:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-o7i-e4ae59956321b156c088e37f19ad38be.png"},71357:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20231212-och-5478fcf68933879135aac4b087ae2669.png"},11773:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20240122-k0w-f7c7fa4da2685c3b8d10a971c0b65d76.png"},71660:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20240122-k1y-687118ef9aaf74455078b148b47fa22b.png"},67627:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20240122-k3x-1cfa8fa105950a273a92eb39cbbdd762.png"},96588:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20240122-k68-22b2afaed8c7a3104b5a71e97bea44dc.png"},12249:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20240122-k76-7658673ce276a2ef4bd39af5b187d28c.png"},27559:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20240201-erg-8a70895f273613c8dd516dade991698a.png"},39107:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SCR-20240201-k76-d31836c3492da539e4289e4d885cebab.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);