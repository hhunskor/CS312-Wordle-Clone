/* eslint-disable */

import Head from "next/head";

import styles from "../styles/index.module.css";

import testwords from "../../data/testwords.json";

import { useState } from "react";

import Guess from "../components/Guess";

export default function Main() {
  // const correctWord = testwords[Math.floor(Math.random() * testwords.length)];
  const correctWord = testwords[0];
  const [guessWord, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);

  console.log(`correct word to test: ${correctWord}`);

  let displayGuesses = null;

  function guessComponent(guess, correctGuess, displayGuesses) {
    displayGuesses = (
      <Guess
        input={guess}
        correctWord={correctGuess}
        setGameOver={setGameOver}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
    );
  }

  const inputBox = (
    <input
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
      disabled={guessWord.length !== 5}
      onClick={() => guessComponent(guessWord, correctWord, displayGuesses)}
    >
      Submit
    </button>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Generic project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Generic Project</h1>
        <p>Wordle - Middlebury Style</p>
        {displayGuesses}
        {inputBox}
        {submit}
      </main>

      <footer>A 312 project</footer>
    </div>
  );
}
