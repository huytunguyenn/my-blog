const { COLOR } = require('../constant');

const getTheme = ({style}) => {
  switch (style) {
    case COLOR.PURPLE:
      return {
        customCss: require.resolve(`../css/${style}.css`),
      };
    default:
      return {
        customCss: require.resolve('../css/green.css'),
      };
  }
};

const getMetaDataTheme = ({ style }) => {
  switch (style) {
    case COLOR.PURPLE:
      return {
        favicon: `img/favicon/favicon-${style}.ico`,
        titleDelimiter: '|',
      };
    default:
      return {
        favicon: 'img/favicon/favicon-green.ico',
        titleDelimiter: '|',
      };
  }
};

module.exports = {
  getTheme,
  getMetaDataTheme,
};
