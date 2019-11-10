import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Wrapper,
    Container,
    Logo,
    BasketContainer,
    ItemCount,
    TouchableLogo,
} from './styles';

import Cart from '../../pages/Cart';
import Main from '../../pages/Main';

export default function Header({ navigation }) {
    return (
        <Wrapper>
            <Container>
                <TouchableLogo
                    onPress={() => navigation.navigate('Main', { Main })}
                >
                    <Logo />
                </TouchableLogo>
                <BasketContainer
                    onPress={() => navigation.navigate('Cart', { Cart })}
                >
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <ItemCount>0</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}
