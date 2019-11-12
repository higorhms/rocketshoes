import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, FlatList } from 'react-native';
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

import { addToCartRequest } from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function Main({ navigation }) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchMyApi() {
            await api.get('/products').then(response => {
                setProducts(
                    response.data.map(product => ({
                        ...product,
                        formattedPrice: formatPrice(product.price),
                    }))
                );
            });
        }
        fetchMyApi();
    }, [navigation]);

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
                                dispatch(addToCartRequest(item.id));
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
