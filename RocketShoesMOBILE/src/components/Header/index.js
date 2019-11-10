import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

import Cart from '../../pages/Cart';

export default function Header({ navigation }) {
    console.tron.log('Aqui', navigation);

    return (
        <Wrapper>
            <Container>
                <Logo />
                <BasketContainer
                    onPress={() => {
                        console.tron.log('Fui Clicado');
                        return navigation.navigate('Cart', { Cart });
                    }}
                >
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <ItemCount>0</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}
