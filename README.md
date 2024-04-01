# Overview
This project is to create a wordle clone. Technologies used include HMTL, CSS, Tailwind CSS and Javascript
- VSCode: Live Server, Tailwind, CodeRunner

# Setup HTML
**Boilerplate + Tailwind**
https://tailwindcss.com/docs/installation/play-cdn
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Wordle</title>
	<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
</body>
</html>
```

**Body - Title**
```html
<body>
	<div class="container flex flex-col justify-center items-center m-2">
		<!-- Title -->
		<h1 class="p-8 text-3xl font-black text-center">Wordle</h1>
	</div>
</body>
```

**Add Instructions**
```html
<!-- Instructions -->
<div id="instructions" class="p-4 border bg-slate-200 rounded">
	<p class="font-bold">Guess the Worlde in 6 tries.</p>
	<ul class="list-disc ml-6">
		<li>Each guess must be a valid 5-letter word.</li>
		<li>The color of the tiles will change to show how close your guess was to the word.</li>
	</ul>
</div>
```

**Create Wordle Board**
```html
<!-- Game Board -->
<div id="board" class="container-md p-4">
	<form action="" class="form">
		<div id="word-1" class="py-1">
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
		</div>
		<div id="word-2" class="py-1">
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
		</div>
		
		<div id="word-3" class="py-1">
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
		</div>
		
		<div id="word-4" class="py-1">
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
		</div>
		
		<div id="word-5" class="py-1">
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
		</div>
		
		<div id="word-6" class="py-1">
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
			<input id="letter" type="text" class="border-2 w-10 h-10 text-center font-black" disabled>
		</div>	
	</form>
</div>
```

**Keyboard**
```html
<!-- Keyboard -->
<div id="keyboard" class="flex flex-col justify-center items-center p-4">
	<div id="key-row-1" class="flex flex-row">
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">Q</button>
		<button id="key" class="key px-2 mx-.5border rounded bg-slate-400 text-white">W</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">E</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">R</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">T</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">Y</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">U</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">I</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">O</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">P</button>
	</div>
	<div id="key-row-2" class="flex flex-row">
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">A</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">S</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">D</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">F</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">G</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">H</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">J</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">K</button>
		<button id="key" class="key px-2 mx-.5 border rounded bg-slate-400 text-white">L</button>
	</div>
	<div id="key-row-3" class="flex flex-row">
		<button id="key" class="px-2 mx-.5 border rounded bg-slate-400 text-white">Z</button>
		<button id="key" class="px-2 mx-.5 border rounded bg-slate-400 text-white">X</button>
		<button id="key" class="px-2 mx-.5 border rounded bg-slate-400 text-white">C</button>
		<button id="key" class="px-2 mx-.5 border rounded bg-slate-400 text-white">V</button>
		<button id="key" class="px-2 mx-.5 border rounded bg-slate-400 text-white">B</button>
		<button id="key" class="px-2 mx-.5 border rounded bg-slate-400 text-white">N</button>
		<button id="key" class="px-2 mx-.5 border rounded bg-slate-400 text-white">M</button>
	</div>
	<div id="submit">
		<button id="key-enter" class="bg-amber-400 px-2 py-1 my-2 border-none rounded text-white">Submit Guess</button>
		<button id="backspace" class="bg-slate-300 px-2 py-1 border-none rounded text-white">Del</button>
	</div>
</div>
```

**Game Status**
```html
<!-- Game Tracking -->
<div id="reset-game" class="flex flex-col">
	<div id="score-container" class="container border p-4">
		<div id="games-won">
			<strong>Games Won: 0</strong>
		</div>
		<div id="games-lost">
			<strong>Games Lost: 0</strong>
		</div>
	</div>
	<button id="reset" class="bg-green-400 px-2 py-1 my-2 border-none rounded text-white">Play</button>
</div>
```

**Import Script tag at bottom**
```html
		<script src="main.js"></script>
	</body>
</html>
```

## Javascript
**Add Event Listener for Keyboard clicks**
```js
// Keyboard
const keys = document.querySelectorAll('#key')

function enterLetter(e) {
	const letter = e.target.innerText
	console.log(letter) // Should log letter clicked
}

// Event listeners
keys.forEach(key => {
	key.addEventListener('click', enterLetter);
})
```

**Create an array to store the word**
```js
// Keyboard
const keys = document.querySelectorAll('#key')

