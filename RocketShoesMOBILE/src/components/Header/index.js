import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
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
    const cartSize = useSelector(state => state.cart.products.length);

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
                    <ItemCount>{cartSize}</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}

Header.propTypes = {
    navigation: PropTypes.shape().isRequired,
};
