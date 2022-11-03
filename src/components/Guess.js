/* eslint-disable */

import PropTypes from "prop-types";

function guess({
  input,
  correctWord,
  setGameOver,
  correctLetters,
  setCorrectLetters,
  guessedLetters,
  setGuessedLetters,
}) {
  let correct = false;
  const [guessedWords, setGuessedWords] = useState([]);
  guessedWordsCopy = guessedWords.map((a) => a);
  guessedWordsCopy.push(input);
  setGuessedWords(guessedWordsCopy);

  let correctLettersCopy = correctLetters.map((x) => x);
  let guessedLettersCopy = guessedLetters.map((z) => z);

  for (let index = 0; index < input.length; index++) {
    const letter = input[index];

    if (correctWord.includes(letter) && !correctLettersCopy.includes(letter)) {
      correctLettersCopy.push(letter);
    }

    if (!guessedLettersCopy.includes(letter)) {
      guessedLettersCopy.push(letter);
    }
  }

  setCorrectLetters(correctLettersCopy);
  setGuessedLetters(guessedLettersCopy);

  console.log(corectLetters);
  console.log(guessedLetters);

  //check if word is correct
  if (input === correctWord) {
    setGameOver(true);
  }

  return (
    <div>
      <li>{guessedWords}</li>
    </div>
  );
}

guess.propTypes = {
  input: PropTypes.string.isRequired,
  correctWord: PropTypes.string.isRequired,
  setGameOver: PropTypes.func.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCorrectLetters: PropTypes.func.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGuessedLetters: PropTypes.func.isRequired,
};

export default guess;
