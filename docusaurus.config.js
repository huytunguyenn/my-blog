// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { createNavBar } = require('./src/utilities/getNavBar');
const { creatFooter } = require('./src/utilities/getFooter');
const { getDocs } = require('./src/utilities/getDocs');
const { getBlog } = require('./src/utilities/getBlog');
const { getPrism } = require('./src/utilities/getPrism');
const { getLocale } = require('./src/utilities/getLocalization');
const { getAnnouncementBar } = require('./src/utilities/getAnnouncmentBar');
const { getTheme } = require('./src/utilities/getTheme');

const docs = getDocs();
const blog = getBlog();
const i18n = getLocale();
const theme = getTheme({});
const announcementBar = getAnnouncementBar();
const footer = creatFooter();
const navbar = createNavBar();
const prism = getPrism();
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
  organizationName: 'huytunguyenn',
  projectName: 'my-blog',
  i18n,
  staticDirectories: [ 'static', ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs,
        blog,
        theme,
      }),
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar,
      announcementBar,
      footer,
      prism,
    }),
};

module.exports = config;
