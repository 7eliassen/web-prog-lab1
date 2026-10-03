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

let selectedBooks = JSON.parse(localStorage.getItem('selected-books')) || [];

const catalogGrid = document.querySelector('.catalog__grid');

books.forEach((book) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.id = `product-card-${book.id}`
  card.innerHTML = `
    <img class="product-card__cover" src="${book.cover}" alt="${book.title}">
    <h3 class="product-card__title">${book.title}</h3>
    <p class="product-card__author">${book.author}</p>
    <p class="product-card__price">${book.price} ₽</p>
    <button class="product-card__button" type="button">${selectedBooks.includes(book.id) ? "Удалить из корзины" : "Добавить в корзину"}</button>
  `;
  catalogGrid.append(card);

  const button = card.querySelector('.product-card__button');
  button.addEventListener('click', () => {
    if (selectedBooks.includes(book.id)) {
      selectedBooks = selectedBooks.filter((id) => id !== book.id);
      button.textContent = "Добавить в корзину";
    } else {
      selectedBooks.push(book.id);
      button.textContent = "Удалить из корзину";
    }
    localStorage.setItem('selected-books', JSON.stringify(selectedBooks));
  });
});

