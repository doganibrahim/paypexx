import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import PhoneInput from 'react-native-phone-number-input';

const RegisterPersonalInformationsScreen = ({navigation}) => {
    const goRegisterLocationInformations = () => {
        navigation.navigate('RegisterLocationInformations');
    }

    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneInput = useRef(null);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center'}}>
                <View style={{marginBottom: 40}}>
                    <Text style={[styles.boldText, styles.centerText, {fontSize: 24, lineHeight: 30}]}>Şimdi Kayıt Olun Avantajlardan Yararlanın</Text>
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Adınız</Text>
                    <CustomInput logo={undefined} placeholder="Adınızı girin" value={undefined} onChangeText={undefined} />
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Soyadınız</Text>
                    <CustomInput logo={undefined} placeholder="Soyadınızı girin" value={undefined} onChangeText={undefined} />
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Doğum Tarihiniz</Text>
                    <CustomInput logo={undefined} placeholder="GG.AA.YYYY" value={undefined} onChangeText={undefined} />
                </View>

                <View style={{marginBottom: 20}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Telefon Numaranız</Text>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        defaultCode="TR"
                        layout="first"
                        onChangeText={(text) => {
                            setPhoneNumber(text);
                        }}
                        onChangeCountry={(country) => {
                            const number = phoneNumber.replace(/^\+\d+/, ''); // Mevcut kodu kaldır
                            setPhoneNumber(`+${country.callingCode[0]}${number}`);
                        }}
                        countryPickerProps={{
                            withFilter: true,
                            withFlag: true,
                            withCountryNameButton: true,
                            withAlphaFilter: false,
                            withCallingCode: true,
                            withEmoji: true,
                            containerButtonStyle: {
                                backgroundColor: '#f2f2f2',
                                borderRadius: 15,
                            }
                        }}
                        containerStyle={{
                            width: '100%',
                            borderRadius: 15,
                            backgroundColor: '#f2f2f2',
                            borderWidth: 1,
                            borderColor: '#d1d1d1',
                            height: 55,
                        }}
                        textContainerStyle={{
                            backgroundColor: '#f2f2f2',
                            height: 50,
                            paddingVertical: 0,
                            borderRadius: 15,
                        }}
                        textInputStyle={{
                            height: 50,
                            fontSize: 16,
                        }}
                        placeholder="Telefon numaranız"
                    />
                </View>

                <View>
                    <CustomButton title="Devam et" width={"100%"} height={55} onPress={goRegisterLocationInformations} icon={undefined} />
                </View>
                <View style={{marginBottom: 20}}>
                    <Text style={[styles.lightText, {fontSize: 12, lineHeight: 16, marginHorizontal: 5, textAlign: 'left'}]}>Devam butonuna basarak, <Text style={[styles.boldText, {color: '#57B03C'}]}>Hizmet Şartları</Text> ve <Text style={[styles.boldText, {color: '#57B03C'}]}>Gizlilik Politikası</Text>'nı okuduğunuzu ve kabul etmiş olduğunuzu teyit etmiş olursunuz.</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    centerText: {
        textAlign: "center"
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
        fontWeight: "400",
        fontFamily: "Inter-Regular",
    }
});

export default RegisterPersonalInformationsScreen;
