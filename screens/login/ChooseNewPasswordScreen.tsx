import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';

const ChooseNewPasswordScreen = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, marginTop: 50, justifyContent: 'flex-start'}}>
                <View style={{marginBottom: 40}}>
                    <Text style={[styles.boldText, styles.centerText, {fontSize: 24, lineHeight: 30}]}>Yeni bir şifre oluşturun</Text>
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Şifrenizi girin</Text>
                    <CustomInput 
                        logo={require('../../assets/images/icons/lock.png')} 
                        placeholder="Yeni şifrenizi girin"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                <View style={{marginBottom: 20}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Şifrenizi tekrar girin</Text>
                    <CustomInput 
                        logo={require('../../assets/images/icons/lock.png')} 
                        placeholder="Yeni şifrenizi girin"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    <CustomButton 
                        title="Şifreyi yenile" 
                        width={"100%"} 
                        height={55} 
                        onPress={() => {}}
                        icon={null}  
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    boldText: {
        fontWeight: '700',
    },
    mediumText: {
        fontWeight: '500',
    },
    centerText: {
        textAlign: 'center',
    }
})

export default ChooseNewPasswordScreen;