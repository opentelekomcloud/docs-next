"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[50163],{34877:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(74848),s=i(28453);const r={id:"authentik-as-identity-provider-iam",title:"Authentik as an Identity Provider for IAM",tags:["security","oauth2","iam","authentik"]},o="Connecting Authentik with IAM for Login",d={id:"blueprints/by-use-case/security/authentik/authentik-as-identity-provider-iam",title:"Authentik as an Identity Provider for IAM",description:"This guide will walk you through the process of integrating authentik, with Identity and Access Management (IAM) of Open Telekom Cloud using OAuth 2.0.",source:"@site/docs/blueprints/by-use-case/security/authentik/3_authentik-as-identity-provider-iam.md",sourceDirName:"blueprints/by-use-case/security/authentik",slug:"/blueprints/by-use-case/security/authentik/authentik-as-identity-provider-iam",permalink:"/docs-next/pr-preview/pr-128/docs/blueprints/by-use-case/security/authentik/authentik-as-identity-provider-iam",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/security/authentik/3_authentik-as-identity-provider-iam.md",tags:[{inline:!0,label:"security",permalink:"/docs-next/pr-preview/pr-128/docs/tags/security"},{inline:!0,label:"oauth2",permalink:"/docs-next/pr-preview/pr-128/docs/tags/oauth-2"},{inline:!0,label:"iam",permalink:"/docs-next/pr-preview/pr-128/docs/tags/iam"},{inline:!0,label:"authentik",permalink:"/docs-next/pr-preview/pr-128/docs/tags/authentik"}],version:"current",sidebarPosition:3,frontMatter:{id:"authentik-as-identity-provider-iam",title:"Authentik as an Identity Provider for IAM",tags:["security","oauth2","iam","authentik"]},sidebar:"blueprintsSidebar",previous:{title:"Identity Federation with GitHub",permalink:"/docs-next/pr-preview/pr-128/docs/blueprints/by-use-case/security/authentik/identity-federation-github"},next:{title:"Secrets management with CCE and Hashicorp Vault",permalink:"/docs-next/pr-preview/pr-128/docs/blueprints/by-use-case/security/cce-vault"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Authentik as an OAuth Provider",id:"configuring-authentik-as-an-oauth-provider",level:2},{value:"Configuring IAM",id:"configuring-iam",level:2},{value:"Create a new IAM Identity Provider",id:"create-a-new-iam-identity-provider",level:3},{value:"Configure the IAM Identity Provider",id:"configure-the-iam-identity-provider",level:3},{value:"Creating an Application and Connecting the Provider",id:"creating-an-application-and-connecting-the-provider",level:2},{value:"Configure the IAM Identity Provider Conversion Rules",id:"configure-the-iam-identity-provider-conversion-rules",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"connecting-authentik-with-iam-for-login",children:"Connecting Authentik with IAM for Login"}),"\n",(0,t.jsx)(n.p,{children:"This guide will walk you through the process of integrating authentik, with Identity and Access Management (IAM) of Open Telekom Cloud using OAuth 2.0."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before starting the integration, ensure you have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An authentik installation up and running"}),"\n",(0,t.jsx)(n.li,{children:"Administrative privileges on both authentik and your IAM system"}),"\n",(0,t.jsx)(n.li,{children:"Basic understanding of OAuth 2.0 concepts and flows"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-authentik-as-an-oauth-provider",children:"Configuring Authentik as an OAuth Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Log in to your authentik admin panel"}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to  ",(0,t.jsx)(n.em,{children:"Applications -> Providers"})]}),"\n",(0,t.jsx)(n.li,{children:"Create a new OAuth2/OpenID Provider"}),"\n",(0,t.jsxs)(n.li,{children:["Configure the provider settings:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Give your provider a descriptive name"}),"\n",(0,t.jsx)(n.li,{children:"Client type: Public"}),"\n",(0,t.jsx)(n.li,{children:"Client ID: Auto-generated or specify your own"}),"\n",(0,t.jsxs)(n.li,{children:["Redirect URIs: Enter the callback URL from your IAM: ",(0,t.jsx)(n.code,{children:"https://auth.otc.t-systems.com/authui/oidc/post"})]}),"\n",(0,t.jsxs)(n.li,{children:["Under Advanced protocol settings -> Scopes: Select the required scopes (e.g., openid, profile, email, groups)\n",(0,t.jsx)(n.img,{alt:"image",src:i(45988).A+"",width:"885",height:"753"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Save the provider configuration"}),"\n",(0,t.jsx)(n.li,{children:"Note down the Client ID, and Authorization/Token endpoints"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-iam",children:"Configuring IAM"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-iam-identity-provider",children:"Create a new IAM Identity Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Log in to your Open Telekom Cloud Console"}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.em,{children:"IAM and Identity Providers"})," under ",(0,t.jsx)(n.em,{children:"Management & Deployment"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.em,{children:"Identity Providers"})," and click ",(0,t.jsx)(n.em,{children:"Create Identity Provider"})," to create a new identity provider with the following values:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Give your provider a descriptive name"}),"\n",(0,t.jsxs)(n.li,{children:["Protocol: ",(0,t.jsx)(n.em,{children:"OpenID Connect"})]}),"\n",(0,t.jsxs)(n.li,{children:["SSO Type: ",(0,t.jsx)(n.em,{children:"Virtual User"})]}),"\n",(0,t.jsxs)(n.li,{children:["Status: ",(0,t.jsx)(n.em,{children:"Enabled"}),"\n",(0,t.jsx)(n.img,{alt:"image",src:i(76476).A+"",width:"1564",height:"906"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-the-iam-identity-provider",children:"Configure the IAM Identity Provider"}),"\n",(0,t.jsxs)(n.p,{children:["Find your newly created provider in Identity Providers list and click ",(0,t.jsx)(n.em,{children:"Modify"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(47186).A+"",width:"2372",height:"580"})}),"\n",(0,t.jsx)(n.p,{children:"Set the following values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access Type"}),": ",(0,t.jsx)(n.em,{children:"Programmatic access and management console access"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Identity Provider URL"}),": URL of authentik (e.g. ",(0,t.jsx)(n.code,{children:"https://test-domain.com/application/o/authentik-iam/"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client ID"}),": The id of your client as defined in ",(0,t.jsx)(n.em,{children:"Configuring Authentik as an OAuth Provider"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authorization Endpoint"}),": copy the value from key ",(0,t.jsx)(n.em,{children:"authorization_endpoint"})," of the ",(0,t.jsx)(n.em,{children:"OpenID Endpoint Configuration"})," (e.g. ",(0,t.jsx)(n.code,{children:"https://test-domain.com/application/o/authorize/"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scopes"}),": Select the required scopes (e.g., openid, profile, email, groups)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Response Mode"}),": ",(0,t.jsx)(n.code,{children:"form_post"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Signing Key"}),": Value of the key ",(0,t.jsx)(n.code,{children:"jwks_uri"})," of the ",(0,t.jsx)(n.em,{children:"OpenID Endpoint Configuration"})," JSON output\n",(0,t.jsx)(n.img,{alt:"image",src:i(58006).A+"",width:"913",height:"794"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["All of the links for your setup can be found under ",(0,t.jsx)(n.em,{children:"Overview"})," page of the ",(0,t.jsx)(n.em,{children:"OAuth2/OpenID Provider"})," in Authentik admin dashboard.\n",(0,t.jsx)(n.img,{alt:"image",src:i(968).A+"",width:"1147",height:"720"})]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For the ",(0,t.jsx)(n.em,{children:"Signing Key"})," you should open link provided under ",(0,t.jsx)(n.em,{children:"JWKS URL"})," and copy the whole json file content to the respective field."]})}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-application-and-connecting-the-provider",children:"Creating an Application and Connecting the Provider"}),"\n",(0,t.jsx)(n.p,{children:"To enable users to authenticate, you need to create an application in Authentik and connect it to the provider. Follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Authentik web interface, navigate to ",(0,t.jsx)(n.em,{children:"Applications"})," -> ",(0,t.jsx)(n.em,{children:"Applications"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.em,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill in the following details:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": ",(0,t.jsx)(n.code,{children:"Your Application Name"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Slug"}),": ",(0,t.jsx)(n.code,{children:"your-application-slug"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Provider"}),": Select the provider you created earlier."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Launch URL"}),": Specify the URI where Authentik should redirect users after authentication. You can find this link under ",(0,t.jsx)(n.em,{children:"Programmatic access and management console accesses"})," of the previously created Identity provider in your tenant."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(30855).A+"",width:"991",height:"718"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Save the application settings."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-iam-identity-provider-conversion-rules",children:"Configure the IAM Identity Provider Conversion Rules"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/virtual_user_sso_via_openid_connect/step_2_configure_identity_conversion_rules.html",children:"identity conversion rules"})," to map the identities of existing users to Open Telekom Cloud and control their access to cloud resources."]}),"\n",(0,t.jsxs)(n.p,{children:["By default federated users are named ",(0,t.jsx)(n.em,{children:"FederationUser"})," in the Open Telekom Cloud platform. These users can only log in to\nthe cloud platform and they do not have ",(0,t.jsx)(n.strong,{children:"any"})," other permissions. You can configure identity conversion rules on the\nIAM console to achieve the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Display enterprise users with different names in the cloud platform."}),"\n",(0,t.jsx)(n.li,{children:"Assign permissions to enterprise users to use the cloud platform resources by mapping these users to IAM user groups.\nEnsure that you have created the required user groups."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This can be done by editing the Identity Conversion Rules. Edit the conversion rule of previously created Identity Provider in IAM:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(84715).A+"",width:"626",height:"502"})}),"\n",(0,t.jsxs)(n.p,{children:["Paste the following conversion rule in the ",(0,t.jsx)(n.em,{children:"Edit Rule"})," panel:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "remote": [\n      {\n        "type": "email"\n      },\n      {\n        "type": "groups"\n      }\n    ],\n    "local": [\n      {\n        "user": {\n          "name": "fidp-{0}"\n        }\n      },\n      {\n        "groups":  "{1}"\n      }\n    ]\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"remote"})," part describes the  requested ",(0,t.jsx)(n.em,{children:"Scopes"})," (",(0,t.jsx)(n.code,{children:"profile"})," or ",(0,t.jsx)(n.code,{children:"email"}),") of the user.\nThe ",(0,t.jsx)(n.em,{children:"local"})," part defines the mapping between the remote properties and the local IAM. The user will get a ",(0,t.jsx)(n.code,{children:"name"}),"\nas the value of ",(0,t.jsx)(n.code,{children:"fidp-<user-email>"})," and will automatically belong to the groups on your tenant which have the same name as the groups that the user is a member of on authentik."]}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Administrators must exercise extreme caution when naming groups in Authentik. Group names are critical because conversion rules within the Identity provider automatically assign users to groups based on these names in this configuration."}),(0,t.jsx)(n.p,{children:"If a group is improperly named or if the naming conventions are not strictly followed, users might be incorrectly assigned to sensitive groups. This misconfiguration could grant unauthorized users elevated permissions or access to restricted resources, thereby posing a significant security risk to the tenant."}),(0,t.jsx)(n.p,{children:"Always use clear, descriptive, and unique names for groups that align with your access control policies. Regularly review and audit group names and associated conversion rules to ensure they are correctly configured and do not inadvertently expose the tenant to security vulnerabilities."})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["You can find more detailed info about ",(0,t.jsx)(n.em,{children:"Conversion Rules"})," under:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/virtual_user_sso_via_openid_connect/step_2_configure_identity_conversion_rules.html",children:"Configure Identity Conversion Rules"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/syntax_of_identity_conversion_rules.html#en-us-topic-0079620340",children:"Syntax of Identity Conversion Rules"})}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},968:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/authentik-idp-urls-7f77c2352c992311b5056ea16b4c5d6c.png"},58006:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/configure-idp-iam-4261ba45531697b3957504233ae4d698.png"},30855:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create-application-2faf12d57412f93ce7093d2a5c24a9c7.png"},76476:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create-idp-iam-820de863556c25f39dd1b5ce803273b8.png"},45988:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create-oauth-cc269ceb65d168b0779eb3c7959bb07f.png"},84715:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/edit-conversion-rules-16d658829b8158b7cc7ce130122b4c81.png"},47186:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/modify-idp-iam-8a535cf8a63baff8a849d0f7a2354e23.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);