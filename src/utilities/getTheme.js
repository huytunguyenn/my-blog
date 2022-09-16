const getTheme = ({style}) => {
  switch (style) {
    case 'purple':
      return {
        customCss: require.resolve('../css/purple.css'),
      };
      break;
    default:
      return {
        customCss: require.resolve('../css/green.css'),
      };
  }
};

const getMetaDataTheme = () => {};

module.exports = {
  getTheme,
  getMetaDataTheme,
};
