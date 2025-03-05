import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const Input = ({ logo, placeholder, value, onChangeText, logoWidthandHeight = 24, ...props }) => {
    return (
        <View style={styles.container}>
            {logo && (
                <Image
                    source={logo}
                    style={[styles.logo, {width: logoWidthandHeight ? logoWidthandHeight : 24, height: logoWidthandHeight ? logoWidthandHeight : 24}]}
                    resizeMode="contain"
                />
            )}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#999"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        paddingHorizontal: 23,
        borderWidth: 1,
        borderColor: "#d1d1d1",
        pointerEvents: 'box-none',
        width: "100%",
    },
    logo: {
        marginRight: 10,
        resizeMode: 'contain',
    },
    input: {
        flex: 1,
        height: 54,
        fontSize: 16,
        lineHeight: 22,
        color: '#000',
    }
});

export default Input;