const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');

const resetBtn = document.querySelector('#reset');
const result = document.querySelector('#result');
const cells = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
const player_1_sign = 'X';
const player_2_sign = 'O';
let isGameRunning = true;
let turn = 0;
let count = 0;

resetBtn.addEventListener('click', function(){
    resetGame();
});

function runGame(){
    let winner = 0;
    cells.forEach(function(cell){
        cell.addEventListener('click', function(){
            if (isGameRunning){
                validation(cell);
                winner = checkWin();
                if (winner == 'X'){
                    isGameRunning = false;  
                    result.innerHTML = '<h1>X won</h1>';
                    result.classList.add('appear');
                }  else if (winner == 'O'){
                    isGameRunning = false;
                    result.innerHTML = '<h1>O won</h1>';
                    result.classList.add('appear');
                } else if (winner == 0){
                    isGameRunning = false;
                    result.innerHTML = '<h1>TIE</h1>';
                    result.classList.add('appear');
                }
            }
        });
    });
}

function validation(pos){
    if (pos.textContent == ''){
        count++;
        if (turn == 0){
            pos.textContent = player_1_sign;
            turn = 1;
        } else {
            pos.textContent = player_2_sign;
            turn = 0;
        }
    }
}

function checkWin(){
    // VERIFICAR O 'X'
    if (a1.textContent == 'X' && a2.textContent == 'X' && a3.textContent == 'X'){
        changeWinnerColor(a1, a2, a3);
        return 'X';
    } else if (b1.textContent == 'X' && b2.textContent == 'X' && b3.textContent == 'X'){
        changeWinnerColor(b1, b2, b3);
        return 'X';
    } else if (c1.textContent == 'X' && c2.textContent == 'X' && c3.textContent == 'X'){
        changeWinnerColor(c1, c2, c3);
        return 'X';
    } else if (a1.textContent == 'X' && b1.textContent == 'X' && c1.textContent == 'X'){
        changeWinnerColor(a1, b1, c1);
        return 'X';
    } else if (a2.textContent == 'X' && b2.textContent == 'X' && c2.textContent == 'X'){
        changeWinnerColor(a2, b2, c2);
        return 'X';
    } else if (a3.textContent == 'X' && b3.textContent == 'X' && c3.textContent == 'X'){
        changeWinnerColor(a3, b3, c3);
        return 'X';
    } else if (a1.textContent == 'X' && b2.textContent == 'X' && c3.textContent == 'X'){
        changeWinnerColor(a1, b2, c3);
        return 'X';
    } else if (a3.textContent == 'X' && b2.textContent == 'X' && c1.textContent == 'X'){
        changeWinnerColor(a3, b2, c1);
        return 'X';
    } 
    // VERIFICAR O 'O'
    else if (a1.textContent == 'O' && a2.textContent == 'O' && a3.textContent == 'O'){
        changeWinnerColor(a1, a2, a3);
        return 'O';
    } else if (b1.textContent == 'O' && b2.textContent == 'O' && b3.textContent == 'O'){
        changeWinnerColor(b1, b2, b3);
        return 'O';
    } else if (c1.textContent == 'O' && c2.textContent == 'O' && c3.textContent == 'O'){
        changeWinnerColor(c1, c2, c3);
        return 'O';
    } else if (a1.textContent == 'O' && b1.textContent == 'O' && c1.textContent == 'O'){
        changeWinnerColor(a1, b1, c1);
        return 'O';
    } else if (a2.textContent == 'O' && b2.textContent == 'O' && c2.textContent == 'O'){
        changeWinnerColor(a2, b2, c2);
        return 'O';
    } else if (a3.textContent == 'O' && b3.textContent == 'O' && c3.textContent == 'O'){
        changeWinnerColor(a3, b3, c3);
        return 'O';
    } else if (a1.textContent == 'O' && b2.textContent == 'O' && c3.textContent == 'O'){
        changeWinnerColor(a1, b2, c3);
        return 'O';
    } else if (a3.textContent == 'O' && b2.textContent == 'O' && c1.textContent == 'O'){
        changeWinnerColor(a3, b2, c1);
        return 'O';
    }
    // VERIFICAR EMPATE
    else if (count == 9) {
        resetBtn.classList.add('visible-btn');
        return 0;
    }
}

function changeWinnerColor(pos1, pos2, pos3){
    pos1.classList.add('winner');
    pos2.classList.add('winner');
    pos3.classList.add('winner');
    resetBtn.classList.add('visible-btn');
}

function resetGame(){
    for (i=0; i<cells.length; i++){
        cells[i].textContent = '';
        cells[i].classList.remove('winner');
    }
    isGameRunning = true;
    result.classList.remove('appear');
    count = 0;
    turn = 0;
    resetBtn.classList.remove('visible-btn');
}

runGame();

