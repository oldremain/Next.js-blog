import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

import BackButton from "@components/Buttons/Back";
import DeleteButton from "@components/Buttons/Delete";
import Container from "@components/Layout/Container";
import SectionTitle from "@components/SectionTitle";
import Loader from "@components/Loader";

import styles from "./Article.module.scss";

const Article = ({ article }) => {
  const [imagePath, setImagePath] = useState(article.urlImage);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRemoveArticle = async () => {
    setIsLoading(true);

    await axios.post("http://localhost:5000/api/article/remove", {
      articleId: article._id,
    });

    router.push("/");
  };

  return (
    <section className={styles["article-section"]}>
      <Container>
        <SectionTitle>More detailed page about article</SectionTitle>
        <BackButton text={"Back"} />

        <article className={styles.article}>
          <div className={styles.content}>
            <h3 className={styles.content__title}>{article.title}</h3>
            <p className={styles.content__body}>{article.description}</p>
          </div>
          <div className={styles.article__image}>
            <Image
              src={imagePath}
              alt="Picture of article"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/assets/images/err-image.png"
              onError={() => setImagePath("/assets/images/err-image.png")}
            />
          </div>
          <div className={styles.article__button}>
            <DeleteButton
              text={"Delete article"}
              onClick={handleRemoveArticle}
            />
          </div>
        </article>
        {isLoading && <Loader />}
      </Container>
    </section>
  );
};

export async function getServerSideProps(context) {
  try {
    const { data: article } = await axios.get(
      `http://localhost:5000/api/article/${context.query.id}`
    );

    return {
      props: { article },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Article;
