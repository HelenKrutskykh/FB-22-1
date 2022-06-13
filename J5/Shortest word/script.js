// 2.

// Найкоротше слово. Напишіть функцію, що отримує у якості 
// аргумента рядок слів та повертає довижину найкоротшого.

// Приклад:
// "bitcoin take over the world maybe who knows perhaps" --> 3

const string = prompt('Введіть рядок слів', ' Приклад : Ще не вмерла України ні слава, ні воля...');

function shortestWord(string) {
    let words = string.split(' ');//* split()разложения объекта String на массив последовательностей
    let minWord = words[0];
   
    for (let i = 0; i < words.length; i++) {
        
        if (minWord.length > words[i].length) {
            minWord = words[i];
        }
    }  
    return minWord.length;  
}

console.log(shortestWord(string));

