import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';
import NavigationService from './services/navigation';

// import { Container } from './styles';

export default function src() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#301199" />
            <Routes
                ref={navigatorRef =>
                    NavigationService.setNavigator(navigatorRef)
                }
            />
        </>
    );
}
