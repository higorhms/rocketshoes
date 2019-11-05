import { call, all, takeLatest, put, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucess, updateAmount } from './actions';
import { formatPrice } from '../../../util/format';

export function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(product => product.id === id)
    );

    if (productExists) {
        const amount = productExists.amount + 1;
        yield put(updateAmount(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSucess(data));
    }
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
