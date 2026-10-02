const openOrderButton = document.getElementById('open-order');
const orderModal = document.getElementById('order-modal');

openOrderButton.addEventListener('click', () => {
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
