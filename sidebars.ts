import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: 'tutorials'}],
  blueprintsSidebar: [{ type: 'autogenerated', dirName: 'blueprints' }],
  // bestPracticesSidebar: [{type: 'autogenerated', dirName: 'best-practices'}],
  cafSidebar: [{ type: 'autogenerated', dirName: 'caf' }],

  // But you can create a sidebar manually

  bestPracticesSidebar: [
    {
      type: 'doc',
      id: 'best-practices/best-practices',
    },
    {
      type: 'category',
      label: 'Application Services',
      items: [
        {
          type: 'category',
          label: 'Application Operations Management',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/application-operations-management/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'API Gateway (APIG)',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/api-gateway/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Distributed Message Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/distributed-message-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Simple Message Notification',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/simple-message-notification/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Big Data & Data Analysis',
      items: [
        {
          type: 'category',
          label: 'Cloud Search Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/cloud-search-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'DataArts Studio',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/data-arts-studio/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Ingestion Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/data-ingestion-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Lake Insight',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/data-lake-insight/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Warehouse Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/data-warehouse-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'ModelArts',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/modelarts/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'MapReduce Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/mapreduce-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Optical Character Recognition',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/optical-character-recognition/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Computing',
      items: [
        {
          type: 'category',
          label: 'Auto-Scaling',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/auto-scaling/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Bare Metal',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/bare-metal-server/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Dedicated Host',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/dedicated-host/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic Cloud Server',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/elastic-cloud-server/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'FunctionGraph 🔥',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/function-graph/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Image Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/image-management-service/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Containers',
      items: [
        {
          type: 'category',
          label: 'Cloud Container Engine',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/cloud-container-engine/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Software Repository for Container',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/software-repository-container/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Databases',
      items: [
        {
          type: 'category',
          label: 'Distributed Cache Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/distributed-cache-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Distributed Database Middleware',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/distributed-database-middleware/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Document Database Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/document-database-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Replication Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/data-replication-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'GaussDB (for MySQL)',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/gaussdb-mysql/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'GaussDB NoSQL',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/gaussdb-nosql/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Relational Database Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/relational-database-service/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Management & Deployment',
      items: [
        {
          type: 'category',
          label: 'Application Performance Management',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/application-performance-management/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Create 🔥',
          link: {
            type: 'doc', 
            id: 'best-practices/management-and-deployment/cloud-create/cloud-create'
          },
          items: [
            {
              type: 'category',
              label: 'Google Cloud',
              link: {
                type: 'doc', 
                id: 'best-practices/management-and-deployment/cloud-create/google-cloud/google',
              },
              items: [
                {
                  type: 'doc',
                  id: 'best-practices/management-and-deployment/cloud-create/google-cloud/google-deploy',
                },
                {
                  type: 'doc',
                  id: 'best-practices/management-and-deployment/cloud-create/google-cloud/multi-region',
                },
                {
                  type: 'doc',
                  id: 'best-practices/management-and-deployment/cloud-create/google-cloud/application-dynamic-subnets',
                },
              ],
            },
            {
              type: 'category',
              label: 'Service catalogs',
              // link: {
              //   type: 'generated-index',
              //   description: 'Learn about the most important Docusaurus concepts!',
              //   slug: '/best-practices/management-and-deployment/cloud-create/service-catalogs',
              //   keywords: ['cloud-create'],
              // },
              link: {
                type: 'doc', 
                id: 'best-practices/management-and-deployment/cloud-create/service-catalogs/service-catalogs'
              },
              items: [
                {
                  type: 'doc',
                  id: 'best-practices/management-and-deployment/cloud-create/service-catalogs/openshift-template',
                },
              ],
            },
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/cloud-create/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Eye',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/cloud-eye/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Trace Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/cloud-trace-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Log Tank Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/log-tank-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Resource Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/resource-management-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tag Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/tag-management-service/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      items: [
        {
          type: 'category',
          label: 'Direct Connect',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/direct-connect/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Domain Name Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/domain-name-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic IP',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/elastic-ip/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic Load Balancing',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/elastic-load-balancing/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Enterprise Router',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/enterprise-router/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'NAT Gateway',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/nat-gateway/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Private Link Access Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/private-link-access-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Secure Mail Gateway',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/secure-mail-gateway/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Virtual Private Cloud',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/virtual-private-cloud/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'VPC Endpoint',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/vpc-endpoint/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Virtual Private Network',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/virtual-private-network/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Security Services',
      items: [
        {
          type: 'category',
          label: 'Anti DDoS',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/anti-ddos/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Database Security Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/database-security-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Host Security Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/host-security-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Identity and Access Management',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/identity-access-management/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Key Management Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/key-management-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Application Firewall',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/web-application-firewall/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Dedicated Web Application Firewall',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/web-application-firewall-dedicated/index.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        {
          type: 'category',
          label: 'Cloud Backup and Recovery',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/cloud-backup-recovery/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cloud Server Backup Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/cloud-server-backup-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Elastic Volume Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/elastic-volume-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Object Storage Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/object-storage-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Storage Disaster Recovery Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/storage-disaster-recovery-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Scalable File Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/scalable-file-service/index.html',
            },
          ],
        },
        {
          type: 'category',
          label: 'Volume Backup Service',
          items: [
            {
              type: 'link',
              label: '📚 Go to Help Center',
              href: 'https://docs.otc.t-systems.com/volume-backup-service/index.html',
            },
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Getting Started',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'doc1',
    //     },
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Docusaurus',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'doc2',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'doc3',
    //     },
    //   ],
    // },
    // {
    //   type: 'link',
    //   label: 'Learn more',
    //   href: 'https://example.com',
    // },
    // {
    //   type: 'link',
    //   label: 'Portfolio Roadmap',
    //   href: 'https://www.open-telekom-cloud.com/en/products-services/roadmap',
    // },
    // {
    //   type: 'link',
    //   label: 'Status Dashboard',
    //   href: 'https://status.otc-service.com/',
    // },
  ],

};

export default sidebars;
