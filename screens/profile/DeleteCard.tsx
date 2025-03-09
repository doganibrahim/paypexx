import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInputWhite from '../../components/CustomInputWhite';

interface CardData {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
}

const DeleteCard = ({ navigation, route }) => {
    const selectedCard = route.params?.selectedCard || {
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: ''
    };

    const [newCard, setNewCard] = useState<CardData>(selectedCard);

    const formatExpiryDate = (text: string) => {
        const cleaned = text.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
        }
        return cleaned;
    };

    const formatDisplayCardNumber = (number: string) => {
        return number.match(/.{1,4}/g)?.join(' ') || number;
    };

    const formatCardNumberForInput = (text: string) => {
        const cleaned = text.replace(/\D/g, '');
        return cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    };

    const handleDeleteCard = () => {
        if (route.params?.onCardDelete) {
            route.params.onCardDelete(selectedCard);
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.card]}>
                    <LinearGradient
                        colors={['#182A77', '#040716']}
                        style={styles.cardBackground}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />
                    <View style={styles.decorativeCircle}>
                        <LinearGradient
                            colors={['#0E194D', 'rgba(14, 25, 77, 0.3)']}
                            style={styles.circleGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        />
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.cardHeader}>
                            <View></View>
                            <Image 
                                source={require('../../assets/images/icons/profile/mastercardLogo.png')} 
                                style={styles.mastercardLogo}
                            />
                        </View>
                        <Text style={styles.cardNumber}>
                            {newCard.cardNumber ? formatDisplayCardNumber(newCard.cardNumber) : ''}
                        </Text>
                        <View style={styles.cardBottom}>
                            <View style={styles.cardHolderContainer}>
                                <Text style={styles.cardHolder} numberOfLines={2}>
                                    {newCard.cardHolder || ''}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.expiryDate}>{newCard.expiryDate || ''}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.formContainer}>
                    <View>
                        <Text style={styles.label}>Kart Üzerindeki İsim</Text>
                        <CustomInputWhite
                            value={newCard.cardHolder}
                            onChangeText={(text) => setNewCard({...newCard, cardHolder: text.toUpperCase()})}
                            placeholder="Ad Soyad"
                            autoCapitalize="characters"
                        />
                    </View>

                    <View>
                        <Text style={[styles.label, {marginTop: 12}]}>Kart Numarası</Text>
                        <CustomInputWhite
                            placeholder="**** **** **** ****"
                            value={formatCardNumberForInput(newCard.cardNumber)}
                            onChangeText={(text) => {
                                const cleaned = text.replace(/\D/g, '');
                                if (cleaned.length <= 16) {
                                    setNewCard({...newCard, cardNumber: cleaned});
                                }
                            }}
                            keyboardType="numeric"
                            maxLength={19}
                        />
                        <View style={styles.cardLogos}>
                            <Image source={require('../../assets/images/icons/transaction/Mastercard.png')} style={styles.cardLogo} />
                            <Image source={require('../../assets/images/icons/transaction/Visa.png')} style={styles.cardLogo} />
                        </View>
                    </View>

                    <View style={styles.expiryDateContainer}>
                        <View style={styles.expiryDateInput}>
                            <Text style={[styles.label, {fontSize: 12}]}>Son Kullanma Tarihi</Text>
                            <CustomInputWhite
                                placeholder="AA/YY"
                                value={newCard.expiryDate}
                                onChangeText={(text) => {
                                    const formatted = formatExpiryDate(text);
                                    setNewCard({...newCard, expiryDate: formatted});
                                }}
                                keyboardType="numeric"
                                maxLength={5}
                                rightIcon={require('../../assets/images/icons/transaction/bank2.png')}
                            />
                        </View>
                        <View style={styles.expiryDateInput}>
                            <Text style={[styles.label, {fontSize: 12}]}>CVV</Text>
                            <CustomInputWhite
                                placeholder="CVV"
                                value={newCard.cvv}
                                onChangeText={(text) => setNewCard({...newCard, cvv: text})}
                                keyboardType="numeric"
                                maxLength={3}
                                rightIcon={require('../../assets/images/icons/transaction/bank2.png')}
                            />
                        </View>
                    </View>

                    <TouchableOpacity 
                        style={[styles.addButton]}
                        onPress={handleDeleteCard}
                    >
                        <View style={styles.addButtonContent}>
                            <Text style={styles.addButtonText}>Kartı Sil</Text>
                            <Image 
                                style={styles.addButtonIcon} 
                                source={require('../../assets/images/icons/profile/xCircle.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        top: 30,
        backgroundColor: '#f5f5f5',
    },
    card: {
        height: 180,
        borderRadius: 30,
        marginBottom: 20,
        overflow: 'hidden',
        position: 'relative',
    },
    cardBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    cardContent: {
        padding: 20,
        height: '100%',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mastercardLogo: {
        width: 60,
        height: 40,
        resizeMode: 'contain',
    },
    cardNumber: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: '600',
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 50,
    },
    cardHolderContainer: {
        flex: 1,
        marginRight: 10,
        justifyContent: 'center',
    },
    cardHolder: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '600',
        flexWrap: 'wrap',
    },
    expiryDate: {
        marginRight: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    addButton: {
        backgroundColor: '#E30A17',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        marginTop: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
        marginLeft: 4,
    },
    cardLogos: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 2,
    },
    cardLogo: {
        width: 34,
        height: 32,
    },
    expiryDateContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 16,
    },
    expiryDateInput: {
        flex: 1,
    },
    addButtonIcon: {
        width: 24,
        height: 24,
        marginLeft: 8,
        tintColor: 'white',
    },
    addButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    decorativeCircle: {
        position: 'absolute',
        top: -120,
        right: -50,
        width: 240,
        height: 200,
        borderRadius: 125,
        overflow: 'hidden',
        zIndex: 1,
    },
    circleGradient: {
        width: '100%',
        height: '100%',
    },
});

export default DeleteCard;
