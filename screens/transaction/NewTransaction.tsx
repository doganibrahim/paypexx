import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomMenu from '../../components/BottomMenu';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import CustomButton from '../../components/CustomButton';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

const NewTransaction = () => {
    const [amount, setAmount] = useState('100');
    const [receivedAmount, setReceivedAmount] = useState('2.37');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transfer ayrıntıları</Text>
            
            <Text style={styles.label}>Gönderen</Text>
            <TouchableOpacity>
            <View style={styles.currencyBox}>
                <Image 
                    source={require('../../assets/images/flags/tr.png')} 
                    style={styles.flag}
                />
                <Text style={styles.currencyCode}>TRY</Text>
                <Image 
                    source={require('../../assets/images/icons/transaction/dropDown.png')}
                    style={styles.dropdownIcon}
                />
                <Text style={styles.amount}>{amount}</Text>
            </View>
            </TouchableOpacity>

            <Text style={styles.label}>Alıcı</Text>
            <TouchableOpacity>
            <View style={styles.currencyBox}>
                <Image 
                    source={require('../../assets/images/flags/tr.png')} 
                    style={styles.flag}
                />
                <Text style={styles.currencyCode}>EUR</Text>
                <Image 
                    source={require('../../assets/images/icons/transaction/dropDown.png')}
                    style={styles.dropdownIcon}
                />
                <Text style={styles.amount}>{receivedAmount}</Text>
            </View>
            </TouchableOpacity>
            {/* Kur Bilgisi */}
            <View style={styles.rateContainer}>
                <Text style={styles.rateText}>⭐ 1 TRY = 0.02625 EUR</Text>
            </View>

            {/* Bilgi Metni */}
            <Image style={{width: scale(100), height: scale(100), alignSelf: 'center'}} source={require('../../assets/images/icons/transaction/confetti.gif')} />
            <View style={styles.infoContainer}>
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
                            🎉 Tüm transferler ücretsizdir
                        </Text>
                    </LinearGradient>
                </MaskedView>

                <MaskedView
                    maskElement={
                        <Text style={styles.infoText}>
                            ⏱ 30 dakikada teslim garantisi
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
                            ⏱ 30 dakikada teslim garantisi
                        </Text>
                    </LinearGradient>
                </MaskedView>
            </View>

            <CustomButton  title="İlerlemeye devam et" onPress={() => {}} width={'100%'} height={scale(55)} icon={undefined} textSize={scale(16)} />
            <View style={styles.bottomMenu}>
            <BottomMenu onTabPress={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scale(16),
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: scale(24),
        fontWeight: 'bold',
        marginBottom: scale(24),
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
        backgroundColor: '#57b03cad',
        padding: scale(12),
        borderRadius: scale(15),
        marginVertical: scale(8),
        height: scale(50),
        justifyContent: 'center',
    },
    rateText: {
        color: '#000',
        fontWeight: '500',
        fontSize: scale(16),
        textAlign: 'left',
        marginLeft: scale(10),
    },
    infoContainer: {
        marginTop: scale(8),
        marginBottom: scale(150),
        gap: scale(4),
    },
    infoText: {
        fontSize: scale(16),
        lineHeight: scale(22),
        marginLeft: scale(10),
        fontWeight: '600',
    },
    bottomMenu: {
        position: 'absolute',
        bottom: scale(16),
        left: scale(16),
        right: scale(16),
    },
    dropdownIcon: {
        width: scale(24),
        height: scale(24),
    },
});

export default NewTransaction;