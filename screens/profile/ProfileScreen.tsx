import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SwitchToggle from "react-native-switch-toggle";

const ProfileScreen = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const userName = 'Eren Demir';
    const userNumber = 'PX000301';

    const menuItems: {
        icon: any;
        title: string;
        hasSwitch?: boolean;
        hasArrow?: boolean;
        route: string;
    }[] = [
        { icon: require('../../assets/images/icons/profile/notification-bell.png'), title: 'Bildirimler', hasSwitch: true, route:'' },
        { icon: require('../../assets/images/icons/profile/settings.png'), title: 'Ayarlar', hasArrow: true, route: 'Settings'},
        { icon: require('../../assets/images/icons/profile/lock.png'), title: 'Şifre Sıfırlama', hasArrow: true, route: 'ChangePassword' },
        { icon: require('../../assets/images/icons/profile/shield.png'), title: 'Veri Güvenliği ve Gizlilik', hasArrow: true, route: 'DataSecurityAndPrivacy' },
        { icon: require('../../assets/images/icons/profile/tick-circle.png'), title: 'Hesabımı Doğrula', hasArrow: true, route: 'AccountVerify' },
        { icon: require('../../assets/images/icons/profile/credit-card.png'), title: 'Kayıtlı Kartlarım', hasArrow: true, route: 'SavedCards' },
        { icon: require('../../assets/images/icons/profile/help-circle.png'), title: 'Destek Talep Et', hasArrow: true, route: 'RequestSupport' },
        { icon: require('../../assets/images/icons/profile/user-plus.png'), title: 'Arkadaşını Davet Et', hasArrow: true, route: '' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <Text style={styles.name}>{userName}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'column', alignItems: 'flex-start', marginTop: 5}}>
                <Text style={styles.memberNumber}>Müşteri Numarası:</Text>
                <Text style={styles.memberNumber}>{userNumber}</Text>
                </View>
                <View style={styles.copyBtn}>
                    <Text style={styles.copyBtnText}>Kopyala</Text>
                </View>
                </View>
            </View>

            <View style={styles.menuList}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.menuItem}
                        onPress={() => navigation.navigate(item.route)}
                    >
                        <View style={styles.menuItemLeft}>
                            <Image source={item.icon} style={{width: 24, height: 24}} />
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </View>
                        {item.hasSwitch ? (
                            <SwitchToggle
                              switchOn={notificationsEnabled}
                              onPress={() => setNotificationsEnabled(!notificationsEnabled)}
                              backgroundColorOn='#57B03C'
                              backgroundColorOff='#767577'
                              circleColorOff='#fff'
                              containerStyle={{
                                width: 40,
                                height: 25,
                                borderRadius: 25,
                                padding: 3,
                              }}
                              circleStyle={{
                                margin: -4,
                                width: 23,
                                height: 23,
                                borderRadius: 20,
                              }}
                            />
                        ) : item.hasArrow ? (
                            <Ionicons name="chevron-forward" size={24} color="#000" />
                        ) : null}
                    </TouchableOpacity>
                ))}
            </View>
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

export default ProfileScreen;