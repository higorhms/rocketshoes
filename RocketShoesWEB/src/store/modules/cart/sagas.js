import {
    call,
    all,
    takeLatest,
    put,
    select,
    takeEvery,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addToCartSucess, updateAmountSucess } from './actions';
import { formatPrice } from '../../../util/format';
import history from '../../../services/history';

export function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(product => product.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque.');
        return;
    }

    if (productExists) {
        // const amount = productExists.amount + 1;
        yield put(updateAmountSucess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSucess(data));
        history.push('/cart');
    }
}

export function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque.');
        return;
    }

    yield put(updateAmountSucess(id, amount));
}

export default all([
    takeLatest('@Cart/ADD_REQUEST', addToCart),
    takeEvery('@Cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
