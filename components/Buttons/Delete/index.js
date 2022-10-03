import styles from "./Delete.module.scss";

const DeleteButton = ({ text }) => {
  return (
    <button type="button" className={styles.button}>
      <span>{text}</span>
    </button>
  );
};

export default DeleteButton;
