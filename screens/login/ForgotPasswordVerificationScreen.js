import {View, Text, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordVerificationScreen = ({navigation}) => {
    const goChooseNewPassword = () => {
        navigation.navigate('ChooseNewPassword');
    }
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 50, justifyContent: 'flex-start'}}>
                <View style={{marginBottom: 40}}>
                    <Text style={[styles.boldText, styles.centerText, {fontSize: 24, lineHeight: 30}]}>Kodu doğrulayın</Text>
                </View>

                <View style={{marginBottom: 40}}>
                    <CustomInput logo={require('../../assets/images/icons/key.png')} placeholder="6 haneli kod" />
                    <Text style={[styles.mediumText, {fontSize: 12, lineHeight: 22, textAlign: 'center'}]}>E-posta adresinize gönderilen 6 haneli kodu girin.</Text>
                </View>

                <View style={{marginBottom: 7}}>
                    <CustomButton title="Devam Et" width={"100%"} height={55} onPress={goChooseNewPassword} />
                </View>

                <View style={{marginBottom: 5}}>
                    <CustomButton title="Tekrar kod iste" width={"100%"} height={55} backgroundColor="#1B93D0" onPress={() => {}} />
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
})
export default ForgotPasswordVerificationScreen;