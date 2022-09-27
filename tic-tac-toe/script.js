let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Это HTMLSelectElement.disabled логическое значение, отражающее disabled атрибут HTML,
// указывающий, отключен ли элемент управления. Если он отключен, он не принимает клики.
// Отключенный элемент непригоден для использования и клика по нему.

const ticTacToe = (element, index) => {
    element.value = currentPlayer;
    element.disabled = true;
    cells[index] = currentPlayer;
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    result.innerHTML = `PLAYER ${currentPlayer} TURN`;
    let isFree = false;
    
    for (let i = 0; i < conditions.length; i++) {
        let condition = conditions[i];
        let a = cells[condition[0]];
        let b = cells[condition[1]];
        let c = cells[condition[2]];

        if (a == '' || b == '' || c == '') {
            isFree = true;
            continue;
        }

        if ((a == b) && (b == c)) {
            result.innerHTML = `HOORAY ! PLAYER ${a} WON ! `;
            btns.forEach((btn) => btn.disabled = true);
            return 'finish';
        }
    }
    if(!isFree){
        result.innerHTML = `DEAD HEAT`;
        btns.forEach((btn) => btn.disabled = true);   
    }
};

function reset() {
    cells = ['', '', '', '', '', '', '', '', ''];
    btns.forEach((btn) => {
        btn.value = '';
    });
    currentPlayer = 'X';
    result.innerHTML = `PLAYER X TURN`;
    btns.forEach((btn) => btn.disabled = false);
};

document.querySelector('#reset').addEventListener('click', reset);

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

