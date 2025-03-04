import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'NewTransactionReview'>;

const TransactionPurpose = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  
  const [purposes, setPurposes] = useState([
    { id: 1, title: 'Aile desteği', selected: false },
    { id: 2, title: 'Ülkeye geri getirilen kazançlar', selected: false },
    { id: 3, title: 'Kredi/ipotek ödemesi', selected: false },
    { id: 4, title: 'Eğitim harcamaları', selected: false },
    { id: 5, title: 'Sağlık harcamaları', selected: false },
    { id: 6, title: 'Hayır amaçlı bağışlar', selected: false },
    { id: 7, title: 'Yatırımlar', selected: false },
    { id: 8, title: 'Kira/fatura ödemeleri', selected: false },
    { id: 9, title: 'Hediye veya destek', selected: false },
    { id: 10, title: 'Acil durumlar', selected: false },
    { id: 11, title: 'Emeklilik birikimleri', selected: false },
    { id: 12, title: 'Ticari işlemler', selected: false },
    { id: 13, title: 'Kişisel kullanım veya giderler', selected: false },
    { id: 14, title: 'Diğer', selected: false },
  ]);

  React.useEffect(() => {
    const currentPurpose = route.params?.purpose;
    if (currentPurpose) {
      setPurposes(prevPurposes => 
        prevPurposes.map(purpose => ({
          ...purpose,
          selected: purpose.title === currentPurpose
        }))
      );
    }
  }, [route.params?.purpose]);

  const handlePurposeSelect = (selectedId: number) => {
    const updatedPurposes = purposes.map(purpose => ({
      ...purpose,
      selected: purpose.id === selectedId
    }));
    setPurposes(updatedPurposes);
    
    const selectedPurpose = updatedPurposes.find(p => p.selected);
    if (selectedPurpose) {
      navigation.navigate('NewTransactionReview', {
        purpose: selectedPurpose.title
      });
    }
  };

  return (
    <View style={styles.container}>

      <View style={{marginBottom: 16}}>
      <CustomInput
        placeholder="Arama"
        value=""
        onChangeText={() => {}}
        logo={require('../../assets/images/icons/transaction/search.png')}
        height={40}
      />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      {purposes.map((purpose) => (
        <TouchableOpacity 
          key={purpose.id} 
          style={styles.purposeItem}
          onPress={() => handlePurposeSelect(purpose.id)}
        >
          <Text style={styles.purposeText}>{purpose.title}</Text>
          <View style={[styles.checkbox]}>
            {purpose.selected && (
              <View style={styles.innerCircle} />
            )}
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 28,
    paddingTop: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 16,
  },
  purposeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  purposeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#777777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4CAF50',
  },
});

export default TransactionPurpose;
