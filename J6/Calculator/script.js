//! Калькулятор
// Написати функцію – калькулятор. Функція приймає рядок з прикладом, 
// визначає, яка дія необхідна виконати (+ - * /), переводить операнди у числа, 
// вирішує приклад та повертає результат.

console.log (calculator(29, 19, '+'));//16
console.log (calculator(93, 57, '-'));//16
console.log (calculator(38, 4, '*'));//16
console.log (calculator(251, 16, '/'));//16

function calculator(a, b, sign) {
  switch (sign) {
      case '*':
        return a * b;
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '/':
        if (b !== 0) {
          return a / b;
        } else {
          return "ERROR";
        }
    }
}
