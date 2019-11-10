export function addToCart(products) {
    console.tron.log(products);
    return { type: '@Cart/ADD', products };
}
