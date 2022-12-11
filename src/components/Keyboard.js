//Keyboard component

import styles from "../styles/Keyboard.module.css";
import PropTypes from "prop-types";

export default function Keyboard({ alphabet, setGuess, guessWord, submit }) {
  function colorCheck(key) {
    if (key.guessed) {
      if (key.guessedInPlace) {
        return "green";
      } else if (key.guessedInWord) {
        return "yellow";
      } else {
        return "darkGray";
      }
    } else {
      return "gray";
    }
  }

  const keyStyle = (color) => {
    let style = "";
    if (color === "green") {
      style = styles.greenKey;
    } else if (color === "darkGray") {
      style = styles.darkGrayKey;
    } else if (color === "yellow") {
      style = styles.yellowKey;
    } else if (color === "gray") {
      style = styles.grayKey;
    }
    return style;
  };

  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["enter", "Z", "X", "C", "V", "B", "N", "M", "del"],
  ].map((row) => {
    return (
      <div className={styles.keyRow} key={`row${row[0]}`}>
        {row.map((letter) => {
          if (letter === "del") {
            return (
              <input
                value={"\u232b"}
                type="button"
                className={styles.specKey}
                key={`del`}
                onClick={() => {
                  setGuess(guessWord.slice(0, -1));
                }}
              />
            );
          } else if (letter === "enter") {
            return (
              <input
                value={`ENTER`}
                type="button"
                className={styles.specKey}
                key={`enter`}
                onClick={submit}
              />
            );
          }

          const key = alphabet.find((x) => {
            return x.letter === letter;
          });
          return (
            <input
              value={`${key.letter}`}
              type="button"
              className={keyStyle(colorCheck(key))}
              key={`${key.letter}`}
              onClick={() => {
                setGuess(guessWord + key.letter.toUpperCase());
              }}
              disabled={guessWord.length === 5}
            />
          );
        })}
      </div>
    );
  });

  return <div className={styles.keyboard}>{keys}</div>;
}

Keyboard.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.object).isRequired,
  setGuess: PropTypes.func.isRequired,
  guessWord: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
};
