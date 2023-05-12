// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seal文档',
  tagline: 'Dinosaurs are cool',
  url: 'https://seal-io.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seal-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current:{
              label: 'v0.1',
              banner: 'none',
            },
          },
          docLayoutComponent: "@theme/DocPage",
          /* Derived from docusaurus-theme-openapi */
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Seal Logo',
          src: 'img/seal-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: '用户手册',
          },
          {
            to: "/category/openapi",
            label: "API文档",
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Seal Software (Shenzhen) Co., Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          openapi: {
            specPath: "openapi/v1.json",
            outputDir: "docs/openapi",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "info",
            },
          }
        }
      }
    ],
  ],

  /* Allows use of @theme/ApiItem and other components */
  themes: ["docusaurus-theme-openapi-docs"], 
};

module.exports = config;
