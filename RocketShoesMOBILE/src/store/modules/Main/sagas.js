import { all, takeEvery, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadProductsSucess } from './actions';
import { formatPrice } from '../../../util/format';

export function* loadProducts() {
    const response = yield call(api.get, '/products');
    const products = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
    }));

    yield put(loadProductsSucess(products));
}

export default all([takeEvery('@Main/LOAD_PRODUCTS_REQUEST', loadProducts)]);
