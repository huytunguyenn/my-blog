
const createNavBar = () => {
  return {
    title: 'Tu\'s Site',
    logo: {
      alt: 'Tu Site Logo',
      src: 'img/logo.svg',
    },
    items: [
      // LEFT
      // Self introduction
      {
        type: 'doc',
        position: 'left',
        docId: 'intro',
        label: 'Myself',
      },
      // Tutorial
      {
        type: 'docSidebar',
        position: 'left',
        sidebarId: 'tutorial',
        label: 'Tutorial',
      },
      // Random blogs
      {
        to: '/blog',
        label: 'Blog',
        position: 'left'
      },
      // RIGHT
      // GitHub
      {
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right',
      },
      // Languages
      {
        type: 'localeDropdown',
        position: 'right',
      },
    ],
  };
}

module.exports = { createNavBar };
