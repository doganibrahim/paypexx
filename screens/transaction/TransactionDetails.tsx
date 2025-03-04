import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface TransactionDetailsProps {
    route: {
        params: {
            transaction: {
                name: string;
                date: Date;
                amount: number;
                currency: string;
                status: 'Alındı' | 'Gönderildi';
            }
        }
    }
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ route }) => {
    const { transaction } = route.params;
    
    // İşlem durumuna göre pending değişkenini belirle
    const pending = transaction.status === 'Gönderildi';
    
    // İşlem tarihlerini oluşturalım
    const baseDate = transaction.date;
    const transferDate = baseDate;
    const bankDate = new Date(baseDate.getTime() + 12 * 60000);
    const deliveredDate = new Date(baseDate.getTime() + 22 * 60000);

    const formatDate = (date: Date): string => {
        return `${date.getDate()} Şub ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
                {/* Transfer Detayları Kartı */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Transfer Detayları</Text>
                    <View style={styles.cardContent}>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Sipariş numarası</Text>
                            <Text style={styles.value}>PX45847473</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Durum</Text>
                            <Text style={styles.value}>{transaction.status}</Text>
                        </View>
                    </View>
                </View>

                {/* Alıcı Kartı */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Alıcı</Text>
                    <View style={styles.cardContent}>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Alıcı</Text>
                            <Text style={styles.value}>{transaction.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Miktar</Text>
                            <Text style={styles.value}>{transaction.currency} {transaction.amount.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>

                {/* İşlem Durumu Kartı */}
                <View style={[styles.card, {paddingVertical: scale(25)}]}>
                    <View>
                        {[
                            { 
                                icon: require('../../assets/images/icons/transaction/stamp.png'), 
                                title: 'Ödeme Alındı', 
                                completed: true,
                                date: baseDate 
                            },
                            { 
                                icon: require('../../assets/images/icons/transaction/money.png'), 
                                title: 'Transfer Yapılıyor', 
                                completed: false,
                                date: transferDate 
                            },
                            { 
                                icon: require('../../assets/images/icons/transaction/bank.png'), 
                                title: 'Alıcının Bankasında', 
                                completed: false,
                                date: bankDate 
                            },
                            { 
                                icon: require('../../assets/images/icons/transaction/delivered.png'), 
                                title: 'Teslim Edildi', 
                                completed: false,
                                date: deliveredDate 
                            }
                        ].map((item, index) => (
                            <View key={index} style={styles.timelineItem}>
                                <View style={styles.timelineIconContainer}>
                                    <View style={{backgroundColor: '#D9D9D9', padding: scale(7), borderRadius: '50%'}}>
                                        <Image source={item.icon} style={styles.timelineIcon} />
                                    </View>
                                    {index < 3 && <View style={[
                                        styles.progressBar,
                                        { backgroundColor: item.completed ? '#57B03C' : '#D9D9D9' }
                                    ]} />}
                                </View>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTitle}>{item.title}</Text>
                                    <Text style={styles.timelineTime}>{formatDate(item.date)}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {pending && (
                    <View>
                        <View style={{marginLeft: scale(10), marginBottom: scale(5)}}>
                            <Text style={{fontSize: scale(20), fontWeight: '500'}}>Ödeme Bekleniyor</Text>
                            <Text style={{fontSize: scale(16), fontWeight: '400'}}>Ödeme yapacağınız hesap bilgileri </Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={styles.cardTitle}>Hesap Detayları</Text>
                        <View style={styles.cardContent}>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Hesap Adı</Text>
                                <Text style={styles.value}>Hesap Adı</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Sort Code</Text>
                                <Text style={styles.value}>20-40-60</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Account No</Text>
                                <Text style={styles.value}>12345678</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Referans</Text>
                                <Text style={styles.value}>Referans</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Miktar</Text>
                                <Text style={styles.value}>{transaction.currency} {transaction.amount.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: scale(28), backgroundColor: '#1B93D0', borderWidth: 1, borderColor: '#D1D1D1', paddingVertical: scale(10), borderRadius: scale(15)}}>
                        <Text style={{fontSize: scale(14), fontWeight: '500', textAlign: 'center', lineHeight: scale(22), color: '#fff'}}>Transfer işlemi sırasında, açıklama bölümüne kesinlikle referans numaranızı yazınız</Text>
                    </View>
                    </View>
                )}

                {/* Alıcı Detayları Kartı */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Alıcı Detayları</Text>
                    <View style={styles.cardContent}>
                            <View style={styles.detailRow}>
                            <Text style={styles.label}>Ülke</Text>
                            <Image 
                                source={require('../../assets/images/flags/tr.png')} 
                                style={styles.flag}
                            />
                            </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Alıcı Adı</Text>
                            <Text style={styles.value}>{transaction.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Alıcı Detayı</Text>
                            <Text style={styles.value}>Selin Kalender</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Miktar</Text>
                            <Text style={styles.value}>{transaction.currency} {transaction.amount.toFixed(2)}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>İşlem Ücreti</Text>
                            <Text style={styles.value}>{transaction.currency} 2.54</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Toplam</Text>
                            <Text style={styles.value}>{transaction.currency} {(transaction.amount + 2.54).toFixed(2)}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Nereden Nereye</Text>
                            <Text style={styles.value}>TR - USD</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Kur</Text>
                            <Text style={styles.value}>1 USD = 36.42 TL</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: '#57B03C',
                            padding: scale(12),
                            borderRadius: scale(6),
                            width: scale(140),
                            alignSelf: 'flex-end',
                            marginTop: scale(20)
                        }}
                        onPress={() => {}}
                    >
                        <Text style={{color: 'white', textAlign: 'center', fontSize: scale(14), fontWeight: '500'}}>Fatura Al ( PDF )</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    cardContainer: {
        padding: scale(16),
    },
    card: {
        backgroundColor: '#F2F2F2',
        borderWidth: 1,
        borderColor: '#D1D1D1',
        borderRadius: scale(12),
        padding: scale(16),
        marginBottom: scale(16),
    },
    cardTitle: {
        fontSize: scale(16),
        fontWeight: '600',
        marginBottom: scale(12),
        color: '#333',
    },
    cardContent: {
        gap: scale(12),
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: scale(14),
        color: '#666',
        fontWeight: '500',
    },
    value: {
        fontSize: scale(14),
        color: '#000',
        fontWeight: '500',
    },
    timelineItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    timelineIconContainer: {
        alignItems: 'center',
        marginRight: scale(12),
    },
    progressBar: {
        width: 2,
        height: scale(30),
        backgroundColor: '#57B03C',
    },
    timelineContent: {
        flex: 1,
    },
    timelineTitle: {
        fontSize: scale(14),
        color: '#333',
        fontWeight: '500',
    },
    timelineTime: {
        fontSize: scale(12),
        color: '#666',
        marginTop: scale(2),
    },
    flag: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(5),
    },
    timelineIcon: {
        width: scale(22),
        height: scale(22),
    },
});

export default TransactionDetails;