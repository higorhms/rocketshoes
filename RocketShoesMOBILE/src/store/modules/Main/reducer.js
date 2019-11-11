const INITIAL_STATE = { products: [] };

export default function Main(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@Main/LOAD_PRODUCTS_SUCESS':
            return { ...state, products: action.products };

        default:
            return state;
    }
}
