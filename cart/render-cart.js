import items from '../data/items.js';
import cartItems from '../data/cart-items.js';


export function getById(anArray, ID) {
    for (let item of anArray) {
        if (item.id === ID) {
            return item;
        }
    }
    return null;
}

export function renderCartItem(cartItem) {
    // setting constants
    const item = getById(items, cartItem.id);
    // creating dom elements to display data
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');
    // populating dom elements with data
    nameTd.textContent = item.name;
    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = item.price;
    const total = `${item.price * cartItem.quantity} gold pieces`;
    totalTd.textContent = total;
    // appending data
    tr.append(nameTd, quantityTd, priceTd, totalTd);
    return tr;
}

export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartItems) {
        const feltAnimal = getById(cartItems, item.id);

        const total = item.quantity * feltAnimal.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}