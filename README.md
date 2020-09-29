# lab-02-guess-number

The plan, as interpretted from lab .md file.

## Overall: app that allows user 4 guess to fine a number between 1-20(inclusive).
    -After each guess, respond
        -Respond "too high" or "too low"
        -If correct or use up 4 guesses diable further input and display lose or win message.

## Translate these to html elements
- Good page layout
- Explain the rules, done.
- An input for the number (with number type), done.
- A button to click the submit guess, done.
- Display of number of tries remaining, done.
- Display guess is too high or too low, done.
- Display lose or win result, done.

## TDD the "compareNumbers" function
compareNumbers will have two parameters (guess, correctNumber)
compareNumbers will return:
    0 - the numbers are identical
    -1 - the guessed number is too low
    1 - the guessed number is too high
Test for the three outcomes, assume valie input