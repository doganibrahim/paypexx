import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';
import HeaderLogo from '../components/HeaderLogo';
import HomeScreen from '../screens/HomeScreen';
import ChangeLanguageScreen from '../screens/ChangeLanguageScreen';
import LoginScreen from '../screens/login/LoginScreen';
import LoginVerificationScreen from '../screens/login/LoginVerificationScreen';
import ForgotPasswordScreen from '../screens/login/ForgotPasswordScreen';
import ForgotPasswordVerificationScreen from '../screens/login/ForgotPasswordVerificationScreen';
import ChooseNewPasswordScreen from '../screens/login/ChooseNewPasswordScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import RegisterVerificationScreen from '../screens/register/RegisterVerificationScreen';
import ChoosePasswordScreen from '../screens/register/ChoosePasswordScreen';
import RegisterPersonalInformationsScreen from '../screens/register/RegisterPersonalInformationsScreen';
import PhoneCodeScreen from '../screens/register/PhoneCodeScreen';
import RegisterLocationInformationsScreen from '../screens/register/RegisterLocationInformationsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/profile/SettingsScreen';
import SelectCountry from '../screens/register/SelectCountry';
import EditSettingsScreen from '../screens/profile/EditSettingsScreen';
import ChangePasswordScreen from '../screens/profile/ChangePasswordScreen';
import DataSecurityAndPrivacyScreen from '../screens/profile/DataSecurityAndPrivacyScreen';
import AccountVerify from '../screens/profile/AccountVerify';
import SavedCards from '../screens/profile/SavedCards';
import RequestSupport from '../screens/profile/RequestSupport';
import ProfileIcon from '../components/ProfileIcon';
import TransactionDetails from '../screens/transaction/TransactionDetails';
import NewTransaction from '../screens/transaction/NewTransaction';
import SenderCurrencyScreen from '../screens/transaction/SenderCurrencyScreen';
import ReceiverCurrencyScreen from '../screens/transaction/ReceiverCurrencyScreen';
import NewTransactionReceiver from '../screens/transaction/NewTransactionReceiver';
import NewTransactionInformations from '../screens/transaction/NewTransactionInformations';
import NewTransactionInformations2 from '../screens/transaction/NewTransactionInformations2';
import NewTransactionInformations3 from '../screens/transaction/NewTransactionInformations3';
import NewTransactionReview from '../screens/transaction/NewTransactionReview';
import TransactionPurpose from '../screens/transaction/TransactionPurpose';
import TransactionPaymentMethod from '../screens/transaction/TransactionPaymentMethod';
import TransactionFinish from '../screens/transaction/TransactionFinish';
import TransactionFinish2 from '../screens/transaction/TransactionFinish2';
import TransactionFinish3 from '../screens/transaction/TransactionFinish3';
import PaymentApproved from '../screens/transaction/PaymentApproved';
import RequestReceived from '../screens/transaction/RequestReceived';
import PaymentDeclined from '../screens/transaction/PaymentDeclined';
import AddCard from '../screens/profile/AddCard';
import EditPhoneScreen from '../screens/profile/EditPhoneScreen';
import EditCountryScreen from '../screens/profile/EditCountryScreen';
import InviteFriend from '../screens/profile/InviteFriend';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const SafeScreenWrapper = ({ children }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    }}>
      {children}
    </View>
  );
};

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{
            cardStyle: { backgroundColor: '#F5F5F5' },
            headerShadowVisible: false,
            title: '',
                    headerStyle: {
                        backgroundColor: '#F5F5F5',
                        height: 80,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10,
                    },
                    headerRightContainerStyle: {
                        paddingRight: 20,
                    }
        }}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                    headerLeft: () => <ProfileIcon />,
                    headerLeftContainerStyle: {
                        paddingLeft: 25,
                    },
                }}
            />
            <Stack.Screen
                name="ChangeLanguage"
                component={ChangeLanguageScreen}
                options={{
                    headerLeftContainerStyle: {
                        paddingLeft: 10,
                        alignItems: 'flex-end',
                    }
                }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: '',
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name='LoginVerification'
                component={LoginVerificationScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="ForgotPasswordVerification"
                component={ForgotPasswordVerificationScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="ChooseNewPassword"
                component={ChooseNewPasswordScreen}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="RegisterVerification"
                component={RegisterVerificationScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="ChoosePassword"
                component={ChoosePasswordScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="RegisterPersonalInformations"
                component={RegisterPersonalInformationsScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="PhoneCode"
                component={PhoneCodeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="RegisterLocationInformations"
                component={RegisterLocationInformationsScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    headerRight: () => 
                    <TouchableOpacity 
                        style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <Image source={require('../assets/images/icons/profile/log-out.png')} style={{width: 22, height: 22}} />
                        <Text style={{color: '#C10000', marginLeft: 9, fontWeight: '400'}}>Çıkış Yap</Text>
                    </TouchableOpacity>
                })}
            />
            <Stack.Screen
                name="SelectCountry"
                component={SelectCountry}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Ayarlar',
                }}
            />
            <Stack.Screen
                name="EditSettings"
                component={EditSettingsScreen}
                options={{
                    title: 'Ayarlar',
                }}
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={{
                    title: 'Şifre Sıfırlama',
                }}
            />
            <Stack.Screen
                name="DataSecurityAndPrivacy"
                component={DataSecurityAndPrivacyScreen}
                options={{
                    title: 'Veri Güvenliği ve Gizlilik',
                }}
            />
            <Stack.Screen
                name="AccountVerify"
                component={AccountVerify}
                options={{
                    title: 'Hesabımı Doğrula',
                }}
            />
            <Stack.Screen
                name="SavedCards"
                component={SavedCards}
                options={{
                    title: 'Kayıtlı Kartlar',
                }}
            />
            <Stack.Screen
                name="RequestSupport"
                component={RequestSupport}
                options={{
                    title: 'Destek Talep Et',
                }}
            />
            <Stack.Screen
                name="TransactionDetails"
                component={TransactionDetails}
                options={{
                    title: 'Transfer detayları',
                }}
            />
            <Stack.Screen
                name="NewTransaction"
                component={NewTransaction}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SenderCurrency"
                component={SenderCurrencyScreen}
            />
            <Stack.Screen
                name="ReceiverCurrency"
                component={ReceiverCurrencyScreen}
            />
            <Stack.Screen
                name="NewTransactionReceiver"
                component={NewTransactionReceiver}
                options={{
                    title: 'Transfer bilgileri',
                }}
            />
            <Stack.Screen
                name="NewTransactionInformations"
                component={NewTransactionInformations}
                options={{
                    title: 'Transfer bilgileri',
                }}
            />
            <Stack.Screen
                name="NewTransactionInformations2"
                component={NewTransactionInformations2}
                options={{
                    title: 'Transfer bilgileri',
                }}
            />
            <Stack.Screen
                name="NewTransactionInformations3"
                component={NewTransactionInformations3}
                options={{
                    title: 'Transfer bilgileri',
                }}
            />
            <Stack.Screen
                name="NewTransactionReview"
                component={NewTransactionReview}
                options={{
                    title: 'Bilgileri inceleyin',
                }}
            />
            <Stack.Screen
                name="TransactionPurpose"
                component={TransactionPurpose}
                options={{
                    title: 'Transfer Amacı',
                }}
            />
            <Stack.Screen
                name="TransactionPaymentMethod"
                component={TransactionPaymentMethod}
                options={{
                    title: 'Bilgileri inceleyin',
                }}
            />
            <Stack.Screen
                name="TransactionFinish"
                component={TransactionFinish}
                options={{
                    title: 'Bilgileri inceleyin',
                }}
            />
            <Stack.Screen
                name="TransactionFinish2"
                component={TransactionFinish2}
                options={{
                    title: 'Bilgileri inceleyin',
                }}
            />
            <Stack.Screen
                name="TransactionFinish3"
                component={TransactionFinish3}
                options={{
                    title: 'Bilgileri inceleyin',
                }}
            />
            <Stack.Screen
                name="PaymentApproved"
                component={PaymentApproved}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="RequestReceived"
                component={RequestReceived}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PaymentDeclined"
                component={PaymentDeclined}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AddCard"
                component={AddCard}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="EditPhone"
                component={EditPhoneScreen}
                options={{
                    title: 'Telefon Numarası',
                }}
            />
            <Stack.Screen
                name="EditCountry"
                component={EditCountryScreen}
            />
            <Stack.Screen
                name="InviteFriend"
                component={InviteFriend}
                options={{
                    title: 'Arkadaşını Davet Et',
                    headerBackground: () => (
                        <LinearGradient
                            colors={['#1A83B9', '#57B03C']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{ flex: 1 }}
                        />
                    ),
                    headerTintColor: '#FFFFFF',
                    headerTitleStyle: {
                        color: '#FFFFFF',
                    },
                    headerStyle: {
                        backgroundColor: 'transparent',
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;