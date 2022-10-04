import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import BackButton from "../../components/Buttons/Back";
import Submit from "../../components/Buttons/Submit";
import FormControl from "../../components/FormControl";
import Input from "../../components/FormControl/Input";
import Label from "../../components/FormControl/Label";
import TextArea from "../../components/FormControl/TextArea";
import Container from "../../components/Layout/Container";
import SectionTitle from "../../components/SectionTitle";

import styles from "./NewArticle.module.scss";

const INPUTS_NAME = {
  title: "title",
  description: "description",
  urlImage: "urlImage",
};

const DEFAULT_INPUTS_VALUE = {
  title: "",
  description: "",
  urlImage: "",
};

const NewArticle = () => {
  const [inputValue, setInputValue] = useState(DEFAULT_INPUTS_VALUE);
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      await axios.post("http://localhost:5000/api/article/add", {
        ...inputValue,
      });

      router.push("/");

      setInputValue(DEFAULT_INPUTS_VALUE);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles["new-article"]}>
      <SectionTitle>Create new awesome article</SectionTitle>
      <Container>
        <BackButton text={"Back"} />
        <form
          className={`${styles["new-article__form"]} ${styles.form}`}
          onSubmit={handleSubmitForm}
        >
          <FormControl>
            <Label text={"Title"} className={styles.label} />
            <Input
              className={styles.input}
              type={"text"}
              name={"title"}
              placeholder={"Beatiful places"}
              value={inputValue[INPUTS_NAME.title]}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <Label text={"Description"} className={styles.label} />
            <TextArea
              className={`${styles.input} ${styles.textarea}`}
              type={"textarea"}
              name={"description"}
              value={inputValue[INPUTS_NAME.description]}
              onChange={handleInputChange}
              rows={10}
              col={10}
              placeholder={"Paste informative description about your article"}
              required
            />
          </FormControl>
          <FormControl>
            <Label text={"URL image"} className={styles.label} />
            <Input
              className={styles.input}
              type={"text"}
              name={"urlImage"}
              placeholder={"https://unsplash.com"}
              value={inputValue[INPUTS_NAME.urlImage]}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <Submit text={"Create"} style={{ margin: "20px auto 0" }} />
        </form>
      </Container>
    </section>
  );
};

export default NewArticle;
