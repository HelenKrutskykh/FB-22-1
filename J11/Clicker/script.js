// !Clicker

// Напишите приложение, которое помогает пользователю натренироваться кликать левой кнопкой мыши. 
// При входе появляется кнопка "Начать". По нажатии на кнопку - она пропадает, а вместо нее появляется 
// овальная область в которой нужно кликать мышкой. Справа вверху начинает отсчет таймер с 30 секунд 
// и счетчик кликов пользователя. По окончании этого времени счет кликов не засчитывается. По окончании 
// времени(30 секунд) поле кликов пропадает, появляется таблица статистики и кнопка "Начать". Показывать 
// общее количество кликов и среднюю скорость кликов в минуту.

const button = document.querySelector(".button-start");
const clickArea = document.querySelector(".click-area");
const countdown = document.querySelector(".countdown p");
const clickCounter = document.querySelector(".click-counter p");
const table = document.querySelector(".table");
const totalClicks = document.querySelector(".total-clicks p");
const averageSpeed = document.querySelector(".average-speed p");

let timer;
let click = 0;

// кнопка пропадает и вместо нее появляется поле для кликов 

button.onclick = function () {
  if (table.classList.contains("hide")) {
      button.classList.add("hide");
      clickArea.classList.remove("hide");

    // старт таймера

    let t = 30;
    timer = setInterval(function () {
      t--;
      countdown.innerText = t;

    // остановка таймера

    if (t <= 0) {
      clearInterval(timer);
      countdown.innerText = 0;

      button.classList.remove("hide");
      button.innerText = "RESET";
      clickArea.classList.add("hide");
      table.classList.remove("hide");
      }
    }, 1000);

  } else {
    table.classList.add("hide");
    button.innerText = "START";
    click = 0;
    clickCounter.innerText = click;
  }
};

// подсчет количество кликов

clickArea.onclick = function () {
  click++;
  totalClicks.innerText = click;
  clickCounter.innerText = click;

  // averageSpeed.innerText = ((click *2 )/ 60).toFixed(2) + "cklick/sec";// средняя скорость кликов в секунду
  averageSpeed.innerText = click * 2 + "cklick/min"; // средняя скорость кликов в минуту
};