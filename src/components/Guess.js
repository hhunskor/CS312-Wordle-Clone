import PropTypes from "prop-types";

import styles from "../styles/Guess.module.css";

function Guess({ tiles }) {
  const grid = [];
  // console.log(tiles)

  let tileNumber = 0;
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      let tile = (
        <div className={styles.initBox} key={tileNumber}>
          {" "}
          {tiles[tileNumber].letter}{" "}
        </div>
      );

      if (tiles[tileNumber].color === "gray") {
        tile = (
          <div className={styles.grayBox} key={tileNumber}>
            {" "}
            {tiles[tileNumber].letter}{" "}
          </div>
        );
      } else if (tiles[tileNumber].color === "yellow") {
        tile = (
          <div className={styles.yellowBox} key={tileNumber}>
            {" "}
            {tiles[tileNumber].letter}{" "}
          </div>
        );
      } else if (tiles[tileNumber].color === "green") {
        tile = (
          <div className={styles.greenBox} key={tileNumber}>
            {" "}
            {tiles[tileNumber].letter}{" "}
          </div>
        );
      }

      row.push(tile);
      tileNumber += 1;
    }
    grid.push(
      <div className={styles.row} key={i}>
        {row}
      </div>
    );
  }
  return <div id={styles.grid}>{grid}</div>;
  // return (<div className = {styles.blackBox} > </div>)
}

export default Guess;
Guess.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
