---
id: microsoft
title: Microsoft
tags: [microsoft, security]
---

# Microsoft

Microsoft is offering an on‑premises identity foundation with [Active Directory Domain Services](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview) (AD DS), which centralizes user and group object management, policy enforcement and directory lookups within a Windows Server forest and domain hierarchy. Microsoft Active Directory (AD) is an on‑premises directory service that centralizes the management of users, computers and security policies within a Windows Server domain. Its utilizing the Lightweight Directory Access Protocol (LDAP) for querying directory objects, Kerberos for secure ticket‑based authentication, and Group Policy Objects (GPOs) for enforcing configuration settings across machines. AD stores information in a hierarchical, multi‑master “forest” topology—composed of domains, trees and organizational units—which allows IT teams to delegate administrative control and segment resources according to business or geographic needs.

To enable federated access, [Active Directory Federation Services](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/ad-fs-overview) (ADFS) can be layered on top of AD DS to issue and validate claims‑based SAML and WS‑Fed tokens for single sign‑on across trust boundaries and to external applications.

[Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) (formerly Azure Active Directory) is the cloud‑native identity and access management platform that complements on‑prem AD and ADFS by providing OAuth 2.0/OpenID Connect endpoints, B2B/B2C collaboration features, and conditional access policies. Entra ID supports hybrid identity architectures—synchronizing on‑prem accounts to the cloud via Azure AD Connect—and offers scalable authentication for SaaS applications, mobile clients and microservices in distributed environments.

:::info Next Steps
* [Active Directory as Identity Provider for IAM](active-directory-as-identity-provider-iam.md)
* [Entra ID as Identity Provider for IAM](active-directory-as-identity-provider-iam.md)

:::