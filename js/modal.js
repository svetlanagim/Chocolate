const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');

// Функція відкриття модального вікна
const openModal = () => {
  modal.classList.add('is-open');

  // Забороняємо прокрутку сторінки
  document.body.style.overflow = 'hidden';
};

// Функція закриття модального вікна
const closeModal = () => {
  modal.classList.remove('is-open');

  // Повертаємо прокрутку сторінки
  document.body.style.overflow = '';
};

// Відкриття модального вікна по кнопці
openModalBtn.addEventListener('click', openModal);

// Закриття модального вікна по кнопці
closeModalBtn.addEventListener('click', closeModal);

// Закриття модального вікна по клавіші Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

// Закриття модального вікна при кліку на бекдроп
modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});
