// Keyboard
const keys = document.querySelectorAll('#key')
const submit = document.querySelector('#key-enter')

// Game Board
const firstWord = document.querySelector('#word-1')
console.log(firstWord.childNodes[0])

// Game Functionality
let currWord = []
const wordsGuessed = []

// console.log(keys);

function enterLetter(e) {   
    const letter = e.target.innerText
    // console.log(letter)
    if (currWord.length < 5) {
        currWord.push(letter)
        letterOnScreen(currWord)
    } else {
        console.log('Word only 5 letters.')
    }
    console.log(currWord)
}

function letterOnScreen(word) {
    console.log(word.length)
    firstWord.childNodes[word.length].value = word[word.length-1]
}

function guessWord(e) {
    if (checkGame()) {
        if (currWord.length = 5) {
            wordsGuessed.push(currWord.join(''))
            resetCurrWord()
            console.log(wordsGuessed)
        }
    } else {
        console.log('Game Over')
    }
    }

function resetCurrWord() {
    currWord = []
}

function checkGame() {
    if (wordsGuessed.length < 6) {
        return true
    } else {
        return false
    }
}

// Event listeners
keys.forEach(key => {
    key.addEventListener('click', enterLetter);
})

submit.addEventListener('click', guessWord)




