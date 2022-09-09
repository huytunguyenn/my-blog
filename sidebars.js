
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    /**
     * shortcut for:
     * {
     *   type: 'doc',
     *   id: 'learn-intro' // docs/learn-intro.mdx
     *   label: ''
     * }
     */
    'learn-intro',
    {
      /**
       * create hierarchy of sidebar items - cái danh sách sổ ra
       */
      type: 'category',
      label: 'At School',
      link: {
        /**
         * tự tạo ra page index hiển thị mọi direct children của category đó - như cái mục lục
         */
        type: 'generated-index',
        title: 'In @ HCMUS',
        description: 'Things I learnt at my HCMUS 💕',
        // slug: '/not-category/not-name', // default: /category/[categoryName] - /category/@
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        /**
         * bên trong items có thể là 1 type category nữa - sổ nhiều cấp
         */
        'learn/school/hcmus',
        {
          type: 'category',
          label: 'Năm 1',
          items: [
            'learn/school/freshman',
            'learn/school/junior',
          ],
        },
        {
          type: 'category',
          label: 'năm 2',
          items: [
            'learn/school/sophomore',
            'learn/school/senior',
          ],
        },
      ],
    },
  ],
  // dưới này là custom sidebar để navbar reference tới (getNavBar.js)
  myself: [
    'me-intro', // docs/me-intro
    {
      /**
       * auto tạo ra:
       * '0-about-me'
       * '1-who-am-i'
       * ...
       */
      type: 'autogenerated',
      dirName: 'myself', // docs/myself
    },
    {
      /**
       * internal link
       */
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      /**
       * external link
       */
      type: 'link',
      label: 'Facebook',
      href: 'https://facebook.com',
    },
  ],
};

module.exports = sidebars;
