import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';

const RegisterLocationInformationsScreen = ({navigation}) => {
    const goSelectCountry = () => {
        navigation.navigate('SelectCountry');
    }
    const [selectedCountry, setSelectedCountry] = useState({
        key: 'TR',
        label: 'Türkiye',
        dialCode: '+90',
        flag: '🇹🇷'
    });
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center'}}>
                    <View style={{marginBottom: 20}}>
                        <Text style={[styles.boldText, styles.centerText, {fontSize: 22, lineHeight: 30}]}>Şimdi Kayıt Olun Avantajlardan Yararlanın</Text>
                    </View>

                    <View style={{marginBottom: 10}}>
                        <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Ülke</Text>
                        <TouchableOpacity style={styles.container} onPress={goSelectCountry}>

                        <View style={styles.flagContainer}>
                            <Text style={styles.flag}>{selectedCountry.flag}</Text>
                        </View>
                        <Text style={styles.countryName}>{selectedCountry.label}</Text>
                        <Ionicons name="chevron-down" size={24} color="#666" />
                    </TouchableOpacity>
                    </View>

                    <View style={{marginBottom: 10}}>
                        <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Şehir</Text>
                        <CustomInput logo={undefined} placeholder="Şehir girin" value={undefined} onChangeText={undefined} />
                    </View>

                    <View style={{marginBottom: 10}}>
                        <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Adres</Text>
                        <CustomInput logo={undefined} placeholder="Açık adresinizi girin" value={undefined} onChangeText={undefined} />
                    </View>

                    <View style={{marginBottom: 10}}>
                        <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Ev/Apartman No</Text>
                        <CustomInput logo={undefined} placeholder="Ev/Apartman numaranızı girin" value={undefined} onChangeText={undefined} />
                    </View>

                    <View style={{marginBottom: 10}}>
                        <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Posta Kodu</Text>
                        <CustomInput logo={undefined} placeholder="Posta kodunu girin" value={undefined} onChangeText={undefined} />
                    </View>

                    <View>
                        <CustomButton title="Kaydınız tamamlayın" width={"100%"} height={55} onPress={() => {}} icon={undefined} />
                    </View>
                    <View>
                    <Text style={[styles.lightText, {fontSize: 12, lineHeight: 16, marginHorizontal: 5, textAlign: 'left'}]}>Devam butonuna basarak, <Text style={[styles.boldText, {color: '#57B03C'}]}>Hizmet Şartları</Text> ve <Text style={[styles.boldText, {color: '#57B03C'}]}>Gizlilik Politikası</Text>'nı okuduğunuzu ve kabul etmiş olduğunuzu teyit etmiş olursunuz.</Text>
                    </View>
                </View>
            </ScrollView>
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
        fontWeight: "300",
        fontFamily: "Inter-Regular",
    },
    container: {
        height: 55,
        borderRadius: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        backgroundColor: '#f2f2f2',
    },
    flagContainer: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    flag: {
        fontSize: 16,
    },
    countryName: {
        flex: 1,
        marginLeft: 10,
    },
});

export default RegisterLocationInformationsScreen;
