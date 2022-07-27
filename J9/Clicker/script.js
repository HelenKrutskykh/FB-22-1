// Створити html-сторінку з клікером.

// При кліку на кнопку "Додати" рахунок додається на 1
// При кліку на кнопку "Відняти" рахунок віднімається на 1


const Minus = document.querySelector('[data-action="minus"]');

const Plus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

Minus.addEventListener('click', function(){

counter.innerText = --counter.innerText;

});

Plus.addEventListener('click', function(){

counter.innerText = ++counter.innerText;

});