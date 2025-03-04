import { Currency } from '../constants/receiverCurrencies';
import { Country } from '../constants/phoneCodes';

export type RootStackParamList = {
    Onboarding: undefined;
    Home: undefined;
    ChangeLanguage: undefined;
    LoginScreen: undefined;
    LoginVerification: undefined;
    ForgotPassword: undefined;
    ForgotPasswordVerification: undefined;
    ChooseNewPassword: undefined;
    Register: undefined;
    RegisterVerification: undefined;
    ChoosePassword: undefined;
    RegisterPersonalInformations: {
        selectedCountry?: Country;
    };
    RegisterLocationInformations: undefined;
    Profile: undefined;
    SelectCountry: {
        onSelect?: (country: any) => void;
    };
    Settings: undefined;
    EditSettings: undefined;
    ChangePassword: undefined;
    DataSecurityAndPrivacy: undefined;
    AccountVerify: undefined;
    SavedCards: undefined;
    RequestSupport: undefined;
    NewTransaction: undefined;
    ReceiverCurrency: undefined;
    SenderCurrency: undefined;
    TransactionDetails: undefined;
    TransactionPurpose: {
        purpose?: string;
    };
    TransactionPaymentMethod: undefined;
    TransactionFinish: undefined;
    NewTransactionInformations: undefined;
    NewTransactionReceiver: undefined;
    NewTransactionReview: {
        purpose?: string;
    };
}; 