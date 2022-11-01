//Keyboard component

import styles from "../styles/Keyboard.module.css";
import PropTypes from "prop-types";

export default function Keyboard({ correctLetters, guessedLetters }) {
  const keyrow1 = [Q, W, E, R, T, Y, U, I, O, P].map((letter) => {
    return {
      letter: letter,
      color: guessedLetters.includes(letter)
        ? correctLetters.includes(letter)
          ? "green"
          : "gray"
        : "black",
    };
  });

  const keyrow2 = [A, S, D, F, G, H, J, K, L].map((letter) => {
    return {
      letter: letter,
      color: guessedLetters.includes(letter)
        ? correctLetters.includes(letter)
          ? "green"
          : "gray"
        : "black",
    };
  });

  const keyrow3 = [Z, X, C, V, B, N, M].map((letter) => {
    return {
      letter: letter,
      color: guessedLetters.includes(letter)
        ? correctLetters.includes(letter)
          ? "green"
          : "gray"
        : "black",
    };
  });

  return (
    <div>
      <div>
        {keyrow1.map((x) => {
          return (
            <button
              className={styles.keyButton}
              style={`background-color:${x.color}`}
              key={`${x.letter}`}
            >
              {" "}
              x.letter{" "}
            </button>
          );
        })}
      </div>

      <div>
        {keyrow2.map((x) => {
          return (
            <button
              className={styles.keyButton}
              style={`background-color:${x.color}`}
              key={`${x.letter}`}
            >
              {" "}
              x.letter{" "}
            </button>
          );
        })}
      </div>

      <div>
        {keyrow3.map((x) => {
          return (
            <button
              className={styles.keyButton}
              style={`background-color:${x.color}`}
              key={`${x.letter}`}
            >
              {" "}
              x.letter{" "}
            </button>
          );
        })}
      </div>
    </div>
  );
}

Keyboard.propTypes = {
  correctLetters: PropTypes.array.isRequired,
  guessedLetters: PropTypes.array.isRequired,
};
