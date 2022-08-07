import styles from "./tiltingcard.module.css";

const TiltingCard = () => {
  return (
    <div className={styles.tiltingCardWrapper}>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.mousePositionTracker}></div>
      <div className={styles.tiltingCardBody}>
        <img src="/blognado1.svg" width={200} height={200} />
      </div>
    </div>
  );
};

export default TiltingCard;
