import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BottomMenu from '../../components/BottomMenu';
import type { RouteProp } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'NewTransactionReview'>;

const NewTransactionReview = () => {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<RouteProps>();
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [note, setNote] = useState('');

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setIsKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setIsKeyboardVisible(false);
                setIsFocused(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handlePurpose = () => {
        navigation.navigate('TransactionPurpose', {
            purpose: route.params?.purpose
        });
    };

    const handlePaymentMethod = () => {
        navigation.navigate('TransactionPaymentMethod' as never);
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.title}>Alıcı Bilgileri</Text>
                
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Ülke:</Text>
                        <Image source={require('../../assets/images/flags/tr.png')} style={styles.flag} />
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Banka Adı:</Text>
                        <Text style={styles.value}>WISE ABCXX</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Hesap Sahibinin Adı:</Text>
                        <Text style={styles.value}>Mehmet ÖZ</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Hesap No:</Text>
                        <Text style={styles.value}>123456789</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Transfer Edilecek Tutar:</Text>
                        <Text style={styles.value}>₺ 850</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>İşlem Ücreti:</Text>
                        <Text style={styles.value}>₺ 2.54</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Toplam:</Text>
                        <Text style={styles.value}>₺ 852.54</Text>
                    </View>
                </View>

                <View style={{gap: 14, marginBottom: 16}}>
                    <TouchableOpacity onPress={handlePurpose}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            padding: 16,
                            borderWidth: 1,
                            backgroundColor: '#F2F2F2',
                            borderColor: '#D1D1D1',
                            borderRadius: 15,
                            height: 55,
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: route.params?.purpose ? '#000' : '#777',
                                fontWeight: '600',
                            }}>{route.params?.purpose || 'Transfer Amacı'}</Text>
                            <Image 
                                source={require('../../assets/images/icons/transaction/dropDown.png')}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <CustomInput
                        placeholder="Promosyon Kodu"
                        value={promoCode}
                        onChangeText={setPromoCode}
                        logo={undefined}
                        onFocus={() => setIsFocused(true)}
                    />
                    <CustomInput
                        placeholder="Not (İsteğe bağlı)"
                        value={note}
                        onChangeText={setNote}
                        logo={undefined}
                        onFocus={() => setIsFocused(true)}
                    />
                </View>
                <CustomButton
                    title="₺ 852.54 Öde"
                    onPress={handlePaymentMethod}
                    width={'100%'}
                    height={55}
                    icon={undefined}
                />
            </ScrollView>

            <View style={styles.bottomMenu}>
                {!isKeyboardVisible && !isFocused && <BottomMenu onTabPress={() => {}} />}
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        padding: 16,
        flexGrow: 1,
        paddingBottom: Platform.OS === 'ios' ? 120 : 90
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 16,
        marginBottom: 10,
        color: '#000',
    },
    infoContainer: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        color: '#777',
        fontSize: 16,
        fontWeight: '500',
    },
    flag: {
        width: 22,
        height: 20,
        borderRadius: 5,
    },
    value: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
    noteText: {
        color: '#666',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 8,
    },
    bottomMenu: {
        marginHorizontal: 18,
    },
});

export default NewTransactionReview;
