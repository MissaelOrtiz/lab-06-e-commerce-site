import { getById } from './cart/render-cart.js';

// Needs to be able to create an item and modify it (add stuff to it later)
// This function will be a tool for 'unzipping' localstorage data into a usable form.
export function getCart() {
    // Local storage needs a key, and it needs to be set to a string.
    const stringyCartGet = localStorage.getItem('CART');
    // Local storage can only take strings, so this needs to be converted into a string
    const parsedCart = JSON.parse(stringyCartGet);
    // Check to see if there is a real cart,
    if (parsedCart) {
        // If the cart exists, return it
        return parsedCart;
    } else {
        // If the cart does not exist, make an empty cart
        return [];
    }
}

// This function will be a tool for 'zipping' modified/altered cart data into and sending it back to localstorage.
export function setCart(someCart) {
    // pass in an array and make sure that array is turned into a string
    const stringyCartSet = JSON.stringify(someCart);
    // pass in that stringy array into setItem
    localStorage.setItem('CART', stringyCartSet);
}

export function addItemToCart(itemId) {
    // grab cart from local storage
    const cart = getCart();
    // How do I know if item is in cart already? LOOP
    const cartItem = getById(cart, itemId);
    // If true, we add an existing item to cart
    if (cartItem) {
        // increment quantity by 1
        cartItem.quantity++;
    } else {
        // if item does not already exist in cart, push new item into array
        const newCartItem = { id: itemId, quantity:1 };
        cart.push(newCartItem);
    }
    // Now to make sure we are pulling cart into localStorage
    setCart(cart);
}