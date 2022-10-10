import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import BackButton from "@components/Buttons/Back";
import Submit from "@components/Buttons/Submit";
import FormControl from "@components/FormControl";
import Input from "@components/FormControl/Input";
import Label from "@components/FormControl/Label";
import TextArea from "@components/FormControl/TextArea";
import Container from "@components/Layout/Container";
import SectionTitle from "@components/SectionTitle";
import InputError from "@components/FormControl/InputError";

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

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    urlImage: yup.string().url("URL is not valid"),
  })
  .required();

const NewArticle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_INPUTS_VALUE,
    resolver: yupResolver(schema),
  });

  const {
    title: titleError,
    description: descriptionError,
    urlImage: urlImageError,
  } = errors;

  const router = useRouter();

  const handleSubmitForm = async (data) => {
    const date = new Date().toLocaleDateString();
    console.log(date);

    try {
      await axios.post("http://localhost:5000/api/article/add", {
        ...data,
        date,
      });

      router.push("/");
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
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <FormControl>
            <Label
              text={"Title"}
              className={styles.label}
              name={INPUTS_NAME.title}
            />
            <Input
              className={`${styles.input} ${
                titleError ? styles["input--invalid"] : ""
              }`}
              type={"text"}
              maxLength={100}
              name={INPUTS_NAME.title}
              placeholder={"Beatiful places"}
              register={register}
              required
            />
            <InputError
              className={styles.error}
              errorMessage={errors?.title?.message}
            />
          </FormControl>
          <FormControl>
            <Label
              text={"Description"}
              className={styles.label}
              name={INPUTS_NAME.description}
            />
            <TextArea
              className={`${styles.input} ${styles.textarea} ${
                descriptionError ? styles["input--invalid"] : ""
              }`}
              type={"textarea"}
              name={INPUTS_NAME.description}
              register={register}
              rows={10}
              col={10}
              maxLength={1000}
              placeholder={"Paste informative description about your article"}
              required
            />
            <InputError
              className={styles.error}
              errorMessage={errors?.description?.message}
            />
          </FormControl>
          <FormControl>
            <Label
              text={"URL image"}
              className={styles.label}
              name={INPUTS_NAME.urlImage}
            />
            <Input
              className={`${styles.input} ${
                urlImageError ? styles["input--invalid"] : ""
              }`}
              type={"text"}
              name={INPUTS_NAME.urlImage}
              placeholder={"https://unsplash.com"}
              register={register}
              required
            />
            <InputError
              className={styles.error}
              errorMessage={errors?.urlImage?.message}
            />
          </FormControl>
          <Submit text={"Create"} style={{ margin: "20px auto 0" }} />
        </form>
      </Container>
    </section>
  );
};

export default NewArticle;
