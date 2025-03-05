import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Clipboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import BottomMenu from '../../components/BottomMenu';
import Toast from '../../components/Toast';

interface TransactionFinishProps {
  navigation: any;
  route: any;
}

const TransactionFinish: React.FC<TransactionFinishProps> = ({ navigation, route }) => {
  const [toastVisible, setToastVisible] = useState(false);

  const bankDetails = {
    bankName: 'Geçici',
    accountName: 'PayPexx Sınırlı',
    iban: 'TR10 1234 5678 9012 1234',
    reference: 'PX123456789',
    amount: '123456789'
  };

  const copyToClipboard = async (text: string) => {
    try {
      await Clipboard.setString(text);
      setToastVisible(true);
    } catch (error) {
      console.error('Kopyalama hatası:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <Image source={require('../../assets/images/icons/transaction/bankTransfer.png')} style={styles.image} />
        <View>
          <Text style={styles.title}>Manuel banka transferini bitirin</Text>
          <Text style={styles.subtitle}>
            Banka hesabınızdan aşağıdaki PayPexx hesabına, lütfen 1 iş günü içinde transfer işlemini gerçekleştirin.
          </Text>

          <View style={styles.detailsContainer}>
            {Object.entries(bankDetails).map(([key, value]) => (
              <View key={key} style={styles.detailRow}>
                <Text style={styles.label}>
                  {key === 'bankName' ? 'Banka Adı' :
                   key === 'accountName' ? 'Banka Hesap Adı' :
                   key === 'iban' ? 'IBAN' :
                   key === 'reference' ? 'Referans' : 'Miktar'}
                </Text>
                <View style={styles.valueContainer}>
                  <Text style={styles.value}>{value}</Text>
                  <TouchableOpacity onPress={() => copyToClipboard(value)}>
                    <Ionicons name="copy-outline" size={16} color="#57B03C" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.warning}>
            Banka transferinizde, lütfen referans numaranızı açıklama bölümüne ekleyin.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomButton}>
      <CustomButton
        title="Ödemeyi Gerçekleştirdim"
        textSize={16}
        onPress={() => {
          navigation.navigate("RequestReceived");
        }}
        width="100%"
        height={55}
        icon={undefined}
      />
      </View>
      <View style={styles.bottomMenu}>
        <BottomMenu onTabPress={() => {}} />
      </View>
      <Toast 
        visible={toastVisible}
        message="Kopyalandı"
        onHide={() => setToastVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginBottom: 8,
  },
  detailsContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 8,
  },
  detailRow: {
    paddingVertical: 6,
  },
  label: {
    fontSize: 16,
    color: '#777',
    fontWeight: '600',
    marginBottom: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
  warning: {
    fontSize: 13,
    fontWeight: '500',
    height: 52,
    color: '#fff',
    backgroundColor: '#1B93D0',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 5,
    padding: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginBottom: 8,
  },
  bottomButton: {
    marginHorizontal: 18,
    marginBottom: 16,
  },
  bottomMenu: {
    marginHorizontal: 18,
  },
});

export default TransactionFinish;