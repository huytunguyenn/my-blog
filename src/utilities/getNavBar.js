const createNavBar = () => {
  return {
    hideOnScroll: true,
    title: 'huytu',
    logo: {
      alt: '',
      src: 'img/logo.svg',
      srcDark: 'img/logo.svg',
      width: 32,
      height: 32,
      href: '/',
    },
    items: [
      {
        /**
         * type doc link: dẫn tới 1 docId cụ thể
         */
        type: 'doc',
        docId: 'learn-intro', // required - vì type là doc nên id sẽ ở docs/learn-intro.mdx
        label: 'Learn',
        position: 'left',
      },
      {
        /**
         * type: 'default' - Navbar link: regular link, đi tới link bth
         */
        to: '/blog', // either `to` or `href`. href: 'https://www.facebook.com'
        label: 'Blog', // either `label` or `html`. html: '<b>Introduction</b>'
        position: 'left'
      },
      {
        /**
         * link a navbar item to the first document link of a given sidebar
         * -> don't have to hardcode a doc ID
         * -> use this if your sidebar is updated often & order is not stable
         */
        type: 'docSidebar',
        sidebarId: 'myself', // in sidebars.js
        /** sidebars.js
         * module.exports = {
         *   ....
         *   myself: [
         *     'first-doc', // The navbar item will be linking to this doc
         *     'sec-doc'
         *     {
         *       type: 'autogenerated',
         *       dirName: 'myself',
         *     }
         *   ]
         * }
         */
        label: 'Me 💩',
        position: 'left',
      },
      {
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right',
      },
      {
        /**
         * internationalization aka i18n
         */
        type: 'localeDropdown',
        dropdownItemsAfter: [
          {
            to: 'https://my-site.com/help-us-translate',
            label: 'Help us translate',
          },
        ],
        position: 'right',
      },
      // {
      //   /**
      //    * custom HTML
      //    */
      //   type: 'html',
      //   position: 'right',
      //   value: '<button>Give feedback</button>',
      // },
      // {
      //   /**
      //    * dropdown items only accept the following "link-like" item types:
      //    */
      //   type: 'dropdown',
      //   label: 'Dropdown',
      //   items: [
      //     {
      //       label: 'Facebook',
      //       href: 'https://www.facebook.com',
      //     },
      //     {
      //       type: 'doc', // "link-like" item types
      //       label: 'Social',
      //       docId: 'social',
      //     },
      //   ],
      //   position: 'left',
      // },
    ],
  };
}

module.exports = { createNavBar };
