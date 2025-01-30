"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[46574],{82985:e=>{e.exports=JSON.parse('{"tag":{"label":"cce","permalink":"/docs-next/pr-preview/pr-192/docs/tags/cce","allTagsPath":"/docs-next/pr-preview/pr-192/docs/tags","count":18,"items":[{"id":"best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics","title":"Auto Scaling Based on ELB Monitoring Metrics","description":"By default, Kubernetes scales a workload based on resource usage metrics such as CPU and memory. However, this mechanism cannot reflect the real-time resource usage when traffic bursts arrive, because the collected CPU and memory usage data lags behind the actual load balancer traffic metrics. For some services (such as flash sale and social media) that require fast auto scaling, scaling based on this rule may not be performed in a timely manner and cannot meet these services\' actual needs. In this case, auto scaling based on ELB QPS data can respond to service requirements more timely.","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics"},{"id":"best-practices/containers/cloud-container-engine/backup-kubernetes-objects","title":"Backing Up Kubernetes Objects of other Clusters","description":"1.  To back up a WordPress application with PV data, add an annotation","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/containers/cloud-container-engine/backup-kubernetes-objects"},{"id":"blueprints/by-use-case/devops/ci-jenkins-swr-cce","title":"Build a CI Pipeline with Jenkins, SWR and CCE","description":"This blueprint covers integrating Jenkins with Open Telekom Cloud Container Engine (CCE) for efficient CI/CD pipelines. It details installing Jenkins in CCE clusters, emphasizing using containerized Masters and dynamic Agents managed by Kubernetes for optimal resource utilization and self-healing. The Master schedules jobs, which Agents execute within Kubernetes pods. This setup enhances security and maintenance efficiency.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/devops/ci-jenkins-swr-cce"},{"id":"blueprints/by-use-case/devops/ci-devtron-swr-cce","title":"Build a CI/CD Pipeline with Devtron, SWR and CCE","description":"This blueprint covers integrating Devtron with Open Telekom Cloud Container Engine (CCE) for efficient CI/CD pipelines. It details installing Devtron in CCE clusters, emphasizing using containerized Masters and dynamic Agents managed by Kubernetes for optimal resource utilization and self-healing. The Master schedules jobs, which Agents execute within Kubernetes pods. This setup enhances security and maintenance efficiency.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/devops/ci-devtron-swr-cce"},{"id":"blueprints/by-use-case/observability/kubernetes-logging-with-loki","title":"CCE Logging with Grafana Loki & Promtail","description":"In this blueprint, we\'ll consolidate all the logs generated in our Kubernetes cluster into a neat, real-time dashboard in Grafana.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/observability/kubernetes-logging-with-loki"},{"id":"best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce","title":"Connecting a Redis Client to DCS Through CCE","description":"With the development of the container technology, more and more applications are deployed in containers. This section describes how to deploy a Redis client in a Cloud Container Engine (CCE) cluster container and connect it to DCS.","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/databases/distributed-cache-service/connecting-a-redis-client-to-dcs-through-cce"},{"id":"blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns","title":"Create a Public DNS Endpoint with ExternalDNS","description":"ExternalDNS is a Kubernetes component used to manage DNS records for services and applications running in a Kubernetes cluster. It automates the creation, update, and deletion of DNS records based on the state of resources within the cluster. ExternalDNS is typically employed in scenarios where you need to expose services running inside a Kubernetes cluster to the outside world with fully qualified domain names (FQDNs), ensuring they are accessible by external users.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/networking/create-a-public-dns-endpoint-with-externaldns"},{"id":"best-practices/containers/cloud-container-engine/debugging-and-starting-the-application","title":"Debugging and Starting the Application","description":"Application Verification","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/containers/cloud-container-engine/debugging-and-starting-the-application"},{"id":"blueprints/by-use-case/security/authentik/cce-authentik","title":"Deploy Authentik on CCE","description":"This tutorial will guide you through the process of setting up authentik on your CCE Kubernetes environment.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/security/authentik/cce-authentik"},{"id":"blueprints/by-use-case/analytics/deploy-clickhouse-cce","title":"Deploy ClickHouse on CCE","description":"ClickHouse is a high-performance columnar database management system optimized for online analytical processing (OLAP). It is designed to handle large volumes of data and execute complex queries swiftly. The system uses a columnar storage format, which significantly accelerates read and write operations and enhances data compression. ClickHouse supports SQL queries and provides extensive tools for data analysis. It is built to scale horizontally, allowing for distributed processing across multiple servers. Its architecture ensures high availability and fault tolerance. Ideal for real-time data analytics, ClickHouse is widely adopted for tasks requiring fast query performance over extensive datasets.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/analytics/deploy-clickhouse-cce"},{"id":"blueprints/by-use-case/security/keycloak/cce-keycloak","title":"Deploy Keycloak on CCE","description":"In this blueprint, we are going to discuss the steps to install Keycloak, in Open Telekom Cloud, on a CCE Cluster.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/security/keycloak/cce-keycloak"},{"id":"blueprints/by-use-case/analytics/umami/deploy-umami-cce","title":"Deploy Umami on CCE","description":"In this blueprint we are going to set up Umami on Open Telekom Cloud\'s Cloud Container Engine (CCE), leveraging Kubernetes for scalability and flexibility. For the database backend, we will use the Zalando PostgreSQL Operator to provision and manage a PostgreSQL cluster within the CCE environment.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/analytics/umami/deploy-umami-cce"},{"id":"best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce","title":"Issue an ACME Certificate with DNS01 Solver in CCE","description":"A DNS01 challenge is a type of challenge used in the Domain Name System (DNS) to verify ownership of a domain during the process of obtaining an SSL/TLS certificate, often through services like Let\'s Encrypt.","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/containers/cloud-container-engine/issue-an-acme-certificate-with-dns01-solver-in-cce"},{"id":"best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce","title":"Migrating Clusters from Other Clouds to CCE","description":"Assume that you have deployed the WordPress on 3rd party cloud provider and created your own blog; this document will drive you through how to smoothly migrate an application from a managed Kubernetes cluster on that provider to a Open Telekom Cloud CCE in six easy steps without interrupting the service.","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/containers/cloud-container-engine/migrating-from-other_clouds-to-cce"},{"id":"best-practices/containers/cloud-container-engine/restore-kubernetes-objects","title":"Restoring Kubernetes Objects in a CCE Cluster","description":"In this example, the WordPress application uses Azure SSD persistent data volumes, which need to be replaced with Open Telekom Cloud SSDs.","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/containers/cloud-container-engine/restore-kubernetes-objects"},{"id":"blueprints/by-use-case/security/cce-vault","title":"Secrets management with CCE and Hashicorp Vault","description":"Most modern IT setups are composed of several subsystems like databases, object stores, master controller, node access, and more. To access one component from another, some form of credentials are required. Configuring and storing these secrets directly in the components is considered as an anti-pattern, since a vulnerability of one component may iteratively and transitively affect the security of the whole setup.","permalink":"/docs-next/pr-preview/pr-192/docs/blueprints/by-use-case/security/cce-vault"},{"id":"best-practices/application-services/api-gateway/selectively-exposing-cce-workloads-with-a-dedicated-gateway","title":"Selectively Exposing CCE Workloads with a Dedicated Gateway","description":"You can use APIG to selectively expose your workloads and microservices in Cloud Container Engine (CCE).","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/application-services/api-gateway/selectively-exposing-cce-workloads-with-a-dedicated-gateway"},{"id":"best-practices/containers/cloud-container-engine/updating-resources","title":"Updating Resources Accordingly","description":"Updating Images","permalink":"/docs-next/pr-preview/pr-192/docs/best-practices/containers/cloud-container-engine/updating-resources"}],"unlisted":false}}')}}]);