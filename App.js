import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {View, StatusBar, StyleSheet, Platform} from "react-native";
import { CurrencyProvider } from './context/CurrencyContext';

const App = () => {
    React.useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setHidden(false);
    }, []);

    return (
        <CurrencyProvider>
            <View style={styles.container}>
                <StatusBar 
                    translucent 
                    backgroundColor="transparent" 
                    barStyle="light-content"
                />
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </View>
        </CurrencyProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: Platform.OS === 'ios' ? 50 : 0,
        paddingBottom: Platform.OS === 'ios' ? 30 : 0,
    },
});

export default App;