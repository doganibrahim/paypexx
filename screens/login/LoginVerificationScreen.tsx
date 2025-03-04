import { View, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';

const LoginVerification = ({navigation}) => {
    const goHomeScreen = () => {
        navigation.navigate('Home');
    }

    const [code, setCode] = useState<string>('');
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center'}}>
                <View style={{marginBottom: 30}}>
                    <Text style={[styles.boldText, styles.centerText, {fontSize: 22, lineHeight: 30}]}>E-posta adresinizi doğrulayın</Text>
                </View>

                <View style={{marginBottom: 40}}>
                    <CustomInput 
                        logo={require('../../assets/images/icons/key.png')} 
                        placeholder="6 haneli kod"
                        value={code}
                        onChangeText={setCode}
                        maxLength={6}
                    />
                    <Text style={[styles.mediumText, {fontSize: 12, lineHeight: 22, textAlign: 'center'}]}>E-posta adresinize gönderilen 6 haneli kodu girin.</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <CustomButton title="Devam Et" width={"100%"} height={55} onPress={goHomeScreen} 
                        icon={null}
                    />
                </View>

                <View style={{marginBottom: 5}}>
                <CustomButton title="Tekrar kod iste" width={"100%"} height={55} backgroundColor="#1B93D0" onPress={() => {}} 
                    icon={null}
                />
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

export default LoginVerification;