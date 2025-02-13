// Модальное окно
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const recordButtons = document.querySelectorAll('.group-item .btn');

// Открытие модального окна
recordButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('hidden');
    });
});

// Закрытие модального окна
closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
});
