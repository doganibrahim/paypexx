import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ChoosePasswordScreen = ({navigation}) => {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const goRegisterPersonalInformations = () => {
        if (password.length < 6) {
            setError('Şifreniz en az 6 karakter olmalıdır.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Şifreler eşleşmiyor.');
            return;
        }
        navigation.navigate('RegisterPersonalInformations');
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 50, justifyContent: 'flex-start'}}>
            <View style={{marginBottom: 40}}>
                    <Text style={[styles.boldText, styles.centerText, {fontSize: 24, lineHeight: 30}]}>Yeni bir şifre oluşturun ve devam edin</Text>
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

                {error ? <Text style={[styles.lightText, {color: 'red', marginBottom: 10, textAlign: 'center'}]}>{error}</Text> : null}

                <View style={{marginBottom: 10}}>
                    <CustomButton title="Devam et" width={"100%"} height={55} onPress={goRegisterPersonalInformations} icon={undefined} />
                </View>

                <View>
                    <Text style={[styles.lightText, {fontSize: 12, lineHeight: 16, marginHorizontal: 10, textAlign: 'center'}]}>Devam butonuna basarak, <Text style={[styles.boldText, {color: '#57B03C'}]}>Hizmet Şartları</Text> ve <Text style={[styles.boldText, {color: '#57B03C'}]}>Gizlilik Politikası</Text>'nı okuduğunuzu ve kabul etmiş olduğunuzu teyit etmiş olursunuz.</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    centerText: {
        textAlign: "center"
    },
    rightText: {
        textAlign: "right"
    },
    boldText: {
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
    },
    mediumText: {
        fontWeight: "500",
        fontFamily: "Inter-Medium",
    },
    lightText: {
        fontWeight: "300",
        fontFamily: "Inter-Light",
    }
});

export default ChoosePasswordScreen;
