import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileIcon = () => {
    const navigation = useNavigation();
    
    const goProfileScreen = () => {
        navigation.navigate('Profile' as never);
    }

    return (
        <TouchableOpacity onPress={goProfileScreen}>
            <Image source={require('../assets/images/icons/profile/profileCircle.png')} style={{width: 50, height: 50}} />
        </TouchableOpacity>
    );
};

export default ProfileIcon;