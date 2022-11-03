import Head from "next/head";

import styles from "../styles/index.module.css";

import testwords from "../../data/testwords.json";

import { useState } from "react";

import Guess from "../components/Guess";
import Keyboard from "../components/Keyboard";

export default function Main() {
  const [correctWord] = useState(testwords[Math.floor(Math.random() * testwords.length)])

  const [guessWord, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const [correctLetters, setCorrectLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const [guessedWords, setGuessedWords] = useState([]);

  console.log(`correct word to test: ${correctWord}`);

  const [displayGuesses, setDisplayGuesses] = useState();
  const [prettyPrintGuesses, setPrettyPrintGuesses] = useState([]);

  const guessView = (
    <Guess
      input={guessWord}
      correctWord={correctWord}
      setGameOver={setGameOver}
      correctLetters={correctLetters}
      setCorrectLetters={setCorrectLetters}
      guessedLetters={guessedLetters}
      setGuessedLetters={setGuessedLetters}
      guessedWords={guessedWords}
      setGuessedWords={setGuessedWords}
    />
  );

  const inputBox = (
    <input
      disabled={gameOver === true}
      type="text"
      maxLength={5}
      placeholder={"Guess Here"}
      onChange={(event) => {
        setGuess(event.target.value);
      }}
    />
  );

  const submit = (
    <button
      type="Submit"
      disabled={guessWord.length !== 5 || gameOver === true}
      onClick={() => {
        prettyPrintGuesses.push(`${guessWord}, `);
        setPrettyPrintGuesses(prettyPrintGuesses);
        setDisplayGuesses(guessView);
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
        <p>Enter a 5 letter word in the input box to try to guess the correct word.</p>
        <div>{prettyPrintGuesses}</div>
        <div style={{display:"none"}}>{displayGuesses}</div>
        {inputBox}
        {submit}

        <p>Correct Letters: {correctLetters}</p>
        <p>Guessed Letters: {guessedLetters}</p>

        {gameOver ? <p><strong>You win!</strong> The correct word was <strong>{correctWord}</strong>. Play again by refreshing the page.</p> : <p>Start a new game by refreshing the page.</p>}

      </main>
      
      <Keyboard
        correctLetters={correctLetters}
        guessedLetters={guessedLetters}
      />

      <footer>A 312 project | Authors: Team Frogfish Hannah, Addison, Wright, Hayden, Lucas, Jared, and Lizzie` </footer>
    </div>
  );
}
