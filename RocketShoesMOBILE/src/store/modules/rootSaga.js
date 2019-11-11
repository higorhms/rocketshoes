import { all } from 'redux-saga/effects';
import mainSaga from './Main/sagas';

export default function* rootSaga() {
    return yield all([mainSaga]);
}
