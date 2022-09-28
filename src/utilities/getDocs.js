const math = require('remark-math');
const katex = require('rehype-katex');

const { editUrl } = require('../appConfig');

const getDocs = () => {
  return {
    // routeBasePath: '/', // Serve the docs at the site's root
    path: 'docs',
    sidebarPath: require.resolve('../../sidebars.js'),
    // sidebarCollapsible: false,
    // sidebarCollapsed: true,
    editUrl,
    remarkPlugins: [math],
    rehypePlugins: [katex],
  };
};

module.exports = {
  getDocs,
};