// Guesses
let currWord = []
const wordsGuessed = [] //Will limit to 6

function enterLetter(e) {
	const letter = e.target.innerText
	//console.log(letter)
	if (currWord.length < 5) {
		currWord.push(letter) //add guess to array
	} else {
		console.log('Only 5 letter words')
	}
	console.log(currWord) // should log all letters to screen
}

// Event listeners
keys.forEach(key => {
	key.addEventListener('click', enterLetter);
})
```

**Allow user to submit guess**
```js
// Keyboard
const keys = document.querySelectorAll('#key')
const submit = document.querySelector('#key-enter') //enter button

// Guesses
let currWord = []
const wordsGuessed = []

function enterLetter(e) {
	const letter = e.target.innerText
	//console.log(letter)
	if (currWord.length < 5) {
		currWord.push(letter)
	} else {
		console.log('Only 5 letter words')
	}
	console.log(currWord)
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
submit.addEventListener('click', guessWord) // new listener
```

**Display guesses on screen**
```js
// Keyboard
const keys = document.querySelectorAll('#key')
const submit = document.querySelector('#key-enter') //enter button

// Game Board
const firstWord = document.querySelector('#word-1')
const secondWord = document.querySelector('#word-2')
const thirdWord = document.querySelector('#word-3')
const fourthWord = document.querySelector('#word-4')
const fifthWord = document.querySelector('#word-5')
const sixthWord = document.querySelector('#word-6')  

const wordsDisplayed = [firstWord, secondWord, thirdWord, fourthWord, fifthWord, sixthWord]

// Guesses
let currWord = []
const wordsGuessed = []

function enterLetter(e) {
	const letter = e.target.innerText
	//console.log(letter)
	if (currWord.length < 5) {
		currWord.push(letter)
		letterOnScreen(currWord) // Trigger new function
	} else {
		console.log('Only 5 letter words')
	}
	console.log(currWord)
}

function letterOnScreen(word) {
	i = word.length - 1
	const selectRow = wordsGuessed.length
	const boxes = wordsDisplayed[selectRow].querySelectorAll('#letter')
	boxes[i].value = word[i]
	console.log(boxes[i].value)
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
submit.addEventListener('click', guessWord) // new listener
```

**Setup Delete Button**
```javascript
// Keyboard
const backspace = document.querySelector('#backspace')

// Function to remove letter from currWord array
function deleteLetter(e) {
	removeOnScreen(currWord)
	currWord.pop()
	console.log(currWord)
}

// Function to remove letter from screen
function removeOnScreen(word) {
	i = word.length - 1
	const selectRow = wordsGuessed.length
	const boxes = wordsDisplayed[selectRow].querySelectorAll('#letter')
	boxes[i].value = ""
}

//Event Listener
backspace.addEventListener('click', deleteLetter)
```

**Check word**
```javascript
// Set word
const word = "TEARS"
let gameActive = true


// Update Guess Word Function
function guessWord(e) {
	if (currWord.length < 5) {
		alert('Word must be 5 letters')
	} else if (checkGame()) {
			if (currWord.length = 5) {
				wordsGuessed.push(currWord.join(''))
				resetCurrWord()
				console.log(wordsGuessed)}
			else {
			console.log('Game Over')
			}
	} 
}

// Update CheckGame function
function checkGame() {
	console.log(currWord.join(''))
	if (currWord.join('') === word) {
		console.log("Game Won!")
		gameActive = false
		return gameActive
	} else if (wordsGuessed.length < 6) {
		return true
	} else {
		return false
	}
}
```

**Check for matching letters**
```js

// New function to check guess and add colors
function checkGuess(word) {
	const gameWordArr = gameWord.split("")
	// console.log(gameWordArr)
	gameWordArr.forEach(letter => {
		if (word.includes(letter)) {
			console.log(letter)
			const position = word.indexOf(letter)
			yellowOnScreen(position)
		} else {
			console.log('no match')
		}
	}) 
	
	for (let i=0; i<5; i++) {
		if (gameWordArr[i] === word[i]) {
			greenOnScreen(i)
		}
	}
}

// functions to change background colors
function yellowOnScreen(position){
	const selectRow = wordsGuessed.length - 1
	const boxes = wordsDisplayed[selectRow].querySelectorAll('#letter')
	boxes[position].classList.add("bg-amber-300")
}
  
function greenOnScreen(position){
	const selectRow = wordsGuessed.length - 1
	const boxes = wordsDisplayed[selectRow].querySelectorAll('#letter')
	boxes[position].classList.add("bg-green-500")
}

// Function for winning guess
function allGreen(){
	const selectRow = wordsGuessed.length
	const boxes = wordsDisplayed[selectRow].querySelectorAll('#letter')
	for (let i=0; i<5; i++) {
		boxes[i].classList.add("bg-green-500")
	}
}

// Trigger in GuessWord
function guessWord(e) {
	if (checkGame()) {
		if (gameActive) {
			if (currWord.length = 5) {
				wordsGuessed.push(currWord.join(''))
				checkGuess(currWord) //here
				resetCurrWord()
				console.log(wordsGuessed)
			}
		} else {
			console.log('Game Over')
		}
	} else {
		console.log("Game Over")
	}
}

function checkGame() {
	console.log(currWord.join(''))
	if (currWord.join('') === word) {
		console.log("Game Won!")
		allGreen(currWord)
		gameActive = false
		return gameActive
	} else if (wordsGuessed.length < 6) {
		return true
	} else {
		return false
	}
}
```

**Add 'Play' Again**
- Add event listener for button
```js
const reset = document.querySelector('#reset')

reset.addEventListener('click', newGame)
```
- Add 'New Game Function'
```js
function newGame() {
	const gameBoard = document.querySelectorAll('#letter')
	gameBoard.forEach((box) => {
		box.value = '' // clear values from board
		box.classList.remove('bg-amber-300', 'bg-green-500') // remove any existing color classes
})
	wordsGuessed = []
	resetCurrWord()
	gameActive = true
}
```

**Update the score board**
- Add variables
```js
// Game States
const gamesWonDisplay = document.querySelector('#games-won')
const gamesLostDisplay = document.querySelector('#games-lost')
let gamesWon = 0
let gamesLost = 0
```

```js
function updateScore() {
	gamesWonDisplay.innerHTML = `<strong>Games Won: ${gamesWon}</strong>`
	gamesLostDisplay.innerHTML = `<strong>Games Lost: ${gamesLost}</strong>`
}
```

- Update CheckGame Function
```js
function checkGame() {
	console.log(currWord.join(''))
	if (currWord.join('') === gameWord) {
		allGreen(currWord)
		gamesWon += 1
		updateScore()
		alert(`Game Won! The word was ${gameWord}`)
		gameActive = false
		return gameActive
	} else if (wordsGuessed.length < 5) {
		console.log('game continues')
		return gameActive
	} else if (wordsGuessed.length === 5) {
		const lastGuess = wordsGuessed[wordsGuessed.length - 1];
		if (lastGuess === gameWord) {
			allGreen(currWord)
			gamesWon += 1
			updateScore()
			alert(`Game Won! The word was ${gameWord}`)
		} else {
			gamesLost += 1
			updateScore()
			alert(`No more guesses :( The word was ${gameWord}`)
		}
		gameActive = false
		return gameActive
	}
}
```


```js
function enterLetter(e) {
	const letter = e.target.innerText
	// console.log(letter)
	if (currWord.length < 5) {
		currWord.push(letter) //add guess to array
		letterOnScreen(currWord) // Trigger new function
		console.log(currWord)
	} else {
		alert('Word can only be 5 letters')
	} else {
	console.log(currWord) // should log all letters to screen
	}
}
```


```js
// Set word
const wordList = ['frank', 'fraud', 'freak', 'freed', 'freer', 'fresh', 'friar', 'fried', 'frill', 'frisk', 'fritz', 'frock', 'frond', 'front', 'frost', 'froth']
let gameWord = '' // set to empty string
let gameActive = false // set to false
```

```js
function setGameWord() {
	let randomNum = Math.floor(Math.random() * 16)
	gameWord = wordList[randomNum].toUpperCase()
	console.log(gameWord)
	return gameWord
}
```

```js
function newGame() {
	const gameBoard = document.querySelectorAll('#letter')
	gameBoard.forEach((box) => {
		box.value = ''
		box.classList.remove('bg-amber-300', 'bg-green-500')
})
	wordsGuessed = []
	resetCurrWord()
	gameActive = true
	setGameWord()
}
```

