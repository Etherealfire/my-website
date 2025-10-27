document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
    
    let count = parseInt(localStorage.getItem('counter')) || 0;
    
    function updateCounter() {
        counterElement.textContent = count;
        localStorage.setItem('counter', count);
    }
    
    incrementButton.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decrementButton.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetButton.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
    
    // Инициализация
    updateCounter();
});