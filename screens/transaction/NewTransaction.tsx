import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import BottomMenu from '../../components/BottomMenu';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import CustomButtonEndIcon from '../../components/EndIconCustomButton';
import LottieView from 'lottie-react-native';
import senderCurrencies from '../../constants/senderCurrencies';
import receiverCurrencies from '../../constants/receiverCurrencies';
import { useCurrency } from '../../context/CurrencyContext';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

type Currency = {
    country: string;
    currency: string;
    symbol: string;
    flag: any;
}

const NewTransaction = ({ navigation }: { navigation: any }) => {
    const [amount, setAmount] = useState('100');
    const [receivedAmount, setReceivedAmount] = useState('2.37');
    const confettiRef = React.useRef<LottieView>(null);
    const clockRef = React.useRef<LottieView>(null);
    
    const { senderCurrency, receiverCurrency } = useCurrency();

    React.useEffect(() => {
        confettiRef.current?.play();
    }, []);

    React.useEffect(() => {
        clockRef.current?.play();
    }, []);

    const handleSenderCurrency = () => {
        navigation.navigate('SenderCurrency');
    }

    const handleReceiverCurrency = () => {
        navigation.navigate('ReceiverCurrency');
    }

    const handleNext = () => {
        navigation.navigate('NewTransactionReceiver');
    }

    return (
        <View style={styles.container}>
        <View>
        <Text style={styles.title}>Transfer ayrıntıları</Text>
            
            <Text style={styles.label}>Gönderen</Text>
            <TouchableOpacity onPress={handleSenderCurrency}>
            <View style={styles.currencyBox}>
                <Image 
                    source={senderCurrency?.flag || senderCurrencies[0].flag} 
                    style={styles.flag}
                />
                <Text style={styles.currencyCode}>
                    {senderCurrency?.currency || senderCurrencies[0].currency}
                </Text>
                <Image 
                    source={require('../../assets/images/icons/transaction/dropDown.png')}
                    style={styles.dropdownIcon}
                />
                <Text style={styles.amount}>{amount}</Text>
            </View>
            </TouchableOpacity>

            <Text style={styles.label}>Alıcı</Text>
            <TouchableOpacity onPress={handleReceiverCurrency}>
            <View style={styles.currencyBox}>
                <Image 
                    source={receiverCurrency?.flag || receiverCurrencies[0].flag} 
                    style={styles.flag}
                />
                <Text style={styles.currencyCode}>
                    {receiverCurrency?.currency || receiverCurrencies[0].currency}
                </Text>
                <Image 
                    source={require('../../assets/images/icons/transaction/dropDown.png')}
                    style={styles.dropdownIcon}
                />
                <Text style={styles.amount}>{receivedAmount}</Text>
            </View>
            </TouchableOpacity>
            {/* Kur Bilgisi */}
            <View style={styles.rateContainer}>
                <LottieView 
                    source={require('../../assets/images/icons/transaction/star6.json')}
                    style={{width: 28, height: 28, marginLeft: 10}}
                    autoPlay
                    onAnimationFailure={(error) => {
                        console.log('Animation failed:', error);
                    }}
                />
                <Text style={styles.rateText}>1 TRY = 0.0265 EUR</Text>
            </View>
            {/* Bilgi Metni */}
            <View style={styles.infoContainer}>
                <View style={{flexDirection: 'row'}}>
                <LottieView 
                    ref={confettiRef}
                    key="confetti-animation"
                    source={require('../../assets/images/icons/transaction/confetti6.json')}
                    style={{width: 26, height: 26}}
                    autoPlay
                />
                <MaskedView
                    maskElement={
                        <Text style={styles.infoText}>
                            Tüm transferler ücretsizdir
                        </Text>
                    }
                >
                    <LinearGradient
                        colors={['#1B93D0', '#57B03C']}
                        start={{x: 0.1, y: 0.5}}
                        end={{x: 0.4, y: 0.5}}
                        style={{height: scale(24)}}
                    >
                        <Text style={[styles.infoText, {opacity: 0}]}>
                            Tüm transferler ücretsizdir
                        </Text>
                    </LinearGradient>
                </MaskedView>
                </View>

                <View style={{flexDirection: 'row'}}>
                <LottieView 
                    ref={clockRef}
                    key="clock-animation"
                    source={require('../../assets/images/icons/transaction/clock12.json')}
                    style={{width: 26, height: 26}}
                    autoPlay
                />
                <MaskedView
                    maskElement={
                        <Text style={styles.infoText}>
                            30 dakikada teslim garantisi
                        </Text>
                    }
                >
                    <LinearGradient
                        colors={['#1B93D0', '#57B03C']}
                        start={{x: 0.1, y: 0.5}}
                        end={{x: 0.4, y: 0.5}}
                        style={{height: scale(24)}}
                    >
                        <Text style={[styles.infoText, {opacity: 0}]}>
                            30 dakikada teslim garantisi
                        </Text>
                    </LinearGradient>
                </MaskedView>
                </View>
            </View>

            <CustomButtonEndIcon title="İlerlemeye devam et" onPress={handleNext} width={'100%'} height={scale(55)} icon={require('../../assets/images/icons/transaction/arrowRight.png')} textSize={scale(16)} />
        </View>
        <BottomMenu onTabPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(16),
        paddingTop: scale(16),
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: scale(24),
        fontWeight: 'bold',
        marginBottom: scale(24),
        marginTop: scale(24),
        marginLeft: scale(8),
    },
    label: {
        fontSize: scale(14),
        color: '#666',
        marginBottom: scale(5),
        marginLeft: scale(5),
    },
    currencyBox: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(16),
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        borderColor: '#D1D1D1',
        borderRadius: scale(15),
        marginBottom: scale(16),
    },
    flag: {
        width: scale(24),
        height: scale(24),
        marginRight: scale(12),
        borderRadius: scale(5),
    },
    currencyCode: {
        fontSize: scale(16),
        marginRight: scale(5),
    },
    amount: {
        fontSize: scale(16),
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'right',
    },
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#57b03cad',
        padding: scale(12),
        borderRadius: scale(15),
        marginVertical: scale(8),
        height: scale(50),
        justifyContent: 'flex-start',
    },
    rateText: {
        color: '#000',
        fontWeight: '500',
        fontSize: scale(16),
        marginLeft: scale(5),
    },
    infoContainer: {
        marginTop: scale(8),
        marginBottom: scale(150),
        gap: scale(4),
    },
    infoText: {
        marginLeft: scale(3),
        fontSize: scale(16),
        lineHeight: scale(22),
        fontWeight: '600',
    },
    dropdownIcon: {
        width: scale(24),
        height: scale(24),
    },
});

export default NewTransaction;