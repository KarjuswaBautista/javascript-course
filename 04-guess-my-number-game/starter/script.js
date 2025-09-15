const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const numberEl = document.querySelector('.number');
const againBtn = document.querySelector('.again');

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function() {
    const guess = Number(guessEl.value);
    console.log("clicked");

    if (guess === secretNumber) {
        numberEl.textContent = secretNumber;
        messageEl.textContent = "Correct!";
        guessEl.value = "";
        guessEl.disabled = true;
        checkBtn.disabled = true;
        changeColor('green');
        if (score > highscore) {
            highscore = score;
            highScoreEl.textContent = highscore;          
        }
    } else if (guess > secretNumber) {
        messageEl.textContent = "Lower!";
        score--;
        scoreEl.textContent = score;
    } else if (guess < secretNumber) {
        messageEl.textContent = "Higher!";
        score--;
        scoreEl.textContent = score;
    }

    if (score < 1) {
        messageEl.textContent = "You Lost!";
        checkBtn.disabled = true;
        guessEl.disabled = true;
        numberEl.textContent = secretNumber;
        guessEl.value = "";
        changeColor('red');
    }
})

againBtn.addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;   
    console.log(secretNumber);
    messageEl.textContent = 'Start guessing...';
    numberEl.textContent = '?';
    scoreEl.textContent = score;
    guessEl.value = "";
    guessEl.disabled = false;
    checkBtn.disabled = false;
    changeColor('');
    
})