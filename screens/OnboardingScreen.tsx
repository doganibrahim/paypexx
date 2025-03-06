import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { getLanguageFlag } from '../constants/languages';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('TR');
    const [currentIndex, setCurrentIndex] = useState(0);
    const insets = useSafeAreaInsets();

    useFocusEffect(
        useCallback(() => {
            const loadLanguage = async () => {
                const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
                if (storedLanguage) setSelectedLanguage(storedLanguage);
            };
            
            loadLanguage();
        }, [])
    );

    const goLanguageScreen = () => {
        navigation.navigate('ChangeLanguage');
    };

    const goLoginScreen = () => {
        navigation.navigate('LoginScreen');
    }

    const goRegisterScreen = () => {
        navigation.navigate('Register');
    }
    
    return (
        <View style={[styles.container]}>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={styles.onboardingHeader}>
                <TouchableOpacity onPress={goLanguageScreen} style={styles.langContainer}>
                    <Image
                        source={getLanguageFlag(selectedLanguage)}
                        style={styles.icon}
                    />
                    <Text style={[styles.smallText, {color: currentIndex === 0 ? '#FFF' : '#000'}]}>
                        {selectedLanguage}
                    </Text>
                </TouchableOpacity>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={[styles.logo, { right: width * 0.075 }]}
                />
            </View>
            <Swiper
                loop={false}
                showsButtons={false}
                showsPagination={true}
                onIndexChanged={(index) => setCurrentIndex(index)}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
            >
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/images/onboardscreen-1.png')}
                        style={[styles.image]}
                        resizeMode="cover"
                    />
                    <View style={{position: 'absolute', top: height*0.24, left: width*0.05, right: width*0.05}}>
                        <Text style={[styles.text, {color: '#fff', textAlign: 'center'}]}>
                            Ailenize para göndermenin{' '}
                            <Text style={[styles.boldText, {color: '#1B93D0'}]}>güvenilir</Text>{' '}
                            ve{' '}
                            <Text style={[styles.boldText, {color: '#57B03C'}]}>hızlı</Text>{' '}
                            yolu!
                        </Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <Image
                        source={require('../assets/images/onboardscreen-2.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={{position: 'absolute', bottom: height*0.24, left: width*0.05, right: width*0.05}}>
                        <Text style={[styles.text, {color: '#000'}]}>
                            Ödemelerinizi {"\n"}
                            <Text style={styles.boldText}>Amerikan Doları ($)</Text>,{"\n"}
                            <Text style={styles.boldText}>Euro (€)</Text> ve <Text style={styles.boldText}>İngiliz Sterlini (£)</Text>{"\n"}cinsinden yapabilirsiniz.
                        </Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <Image
                        source={require('../assets/images/onboardscreen-3.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={{position: 'absolute', top: height*0.48, left: width*0.05, right: width*0.05}}>
                        <Text style={styles.text}>Mükemmel döviz kurlarıyla{"\n"}<Text style={styles.boldText}>30 dakikalık</Text> teslim garantisi.</Text>
                    </View>
                </View>
            </Swiper>
            <View style={styles.buttonsContainer}>
                <CustomButton
                    title='Giriş Yap'
                    onPress={goLoginScreen}
                    width={150}
                    height={45}
                    icon={null}
                />
                <CustomButton
                    title='Üye Ol'
                    backgroundColor='#1B93D0'
                    width={150}
                    height={45}
                    onPress={goRegisterScreen}
                    icon={null}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slide: {
        flex: 1,
        width,
        height,
    },
    onboardingHeader: {
        position: 'absolute',
        top: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    },
    langContainer: {
        left: width * 0.075,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    icon: {
        width: 30,
        height: 23,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    logo: {
        width: 115,
        height: 80,
        resizeMode: 'contain',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 15,
        fontFamily: 'Inter',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 30,
    },
    smallText: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
    },
    boldText: {
        fontWeight: '700',
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: height * 0.12,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: height * 0.12,
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    }
});

export default OnboardingScreen;