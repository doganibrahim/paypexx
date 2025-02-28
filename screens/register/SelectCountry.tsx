import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { countries } from '../../constants/countries';

const SelectCountry = ({ navigation, route }) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        if (route.params?.onSelect) {
            route.params.onSelect(country);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ülkenizi seçin</Text>
            <ScrollView>
                {countries.map((country) => (
                    <TouchableOpacity
                        key={country.key}
                        style={[styles.countryItem]}
                        onPress={() => handleCountrySelect(country)}
                    >
                        <Text style={styles.flag}>{country.flag}</Text>
                        <Text style={styles.countryName}>{country.label}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingVertical: 16,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    flag: {
        fontSize: 24,
        marginRight: 14,
    },
    countryName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    }
});

export default SelectCountry;