import { call, all, takeLatest, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucess } from './actions';

export function* addToCart({ id }) {
    const response = yield call(api.get, `/products/${id}`);

    yield put(addToCartSucess(response.data));
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
