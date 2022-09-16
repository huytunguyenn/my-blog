const {editUrl} = require('../appConfig');

const getDocs = () => {
  return {
    // routeBasePath: '/', // Serve the docs at the site's root
    path: 'docs',
    sidebarPath: require.resolve('../../sidebars.js'),
    // sidebarCollapsible: false,
    // sidebarCollapsed: true,
    editUrl,
  };
};

module.exports = {
  getDocs,
};
