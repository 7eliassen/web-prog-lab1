const openOrderButton = document.getElementById('open-order');
const orderModal = document.getElementById('order-modal');
const orderList = document.getElementById('order-list');
const orderTotal = document.getElementById('order-total');
const orderForm = document.getElementById('order-form');
const orderSubmitButton = document.getElementById('order-submit');
const orderSuccess = document.getElementById('order-success');

const renderOrder = () => {
  orderList.innerHTML = '';
  let total = 0;

  selectedBooks.forEach((id) => {
    const book = books.find((item) => item.id === id);
    total += book.price;

    const item = document.createElement('li');
    item.textContent = `${book.title} — ${book.price} ₽`;
    orderList.append(item);
  });

  orderTotal.textContent = total;
};

const updateSubmitState = () => {
  orderSubmitButton.disabled = !orderForm.checkValidity() || selectedBooks.length === 0;
};

orderForm.addEventListener('input', updateSubmitState);

openOrderButton.addEventListener('click', () => {
  orderSuccess.hidden = true;
  renderOrder();
  updateSubmitState();
  orderModal.showModal();
});

orderModal.addEventListener('click', (e) => {
  const dialogRect = orderModal.getBoundingClientRect();
  const clickedOutsideDialog =
    e.clientX < dialogRect.left ||
    e.clientX > dialogRect.right ||
    e.clientY < dialogRect.top ||
    e.clientY > dialogRect.bottom;

  if (clickedOutsideDialog) {
    orderModal.close();
  }
});

orderSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();

  selectedBooks = [];
  localStorage.setItem('selected-books', JSON.stringify(selectedBooks));

  document.querySelectorAll('.product-card__button').forEach((button) => {
    button.textContent = 'Добавить в корзину';
  });

  orderSuccess.hidden = false;
});
