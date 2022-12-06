import styles from "../styles/Popup.module.css";

export default function Popup() {
  // return(
  //     <div className={styles.popup}>
  //         <div className={styles.popupInner}>
  //             <button className={styles.closeBtn}>Close</button>
  //         </div>
  //     </div>
  // )

  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <button className={styles.closeBtn}>click here</button>
      </div>
    </div>
  );
}
