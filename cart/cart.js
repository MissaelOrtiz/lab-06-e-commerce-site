import { renderCartItem, getCartTotal } from '../cart/render-cart.js';
// import { cartItems } from '../data/cart-items.js';
import { getCart } from '../local-storage-utils.js';
const cartItems = getCart();

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');
const buttonReset = document.getElementById('cart-reset-button');
const buttonPlaceOrder = document.getElementById('place-order-button');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = getCartTotal(cartItems);

total.textContent = totalPrice;

buttonPlaceOrder.addEventListener('click', () => {
    localStorage.clear();
});

buttonReset.addEventListener('click', () => {
    localStorage.clear();
});
