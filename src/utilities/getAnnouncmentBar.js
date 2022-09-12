
const getAnnouncementBar = () => {
    return {
        id: 'support_us',
        content:
            'I am currently looking for jobs, check out <a target="_blank" rel="noopener noreferrer" href="#">my CV</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
    };
}

module.exports = { getAnnouncementBar };
