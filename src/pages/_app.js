/* eslint-disable  react/prop-types */
import "../styles/globals.css";
import { useState } from "react";
import letterData from "../../data/alphabet.json";
import guessData from "../../data/tiles.json";
import words from "../../data/words.json";

function MainApp({ Component, pageProps }) {
  const [alphabet, setAlphabet] = useState(letterData);
  const [tiles, setTiles] = useState(guessData);
  const [arrayWords] = useState(words); // Unix standard 5 letter words from Mac
  const [correctWord] = useState(
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );
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
