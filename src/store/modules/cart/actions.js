export function addToCartRequest(id) {
    return {
        type: '@Cart/ADD_REQUEST',
        id,
    };
}

export function addToCartSucess(product) {
    return {
        type: '@Cart/ADD_SUCESS',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@Cart/REMOVE',
        id,
    };
}

export function updateAmount(id, amount) {
    return {
        type: '@Cart/UPDATE_AMOUNT',
        id,
        amount,
    };
}
