import styles from "./Submit.module.scss";

const Submit = ({ text, ...rest }) => {
  return (
    <button type="submit" className={styles.button} {...rest}>
      <span className={styles.button__text}>{text}</span>
    </button>
  );
};

export default Submit;
