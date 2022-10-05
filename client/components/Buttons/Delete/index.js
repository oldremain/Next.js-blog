import styles from "./Delete.module.scss";

const DeleteButton = ({ text, ...rest }) => {
  return (
    <button type="button" className={styles.button} {...rest}>
      <span>{text}</span>
    </button>
  );
};

export default DeleteButton;
