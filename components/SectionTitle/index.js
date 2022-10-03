import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ children }) => {
  return <h2 className={styles["visually-hidden"]}>{children}</h2>;
};

export default SectionTitle;
