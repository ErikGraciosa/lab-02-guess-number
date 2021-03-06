// import functions and grab DOM elements

import { compareNumbers } from './compareNumbers.js';
// Marry the html tags here:
const buttonSubmit = document.getElementById('button-submit');
const numberOfTriesLeft = document.getElementById('number-of-tries-left');
const highOrLow = document.getElementById('high-or-low');
const winOrLose = document.getElementById('win-or-lose');
const resultsImage = document.getElementById('results-image');
const buttonReset = document.getElementById('button-reset');

// initialize state
//Change DOM states here or add variables
let testResult = 0;
let answerNumber = Math.floor((Math.random() * 19) + 1);
let guessesCounter = parseInt(numberOfTriesLeft.textContent);

// set event listeners to update state and DOM
//Click handler here:

buttonSubmit.addEventListener('click', () => {
    //Initial check to lock out if no guesses left, then logic to compare number and decrement # of guesses left.    
    if (guessesCounter > 0) {
        const inputNumber = document.getElementById('input-number');
        let userGuess = parseInt(inputNumber.value);
        testResult = compareNumbers(userGuess, answerNumber);    
        guessesCounter--;
        numberOfTriesLeft.textContent = guessesCounter;
        //Check if number too high or low
        if (testResult > 0) {
            highOrLow.textContent = 'Your guess is too high!';
        } else if (testResult < 0) {
            highOrLow.textContent = 'Your guess is too low!';
        }
        //Check if out of guesses and return loss message
        if (guessesCounter === 0 && !(testResult === 0)) {
            alert('Out of guesses. YOU LOSE!');
            resultsImage.src = './assets/tenor.gif';
            resultsImage.style.visibility = 'visible';
        }
    } else {
        alert('Sorry but you are out of guesses!');
    } 
    //This is checking for win condition and returning win styles.
    if (testResult === 0) {
        console.log('YOU WIN');
        winOrLose.textContent = 'YOU WIN';
        highOrLow.textContent = 'You guessed the number!';
        resultsImage.src = './assets/win.jpg';
        resultsImage.style.visibility = 'visible';
    } 
});

console.log(answerNumber);

buttonReset.addEventListener('click', () => {
    //Reset variables
    guessesCounter = 4;
    answerNumber = Math.floor((Math.random() * 19) + 1);
    console.log(answerNumber);
    //Reset number
    
    //Reset styles
    numberOfTriesLeft.textContent = guessesCounter;
    winOrLose.textContent = '';
    highOrLow.textContent = '';
    resultsImage.src = '';
    resultsImage.style.visibility = 'hidden';
});


