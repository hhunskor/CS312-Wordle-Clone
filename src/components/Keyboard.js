//Keyboard component
//Only displays right now and doesn't handle inputs

import styles from "../styles/keyboard.module.css";
import PropTypes from "prop-types";

export default function Keyboard({ correctLetters, guessedLetters }) {
  const keyrow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
    (letter) => {
      return {
        letter: letter,
        color: guessedLetters.includes(letter)
          ? correctLetters.includes(letter)
            ? "green"
            : "darkGray"
          : "gray",
      };
    }
  );

  const keyrow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map(
    (letter) => {
      return {
        letter: letter,
        color: guessedLetters.includes(letter)
          ? correctLetters.includes(letter)
            ? "green"
            : "darkGray"
          : "gray",
      };
    }
  );

  const keyrow3 = ["Z", "X", "C", "V", "B", "N", "M"].map((letter) => {
    return {
      letter: letter,
      color: guessedLetters.includes(letter)
        ? correctLetters.includes(letter)
          ? "green"
          : "darkGray"
        : "gray",
    };
  });

  console.log(keyrow1);

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyRow}>
        {keyrow1.map((x) => {
          return (
            <button
              className={
                x.color !== "green"
                  ? x.color === "darkGray"
                    ? styles.darkGrayKey
                    : styles.grayKey
                  : styles.greenKey
              }
              key={`${x.letter}`}
            >
              {x.letter}
            </button>
          );
        })}
      </div>

      <div className={styles.keyRow}>
        {keyrow2.map((x) => {
          return (
            <button
              className={
                x.color !== "green"
                  ? x.color === "darkGray"
                    ? styles.darkGrayKey
                    : styles.grayKey
                  : styles.greenKey
              }
              key={`${x.letter}`}
            >
              {x.letter}
            </button>
          );
        })}
      </div>

      <div className={styles.keyRow}>
        {keyrow3.map((x) => {
          return (
            <button
              className={
                x.color !== "green"
                  ? x.color === "darkGray"
                    ? styles.darkGrayKey
                    : styles.grayKey
                  : styles.greenKey
              }
              key={`${x.letter}`}
            >
              {x.letter}
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
