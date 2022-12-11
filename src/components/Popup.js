import PropTypes from "prop-types";

import styles from "../styles/Popup.module.css";

import answers from "../../data/answersDict.json";

export default function Popup({ gameOver, time, correctWord, setShowStats }) {
  const wordData = answers.find((obj) => {
    return obj.word.toUpperCase() === correctWord;
  });
  let middWord = "";
  if (wordData.middWord === true) {
    middWord =
      "Congratulations! You have discovered a hidden Middlebury College word.";
  }
  const endMessage = () => {
    if (gameOver === "win") {
      return (
        <p>
          <strong>You win!</strong> The correct word was{" "}
          <strong>{correctWord}</strong>. Play again!
          <p>{time}</p>
          <p>{middWord}</p>
        </p>
      );
    } else {
      return (
        <p>
          Out of guesses! Keep playing to try again.
          <p>{time}</p>
        </p>
      );
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        {endMessage()}
        <button
          className={styles.closeBtn}
          onClick={() => {
            setShowStats(false);
          }}
        >
          Close
        </button>
        <button
          className={styles.restartBtn}
          onClick={() => {
            window.location.reload(true);
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

Popup.propTypes = {
  time: PropTypes.string,
  gameOver: PropTypes.string.isRequired,
  correctWord: PropTypes.string.isRequired,
  setShowStats: PropTypes.func.isRequired,
};
