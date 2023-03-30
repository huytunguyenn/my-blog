const {
  stackOverflowInfo,
  discordInfo,
  twitterInfo,
  gitHubInfo,
  quote,
} = require('../appConfig');

const creatFooter = () => {
  return {
    // style: 'dark',
    // links: [
    //   {
    //     title: 'Community',
    //     items: [
    //       {
    //         label: stackOverflowInfo.label,
    //         href: stackOverflowInfo.url,
    //       },
    //       {
    //         label: discordInfo.label,
    //         href: discordInfo.url,
    //       },
    //       {
    //         label: twitterInfo.label,
    //         href: twitterInfo.url,
    //       },
    //     ],
    //   },
    //   {
    //     title: 'More',
    //     items: [
    //       {
    //         label: 'Blog',
    //         to: '/more-of-technical-blogs',
    //       },
    //       {
    //         label: gitHubInfo.label,
    //         href: gitHubInfo.url,
    //       },
    //     ],
    //   },
    // ],
    copyright: quote,
  };
};

module.exports = {
  creatFooter,
};
