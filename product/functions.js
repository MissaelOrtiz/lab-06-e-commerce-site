import { addItemToCart } from '../local-storage-utils.js';

export default { renderItems };


export function renderItems(item) {
    const li = document.createElement('li');
    li.classList.add(item.category);
    li.classList.add('item');
    li.title = item.description;

    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${item.image}`;
    img.alt = `${item.name} image`;
    img.classList.add('sellingimg');
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `${item.price} gold pieces`;

    const button = document.createElement('button');
    button.textContent = 'add';
    button.value = item.id;
    button.addEventListener ('click', () => {
        addItemToCart(item.id);
    });
    p.appendChild(button);

    li.appendChild(p);
    return li;
}