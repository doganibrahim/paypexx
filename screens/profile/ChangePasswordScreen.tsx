import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ChangePasswordScreen = ({navigation}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
            // Şifre alanları boş olamaz uyarısı eklenebilir
            return;
        }

        if (newPassword !== confirmPassword) {
            // Yeni şifreler eşleşmiyor uyarısı eklenebilir
            return;
        }

        console.log('Şifre değiştirme işlemi:', { oldPassword, newPassword });
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 25, justifyContent: 'flex-start', gap: 10}}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Eski Şifre</Text>
                    <CustomInput 
                        logo={require('../../assets/images/icons/lock.png')} 
                        placeholder="Eski şifrenizi girin"
                        width="90%"
                        logoWidthandHeight={20}
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Yeni Şifre</Text>
                    <CustomInput 
                        logo={require('../../assets/images/icons/lock.png')} 
                        placeholder="Yeni şifrenizi girin"
                        width="90%"
                        logoWidthandHeight={20}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={[styles.inputContainer, {marginBottom: 20}]}>
                    <Text style={styles.label}>Yeni Şifre Tekrar</Text>
                    <CustomInput 
                        logo={require('../../assets/images/icons/lock.png')} 
                        placeholder="Yeni şifrenizi tekrar girin"
                        width="90%"
                        logoWidthandHeight={20}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <CustomButton 
                    title="Kaydet" 
                    width="100%" 
                    height={50} 
                    onPress={handleSave}
                    icon={undefined}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    inputContainer: {
        gap: 5,
    },
    input: {
        height: 40,
        backgroundColor: '#f2f2f2',
    },
    label: {
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 5,
    }
})
export default ChangePasswordScreen;