import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomMenu from '../components/BottomMenu';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

// Dinamik ölçüler için yardımcı fonksiyon
const scale = (size: number) => (width / 375) * size; // 375 iPhone 6/7/8 genişliği baz alınarak

interface Transaction {
    name: string;
    date: Date;
    amount: number;
    currency: string;
    status: 'Alındı' | 'Gönderildi';
    pending: boolean;
}

// Tarih formatlama yardımcı fonksiyonu
const formatDate = (date: Date): string => {
    const aylar = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    const gun = date.getDate();
    const ay = aylar[date.getMonth()];
    const yil = date.getFullYear();
    
    return `${gun} ${ay} ${yil}`;
};

const HomeScreen = () => {
    const navigation = useNavigation();
    const [showNotification1, setShowNotification1] = useState(true);
    const [showNotification2, setShowNotification2] = useState(true);
    const [showReferral, setShowReferral] = useState(true);
    const [activeTab, setActiveTab] = useState<'home' | 'transfer'>('home');

    const transactions: Transaction[] = [
        {
            name: 'Mehmet Öz',
            date: new Date('2023-02-23'),
            currency: '₺',
            amount: 300,
            status: 'Alındı',
            pending: false,
        },
        {
            name: 'Selin Kalender',
            date: new Date('2023-02-18'),
            currency: '₺',
            amount: 5000,
            status: 'Gönderildi',
            pending: true,
        }
    ];

    const handleTabPress = (tab: 'home' | 'transfer') => {
        setActiveTab(tab);
    };

    return (
        <View style={styles.container}>
            {/* Üst Kartlar */}
            <View style={styles.cardsContainer}>
                <LinearGradient
                    colors={['#1A83B9', '#57B03C']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.welcomeCard}
                >
                    <View>
                    <Text style={[styles.welcomeText, { color: '#fff' }]}>
                        Hoşgeldiniz, <Text style={[styles.nameText, { color: '#fff' }]}>Eren Demir 👋</Text> 
                    </Text>
                    <Text style={[styles.welcomeSubtext, { color: '#fff' }]}>
                        Ailenize ve sevdiklerinize para{'\n'}göndermenin hızlı ve pratik yolu
                    </Text>
                    </View>
                </LinearGradient>

                {showReferral && (
                    <LinearGradient
                        colors={['#1A83B9', '#57B03C']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.referralCard}
                    >
                        <View style={styles.giftIconContainer}>
                            <Image 
                                source={require('../assets/images/icons/home/gift.png')} 
                                style={styles.giftIcon} 
                            />
                        </View>
                        <View style={styles.referralTextContainer}>
                            <Text style={[styles.referralText, { color: '#fff' }]}>
                                Arkadaşınıza tavsiye edin ve 70 pound kazanın!
                            </Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.notificationCloseButton}
                            onPress={() => setShowReferral(false)}
                        >
                            <Text style={[styles.closeButtonText, { color: '#fff' }]}>×</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                )}

                <View style={{flexDirection: 'row', justifyContent: 'space-between', gap:scale(8)}}>
                    {showNotification1 && (
                        <LinearGradient
                            colors={['#1A83B9', '#57B03C']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={[styles.notificationCard, {flex: 1}]}
                        >
                            <TouchableOpacity 
                                style={styles.notificationCloseButton}
                                onPress={() => setShowNotification1(false)}
                            >
                                <Text style={[styles.closeButtonText, { color: '#fff' }]}>×</Text>
                            </TouchableOpacity>
                            <Image 
                                source={require('../assets/images/icons/home/bell.png')} 
                                style={styles.bellIcon} 
                            />
                            <Text style={[styles.notificationText, { color: '#fff' }]}>
                                Bildirimlerini açarak güncellemelerden anında bilgi alın
                            </Text>
                        </LinearGradient>
                    )}
                    {showNotification2 && (
                        <LinearGradient
                            colors={['#1A83B9', '#57B03C']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={[styles.notificationCard, {flex: 1}]}
                        >
                            <TouchableOpacity 
                                style={styles.notificationCloseButton}
                                onPress={() => setShowNotification2(false)}
                            >
                                <Text style={[styles.closeButtonText, { color: '#fff' }]}>×</Text>
                            </TouchableOpacity>
                            <Image 
                                source={require('../assets/images/icons/home/personalCard.png')} 
                                style={[styles.bellIcon, { tintColor: '#fff' }]} 
                            />
                            <Text style={[styles.notificationText, { color: '#fff' }]}>
                                Günlük limitinizi artırmak için kimlik doğrulaması yapın
                            </Text>
                        </LinearGradient>
                    )}
                </View>
            </View>

            {/* Arama Çubuğu */}
            <LinearGradient
                colors={['#1A83B9', '#57B03C']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.searchBorder}
            >
                <View style={styles.searchContainer}>
                    <Image 
                        source={require('../assets/images/icons/home/search.png')} 
                        style={styles.searchIcon} 
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Arama"
                        placeholderTextColor="#999"
                    />
                </View>
            </LinearGradient>

            {/* İşlem Geçmişi */}
            <View style={styles.transactionsContainer}>
                <Text style={styles.sectionTitle}>İşlem Geçmişi</Text>
                <ScrollView>
                    {transactions.map((transaction, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={styles.transactionItem}
                            onPress={() => navigation.navigate('TransactionDetails', { transaction })}
                        >
                            <View style={styles.transactionLeft}>
                                <Text style={styles.transactionName}>{transaction.name}</Text>
                                <Text style={styles.transactionDate}>{formatDate(transaction.date)}</Text>
                            </View>
                            <View style={styles.transactionRight}>
                                <Text style={[
                                    styles.transactionStatus,
                                    transaction.status === 'Alındı' ? styles.statusReceived : styles.statusSent
                                ]}>
                                    {transaction.status}
                                </Text>
                                <View style={styles.amountContainer}>
                                    <Text style={styles.transactionCurrency}>{transaction.currency}</Text>
                                    <Text style={styles.transactionAmount}>{transaction.amount}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <BottomMenu 
                onTabPress={handleTabPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: scale(16),
    },
    cardsContainer: {
        gap: scale(12),
    },
    welcomeCard: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: scale(125),
        borderRadius: scale(17),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: scale(2),
        },
        shadowOpacity: 0.15,
        shadowRadius: scale(6),
        elevation: 5,
    },
    welcomeText: {
        fontSize: scale(16),
        fontWeight: '500',
    },
    nameText: {
        fontSize: scale(20),
        fontWeight: '600',
    },
    welcomeSubtext: {
        marginTop: scale(3),
        fontSize: scale(16),
    },
    referralCard: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: scale(100),
        borderRadius: scale(12),
        position: 'relative',
        paddingHorizontal: scale(30),
    },
    giftIconContainer: {
        marginRight: scale(12),
        paddingLeft: scale(10),
    },
    giftIcon: {
        width: scale(55),
        height: scale(55),
    },
    referralTextContainer: {
        flex: 1,
        alignItems: 'center',
    },
    referralText: {
        color: '#F57C00',
        fontSize: scale(16),
        textAlign: 'left',
    },
    notificationCard: {
        padding: scale(12),
        borderRadius: scale(12),
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        height: scale(90),
    },
    notificationCloseButton: {
        position: 'absolute',
        top: scale(5),
        right: scale(5),
        padding: scale(4),
        zIndex: 1,
    },
    closeButtonText: {
        color: '#F57C00',
        fontSize: scale(20),
    },
    bellIcon: {
        width: scale(24),
        height: scale(24),
        marginRight: scale(8),
    },
    notificationText: {
        color: '#1976D2',
        fontSize: scale(11),
        lineHeight: scale(14),
        flex: 1,
    },
    searchBorder: {
        borderRadius: scale(16),
        padding: scale(2),
        marginTop: scale(16),
        marginBottom: scale(16),
    },
    searchContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: scale(40),
        padding: scale(12),
        borderRadius: scale(15),
    },
    searchIcon: {
        width: scale(20),
        height: scale(20),
        marginRight: scale(8),
        tintColor: '#999',
    },
    searchInput: {
        flex: 1,
        height: scale(40),
        fontSize: scale(14),
        color: '#333',
    },
    transactionsContainer: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: scale(16),
        fontWeight: 'bold',
        marginBottom: scale(12),
        color: '#333',
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: scale(12),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    transactionLeft: {
        flex: 1,
    },
    transactionName: {
        fontSize: scale(16),
        color: '#333',
        fontWeight: '500',
    },
    transactionDate: {
        fontSize: scale(14),
        color: '#666',
        marginTop: scale(4),
    },
    transactionRight: {
        alignItems: 'flex-end',
    },
    transactionStatus: {
        fontSize: scale(14),
        marginBottom: scale(4),
        textAlign: 'center',
        width: scale(120),
        height: scale(30),
        borderRadius: scale(10),
        backgroundColor: '#D9D9D9',
        paddingTop: scale(5),
    },
    statusReceived: {
        color: '#57B03C',
    },
    statusSent: {
        color: '#1B93D0',
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    transactionCurrency: {
        fontSize: scale(16),
        color: '#333',
        fontWeight: '500',
        marginRight: scale(2),
    },
    transactionAmount: {
        fontSize: scale(16),
        color: '#333',
        fontWeight: '500',
    },
});

export default HomeScreen; 