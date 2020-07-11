import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import DetailsCourse from './Components/DetailsCourse';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import { from } from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
});

ReactDOM.render(
    <BrowserRouter>
    <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
    </BrowserRouter>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
