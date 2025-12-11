(() => {
    const refs = {  
        openModalBtn: document.querySelector("[data-menu-open]"),// Додати атрибут data-modal-open на кнопку відкриття
        closeModalBtn: document.querySelector("[data-menu-close]"),// Додати атрибут data-modal-close на кнопку закриття
        modal: document.querySelector("[data-menu]"), // Додати атрибут data-modal на бекдроп модалки
        menuLinks: document.querySelectorAll("[data-menu] a"), // всі лінки в меню
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закриваємо меню при натисканні на кожну лінку
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      refs.modal.classList.remove("is-open");
    });
  });

    function toggleModal() {
        // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
        refs.modal.classList.toggle("is-open");
    }
})();