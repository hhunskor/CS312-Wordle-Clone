/* eslint-disable  react/prop-types */
import "../styles/globals.css";
// import { useState } from "react";
// import data from "../../data/alphabet.json";

function MainApp({ Component, pageProps }) {
  //const [alphabet,setAlphabet] = useState(data)
  return <Component {...pageProps} />;
}

export default MainApp;
