import React, { useState, useMemo } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import countries from '../../constants/phoneCodes';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { Country } from '../../constants/phoneCodes';

type DividerItem = {
    type: 'divider';
}

type ListItem = Country | DividerItem;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PhoneCode'>;

const PhoneCodeScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCountries = useMemo(() => {
        return countries.filter((item: Country) => 
            item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.phoneCode.includes(searchQuery)
        );
    }, [searchQuery]);

    const renderItem = ({ item }: { item: ListItem }) => {
        if ('type' in item && item.type === 'divider') {
            return null; // Divider için render
        }
        
        return (
            <TouchableOpacity 
                style={styles.countryItem}
                onPress={() => {
                    navigation.navigate('RegisterPersonalInformations', {
                        selectedCountry: item as Country
                    });
                }}
            >
                <Image source={item.flag} style={styles.flag} />
                <View style={styles.countryInfo}>
                    <Text style={styles.countryName}>{item.country}</Text>
                </View>
                <Text style={styles.phoneCode}>{item.phoneCode}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.sectionTitle]}>Ülke telefon kodunu seçin</Text>
            <View style={styles.searchContainer}>
                <CustomInput
                    placeholder="Ülke veya kod ara"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    logo={require('../../assets/images/icons/transaction/search.png')}
                    logoWidthandHeight={20}
                    height={40}
                    fontSize={14}
                />
            </View>
            
            <FlatList<ListItem>
                data={filteredCountries}
                renderItem={renderItem}
                keyExtractor={(item: ListItem, index: number) => {
                    if ('type' in item && item.type === 'divider') {
                        return `divider-${index}`;
                    }
                    return `${item.country}-${item.phoneCode}-${index}`;
                }}
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
        marginTop: 30,
        marginBottom: 12,
        marginLeft: 5,
        color: '#000',
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    flag: {
        width: 24,
        height: 24,
        borderRadius: 5,
        marginRight: 20,
    },
    countryInfo: {
        flex: 1,
    },
    countryName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    phoneCode: {
        fontSize: 16,
        color: '#666',
    },
});

export default PhoneCodeScreen;
