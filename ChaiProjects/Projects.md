# Project link

## Color Changer

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-wcgqczv5?file=index.html)

```JavaScript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## BMI calculator

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-kvh7cc6w?file=2-BMICalculator%2Fchaiaurcode.js)

```JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `please enter valid hieght. ${height}`;
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `please enter valid weight. ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} and you are under weight.`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi} and your weight is normal.`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} and you are over weight.`;
    }
  }
});

```

## Digital Clock

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-kvh7cc6w?file=3-DigitalClock%2Fchaiaurcode.js,3-DigitalClock%2Findex.html)

```JavaScript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Guess The Number

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-aqxeqrmb?file=4-GuessTheNumber%2Fchaiaurcode.js)

```JavaScript
let num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prevGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const newGame = document.createElement('Button');
let playGame = true;

let prevGuessesArr = [];
let numGuess = 1;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const currGuess = parseInt(userInput.value);
    validateGuess(currGuess);
  });
}

function validateGuess(currGuess) {
  if (isNaN(currGuess)) {
    alert('please enter a valid number.');
  } else if (currGuess < 1 || currGuess > 100) {
    alert('please enter a valid number bigger than 1 and smaller than 100');
  } else {
    if (numGuess == 10) {
      prevGuessesArr.push(currGuess);
      displayGuess(currGuess);
      displayMsg(`Game Over. Random number was ${num}`);
      endGame();
    } else {
      prevGuessesArr.push(currGuess);
      displayGuess(currGuess);
      checkGuess(currGuess);
    }
  }
}

function checkGuess(currGuess) {
  if (currGuess == num) {
    displayMsg('You guessed it right');
    endGame();
  } else if (currGuess < num) {
    displayMsg('Higher');
  } else {
    displayMsg('Lower');
  }
}

function displayGuess(currGuess) {
  userInput.value = '';
  prevGuesses.innerHTML += `${currGuess},`;
  remainingGuesses.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  playGame = false;
  // newGame.classList.add('btn');
  newGame.innerText = 'New Game';
  startOver.appendChild(newGame);
  newGameFnc();
}

function newGameFnc() {
  newGame.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1);
    prevGuessesArr = [];
    numGuess = 1;
    prevGuesses.innerHTML = '';
    userInput.removeAttribute('disabled', '');
    remainingGuesses.innerHTML = `${10 - numGuess}`;
    startOver.removeChild(newGame);
    playGame = true;
  });
}

```
