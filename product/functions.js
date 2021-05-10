export default renderItems;


function renderItems(item) {
    const li = document.createElement('li');
    li.classList.add(item.category);
    li.title = item.description;

    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${item.image}`;
    img.alt = `${item.name} image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `${item.price} gold pieces`;

    const button = document.createElement('button');
    button.textContent = 'add';
    button.value = item.id;
    p.appendChild(button);

    li.appendChild(p);
    return li;
}