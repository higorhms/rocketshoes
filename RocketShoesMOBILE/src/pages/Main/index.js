import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, FlatList } from 'react-native';
import produce from 'immer';
import {
    Container,
    ProductImage,
    ProductItem,
    Button,
    ButtonText,
    ProductPrice,
    ProductTitle,
    ProductAmount,
} from './styles';
import Cart from '../Cart';

import * as MainActions from '../../store/modules/Main/actions';
import { addToCartRequest } from '../../store/modules/Cart/actions';

export default function Main({ navigation }) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.main.products);

    useEffect(() => {
        async function fetchMyApi() {
            dispatch(MainActions.loadProductsRequest());
        }
        fetchMyApi();
    }, [dispatch, navigation]);

    return (
        <Container>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={products}
                keyExtractor={product => String(product.id)}
                renderItem={({ item }) => (
                    <ProductItem>
                        <ProductImage
                            source={{
                                uri: item.image,
                            }}
                        />
                        <ProductTitle>{item.title}</ProductTitle>
                        <ProductPrice>{item.formattedPrice}</ProductPrice>
                        <Button
                            onPress={() => {
                                dispatch(addToCartRequest(item));
                            }}
                        >
                            <ProductAmount>
                                <Icon
                                    name="add-shopping-cart"
                                    color="#FFF"
                                    size={20}
                                />
                                <Text>0</Text>
                            </ProductAmount>
                            <ButtonText>ADICIONAR</ButtonText>
                        </Button>
                    </ProductItem>
                )}
            />
        </Container>
    );
}
