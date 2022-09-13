const textArea = document.querySelector('#addWord');
const pAdv = document.querySelector('#adve');

let addedWords = [];
let valueText;

const addWord = ()=>{
    valueText = textArea.value.toUpperCase();
    if(valueText.length >=3 && valueText.length <=8 && valueText.match(/[a-zñ]$/i)){
        verifyWords(valueText);
        textArea.style.border = 'none';
        pAdv.style.color = '#495057';   
    }else{
        textArea.style.border = '2px solid red';
        pAdv.style.color = 'red';
    }
}

const verifyWords = word =>{
        if(!addedWords.includes(word)){
            palabras.push(word);
            addedWord(); 
        }else{
            repeatWord(word);
        }   
    addedWords.push(word);
    console.log(addedWords);
}


