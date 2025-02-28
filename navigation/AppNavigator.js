import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, Text } from 'react-native';
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

const Stack = createStackNavigator();

const AppNavigator = ({ navigation }) => {
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
                        paddingRight: 18,
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
                name="RegisterLocationInformations"
                component={RegisterLocationInformationsScreen}
                options={{
                    headerRight: () => <HeaderLogo />,
                }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerRight: () => 
                    <TouchableOpacity 
                        style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}
                        onPress={() => {}}
                    >
                        <Image source={require('../assets/images/icons/profile/log-out.png')} style={{width: 22, height: 22}} />
                        <Text style={{color: '#C10000', marginLeft: 9, fontWeight: '400'}}>Çıkış Yap</Text>
                    </TouchableOpacity>
                }}
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
        </Stack.Navigator>
    );
};

export default AppNavigator;