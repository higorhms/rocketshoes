import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, ButtonGroup } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <ButtonGroup>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            onClick={() => decrement(product)}
                                            size={20}
                                            color="#100496"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            onClick={() => increment(product)}
                                            size={20}
                                            color="#100496"
                                        />
                                    </button>
                                </ButtonGroup>
                            </td>
                            <td>
                                <strong>R$ 00.00</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color="#100496" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">FINALIZAR PEDIDO</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 00,00</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
