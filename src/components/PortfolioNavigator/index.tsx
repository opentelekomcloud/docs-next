import React, { useMemo, useState, KeyboardEvent } from "react";
import { Search, Columns3, ExternalLink } from "lucide-react";
import styles from "./styles.module.css";

export type OtcCategory =
  | "Application"
  | "Data Analysis"
  | "Computing"
  | "Containers"
  | "Databases"
  | "Management & Deployment"
  | "Network"
  | "Security Services"
  | "Storage";

export type Chip = "IaaS" | "PaaS" | "SaaS" | "Sec" | "Mgmt";
export type Region = "eu-de" | "eu-nl" | "eu-ch" | "global";

export type OtcService = {
  id: string;
  symbol: string;
  name: string;
  category: OtcCategory;
  description: string;
  url?: string;
  chips: Chip[];
  regions: Region[];
};

const SERVICES: OtcService[] = [
  // Application
  { id: "AOM", symbol: "AOM", name: "Application Operations Management", category: "Application", description: "Application Operations Management (AOM) is a one-stop, three-dimensional O&M management platform for cloud applications. It monitors your applications and related cloud resources in real time, collects and associates the data of resource metrics, logs, and events to analyze application health statuses, and provides flexible alarms and abundant data visualization functions. This helps you detect faults timely and master the real-time running statuses of applications, resources, and services.", url: "/docs/tags/aom", chips: ["Mgmt"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "APIG", symbol: "APIG", name: "API Gateway (APIG)", category: "Application", description: "API Gateway (APIG) is a high-performance, high-availability, and high-security API hosting service that helps you build, manage, and deploy APIs at any scale. With just a few clicks, you can integrate internal systems, and selectively expose capabilities with minimal costs and risks.", url: "/docs/tags/apig", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "APM", symbol: "APM", name: "Application Performance Management", category: "Application", description: "The Application Performance Management (APM) monitors and manages the performance of cloud applications in real time. APM provides performance analysis of distributed applications, helping O&M personnel quickly locate and resolve faults and performance bottlenecks.", url: "/docs/tags/apm", chips: ["Mgmt"], regions: ["eu-de", "eu-nl"] },
  { id: "DMS", symbol: "DMS", name: "Distributed Message Service", category: "Application", description: "Distributed Message Service (DMS) is a message middleware service based on distributed, high-availability clustering technology. It provides reliable, scalable, and fully managed queues for storing messages.", url: "/docs/tags/dms", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "SMN", symbol: "SMN", name: "Simple Message Notification", category: "Application", description: "Simple Message Notification (SMN) is a hosted simple message notification service that is flexible and large-scale. SMN allows you to send messages to email addresses, and HTTP/HTTPS applications in an efficient and inexpensive way.", url: "/docs/tags/smn", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // "Data Analysis"
  { id: "CSS", symbol: "CSS", name: "Cloud Search Service", category: "Data Analysis", description: "Cloud Search Service is a fully hosted distributed search service powered on Elasticsearch. It is fully compatible with Elasticsearch APIs and provides users with structured and unstructured data search, statistics, and report capabilities.", url: "/docs/tags/css", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "data-arts", symbol: "DataArts Studio", name: "Data Operations Platform", category: "Data Analysis", description: "DataArts Studio is a one-stop data operations platform that drives digital transformation. It allows you to perform many operations, such as integrating and developing data, designing data architecture, controlling data quality, managing data assets, creating data services, and ensuring data security. Incorporating big data storage, computing and analytical engines, it can also construct industry knowledge bases and help your enterprise build an intelligent end-to-end data system. This system can eliminate data silos, unify data standards, accelerate data monetization, and accelerate your enterprise's digital transformation.", url: "/docs/tags/data-arts", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DLI", symbol: "DLI", name: "Data Lake Insight", category: "Data Analysis", description: "Data Lake Insight (DLI) is a serverless data processing and analysis service fully compatible with Apache Spark and Apache Flink ecosystems. It frees you from managing any servers.", url: "/docs/tags/DLI", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DWS", symbol: "DWS", name: "Data Warehouse Service", category: "Data Analysis", description: "Data Warehouse Service (DWS) provides a scalable, fully hosted, and out-of-the-box data warehouse. It is compatible with the PostgreSQL ecosystem and supports standard SQL statements and BI tools to help you economically and efficiently mine and analyze massive volumes of data, greatly reducing your cost.", url: "/docs/tags/DWS", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "ModelArts", symbol: "ModelArts", name: "Development Platform for AI", category: "Data Analysis", description: "ModelArts is a one-stop development platform for AI developers. With distributed training, automated model building, and model deployment, ModelArts helps AI developers build models quickly and manage the AI development lifecycle.", url: "/docs/tags/model-arts", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "MRS", symbol: "MRS", name: "MapReduce Service", category: "Data Analysis", description: "MapReduce Service (MRS) provides enterprise-level big data clusters on the cloud, which are fully controlled by tenants and support the Hadoop, Spark, HBase, Kafka, and Storm components.", url: "/docs/tags/MRS", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "OCR", symbol: "OCR", name: "Optical Character Recognition", category: "Data Analysis", description: "Optical Character Recognition (OCR) detects and extracts text from images and converts the recognition results into an editable JSON format.", url: "/docs/tags/OCR", chips: ["PaaS"], regions: ["eu-de"] },

  // Computing
  { id: "AS", symbol: "AS", name: "Auto Scaling", category: "Computing", description: "Auto Scaling (AS) is a service that automatically adjusts service resources based on your service requirements and configured AS policies. You can specify scaling configurations and policies based on service requirements. These configurations and policies free you from having to repeatedly adjust resources to keep up with service changes and demand spikes, helping you reduce resources required and manpower costs.", url: "/docs/tags/AS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "BMS", symbol: "BMS", name: "Bare Metal Services", category: "Computing", description: "A Bare Metal Server (BMS) is a physical server dedicated to individual tenants. It provides remarkable computing performance and stability for running key applications. The BMS service can be used in conjunction with other cloud services so that you can enjoy a consistent and stable performance of server hosting and the high scalability of cloud resources together that offer the computing performance and data security required by core databases, key application systems, high-performance computing (HPC), and Big Data.", url: "/docs/tags/BMS", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "DHS", symbol: "DHS", name: "Dedicated Host", category: "Computing", description: "Dedicated Host (DeH) is a service that provides dedicated physical hosts. You can create Elastic Cloud Servers (ECSs) on a DeH to enhance the isolation, security, and performance of your ECSs. When you migrate services to a DeH, you can continue to use your server software licenses used before the migration. That is, you can use the Bring Your License (BYOL) feature on the DeH to reduce costs and independently manage your ECSs.", url: "/docs/tags/DHS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ECS", symbol: "ECS", name: "Elastic Cloud Server", category: "Computing", description: "An ECS is a computing server consisting of CPUs, memory, images, and Elastic Volume Service (EVS) disks that allow on-demand allocation and elastic scaling. ECSs integrate virtual private cloud (VPC), virtual firewalls, and multi-data-copy capabilities to create an efficient, reliable, and secure computing environment. This ensures stable and uninterrupted operation of services.", url: "/docs/tags/ECS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "FGS", symbol: "FGS", name: "FunctionGraph", category: "Computing", description: "FunctionGraph allows to run a code without provisioning or managing servers, while ensuring high availability and scalability. All you need to do is to upload your code and set execution conditions. FunctionGraph will take care of the rest. In addition, you pay only for what you use and you are not charged when your code is not running.", url: "/docs/tags/FGS", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "IMS", symbol: "IMS", name: "Image Management Service", category: "Computing", description: "Image Management Service (IMS) provides flexible self-service and comprehensive image management capabilities. You can use a public image or create a private image to apply for an Elastic Cloud Server (ECS) or multiple ECSs in batches.", url: "/docs/tags/IMS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Containers
  { id: "ASM", symbol: "ASM", name: "Application Service Mesh", category: "Containers", description: "Application Service Mesh (ASM) is a service mesh platform based on Istio. It seamlessly interconnects with Cloud Container Engine (CCE), an enterprise-grade Kubernetes cluster service. With better usability, reliability, and visualization, ASM provides you with out-of-the-box features and enhanced user experience.", url: "/docs/tags/ASM", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "CCE", symbol: "CCE", name: "Cloud Container Engine", category: "Containers", description: "CCE provides highly scalable, high-performance, enterprise-class Kubernetes clusters. It supports native Kubernetes applications, tools and easy setup of container runtime environment.", url: "/docs/tags/CCE", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "CCI", symbol: "CCI", name: "Cloud Container Instance", category: "Containers", description: "Cloud Container Instance (CCI) is a serverless container engine that allows you to run containers without creating or managing server clusters.", url: "/docs/tags/CCI", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "SWR", symbol: "SWR", name: "Software Repository for Containers", category: "Containers", description: "Software Repository for Container (SWR) provides full lifecycle container image management, which is easy-to-use, secure, and reliable. SWR enables users to uickly deploy containerized services.", url: "/docs/tags/IMS", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Databases
  { id: "DCS", symbol: "DCS", name: "Distributed Cache Service", category: "Databases", description: "Distributed Cache Service (DCS) is an online, distributed, in-memory cache service. It is reliable, scalable, usable out of the box, and easy to manage. DCS makes it easy to deploy, operate, and scale in-memory data caches in the cloud.", url: "/docs/tags/DCS", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "DDM", symbol: "DDM", name: "Distributed Database Middleware", category: "Databases", description: "Distributed Database Middleware (DDM) removes database capacity and performance bottlenecks and resolves distributed expansion issues. It provides database and table sharding, read/write splitting, and elastic scaling, helping you handle highly concurrent access to massive volumes of data and improving database read/write performance.", url: "/docs/tags/DDM", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DDS", symbol: "DDS", name: "Document Database Service", category: "Databases", description: "Document Database Service (DDS) is a cloud computing-based NoSQL database featuring high performance storage, high availability architecture, and disaster recovery failover, along with online scaling, backup, and restoration capabilities. It has a mature performance monitoring system, a multi-level security protection mechanism, and a professional database management platform.", url: "/docs/tags/DDS", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "DRS", symbol: "DRS", name: "Data Replication Service", category: "Databases", description: "Data Replication Service (DRS) is a stable, efficient, and easy-to-use cloud service for database online migration and synchronization. It simplifies data migration processes and reduces migration costs. You can use DRS to quickly transmit data between databases in various scenarios.", url: "/docs/tags/DRS", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "GeminiDB", symbol: "GeminiDB", name: "Distributed NoSQL Database", category: "Databases", description: "GeminiDB is a distributed, multi-model NoSQL database service with decoupled compute and storage architecture. This high availability database is secure and scalable, can be deployed, backed up, or restored quickly, and includes monitoring and alarm management.", url: "/docs/tags/gemini-db", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "RDS", symbol: "RDS", name: "Relational Database Service", category: "Databases", description: "Relational Database Service (RDS) is an online relational database service based on the cloud computing platform. The RDS is reliable, scalable, secure, and easy to manage, allowing you to deploy a database within minutes.", url: "/docs/tags/RDS", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "TaurusDB", symbol: "TaurusDB", name: "Enterprise-Class Distributed Database", category: "Databases", description: "TaurusDB is the latest generation enterprise-class distributed database. It is fully compatible with MySQL and provides high scalability and massive storage capacity. It uses a decoupled compute and storage architecture and supports up to 128 TB of storage. With TaurusDB, there is no need to deal with sharding, and no need to worry about data loss. It combines the performance and availability of commercial databases with the cost-effectiveness of open source databases.", url: "/docs/tags/taurussb", chips: ["PaaS"], regions: ["eu-de"] },

  // Management & Deployment
  { id: "CloudCreate", symbol: "Cloud Create", name: "Multi-Cloud Management Platform", category: "Management & Deployment", description: "Cloud Create is a free-to-use Development and Management Platform, which enables cloud developers to create applications on Open Telekom Cloud fast.", url: "/docs/tags/cloud-create", chips: ["SaaS"], regions: ["eu-de", "eu-ch"] },
  { id: "CloudEye", symbol: "Cloud Eye", name: "Multi-Dimensional Monitoring Platform", category: "Management & Deployment", description: "Cloud Eye is a multi-dimensional monitoring platform that monitors your resources such as ECS and bandwidth. With Cloud Eye, users can fully understand the resource usage and running status of services running on the cloud platform, receive alarm notifications in a timely manner, and make response to ensure smooth running of services.", url: "/docs/tags/CloudEye", chips: ["Mgmt"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "Config", symbol: "Config", name: "Continuously Evaluate Resource Configuration", category: "Management & Deployment", description: "With Config, you can search for, record, and continuously evaluate your resource configuration to make sure that your expectations are met.", url: "/docs/tags/Config", chips: ["Mgmt"], regions: ["eu-de"] },
  { id: "CTS", symbol: "CTS", name: "Cloud Trace Service", category: "Management & Deployment", description: "Cloud Trace Service (CTS) provides operation records for cloud service resources. The operation records include resource operation requests initiated from the public cloud management console or open APIs and responses to the requests. You can query, audit, and backtrack the operation records. In addition, you can use the Object Storage Service (OBS) to synchronize operation records to the OBS buckets.", url: "/docs/tags/CTS", chips: ["Mgmt"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "LTS", symbol: "LTS", name: "Log Tank Service", category: "Management & Deployment", description: "Log Tank Service (LTS) stores logs, allowing you to query and transfer them in real time. It simplifies real-time analysis for decision making and improves log processing efficiency.", url: "/docs/tags/LTS", chips: ["Mgmt"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "RMS", symbol: "RMS", name: "Resource Management Service", category: "Management & Deployment", description: "With Resource Formation Service, you can manage system and service resources (all physical or logical entities that can be located and described, such as databases, VPCs, pipelines, and IAM roles). You can automatically deploy specified cloud service resources based on the template which uses the HCL (an open ecosystem) syntax.", url: "/docs/tags/RMS", chips: ["Mgmt"], regions: ["eu-de"] },
  { id: "RFS", symbol: "RFS", name: "Resource Formation Service", category: "Management & Deployment", description: "With Resource Formation Service, you can manage system and service resources (all physical or logical entities that can be located and described, such as databases, VPCs, pipelines, and IAM roles). You can automatically deploy specified cloud service resources based on the template which uses the HCL (an open ecosystem) syntax.", url: "/docs/tags/RFS", chips: ["Mgmt"], regions: ["eu-de"] },
  { id: "TMS", symbol: "TMS", name: "Tag Management Service", category: "Management & Deployment", description: "Tag Management Service (TMS) is a visualized service for fast, unified tag management that enables you to control your resource permissions and billing more efficiently. It allows you to tag and categorize cloud services across regions, and it can be accessed through the TMS console or using APIs.", url: "/docs/tags/TMS", chips: ["Mgmt"], regions: ["eu-de", "eu-ch"] },

  // Network
  { id: "DirectConnect", symbol: "Direct Connect", name: "Dedicated Network Connection", category: "Network", description: "A Direct Connect is a service that allows you to establish a dedicated network connection from your data center to the public cloud platform. You can establish a private connection between the public cloud platform and your data center, office, or collocation environment, which can reduce your network latency and provide a more consistent network experience than Internet-based connections.", url: "/docs/tags/direct-connect", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "DNS", symbol: "DNS", name: "Domain Name Service", category: "Network", description: "Domain Name Service (DNS) provides highly available and scalable authoritative DNS resolution services and domain name management services. It translates domain names or application resources into IP addresses required for network connection. By doing so, visitor's access requests are directed to the desired resources.", url: "/docs/tags/DNS", chips: ["IaaS"], regions: ["eu-de", "eu-ch"] },
  { id: "EIP", symbol: "EIP", name: "Elastic IP", category: "Network", description: "An EIP is a static, public IP address. You can bind an EIP to an ECS in your subnet to enable the ECS in your VPC to communicate with the Internet through a fixed public IP address.", url: "/docs/tags/EIP", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ELB", symbol: "ELB", name: "Elastic Load Balancing", category: "Network", description: "Elastic Load Balancing (ELB) is a service that automatically distributes access traffic to multiple Elastic Cloud Servers (ECSs) to balance their service load. ELB enables you to achieve higher levels of fault tolerance in your applications and expand application service capabilities.", url: "/docs/tags/ELB", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ER", symbol: "ER", name: "Enterprise Router", category: "Network", description: "An Enterprise Router is a cloud router service that connects your VPCs and on-premises networks.", url: "/docs/tags/enterprise-router", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "NATGW", symbol: "NATGW", name: "NAT Gateway", category: "Network", description: "The NAT Gateway service offers the Network Address Translation (NAT) function for computing instances, such as Elastic Cloud Servers (ECSs), in a Virtual Private Cloud (VPC), allowing these computing instances to access the Internet using elastic IP addresses (EIPs).", url: "/docs/tags/NATGW", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "PLAS", symbol: "PLAS", name: "Private Link Access Service", category: "Network", description: "Private Link Access Service (PLAS) enables public cloud platform users to establish exclusive connections from their on-premise networks to VPCs on the public cloud platform.PLAS connections are established between carrier networks and Direct Connect gateways, reducing network latency. These connections outperform Internet connections in stability and security.", url: "/docs/tags/PLAS", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "smg", symbol: "SMG", name: "Secure Mail Gateway", category: "Network", description: "The Secure Mail Gateway service provides anti-spam and anti-junk functions for outgoing email traffic and prevents EIPs from being blacklisted or abused.", url: "/docs/tags/smg", chips: ["Sec"], regions: ["eu-de"] },
  { id: "VPC", symbol: "VPC", name: "Virtual Private Cloud", category: "Network", description: "The Virtual Private Cloud (VPC) service enables you to provision logically isolated, configurable, and manageable virtual networks for Elastic Cloud Servers (ECSs), improving the security of resources in the cloud system and simplifying network deployment.", url: "/docs/tags/VPC", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "VPCEP", symbol: "VPCEP", name: "Virtual Private Cloud Endpoint", category: "Network", description: "The VPC Endpoint (VPCEP) service provides secure and private channels to connect your VPC to VPC endpoint services (cloud services on the current platform or your private services), providing flexible networking without having to use EIPs.", url: "/docs/tags/VPCEP", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "VPN", symbol: "VPN", name: "Virtual Private Network", category: "Network", description: "A virtual private network (VPN) establishes an encrypted communication tunnel between a remote user and a Virtual Private Cloud (VPC). With VPN, you can connect to a VPC and access service resources in it.", url: "/docs/tags/VPN", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Security Services
  { id: "Anti-DDoS", symbol: "Anti-DDoS", name: "Anti-DDoS Traffic Cleaning Service", category: "Security Services", description: "The Anti-DDoS traffic cleaning service (Anti-DDoS for short) is a network security service that defends IP addresses against distributed denial of service (DDoS) attacks.", url: "/docs/tags/Anti-DDoS", chips: ["Sec"], regions: ["eu-de", "eu-nl"] },
  { id: "CFW", symbol: "CFW", name: "Cloud Firewall", category: "Security Services", description: "Cloud Firewall (CFW) is a next-generation cloud-native firewall. It protects Internet and VPC borders on the cloud by real-time intrusion detection and prevention, global unified access control, full traffic analysis, log audit, and tracing. It employs AI for intelligent defense, and can be elastically scaled to meet changing business needs, helping you easily handle security threats. CFW is a basic service that provides network security protection for user services on the cloud.", url: "/docs/tags/CFW", chips: ["Sec"], regions: ["eu-de"] },
  { id: "DSS", symbol: "DSS", name: "Database Security Service", category: "Security Services", description: "Database Security Service (DBSS) uses machine learning and big data technologies to protect your databases on the cloud, intelligently auditing them and detecting risky behaviors like SQL injection.", url: "/docs/tags/DSS", chips: ["Sec"], regions: ["eu-de"] },
  { id: "HSS", symbol: "HSS", name: "Host Security Service", category: "Security Services", description: "Host Security Service (HSS) defends your Linux and Windows cloud servers from the inside out, with a suite of advanced security features including powerful brute-force protection, intrusion detection monitoring, and vulnerability fixes.", url: "/docs/tags/HSS", chips: ["Sec"], regions: ["eu-de"] },
  { id: "IAM", symbol: "IAM", name: "Identity & Access Management", category: "Security Services", description: "Identity and Access Management (IAM) provides a public cloud system (Open Telekom Cloud) with user identity management and access control.You can use IAM to manage user accounts (such as employee, system or application program accounts) and control the operation permissions of these user accounts on your resources (such as computing, storage, and network resources). In this way, IAM prevents these accounts from sharing your password or access key with other users. IAM also ensures user account security and reduces security risks for your enterprise information by allowing you to set login verification policies, password policies, and an access control list (ACL).", url: "/docs/tags/IAM", chips: ["Sec"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "KMS", symbol: "KMS", name: "Key Management Service", category: "Security Services", description: "Key Management Service (KMS) is a secure, reliable, and easy-to-use service that helps users centrally manage and safeguard their Customer Master Keys (CMKs).", url: "/docs/tags/KMS", chips: ["Sec"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "WAF", symbol: "WAF", name: "Web Application Firewall", category: "Security Services", description: "Web Application Firewall (WAF) keeps web services stable and secure. It examines all HTTP and HTTPS requests to detect and block the following attacks: Structured Query Language (SQL) injection, cross-site scripting (XSS), webshells, command and code injections, file inclusion, sensitive file access, third-party vulnerability exploits, Challenge Collapsar (CC) attacks, malicious crawlers, and cross-site request forgery (CSRF).", url: "/docs/tags/WAF", chips: ["Sec"], regions: ["eu-de", "eu-nl"] },
  { id: "DWAF", symbol: "DWAF", name: "Dedicated Web Application Firewall", category: "Security Services", description: "Web Application Firewall (WAF) keeps web services stable and secure. It examines all HTTP and HTTPS requests to detect and block the following attacks: Structured Query Language (SQL) injection, cross-site scripting (XSS), webshells, command and code injections, file inclusion, sensitive file access, third-party vulnerability exploits, Challenge Collapsar (CC) attacks, malicious crawlers, and cross-site request forgery (CSRF).", url: "/docs/tags/dedicated-waf", chips: ["Sec"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Storage
  { id: "CBR", symbol: "CBR", name: "Cloud Backup & Recovery", category: "Storage", description: "Cloud Backup and Recovery (CBR) allows you to back up cloud disks, elastic cloud servers, and bare metal servers, protecting the security and accuracy of your data to the greatest extent for service security.", url: "/docs/tags/CBR", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "CSBS", symbol: "CSBS", name: "Cloud Server Backup Service", category: "Storage", description: "Cloud Server Backup Service (CSBS) offers the backup protection service for Elastic Cloud Servers (ECSs). It works based on the consistent snapshot technology for Elastic Volume Service (EVS) disks. With CSBS, you can use backup data to restore ECS data.", url: "/docs/tags/CSBS", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "EVS", symbol: "EVS", name: "Elastic Volume Service", category: "Storage", description: "Elastic Volume Service (EVS) offers scalable block storage for servers. With high reliability, high performance, and rich specifications, EVS disks can be used for distributed file systems, development and testing environments, data warehouse applications, and high-performance computing (HPC) scenarios to meet diverse service requirements.", url: "/docs/tags/EVS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "OBS", symbol: "OBS", name: "Object Storage Service", category: "Storage", description: "Object Storage Service (OBS) is an object-based storage service that provides customers with massive, secure, reliable, and cost-effective data storage capabilities, such as bucket creation, modification, and deletion, as well as object upload, download, and deletion.", url: "/docs/tags/OBS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "SDRS", symbol: "SDRS", name: "Storage Disaster Recovery Service", category: "Storage", description: "Storage Disaster Recovery Service (SDRS) provides disaster recovery (DR) services for many cloud services, such as Elastic Cloud Server (ECS) and Elastic Volume Service (EVS). SDRS uses multiple technologies, such as storage replication, data redundancy, and cache acceleration, to provide high data reliability and service continuity for users.", url: "/docs/tags/SDRS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "SFS", symbol: "SFS", name: "Scalable File Service", category: "Storage", description: "Scalable File Service (SFS) provides high-performance file storage that is scalable on demand. It can be shared with multiple Elastic Cloud Servers (ECS).", url: "/docs/tags/SFS", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "VBS", symbol: "VBS", name: "Volume Backup Service", category: "Storage", description: "Volume Backup Service (VBS) provides snapshot-based data protection service for Elastic Volume Service (EVS) disks. You can perform one-click backup and restoration for the EVS disks on Elastic Cloud Servers (ECSs) all through the online platform.", url: "/docs/tags/VBS", chips: ["IaaS"], regions: ["eu-de"] },

];

/* fixed columns — always render all of them */
const ALL_CATS: OtcCategory[] = [
  "Application",
  "Data Analysis",
  "Computing",
  "Containers",
  "Databases",
  "Management & Deployment",
  "Network",
  "Security Services",
  "Storage",
];

const REGION_ORDER: Region[] = ["eu-de", "eu-nl", "eu-ch", "global"];

function cx(...arr: (string | false | null | undefined)[]) {
  return arr.filter(Boolean).join(" ");
}

const regionEmoji: Record<Exclude<Region, "global">, string> = {
  "eu-de": "🇩🇪",
  "eu-nl": "🇳🇱",
  "eu-ch": "🇨🇭",
};

// helper to render the chips text (fallback to category)
const chipLabel = (chips: Chip[], fallback = "") =>
  chips && chips.length ? chips.join(" · ") : fallback;

export default function OtcServicesColumns() {
  const [query, setQuery] = useState("");
  const [chips, setChips] = useState<Set<Chip>>(new Set());            // OR
  const [regionsSel, setRegionsSel] = useState<Set<Region>>(new Set()); // OR
  const [open, setOpen] = useState<OtcService | null>(null);            // ← sleeve

  const toggleChip = (c: Chip) =>
    setChips((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });

  const toggleRegion = (r: Region) =>
    setRegionsSel((prev) => {
      const next = new Set(prev);
      next.has(r) ? next.delete(r) : next.add(r);
      return next;
    });

  const isChipActive = (c: Chip) => chips.has(c);
  const isRegionActive = (r: Region) => regionsSel.has(r);

  // React ONLY to chip toggles via capture; block the component's own handler to avoid double-toggles
  const onChipRowClickCapture = (e: React.MouseEvent) => {
    const host = (e.target as HTMLElement)?.closest("scale-chip") as HTMLElement | null;
    if (!host) return;
    const id = host.getAttribute("data-chip") as Chip | null;
    if (!id) return;
    e.preventDefault();
    e.stopPropagation();
    toggleChip(id);
  };

  const onRegionRowClickCapture = (e: React.MouseEvent) => {
    const host = (e.target as HTMLElement)?.closest("scale-chip") as HTMLElement | null;
    if (!host) return;
    const id = host.getAttribute("data-region") as Region | null;
    if (!id) return;
    e.preventDefault();
    e.stopPropagation();
    toggleRegion(id);
  };

  // text + chips(OR) + regions(OR). If none selected -> show all.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const mq =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.symbol.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      if (!mq) return false;

      if (chips.size > 0 && !s.chips.some((c) => chips.has(c))) return false;
      if (regionsSel.size > 0 && !s.regions.some((r) => regionsSel.has(r))) return false;

      return true;
    });
  }, [query, chips, regionsSel]);

  // seed all columns to keep empty columns visible
  const byCategory = useMemo(() => {
    const map = new Map<OtcCategory, OtcService[]>();
    ALL_CATS.forEach((c) => map.set(c, []));
    filtered.forEach((s) =>
      map.set(s.category, [...(map.get(s.category) || []), s])
    );
    map.forEach((list, c) =>
      map.set(c, [...list].sort((a, b) => a.name.localeCompare(b.name)))
    );
    return map;
  }, [filtered]);

  const renderRegionBadge = (regions: Region[]) => {
    if (regions.includes("global")) {
      return <span className={styles.badge}>GLOBAL</span>;
    }
    const ordered = REGION_ORDER.filter(
      (r) => r !== "global" && regions.includes(r)
    ) as Exclude<Region, "global">[];
    return (
      <span className={styles.flags}>
        {ordered.map((r) => regionEmoji[r]).join(" ")}
      </span>
    );
  };

  // open sleeve on Enter/Space as well
  function onTileKey(e: KeyboardEvent<HTMLDivElement>, s: OtcService) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(s);
    }
  }

  return (
    <div className={styles.otcWrap}>
      <div className={styles.otcMax}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>{/* heading removed intentionally */}</div>
        </div>
        {/* Filters: chips | regions (single line) */}
        <div className={styles.filtersRow}>
          {/* Capability chips (SCALE) */}
          <div className={styles.buckets} onClickCapture={onChipRowClickCapture}>
            {(["IaaS", "PaaS", "SaaS", "Sec", "Mgmt"] as Chip[]).map((c) => (
              // @ts-ignore custom element
              <scale-chip
                key={c}
                data-chip={c}
                size="small"
                selected={isChipActive(c) ? true : undefined}
              >
                {c}
              </scale-chip>
            ))}
          </div>

          <span className={styles.filtersSep} aria-hidden="true"></span>

          {/* Region chips (SCALE) */}
          <div className={styles.buckets} onClickCapture={onRegionRowClickCapture}>
            {(["eu-de", "eu-nl", "eu-ch", "global"] as Region[]).map((r) => (
              // @ts-ignore custom element
              <scale-chip
                key={r}
                data-region={r}
                size="small"
                selected={isRegionActive(r) ? true : undefined}
                title={r.toUpperCase()}
              >
                {r === "global"
                  ? "GLOBAL"
                  : r === "eu-de"
                    ? "🇩🇪 EU-DE"
                    : r === "eu-nl"
                      ? "🇳🇱 EU-NL"
                      : "🇨🇭 EU-CH"}
              </scale-chip>
            ))}
          </div>

          <span className={styles.filtersSep} aria-hidden="true"></span>

          {/* Right-aligned SCALE text field (native web component) */}
          {/* <div className={styles.filtersSearchWrap}>
            <scale-text-field
              label="Filter services by name or symbol"
              onInput={(e) => setQuery((e.target as any).value)}
            ></scale-text-field>
          </div> */}
        </div>


        {/* Columns */}
        <div className={styles.columns}>
          {ALL_CATS.map((cat) => {
            const items = byCategory.get(cat) || [];
            return (
              <section key={cat} className={styles.col} data-cat={cat}>
                <header className={styles.colHead}>
                  <div className={styles.colTitle}>{cat}</div>
                </header>
                <div className={styles.colBody}>
                  {items.length === 0 ? (
                    <div className={styles.empty}>N/A</div>
                  ) : (
                    items.map((s) => (
                      <div
                        key={s.id}
                        className={styles.tile}
                        onClick={() => setOpen(s)}                 // ← open sleeve
                        onKeyDown={(e) => onTileKey(e, s)}         // ← keyboard
                        role="button"
                        tabIndex={0}
                        data-cat={s.category}
                        aria-label={`${s.name} (${s.symbol}) — ${s.description}`}
                      >
                        <div className={styles.tileTop}>
                          <div className={styles.cat}>{chipLabel(s.chips, s.category)}</div>
                          {renderRegionBadge(s.regions)}
                        </div>
                        <div className={styles.symbol}>{s.symbol}</div>
                        <div className={styles.tileBottom}>
                          <div className={styles.name} title={s.name}>
                            {s.name}
                          </div>
                          {/* <ExternalLink size={16} className={styles.ext} aria-hidden /> */}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Sleeve */}
      {open && (
        <div className={styles.sleeveBackdrop} onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className={styles.sleeve} onClick={(e) => e.stopPropagation()}>
            <button className={styles.sleeveClose} aria-label="Close" onClick={() => setOpen(null)}>×</button>

            <br /> <br />
            <div className={styles.sleeveHeader}>
              <div className={styles.sleeveSymbol}>{open.symbol}:</div>
              <div className={styles.sleeveTitle}>{open.name}</div>
            </div>

            <div className={styles.sleeveBody}>
              {open.description?.trim() ? open.description : "No description available."}
            </div>

            <div className={styles.sleeveFooter}>
              
              <scale-button
                href={`/docs/tags/${encodeURIComponent(open.symbol)}`}
                // target="_blank"
                rel="noreferrer"
                variant="primary"
                size="small"
              >
                Discover Blueprints
                <scale-icon-navigation-right></scale-icon-navigation-right>
              </scale-button>

              <scale-button
                href={open.url || "#"}
                target="_blank"
                // rel="noreferrer"
                variant="secondary"
                size="small"
              >
                Go to Help Center
                <scale-icon-navigation-external-link accesibility-title="External link, opens in new tab"></scale-icon-navigation-external-link>
              </scale-button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
