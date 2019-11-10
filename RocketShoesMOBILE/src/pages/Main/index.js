import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, FlatList } from 'react-native';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
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

export default function Main({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchMyApi() {
            const response = await api.get('/products');
            setProducts(response.data);
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
                        <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                        <Button
                            onPress={() =>
                                navigation.navigate('Cart', { Cart })
                            }
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
