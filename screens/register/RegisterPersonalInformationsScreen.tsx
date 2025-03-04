import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { Country } from '../../constants/phoneCodes';

type Props = {
    route: RouteProp<RootStackParamList, 'RegisterPersonalInformations'>;
    navigation: any;
};

const RegisterPersonalInformationsScreen = ({ route, navigation }: Props) => {
    const goRegisterLocationInformations = () => {
        navigation.navigate('RegisterLocationInformations');
    }

    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<{
        flag: string;
        code: string;
        country?: string;
    }>({
        flag: require('../../assets/images/flags/tr.png'),
        code: '+90',
        country: 'Turkey'
    });
    const [birthDate, setBirthDate] = useState('');

    React.useEffect(() => {
        if (route.params?.selectedCountry) {
            const country = route.params.selectedCountry;
            setSelectedCountry({
                flag: country.flag,
                code: country.phoneCode,
                country: country.country
            });
        }
    }, [route.params?.selectedCountry]);

    const handleCountryPress = () => {
        navigation.navigate('PhoneCode');
    }

    const formatBirthDate = (text: string) => {
        // Sadece rakamları al
        const numbers = text.replace(/[^\d]/g, '');
        
        // Formatı uygula (GG/AA/YYYY)
        let formatted = '';
        if (numbers.length > 0) formatted += numbers.substring(0, 2);
        if (numbers.length > 2) formatted += '/' + numbers.substring(2, 4);
        if (numbers.length > 4) formatted += '/' + numbers.substring(4, 8);
        
        return formatted;
    };

    const handleBirthDateChange = (text: string) => {
        const formatted = formatBirthDate(text);
        setBirthDate(formatted);
    };

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
                    <CustomInput 
                        logo={undefined} 
                        placeholder="GG/AA/YYYY" 
                        value={birthDate}
                        onChangeText={handleBirthDateChange}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                </View>

                <View style={{marginBottom: 20}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Telefon Numaranız</Text>
                    <View style={{
                        width: '100%',
                        height: 55,
                        backgroundColor: '#f2f2f2',
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: '#d1d1d1',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 15
                    }}>
                        <TouchableOpacity 
                            onPress={handleCountryPress}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 10,
                                borderRightWidth: 1,
                                borderRightColor: '#d1d1d1',
                                marginRight: 10
                            }}
                        >
                            <Image 
                                source={selectedCountry.flag} 
                                style={{width: 24, height: 24, marginRight: 8, borderRadius: 5}} 
                            />
                            <Image source={require('../../assets/images/icons/dropDown.png')} style={{width: 24, height: 24, marginRight: 8}} />
                            <Text style={[styles.mediumText, {fontSize: 16}]}>{selectedCountry.code}</Text>
                        </TouchableOpacity>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            placeholder="Telefon numaranız"
                            placeholderTextColor="#999"
                            style={[styles.mediumText, {
                                flex: 1,
                                fontSize: 16,
                                color: '#000',
                                height: '100%',
                                padding: 0
                            }]}
                            keyboardType="phone-pad"
                        />
                    </View>
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
