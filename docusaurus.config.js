// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { createNavBar } = require('./src/utilities/getNavBar');
const { creatFooter } = require('./src/utilities/getFooter');
const { getThemes } = require('./src/utilities/getThemes');
const { getLocale } = require('./src/utilities/getLocalization');

const i18n = getLocale();
const footer = creatFooter();
const navbar = createNavBar();
const prism = getThemes();
const baseUrl = process.env.BASE_URL ?? '/';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chào mừng',
  tagline: 'hế nhô',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  i18n,
  staticDirectories: [
    'static',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/', // Serve the docs at the site's root
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // sidebarCollapsible: false,
          // sidebarCollapsed: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo. Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: 'All my posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar,
      announcementBar: {
        id: 'support_us',
        content:
          'I am currently looking for jobs, check out <a target="_blank" rel="noopener noreferrer" href="#">my CV</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      footer,
      prism,
    }),
};

module.exports = config;
