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
        image: 'potionofhealing.png',
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

