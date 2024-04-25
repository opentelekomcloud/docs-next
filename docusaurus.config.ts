import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Architecture Center',
  tagline: 'Best Practices & Blueprints',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'akyriako', // Usually your GitHub org/user name.
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

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
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Best Practices',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Blueprints',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Cloud Adoption Framework',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/akyriako/docs-next',
          label: 'GitHub',
          position: 'right',
        },
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
