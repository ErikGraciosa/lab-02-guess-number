// import functions and grab DOM elements
// Marry the html tags here:

const buttonSubmit = document.getElementById('button-submit');
const numberOfTriesLeft = document.getElementById('number-of-tries-left');
const highOrLow = document.getElementById('high-or-low');
const winOrLose = document.getElementById('win-or-lose');


let initialNumberOfGuesses = parseInt(numberOfTriesLeft.textContent);



// initialize state
//Change DOM states here or add variables



// set event listeners to update state and DOM
//Click handler here:

buttonSubmit.addEventListener('click', () => {
    const inputNumber = document.getElementById('input-number');
    
    let userGuess = parseInt(inputNumber.value);
    console.log(typeof userGuess);
    console.log(typeof initialNumberOfGuesses);
});