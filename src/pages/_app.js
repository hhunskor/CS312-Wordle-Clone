/* eslint-disable  react/prop-types */
import "../styles/globals.css";
import { useState } from "react";
import letterData from "../../data/alphabet.json";
import guessData from "../../data/tiles.json";

function MainApp({ Component, pageProps }) {
  const [alphabet, setAlphabet] = useState(letterData);
  const [tiles, setTiles] = useState(guessData);
  const props = {
    ...pageProps,
    alphabet,
    setAlphabet,
    tiles,
    setTiles,
  };

  return <Component {...props} />;
}

export default MainApp;
