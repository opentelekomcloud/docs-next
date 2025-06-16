import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { Options as UmamiOptions } from '@dipakparmar/docusaurus-plugin-umami';

const config: Config = {
  title: 'Architecture Center',
  tagline: 'Best Practices & Blueprints',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://' + process.env.REACT_APP_DOCS_NEXT_HOST,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.REACT_APP_DOCUSAURUS_BASE_URL ?? '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.REACT_APP_DOCS_NEXT_ORG, // Usually your GitHub org/user name.
  projectName: 'docs-next', // Usually your repo name.

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
          editUrl:'https://github.com/opentelekomcloud/docs-next/tree/main/',
          // showLastUpdateAuthor: true,  
          // showLastUpdateTime: true,
          breadcrumbs: true,
          exclude: ['**/by-use-case/computing/**', '**/by-use-case/hybrid/**', '**/by-use-case/migration/**']
        },
        
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
    image: 'img/open-telekom-cloud-social-card.png',
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      // title: 't',
      logo: {
        alt: 'Open Telekom Cloud Non-Logo',
        src: 'img/logo_headline_kombination_m_s_m.png',
        srcDark: 'img/logo_headline_kombination_m_w_m.png'
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
        {
          to: '/templates', 
          label: 'Templates',
          position: 'left',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'cafSidebar',
        //   position: 'left',
        //   label: 'Cloud Adoption Framework 🚧',
        // },
        // { to: '/blog', label: 'Blog', position: 'right' },
        { 
          href: 'https://auth.otc.t-systems.com/', 
          position: 'right',
          className: 'navbar--terminal-link',
          "aria-label": 'Open Telekom Cloud Console',
        },
        { 
          href: 'https://github.com/opentelekomcloud/docs-next', 
          position: 'right',
          className: 'navbar--github-link',
          "aria-label": 'GitHub',
        },
        // { 
        //   href: 'https://open-telekom-cloud.com', 
        //   position: 'right',
        //   className: 'navbar--discourse-link',
        //   "aria-label": 'Discourse OTC',
        // },
        // { 
        //   href: 'https://discord.gg/zpSRgC9as5', 
        //   position: 'right',
        //   className: 'navbar--discord-link',
        //   "aria-label": 'Discord Invite',
        // },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Open Telekom Cloud Logo',
        src: 'img/telekom-logo.svg',
        href: 'https://www.open-telekom-cloud.com',
        width: 72,
        height: 72,
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Help Center',
              to: 'https://docs.otc.t-systems.com/',
            },
            {
              label: 'Portfolio Roadmap',
              to: 'https://www.open-telekom-cloud.com/en/products-services/roadmap',
            },
            {
              label: 'Core Services Certifications',
              to: 'https://www.open-telekom-cloud.com/en/products-services/core-services/certifications',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Community Forums',
              to: 'https://community.open-telekom-cloud.com/',
            },
            {
              label: 'Webinars',
              href: 'https://www.youtube.com/playlist?list=PLS60dhorR-hgQ5n5L1boEQh0oVD-_k75p',
            },
            // {
            //   label: 'Medium',
            //   href: 'https://medium.com',
            // },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'SDKs',
              to: 'https://docs.otc.t-systems.com/developer/sdk.html',
            },
            {
              label: 'Drivers & Tools',
              to: 'https://docs.otc.t-systems.com/developer/drivers.html',
            },
            {
              label: 'Terraform Provider',
              href: 'https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/latest/docs',
            },
            {
              label: 'Ansible Collections',
              to: 'https://docs.otc.t-systems.com/ansible-collection-cloud/',
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
              to: 'https://docs.otc.t-systems.com/developer/api.html',
            },
            {
              label: 'REST API Usage Guidelines',
              to: 'https://docs.otc.t-systems.com/developer/api_guidelines/index.html',
            },
            {
              label: 'Endpoints',
              to: 'https://docs.otc.t-systems.com/regions-and-endpoints/index.html',
            },
            {
              label: 'Status Dashboard',
              to: 'https://status.otc-service.com/',
            },
          ],
        },
      ],
      copyright: `© T-Systems International GmbH ${new Date().getFullYear()}`,
    },
    prism: {
      additionalLanguages: ['powershell', 'bash'],
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
    docs: {
      sidebar: {
        hideable: false,
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
            host: process.env.REACT_APP_TYPESENSE_HOST,
            port: process.env.REACT_APP_TYPESENSE_PORT,
            protocol: process.env.REACT_APP_TYPESENSE_PROTOCOL,
          },
        ],
        apiKey: process.env.REACT_APP_TYPESENSE_API_KEY,
      },

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {},
      searchPagePath: false,

      // Optional
      contextualSearch: true,
    },
    zooming: {
      selector: '.markdown img',
      delay: 500,
      background: {
        light: 'rgba(101,108,133,0.8)',
        dark: 'rgba(9,10,17,0.8)'
      },
      options: {
        // See the docs of zooming for all available options: https://github.com/francoischalifour/medium-zoom#usage
      }
    },
  } satisfies Preset.ThemeConfig,

  customFields: {
    version: process.env.REACT_APP_VERSION,
  },

  plugins: [
    'docusaurus-plugin-zooming',
    [
      '@dipakparmar/docusaurus-plugin-umami',
      {
        websiteID: process.env.UMAMI_WEBSITE_ID, // Required
        analyticsDomain: process.env.UMAMI_ANALYTICS_DOMAIN, // Required
        dataHostURL: process.env.UMAMI_DATAHOST_URL, // Optional
        dataAutoTrack: true, // Optional
        dataDoNotTrack: true, // Optional
        dataCache: true, // Optional
        dataDomains: process.env.UMAMI_DATA_DOMAIN, // comma separated list of domains, *Recommended*
      } as UmamiOptions,
    ],
  ],
};

export default config;