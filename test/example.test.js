// IMPORT MODULES under test here:
import { renderItems } from '../product/functions.js';
import { renderCartItem } from '../cart/render-cart.js';
import { getById } from '../cart/render-cart.js';
// import { example } from '../example.js';

const test = QUnit.test;

QUnit.module('Render Item');

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

test('renders a cart item', assert => {
    // arrange
    const potionOfHealing = {
        id: 'potionOfHealing',
        name: 'Potion of Healing',
        image: 'potionOfHealing.png',
        description: 'Tastes like cherry!',
        category: 'potion',
        price: 5
    };
    
    const expected = '<tr><td>Potion of Healing</td><td>1</td><td>5 gold pieces</td><td>5 gold pieces</td></tr>';
    
    // act
    const dom = renderCartItem(potionOfHealing);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('compares an id to an array of object.ids and returns the object if a match is found', assert => {
    // arrange
    const someArray = [
        { id:1, name: 'thing 1' },
        { id:2, name: 'thing 2' }
    ];
    
    const expected = { 
        id:2, 
        name: 'thing 2' 
    };
    
    // act
    const actual = getById(someArray, 2);
    
    // assert
    assert.deepEqual(actual, expected);
});