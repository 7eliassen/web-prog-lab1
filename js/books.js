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
  }
];

const catalogGrid = document.querySelector('.catalog__grid');

books.forEach((book) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `
    <img class="product-card__cover" src="${book.cover}" alt="${book.title}">
    <h3 class="product-card__title">${book.title}</h3>
    <p class="product-card__author">${book.author}</p>
    <p class="product-card__price">${book.price} ₽</p>
    <button class="product-card__button" type="button">Добавить в корзину</button>
  `;
  catalogGrid.append(card);

  const button = card.querySelector('.product-card__button');
  button.addEventListener('click', () => {
    console.log(book);
  });
});

