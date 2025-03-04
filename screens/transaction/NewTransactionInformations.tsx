import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, Keyboard } from 'react-native';
import BottomMenu from '../../components/BottomMenu';
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from '../../components/CustomInput';
import CustomButtonEndIcon from '../../components/EndIconCustomButton';
import { Platform } from 'react-native';

const NewTransactionInformations = ({ navigation }: { navigation: any }) => {
    const [cardNumber, setCardNumber] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

    React.useEffect(() => {
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

    const handleCardNumberChange = (text: string) => {
        const cleanText = text.replace(/[^A-Z0-9]/gi, '').slice(0, 34).toUpperCase();
        setCardNumber(cleanText);
    };

    const handleUserNameChange = (text: string) => {
        setUserName(text);
    };

    const handleNext = () => {
        navigation.navigate('NewTransactionReview');
    }
    
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{flex: 1}}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
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
                        source={require('../../assets/images/flags/tr.png')} 
                        style={styles.flag}
                    />
                    <Text style={styles.currencyCode}>TRY</Text>
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
                        onChangeText={handleUserNameChange} />
                    </View>

                    <View style={{marginBottom: 14}}>
                    <Text style={styles.label}>IBAN Numarası</Text>
                    <CustomInput 
                        label={undefined} 
                        placeholder={undefined} 
                        logo={undefined} 
                        height={55} 
                        value={cardNumber}
                        onChangeText={handleCardNumberChange}
                        keyboardType="default"
                        autoCapitalize="characters"
                        maxLength={34}
                    />
                    </View>
                    <View>
                        <Text style={styles.ibanInfo}>
                        IBAN numaranız, ilk iki harf ile ülke kodunuzu belirtir.{'\n'}Lütfen ülke kodu ile başlayan IBAN numaranızı girin.
                        </Text>
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
    ibanInfo: {
        fontSize: 11,
        lineHeight: 16,
        fontWeight: '600',
        color: '#fff',
        borderRadius: 15,
        padding: 16,
        backgroundColor: '#1B93D0',
        borderWidth: 1,
        borderColor: '#D1D1D1',
        marginBottom: 14,
    },
});

export default NewTransactionInformations;