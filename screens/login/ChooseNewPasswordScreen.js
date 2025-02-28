import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ChooseNewPasswordScreen = () => {
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
                    <CustomInput logo={require('../../assets/images/icons/lock.png')} placeholder="Yeni şifrenizi girin" />
                </View>

                <View style={{marginBottom: 20}}>
                    <Text style={[styles.mediumText, {fontSize: 16, lineHeight: 22, marginBottom: 5, marginLeft: 5}]}>Şifrenizi tekrar girin</Text>
                    <CustomInput logo={require('../../assets/images/icons/lock.png')} placeholder="Yeni şifrenizi girin" />
                </View>

                <View>
                    <CustomButton title="Şifreyi yenile" width={"100%"} height={55} onPress={() => {}} />
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