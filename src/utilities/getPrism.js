// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import {themes as prismThemes} from 'prism-react-renderer';

const getPrism = () => {
  return {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    additionalLanguages: ['java'],
    magicComments: [
      // Remember to extend the default highlight class name as well!
      {
        className: 'theme-code-block-highlighted-line',
        line: 'highlight',
        block: {start: 'highlight-start', end: 'highlight-end'},
      },
      {
        className: 'code-block-highlight-line',
        line: '-highlight',
        block: {start: '-highlight-start', end: '-highlight-end'},
      },
      {
        className: 'code-block-error-line',
        line: '-error',
        block: {start: '-error-start', end: '-error-end'},
      },
    ],
  };
};

module.exports = {
  getPrism,
};
