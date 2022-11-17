//Keyboard component

import styles from "../styles/keyboard.module.css";
import PropTypes from "prop-types";

export default function Keyboard({ alphabet, setGuess, guessWord }) {
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
    ["Z", "X", "C", "V", "B", "N", "M"],
  ].map((row) => {
    return (
      <div className={styles.keyRow} key={"row"}>
        {row.map((letter) => {
          /*if(letter === "enter"){
          return(
            <input
            value={"Enter"}
            type="button"
            className={styles.enterKey}
            key={`${letter}`}
            onClick={() => {
              guessComponent = updateTiles();
              updateAlphabet();
            }}
          />
          )
        }*/

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
};
