"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[83837],{57968:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"blueprints/by-use-case/security/authentik/authentik","title":"Authentik","description":"Authentik is a modern, open-source Identity Provider (IdP) that offers flexible and secure authentication and authorization solutions for organizations of all sizes. It provides a comprehensive suite of identity management features, allowing businesses to centralize user authentication, implement single sign-on (SSO), and manage access to various applications and services.","source":"@site/docs/blueprints/by-use-case/security/authentik/overview.md","sourceDirName":"blueprints/by-use-case/security/authentik","slug":"/blueprints/by-use-case/security/authentik/authentik","permalink":"/docs-next/pr-preview/pr-207/docs/blueprints/by-use-case/security/authentik/authentik","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/blueprints/by-use-case/security/authentik/overview.md","tags":[{"inline":true,"label":"authentik","permalink":"/docs-next/pr-preview/pr-207/docs/tags/authentik"},{"inline":true,"label":"security","permalink":"/docs-next/pr-preview/pr-207/docs/tags/security"}],"version":"current","frontMatter":{"id":"authentik","title":"Authentik","tags":["authentik","security"]},"sidebar":"blueprintsSidebar","previous":{"title":"Security","permalink":"/docs-next/pr-preview/pr-207/docs/blueprints/by-use-case/security/"},"next":{"title":"Deploy Authentik on CCE","permalink":"/docs-next/pr-preview/pr-207/docs/blueprints/by-use-case/security/authentik/cce-authentik"}}');var s=i(74848),r=i(28453);const a={id:"authentik",title:"Authentik",tags:["authentik","security"]},o="Authentik",c={},l=[{value:"Key Features",id:"key-features",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Integration",id:"integration",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"authentik",children:"Authentik"})}),"\n",(0,s.jsx)(n.p,{children:"Authentik is a modern, open-source Identity Provider (IdP) that offers flexible and secure authentication and authorization solutions for organizations of all sizes. It provides a comprehensive suite of identity management features, allowing businesses to centralize user authentication, implement single sign-on (SSO), and manage access to various applications and services."}),"\n",(0,s.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Single Sign-On (SSO)"}),": Enables users to access multiple applications with a single set of credentials."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Multi-Factor Authentication (MFA)"}),": Supports various second-factor methods for enhanced security."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User Lifecycle Management"}),": Facilitates user provisioning, de-provisioning, and self-service capabilities."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Access Control"}),": Provides fine-grained access policies based on user attributes and context."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Federation"}),": Supports identity federation protocols like SAML, OAuth 2.0, and OpenID Connect."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customizable UI"}),": Offers a flexible, brandable user interface for login and self-service pages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API-first Design"}),": Enables easy integration and automation with other systems."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enterprise SSO"}),": Centralize authentication for all corporate applications."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customer Identity and Access Management (CIAM)"}),": Manage customer identities and access to services."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Security"}),": Secure APIs using OAuth 2.0 and OpenID Connect."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DevOps and Infrastructure Access"}),": Control access to development and infrastructure resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compliance and Auditing"}),": Meet regulatory requirements with comprehensive logging and reporting."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.p,{children:"Authentik is designed with a modular, microservices-based architecture that ensures scalability and flexibility. The main components include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Core Service"}),": Handles the core logic, user management, and policy decisions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Web Interface"}),": Provides the user-facing frontend for authentication and self-service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API"}),": Offers a RESTful API for integration and automation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outposts"}),": Edge proxies that can be deployed close to applications for improved performance and offline capabilities."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Providers"}),": Modules that implement various authentication and federation protocols."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stages"}),": Configurable authentication steps that can be combined to create complex flows."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Policies"}),": Rules that determine access rights and trigger actions based on conditions."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,s.jsx)(n.p,{children:"Authentik integrates with a wide range of systems and protocols, including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"LDAP and Active Directory"}),"\n",(0,s.jsx)(n.li,{children:"SAML 2.0"}),"\n",(0,s.jsx)(n.li,{children:"OAuth 2.0 and OpenID Connect"}),"\n",(0,s.jsx)(n.li,{children:"SCIM for user provisioning"}),"\n",(0,s.jsx)(n.li,{children:"Various MFA providers (TOTP, WebAuthn, etc.)"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"While Authentik provides a comprehensive identity management solution, proper configuration and security best practices are essential for maintaining a secure environment."})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);