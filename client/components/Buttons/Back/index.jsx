import Link from "next/link";
import Arrow from "/public/assets/icons/arrow.svg";

import styles from "./Back.module.scss";

const BackButton = ({ text }) => {
  return (
    <Link href={"/"}>
      <a className={styles.button}>
        <Arrow className={styles.arrow} />
        <span className={styles.button__text}>{text}</span>
      </a>
    </Link>
  );
};

export default BackButton;
