const getTheme = ({ type }) => {
    switch (type) {
        case 'purple':
            return {
                customCss: require.resolve('../css/purple.css'),
            }
            break;
        default:
            return {
                customCss: require.resolve('../css/green.css'),
            };
    }
}

module.exports = { getTheme };
