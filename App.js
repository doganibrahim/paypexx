import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import { CurrencyProvider } from './context/CurrencyContext';

const App = () => {
    React.useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('transparent');
    }, []);
    return (
        <CurrencyProvider>
            <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' style="light" />
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </CurrencyProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
});

export default App;