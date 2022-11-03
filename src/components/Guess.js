/* eslint-disable */

import PropTypes from "prop-types";
import { useEffect } from "react";

function Guess({
  input,
  correctWord,
  setGameOver,
  correctLetters,
  setCorrectLetters,
  guessedLetters,
  setGuessedLetters,
  guessedWords,
  setGuessedWords,
}) {
  //const [guessedWords, setGuessedWords] = useState([]);
  /*let guessedWordsCopy = guessedWords.map((a) => a);
  guessedWordsCopy.push(input);*/

  setGuessedWords(
    [...guessedWords, input].map((word) => {
      return <li>{word}</li>;
    })
  );
  //setGuessedWords(guessedWordsCopy);
  /*guessedWordsCopy = guessedWordsCopy.map((word) => {
    return (<li>{word}</li>)
  })*/

  let correctLettersCopy = correctLetters.map((x) => x);
  let guessedLettersCopy = guessedLetters.map((z) => z);

  for (let index = 0; index < input.length; index++) {
    const letter = input.charAt(index);

    if (correctWord.includes(letter) && !correctLettersCopy.includes(letter)) {
      correctLettersCopy.push(letter);
    }

    if (!guessedLettersCopy.includes(letter)) {
      guessedLettersCopy.push(letter);
    }
  }

  setCorrectLetters(correctLettersCopy);
  setGuessedLetters(guessedLettersCopy);

  //console.log(correctLetters);
  //console.log(guessedLetters);

  //check if word is correct
  if (input === correctWord) {
    setGameOver(true);
  }

  console.log(guessedWords);
  return <div>{guessedWords}</div>;
}

Guess.propTypes = {
  input: PropTypes.string.isRequired,
  correctWord: PropTypes.string.isRequired,
  setGameOver: PropTypes.func.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCorrectLetters: PropTypes.func.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGuessedLetters: PropTypes.func.isRequired,
};

export default Guess;
