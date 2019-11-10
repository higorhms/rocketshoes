import { combineReducers } from 'redux';
import cart from './Cart/reducer';

const rootReducer = combineReducers({
    cart,
});

export default rootReducer;
