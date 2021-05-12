import magicItemsList from '../data/items.js';


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
    const magicItem = getById(magicItemsList, cartItem.id);
    // creating dom elements to display data
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');
    // populating dom elements with data
    nameTd.textContent = magicItem.name;
    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = `${magicItem.price} gold pieces`;
    const total = magicItem.price * cartItem.quantity;
    totalTd.textContent = `${total} gold pieces`;
    // appending data
    tr.append(nameTd, quantityTd, priceTd, totalTd);
    return tr;
}

export function getCartTotal(arr) {
    let accumulator = 0;

    for (let item of arr) {
        const memItems = getById(magicItemsList, item.id);

        const total = item.quantity * memItems.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}
