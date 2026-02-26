---
id: opendesk
title: OpenDesk
tags: [opendesk, collaboration, sovereignty, digital-workplace]
---

import Mermaid from '@theme/Mermaid';

# OpenDesk

[OpenDesk](https://opendesk.eu/) (branded as *openDesk*) is an open-source, sovereign digital workplace solution designed for public administration under the coordination of the German Federal Ministry of the Interior (BMI, [Bundesministerium des Innern](https://www.bmi.bund.de/)) and developed by the Centre for Digital Sovereignty of the Public Administration (ZenDiS GmbH, [Zentrum für Digitale Souveränität der Öffentlichen Verwaltung](https://www.zendis.de/)). It bundles established open-source applications into a single collaboration suite so that organisations can retain full control over their data, identities and infrastructure while avoiding dependence on large proprietary vendors.

<!-- ![OpenDesk user portal login screen](/img/docs/blueprints/by-use-case/sovereignty/opendesk/user_portal.png) -->

![img](/img/docs/blueprints/by-use-case/sovereignty/opendesk/Screenshot_from_2026-02-26_09-58-20.png)

## Key Components

OpenDesk integrates the following core applications as a unified digital workplace:

| Component                                                      | Purpose                                            |
| -------------------------------------------------------------- | -------------------------------------------------- |
| **[Nubus](https://www.univention.com/products/ucs/)**          | Identity & Access Management (IAM) and web portal  |
| **[Nextcloud](https://nextcloud.com/)**                        | File sharing, storage and synchronization          |
| **[Collabora Online](http://collaboraonline.com/)**            | Online office suite and web-based document editing |
| **[OX App Suite](https://www.open-xchange.com/)**              | Email, calendar and groupware                      |
| **[Element/Matrix](https://element.io/)**                      | Secure messaging and real-time communication       |
| **[Jitsi](https://en.wikipedia.org/wiki/Jitsi)**               | Secure video conferencing                          |
| **[OpenProject](https://openproject.org/)**                    | Project and task management                        |
| **[XWiki](https://www.xwiki.org/xwiki/bin/view/Main/WebHome)** | Knowledge management and wiki                      |
| **[CryptPad](https://cryptpad.org/)**                          | End-to-end encrypted collaborative editing         |
| **[ClamAV](https://www.clamav.net/)**                          | Antivirus                                          |
| **[Dovecot](https://www.dovecot.org/)**                         | IMAP server                                        |
| **[Postfix](https://www.postfix.org/)**                         | Mail transfer agent                                |

<!-- ![img](/img/docs/blueprints/by-use-case/sovereignty/opendesk/Screenshot_from_2026-02-26_09-58-20.png) -->

## Benefits

Based on the official project description, openDesk is designed to give public-sector organisations a modern workplace while maximising digital sovereignty and independence:

- **Digital sovereignty for public administration**: openDesk reduces dependence on large international platform providers by relying on open standards and free/libre open-source software. Data, identities and configurations remain under the control of the operating organisation.
- **Integrated collaboration suite**: Instead of a patch-work of isolated tools, openDesk combines mail, calendar, chat, video conferencing, file storage, office editing, project management and knowledge management into a coherent workplace with single sign-on.
- **Open standards and interoperability**: The platform uses open protocols and interfaces, making it easier to integrate into existing infrastructures and to switch components where needed without lock-in.
- **Cloud‑native, scalable architecture**: openDesk is built for Kubernetes and can run on sovereign cloud infrastructures, supporting horizontal scaling and resilient operation.
- **Security and compliance**: By design, openDesk supports operation in environments with high security and data-protection requirements (e.g. GDPR, public sector security baselines).

:::tip See Also

- [OpenDesk Official Documentation](https://docs.opendesk.eu/)
- [ZenDiS - Zentrum für Digitale Souveränität](https://zendis.de/)
  
:::

## Getting Started

- **[Evaluate OpenDesk on T Cloud Public](/docs/blueprints/by-use-case/sovereignty/opendesk/2_evaluate-opendesk-on-tcloud-public.md)**: Quick-start guide for evaluation purposes. Uses minimal resources and bundled internal services. Perfect for Proof of Concepts (PoC).
- **[Deploy OpenDesk on CCE](/docs/blueprints/by-use-case/sovereignty/opendesk/3_deploy-opendesk-on-cce.md)**: Comprehensive guide for a secure, scalable production setup using T Cloud Public managed services.
