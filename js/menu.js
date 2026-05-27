// Створюємо модалку для мобільного меню
const menu = document.querySelector('[data-menu]'); // Додати атрибут data-modal на бекдроп модалки
const openBtn = document.querySelector('[data-menu-open]'); // Додати атрибут data-modal-open на кнопку відкриття
const closeBtn = document.querySelector('[data-menu-close]'); // Додати атрибут data-modal-close на кнопку закриття
const menuLinks = document.querySelectorAll('[data-menu] a'); // всі лінки в меню

// Функція відкриття меню
const openMenu = () => {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // Забороняємо прокрутку сторінки
};

// Функція закриття меню
const closeMenu = () => {
  menu.classList.remove('is-open');
  document.body.style.overflow = ''; // Повертаємо прокрутку сторінки
};

// Відкриття меню по кнопці
openBtn.addEventListener('click', openMenu);

// Закриття меню по кнопці
closeBtn.addEventListener('click', closeMenu);

// Закриття меню при натисканні на будь-яке посилання
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Закриття меню по клавіші Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu();
  }
});

// Закриття меню при кліку на бекдроп
menu.addEventListener('click', e => {
  if (e.target === menu) {
    closeMenu();
  }
});
