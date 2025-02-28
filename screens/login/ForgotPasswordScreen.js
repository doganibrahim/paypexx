import {View, Text, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import ForgotPasswordVerificationScreen from '../login/ForgotPasswordVerificationScreen';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = ({navigation}) => {
    const goForgotPasswordVerification = () => {
        navigation.navigate('ForgotPasswordVerification');
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 50, justifyContent: 'flex-start'}}>
                <View style={{marginBottom: 30}}>
                    <Text style={[styles.lightText, styles.leftText, {fontSize: 16, lineHeight: 22}]}><Text style={[styles.boldText, {color: '#57B03C'}]}>Şifrenizi mi unuttunuz?</Text> Hiç sorun değil. 
                    E-posta adresinizi girin, yeni bir şifre belirlemenizi sağlayacak sıfırlama bağlantısını size hemen gönderelim.</Text>
                </View>

                <View style={{marginBottom: 20}}>
                    <Text style={[styles.boldText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Email adresiniz</Text>
                    <CustomInput logo={require('../../assets/images/icons/mail.png')} placeholder="Email adresinizi girin" />
                </View>

                <View>
                    <CustomButton title="Kodu gönder" width={"100%"} height={55} onPress={goForgotPasswordVerification} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    leftText: {
        textAlign: "left"
    },
    boldText: {
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
    },
    mediumText: {
        fontWeight: "500",
        fontFamily: "Inter-Medium",
    }
});
export default ForgotPasswordScreen;