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
const {editUrl} = require('./src/appConfig');

// CHANGE COLOR HERE
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
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      // Basic usage.
      'classic',
      // With options object (babel style)
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs,
        blog,
        theme,
      },
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
  // https://docusaurus.io/docs/api/themes/configuration
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    docs: {
      sidebar: {
        hideable: true
        // autoCollapseCategories: true,
      }
    },
    navbar,
    // announcementBar,
    footer,
    prism,
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog', // Required for any multi-instance plugin
        routeBasePath: 'more-of-my-thoughts', // URL route for the blog section of your site. *DO NOT* include a trailing slash.
        path: './blog-thoughts', // Path to data on filesystem relative to site dir.
        showReadingTime: false,
        editUrl,
        blogTitle: 'Tus\' thoughts',
        postsPerPage: 'ALL',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'All my blogs (but it\'s more personal)',
      },
    ],
  ],
};

export default config;
