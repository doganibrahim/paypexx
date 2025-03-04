import React, { createContext, useState, useContext } from 'react';

type Currency = {
    country: string;
    currency: string;
    symbol: string;
    flag: any;
}

type CurrencyContextType = {
    senderCurrency: Currency | null;
    receiverCurrency: Currency | null;
    setSenderCurrency: (currency: Currency) => void;
    setReceiverCurrency: (currency: Currency) => void;
    getTargetRoute: () => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
    const [senderCurrency, setSenderCurrency] = useState<Currency | null>(null);
    const [receiverCurrency, setReceiverCurrency] = useState<Currency | null>(null);

    const getTargetRoute = () => {
        if (!receiverCurrency) return 'NewTransactionInformations';

        const specialCountries = [
            'Ukrayna',
            'Moldova',
            'Türkmenistan',
            'Kazakistan',
            'Tacikistan',
            'Azerbaycan',
            'Gürcistan'
        ];

        if (specialCountries.includes(receiverCurrency.country)) {
            return 'NewTransactionInformations2';
        }

        if (receiverCurrency.country === 'İngiltere') {
            return 'NewTransactionInformations3';
        }

        return 'NewTransactionInformations';
    };

    return (
        <CurrencyContext.Provider value={{
            senderCurrency,
            receiverCurrency,
            setSenderCurrency,
            setReceiverCurrency,
            getTargetRoute
        }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
}; 