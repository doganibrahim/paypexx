import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import PhoneInput from 'react-native-phone-number-input';

const SettingsScreen = ({navigation}) => {
  const phoneInput = useRef<any>(null);
  const goEditSettings = () => {
    navigation.navigate('EditSettings');
  }

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
        <PhoneInput
          ref={phoneInput}
          defaultValue={formData.phone}
          defaultCode="TR"
          layout="first"
          disabled={true}
          countryPickerProps={{
            withFilter: true,
            withFlag: true,
            withCountryNameButton: true,
            withAlphaFilter: false,
            withCallingCode: true,
            withEmoji: true,
            containerButtonStyle: {
              backgroundColor: '#f2f2f2',
              borderRadius: 15,
            }
          }}
          containerStyle={{
            width: '100%',
            borderRadius: 15,
            backgroundColor: '#f2f2f2',
            borderWidth: 1,
            borderColor: '#d1d1d1',
            height: 55,
          }}
          textContainerStyle={{
            backgroundColor: '#f2f2f2',
            height: 50,
            paddingVertical: 0,
            borderRadius: 15,
          }}
          textInputStyle={{
            height: 50,
            fontSize: 16,
          }}
          placeholder="Telefon numaranız"
          onChangeText={undefined}
        />
      )
    },
    {
      id: 'country',
      label: 'İkamet Ettiğiniz Ülke',
      component: (
        <CustomInput
          style={{height: 40, width: '100%'}}
          value={formData.country}
          editable={false}
          logo={undefined}
          placeholder={undefined}
          onChangeText={undefined}
        />
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
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 16,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 5,
  },
});

export default SettingsScreen;
