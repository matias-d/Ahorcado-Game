let wordSelect;
let lettersUsed;
let mistakes;
let hits;
let source;
let wonSound = new Audio('./sounds/winsound.mp3');
let loseSound = new Audio('./sounds/losesound.mp3')

const playGame = ()=>{
    resetsValue();
    wordRandomSelect();
    elementsSpans();
    document.addEventListener('keydown', letterEvent);
}

const endGame = () =>{
    if(mistakes === 7){
        aError(wordSelect);
        loseSound.play();
        document.removeEventListener('keydown', letterEvent);
    }else if(hits === wordSelect.length){
        aSuccess(wordSelect);
        wonSound.play();
        document.removeEventListener('keydown', letterEvent);
    }
}

const addLetter = letter =>{
    let spanChildrens = document.querySelectorAll('.addLetters span');
    for(let i = 0; i < spanChildrens.length; i++){
        if(letter === wordSelect[i]){
            hits++;
            spanChildrens[i].innerHTML = letter;
        }
    }
    endGame();
}

const incorrectLetter = letter =>{
    let spanElements = document.createElement('span');
    spanElements.classList.add('lX');
    incorrectLetters.appendChild(spanElements)
    spanElements.innerHTML = letter;
}

const missLetter = letter =>{
    mistakes++;
    source = `/img/img${mistakes}.png`;
    img.src = source;
    
    endGame();
}



const verifyLetters = letter =>{
    if(wordSelect.includes(letter)){
        addLetter(letter);
    }else{
        missLetter(letter);
        incorrectLetter(letter);
    }
    lettersUsed.push(letter);
}


const letterEvent = event =>{
    let letter = event.key.toUpperCase();
    if(letter.match(/^[a-zñ]$/i) && !lettersUsed.includes(letter)){
        verifyLetters(letter);
    };
}



const elementsSpans = () =>{
    for(let i = 0; i < wordSelect.length;i++){
        let span = document.createElement('span');
        span.classList.add('box')
        addLetters.appendChild(span);
    }
}




























