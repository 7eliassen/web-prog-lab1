// Because we don't have a real database, we use mock in the form of JSON

const books = [
  {
    id: 1,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 800,
    cover: 'static/covers/master_and_margarita.jpg'
  },
  {
    id: 2,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    price: 700,
    cover: 'static/covers/crime_and_punishment.jpg'
  },
  {
    id: 3,
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 1200,
    cover: 'static/covers/war_and_peace.jpg'
  },
  {
    id: 4,
    title: 'Тихий Дон',
    author: 'Михаил Шолохов',
    price: 950,
    cover: 'static/covers/tihiy_don.jpg'
  },
  {
    id: 5,
    title: '1984',
    author: 'Джордж Оруэлл',
    price: 650,
    cover: 'static/covers/1984.jpg'
  },
  {
    id: 6,
    title: 'Мы',
    author: 'Евгений Замятин',
    price: 600,
    cover: 'static/covers/zamyatin_mu.jpg'
  },
  {
    id: 7,
    title: 'Ревизор',
    author: 'Николай Гоголь',
    price: 550,
    cover: 'static/covers/revizor.jpg'
  },
  {
    id: 8,
    title: 'Горе от ума',
    author: 'Александр Грибоедов',
    price: 500,
    cover: 'static/covers/gore-ot-uma.jpg'
  }
];

let selectedBooks = JSON.parse(localStorage.getItem('selected-books')) || {};

const catalogGrid = document.querySelector('.catalog__grid');

books.forEach((book) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.id = `product-card-${book.id}`;
  card.innerHTML = `
    <img class="product-card__cover" src="${book.cover}" alt="${book.title}">
    <h3 class="product-card__title">${book.title}</h3>
    <p class="product-card__author">${book.author}</p>
    <p class="product-card__price">${book.price} ₽</p>
    <div class="product-card__controls">
      <button class="product-card__quantity-button" type="button">−</button>
      <span class="product-card__quantity">${selectedBooks[book.id] || 0}</span>
      <button class="product-card__quantity-button" type="button">+</button>
    </div>
  `;
  catalogGrid.append(card);

  const quantity = card.querySelector('.product-card__quantity');
  const buttons = card.querySelectorAll('.product-card__quantity-button');

  buttons[0].addEventListener('click', () => {
    if (selectedBooks[book.id] > 1) {
      selectedBooks[book.id] -= 1;
    } else {
      delete selectedBooks[book.id];
    }

    quantity.textContent = selectedBooks[book.id] || 0;
    localStorage.setItem('selected-books', JSON.stringify(selectedBooks));
  });

  buttons[1].addEventListener('click', () => {
    selectedBooks[book.id] = (selectedBooks[book.id] || 0) + 1;
    quantity.textContent = selectedBooks[book.id];
    localStorage.setItem('selected-books', JSON.stringify(selectedBooks));
  });
});

