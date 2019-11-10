import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

import colors from './styles/colors';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            Cart,
        },
        {
            defaultNavigationOptions: navigation => ({
                header: <Header {...navigation} />,
            }),
            headerMode: 'float',
            cardStyle: {
                backgroundColor: colors.dark,
            },
        }
    )
);

export default Routes;
