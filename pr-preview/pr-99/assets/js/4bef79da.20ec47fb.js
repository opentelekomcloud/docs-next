"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[88029],{58723:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(74848),s=n(28453);const r={id:"identity-federation-github",title:"Identity Federation with GitHub",tags:["github","security","github","oauth2","federation"]},o="Identity Federation with GitHub",a={id:"blueprints/by-use-case/security/authentik/identity-federation-github",title:"Identity Federation with GitHub",description:"Identity Federation with GitHub refers to the process of allowing users to authenticate using their GitHub credentials to access various applications and services. This method leverages GitHub as an identity provider (IdP), enabling single sign-on (SSO) capabilities and simplifying user management across different platforms.",source:"@site/docs/blueprints/by-use-case/security/authentik/2_identity-federation-github.md",sourceDirName:"blueprints/by-use-case/security/authentik",slug:"/blueprints/by-use-case/security/authentik/identity-federation-github",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/security/authentik/identity-federation-github",draft:!1,unlisted:!1,editUrl:"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/security/authentik/2_identity-federation-github.md",tags:[{inline:!0,label:"github",permalink:"/docs-next/pr-preview/pr-99/docs/tags/github"},{inline:!0,label:"security",permalink:"/docs-next/pr-preview/pr-99/docs/tags/security"},{inline:!0,label:"github",permalink:"/docs-next/pr-preview/pr-99/docs/tags/github"},{inline:!0,label:"oauth2",permalink:"/docs-next/pr-preview/pr-99/docs/tags/oauth-2"},{inline:!0,label:"federation",permalink:"/docs-next/pr-preview/pr-99/docs/tags/federation"}],version:"current",sidebarPosition:2,frontMatter:{id:"identity-federation-github",title:"Identity Federation with GitHub",tags:["github","security","github","oauth2","federation"]},sidebar:"blueprintsSidebar",previous:{title:"Deploy Authentik on CCE",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/security/authentik/cce-authentik"},next:{title:"Authentik as an Identity Provider for IAM",permalink:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/security/authentik/authentik-as-identity-provider-iam"}},l={},c=[{value:"How It Works",id:"how-it-works",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Connecting Authentik with GitHub for Federation and Social Login",id:"connecting-authentik-with-github-for-federation-and-social-login",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up GitHub OAuth App",id:"setting-up-github-oauth-app",level:3},{value:"Configuring Authentik",id:"configuring-authentik",level:3},{value:"Adding the GitHub Source to the Login Page",id:"adding-the-github-source-to-the-login-page",level:3},{value:"Adding GitHub Users to a Default Group",id:"adding-github-users-to-a-default-group",level:3},{value:"Step 1: Create a New Group",id:"step-1-create-a-new-group",level:4},{value:"Step 2: Modifying Enrollment flow",id:"step-2-modifying-enrollment-flow",level:4},{value:"Step 4: Configure Post-Authentication Flow",id:"step-4-configure-post-authentication-flow",level:4},{value:"Checking GitHub Organization Membership",id:"checking-github-organization-membership",level:3},{value:"IAM Identity Provider Conversion Rules",id:"iam-identity-provider-conversion-rules",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"identity-federation-with-github",children:"Identity Federation with GitHub"}),"\n",(0,t.jsx)(i.p,{children:"Identity Federation with GitHub refers to the process of allowing users to authenticate using their GitHub credentials to access various applications and services. This method leverages GitHub as an identity provider (IdP), enabling single sign-on (SSO) capabilities and simplifying user management across different platforms."}),"\n",(0,t.jsx)(i.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"User Initiates Login"}),": When a user attempts to access an application, they are presented with an option to log in using GitHub."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Redirection to GitHub"}),": The application redirects the user to GitHub's authentication page."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"User Authenticates"}),": The user enters their GitHub credentials (username and password) to log in."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"GitHub Issues Token"}),": Upon successful authentication, GitHub generates an OAuth token and sends it back to the application."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Token Validation"}),": The application validates the token with GitHub to ensure its authenticity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Access Granted"}),": Once validated, the user is granted access to the application based on their GitHub identity and associated permissions."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Simplified User Management"}),": Administrators can manage user access through GitHub, reducing the need to maintain separate credentials for each application."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Enhanced Security"}),": By using GitHub's robust authentication mechanisms, applications can benefit from multi-factor authentication (MFA) and other security features."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Improved User Experience"}),": Users can access multiple applications with a single set of credentials, reducing login fatigue and enhancing productivity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Centralized Identity Management"}),": Organizations can centralize their identity management practices, making it easier to enforce security policies and compliance requirements."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Development Environments"}),": Developers can use their GitHub accounts to access development tools, repositories, and CI/CD pipelines without needing to manage multiple logins."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Corporate Applications"}),": Employees can use their GitHub credentials to access internal corporate applications, streamlining the onboarding process and enhancing security."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Open Source Projects"}),": Open source contributors can authenticate using their GitHub accounts, ensuring a seamless experience across various project management and collaboration tools."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"connecting-authentik-with-github-for-federation-and-social-login",children:"Connecting Authentik with GitHub for Federation and Social Login"}),"\n",(0,t.jsx)(i.p,{children:"This guide will walk you through the process of setting up GitHub as an authentication source in authentik, allowing users to log in using their GitHub credentials."}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.p,{children:"Before you begin, make sure you have:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"An authentik installation"}),"\n",(0,t.jsx)(i.li,{children:"Access to your GitHub account"}),"\n",(0,t.jsx)(i.li,{children:"Administrative access to both authentik and GitHub"}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{title:"Note",type:"note",children:[(0,t.jsx)(i.p,{children:"Throughout this guide, we'll use the following placeholders:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"authentik.test-domain.com"})," as the FQDN of your authentik installation"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"test-domain.com"})," as your site's homepage URL"]}),"\n"]})]}),"\n",(0,t.jsx)(i.h3,{id:"setting-up-github-oauth-app",children:"Setting up GitHub OAuth App"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to GitHub Developer Settings: ",(0,t.jsx)(i.a,{href:"https://github.com/settings/developers",children:"https://github.com/settings/developers"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.em,{children:"Register a new application"}),"\n",(0,t.jsx)(i.img,{alt:"image",src:n(50958).A+"",width:"1148",height:"272"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fill in the application details:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Application Name"}),': Choose a recognizable name (e.g., "authentik")']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Homepage URL"}),": Enter your site's URL (e.g., ",(0,t.jsx)(i.code,{children:"www.test-domain.com"}),")"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Authorization callback URL"}),": ",(0,t.jsx)(i.code,{children:"https://authentik.test-domain.com/source/oauth/callback/github"}),"\n",(0,t.jsx)(i.img,{alt:"image",src:n(6701).A+"",width:"845",height:"700"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.em,{children:"Register Application"})]}),"\n",(0,t.jsxs)(i.li,{children:["On the next page, note down the ",(0,t.jsx)(i.em,{children:"Client ID"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.em,{children:"Generate a new client secret"})," and immediately copy it"]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"You won't be able to see the client secret again, so make sure to save it securely."})}),"\n",(0,t.jsx)(i.h3,{id:"configuring-authentik",children:"Configuring Authentik"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In authentik, navigate to ",(0,t.jsx)(i.em,{children:"Directory -> Federation & Social login"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.em,{children:"Create -> Github OAuth Source"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Fill in the source details:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Name"}),': Choose a name (e.g., "GitHub")']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Slug"}),": ",(0,t.jsx)(i.code,{children:"github"})," (or choose a custom slug, but remember to update URLs accordingly)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Consumer Key"}),": Paste the Client ID from GitHub"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Consumer Secret"}),": Paste the Client Secret from GitHub\n",(0,t.jsx)(i.img,{alt:"image",src:n(54104).A+"",width:"1104",height:"915"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Save the configuration"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"User Matching Mode"})," in Authentik can be configured to match users based on different identifiers including ",(0,t.jsx)(i.code,{children:"email"})," or ",(0,t.jsx)(i.code,{children:"username"})]}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Email Matching"}),": This mode matches users based on their email address. It is often the most reliable option because email addresses are generally unique and consistent across different platforms. However, you must ensure that users' email addresses are standardized across all identity providers. There is also a risk if users have multiple accounts with different email addresses. Also the admin should make sure that the Email is already validated."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Username Matching"}),": This mode matches users based on their username. This can be useful in environments where usernames are more consistent or standardized across systems. However, it poses a higher risk of conflicts, especially if users have different usernames on different platforms. It's crucial to ensure that usernames are unique and managed consistently to avoid potential mismatches or user duplication."]}),"\n"]}),"\n"]}),(0,t.jsx)(i.p,{children:"When selecting the matching mode, carefully consider the consistency and uniqueness of either the email or username across the identity providers you plan to integrate."})]}),"\n",(0,t.jsx)(i.p,{children:"Your GitHub OAuth Source in authentik is now set up and ready to use."}),"\n",(0,t.jsx)(i.h3,{id:"adding-the-github-source-to-the-login-page",children:"Adding the GitHub Source to the Login Page"}),"\n",(0,t.jsxs)(i.p,{children:["To make the GitHub login option visible on your authentik login page, you'll need to add it to your login flow. Refer to the ",(0,t.jsx)(i.a,{href:"https://docs.goauthentik.io/docs/sources#add-sources-to-default-login-page",children:"authentik documentation"})," for detailed steps on how to add sources to the default login page."]}),"\n",(0,t.jsx)(i.h3,{id:"adding-github-users-to-a-default-group",children:"Adding GitHub Users to a Default Group"}),"\n",(0,t.jsx)(i.p,{children:"To automatically add users who log in via GitHub to a default group in authentik, you can use a post-authentication flow. This process involves creating a group, setting up a policy, and adding the policy to a flow that runs after successful authentication. Here's how to do it:"}),"\n",(0,t.jsx)(i.h4,{id:"step-1-create-a-new-group",children:"Step 1: Create a New Group"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.em,{children:"Directory -> Groups"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.em,{children:"Create"})]}),"\n",(0,t.jsxs)(i.li,{children:['Name the group (e.g., "gitHub-users")\n',(0,t.jsx)(i.img,{alt:"image",src:n(90600).A+"",width:"888",height:"650"})]}),"\n",(0,t.jsx)(i.li,{children:"Save the group"}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"step-2-modifying-enrollment-flow",children:"Step 2: Modifying Enrollment flow"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to ",(0,t.jsx)(i.em,{children:"Flows and Stages -> Flows"})]}),"\n",(0,t.jsxs)(i.li,{children:["Under ",(0,t.jsx)(i.em,{children:"Enrollment"})," section select the enrollment flow which is connected to the Github OAuth Source its default name is ",(0,t.jsx)(i.em,{children:"default-source-enrollment"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.em,{children:"Stage Bindings"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.em,{children:"Edit Stage"})," of stage which has type of ",(0,t.jsx)(i.em,{children:"User Write Stage"})]}),"\n",(0,t.jsxs)(i.li,{children:["Set a default group under ",(0,t.jsx)(i.em,{children:"Group"})," for the newly created users which login using github\n",(0,t.jsx)(i.img,{alt:"image",src:n(62135).A+"",width:"889",height:"825"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.em,{children:"Update"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"step-4-configure-post-authentication-flow",children:"Step 4: Configure Post-Authentication Flow"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If you created a new Enrollment flow, make sure it's set as a ",(0,t.jsx)(i.em,{children:"Enrollment flow"})," in your ",(0,t.jsx)(i.em,{children:"Github OAuth Source"})," configuration"]}),"\n",(0,t.jsx)(i.li,{children:"If you're using an existing flow, verify that it runs after successful authentication"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Now, when users log in successfully via GitHub, they will be automatically added to the specified group. This allows you to manage permissions and access control for GitHub users more easily within authentik."}),"\n",(0,t.jsx)(i.admonition,{title:"Note",type:"note",children:(0,t.jsx)(i.p,{children:"Remember to test this setup thoroughly in a non-production environment before implementing it in your live system. Ensure that the group assignment works as expected and doesn't interfere with other authentication processes."})}),"\n",(0,t.jsx)(i.h3,{id:"checking-github-organization-membership",children:"Checking GitHub Organization Membership"}),"\n",(0,t.jsx)(i.p,{children:"If you want to restrict access to users who are members of a specific GitHub organization, you can implement a policy in your authentik flows. This feature requires authentik version 2021.12.5 or later."}),"\n",(0,t.jsxs)(i.admonition,{title:"Security Risk",type:"danger",children:[(0,t.jsx)(i.p,{children:"It is crucial to verify that users belong to a specific GitHub organization before granting them access to your resources. Failing to implement this check can pose a significant security threat to your tenant."}),(0,t.jsx)(i.p,{children:"Without verifying GitHub organization membership, anyone with a GitHub account could potentially log in to your system, which would leave your tenant open to unauthorized access. This effectively makes your application public, which is a severe security concern."}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"B2C Scenario Exception"}),": If you are intentionally offering a B2C (Business-to-Consumer) authentication for a SaaS (Software as a Service) scenario, bypassing this check might be acceptable. However, in most cases this should be strictly prohibited to prevent unauthorized access."]}),"\n"]})]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Navigate to ",(0,t.jsx)(i.em,{children:"Directory -> Federation and Social login"})," and edit previously created Github OAuth Source"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Add the ",(0,t.jsx)(i.code,{children:"read:org"})," scope to your GitHub OAuth Source and save it"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Then navigate to ",(0,t.jsx)(i.em,{children:"Flows and Stages -> Flows -> Enrollment"})," and click ",(0,t.jsx)(i.code,{children:"default-source-enrollment"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Go to the ",(0,t.jsx)(i.em,{children:"Policy / Group / User Bindings"})," tab, then ",(0,t.jsx)(i.em,{children:"Create and bind Policy"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Create a new policy of type ",(0,t.jsx)(i.em,{children:"Expression Policy"})," with the following Python code as ",(0,t.jsx)(i.em,{children:"Expression"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'# Ensure flow is only run during oauth logins via Github\nif context["source"].provider_type != "github":\n    return True\n\naccepted_org = "your_org_name"\n\nconnection = context["goauthentik.io/sources/connection"]\naccess_token = connection.access_token\ngithub_username = context["oauth_userinfo"]\n\norgs_response = requests.get(\n    "https://api.github.com/user/orgs",\n    auth=(github_username["login"], access_token),\n    headers={\n        "accept": "application/vnd.github.v3+json"\n    }\n)\norgs_response.raise_for_status()\norgs = orgs_response.json()\n\nuser_matched = any(org[\'login\'] == accepted_org for org in orgs)\nif not user_matched:\n    ak_message(f"User is not member of {accepted_org}.")\nreturn user_matched\n'})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Under ",(0,t.jsx)(i.em,{children:"Edit Binding"})," ensure that the policy is Enabled and ",(0,t.jsx)(i.em,{children:"Failure result"})," is ",(0,t.jsx)(i.em,{children:"Don't pass"})," and save the policy."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Go back and edit the ",(0,t.jsx)(i.code,{children:"default-source-enrollment"})," flow, under ",(0,t.jsx)(i.em,{children:"Behavior settings"})," ensure that ",(0,t.jsx)(i.em,{children:"Denied action"})," is set to ",(0,t.jsx)(i.code,{children:"MESSAGE"})," and ",(0,t.jsx)(i.em,{children:"Policy engine mode"})," is set to ",(0,t.jsx)(i.code,{children:"all"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsx)(i.p,{children:"For Authentik to successfully check a user's membership in a GitHub organization, the following condition must be met:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"OAuth App Configuration"}),": The ",(0,t.jsx)(i.em,{children:"Github OAuth App"})," used for authentication should either be created by the GitHub organization or explicitly trusted by the organization. If the OAuth App is created by a different user or organization, the GitHub organization must trust the app for Authentik to retrieve and verify the organizations to which the user belongs."]}),"\n"]}),(0,t.jsx)(i.p,{children:"Ensuring these configurations are in place is essential for the secure and correct functioning of the organization membership verification policy."})]}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["This part is taken form official ",(0,t.jsx)(i.a,{href:"https://docs.goauthentik.io/docs/sources/github/#checking-for-membership-of-a-github-organisation",children:"authentik documentation"}),"."]})}),"\n",(0,t.jsx)(i.h2,{id:"iam-identity-provider-conversion-rules",children:"IAM Identity Provider Conversion Rules"}),"\n",(0,t.jsx)(i.p,{children:"After creating and connecting the Identity provider on your tenant to the authentik if you wish to give users which login with github access to your tenant you can use the following conversion rules."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["If you haven't created a Identity Provider on your tenant first follow steps described in ",(0,t.jsx)(i.a,{href:"/docs-next/pr-preview/pr-99/docs/blueprints/by-use-case/security/authentik/authentik-as-identity-provider-iam",children:"Connecting Authentik with IAM for Login"})," and then use the conversion rules given below."]})}),"\n",(0,t.jsx)(i.p,{children:"Edit the conversion rule of previously created Identity Provider in IAM:"}),"\n",(0,t.jsxs)(i.p,{children:["Paste the following conversion rule in the ",(0,t.jsx)(i.em,{children:"Edit Rule"})," panel:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'[\n  {\n    "remote": [\n      {\n        "type": "email"\n      },\n      {\n        "any_one_of": [\n          "github-users"\n        ],\n        "type": "groups"\n      }\n    ],\n    "local": [\n      {\n        "user": {\n          "name": "fidp-{0}"\n        }\n      },\n      {\n        "group": {\n          "name": "ecs-admin"\n        }\n      }\n    ]\n  }\n]\n'})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"remote"})," part describes the  requested ",(0,t.jsx)(i.em,{children:"Scopes"})," (",(0,t.jsx)(i.code,{children:"profile"})," or ",(0,t.jsx)(i.code,{children:"email"}),") of the user.\nThe ",(0,t.jsx)(i.em,{children:"local"})," part defines the mapping between the remote properties and the local IAM. The user will get a ",(0,t.jsx)(i.code,{children:"name"}),"\nas the value of ",(0,t.jsx)(i.code,{children:"fidp-<user-email>"})," and will automatically belong to the ",(0,t.jsx)(i.code,{children:"ecs-admin"})," if it is a member of ",(0,t.jsx)(i.code,{children:"github-users"}),"."]}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsxs)(i.p,{children:["Notice that the ",(0,t.jsx)(i.em,{children:"ecs-admin"})," group is created in advanced so the IAM can find the group locally and it would automatically add all the users which belong to the ",(0,t.jsx)(i.em,{children:"github-users"})," in remote identity provider to this local group. If it cannot match the user to any group the access of the user would be simply denied."]})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},62135:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configure-groups-enrollment-stage-f4eb57fb4d17b147a1af5b77bc69184f.png"},90600:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/create-group-67f8abb7880837fedd8f61737f82aa4f.png"},6701:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/github-New-OAuth-Application-b19a8e1bdf02ace9b9812c29334edfd4.png"},50958:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/github-create-oauth-app-ec6a7002ac54329aa4e74bb277e65a16.png"},54104:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/github-idp-configuration-fd1e58995ccd0f38900c8ce798376e11.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);