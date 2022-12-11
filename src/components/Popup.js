import PropTypes from "prop-types";

import styles from "../styles/Popup.module.css";

export default function Popup({
  gameOver,
  time,
  correctWord,
  stats,
  setShowStats,
}) {
  console.log(stats);

  const {avgTime} = stats;
  const seconds = Math.floor((avgTime / 1000) % 60);
  const minutes = Math.floor((avgTime / (1000 * 60)) % 60);
  const hours = Math.floor((avgTime / (1000 * 60 * 60)) % 24);

  const avgTimeString = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

  const endMessage = () => {
    if (gameOver === "win") {
      return (
        <p>
          <strong>You win!</strong> The correct word was{" "}
          <strong>{correctWord}</strong>. Play again by refreshing the page.
          <p>{time}</p>
          <p>{stats.playerCount} Players have attempted this word. </p>
          <p>
            {stats.correctCount}, or, {stats.percentCorrect}% of all players,
            have guessed it correctly.
          </p>
          <p>On average, it took users {stats.avgNumberGuesses} guess(es)</p>
          <p>and {avgTimeString} to correctly guess this word.</p>
          <p />
        </p>
      );
    } else {
      return (
        <p>
          The correct word was <strong>{correctWord}</strong>. Out of guesses!
          Play again by refreshing the page.
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
