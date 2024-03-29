const {editUrl} = require('../appConfig');

const getBlog = () => {
  return {
    routeBasePath: 'more-of-technical-blogs',
    archiveBasePath: 'archive',
    showReadingTime: true,
    editUrl,
    blogTitle: 'Tus blog',
    blogDescription: 'A collection of blog written by Tu',
    blogSidebarTitle: 'All my blogs',
    postsPerPage: 'ALL',
    blogSidebarCount: 'ALL',
  };
};

module.exports = {
  getBlog,
};
