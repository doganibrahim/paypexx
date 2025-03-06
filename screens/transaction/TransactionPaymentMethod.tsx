import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInputWhite from '../../components/CustomInputWhite';
import BottomMenu from '../../components/BottomMenu';
import { useCurrency } from '../../context/CurrencyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import countries from '../../constants/countries';


const TransactionPaymentMethod = ({navigation, route}: {navigation: any, route: any}) => {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const { receiverCurrency } = useCurrency();
    const [billingAddress, setBillingAddress] = useState(null);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [editCountry, setEditCountry] = useState('');
    const [editCity, setEditCity] = useState('');
    const [editAddress, setEditAddress] = useState('');
    const [editHouseNumber, setEditHouseNumber] = useState('');
    const [editPostalCode, setEditPostalCode] = useState('');
    const [selectedCountry, setSelectedCountry] = useState({
        key: 'tr',
        label: 'Türkiye',
        dialCode: '+90',
        flag: require('../../assets/images/flags/tr.png')
    });

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

    const formatAddress = (address: any) => {
        if (!address) return '';
        return `${address.address}, No:${address.houseNumber}, ${address.city}, ${address.postalCode}\n${address.country}`;
    };

    const handlePayment = () => {
        navigation.navigate('PaymentApproved');
    }

    const handleBankTransfer = () => {
        const specialCountries = [
            'Ukrayna',
            'Moldova',
            'Türkmenistan',
            'Kazakistan',
            'Tacikistan',
            'Azerbaycan',
            'Gürcistan'
        ];

        if (specialCountries.includes(receiverCurrency?.country || '')) {
            navigation.navigate('TransactionFinish2');
        } else if (receiverCurrency?.country === 'İngiltere') {
            navigation.navigate('TransactionFinish3');
        } else {
            navigation.navigate('TransactionFinish');
        }
    };

    const goSelectCountry = () => {
        navigation.navigate('SelectCountry', {
            onSelect: (country) => {},
            returnScreen: 'TransactionPaymentMethod',
            keepEditing: true
        });
    };

    const handleSaveAddress = async () => {
        const newAddress = {
            country: selectedCountry.label,
            city: editCity,
            address: editAddress,
            houseNumber: editHouseNumber,
            postalCode: editPostalCode
        };

        // Tüm alanların dolu olup olmadığını kontrol et
        if (!newAddress.country || !newAddress.city || !newAddress.address || !newAddress.houseNumber || !newAddress.postalCode) {
            // Eksik alan varsa kaydetme ve formu kapatma
            return;
        }

        try {
            await AsyncStorage.setItem('billingAddress', JSON.stringify(newAddress));
            setBillingAddress(newAddress);
            setIsEditingAddress(false); // Sadece başarılı kaydetme işleminde formu kapat
        } catch (error) {
            console.error('Adres kaydedilirken hata oluştu:', error);
        }
    };

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

    useEffect(() => {
        // Sayfa yüklendiğinde adres bilgilerini çek
        const getBillingAddress = async () => {
            try {
                const savedAddress = await AsyncStorage.getItem('billingAddress');
                if (savedAddress && !isEditingAddress) {
                    setBillingAddress(JSON.parse(savedAddress));
                }
            } catch (error) {
                console.error('Adres bilgileri çekilirken hata oluştu:', error);
            }
        };

        getBillingAddress();
    }, [isEditingAddress]);

    useEffect(() => {
        if (isEditingAddress) {
            // Eğer billingAddress varsa, mevcut değerleri form alanlarına doldur
            if (billingAddress) {
                setEditCountry(billingAddress.country);
                setEditCity(billingAddress.city);
                setEditAddress(billingAddress.address);
                setEditHouseNumber(billingAddress.houseNumber);
                setEditPostalCode(billingAddress.postalCode);
                // Ülke seçimi için selectedCountry'yi de güncelle
                const country = countries.find(c => c.country === billingAddress.country);
                if (country) {
                    setSelectedCountry({
                        key: country.key,
                        label: country.country,
                        dialCode: country.dialCode,
                        flag: country.flag
                    });
                }
            } else {
                setEditCountry('');
                setEditCity('');
                setEditAddress('');
                setEditHouseNumber('');
                setEditPostalCode('');
            }
        }
    }, [isEditingAddress]);

    useEffect(() => {
        // Route params'dan gelen ülke seçimini ve form durumunu kontrol et
        if (route.params?.selectedCountry) {
            setSelectedCountry({
                key: route.params.selectedCountry.key,
                label: route.params.selectedCountry.country,
                dialCode: route.params.selectedCountry.dialCode,
                flag: route.params.selectedCountry.flag
            });
            setEditCountry(route.params.selectedCountry.country);
        }
        
        // Form durumunu güncelle
        if (route.params?.isEditingAddress !== undefined) {
            setIsEditingAddress(route.params.isEditingAddress);
        }
    }, [route.params?.selectedCountry, route.params?.isEditingAddress]);

    // Fatura adresi bölümünü güncelle
    const renderBillingAddressSection = () => {
        if (isEditingAddress) {
            return (
                <View style={{gap: 8, marginTop: 16}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8}}>
                        <Text style={{fontSize: 16, fontWeight: '600'}}>Fatura Adresi</Text>
                        <TouchableOpacity onPress={() => setIsEditingAddress(false)}>
                            <Text style={{color: '#666', fontSize: 14}}>İptal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{gap: 12}}>
                        <TouchableOpacity style={styles.countryContainer} onPress={goSelectCountry}>
                            <View style={styles.flagContainer}>
                                <Image source={selectedCountry.flag} style={styles.flag} />
                            </View>
                            <Text style={styles.countryName}>{selectedCountry.label}</Text>
                            <Ionicons name="chevron-down" size={24} color="#666" />
                        </TouchableOpacity>
                        <CustomInputWhite
                            value={editCity}
                            onChangeText={setEditCity}
                            placeholder="Şehir"
                        />
                        <CustomInputWhite
                            value={editAddress}
                            onChangeText={setEditAddress}
                            placeholder="Adres"
                        />
                        <CustomInputWhite
                            value={editHouseNumber}
                            onChangeText={setEditHouseNumber}
                            placeholder="Ev/Apartman No"
                            keyboardType="numeric"
                        />
                        <CustomInputWhite
                            value={editPostalCode}
                            onChangeText={setEditPostalCode}
                            placeholder="Posta Kodu"
                            keyboardType="numeric"
                        />
                        <CustomButton
                            title="Kaydet"
                            onPress={handleSaveAddress}
                            width={'100%'}
                            height={45}
                            icon={undefined}
                        />
                    </View>
                </View>
            );
        }

        return (
            <View style={{gap: 8, marginTop: 16, paddingHorizontal: 2}}>
                <TouchableOpacity 
                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12}}
                    onPress={() => {
                        setEditCountry('');
                        setEditCity('');
                        setEditAddress('');
                        setEditHouseNumber('');
                        setEditPostalCode('');
                        setIsEditingAddress(true);
                    }}
                >
                    <Text style={{fontSize: 16, fontWeight: '600'}}>Fatura Adresi</Text>
                    <Image source={require('../../assets/images/icons/transaction/pen.png')} style={{width: 16, height: 16, marginRight: 4}}/>
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#777'}}>
                        {formatAddress(billingAddress)}
                    </Text>
                </View>
            </View>
        );
    };

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
                                onPress={handleBankTransfer}
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
                                <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                                    <Image source={require('../../assets/images/icons/transaction/Mastercard.png')} style={{width: 34, height: 32}}/>
                                    <Image source={require('../../assets/images/icons/transaction/Visa.png')} style={{width: 34, height: 32}}/>
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
                            {renderBillingAddressSection()}
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
    countryContainer: {
        height: 48,
        borderRadius: 4,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFF',
    },
    flagContainer: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    flag: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    countryName: {
        flex: 1,
        marginLeft: 10,
    },
});

export default TransactionPaymentMethod;
