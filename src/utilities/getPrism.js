const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const getPrism = () => {
  return {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  };
}

module.exports = { getPrism };
