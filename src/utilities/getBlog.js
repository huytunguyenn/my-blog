const {editUrl} = require('../appConfig');

const getBlog = () => {
  return {
    // routeBasePath: '/', // Serve the docs at the site's root
    showReadingTime: true,
    editUrl,
    blogSidebarTitle: 'All my posts',
    blogSidebarCount: 'ALL',
  };
};

module.exports = {
  getBlog,
};
