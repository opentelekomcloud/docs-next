---
id: opendesk
title: OpenDesk
tags: [opendesk, collaboration, sovereignty, digital-workplace]
---

import Mermaid from '@theme/Mermaid';

# OpenDesk

[openDesk](https://opendesk.eu/) is an open-source, sovereign digital workplace solution developed for public administration under the coordination of the German Federal Ministry of the Interior and Community (BMI) and operated by the Centre for Digital Sovereignty of the Public Administration (ZenDiS GmbH). It bundles established open-source applications into a single collaboration suite so that organisations can retain full control over their data, identities and infrastructure while avoiding dependence on large proprietary vendors.

## Key Components

openDesk combines the following core applications into one workplace:

![img](/img/docs/blueprints/by-use-case/sovereignty/opendesk/openDesk_Komponenten_EN.png)

| Component | Purpose |
|-----------|---------|
| **Nubus** | Identity & Access Management (IAM) and web portal |
| **Nextcloud** | File sharing, storage and synchronization |
| **Collabora Online** | Online office suite and web-based document editing |
| **OX App Suite** | Email, calendar and groupware |
| **Element/Matrix** | Secure messaging and real-time communication |
| **Jitsi** | Secure video conferencing |
| **OpenProject** | Project and task management |
| **XWiki** | Knowledge management and wiki |
| **CryptPad** | End-to-end encrypted collaborative editing |


## Benefits

Based on the official project description, openDesk is designed to give public-sector organisations a modern workplace while maximising digital sovereignty and independence:

- **Digital sovereignty for public administration**: openDesk reduces dependence on large international platform providers by relying on open standards and free/libre open-source software. Data, identities and configurations remain under the control of the operating organisation.
- **Integrated collaboration suite**: Instead of a patchwork of isolated tools, openDesk combines mail, calendar, chat, video conferencing, file storage, office editing, project management and knowledge management into a coherent workplace with single sign-on.
- **Open standards and interoperability**: The platform uses open protocols and interfaces, making it easier to integrate into existing infrastructures and to switch components where needed without lock-in.
- **Cloud‑native, scalable architecture**: openDesk is built for Kubernetes and can run on sovereign cloud infrastructures such as Sovereign Cloud Stack (SCS), supporting horizontal scaling and resilient operation.
- **Security and compliance**: By design, openDesk supports operation in environments with high security and data-protection requirements (e.g. GDPR, public sector security baselines). The open-source codebase allows independent audits and hardening.



:::tip See Also
- [OpenDesk Official Documentation](https://docs.opendesk.eu/)
- [ZenDiS - Zentrum für Digitale Souveränität](https://zendis.de/)
:::


## Getting Started

Ready to deploy openDesk? Choose your path:

- **[Deploy a Test Environment](./deploy-opendesk-on-cce)**: Quick start guide for evaluation. Uses minimal resources and bundled internal services. Perfect for Proof of Concepts (PoC).
- **[Deploy a Production Environment](./deploy-production-environment)**: Comprehensive guide for a secure, scalable production setup using OTC managed services. Recommended for pilots and live operation.
<!-- 
:::info Github Repository
All configuration files, Helmfiles, and patches mentioned in these guides are available in our public repository:
[OpenDesk Blueprints Repository](https://github.com/opentelekomcloud-blueprints/opendesk)
::: -->
