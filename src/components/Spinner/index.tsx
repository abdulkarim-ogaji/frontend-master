import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.spinnerText}>Loading</div>
        <div className={`${styles.spinnerSector} ${styles.spinnerOne}`}></div>
        <div className={`${styles.spinnerSector} ${styles.spinnerTwo}`}></div>
        <div className={`${styles.spinnerSector} ${styles.spinnerThree}`}></div>
      </div>
    </section>
  );
};

export default Spinner;
