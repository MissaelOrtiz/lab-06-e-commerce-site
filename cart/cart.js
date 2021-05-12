import { renderCartItem, getCartTotal } from '../cart/render-cart.js';
import { cartItems } from '../data/cart-items.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = getCartTotal(cartItems);

total.textContent = totalPrice;