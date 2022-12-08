import PropTypes from "prop-types";

import styles from "../styles/Popup.module.css";

export default function Popup({ gameOver, correctWord, setShowStats }) {
  const endMessage = () => {
    if (gameOver === "win") {
      return (
        <p>
          <strong>You win!</strong> The correct word was{" "}
          <strong>{correctWord}</strong>. Play again by refreshing the page.
        </p>
      );
    } else {
      return <p>Out of guesses! Play again by refreshing the page.</p>;
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
  gameOver: PropTypes.string.isRequired,
  correctWord: PropTypes.string.isRequired,
  setShowStats: PropTypes.func.isRequired,
};
