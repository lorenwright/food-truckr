import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/v1/graphql/',
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            {/*<React.StrictMode>*/}
                <App />
            {/*</React.StrictMode>*/}
        </Provider>
    </ApolloProvider>
);
