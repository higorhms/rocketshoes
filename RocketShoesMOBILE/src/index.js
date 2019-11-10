import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

export default function src() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#301199" />
            <Routes />
        </Provider>
    );
}
