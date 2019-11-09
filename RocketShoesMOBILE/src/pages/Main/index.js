import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import api from '../../services/api';
import {
    Container,
    ProductImage,
    ProductItem,
    Button,
    ButtonText,
    ProductPrice,
    List,
    ProductTitle,
    ProductAmount,
} from './styles';

export default function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchMyApi() {
            const response = await api.get('/products');
            setProducts(response.data);
        }
        fetchMyApi();
    }, []);

    return (
        <Container>
            <List
                horizontal
                showsHorizontalScrollIndicator={false}
                data={products}
                keyExtrator={product => String(product.id)}
                renderItem={({ item }) => (
                    <ProductItem>
                        <ProductImage
                            source={{
                                uri: item.image,
                            }}
                        />
                        <ProductTitle>{item.title}</ProductTitle>
                        <ProductPrice>{item.price}</ProductPrice>
                        <Button>
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
