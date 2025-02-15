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

// Закрытие модального окна при клике на фон
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Валидация формы записи
document.querySelector("#signup form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Проверка имени
    if (!name) {
        e.preventDefault();
        alert("Пожалуйста, введите ваше имя или псевдоним!");
        return;
    }

    // Проверка email/телефона
    if (!email) {
        e.preventDefault();
        alert("Пожалуйста, введите вашу электронную почту или телефон!");
        return;
    }

    // Проверка формата email (опционально)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("Пожалуйста, введите корректный email или телефон!");
        return;
    }
});
