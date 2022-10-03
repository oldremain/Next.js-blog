import BackButton from "../../components/Buttons/Back";
import Submit from "../../components/Buttons/Submit";
import FormControl from "../../components/FormControl";
import Input from "../../components/FormControl/Input";
import Label from "../../components/FormControl/Label";
import TextArea from "../../components/FormControl/TextArea";

import styles from "./NewArticle.module.scss";

const NewArticle = () => {
  return (
    <section className={styles["new-article"]}>
      <h2 className={styles["section-title"]}>Create new awesome article</h2>
      <div className={styles.container}>
        <BackButton text={"Back"} />
        <form className={`${styles["new-article__form"]} ${styles.form}`}>
          <FormControl>
            <Label text={"Title"} className={styles.label} />
            <Input className={styles.input} placeholder={"Beatiful places"} />
          </FormControl>
          <FormControl>
            <Label text={"Description"} className={styles.label} />
            <TextArea
              className={`${styles.input} ${styles.textarea}`}
              rows={10}
              col={10}
              placeholder={"Paste informative description about your article"}
            />
          </FormControl>
          <FormControl>
            <Label text={"URL image"} className={styles.label} />
            <Input
              className={styles.input}
              placeholder={"https://unsplash.com"}
            />
          </FormControl>
          <Submit text={"Create"} style={{ margin: "20px auto 0" }} />
        </form>
      </div>
    </section>
  );
};

export default NewArticle;
