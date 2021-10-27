import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import { AppRouter } from './routers/AppRouter';

export const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

//change all material ui fonts to Public Sans
let theme = createTheme({
    typography: {
        fontFamily: 'Public Sans',
    },
});

//automatically change font size
theme = responsiveFontSizes(theme);

function App() {
    return (
        <div>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <AppRouter />
                </ThemeProvider>
            </ApolloProvider>
        </div>
    );
}

export default App;
