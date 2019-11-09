import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#301199',
                },
                headerTintColor: '#FFF',
            },
            cardStyle: {
                backgroundColor: colors.dark,
            },
        }
    )
);

export default Routes;
