import PropTypes from "prop-types";

function guess({ input, correctWord }) {
  let correct = false;
  const correctLetters = [];

  //check if word is correct
  if (input === correctWord) {
    correct = true;
  }

  for (let index = 0; index < input.length; index++) {
    const letter = input[index];

    if (correctWord.includes(letter) && !correctLetters.includes(letter)) {
      correctLetters.push(letter);
    }
  }

  return correct, correctLetters;
}

guess.propTypes = {
  input: PropTypes.string.isRequired,
  correctWord: PropTypes.string.isRequired,
};

export default guess;
