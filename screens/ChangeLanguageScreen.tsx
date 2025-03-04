import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ImageSourcePropType } from 'react-native';
import { languages } from '../constants/languages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Language {
    name: string;
    code: string;
    flag: ImageSourcePropType;
}

type RouteParams = {
    setSelectedLanguage?: (code: string) => void;
}

type Props = {
    route: RouteProp<Record<string, RouteParams>, string>;
    navigation: NativeStackNavigationProp<any>;
}

const LanguageScreen: React.FC<Props> = ({ route, navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('TR');

    useEffect(() => {
        const getInitialLanguage = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
                if (storedLanguage) {
                    setSelectedLanguage(storedLanguage);
                }
            } catch (error) {
                console.error('Dil yüklenirken hata oluştu:', error);
            }
        };

        getInitialLanguage();
    }, []);

    const handleLanguageSelect = async (language: Language) => {
        await AsyncStorage.setItem('selectedLanguage', language.code);
        setSelectedLanguage(language.code);
        
        if (route.params?.setSelectedLanguage) {
            route.params.setSelectedLanguage(language.code);
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dilinizi seçin</Text>
            <FlatList
                data={languages}
                keyExtractor={(item: Language) => item.name}
                renderItem={({ item }: { item: Language }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => handleLanguageSelect(item)}
                    >
                        <Image
                            source={item.flag}
                            style={[
                                styles.flag,
                                selectedLanguage === item.code && styles.selectedFlag,
                            ]}
                        />
                        {selectedLanguage === item.code && (
                            <Image
                                source={require('../assets/images/icons/checkMark.png')}
                                style={styles.checkmark}
                            />
                        )}
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 22,
        fontFamily: 'SF Pro',
        marginBottom: 35,
        paddingLeft: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom: 20,
    },
    flag: {
        width: 35,
        height: 35,
        marginRight: 15,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
    },
    selectedFlag: {
        opacity: 0.5,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    checkmark: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 17.5,
        top: 7.5,
    },
});

export default LanguageScreen; 