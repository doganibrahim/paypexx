export const languages = [
    {code: 'TR', name: 'Türkçe', flag: require('../assets/images/flags/tr.png')},
    {code: 'EN', name: 'English', flag: require('../assets/images/flags/en.png')},
    {code: 'FR', name: 'Français', flag: require('../assets/images/flags/fr.png')},
    {code: 'DE', name: 'Deutsch', flag: require('../assets/images/flags/de.png')},
    {code: 'PL', name: 'Polski', flag: require('../assets/images/flags/pl.png')},
    {code: 'RO', name: 'Română', flag: require('../assets/images/flags/ro.png')},
    {code: 'UA', name: 'Українська', flag: require('../assets/images/flags/ua.png')},
];

export const getLanguageFlag = (code) => {
    const language = languages.find(lang => lang.code === code);
    return language ? language.flag : languages[0].flag;
};