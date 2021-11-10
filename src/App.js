import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

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
        <ScopedCssBaseline>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <AppRouter />
                </ThemeProvider>
            </ApolloProvider>
        </ScopedCssBaseline>
    );
}

export default App;
