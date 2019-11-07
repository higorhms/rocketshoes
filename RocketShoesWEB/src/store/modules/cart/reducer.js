import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@Cart/ADD_SUCESS':
            return produce(state, draft => {
                draft.push(action.product);
            });
        case '@Cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    product => product.id === action.id
                );

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@Cart/UPDATE_AMOUNT_SUCESS': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    product => product.id === action.id
                );

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}
