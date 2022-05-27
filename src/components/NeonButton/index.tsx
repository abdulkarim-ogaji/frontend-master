import styles from "./neon.module.css";

const NeonButton = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://abdulkarimogaji.herokuapp.com"
        className={styles.neonButton}
      >
        Contact Me
      </a>
    </div>
  );
};

export default NeonButton;
