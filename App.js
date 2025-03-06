import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {View, StatusBar, StyleSheet} from "react-native";
import { CurrencyProvider } from './context/CurrencyContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    React.useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setHidden(false);
    }, []);
    return (
        <SafeAreaProvider>
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
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
});

export default App;