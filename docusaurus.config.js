// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { getLocale } = require('./src/utilities/getLocalization');
const { getDocs } = require('./src/utilities/getDocs');
const { getBlog } = require('./src/utilities/getBlog');
const { getTheme, getMetaDataTheme } = require('./src/utilities/getTheme');
const { createNavBar } = require('./src/utilities/getNavBar');
const { getAnnouncementBar } = require('./src/utilities/getAnnouncmentBar');
const { creatFooter } = require('./src/utilities/getFooter');
const { getPrism } = require('./src/utilities/getPrism');
const { COLOR } = require('./src/constant');

const style = COLOR.PURPLE;
const { favicon, titleDelimiter } = getMetaDataTheme({ style });
const i18n = getLocale();
const docs = getDocs();
const blog = getBlog();
const theme = getTheme({ style });
const navbar = createNavBar({ style });
const announcementBar = getAnnouncementBar();
const footer = creatFooter();
const prism = getPrism();


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'huytu',
  customFields: {},
  url: 'https://huytunguyenn.github.io',
  baseUrl: '/my-blog/',
  organizationName: 'huytunguyenn',
  projectName: 'my-blog',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false, // read more: https://github.com/slorber/trailing-slash-guide
  favicon,
  i18n,
  titleDelimiter,
  staticDirectories: ['static'],
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
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          // autoCollapseCategories: true,
        },
      },
      navbar,
      // announcementBar,
      footer,
      prism,
    }),
};

module.exports = config;