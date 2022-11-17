//Keyboard component
//Only displays right now and doesn't handle inputs

import styles from "../styles/keyboard.module.css";
import PropTypes from "prop-types";

export default function Keyboard({ alphabet, setGuess, guessWord }) {
  // console.log(alphabet);

  const keyrow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
    (letter) => {
      for (let i = 0; i < alphabet.length; i++) {
        const alphLetter = alphabet[i];
        let newColor = "gray";
        if (letter === alphLetter.letter) {
          if (alphLetter.guessedInPlace) {
            newColor = "green";
          } else if (alphLetter.guessedInWord) {
            newColor = "yellow";
          } else if (alphLetter.guessed) {
            newColor = "darkGray";
          }
          return {
            letter: letter,
            color: newColor,
          };
        }
      }
    }
  );

  const keyrow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map(
    (letter) => {
      for (let i = 0; i < alphabet.length; i++) {
        const alphLetter = alphabet[i];
        let newColor = "gray";
        if (letter === alphLetter.letter) {
          if (alphLetter.guessedInPlace) {
            newColor = "green";
          } else if (alphLetter.guessedInWord) {
            newColor = "yellow";
          } else if (alphLetter.guessed) {
            newColor = "darkGray";
          }
          return {
            letter: letter,
            color: newColor,
          };
        }
      }
    }
  );

  const keyrow3 = ["Z", "X", "C", "V", "B", "N", "M"].map((letter) => {
    for (let i = 0; i < alphabet.length; i++) {
      const alphLetter = alphabet[i];
      let newColor = "gray";
      if (letter === alphLetter.letter) {
        if (alphLetter.guessedInPlace) {
          newColor = "green";
        } else if (alphLetter.guessedInWord) {
          newColor = "yellow";
        } else if (alphLetter.guessed) {
          newColor = "darkGray";
        }
        return {
          letter: letter,
          color: newColor,
        };
      }
    }
  });

  //console.log(keyrow1);
  //console.log(keyrow2);
  //console.log(keyrow3);

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

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyRow}>
        {keyrow1.map((x) => {
          return (
            <input
              value={`${x.letter}`}
              type="button"
              className={keyStyle(x.color)}
              key={`${x.letter}`}
              onClick={() => {
                setGuess(guessWord + x.letter.toUpperCase());
              }}
              disabled={guessWord.length === 5}
            />
          );
        })}
      </div>

      <div className={styles.keyRow}>
        {keyrow2.map((x) => {
          return (
            <input
              value={`${x.letter}`}
              type="button"
              className={keyStyle(x.color)}
              key={`${x.letter}`}
              onClick={() => {
                setGuess(guessWord + x.letter.toUpperCase());
              }}
              disabled={guessWord.length === 5}
            />
          );
        })}
      </div>

      <div className={styles.keyRow}>
        {keyrow3.map((x) => {
          return (
            <input
              value={`${x.letter}`}
              type="button"
              className={keyStyle(x.color)}
              key={`${x.letter}`}
              onClick={() => {
                setGuess(guessWord + x.letter.toUpperCase());
              }}
              disabled={guessWord.length === 5}
            />
          );
        })}
      </div>
    </div>
  );
}

Keyboard.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.object).isRequired,
  setGuess: PropTypes.func.isRequired,
  guessWord: PropTypes.string.isRequired,
};
