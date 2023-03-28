const {copyright, quotes} = require('./footerQuotes');

class AppConfiguration {
  constructor() {
    // footer information
    this.copyright = copyright;
    this.quote = this.getQuotes();
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

  getQuotes = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return `${quote.quote} - ${quote.author}`;
  }
}

const appConfiguration = new AppConfiguration();
module.exports = appConfiguration;
