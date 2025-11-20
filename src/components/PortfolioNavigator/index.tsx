import React, { useMemo, useState, useRef, useEffect, KeyboardEvent } from "react";
import styles from "./styles.module.css";
import 'flag-icons/css/flag-icons.min.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export type OtcCategory =
  | "Application"
  | "Data Analysis"
  | "Computing"
  | "Containers"
  | "Databases"
  | "Management & Deployment"
  | "Network"
  | "Security Services"
  | "Storage"
  | "Finance Services"
  | "Sites";

export type Chip = "IaaS" | "PaaS" | "SaaS" | "Security" | "Management" | "Docs" | "Product" | "Community";
export type Region = "eu-de" | "eu-nl" | "eu-ch" | "global";

export type OtcService = {
  id: string;
  symbol: string;
  name: string;
  category: OtcCategory;
  description: string;
  hc_url?: string;
  rn_url?: string;
  chips: Chip[];
  regions: Region[];
};

const SERVICES: OtcService[] = [
  // Application
  { id: "AOM", symbol: "AOM", name: "Application Operations Management", category: "Application", description: "Application Operations Management (AOM) is a one-stop, three-dimensional O&M management platform for cloud applications. It monitors your applications and related cloud resources in real time, collects and associates the data of resource metrics, logs, and events to analyze application health statuses, and provides flexible alarms and abundant data visualization functions. This helps you detect faults timely and master the real-time running statuses of applications, resources, and services.", hc_url: "https://docs.otc.t-systems.com/application-operations-management/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=77038a84-68a0-467e-b704-6f8e05cf0d8e", chips: ["Management"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "APIG", symbol: "APIG", name: "API Gateway (APIG)", category: "Application", description: "API Gateway (APIG) is a high-performance, high-availability, and high-security API hosting service that helps you build, manage, and deploy APIs at any scale. With just a few clicks, you can integrate internal systems, and selectively expose capabilities with minimal costs and risks.", hc_url: "https://docs.otc.t-systems.com/api-gateway/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=7b000957-ccfe-4d83-a6c9-aea6473178e2", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "APM", symbol: "APM", name: "Application Performance Management", category: "Application", description: "The Application Performance Management (APM) monitors and manages the performance of cloud applications in real time. APM provides performance analysis of distributed applications, helping O&M personnel quickly locate and resolve faults and performance bottlenecks.", hc_url: "https://docs.otc.t-systems.com/application-performance-management/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=e391a62c-9d30-43fd-bb7b-9b9d9044dd70", chips: ["Management"], regions: ["eu-de", "eu-nl"] },
  { id: "DMS", symbol: "DMS", name: "Distributed Message Service", category: "Application", description: "Distributed Message Service (DMS) is a message middleware service based on distributed, high-availability clustering technology. It provides reliable, scalable, and fully managed queues for storing messages.", hc_url: "https://docs.otc.t-systems.com/distributed-message-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=b361d1fd-5a7f-4061-94ad-8490f82e9c12", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "SMN", symbol: "SMN", name: "Simple Message Notification", category: "Application", description: "Simple Message Notification (SMN) is a hosted simple message notification service that is flexible and large-scale. SMN allows you to send messages to email addresses, and HTTP/HTTPS applications in an efficient and inexpensive way.", hc_url: "https://docs.otc.t-systems.com/simple-message-notification/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=db2d3aeb-a14c-4bc3-abaa-e475b7941eb8", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // "Data Analysis"
  { id: "CSS", symbol: "CSS", name: "Cloud Search Service", category: "Data Analysis", description: "Cloud Search Service is a fully hosted distributed search service powered on Elasticsearch. It is fully compatible with Elasticsearch APIs and provides users with structured and unstructured data search, statistics, and report capabilities.", hc_url: "https://docs.otc.t-systems.com/cloud-search-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=8f2f3ca7-9eba-4e52-bd40-1481063e36ab", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "data-arts", symbol: "DataArts Studio", name: "DataArts Studio", category: "Data Analysis", description: "DataArts Studio is a one-stop data operations platform that drives digital transformation. It allows you to perform many operations, such as integrating and developing data, designing data architecture, controlling data quality, managing data assets, creating data services, and ensuring data security. Incorporating big data storage, computing and analytical engines, it can also construct industry knowledge bases and help your enterprise build an intelligent end-to-end data system. This system can eliminate data silos, unify data standards, accelerate data monetization, and accelerate your enterprise's digital transformation.", hc_url: "https://docs.otc.t-systems.com/data-arts-studio/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=6eec88d2-32d7-4eb2-83f1-711638cac5ba", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DLI", symbol: "DLI", name: "Data Lake Insight", category: "Data Analysis", description: "Data Lake Insight (DLI) is a serverless data processing and analysis service fully compatible with Apache Spark and Apache Flink ecosystems. It frees you from managing any servers.", hc_url: "https://docs.otc.t-systems.com/data-lake-insight/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=834a3d83-3b1e-4019-8d5e-a6950dd9e391", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DWS", symbol: "DWS", name: "Data Warehouse Service", category: "Data Analysis", description: "Data Warehouse Service (DWS) provides a scalable, fully hosted, and out-of-the-box data warehouse. It is compatible with the PostgreSQL ecosystem and supports standard SQL statements and BI tools to help you economically and efficiently mine and analyze massive volumes of data, greatly reducing your cost.", hc_url: "https://docs.otc.t-systems.com/data-warehouse-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=cbe2bcd4-937d-4880-82e0-d13c7f954048", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "ModelArts", symbol: "ModelArts", name: "ModelArts", category: "Data Analysis", description: "ModelArts is a one-stop development platform for AI developers. With distributed training, automated model building, and model deployment, ModelArts helps AI developers build models quickly and manage the AI development lifecycle.", hc_url: "https://docs.otc.t-systems.com/modelarts/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=1ac69234-ddfb-4a73-b9ca-2a8301b26be9", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "MRS", symbol: "MRS", name: "MapReduce Service", category: "Data Analysis", description: "MapReduce Service (MRS) provides enterprise-level big data clusters on the cloud, which are fully controlled by tenants and support the Hadoop, Spark, HBase, Kafka, and Storm components.", hc_url: "https://docs.otc.t-systems.com/mapreduce-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=e5aefe94-44ec-45bb-9064-4882fc5ca367", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "OCR", symbol: "OCR", name: "Optical Character Recognition", category: "Data Analysis", description: "Optical Character Recognition (OCR) detects and extracts text from images and converts the recognition results into an editable JSON format.", hc_url: "https://docs.otc.t-systems.com/optical-character-recognition/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=657b5566-5b0d-416b-8bfa-05421411bc8a", chips: ["PaaS"], regions: ["eu-de"] },

  // Computing
  { id: "AS", symbol: "AS", name: "Auto Scaling", category: "Computing", description: "Auto Scaling (AS) is a service that automatically adjusts service resources based on your service requirements and configured AS policies. You can specify scaling configurations and policies based on service requirements. These configurations and policies free you from having to repeatedly adjust resources to keep up with service changes and demand spikes, helping you reduce resources required and manpower costs.", hc_url: "https://docs.otc.t-systems.com/auto-scaling/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=d31d056a-6619-4751-8499-52a03d2478e7", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "BMS", symbol: "BMS", name: "Bare Metal Services", category: "Computing", description: "A Bare Metal Server (BMS) is a physical server dedicated to individual tenants. It provides remarkable computing performance and stability for running key applications. The BMS service can be used in conjunction with other cloud services so that you can enjoy a consistent and stable performance of server hosting and the high scalability of cloud resources together that offer the computing performance and data security required by core databases, key application systems, high-performance computing (HPC), and Big Data.", hc_url: "https://docs.otc.t-systems.com/bare-metal-server/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=e2a953d5-233e-4fc5-acb8-50178e62a167", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "DeH", symbol: "DeH", name: "Dedicated Host", category: "Computing", description: "Dedicated Host (DeH) is a service that provides dedicated physical hosts. You can create Elastic Cloud Servers (ECSs) on a DeH to enhance the isolation, security, and performance of your ECSs. When you migrate services to a DeH, you can continue to use your server software licenses used before the migration. That is, you can use the Bring Your License (BYOL) feature on the DeH to reduce costs and independently manage your ECSs.", hc_url: "https://docs.otc.t-systems.com/dedicated-host/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=5061ab1f-e764-4157-933f-1f13e6cd8d29", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ECS", symbol: "ECS", name: "Elastic Cloud Server", category: "Computing", description: "An ECS is a computing server consisting of CPUs, memory, images, and Elastic Volume Service (EVS) disks that allow on-demand allocation and elastic scaling. ECSs integrate virtual private cloud (VPC), virtual firewalls, and multi-data-copy capabilities to create an efficient, reliable, and secure computing environment. This ensures stable and uninterrupted operation of services.", hc_url: "https://docs.otc.t-systems.com/elastic-cloud-server/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=38cbc752-bffe-4ebd-ac0a-9433fe52f6bc", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "FGS", symbol: "FGS", name: "FunctionGraph", category: "Computing", description: "FunctionGraph allows to run a code without provisioning or managing servers, while ensuring high availability and scalability. All you need to do is to upload your code and set execution conditions. FunctionGraph will take care of the rest. In addition, you pay only for what you use and you are not charged when your code is not running.", hc_url: "https://docs.otc.t-systems.com/function-graph/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=1d5154ba-c2e4-4144-8f59-fa22727f7ff4", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "IMS", symbol: "IMS", name: "Image Management Service", category: "Computing", description: "Image Management Service (IMS) provides flexible self-service and comprehensive image management capabilities. You can use a public image or create a private image to apply for an Elastic Cloud Server (ECS) or multiple ECSs in batches.", hc_url: "https://docs.otc.t-systems.com/image-management-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=96bd36e0-aab6-4b70-ab22-cbc0043bea4b", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Containers
  { id: "ASM", symbol: "ASM", name: "Application Service Mesh", category: "Containers", description: "Application Service Mesh (ASM) is a service mesh platform based on Istio. It seamlessly interconnects with Cloud Container Engine (CCE), an enterprise-grade Kubernetes cluster service. With better usability, reliability, and visualization, ASM provides you with out-of-the-box features and enhanced user experience.", hc_url: "https://docs.otc.t-systems.com/application-service-mesh/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=909feefe-3c1b-4611-a548-ccea112f8ff3", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "CCE", symbol: "CCE", name: "Cloud Container Engine", category: "Containers", description: "CCE provides highly scalable, high-performance, enterprise-class Kubernetes clusters. It supports native Kubernetes applications, tools and easy setup of container runtime environment.", hc_url: "https://docs.otc.t-systems.com/cloud-container-engine/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=fe865562-a9ef-4933-b573-0f1447bae6b5", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "CCI", symbol: "CCI", name: "Cloud Container Instance", category: "Containers", description: "Cloud Container Instance (CCI) is a serverless container engine that allows you to run containers without creating or managing server clusters.", hc_url: "https://docs.otc.t-systems.com/cloud-container-instance/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=e202a850-2ab9-4439-b549-ecb736fb1030", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "SWR", symbol: "SWR", name: "Software Repository for Containers", category: "Containers", description: "Software Repository for Container (SWR) provides full lifecycle container image management, which is easy-to-use, secure, and reliable. SWR enables users to uickly deploy containerized services.", hc_url: "https://docs.otc.t-systems.com/software-repository-container/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=d805eb70-4fbc-4663-89fd-2f90c06c8b8e", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Databases
  { id: "DCS", symbol: "DCS", name: "Distributed Cache Service", category: "Databases", description: "Distributed Cache Service (DCS) is an online, distributed, in-memory cache service. It is reliable, scalable, usable out of the box, and easy to manage. DCS makes it easy to deploy, operate, and scale in-memory data caches in the cloud.", hc_url: "https://docs.otc.t-systems.com/distributed-cache-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=79641c2a-b5d6-4ad0-8095-2284677e409f", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "DDM", symbol: "DDM", name: "Distributed Database Middleware", category: "Databases", description: "Distributed Database Middleware (DDM) removes database capacity and performance bottlenecks and resolves distributed expansion issues. It provides database and table sharding, read/write splitting, and elastic scaling, helping you handle highly concurrent access to massive volumes of data and improving database read/write performance.", hc_url: "https://docs.otc.t-systems.com/distributed-database-middleware/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=045a432c-cb36-4511-89db-3db66e199a61", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DDS", symbol: "DDS", name: "Document Database Service", category: "Databases", description: "Document Database Service (DDS) is a cloud computing-based NoSQL database featuring high performance storage, high availability architecture, and disaster recovery failover, along with online scaling, backup, and restoration capabilities. It has a mature performance monitoring system, a multi-level security protection mechanism, and a professional database management platform.", hc_url: "https://docs.otc.t-systems.com/document-database-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=b04c5484-1881-4dc4-8206-065e5ea9d50f", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "DRS", symbol: "DRS", name: "Data Replication Service", category: "Databases", description: "Data Replication Service (DRS) is a stable, efficient, and easy-to-use cloud service for database online migration and synchronization. It simplifies data migration processes and reduces migration costs. You can use DRS to quickly transmit data between databases in various scenarios.", hc_url: "https://docs.otc.t-systems.com/data-replication-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=7ee1981b-1e56-422b-a75f-c4e778cbf45e", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "GeminiDB", symbol: "GeminiDB", name: "GeminiDB", category: "Databases", description: "GeminiDB is a distributed, multi-model NoSQL database service with decoupled compute and storage architecture. This high availability database is secure and scalable, can be deployed, backed up, or restored quickly, and includes monitoring and alarm management.", hc_url: "https://docs.otc.t-systems.com/geminidb/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=25e31cd8-23c8-464d-bb89-33daff0d56c0", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "RDS", symbol: "RDS", name: "Relational Database Service", category: "Databases", description: "Relational Database Service (RDS) is an online relational database service based on the cloud computing platform. The RDS is reliable, scalable, secure, and easy to manage, allowing you to deploy a database within minutes.", hc_url: "https://docs.otc.t-systems.com/relational-database-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=48ef140f-ca49-4924-838b-11d4dfeb01db", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "TaurusDB", symbol: "TaurusDB", name: "TaurusDB", category: "Databases", description: "TaurusDB is the latest generation enterprise-class distributed database. It is fully compatible with MySQL and provides high scalability and massive storage capacity. It uses a decoupled compute and storage architecture and supports up to 128 TB of storage. With TaurusDB, there is no need to deal with sharding, and no need to worry about data loss. It combines the performance and availability of commercial databases with the cost-effectiveness of open source databases.", hc_url: "https://docs.otc.t-systems.com/taurusdb/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=267f3c33-51f9-45f6-b5d5-5401c5fecb39", chips: ["PaaS"], regions: ["eu-de"] },

  // Management & Deployment
  { id: "CloudCreate", symbol: "Cloud Create", name: "Cloud Create", category: "Management & Deployment", description: "Cloud Create is a free-to-use Development and Management Platform, which enables cloud developers to create applications on Open Telekom Cloud fast.", hc_url: "https://docs.otc.t-systems.com/cloud-create/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=01fd864c-da31-4d86-8cdf-5782171991f7", chips: ["SaaS"], regions: ["eu-de", "eu-ch"] },
  { id: "CloudEye", symbol: "Cloud Eye", name: "Cloud Eye", category: "Management & Deployment", description: "Cloud Eye is a multi-dimensional monitoring platform that monitors your resources such as ECS and bandwidth. With Cloud Eye, users can fully understand the resource usage and running status of services running on the cloud platform, receive alarm notifications in a timely manner, and make response to ensure smooth running of services.", hc_url: "https://docs.otc.t-systems.com/cloud-eye/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=ec608703-3990-4dc8-b9cc-0e222ad232d6", chips: ["Management"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "Config", symbol: "Config", name: "Config", category: "Management & Deployment", description: "With Config, you can search for, record, and continuously evaluate your resource configuration to make sure that your expectations are met.", hc_url: "https://docs.otc.t-systems.com/config/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=9db6d12d-828c-4c00-8896-8fcf211a2805", chips: ["Management"], regions: ["eu-de"] },
  { id: "CTS", symbol: "CTS", name: "Cloud Trace Service", category: "Management & Deployment", description: "Cloud Trace Service (CTS) provides operation records for cloud service resources. The operation records include resource operation requests initiated from the public cloud management console or open APIs and responses to the requests. You can query, audit, and backtrack the operation records. In addition, you can use the Object Storage Service (OBS) to synchronize operation records to the OBS buckets.", hc_url: "https://docs.otc.t-systems.com/cloud-trace-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=90fb59c4-856b-4105-8612-b5f31cb8d520", chips: ["Management"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "LTS", symbol: "LTS", name: "Log Tank Service", category: "Management & Deployment", description: "Log Tank Service (LTS) stores logs, allowing you to query and transfer them in real time. It simplifies real-time analysis for decision making and improves log processing efficiency.", hc_url: "https://docs.otc.t-systems.com/log-tank-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=7967471f-f380-4742-81f5-6af3b8b351f0", chips: ["Management"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "RFS", symbol: "RFS", name: "Resource Formation Service", category: "Management & Deployment", description: "With Resource Formation Service, you can manage system and service resources (all physical or logical entities that can be located and described, such as databases, VPCs, pipelines, and IAM roles). You can automatically deploy specified cloud service resources based on the template which uses the HCL (an open ecosystem) syntax.", hc_url: "https://docs.otc.t-systems.com/resource-formation-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=7be99f92-4f85-403c-8430-498572a6e4a7", chips: ["Management"], regions: ["eu-de"] },
  { id: "TMS", symbol: "TMS", name: "Tag Management Service", category: "Management & Deployment", description: "Tag Management Service (TMS) is a visualized service for fast, unified tag management that enables you to control your resource permissions and billing more efficiently. It allows you to tag and categorize cloud services across regions, and it can be accessed through the TMS console or using APIs.", hc_url: "https://docs.otc.t-systems.com/tag-management-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=e7785c86-0449-4b20-ab6d-3f914d20f720", chips: ["Management"], regions: ["eu-de", "eu-ch"] },

  // Network
  { id: "DirectConnect", symbol: "DC", name: "Direct Connect", category: "Network", description: "A Direct Connect is a service that allows you to establish a dedicated network connection from your data center to the public cloud platform. You can establish a private connection between the public cloud platform and your data center, office, or collocation environment, which can reduce your network latency and provide a more consistent network experience than Internet-based connections.", hc_url: "https://docs.otc.t-systems.com/direct-connect/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=797b82d4-5d52-4908-99eb-66090ea4415f", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "DNS", symbol: "DNS", name: "Domain Name Service", category: "Network", description: "Domain Name Service (DNS) provides highly available and scalable authoritative DNS resolution services and domain name management services. It translates domain names or application resources into IP addresses required for network connection. By doing so, visitor's access requests are directed to the desired resources.", hc_url: "https://docs.otc.t-systems.com/domain-name-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=87d9d480-f65b-4b3e-be22-05c9186ae065", chips: ["IaaS"], regions: ["eu-de", "eu-ch"] },
  { id: "EIP", symbol: "EIP", name: "Elastic IP", category: "Network", description: "An EIP is a static, public IP address. You can bind an EIP to an ECS in your subnet to enable the ECS in your VPC to communicate with the Internet through a fixed public IP address.", hc_url: "https://docs.otc.t-systems.com/elastic-ip/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=f1b6a177-7b7c-4c22-a7ef-442e2b0676d5", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ELB", symbol: "ELB", name: "Elastic Load Balancing", category: "Network", description: "Elastic Load Balancing (ELB) is a service that automatically distributes access traffic to multiple Elastic Cloud Servers (ECSs) to balance their service load. ELB enables you to achieve higher levels of fault tolerance in your applications and expand application service capabilities.", hc_url: "https://docs.otc.t-systems.com/elastic-load-balancing/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=7bce547e-309a-44ac-820d-b1ae9c3bfb57", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ER", symbol: "ER", name: "Enterprise Router", category: "Network", description: "An Enterprise Router is a cloud router service that connects your VPCs and on-premises networks.", hc_url: "https://docs.otc.t-systems.com/enterprise-router/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=fc5de3cd-b308-4634-a475-31ef13ae9522", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "NATGW", symbol: "NATGW", name: "NAT Gateway", category: "Network", description: "The NAT Gateway service offers the Network Address Translation (NAT) function for computing instances, such as Elastic Cloud Servers (ECSs), in a Virtual Private Cloud (VPC), allowing these computing instances to access the Internet using elastic IP addresses (EIPs).", hc_url: "https://docs.otc.t-systems.com/nat-gateway/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=e2ebf92f-d41e-407c-b3e2-8dcbac09d4b0", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "PLAS", symbol: "PLAS", name: "Private Link Access Service", category: "Network", description: "Private Link Access Service (PLAS) enables public cloud platform users to establish exclusive connections from their on-premise networks to VPCs on the public cloud platform.PLAS connections are established between carrier networks and Direct Connect gateways, reducing network latency. These connections outperform Internet connections in stability and security.", hc_url: "https://docs.otc.t-systems.com/private-link-access-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=797b82d4-5d52-4908-99eb-66090ea4415f", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "smg", symbol: "SMG", name: "Secure Mail Gateway", category: "Network", description: "The Secure Mail Gateway service provides anti-spam and anti-junk functions for outgoing email traffic and prevents EIPs from being blacklisted or abused.", hc_url: "https://docs.otc.t-systems.com/secure-mail-gateway/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=1dbbb2fe-027e-4b3c-9ee5-70045a7b80fd", chips: ["Security"], regions: ["eu-de"] },
  { id: "VPC", symbol: "VPC", name: "Virtual Private Cloud", category: "Network", description: "The Virtual Private Cloud (VPC) service enables you to provision logically isolated, configurable, and manageable virtual networks for Elastic Cloud Servers (ECSs), improving the security of resources in the cloud system and simplifying network deployment.", hc_url: "https://docs.otc.t-systems.com/virtual-private-cloud/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=fc88afff-71ae-44df-96f0-47f38bc9b967", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "VPCEP", symbol: "VPCEP", name: "Virtual Private Cloud Endpoint", category: "Network", description: "The VPC Endpoint (VPCEP) service provides secure and private channels to connect your VPC to VPC endpoint services (cloud services on the current platform or your private services), providing flexible networking without having to use EIPs.", hc_url: "https://docs.otc.t-systems.com/vpc-endpoint/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=9e5f91dc-7bc3-44b1-9bbb-6f397267d253", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "VPN", symbol: "VPN", name: "Virtual Private Network", category: "Network", description: "A virtual private network (VPN) establishes an encrypted communication tunnel between a remote user and a Virtual Private Cloud (VPC). With VPN, you can connect to a VPC and access service resources in it.", hc_url: "https://docs.otc.t-systems.com/virtual-private-network/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=2c2c2468-5c1d-4e5e-83f7-86d450556921", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Security Services
  { id: "Anti-DDoS", symbol: "Anti-DDoS", name: "Anti-DDoS Service", category: "Security Services", description: "The Anti-DDoS traffic cleaning service (Anti-DDoS for short) is a network security service that defends IP addresses against distributed denial of service (DDoS) attacks.", hc_url: "https://docs.otc.t-systems.com/anti-ddos/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=2c2c2468-5c1d-4e5e-83f7-86d450556921", chips: ["Security"], regions: ["eu-de", "eu-nl"] },
  { id: "CFW", symbol: "CFW", name: "Cloud Firewall", category: "Security Services", description: "Cloud Firewall (CFW) is a next-generation cloud-native firewall. It protects Internet and VPC borders on the cloud by real-time intrusion detection and prevention, global unified access control, full traffic analysis, log audit, and tracing. It employs AI for intelligent defense, and can be elastically scaled to meet changing business needs, helping you easily handle security threats. CFW is a basic service that provides network security protection for user services on the cloud.", hc_url: "https://docs.otc.t-systems.com/cloud-firewall/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=90d10b99-8573-410e-814a-c2ac30bd6bb6", chips: ["Security"], regions: ["eu-de"] },
  { id: "DSS", symbol: "DSS", name: "Database Security Service", category: "Security Services", description: "Database Security Service (DBSS) uses machine learning and big data technologies to protect your databases on the cloud, intelligently auditing them and detecting risky behaviors like SQL injection.", hc_url: "https://docs.otc.t-systems.com/database-security-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=eb901df0-2e83-40c2-828c-61488c5541d8", chips: ["Security"], regions: ["eu-de"] },
  { id: "HSS", symbol: "HSS", name: "Host Security Service", category: "Security Services", description: "Host Security Service (HSS) defends your Linux and Windows cloud servers from the inside out, with a suite of advanced security features including powerful brute-force protection, intrusion detection monitoring, and vulnerability fixes.", hc_url: "https://docs.otc.t-systems.com/host-security-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=43fcfa65-c589-425f-a844-f12463135324", chips: ["Security"], regions: ["eu-de"] },
  { id: "IAM", symbol: "IAM", name: "Identity & Access Management", category: "Security Services", description: "Identity and Access Management (IAM) provides a public cloud system (Open Telekom Cloud) with user identity management and access control.You can use IAM to manage user accounts (such as employee, system or application program accounts) and control the operation permissions of these user accounts on your resources (such as computing, storage, and network resources). In this way, IAM prevents these accounts from sharing your password or access key with other users. IAM also ensures user account security and reduces security risks for your enterprise information by allowing you to set login verification policies, password policies, and an access control list (ACL).", hc_url: "https://docs.otc.t-systems.com/identity-access-management/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=7b5ccd9d-eb58-4c29-8d3e-f08fa5c341c4", chips: ["Security"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "KMS", symbol: "KMS", name: "Key Management Service", category: "Security Services", description: "Key Management Service (KMS) is a secure, reliable, and easy-to-use service that helps users centrally manage and safeguard their Customer Master Keys (CMKs).", hc_url: "https://docs.otc.t-systems.com/key-management-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=2717d962-028e-46f4-bb41-bec87dde30ff", chips: ["Security"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "WAF", symbol: "WAF", name: "Web Application Firewall", category: "Security Services", description: "Web Application Firewall (WAF) keeps web services stable and secure. It examines all HTTP and HTTPS requests to detect and block the following attacks: Structured Query Language (SQL) injection, cross-site scripting (XSS), webshells, command and code injections, file inclusion, sensitive file access, third-party vulnerability exploits, Challenge Collapsar (CC) attacks, malicious crawlers, and cross-site request forgery (CSRF).", hc_url: "https://docs.otc.t-systems.com/web-application-firewall/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=9feaae4e-37c9-4326-9d3d-640c2d2628ae", chips: ["Security"], regions: ["eu-de", "eu-nl"] },
  { id: "DWAF", symbol: "DWAF", name: "Dedicated Web Application Firewall", category: "Security Services", description: "Web Application Firewall (WAF) keeps web services stable and secure. It examines all HTTP and HTTPS requests to detect and block the following attacks: Structured Query Language (SQL) injection, cross-site scripting (XSS), webshells, command and code injections, file inclusion, sensitive file access, third-party vulnerability exploits, Challenge Collapsar (CC) attacks, malicious crawlers, and cross-site request forgery (CSRF).", hc_url: "https://docs.otc.t-systems.com/web-application-firewall-dedicated/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=9feaae4e-37c9-4326-9d3d-640c2d2628ae", chips: ["Security"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Storage
  { id: "CBR", symbol: "CBR", name: "Cloud Backup & Recovery", category: "Storage", description: "Cloud Backup and Recovery (CBR) allows you to back up cloud disks, elastic cloud servers, and bare metal servers, protecting the security and accuracy of your data to the greatest extent for service security.", hc_url: "https://docs.otc.t-systems.com/cloud-backup-recovery/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=beb53dfb-3785-4985-9d2d-4a53b34f32ce", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "CSBS", symbol: "CSBS", name: "Cloud Server Backup Service", category: "Storage", description: "Cloud Server Backup Service (CSBS) offers the backup protection service for Elastic Cloud Servers (ECSs). It works based on the consistent snapshot technology for Elastic Volume Service (EVS) disks. With CSBS, you can use backup data to restore ECS data.", hc_url: "https://docs.otc.t-systems.com/cloud-server-backup-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=48a5eca4-1d71-4943-8ac0-aaa4e6aaa655", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "EVS", symbol: "EVS", name: "Elastic Volume Service", category: "Storage", description: "Elastic Volume Service (EVS) offers scalable block storage for servers. With high reliability, high performance, and rich specifications, EVS disks can be used for distributed file systems, development and testing environments, data warehouse applications, and high-performance computing (HPC) scenarios to meet diverse service requirements.", hc_url: "https://docs.otc.t-systems.com/elastic-volume-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=7e039cc9-9583-49a8-a295-79aa757d2d02", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "OBS", symbol: "OBS", name: "Object Storage Service", category: "Storage", description: "Object Storage Service (OBS) is an object-based storage service that provides customers with massive, secure, reliable, and cost-effective data storage capabilities, such as bucket creation, modification, and deletion, as well as object upload, download, and deletion.", hc_url: "https://docs.otc.t-systems.com/object-storage-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=ee1d83da-e9e0-4f78-a7a4-9640694d033f", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "SDRS", symbol: "SDRS", name: "Storage Disaster Recovery Service", category: "Storage", description: "Storage Disaster Recovery Service (SDRS) provides disaster recovery (DR) services for many cloud services, such as Elastic Cloud Server (ECS) and Elastic Volume Service (EVS). SDRS uses multiple technologies, such as storage replication, data redundancy, and cache acceleration, to provide high data reliability and service continuity for users.", hc_url: "https://docs.otc.t-systems.com/storage-disaster-recovery-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=bf7d666b-2a2b-4b13-9861-9675a80e614d", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "SFS", symbol: "SFS", name: "Scalable File Service", category: "Storage", description: "Scalable File Service (SFS) provides high-performance file storage that is scalable on demand. It can be shared with multiple Elastic Cloud Servers (ECS).", hc_url: "https://docs.otc.t-systems.com/scalable-file-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=46cb421a-537a-46ea-a561-f8f69ae4eec9", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "VBS", symbol: "VBS", name: "Volume Backup Service", category: "Storage", description: "Volume Backup Service (VBS) provides snapshot-based data protection service for Elastic Volume Service (EVS) disks. You can perform one-click backup and restoration for the EVS disks on Elastic Cloud Servers (ECSs) all through the online platform.", hc_url: "https://docs.otc.t-systems.com/volume-backup-service/index.html", rn_url: "https://www.open-telekom-cloud.com/en/support/release-notes?tag=19ad631e-c721-459e-93e6-df8f85dea16a", chips: ["IaaS"], regions: ["eu-de"] },

  // Finance Services
  { id: "ED", symbol: "ED", name: "Enterprise Dashboard", category: "Finance Services", description: "The Enterprise Dashboard (ED) helps you keep track of your cloud consumption data, as well as all billing information and financial metrics.", hc_url: "https://enterprise-dashboard.otc-service.com/", rn_url: "", chips: ["Management"], regions: ["global"] },
  // { id: "INV", symbol: "INV", name: "Invoicing", category: "Finance Services", description: "", hc_url: "", rn_url: "", chips: ["Management"], regions: ["global"] },

  // Sites Services
  { id: "AC", symbol: "AC", name: "Architecture Center", category: "Sites", description: "The Architecture Center for Open Telekom Cloud, is a knowledge-hub designed to guide architects, developers, and IT teams in building secure, scalable, and efficient cloud solutions. It provides curated best practices, detailed reference architectures, and blueprints for common workloads and use cases. The platform offers infrastructure templates in formats like Terraform and TOSCA to accelerate deployment and ensure consistency. Users can explore architectural guidance for networking, storage, compute, and security. The site focuses on reliability, compliance, and sustainability to meet enterprise and public sector needs. It serves as a central resource for designing and operating solutions on Open Telekom Cloud effectively.", hc_url: "https://arch.otc-service.com/", rn_url: "", chips: ["Docs"], regions: ["global"] },
  { id: "HC", symbol: "HC", name: "Help Center", category: "Sites", description: "Help Center is the official documentation hub for Open Telekom Cloud, offering comprehensive user and developer guidance. It covers a full range of cloud services—including compute, storage, networking, application, data analysis, containers, databases, management, security, and more—with detailed API references, user guides, SDKs, and infrastructure-as-code resources. The site also includes developer-focused content like REST API guidance, SDK usage, automation tools, architecture best practices, regional endpoints, a glossary, FAQs, release notes, and status dashboards.", hc_url: "https://docs.otc.t-systems.com/", rn_url: "", chips: ["Docs"], regions: ["global"] },
  { id: "OTC", symbol: "OTC", name: "Open Telekom Cloud", category: "Sites", description: "Open Telekom Cloud, powered by Deutsche Telekom's T-Systems, is a European public cloud platform built on OpenStack. It offers secure, GDPR-compliant infrastructure services—including compute, storage, networking, and AI—from data centers in Germany, the Netherlands, and Switzerland. Designed for scalability and sovereignty, it supports enterprises and public organizations with flexible pricing, strong certifications, and 24/7 expert support.", hc_url: "https://open-telekom-cloud.com/en", rn_url: "", chips: ["Product"], regions: ["global"] },
  { id: "CP", symbol: "CP", name: "Community Portal", category: "Sites", description: "The Open Telekom Cloud Community is a user-driven forum where developers, architects, and users can share experiences, ask questions, find help, and discover blog entries and webinars. Serving as a practical support channel, it gathers collective knowledge to help with real-world cloud challenges and foster expert-to-user interactions.", hc_url: "https://community.open-telekom-cloud.com/", rn_url: "", chips: ["Community"], regions: ["global"] },
  { id: "Console", symbol: "Console", name: "Open Telekom Cloud Console", category: "Sites", description: "The Open Telekom Cloud Console is a web-based management interface that provides users with centralized access to all Open Telekom Cloud services and resources. It enables administrators and developers to create, configure, and monitor compute, storage, network, and security services through an intuitive dashboard. The console supports project-based organization, fine-grained identity and access management, and real-time resource monitoring. Designed for usability and transparency, the console offers a unified platform to manage infrastructure, automate workflows, and ensure compliance.", hc_url: "https://auth.otc.t-systems.com/", rn_url: "", chips: ["Management"], regions: ["global"] },
  { id: "SD", symbol: "SD", name: "Status Dashboard", category: "Sites", description: "Status Dashboard is the official service status dashboard for Open Telekom Cloud. It provides real-time information on the availability and performance of all cloud services across regions, helping users quickly identify incidents or maintenance activities. The site offers clear service indicators, detailed incident updates, and regional views, ensuring transparency and operational awareness for customers and administrators.", hc_url: "https://status.otc-service.com/", rn_url: "", chips: ["Product"], regions: ["global"] },

];

export default function OtcServicesColumns() {
  const [query] = useState("");
  const [chips, setChips] = useState<Set<Chip>>(new Set());            // OR
  const [regionsSel, setRegionsSel] = useState<Set<Region>>(new Set()); // OR
  const [open, setOpen] = useState<OtcService | null>(null);            // ← sleeve
  // NEW: category filter state + options
  const ALL_CATS = Array.from(new Set(SERVICES.map(s => s.category))).sort();
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const OTC_CATEGORY_OPTIONS: string[] = ["all", ...ALL_CATS];
  const noDataImg = useBaseUrl('/img/undraw_no-data_ig65.svg');

  const toggleChip = (c: Chip) =>
    setChips((prev) => {
      const next = new Set(prev);
      if (next.has(c)) {
        next.delete(c);
      } else {
        next.add(c);
      }
      return next;
    });

  const toggleRegion = (r: Region) =>
    setRegionsSel((prev) => {
      const next = new Set(prev);
      if (next.has(r)) {
        next.delete(r);
      } else {
        next.add(r);
      }
      return next;
    });

  const categorySelectRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = categorySelectRef.current;
    if (!el) return;

    const onChange = (e: Event) => {
      // SCALE emits CustomEvent with { detail: { value } }
      const value = (e as CustomEvent).detail?.value ?? "all";
      setCategoryFilter(value);
    };

    el.addEventListener("scale-change", onChange);
    // Some builds also dispatch a native 'change' — safe to listen to both:
    el.addEventListener("change", onChange);

    return () => {
      el.removeEventListener("scale-change", onChange);
      el.removeEventListener("change", onChange);
    };
  }, []);

  const resetFilters = () => {
    // 1) category -> "all"
    setCategoryFilter("all");

    // 2) chips + regions -> unchecked
    // Use your existing setters for those two pieces of state.
    // (If your state uses arrays, set [] instead of new Set().)
    setChips?.(new Set());   // existing chips state
    setRegionsSel?.(new Set());   // existing regions state
  };

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

      if (
        categoryFilter !== "all" &&
        s.category !== categoryFilter
      ) {
        return false;
      }

      return true;
    });
  }, [query, chips, regionsSel, categoryFilter]);

  // open sleeve on Enter/Space as well
  function onTileKey(e: KeyboardEvent<HTMLDivElement>, s: OtcService) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(s);
    }
  }

  const renderRegionChip = (region: Region) => {
    if (region === "global") return null;

    const cls =
      region === "eu-de" ? "fi fi-de" :
        region === "eu-nl" ? "fi fi-nl" :
          region === "eu-ch" ? "fi fi-ch fis" : "";

    return (
      <span
        className={`${styles.flag} ${cls}`}
        key={region}
        title={region}
      ></span>
    );
  };

  const renderRegionFooter = (region: Region) => {
    if (region === "global") {
      return <span key={region}>GLOBAL</span>;
    }

    const cls =
      region === "eu-de" ? "fi fi-de" :
        region === "eu-nl" ? "fi fi-nl" :
          region === "eu-ch" ? "fi fi-ch fis" : "";

    return (
      <span
        className={`${styles.flag} ${cls}`}
        key={region}
      ></span>
    );
  };

  return (
    <div className={styles.otcWrap}>
      <div className={styles.otcMax}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>{/* heading removed intentionally */}</div>
        </div>
        {/* Filters: categories (single line) */}
        <div className={styles.filtersRow}>
          <div className={styles.filterRow}>
            <scale-dropdown-select
              ref={categorySelectRef}
              label="Filter by category"
              value={categoryFilter}
              className={styles.fullWidthDropdown}
            >
              {OTC_CATEGORY_OPTIONS.map((opt) => (
                <scale-dropdown-select-item
                  key={opt}
                  value={opt}
                  selected={categoryFilter === opt}
                >
                  {opt === "all" ? "All Categories" : opt}
                </scale-dropdown-select-item>
              ))}
            </scale-dropdown-select>
            <scale-button variant="secondary" className={styles.resetBtn} onClick={resetFilters}>
              <scale-icon-action-refresh></scale-icon-action-refresh> Reset Filters
            </scale-button>
          </div>

        </div>

        {/* Filters: chips | regions (single line) */}
        <div className={styles.filtersRow}>
          {/* Capability chips (SCALE) */}
          <div className={styles.bucketsChips} onClickCapture={onChipRowClickCapture}>
            {(["IaaS", "PaaS", "SaaS", "Security", "Management"] as Chip[]).map((c) => (
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
          <div className={styles.bucketsRegions} onClickCapture={onRegionRowClickCapture}>
            {(["eu-de", "eu-nl", "eu-ch", "global"] as Region[]).map((r) => (
              <scale-chip
                key={r}
                data-region={r}
                size="small"
                selected={isRegionActive(r) ? true : undefined}
                title={r.toUpperCase()}
              >
                {renderRegionChip(r)}
                {` ${r.toUpperCase()}`}
              </scale-chip>
            ))}
          </div>
        </div>

        <scale-divider></scale-divider>
        {/* Grid */}
        <div className={styles.tileGrid}>
          {filtered.length === 0 ? (
            <div className={styles.emptyFill}>
              <div className={styles.emptyState}>
                <img src={noDataImg} />
                <h3>No results match your filters.</h3>
              </div>
            </div>

          ) : (
            filtered.map((s) => (
              <div
                key={s.id}
                className={styles.tile}
                onClick={() => setOpen(s)}
                onKeyDown={(e) => onTileKey(e, s)}
                role="button"
                tabIndex={0}
              >
                <div className={styles.tileTop}>
                  <span className={styles.cat}>{s.category}</span>
                  <span className={styles.cat}>{s.chips}</span>
                </div>
                <div className={styles.name}>{s.name}</div>
                <div className={styles.tileBottom}>
                  <div className={styles.flags}>
                    {s.regions.map((r) => (
                      <span className={styles.flag} key={r}>
                        {renderRegionFooter(r)}
                      </span>
                    ))}
                  </div>
                  {/* {s.hc_url && (
                    <a
                      className={styles.badge}
                      href={s.hc_url}
                      target="_blank"
                      rel="noreferrer"
                      title="Open service docs"
                    >
                      <ExternalLink size={14} className={styles.ext} /> Docs
                    </a>
                  )} */}
                </div>
              </div>
            ))
          )}
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

            {open.category === "Finance Services" || open.category === "Sites" ? (
              <div className={styles.sleeveFooterSingle}>
                <scale-button
                  href={open.hc_url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="small"
                >
                  Go to {open.name}
                  <scale-icon-navigation-external-link accesibility-title="External link, opens in new tab" />
                </scale-button>
              </div>
            ) : (
              <div className={styles.sleeveFooter}>
                <scale-button
                  href={`/docs/tags/${encodeURIComponent(open.symbol)}`}
                  rel="noreferrer"
                  variant="primary"
                  size="small"
                >
                  Discover Best Practices & Blueprints
                  <scale-icon-action-search accessibility-title="search"/>
                </scale-button>

                <scale-button
                  href={open.rn_url || "#"}
                  target="_blank"
                  variant="secondary"
                  size="small"
                >
                  Release Notes
                  <scale-icon-content-history accessibility-title="history"/>
                </scale-button>

                <scale-button
                  href={open.hc_url || "#"}
                  target="_blank"
                  variant="secondary"
                  size="small"
                >
                  Go to Help Center
                  <scale-icon-navigation-external-link accesibility-title="External link, opens in new tab" />
                </scale-button>
              </div>
            )}
          </div>

        </div>
      )
      }
    </div >
  );
}
