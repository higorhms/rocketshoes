export function addToCartRequest(product) {
    console.tron.log(product);
    return { type: '@Cart/ADD_REQUEST', product };
}

export function addToCartSucess(product) {
    return { type: '@Cart/ADD_SUCESS', product };
}
