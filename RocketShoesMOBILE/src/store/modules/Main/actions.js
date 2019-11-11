export function loadProductsRequest() {
    return { type: '@Main/LOAD_PRODUCTS_REQUEST' };
}

export function loadProductsSucess(products) {
    return { type: '@Main/LOAD_PRODUCTS_SUCESS', products };
}
