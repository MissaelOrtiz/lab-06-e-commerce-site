// IMPORT MODULES under test here:
import { renderItems } from '../product/functions.js';
import { renderCartItem } from '../cart/render-cart.js';
import { getById } from '../cart/render-cart.js';
import { getCartTotal } from '../cart/render-cart.js';
import { setCart } from '../local-storage-utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

QUnit.module('Lots of tests');
// These tests cover the renderItems function
test('renders an item', assert => {
    // arrange
    const potionOfHealing = {
        id: 'potionOfHealing',
        name: 'Potion of Healing',
        image: 'potionOfHealing.png',
        description: 'Tastes like cherry!',
        category: 'potion',
        price: 5
    };
    
    const expected = '<li class="potion item" title="Tastes like cherry!"><h3>Potion of Healing</h3><img src="../assets/potionOfHealing.png" alt="Potion of Healing image" class="sellingimg"><p class="price">5 gold pieces<button value="potionOfHealing">add</button></p></li>';
    
    // act
    const dom = renderItems(potionOfHealing);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('renders an item', assert => {
    // arrange
    const flametongue = {
        id: 'flametongue',
        name: 'Flametongue',
        image: 'flametongue.png',
        description: 'Both hot and sharp!',
        category: 'weapon',
        price: 35
    };
    
    const expected = '<li class="weapon item" title="Both hot and sharp!"><h3>Flametongue</h3><img src="../assets/flametongue.png" alt="Flametongue image" class="sellingimg"><p class="price">35 gold pieces<button value="flametongue">add</button></p></li>';
    
    // act
    const dom = renderItems(flametongue);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

// this tests the getById function
test('compares an id to an array of object.ids and returns the object if a match is found', assert => {
    const someArray = [
        { id:1, name: 'thing 1' },
        { id:2, name: 'thing 2' }
    ];
    
    const expected = { 
        id:2, 
        name: 'thing 2' 
    };
    
    const actual = getById(someArray, 2);
    
    assert.deepEqual(actual, expected);
});


// this tests the getCartTotal function
test('', assert => {
    const someArray2 = [{ id:1, quantity:5 }, { id:2, quantity:0 }];
    const expected = 25;
    
    const actual = getCartTotal(someArray2);
    
    assert.equal(actual, expected);
});

// this tests the renderCartItem function
test('renders a cart item', assert => {
    // arrange
    const potionOfHealing = {
        id: 1,
        quantity: 1
    };
    
    const expected = '<tr><td>Potion of Healing</td><td>1</td><td>5 gold pieces</td><td>5 gold pieces</td></tr>';
    
    // act
    const something = renderCartItem(potionOfHealing);
    const HTML = something.outerHTML;
    // assert
    assert.equal(HTML, expected);
});

test('setCart should create an array in localstorage and that is stored with the key of CART', assert => {
    // arrange
    const items = [
        {
            id: 1
        },
        {
            id: 2
        }
    ];

    setCart(items);
    // act
    const stringyItems = localStorage.getItem('CART');
    const parsedItem = JSON.parse(stringyItems);
    
    // assert
    assert.deepEqual(items, parsedItem);
});

test('getCart should get an array in localstorage and that is parsed (that is created by setCart)', assert => {
    // arrange
    const items = [
        {
            id: 1
        },
        {
            id: 2
        }
    ];

    const stringyItems = JSON.stringify(items);
    localStorage.setItem('CART', stringyItems);
    setCart(items);
    // act
    const stringyItems2 = localStorage.getItem('CART');
    const parsedItem = JSON.parse(stringyItems2);
    
    // assert
    assert.deepEqual(items, parsedItem);
});