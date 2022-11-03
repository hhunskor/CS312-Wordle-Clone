/* eslint-disable */

import Head from "next/head";

import styles from "../styles/index.module.css";

import testwords from "../../data/testwords.json";

import { useState } from "react";

import Guess from "../components/Guess";
import Keyboard from "../components/Keyboard";

export default function Main() {
  // const correctWord = testwords[Math.floor(Math.random() * testwords.length)];
  const correctWord = testwords[0];

  const [guessWord, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const [correctLetters, setCorrectLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const [guessedWords, setGuessedWords] = useState([]);

  console.log(`correct word to test: ${correctWord}`);

  const [displayGuesses, setDisplayGuesses] = useState(); // do we have to initialize?

  /*function guessComponent() {
    //console.log("button clicked")
    const guessView = <Guess
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

    setDisplayGuesses(
      guessView
    );
    console.log("1st time: " + displayGuesses)
  }*/

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

  console.log(correctLetters);
  console.log(guessedLetters);

  const submit = (
    <button
      type="Submit"
      disabled={guessWord.length !== 5}
      //onClick={() => guessComponent()}
      onClick={() => setDisplayGuesses(guessView)}
    >
      Submit
    </button>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Middlebury Wordle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Wordle</h1>
        <p>project authors: team FROGFISH</p>
        {/*<Guess
        input={guessWord}
        correctWord={correctWord}
        setGameOver={setGameOver}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        guessedWords={guessedWords}
        setGuessedWords={setGuessedWords}
        />*/}
        {displayGuesses}
        {inputBox}
        {submit}
      </main>
      <Keyboard
        correctLetters={correctLetters}
        guessedLetters={guessedLetters}
      />
      <footer>A 312 project</footer>
    </div>
  );
}
