import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Country } from '../../constants/phoneCodes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import countries from '../../constants/countries';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'EditSettings'>;

const SettingsScreen = () => {
  const phoneInput = useRef<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birthDate: '',
    phone: '',
    country: 'Türkiye',
    city: '',
    address: '',
    houseNumber: '',
    postalCode: '',
  });
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    flag: require('../../assets/images/flags/tr.png'),
    country: 'Turkey',
    phoneCode: '+90'
  });
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();

  const handleSave = () => {
    console.log('Kaydedilen veriler:', formData);
  };

  const handlePhoneCountryPress = () => {
    navigation.navigate('EditPhone');
  };

  const handleResidenceCountryPress = () => {
    navigation.navigate('EditCountry', {
      onSelect: (country) => {
        setFormData({ 
          ...formData, 
          country: country.country 
        });
      }
    });
  };

  const formFields = [
    {
      id: 'name',
      label: 'Adınız',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          logo={undefined}
          placeholder="Adınız"
        />
      )
    },
    {
      id: 'surname', 
      label: 'Soyadınız',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.surname}
          onChangeText={(text) => setFormData({ ...formData, surname: text })}
          logo={undefined}
          placeholder="Soyadınız"
        />
      )
    },
    {
      id: 'birthDate',
      label: 'Doğum Tarihi',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          placeholder="GG/AA/YYYY"
          value={formData.birthDate}
          onChangeText={(text) => setFormData({ ...formData, birthDate: text })}
          logo={undefined}
        />
      )
    },
    {
      id: 'phone',
      label: 'Telefon Numarası',
      component: (
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
            onPress={handlePhoneCountryPress}
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
              source={typeof selectedCountry.flag === 'string' 
                ? { uri: selectedCountry.flag } 
                : selectedCountry.flag
              } 
              style={{width: 24, height: 24, marginRight: 8, borderRadius: 5}} 
            />
            <Image source={require('../../assets/images/icons/dropDown.png')} style={{width: 24, height: 24, marginRight: 8}} />
            <Text style={{fontWeight: '500', fontSize: 16}}>{selectedCountry.phoneCode}</Text>
          </TouchableOpacity>
          <TextInput
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            placeholder="Telefon numaranız"
            placeholderTextColor="#999"
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: '500',
              color: '#000',
              height: '100%',
              padding: 0
            }}
            keyboardType="phone-pad"
          />
        </View>
      )
    },
    {
      id: 'country',
      label: 'İkamet Ettiğiniz Ülke',
      component: (
        <TouchableOpacity 
          style={{
            height: 55,
            borderRadius: 15,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#d1d1d1',
            backgroundColor: '#f2f2f2',
          }} 
          onPress={handleResidenceCountryPress}
        >
          <View style={{width: 24, height: 24, marginRight: 10}}>
            <Image 
              source={countries.find(c => c.country === formData.country)?.flag || require('../../assets/images/flags/tr.png')} 
              style={{width: '100%', height: '100%', borderRadius: 5}} 
            />
          </View>
          <Text style={{flex: 1, marginLeft: 10}}>{formData.country}</Text>
          <Image 
            source={require('../../assets/images/icons/dropDown.png')} 
            style={{width: 24, height: 24}} 
          />
        </TouchableOpacity>
      )
    },
    {
      id: 'city',
      label: 'Şehir',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.city}
          onChangeText={(text) => setFormData({ ...formData, city: text })}
          logo={undefined}
          placeholder="Şehir"
        />
      )
    },
    {
      id: 'address',
      label: 'Adres',
      component: (
        <CustomInput
          value={formData.address}
          onChangeText={(text) => setFormData({ ...formData, address: text })}
          multiline
          style={{height: 40, width: '100%'}}
          logo={undefined}
          placeholder="Adres"
        />
      )
    },
    {
      id: 'houseNumber',
      label: 'Ev/Apartman Numarası',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.houseNumber}
          onChangeText={(text) => setFormData({ ...formData, houseNumber: text })}
          placeholder="Ev/Apartman numaranız"
          logo={undefined}
          keyboardType="numeric"
        />
      )
    },
    {
      id: 'postalCode',
      label: 'Posta Kodu',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.postalCode}
          onChangeText={(text) => setFormData({ ...formData, postalCode: text })}
          placeholder="Posta kodunuz"
          keyboardType="numeric"
          logo={undefined}
        />
      )
    }
  ];

  React.useEffect(() => {
    if (route.params?.selectedCountry) {
      setSelectedCountry(route.params.selectedCountry);
    }
  }, [route.params?.selectedCountry]);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          {formFields.map(item => (
            <View key={item.id} style={{gap: 5, marginBottom: 10}}>
              <Text style={styles.label}>{item.label}</Text>
              {item.component}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Kaydet"
          onPress={handleSave}
          width="100%"
          height={50}
          icon={undefined}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    padding: 16,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 5,
  },
});

export default SettingsScreen;