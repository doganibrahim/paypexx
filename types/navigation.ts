import { Country } from '../constants/countries';
import { Currency } from '../constants/receiverCurrencies';

export type RootStackParamList = {
  Home: undefined;
  NewTransaction: undefined;
  ReceiverCurrency: undefined;
  SenderCurrency: undefined;
  TransactionDetails: undefined;
  TransactionPurpose: undefined;
  TransactionPaymentMethod: undefined;
  TransactionFinish: undefined;
  NewTransactionInformations: undefined;
  NewTransactionReceiver: undefined;
  PhoneCode: undefined;
  RegisterPersonalInformations: {
    selectedCountry?: Country;
  };
}; 