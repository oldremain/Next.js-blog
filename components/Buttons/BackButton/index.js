import Arrow from "../../../public/assets/icons/arrow.svg";

import styles from "./BackButton.module.scss";

const BackButton = ({ text }) => {
  return (
    <button type="button" className={styles.button}>
      <Arrow className={styles.arrow} />
      <span className={styles.button__text}>{text}</span>
    </button>
  );
};

export default BackButton;
