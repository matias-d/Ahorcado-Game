let wordSelect;
let lettersUsed;
let mistakes;
let hits;
let classDepend = true;
let wonSound = new Audio('./sounds/winsound.mp3');
let loseSound = new Audio('./sounds/losesound.mp3');


const playGame = ()=>{
    resetsValue();
    wordRandomSelect();
    generateSpan();
    eventButtons();
    resetClassBtn();
}

const endGame = ()=>{
    if(mistakes === 7){
        aError(wordSelect);
        loseSound.play();
    }else if(hits === wordSelect.length){
        aSuccess(wordSelect)
        wonSound.play();
    }
}

const eventButtons = () => {
    let allButtons = document.querySelectorAll('.buttons button');
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', clickButton);
    }
}


const incorrectLetter = letter =>{
    let span = document.createElement('span');
    span.classList.add('lX');
    incorrectLetters.appendChild(span);
    span.innerHTML = letter;
}

const wronLetter = letter =>{
    mistakes++;
    let source= `./img/img${mistakes}.png`;
    img.src = source;
    endGame();
}

const addLetter = letter =>{
    let spans = document.querySelectorAll('.addLetters span');
    for(let i = 0; i < spans.length; i++){
        if(letter === wordSelect[i]){
            spans[i].innerHTML = letter;
            hits++;
        }
    }
    endGame();
}

const verifyLetter = letter =>{
    if(wordSelect.includes(letter)){
        addLetter(letter);
        classDepend = true;
    }else{
        wronLetter(letter);
        incorrectLetter(letter)
        classDepend = false;
    }
    lettersUsed.push(letter);
}

const resetClassBtn = ()=>{
    let allButtons = document.querySelectorAll('.buttons button');
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove('btnUsed');
        allButtons[i].classList.remove('btnUsedHit');
    }
}

const clickButton = event=>{
    let buttons = event.target;
    let letter = buttons.innerHTML;
    if(!lettersUsed.includes(letter)){
        verifyLetter(letter);
    }

    if(classDepend === false){
        buttons.classList.add('btnUsed');
    }else{
        buttons.classList.add('btnUsedHit');
    }
}


const generateSpan = ()=>{
    for(let i = 0; i < wordSelect.length; i++){
        let span = document.createElement('span');
        addLetters.appendChild(span)
    }
}










    























