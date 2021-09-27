import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import { AppRouter } from './components/routers/AppRouter';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <div>
            <ApolloProvider client={client}>
                <AppRouter />
            </ApolloProvider>
        </div>
    );
}

export default App;
