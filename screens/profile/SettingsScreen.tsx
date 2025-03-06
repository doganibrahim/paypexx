import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import PhoneInput from 'react-native-phone-number-input';
import { Country } from 'react-native-phone-number-input';
import { Country as CountryType } from '../../constants/phoneCodes';
import countries from '../../constants/countries';

const SettingsScreen = ({navigation}) => {
  const phoneInput = useRef<any>(null);
  const [selectedCountry] = useState<Country>({
    flag: require('../../assets/images/flags/tr.png'),
    country: 'Turkey',
    phoneCode: '+90'
  });

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

  const formFields = [
    {
      id: 'name',
      label: 'Adınız',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.name}
          editable={false}
          logo={undefined}
          placeholder={undefined}
          onChangeText={undefined}
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
          editable={false}
          logo={undefined}
          placeholder={undefined}
          onChangeText={undefined}
        />
      )
    },
    {
      id: 'birthDate',
      label: 'Doğum Tarihi',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.birthDate}
          editable={false}
          logo={undefined}
          placeholder="GG/AA/YYYY"
          onChangeText={undefined}
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
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 10,
            borderRightWidth: 1,
            borderRightColor: '#d1d1d1',
            marginRight: 10
          }}>
            <Image 
              source={typeof selectedCountry.flag === 'string' 
                ? { uri: selectedCountry.flag } 
                : selectedCountry.flag
              } 
              style={{width: 24, height: 24, marginRight: 8, borderRadius: 5}} 
            />
            <Image source={require('../../assets/images/icons/dropDown.png')} style={{width: 24, height: 24, marginRight: 8}} />
            <Text style={{fontWeight: '500', fontSize: 16}}>{selectedCountry.phoneCode}</Text>
          </View>
          <TextInput
            value={formData.phone}
            editable={false}
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
          />
        </View>
      )
    },
    {
      id: 'country',
      label: 'İkamet Ettiğiniz Ülke',
      component: (
        <View style={{
          height: 55,
          borderRadius: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#d1d1d1',
          backgroundColor: '#f2f2f2',
        }}>
          <View style={{width: 24, height: 24, marginRight: 10}}>
            <Image 
              source={require('../../assets/images/flags/tr.png')} 
              style={{width: '100%', height: '100%', borderRadius: 5}} 
            />
          </View>
          <Text style={{flex: 1, marginLeft: 10}}>{formData.country}</Text>
          <Image 
            source={require('../../assets/images/icons/dropDown.png')} 
            style={{width: 24, height: 24}} 
          />
        </View>
      )
    },
    {
      id: 'city',
      label: 'Şehir',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.city}
          editable={false}
          logo={undefined}
          placeholder={undefined}
          onChangeText={undefined}
        />
      )
    },
    {
      id: 'address',
      label: 'Adres',
      component: (
        <CustomInput
          value={formData.address}
          multiline
          editable={false}
          style={{height: 40, width: '100%'}}
          logo={undefined}
          placeholder={undefined}
          onChangeText={undefined}
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
          editable={false}
          logo={undefined}
          placeholder="Ev/Apartman numaranız"
          onChangeText={undefined}
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
          editable={false}
          keyboardType="numeric"
          logo={undefined}
          placeholder="Posta kodunuz"
          onChangeText={undefined}
        />
      )
    }
  ];

  const renderFormField = ({item}) => (
    <View style={{gap: 5, marginBottom: 10}}>
      <Text style={styles.label}>{item.label}</Text>
      {item.component}
    </View>
  );

  const goEditSettings = () => {
    navigation.navigate('EditSettings');
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={formFields}
        renderItem={renderFormField}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.formContainer}
      />

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Düzenle"
          onPress={goEditSettings}
          backgroundColor="#0095FF"
          width="100%"
          height={50}
          icon={undefined}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
