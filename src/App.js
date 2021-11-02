import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

export const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ScopedCssBaseline>
            <ApolloProvider client={client}>
                <AppRouter />
            </ApolloProvider>
        </ScopedCssBaseline>
    );
}

export default App;
