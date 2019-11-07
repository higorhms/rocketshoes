import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';
import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './services/history';
import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer pauseOnFocusLoss={false} />
            </Router>
        </Provider>
    );
}

export default App;
