const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const getPrism = () => {
  return {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
    additionalLanguages: [
      'python',
      'go',
    ],
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
}

module.exports = { getPrism };
