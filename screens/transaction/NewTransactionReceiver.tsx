import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BottomMenu from "../../components/BottomMenu";
import { useCurrency } from '../../context/CurrencyContext';

const NewTransactionReceiver = ({ navigation }) => {
    const { getTargetRoute } = useCurrency();

    const menuItems: {
        icon: any;
        title: string;
        hasArrow?: boolean;
    }[] = [
        { 
            icon: require('../../assets/images/icons/transaction/profile.png'), 
            title: 'Kendim için', 
            hasArrow: true
        },
        { 
            icon: require('../../assets/images/icons/transaction/profile2user.png'), 
            title: 'Başkası için', 
            hasArrow: true
        },
        { 
            icon: require('../../assets/images/icons/transaction/buildings.png'), 
            title: 'Şirket veya organizasyon için', 
            hasArrow: true
        },
    ];

    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title}>Bir alıcı ekleyin</Text>
            <View style={styles.menuList}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.menuItem}
                        onPress={() => navigation.navigate(getTargetRoute())}
                    >
                        <View style={styles.menuItemLeft}>
                            <Image source={item.icon} style={styles.icon} />
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </View>
                        {item.hasArrow && (
                            <Ionicons name="chevron-forward" size={24} color="#000" />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
            </View>
            <BottomMenu onTabPress={() => navigation.navigate('NewTransactionReceiver')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    menuList: {
        marginTop: 8,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 16,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        marginLeft: 16,
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    icon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 4,
        paddingLeft: 8,
    },
});

export default NewTransactionReceiver;