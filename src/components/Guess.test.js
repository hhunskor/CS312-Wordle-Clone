//import Guess from "../components/Guess";

import testwords from "../../data/testwords.json";
import guess from "../components/Guess";

test.skip("Placeholder test - replace with real tests", () => {
  test("Need to write tests");
});

const correctWord = testwords[0];

describe.skip("guess: word is correct", () => {
  test("word is correct", () => {
    const correctWordGuess = testwords[0];

    console.log(correctWord);
    console.log(correctWordGuess.length);
    console.log(typeof correctWord);
    console.log(correctWordGuess);
    console.log(correctWordGuess.length);
    console.log(typeof correctWordGuess);

    console.log(guess(correctWordGuess, correctWord));

    const guessBool = guess(correctWordGuess, correctWord);

    expect(guessBool[0]).toBeTruthy();
  });
});

//function tests if word is correct or not

//describe.skip("guess: individual letters are in word");
//check if individual letters are in the word
