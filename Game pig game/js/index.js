const main = document.createElement('main');
document.body.prepend(main);

class Card {
    constructor(titleClass, titleId, num, pClass, pId, score, divClass, divpClass, divNewClass, divpId, parent){
        this.titleClass = titleClass;
        this.titleId = titleId;
        this.num = num;
        this.pClass = pClass;
        this.pId = pId;
        this.score = score;
        this.divClass = divClass;
        this.divpClass = divpClass;
        this.divNewClass = divNewClass;
        this.divpId = divpId;
        this.parent = parent;
    }
    render(){
        const section = document.createElement('section')
        section.innerHTML =` <h2 class=${this.titleClass} id=${this.titleId}>Player ${this.num}</h2>
                            <p class=${this.pClass} id=${this.pId}>${this.score}</p>
                            <div class=${this.divClass}>
                                <p class=${this.divpClass}>Current</p>
                                <p class=${this.divNewClass} id=${this.divpId}>0</p>
                            </div>`;

        this.parent.append(section);
    }
}

new Card ('name', 'name--0', '1', 
                'score', 'score--0', '43',
                'current',
                'current-label', 
                'current-score', 'current--0',
                main).render();

new Card ('name', 'name--1', '2', 
          'score', 'score--1', '24',
          'current',
          'current-label', 
          'current-score', 'current--1',
          main).render();

const firstSection = document.querySelector('section');
firstSection.classList.add('player', 'player--0', 'player--active');

const secondSection = document.querySelectorAll('section')[1];
secondSection.classList.add('player', 'player--1');

class Image{
    constructor(src, alt, classess, parent){
        this.src = src;
        this.alt = alt;
        this.classess = classess;
        this.parent = parent;
    }
    render(){
        const span = document.createElement('span');
        span.innerHTML = `<img src=${this.src} alt=${this.alt} class=${this.classess} >`;

        this.parent.append(span);
    }
}

new Image( 'img/dice-5.png', 'Playing dice', 'dice', main).render();

class Button{
    constructor(classess, newClass, text, parent){
        this.classess = classess;
        this.newClass = newClass;
        this.text = text;
        this.parent = parent;
    }
    render(){
        const span = document.createElement('span');
        span.innerHTML = ` <button class='${this.classess} ${this.newClass}' >${this.text}</button>`;

        this.parent.append(span);
    }
}

new Button ('btn', 'btn--new', '🔄 New game', main).render();
new Button ('btn', 'btn--roll', '🎲 Roll dice', main).render();
new Button ('btn', 'btn--hold', '📥 Hold', main).render();