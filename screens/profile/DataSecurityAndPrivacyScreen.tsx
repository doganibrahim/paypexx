import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const DataSecurityAndPrivacyScreen = ({navigation}) => {
    const menuItems: {
        icon: any;
        title: string;
        hasArrow?: boolean;
        route: string;
    }[] = [
        { icon: require('../../assets/images/icons/profile/book.png'), title: 'Kullanıcı Sözleşmesi', hasArrow: true, route: ''},
        { icon: require('../../assets/images/icons/profile/shieldSecurity.png'), title: 'Gizlilik ve Güvenlik Politikası', hasArrow: true, route: '' },
        { icon: require('../../assets/images/icons/profile/openBook.png'), title: 'Kullanım Şartları', hasArrow: true, route:'' },
    ];

    return (
        <View style={styles.container}>
            {menuItems.map((item, index) => (
                <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => navigation.navigate(item.route)}>
                    <View style={styles.menuItemLeft}>
                        <Image source={item.icon} style={{width: 24, height: 24}} />
                        <Text style={styles.menuItemText}>{item.title}</Text>
                    </View>
                    {item.hasArrow && (
                        <Ionicons name="chevron-forward" size={24} color="#000" />
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    profileInfo: {
        padding: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
    },
    memberNumber: {
        fontSize: 14,
        color: '#000',
        marginTop: 0,
    },
    copyBtn: {
        backgroundColor: '#57B03C',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 15,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    copyBtnText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    },
    menuList: {
        marginTop: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        marginLeft: 12,
        fontSize: 16,
        color: '#333',
    }
});

export default DataSecurityAndPrivacyScreen;
