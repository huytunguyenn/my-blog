class AppConfiguration {
  constructor() {
    // footer information
    this.gitHubInfo = {
      label: 'GitHub',
      name: 'huytunguyenn',
      url: 'https://github.com/huytunguyenn',
    };
    this.stackOverflowInfo = {
      label: 'Stack Overflow',
      url: 'https://stackoverflow.com/questions/tagged/docusaurus',
    };
    this.discordInfo = {
      label: 'Discord',
      url: 'https://discordapp.com/invite/docusaurus',
    };
    this.twitterInfo = {
      label: 'Twitter',
      url: 'https://twitter.com/docusaurus',
    };
    this.editUrl = 'https://github.com/huytunguyenn/my-blog/tree/main';
  }
}

const appConfiguration = new AppConfiguration();
module.exports = appConfiguration;
