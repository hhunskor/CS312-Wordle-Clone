/* eslint-disable  react/prop-types */
import "../styles/globals.css";
import { useState } from "react";
import letterData from "../../data/alphabet.json";
import guessData from "../../data/tiles.json";
import words from "../../data/words.json";
//import testwords from "../../data/testwords.json";
import answers from "../../data/correctWords.json";
import { initializeFirebase } from "../utils/firebase-utils.mjs";

function MainApp({ Component, pageProps }) {
  initializeFirebase();
  const [alphabet, setAlphabet] = useState(letterData);
  const [tiles, setTiles] = useState(guessData);
  const [arrayWords] = useState(words); // Unix standard 5 letter words from Mac
  const [correctWord] = useState(
    answers[Math.floor(Math.random() * answers.length)].word.toUpperCase()
  );
  arrayWords.push(correctWord.toLowerCase());

  const props = {
    ...pageProps,
    arrayWords,
    correctWord,
    alphabet,
    setAlphabet,
    tiles,
    setTiles,
  };

  return <Component {...props} />;
}

export default MainApp;
