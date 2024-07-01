import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Architecture Center',
  tagline: 'Best Practices & Blueprints',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blueprints.hypelens.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'akyriako', // Usually your GitHub org/user name.
  projectName: 'docs-next', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/akyriako/docs-next/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/akyriako/docs-next/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          createSitemapItems: async ({
            defaultCreateSitemapItems,
            ...params
          }) => {
            const items = await defaultCreateSitemapItems(params);
            return items.filter((item) => !item.url.includes('/tags/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'], 
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Open Telekom Cloud \n Architecture Center',
      logo: {
        alt: 'Deutsche Telekom Logo',
        src: 'img/telekom-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bestPracticesSidebar',
          position: 'left',
          label: 'Best Practices',
        },
        {
          type: 'docSidebar',
          sidebarId: 'blueprintsSidebar',
          position: 'left',
          label: 'Blueprints',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'cafSidebar',
        //   position: 'left',
        //   label: 'Cloud Adoption Framework 🚧',
        // },
        // { to: '/blog', label: 'Blog', position: 'right' },
        { href: 'https://auth.otc.t-systems.com/', label: 'Console', position: 'right' },
        { href: 'https://github.com/akyriako/docs-next', label: 'GitHub', position: 'right',},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Help Center',
              to: 'https://docs.otc.t-systems.com/',
            },
            {
              label: 'Medium',
              href: 'https://designer.otc-service.com/#/',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'SDKs',
              to: '/blog',
            },
            {
              label: 'Drivers & Tools',
              to: 'https://github.com/akyriako/docs-next',
            },
            {
              label: 'IaC & Automation',
              to: '/blog',
            },
            {
              label: 'Cloud Create',
              to: 'https://designer.otc-service.com/',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'REST API',
              to: '/blog',
            },
            {
              label: 'REST API Guidelines',
              to: 'https://github.com/akyriako/docs-next',
            },
            {
              label: 'Endpoints',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Community Portal',
              to: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `© T-Systems International GmbH ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    
    typesense: {
      // Replace this with the name of your index/collection.
      // It should match the "index_name" entry in the scraper's "config.json" file.
      typesenseCollectionName: 'docs-next',

      typesenseServerConfig: {
        nodes: [
          {
            host: process.env.TYPESENSE_HOST,
            port: process.env.TYPESENSE_PORT,
            protocol: process.env.TYPESENSE_PROTOCOL,
          },
        ],
        apiKey: process.env.TYPESENSE_API_KEY,
      },

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {},
      searchPagePath: 'search',
      
      // Optional
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
