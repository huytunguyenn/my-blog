const {editUrl} = require('../appConfig');

const getBlog = () => {
  return {
    // routeBasePath: '/', // Serve the docs at the site's root
    archiveBasePath: 'archive',
    showReadingTime: true,
    editUrl,
    blogTitle: 'Tus blog',
    blogDescription: 'A collection of blog written by Tu',
    blogSidebarTitle: 'All my thoughts',
    postsPerPage: 'ALL',
    blogSidebarCount: 'ALL',
  };
};

module.exports = {
  getBlog,
};
