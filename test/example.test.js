// IMPORT MODULES under test here:
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('Assuming generated number is 6, guess number of 4 should return "-1"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    const guess = 4;
    const correctNumber = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Assuming generated number is 6, guess number of 6 should return "0"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const guess = 6;
    const correctNumber = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Assuming generated number is 6, guess number of 20 should return "-1"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    const guess = 20;
    const correctNumber = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});