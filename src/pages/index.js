import Head from "next/head";
import { useState } from "react";
import PropTypes from "prop-types";
import Guess from "../components/Guess";
import Keyboard from "../components/Keyboard";
import styles from "../styles/index.module.css";

export default function Main({
  arrayWords,
  correctWord,
  alphabet,
  setAlphabet,
  tiles,
  setTiles,
}) {
  console.log(correctWord);

  const [guessWord, setGuess] = useState("");
  const [gameOver, setGameOver] = useState("false");

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

    for (let i = 0; i < guessWord.length; i++) {
      const tile = i + startIndex;
      let color = "gray";
      const guessedLetter = guessWord.charAt(i);
      const trueLetter = correctWord.charAt(i);
      if (correctWord.includes(guessedLetter)) {
        color = "yellow";
      }
      if (guessedLetter === trueLetter) {
        color = "green";
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
    setTiles(tilesCopy);
    console.log(tilesCopy);

    // check for win or loss
    if (guessWord === correctWord) {
      setGameOver("win");
    } else if (tilesCopy[29].letter !== "") {
      setGameOver("loss");
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

  const inputBox = (
    <input
      data-testid="Input"
      disabled={gameOver === ("win" || "loss")}
      type="text"
      maxLength={5}
      placeholder={"Guess Here"}
      onChange={(event) => {
        setGuess(event.target.value.toUpperCase());
      }}
    />
  );

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

  const winLossMessage = () => {
    if (gameOver === "win") {
      return (
        <p>
          <strong>You win!</strong> The correct word was{" "}
          <strong>{correctWord}</strong>. Play again by refreshing the page.
        </p>
      );
    } else if (gameOver === "loss") {
      return <p>Out of guesses! Play again by refreshing the page.</p>;
    } else {
      return <p>Start a new game by refreshing the page.</p>;
    }
  };

  const submit = (
    <button
      data-testid="Submit"
      type="Submit"
      disabled={!isValidGuess() || gameOver === "loss" || gameOver === "win"}
      onClick={() => {
        guessComponent = updateTiles();
        updateAlphabet();
      }}
    >
      Submit
    </button>
  );

  return (
    <div className={styles.container}>
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
        <div>{guessComponent}</div>
        {inputBox}
        {submit}
        {winLossMessage()}
      </main>

      <Keyboard alphabet={alphabet} />

      <footer>
        A 312 project | Authors: Team Frogfish Hannah, Addison, Wright, Hayden,
        Lucas, Jared, and Lizzie{" "}
      </footer>
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
