export type Country = {
    country: string;
    phoneCode: string;
    flag: any;
}

const countries: Country[] = [
    {
        country: 'Almanya',
        phoneCode: '+49',
        flag: require('../assets/images/flags/de.png'),
    },
    {
        country: 'Andorra',
        phoneCode: '+376',
        flag: require('../assets/images/flags/ad.png'),
    },
    {
        country: 'Arnavutluk',
        phoneCode: '+355',
        flag: require('../assets/images/flags/al.png'),
    },
    {
        country: 'Avusturya',
        phoneCode: '+43',
        flag: require('../assets/images/flags/at.png'),
    },
    {
        country: 'Azerbaycan',
        phoneCode: '+994',
        flag: require('../assets/images/flags/az.png'),
    },
    {
        country: 'Belçika',
        phoneCode: '+32',
        flag: require('../assets/images/flags/be.png'),
    },
    {
        country: 'Belarus',
        phoneCode: '+375',
        flag: require('../assets/images/flags/by.png'),
    },
    {
        country: 'Bosna-Hersek',
        phoneCode: '+387',
        flag: require('../assets/images/flags/ba.png'),
    },
    {
        country: 'Bulgaristan',
        phoneCode: '+359',
        flag: require('../assets/images/flags/bg.png'),
    },
    {
        country: 'Çek Cumhuriyeti',
        phoneCode: '+420',
        flag: require('../assets/images/flags/cz.png'),
    },
    {
        country: 'Danimarka',
        phoneCode: '+45',
        flag: require('../assets/images/flags/dk.png'),
    },
    {
        country: 'Estonya',
        phoneCode: '+372',
        flag: require('../assets/images/flags/ee.png'),
    },
    {
        country: 'Finlandiya',
        phoneCode: '+358',
        flag: require('../assets/images/flags/fi.png'),
    },
    {
        country: 'Fransa',
        phoneCode: '+33',
        flag: require('../assets/images/flags/fr.png'),
    },
    {
        country: 'Gürcistan',
        phoneCode: '+995',
        flag: require('../assets/images/flags/ge.png'),
    },
    {
        country: 'Hindistan',
        phoneCode: '+91',
        flag: require('../assets/images/flags/in.png'),
    },
    {
        country: 'Hırvatistan',
        phoneCode: '+385',
        flag: require('../assets/images/flags/hr.png'),
    },
    {
        country: 'Hollanda',
        phoneCode: '+31',
        flag: require('../assets/images/flags/nl.png'),
    },
    {
        country: 'İngiltere',
        phoneCode: '+44',
        flag: require('../assets/images/flags/gb.png'),
    },
    {
        country: 'İrlanda',
        phoneCode: '+353',
        flag: require('../assets/images/flags/ie.png'),
    },
    {
        country: 'İspanya',
        phoneCode: '+34',
        flag: require('../assets/images/flags/es.png'),
    },
    {
        country: 'İsveç',
        phoneCode: '+46',
        flag: require('../assets/images/flags/se.png'),
    },
    {
        country: 'İsviçre',
        phoneCode: '+41',
        flag: require('../assets/images/flags/ch.png'),
    },
    {
        country: 'İtalya',
        phoneCode: '+39',
        flag: require('../assets/images/flags/it.png'),
    },
    {
        country: 'İzlanda',
        phoneCode: '+354',
        flag: require('../assets/images/flags/is.png'),
    },
    {
        country: 'Karadağ',
        phoneCode: '+382',
        flag: require('../assets/images/flags/me.png'),
    },
    {
        country: 'Kazakistan',
        phoneCode: '+7',
        flag: require('../assets/images/flags/kz.png'),
    },
    {
        country: 'Letonya',
        phoneCode: '+371',
        flag: require('../assets/images/flags/lv.png'),
    },
    {
        country: 'Lihtenştayn',
        phoneCode: '+423',
        flag: require('../assets/images/flags/li.png'),
    },
    {
        country: 'Litvanya',
        phoneCode: '+370',
        flag: require('../assets/images/flags/lt.png'),
    },
    {
        country: 'Lüksemburg',
        phoneCode: '+352',
        flag: require('../assets/images/flags/lu.png'),
    },
    {
        country: 'Macaristan',
        phoneCode: '+36',
        flag: require('../assets/images/flags/hu.png'),
    },
    {
        country: 'Malta',
        phoneCode: '+356',
        flag: require('../assets/images/flags/mt.png'),
    },
    {
        country: 'Moldova',
        phoneCode: '+373',
        flag: require('../assets/images/flags/md.png'),
    },
    {
        country: 'Monako',
        phoneCode: '+377',
        flag: require('../assets/images/flags/mc.png'),
    },
    {
        country: 'Norveç',
        phoneCode: '+47',
        flag: require('../assets/images/flags/no.png'),
    },
    {
        country: 'Pakistan',
        phoneCode: '+92',
        flag: require('../assets/images/flags/pk.png'),
    },
    {
        country: 'Polonya',
        phoneCode: '+48',
        flag: require('../assets/images/flags/pl.png'),
    },
    {
        country: 'Portekiz',
        phoneCode: '+351',
        flag: require('../assets/images/flags/pt.png'),
    },
    {
        country: 'Romanya',
        phoneCode: '+40',
        flag: require('../assets/images/flags/ro.png'),
    },
    {
        country: 'Rusya',
        phoneCode: '+7',
        flag: require('../assets/images/flags/ru.png'),
    },
    {
        country: 'Sırbistan',
        phoneCode: '+381',
        flag: require('../assets/images/flags/rs.png'),
    },
    {
        country: 'Slovakya',
        phoneCode: '+421',
        flag: require('../assets/images/flags/sk.png'),
    },
    {
        country: 'Slovenya',
        phoneCode: '+386',
        flag: require('../assets/images/flags/si.png'),
    },
    {
        country: 'Tacikistan',
        phoneCode: '+992',
        flag: require('../assets/images/flags/tj.png'),
    },
    {
        country: 'Türkiye',
        phoneCode: '+90',
        flag: require('../assets/images/flags/tr.png'),
    },
    {
        country: 'Türkmenistan',
        phoneCode: '+993',
        flag: require('../assets/images/flags/tm.png'),
    },
    {
        country: 'Ukrayna',
        phoneCode: '+380',
        flag: require('../assets/images/flags/ua.png'),
    },
    {
        country: 'Yunanistan',
        phoneCode: '+30',
        flag: require('../assets/images/flags/gr.png'),
    },
];

export default countries;