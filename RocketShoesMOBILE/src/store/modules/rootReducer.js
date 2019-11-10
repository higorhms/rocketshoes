import { combineReducers } from 'redux';
import cart from './Cart/reducer';
import main from './Main/reducer';

const rootReducer = combineReducers({
    main,
    cart,
});

export default rootReducer;
