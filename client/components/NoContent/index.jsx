import styles from "./NoContent.module.scss";

const NoContent = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>{children}</span>
    </div>
  );
};

export default NoContent;
