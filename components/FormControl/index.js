import styles from "./FormControl.module.scss";

const FormControl = ({ children, ...rest }) => {
  return (
    <div
      className={`${styles["form-control"]} ${styles["new-article__form-control"]}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FormControl;
