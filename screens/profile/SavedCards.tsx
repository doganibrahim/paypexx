import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Alert, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CardData {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
}

const SavedCards = () => {
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
    const [modalVisible, setModalVisible] = useState(false);
    const [newCard, setNewCard] = useState<CardData>({
        cardNumber: '',
        cardHolder: '',
        expiryDate: ''
    });

    const handleAddCard = () => {
        if (!newCard.cardNumber || !newCard.cardHolder || !newCard.expiryDate) {
            Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
            return;
        }

        setCards([...cards, newCard]);
        setNewCard({ cardNumber: '', cardHolder: '', expiryDate: '' });
        setModalVisible(false);
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
            <ScrollView>
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
                            <View>
                                <Text style={styles.cardHolder}>{card.cardHolder}</Text>
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
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.addButtonContent}>
                <Text style={styles.addButtonText}>Kart Ekle</Text>
                <Image style={styles.addButtonIcon} source={require('../../assets/images/icons/profile/plusCircle.png')}></Image>
                </View>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Yeni Kart Ekle</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Kart Numarası"
                            value={newCard.cardNumber}
                            onChangeText={(text) => {
                                const formatted = formatCardNumber(text.replace(/\D/g, ''));
                                setNewCard({...newCard, cardNumber: formatted});
                            }}
                            keyboardType="numeric"
                            maxLength={19}
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Kart Üzerindeki İsim"
                            value={newCard.cardHolder}
                            onChangeText={(text) => setNewCard({...newCard, cardHolder: text.toUpperCase()})}
                            autoCapitalize="characters"
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Son Kullanma Tarihi (AA/YY)"
                            value={newCard.expiryDate}
                            onChangeText={(text) => {
                                const formatted = formatExpiryDate(text);
                                setNewCard({...newCard, expiryDate: formatted});
                            }}
                            keyboardType="numeric"
                            maxLength={5}
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => {
                                    setModalVisible(false);
                                    setNewCard({ cardNumber: '', cardHolder: '', expiryDate: '' });
                                }}
                            >
                                <Text style={styles.buttonText}>İptal</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.saveButton]}
                                onPress={handleAddCard}
                            >
                                <Text style={styles.buttonText}>Kaydet</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
        fontWeight: 600,
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardHolder: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 600,
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
        marginTop: 16,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 16,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 8,
    },
    cancelButton: {
        backgroundColor: '#f44336',
    },
    saveButton: {
        backgroundColor: '#57B03C',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
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
});

export default SavedCards;