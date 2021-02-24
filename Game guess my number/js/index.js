const root = document.querySelector('#root');
//Creating interface
//Header
const header = document.createElement('header'),
      headerTitle = document.createElement('h1'),
      headerPrg = document.createElement('p'),
      headerButton = document.createElement('button'),
      headerDiv = document.createElement('div');

headerPrg.classList.add('between');
headerButton.classList.add('btn');
headerButton.classList.add('again');
headerDiv.classList.add('number');

root.prepend(header);
header.append(headerTitle);
header.append(headerPrg);
header.append(headerButton);
header.append(headerDiv);

headerTitle.textContent = `Guess My Number!`;
headerPrg.textContent = `(Between 1 and 20)`;
headerButton.textContent = `Again!`;
headerDiv.textContent = `?`;

//Main section 
const main = document.createElement('main');

//First section
const firstSection = document.createElement('section'),
      firstButton = document.createElement('button');

firstSection.classList.add('left');
firstButton.classList.add('btn');
firstButton.classList.add('check');

class Input{
    constructor(type, addClass, parent){
        this.type = type,
        this.addClass = addClass,
        this.parent = parent
    }
    render(){
        const inpt = document.createElement('span');
        inpt.innerHTML = `<input type='${this.type}' class = '${this.addClass}'>`;

        this.parent.append(inpt);
    }
}

new Input ('number', 'guess', firstSection).render();
firstButton.textContent = `Check!`;

//Second section
const secondSection = document.createElement('section'),
      secondMessage = document.createElement('p'),
      secondScore = document.createElement('p'),
      secondHighscore = document.createElement('p'),
      secondSpanScore = document.createElement('span'),
      secondSpan = document.createElement('span');


secondSection.classList.add('right');
secondMessage.classList.add('message');
secondScore.classList.add('label-score');
secondHighscore.classList.add('label-highscore');
secondSpanScore.classList.add('score');
secondSpan.classList.add('highscore');

secondMessage.textContent = `Start guessing...`;
secondScore.textContent = `💯 Score: `;
secondSpanScore.textContent = `20`;
secondHighscore.textContent = `🥇 Highscore: `;
secondSpan.textContent = `0`;

root.append(main);
main.append(firstSection);
firstSection.append(firstButton);
main.append(secondSection);
secondSection.append(secondMessage);
secondSection.append(secondScore);
secondScore.append(secondSpanScore);
secondSection.append(secondHighscore);
secondHighscore.append(secondSpan);

//Creating a Game
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = null;

const checkBtn = document.querySelector('.check'),
      checkMessage = document.querySelector('.message'),
      checkNumber = document.querySelector('.number'),
      checkScore = document.querySelector('.score'),
      againBtn = document.querySelector('.again'),
      highScoreText = document.querySelector('.highscore');

function displayMessage(message){
    checkMessage.textContent = message;
}

checkBtn.addEventListener('click', () => {

    const guessInput = Number(document.querySelector('.guess').value);

    if(!guessInput){
        //no input number
        displayMessage(`⛔ No number!`);

    } else if (guessInput === secretNumber){
        //when u win
        displayMessage(`👑 Correct Number!`);
        document.body.style.backgroundColor = '#60b347';
        checkNumber.style.width = '30rem';
        checkNumber.textContent = secretNumber;

        if(score > highScore){
            highScore = score;
            highScoreText.textContent = highScore;
        }

    } else if(guessInput !== secretNumber){
        if (score > 1){
            displayMessage(guessInput < secretNumber ? '💔 Too Low!' : '👏 Too High!');
            score --;
            checkScore.textContent = score;
        } else {
            displayMessage(`🚩 GAME OVER!`);
            checkScore.textContent = 0;
        }
    }
});

againBtn.addEventListener('click', () => {
    const guess = document.querySelector('.guess');
    guess.value = null;

    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage(`Start guessing...`);

    checkScore.textContent = score;
    checkNumber.textContent = '?';

    document.body.style.backgroundColor = '#222';
    checkNumber.style.width = '15rem';

});
