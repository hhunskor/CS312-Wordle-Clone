import Head from "next/head";
import { useState } from "react";
import PropTypes from "prop-types";
import Guess from "../components/Guess";
import Keyboard from "../components/Keyboard";
import styles from "../styles/index.module.css";
import Popup from "../components/Popup";
import { updateWord } from "../utils/firebase-utils.mjs";

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
  const [stats, setStats] = useState();
  const [guesses, setGuesses] = useState(1);

  /// checks that a word is a valid guess in that there are no spaces or special characters, the word is 5 letters, and that the word is
  /// part of the mac stored dictionary of 5 letter words
  function isValidGuess() {
    let valid = true;
    // looking at valid letters and word type
    if (
      guessWord.length !== 5 ||
      !/^[a-zA-Z]+$/.test(guessWord) ||
      !arrayWords.includes(guessWord.toLowerCase()) ||
      gameOver !== "false"
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
    return <Guess tiles={tiles} />;
  };

  async function handleGameEnd() {
    if (guessWord === correctWord) {
      console.log(guesses);

      endTime = Date.now();
      const gameTime = endTime - startTime;
      const seconds = Math.floor((gameTime / 1000) % 60);
      const minutes = Math.floor((gameTime / (1000 * 60)) % 60);
      const hours = Math.floor((gameTime / (1000 * 60 * 60)) % 24);

      const tempstats = await updateWord(correctWord, [guesses, gameTime], true);

      setStats(tempstats);
      console.log(stats);

      setTime(
        `You solved in: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
      );
      setGameOver("win");
      setShowStats(true);
    } else if (guesses === 6 && guessWord !== correctWord) {
      endTime = Date.now();
      const gameTime = endTime - startTime;
      const seconds = Math.floor((gameTime / 1000) % 60);
      const minutes = Math.floor((gameTime / (1000 * 60)) % 60);
      const hours = Math.floor((gameTime / (1000 * 60 * 60)) % 24);

      setTime(
        `You failed to solve in: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
      );

      const tempstats = await updateWord(correctWord, [], false);

      setStats(tempstats);
      console.log(stats);

      setGameOver("loss");
      setShowStats(true);
    }
  }

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
      console.log(tiles);
      updateAlphabet();
      setGuess("");
      setGuesses(guesses + 1);
      handleGameEnd();
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  // still want to autoFocus this element and get rid of cursor and blue highlight around box
  const inputBox = (
    <input
      autoComplete="off"
      ref={(input) => input && input.focus()}
      className={styles.inputBox}
      value={guessWord}
      data-testid="Input"
      id="inputBox"
      disabled={gameOver !== "false"}
      type="text"
      maxLength={5}
      //placeholder={"INPUT"}
      onChange={(event) => {
        setGuess(event.target.value.toUpperCase());
      }}
      onKeyDown={(e) => handleKeyPress(e)}
    />
  );

  const statsButton = (
    <button
      className={styles.stats}
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
    <div className={styles.container} data-testid="container">
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
            stats={stats}
            setShowStats={setShowStats}
          />
        ) : undefined}
        <div>{guessComponent}</div>
        <div>{inputBox}</div>
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
