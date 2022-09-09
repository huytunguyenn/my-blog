const {
  stackOverflowInfo,
  discordInfo,
  twitterInfo,
  gitHubInfo
} = require('../appConfig');


const creatFooter = () => {
  return {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Tutorial',
            to: '/docs/learn/intro',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: stackOverflowInfo.label,
            href: stackOverflowInfo.url,
          },
          {
            label: discordInfo.label,
            href: discordInfo.url,
          },
          {
            label: twitterInfo.label,
            href: twitterInfo.url,
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: gitHubInfo.label,
            href: gitHubInfo.url,
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  };
}

module.exports = { creatFooter };
