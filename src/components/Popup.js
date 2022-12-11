import PropTypes from "prop-types";

import styles from "../styles/Popup.module.css";

import answers from "../../data/answersDict.json";

export default function Popup({
  gameOver,
  time,
  correctWord,
  stats,
  setShowStats,
}) {
  const { avgTime } = stats;
  const seconds = Math.floor((avgTime / 1000) % 60);
  const minutes = Math.floor((avgTime / (1000 * 60)) % 60);
  const hours = Math.floor((avgTime / (1000 * 60 * 60)) % 24);

  const avgTimeString = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
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
        <div>
          <strong>You win!</strong> The correct word was{" "}
          <strong>{correctWord}</strong>. Play again!
          <p>{time}</p>
          <p>{stats.playerCount} Players have attempted this word. </p>
          <p>
            {stats.correctCount}, or, {stats.percentCorrect}% of all players,
            have guessed it correctly.
          </p>
          <p>On average, it took users {stats.avgNumberGuesses} guess(es)</p>
          <p>and {avgTimeString} to correctly guess this word.</p>
          <p>{middWord}</p>
          <p />
        </div>
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
  stats: PropTypes.object.isRequired,
  setShowStats: PropTypes.func.isRequired,
};
