const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// ! Свойство target интерфейса Event является ссылкой на объект, который был инициатором события.

// ! Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

// ! e.keyИли — event.keyэто свойство eventобъекта, который создается при запуске события keyupили .
// keydownОдним из хороших способов использования этого свойства является нажатие клавиши ввода для 
// поиска по списку элементов на веб-сайте.
 
// Ввод числа с учетом и без учета точки.
numbersEl.forEach( number => {
  number.addEventListener('click', (e)=>{
    if(e.target.innerText === '.' && !haveDot){
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot){
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  })
})


operationEl.forEach( operation => {
  operation.addEventListener('click', (e)=> {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation){
      mathOperation();

    }else{
      result = parseFloat(dis2Num);
    }
    clear(operationName);
    lastOperation = operationName;
    // console.log(result)
  })
});

// Очищение главного поля , после введения первой переменной.
function clear(name = ''){
  dis1Num += dis2Num + ' ' + name + ' ';
  display1El.innerText = dis1Num;
  display2El.innerText = '';
  dis2Num = '';
}

// Функция выполнения математических операций.
function mathOperation() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(dis2Num);
  }else if( lastOperation === '%'){
    result = parseFloat(dis2Num)/100 * parseFloat(result) ;
  }
}

// Выведение результата .
equalEl.addEventListener('click', ()=> {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clear();
  display2El.innerText = result;
  dis2Num = result;
  dis1Num = '';
})

// Очищение всего поля данных.
clearAllEl.addEventListener('click', ()=>{
  dis1Num = '';
  dis2Num = '';
  display1El.innerText ='';
  display2El.innerText ='';
  result = '';
});

// Очищение последней операции.
clearLastEl.addEventListener('click', () => {
  display2El.innerText = '';
  dis2Num= '';
});

// Ввод данных с клавиатуры - поиск по ключам.
window.addEventListener('keydown', (e)=>{
  console.log(e.key)
  if(
    e.key === '0' ||
    e.key === '1' || 
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' 
  ){
    clickButtonEl(e.key)
    // console.log(e.key)
  }
  else if(
    e.key === '+' ||
    e.key === '-' ||
    e.key === '/' ||
    e.key === '%' 
  ){
    clickOperation(e.key);
  }
  else if(e.key === '*'){
    clickOperation('x')
    // console.log(e.key)
  } 
  else if( e.key == "Enter" || e.key === '='){
    clickEqual();
  }
  // console.log(e.key)

  else if( e.key == "Backspace"){
    if(e.metaKey){
    dis1Num = '';
    dis2Num = '';
    display1El.innerText ='';
    display2El.innerText ='';
    result = '';}
    else{
      display2El.innerText = '';
      dis2Num= '';
    }
    // console.log(e)
  }

  else if( e.key == "Delete"){
    dis1Num = '';
    dis2Num = '';
    display1El.innerText ='';
    display2El.innerText ='';
    result = '';
  }
  // console.log(e.key)
})

// Клик при выборе числа на клавиатуре.
function clickButtonEl(key) {
  numbersEl.forEach(button => {
    if (button.innerText === key) {
      button.click();
    }
  })
}

// Клик при выборе математической операции на клавиатуре.
function clickOperation(key){
  operationEl.forEach( operation => {
    if(operation.innerText === key){
      operation.click()
    }
  })
}

// Клик при выборе равно.
function clickEqual(){
  equalEl.click();
}