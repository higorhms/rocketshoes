import { all } from 'redux-saga/effects';
import mainSaga from './Main/sagas';
import cart from './Cart/sagas';

export default function* rootSaga() {
    return yield all([mainSaga, cart]);
}
