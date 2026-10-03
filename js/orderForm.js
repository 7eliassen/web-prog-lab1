const openOrderButton = document.getElementById('open-order');
const orderModal = document.getElementById('order-modal');
const orderList = document.getElementById('order-list');
const orderTotal = document.getElementById('order-total');
const orderSubmitButton = document.getElementById('order-submit');

openOrderButton.addEventListener('click', () => {
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

orderSubmitButton.addEventListener('click', () => {
  console.log('test');
});