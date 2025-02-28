import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor = '#57B03C', width, height, textColor = '#FFF', icon, textSize = 18 }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor, width: width, height: height }]}
            onPress={onPress}
        >
            <View style={styles.buttonContent}>
                {icon && <Image source={icon} style={styles.icon} />}
                <Text style={[styles.buttonText, {color: textColor, fontSize: textSize}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        flexShrink: 0,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    buttonText: {
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    }
});

export default CustomButton;