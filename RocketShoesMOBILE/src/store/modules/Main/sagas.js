import { all, takeEvery } from 'redux-saga/effects';

export function* loadProducts() {
    console.tron.log('Cheguei no saga');
}

export default all([takeEvery('@Main/LOAD_PRODUCTS', loadProducts)]);
