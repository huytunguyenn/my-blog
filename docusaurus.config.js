// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { getLocale } = require('./src/utilities/getLocalization');
const { getDocs } = require('./src/utilities/getDocs');
const { getBlog } = require('./src/utilities/getBlog');
const { getTheme } = require('./src/utilities/getTheme');
const { createNavBar } = require('./src/utilities/getNavBar');
const { getAnnouncementBar } = require('./src/utilities/getAnnouncmentBar');
const { creatFooter } = require('./src/utilities/getFooter');
const { getPrism } = require('./src/utilities/getPrism');

const i18n = getLocale();
const docs = getDocs();
const blog = getBlog();
const theme = getTheme({});
const navbar = createNavBar();
const announcementBar = getAnnouncementBar();
const footer = creatFooter();
const prism = getPrism();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chào mừng',
  tagline: 'hế nhô',
  url: 'https://huytunguyenn.github.io',
  baseUrl: '/my-blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'huytunguyenn',
  trailingSlash: false, // read more: https://github.com/slorber/trailing-slash-guide
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
