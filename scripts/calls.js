
//Palabras a adivinar
const palabras = ["ALURA", 'HARDWARE', 'SOFTWARE', 'CSS', 'HTML', 'MOUSE','TECLADO','PANTALLA','CODIGO','APRENDER','CASA','AGREGAR','PAIS','DISCO','CELULAR','PERFUME','ÑOQUIS','PAN','AGREGAR','JUEGO']

//LLamadas

const wordRandom = (min, max) =>{ //Numero aleatorio;
    let aWord = max - min;
    let wordR = Math.floor(Math.random() * aWord + min);
    return wordR;
}

const wordRandomSelect = () =>{ // Palabra aleatoria;
    let wordS = palabras[wordRandom(0, palabras.length)];
     wordSelect = wordS
}

const resetsValue = ()=>{ //Resetea los valores para un neuvo juego;
    lettersUsed = [];
    mistakes = 0;
    hits = 0;
    addLetters.innerHTML = '';
    incorrectLetters.innerHTML = '';
    img.src = `./img/img0.png`;
}


//Alertas

function aError(palabra){ //Alarma por si no se adivina la palabra
    Swal.fire({
      icon: 'error',
      title: 'Ahorcado...',
      text: "No adivinaste la palabra esta era : " + palabra ,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Jugar de Nuevo',
      cancelButtonText: 'Desistir'
    }).then((result) => {
      if (result.isConfirmed) {
        playGame();
      }
      if(result.isDismissed){
        visibleHome();
        game.style.display ='none';
      }
    })
  }
  
  function aSuccess(palabra){ //Alarma por adivinar la palabra
    Swal.fire({
      icon: 'success',
      title: 'Felicidades!',
      text: "Has advinado la palabra : " + palabra,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Jugar de Nuevo',
      cancelButtonText: 'Desistir'
    }).then((result) => {
      if (result.isConfirmed) {
        playGame()
      }
      if(result.isDismissed){
        visibleHome()
        game.style.display ='none';    
      }
    })
  }

  function addedWord(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su palabra a sido añadida!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  function repeatWord(palabra){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Su palabra ' + palabra + " ya se agrego!",
      showConfirmButton: false,
      timer: 1500
    })
  }




//Elementos a manipular
const newWord = document.querySelector('.newWord')
const home = document.querySelector('.home')
const game = document.querySelector('.game')
const addLetters = document.querySelector('.addLetters')
const incorrectLetters = document.querySelector('.incorrectLetters')
const img = document.querySelector('#imgS');
const addWordes = document.querySelector('.text-area');

const btnI = document.querySelector('#btn-i'), //Botones a usar
      btnA = document.querySelector('#btn-a'),
      btnD = document.querySelector('#btn-d'),
      btnC = document.querySelector('#btn-c'),
      btnN = document.querySelector('#btn-n'), 
      btnS = document.querySelector('#btn-s') 

const hiddenHome = () =>{ home.style.display = 'none';} //Oculta el inicio
const visibleHome =() =>{home.style.display = 'block';} //Muestra el inicio


//Botones ya con sus eventos a escuchar;

btnI.addEventListener('click', ()=>{
    playGame();
    hiddenHome();
    game.style.display = 'block'
})

btnA.addEventListener('click', ()=>{
    hiddenHome();
    newWord.style.display = 'block'
    textArea.value = '';
    textArea.style.border = 'none';
    pAdv.style.color = '#495057';
})

btnD.addEventListener('click', ()=>{
    visibleHome();
    game.style.display ='none'
})

btnC.addEventListener('click', ()=>{
    visibleHome();
    newWord.style.display = 'none'
});

btnS.addEventListener('click', ()=>{
  addWord();
  textArea.value = '';
})

btnN.addEventListener('click', playGame);