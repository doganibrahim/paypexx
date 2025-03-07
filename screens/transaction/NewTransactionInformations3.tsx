import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, Platform, Keyboard, Dimensions } from 'react-native';
import BottomMenu from '../../components/BottomMenu';
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from '../../components/CustomInput';
import CustomButtonEndIcon from '../../components/EndIconCustomButton';
import { useCurrency } from '../../context/CurrencyContext';

const NewTransactionInformations3 = ({ navigation }: { navigation: any }) => {
    const [sortCode, setSortCode] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const { receiverCurrency } = useCurrency();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleSortCodeChange = (text: string) => {
        // Sort code formatlaması (XX-XX-XX)
        const cleaned = text.replace(/[^\d]/g, '');
        const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,2})$/);
        
        if (match) {
            const formatted = match
                .slice(1)
                .filter(Boolean)
                .join('-');
            setSortCode(formatted);
        }
    };

    const handleAccountNumberChange = (text: string) => {
        // Sadece rakamları kabul et
        const cleaned = text.replace(/[^\d]/g, '');
        setAccountNumber(cleaned);
    };

    const handleUserNameChange = (text: string) => {
        setUserName(text);
    };

    const handleNext = () => {
        navigation.navigate('NewTransactionReview');
    }
    
    // iOS için dinamik offset hesaplama
    const getKeyboardOffset = () => {
        if (Platform.OS !== 'ios') return 0;
        
        const { height } = Dimensions.get('window');
        // iPhone X ve sonrası için daha büyük offset
        const isIphoneX = height > 800;
        
        return isIphoneX ? 88 : 64;
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{flex: 1}}
                keyboardVerticalOffset={getKeyboardOffset()}
            >
                <Text style={styles.title}>Alıcı bigilerini ekleyin</Text>
                <ScrollView 
                    style={{flex: 1}}
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{marginBottom: 14}}>
                    <Text style={styles.label}>Ülke ve Para Birimi</Text>
                    <TouchableOpacity onPress={() => {}}>
                <View style={styles.box}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                    <Image 
                        source={receiverCurrency?.flag || require('../../assets/images/flags/tr.png')} 
                        style={styles.flag}
                    />
                    <Text style={styles.currencyCode}>
                        {receiverCurrency?.currency || 'TRY'}
                    </Text>
                    </View>
                    <Image 
                        source={require('../../assets/images/icons/transaction/dropDown.png')}
                        style={styles.dropdownIcon}
                    />
                </View>
                </TouchableOpacity>
                    </View>

                    <View style={{marginBottom: 14}}>
                    <Text style={styles.label}>Banka Adı</Text>
                    <TouchableOpacity onPress={() => {}}>
                <View style={styles.box}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    <Text style={styles.bankName}>Lütfen banka adını seçin</Text>
                    </View>
                    <Image 
                        source={require('../../assets/images/icons/transaction/dropDown.png')}
                        style={styles.dropdownIcon}
                    />
                </View>
                </TouchableOpacity>
                    </View>

                    <View style={{marginBottom: 14}}>
                    <Text style={styles.label}>Hesap Sahibinin Adı Soyadı</Text>
                    <CustomInput 
                        label={undefined} 
                        placeholder={undefined} 
                        logo={undefined} 
                        height={55} 
                        value={userName} 
                        onChangeText={handleUserNameChange}
                    />
                    </View>
                    <View style={{marginBottom: 14}}>
                    <Text style={styles.label}>Sort Code</Text>
                    <CustomInput 
                        label={undefined} 
                        placeholder="XX-XX-XX"
                        logo={undefined} 
                        height={55} 
                        value={sortCode} 
                        onChangeText={handleSortCodeChange}
                        maxLength={8}
                        keyboardType="numeric"
                    />
                    </View>
                    <View style={{marginBottom: 14}}>
                    <Text style={styles.label}>Account Number</Text>
                    <CustomInput 
                        label={undefined} 
                        placeholder="12345678"
                        logo={undefined} 
                        height={55} 
                        value={accountNumber} 
                        onChangeText={handleAccountNumberChange}
                        maxLength={8}
                        keyboardType="numeric"
                    />
                    </View>
                </ScrollView>
                {!isKeyboardVisible && (
                    <>
                        <CustomButtonEndIcon 
                            title="İlerlemeye devam et" 
                            onPress={handleNext} 
                            width={'100%'} 
                            height={55} 
                            icon={require('../../assets/images/icons/transaction/arrowRight.png')} 
                            textSize={16} 
                        />
                        <BottomMenu onTabPress={() => {}} />
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 5,
        marginBottom: 22,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        borderColor: '#D1D1D1',
        borderRadius: 15,
        height: 55,
    },
    label: {
        fontSize: 14,
        color: '#777',
        fontWeight: '600',
        marginLeft: 5,
        marginBottom: 5,
    },
    bankName: {
        fontSize: 14,
        color: '#777',
        fontWeight: '600',
        marginLeft: 5,
    },
    flag: {
        width: 24,
        height: 24,
        borderRadius: 5,
    },
    currencyCode: {
        fontSize: 16,
        fontWeight: '600',
    },
    dropdownIcon: {
        width: 24,
        height: 24,
    },
    amount: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default NewTransactionInformations3;