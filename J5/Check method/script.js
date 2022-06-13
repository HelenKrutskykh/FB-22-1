// 4. 

// Чек-методи Створити масив, який описує чек у магазині. 
// Кожен елемент масиву складається із назви товару, кількості 
// та ціни за одиницю товару. Написати такі функції:

const chek = [
    {product: "Йогурт", quantity: 1, price: 45},
    {product: "Шоколад", quantity: 2, price: 40},
    {product: "Шамнунь", quantity: 1, price: 67},
    {product: "Жевательная резинка", quantity: 2, price: 12.5},
    {product: "Яблоки", quantity: 5, price: 2.5}
]

console.log(printCheck(chek));
alert(sumCheck(chek));
alert(maxPrice(chek));
alert(average(chek));


// * Роздруківка чека на екран
function printCheck(chek){

    let str = '';
    for (let i = 0; i < chek.length; i++) {
        str += " Назва товару: " + chek[i].product;
        str += " Кількість: " + chek[i].quantity;
        str += " Ціна: " + (chek[i].price * chek[i].quantity);

    }
   window.alert(str);
}

// * Підрахунок загальної суми покупки
function sumCheck(chek){

    let sum = 0;
    for (let i = 0; i < chek.length; i++) {
        sum += chek[i].quantity * chek[i].price;
    }
    return sum;
}

// * Отримання найдорожчої покупки у чеку
function maxPrice(chek){

    let max = 0;
    for (let i = 0; i < chek.length; i++) {
        if (max < chek[i].price){
            max = chek[i].price;
        }
    }
    return max;
}
// * Підрахунок середньої вартості одного товару у чеку
function average(chek){
    let sum = 0;
    for (let i = 0; i < chek.length; i++) {
        sum += chek[i].price;
    }
    return sum / chek.length;
}