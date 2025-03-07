import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface BottomMenuProps {
    onTabPress: (tab: 'home' | 'transfer') => void;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BottomMenu: React.FC<BottomMenuProps> = ({ onTabPress }) => {
    const navigation = useNavigation<NavigationProp>();

    const handleTransferPress = () => {
        onTabPress('transfer');
        navigation.navigate('NewTransaction');
    };

    const handleHomePress = () => {
        onTabPress('home');
        navigation.navigate('Home');
    };

    return (
        <View style={styles.bottomMenu}>
            <TouchableOpacity 
                style={styles.menuItem}
                onPress={handleHomePress}
            >
                <Image 
                    source={require('../assets/images/icons/home/home.png')} 
                    style={styles.menuIcon} 
                />
                <Text style={styles.menuText}>
                    Anasayfa
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.menuItem, styles.transferButton]}
                onPress={handleTransferPress}
            >
                <Image 
                    source={require('../assets/images/icons/home/navigation.png')} 
                    style={styles.menuIcon} 
                />
                <Text style={styles.transferText}>
                    Transfer Yap
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: scale(16),
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginHorizontal: scale(-16),
        marginBottom: scale(10),
        paddingHorizontal: scale(16),
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: scale(10),
        borderRadius: scale(10),
        width: scale(125),
        height: scale(55),
        backgroundColor: '#fff'
    },
    transferButton: {
        backgroundColor: '#57B03C'
    },
    menuIcon: {
        width: scale(20),
        height: scale(20),
        marginBottom: scale(2),
    },
    menuText: {
        fontSize: scale(12),
        color: '#57B03C'
    },
    transferText: {
        fontSize: scale(12),
        color: '#fff'
    }
});

export default BottomMenu;
