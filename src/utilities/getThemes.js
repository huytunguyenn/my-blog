const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const getThemes = () => {
  return {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  };
}

module.exports = { getThemes };
