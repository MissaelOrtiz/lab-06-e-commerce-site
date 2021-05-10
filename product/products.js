import items from '../data/items.js';
import { renderItems } from './functions.js';

const displayItemList = document.getElementById('item-list');

for (const item of items){
    const elem = renderItems(item);
    displayItemList.appendChild(elem);
}