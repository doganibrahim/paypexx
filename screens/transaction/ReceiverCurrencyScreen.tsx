import React, { useState, useMemo } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import receiverCurrencies from '../../constants/receiverCurrencies';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useCurrency } from '../../context/CurrencyContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { Currency } from '../../constants/receiverCurrencies';

// Tip tanımlamaları
type DividerItem = {
    type: 'divider';
}

type ListItem = Currency | DividerItem;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ReceiverCurrency'>;

const ReceiverCurrencyScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { setReceiverCurrency } = useCurrency();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCurrencies = useMemo(() => {
        return receiverCurrencies.filter((item: Currency) => 
            item.country.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const renderItem = ({ item }: { item: Currency }) => (
        <TouchableOpacity 
            style={styles.currencyItem}
            onPress={() => {
                setReceiverCurrency(item);
                navigation.navigate('NewTransaction');
            }}
        >
            <Image source={item.flag} style={styles.flag} />
            <View style={styles.currencyInfo}>
                <Text style={styles.countryName}>{item.country}</Text>
            </View>
            <Text style={styles.currencyCode}>{item.currency}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.sectionTitle, { marginBottom: 24 }]}>Ülke ve Para birimini seçin</Text>
            <View style={styles.searchContainer}>
                <CustomInput
                    placeholder="Arama"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    logo={require('../../assets/images/icons/transaction/search.png')}
                    logoWidthandHeight={20}
                    height={40}
                    fontSize={14}
                />
            </View>
            
            <FlatList<ListItem>
                ListHeaderComponent={() => (
                    <Text style={styles.sectionTitle}>Sık Kullanılanlar</Text>
                )}
                data={[
                    ...filteredCurrencies.slice(0, 3),
                    { type: 'divider' },
                    ...filteredCurrencies
                ]}
                renderItem={({ item }) => 
                    'type' in item && item.type === 'divider' ? (
                        <View style={{
                            borderBottomWidth: 3,
                            borderBottomColor: '#777',
                            marginVertical: 10,
                        }} />
                    ) : renderItem({ item: item as Currency })
                }
                keyExtractor={(item, index) => 
                    'type' in item && item.type === 'divider' ? 
                        'divider' : 
                        `${(item as Currency).country}-${(item as Currency).currency}-${index}`
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 24,
    },
    searchContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
        marginLeft: 5,
        color: '#000',
    },
    currencyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    flag: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 24,
    },
    currencyInfo: {
        flex: 1,
    },
    countryName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    currencyCode: {
        fontSize: 16,
        color: '#666',
    },
});

export default ReceiverCurrencyScreen;
