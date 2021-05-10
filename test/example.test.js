// IMPORT MODULES under test here:
import { renderItems } from '../product/functions.js';
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
    
    const expected = '<li class="potion" title="Tastes like cherry!"><h3>Potion of Healing</h3><img src="../assets/potionofhealing.png" alt="Potion of Healing image"><p class="price">5 gold pieces<button value="potionOfHealing">add</button></p></li>';
    
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
    
    const expected = '<li class="weapon" title="Both hot and sharp!"><h3>Flametongue</h3><img src="../assets/flametongue.png" alt="Flametongue image"><p class="price">35 gold pieces<button value="flametongue">add</button></p></li>';
    
    // act
    const dom = renderItems(flametongue);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

