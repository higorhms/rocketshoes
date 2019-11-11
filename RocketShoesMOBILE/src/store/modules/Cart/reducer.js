import { produce } from 'immer';

const INITIAL_STATE = { products: [] };

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@Cart/ADD_SUCESS':
            return produce(state, draft => {
                draft.products.push(action.product);
            });
        default:
            return state;
    }
}
