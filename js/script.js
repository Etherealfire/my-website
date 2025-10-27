// Находим элементы на странице
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Начальное значение счётчика
let count = 0;

// Функция для обновления отображения счётчика
function updateCounter() {
    counterElement.textContent = count;
}

// Обработчик для кнопки "+1"
incrementButton.addEventListener('click', function() {
    count++;
    updateCounter();
});

// Обработчик для кнопки "-1"
decrementButton.addEventListener('click', function() {
    count--;
    updateCounter();
});

// Обработчик для кнопки "Сбросить"
resetButton.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

// Инициализация счётчика при загрузке страницы
updateCounter();