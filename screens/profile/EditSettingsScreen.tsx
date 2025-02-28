import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import PhoneInput from 'react-native-phone-number-input';

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

  const handleSave = () => {
    console.log('Kaydedilen veriler:', formData);
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
      <PhoneInput
        ref={phoneInput}
        defaultValue={formData.phone}
        defaultCode="TR"
        layout="first"
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        onChangeCountry={(country) => {
          const phoneNumber = formData.phone.replace(/^\+\d+/, '');
          setFormData({ 
            ...formData, 
            phone: `+${country.callingCode[0]}${phoneNumber}` 
          });
        }}
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
        onChangeText={(text) => setFormData({ ...formData, country: text })}
        logo={undefined}
        placeholder="Ülke"
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
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
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