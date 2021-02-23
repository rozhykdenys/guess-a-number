const root = document.querySelector('#root');

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
firstButton.classList.add('chek');

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
