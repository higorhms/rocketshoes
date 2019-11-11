import { all, takeLatest, put } from 'redux-saga/effects';
import { addToCartSucess } from './actions';

export function* addToCart({ product }) {
    yield put(addToCartSucess(product));
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
