import Head from "next/head";
import { useState } from "react";
import PropTypes from "prop-types";
import Guess from "../components/Guess";
import Keyboard from "../components/Keyboard";
import styles from "../styles/index.module.css";
import Popup from "../components/Popup";

export default function Main({
  arrayWords,
  correctWord,
  alphabet,
  setAlphabet,
  tiles,
  setTiles,
}) {
  const [startTime] = useState(Date.now());
  let endTime;
  console.log(correctWord);

  const [time, setTime] = useState(undefined);
  const [guessWord, setGuess] = useState("");
  const [gameOver, setGameOver] = useState("false");
  const [showStats, setShowStats] = useState(false);

  /// checks that a word is a valid guess in that there are no spaces or special characters, the word is 5 letters, and that the word is
  /// part of the mac stored dictionary of 5 letter words
  function isValidGuess() {
    let valid = true;
    // looking at valid letters and word type
    if (
      guessWord.length !== 5 ||
      !/^[a-zA-Z]+$/.test(guessWord) ||
      !arrayWords.includes(guessWord.toLowerCase())
    ) {
      valid = false;
    }

    return valid;
  }

  let guessComponent = <Guess tiles={tiles} />;

  let tilesCopy = tiles.map((x) => x);
  // changes data in tiles file, called for "submit" onClick
  const updateTiles = () => {
    let startIndex = 0;
    for (let i = 0; i < 30; i += 5) {
      if (tiles[i].letter === "") {
        startIndex = i;
        break;
      }
    }

    let remainingGuessLetters = correctWord.slice();
    for (let i = 0; i < guessWord.length; i++) {
      const tile = i + startIndex;
      let color = "gray";
      const guessedLetter = guessWord.charAt(i);
      const trueLetter = correctWord.charAt(i);

      if (guessedLetter === trueLetter) {
        color = "green";
        remainingGuessLetters = remainingGuessLetters.replace(
          guessedLetter,
          ""
        );
      }

      tilesCopy = tilesCopy.map((x) => {
        if (tile === x.tile) {
          return {
            tile: tile,
            letter: guessedLetter,
            color: color,
          };
        } else {
          return {
            tile: x.tile,
            letter: x.letter,
            color: x.color,
          };
        }
      });
    }
    for (let i = 0; i < guessWord.length; i++) {
      const tile = i + startIndex;
      const guessedLetter = guessWord.charAt(i);
      const trueLetter = correctWord.charAt(i);

      let color = "gray";
      if (
        remainingGuessLetters.includes(guessedLetter) &&
        guessedLetter !== trueLetter
      ) {
        color = "yellow";
        remainingGuessLetters = remainingGuessLetters.replace(
          guessedLetter,
          ""
        );
      }

      tilesCopy = tilesCopy.map((x) => {
        if (tile === x.tile && x.color !== ("green" || "yellow")) {
          return {
            tile: tile,
            letter: guessedLetter,
            color: color,
          };
        } else {
          return {
            tile: x.tile,
            letter: x.letter,
            color: x.color,
          };
        }
      });
    }
    setTiles(tilesCopy);

    // check for win or loss
    if (guessWord === correctWord) {
      endTime = Date.now();
      const gameTime = endTime - startTime;
      const seconds = Math.floor((gameTime / 1000) % 60);
      const minutes = Math.floor((gameTime / (1000 * 60)) % 60);
      const hours = Math.floor((gameTime / (1000 * 60 * 60)) % 24);

      setTime(
        `You solved in: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
      );

      setGameOver("win");
      setShowStats(true);
    } else if (tilesCopy[29].letter !== "") {
      endTime = Date.now();
      const gameTime = endTime - startTime;
      const seconds = Math.floor((gameTime / 1000) % 60);
      const minutes = Math.floor((gameTime / (1000 * 60)) % 60);
      const hours = Math.floor((gameTime / (1000 * 60 * 60)) % 24);

      setTime(
        `You failed to solve in: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
      );

      setGameOver("loss");
      setShowStats(true);
    }

    return <Guess tiles={tiles} />;
  };

  const updateAlphabet = () => {
    const alphabetCopy = alphabet.map((x) => {
      let newLetter = x;
      for (let i = 0; i < guessWord.length; i++) {
        const guessedLetter = guessWord.charAt(i);
        const trueLetter = correctWord.charAt(i);
        let guessedInWord = false;
        let guessedInPlace = false;

        if (x.letter === guessedLetter) {
          if (x.guessedInWord === true || correctWord.includes(guessedLetter)) {
            guessedInWord = true;
          }
          if (x.guessedInPlace === true || guessedLetter === trueLetter) {
            guessedInPlace = true;
          }
          newLetter = {
            letter: guessedLetter,
            guessed: true,
            guessedInWord: guessedInWord,
            guessedInPlace: guessedInPlace,
          };
        }
      }
      return newLetter;
    });
    setAlphabet(alphabetCopy);
  };

  const handleSubmit = () => {
    if (isValidGuess() === true) {
      guessComponent = updateTiles();
      updateAlphabet();
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const inputBox = (
    <input
      value={guessWord}
      data-testid="Input"
      disabled={gameOver === ("win" || "loss")}
      type="text"
      maxLength={5}
      placeholder={"Guess Here"}
      onChange={(event) => {
        setGuess(event.target.value.toUpperCase());
      }}
      onKeyDown={(e) => handleKeyPress(e)}
    />
  );

  const submit = (
    <button
      data-testid="Submit"
      type="Submit"
      id="submitButton"
      disabled={!isValidGuess() || gameOver === "loss" || gameOver === "win"}
      onClick={() => {
        handleSubmit();
      }}
    >
      Submit
    </button>
  );

  const statsButton = (
    <button
      type="Submit"
      id="statsButton"
      hidden={gameOver === "false"}
      onClick={() => {
        setShowStats(true);
      }}
    >
      Stats
    </button>
  );

  return (
    <div className={styles.container}>
      {statsButton}
      <Head>
        <title>Wordle Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">A Middlebury Wordle Project</h1>
        <p>
          Enter a 5 letter word in the input box to try to guess the correct
          word.
        </p>
        {showStats ? (
          <Popup
            gameOver={gameOver}
            correctWord={correctWord}
            time={time}
            setShowStats={setShowStats}
          />
        ) : undefined}
        <div>{guessComponent}</div>
        <div>
          {inputBox} {submit}
        </div>
        <Keyboard
          alphabet={alphabet}
          setGuess={setGuess}
          guessWord={guessWord}
        />
        <footer>
          A 312 project | Authors: Team Frogfish Hannah, Addison, Wright,
          Hayden, Lucas, Jared, and Lizzie{" "}
        </footer>
      </main>
    </div>
  );
}

Main.propTypes = {
  arrayWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctWord: PropTypes.string.isRequired,
  alphabet: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAlphabet: PropTypes.func.isRequired,
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTiles: PropTypes.func.isRequired,
};
