import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

export default function Home() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const amount = useSelector(state => ({
        amount: state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;

            return amount;
        }, {}),
    }));

    useEffect(() => {
        async function fetchMyApi() {
            await api.get('/products').then(response => {
                const data = response.data.map(product => ({
                    ...product,
                    priceFormatted: formatPrice(product.price),
                }));

                setProducts(data);
            });
        }
        fetchMyApi();
    }, []);

    function addItemToCart(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <ProductList>
            {products.map(product => {
                return (
                    <li key={String(product.id)}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                        <button
                            type="submit"
                            onClick={() => addItemToCart(product.id)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#FFF" />
                                {amount[product.id] || 0}
                            </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                );
            })}
        </ProductList>
    );
}
