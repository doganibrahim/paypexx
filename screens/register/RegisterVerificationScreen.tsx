import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const RegisterVerificationScreen = ({navigation}) => {
    const goChoosePassword = () => {
        navigation.navigate('ChoosePassword');
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 50, justifyContent: 'flex-start'}}>
                <View style={{marginBottom: 30}}>
                    <Text style={[styles.boldText, styles.centerText, {fontSize: 22, lineHeight: 30}]}>E-posta adresinizi doğrulayın</Text>
                </View>

                <View style={{marginBottom: 40}}>
                    <CustomInput logo={require('../../assets/images/icons/key.png')} placeholder="6 haneli kod" value={undefined} onChangeText={undefined} />
                    <Text style={[styles.mediumText, {fontSize: 12, lineHeight: 22, textAlign: 'center'}]}>E-posta adresinize gönderilen 6 haneli kodu girin.</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <CustomButton title="Devam Et" width={"100%"} height={55} onPress={goChoosePassword} icon={undefined} />
                </View>

                <View style={{marginBottom: 5}}>
                <CustomButton title="Tekrar kod iste" width={"100%"} height={55} backgroundColor="#1B93D0" onPress={() => { } } icon={undefined} />
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
    lightText: {
        fontWeight: "300",
        fontFamily: "Inter-Light",
    },
    mediumText: {
        fontWeight: "500",
        fontFamily: "Inter-Medium",
    }
});

export default RegisterVerificationScreen;
