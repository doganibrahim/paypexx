import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const RequestSupport = ({navigation}) => {
    const menuItems: {
        icon: any;
        title: string;
        hasArrow?: boolean;
        route: string;
    }[] = [
        { icon: require('../../assets/images/icons/profile/message.png'), title: 'Canlı Destek', hasArrow: true, route: ''},
        { icon: require('../../assets/images/icons/profile/atSign.png'), title: 'E-Posta', hasArrow: true, route: '' },
        { icon: require('../../assets/images/icons/profile/messageQuestion.png'), title: 'Sıkça Sorulan Sorular', hasArrow: true, route: '' },
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
        fontSize: 18,
        color: '#000',
    }
});

export default RequestSupport;