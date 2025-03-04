import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInputWhite from '../../components/CustomInputWhite';

interface CardData {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
}

const SavedCards = ({ navigation }) => {
    const initialCards: CardData[] = [
        {
            cardNumber: '5282345678901289',
            cardHolder: 'Eren DEMİR',
            expiryDate: '09/25'
        },
        {
            cardNumber: '5282345678901289',
            cardHolder: 'Eren DEMİR',
            expiryDate: '09/25'
        }
    ];

    const [cards, setCards] = useState<CardData[]>(initialCards);

    const handleAddCard = (newCard: CardData) => {
        setCards([...cards, newCard]);
    };

    const formatCardNumber = (text: string) => {
        const cleaned = text.replace(/\s/g, '');
        const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
        return formatted;
    };

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

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                {cards.map((card, index) => (
                    <View
                        key={index}
                        style={[styles.card]}
                    >
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
                                {formatDisplayCardNumber(card.cardNumber)}
                            </Text>
                            <View style={styles.cardBottom}>
                                <View style={styles.cardHolderContainer}>
                                    <Text style={styles.cardHolder} numberOfLines={2}>
                                        {card.cardHolder}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.expiryDate}>{card.expiryDate}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <TouchableOpacity 
                style={[styles.addButton]}
                onPress={() => navigation.navigate('AddCard', {
                    onCardAdd: handleAddCard
                })}
            >
                <View style={styles.addButtonContent}>
                    <Text style={styles.addButtonText}>Yeni Kart Ekle</Text>
                    <Image style={styles.addButtonIcon} source={require('../../assets/images/icons/profile/plusCircle.png')}></Image>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
        padding: 24,
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
        fontWeight: 600,
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
        fontWeight: 600,
    },
    addButton: {
        backgroundColor: '#57B03C',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        margin: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
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

export default SavedCards;