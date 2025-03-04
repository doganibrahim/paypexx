import {View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";

const LoginScreen = ({navigation}) => {
    const goLoginVerification = () => {
        navigation.navigate('LoginVerification');
    }
    const goForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }
    const goRegister = () => {
        navigation.navigate('Register');
    }

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center'}}>
                <View>
                    <View style={{marginBottom: 30}}>
                        <Text style={[styles.boldText, styles.centerText, {fontSize: 24, lineHeight: 30}]}>Tekrar hoş geldiniz!</Text>
                        <Text style={[styles.lightText, styles.centerText, {fontSize: 16, lineHeight: 22}]}>Hızlı ve güvenli işlemin tadını çıkarın.</Text>
                    </View>
                    <View style={{marginBottom: 7}}>
                        <CustomInput 
                            logo={require('../../assets/images/icons/mail.png')} 
                            placeholder="Email adresinizi girin"
                            value={email}
                            onChangeText={setEmail}
                            type="email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{marginBottom: 20}}>
                        <CustomInput 
                            logo={require('../../assets/images/icons/lock.png')} 
                            placeholder="Şifrenizi girin"
                            value={password}
                            onChangeText={setPassword}
                            type="password"
                            secureTextEntry
                            autoCapitalize="none"
                        />
                        <TouchableOpacity onPress={goForgotPassword}>
                            <Text style={[styles.mediumText, styles.rightText, {fontSize: 14, lineHeight: 22, marginRight: 10, marginTop: 3}]}>Şifremi unuttum</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginBottom: 30}}>
                        <CustomButton
                            title='Giriş Yap'
                            onPress={goLoginVerification}
                            width={"100%"}
                            height={55}
                            icon={null}
                        />
                        <Text style={[styles.lightText, styles.rightText, {fontSize: 14, lineHeight: 22, marginRight: 10, marginTop: 3}]}>Üyeliğiniz yok mu? <Text style={styles.mediumText} onPress={goRegister}>Üye ol</Text></Text>
                    </View>
                </View>
                <View style={{marginBottom: 20}}>
                    <View style={{height: 20, marginBottom: 20}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flex: 1, height: 1, backgroundColor: '#E0E0E0'}} />
                            <Text style={[{marginHorizontal: 10, color: '#A0A0A0'}, styles.lightText]}>or</Text>
                            <View style={{flex: 1, height: 1, backgroundColor: '#E0E0E0'}} />
                        </View>
                    </View>
                    <View style={{height: 60, marginBottom: 5}}>
                        <CustomButton
                            title='Apple ile devam et'
                            onPress={() => {}}
                            backgroundColor='#000'
                            width={"100%"}
                            height={55}
                            icon={require('../../assets/images/icons/appleIcon.png')}
                        />
                    </View>
                    <View style={{height: 55, marginBottom: 5}}>
                        <CustomButton 
                            title='Google ile devam et'
                            onPress={() => {}}
                            backgroundColor='#FFF'
                            width={"100%"}
                            height={55}
                            textColor='#000'
                            icon={require('../../assets/images/icons/googleIcon.png')}
                        />
                    </View>
                    <View style={{height: 50}}>
                        <Text style={[styles.lightText, {fontSize: 12, lineHeight: 16, marginHorizontal: 10, textAlign: 'left'}]}>Giriş yap butonuna basarak, <Text style={[styles.boldText, {color: '#57B03C'}]}>Hizmet Şartları</Text> ve <Text style={[styles.boldText, {color: '#57B03C'}]}>Gizlilik Politikası</Text>'nı okuduğunuzu ve kabul etmiş olduğunuzu teyit etmiş olursunuz.</Text>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
};

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

export default LoginScreen;