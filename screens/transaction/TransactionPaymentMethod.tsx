import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInputWhite from '../../components/CustomInputWhite';
import BottomMenu from '../../components/BottomMenu';

const TransactionPaymentMethod = ({navigation}: {navigation: any}) => {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const formatExpiryDate = (text: string) => {
        // Silme işlemi sırasında "/" karakterini kaldır
        if (text.length < expiryDate.length) {
            return text.replace('/', '');
        }

        // Sadece rakamları al
        const numbers = text.replace(/[^\d]/g, '');
        
        // 4 karakterden fazlasını alma
        const trimmed = numbers.slice(0, 4);
        
        // XX/XX formatına çevir
        if (trimmed.length >= 2) {
            return `${trimmed.slice(0, 2)}/${trimmed.slice(2)}`;
        }
        
        return trimmed;
    };

    const formatCVV = (text: string) => {
        // Sadece rakamları al ve 3 karakterle sınırla
        return text.replace(/[^\d]/g, '').slice(0, 3);
    };

    const formatCardNumber = (text: string) => {
        // Sadece rakamları al
        const numbers = text.replace(/[^\d]/g, '');
        
        // 16 karakterden fazlasını alma
        const trimmed = numbers.slice(0, 16);
        
        // Her 4 rakamdan sonra boşluk ekle
        const formatted = trimmed.replace(/(\d{4})/g, '$1 ').trim();
        
        return formatted;
    };

    const handlePayment = () => {
        navigation.navigate('TransactionFinish3');
    }

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardHideListener = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        // Cleanup
        return () => {
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        };
    }, []);

    return (
        <View style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <ScrollView 
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 100 // Alt butonlar için extra padding
                    }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={{paddingHorizontal: 20, paddingVertical: 16}}>
                        <View style={{gap: 16}}>
                            <Text style={styles.title}>Ödeme Yöntemi</Text>
                            <CustomButton
                                title="Pay"
                                onPress={() => {}}
                                backgroundColor="#000"
                                width="100%"
                                height={50}
                                borderRadius={4}
                                icon={require('../../assets/images/icons/appleIcon.png')}
                            />
                            <CustomButton
                                title="Pay"
                                onPress={() => {}}
                                backgroundColor="#fff"
                                textColor="#000"
                                width="100%"
                                height={50}
                                borderRadius={4}
                                borderWidth={1}
                                borderColor="#000"
                                icon={require('../../assets/images/icons/googleIcon.png')}
                            />
                            <CustomButton
                                title="Bank Transfer"
                                onPress={() => {}}
                                backgroundColor="#fff"
                                textColor="#000"
                                width="100%"
                                height={50}
                                borderRadius={4}
                                borderWidth={1}
                                borderColor="#000"
                                icon={require('../../assets/images/icons/transaction/bank2.png')}
                            />
                            <View>
                                <Text style={styles.label}>Kart Üzerindeki İsim</Text>
                                <CustomInputWhite
                                    value={cardName}
                                    onChangeText={setCardName}
                                    placeholder="Ad Soyad"
                                    autoCapitalize="words"
                                />
                            </View>
                            <View>
                                <Text style={styles.label}>Kart Numarası</Text>
                                <CustomInputWhite 
                                    placeholder="**** **** **** ****"
                                    value={cardNumber}
                                    onChangeText={(text) => setCardNumber(formatCardNumber(text))}
                                    keyboardType="numeric"
                                    maxLength={19} // 16 rakam + 3 boşluk
                                />
                                <View style={{flexDirection: 'row', gap: 1, alignSelf: 'flex-end'}}>
                                    <Image source={require('../../assets/images/icons/transaction/Mastercard.png')} style={{width: 32, height: 32}}/>
                                    <Image source={require('../../assets/images/icons/transaction/Visa.png')} style={{width: 32, height: 32}}/>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', gap: 12}}>
                                <View style={{flex: 1}}>
                                    <Text style={styles.label}>Son Kullanma Tarihi</Text>
                                    <CustomInputWhite 
                                        placeholder="AA/YY" 
                                        value={expiryDate}
                                        onChangeText={(text) => setExpiryDate(formatExpiryDate(text))}
                                        rightIcon={require('../../assets/images/icons/transaction/bank2.png')}
                                        keyboardType="numeric"
                                        maxLength={5}
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.label}>CVV</Text>
                                    <CustomInputWhite 
                                        placeholder="CVV" 
                                        value={cvv}
                                        onChangeText={(text) => setCvv(formatCVV(text))}
                                        rightIcon={require('../../assets/images/icons/transaction/bank2.png')}
                                        keyboardType="numeric"
                                        maxLength={3}
                                    />
                                </View>
                            </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            
            <View style={styles.bottomContainer}>
                <CustomButton
                    title="₺ 852.54 Öde"
                    onPress={handlePayment}
                    width={'100%'}
                    height={55}
                    icon={undefined}
                />
                <Text style={[{fontSize: 10, lineHeight: 14, marginTop: 3, textAlign: 'left', fontWeight: '600'}]}>Öde butonuna basarak, <Text style={[{color: '#57B03C', fontWeight: '600'}]}>Koşullar</Text> ve <Text style={[{color: '#57B03C', fontWeight: '600'}]}>Gizlilik Politikası</Text>'nı okuduğunuzu ve kabul etmiş olduğunuzu teyit etmiş olursunuz.</Text>
                    </View>
            <View style={styles.bottomMenu}>
                {!isKeyboardVisible && <BottomMenu onTabPress={() => {}}/>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
        marginLeft: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
        marginLeft: 4,
    },
    bottomContainer: {
        padding: 20,
    },
    bottomMenu: {
        marginHorizontal: 18,
    },
});

export default TransactionPaymentMethod;
