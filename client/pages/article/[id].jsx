import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePostsContext } from "hooks/useAppContext";
import axios from "axios";

import BackButton from "@components/Buttons/Back";
import DeleteButton from "@components/Buttons/Delete";
import Container from "@components/Layout/Container";
import SectionTitle from "@components/SectionTitle";
import Loader from "@components/Loader";
import ImageZoom from "@components/ImageZoom";

import styles from "./Article.module.scss";

const Article = ({ article }) => {
  const [imagePath, setImagePath] = useState(article.urlImage);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setPosts } = usePostsContext();

  const handleRemoveArticle = async () => {
    setIsLoading(true);

    await axios.post("/remove", {
      articleId: article._id,
    });

    setPosts(null);
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
            <textarea
              className={styles.content__body}
              value={article.description}
              readOnly
            ></textarea>
            <p className={styles.time}>
              Created at:{" "}
              <span className={styles.time_create}>{article.date}</span>
            </p>
          </div>
          <div className={styles.image__container}>
            <Image
              src={imagePath}
              alt="Picture of article"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/assets/images/err-image.png"
              onError={() => setImagePath("/assets/images/err-image.png")}
              className={styles.image}
            />
            <ImageZoom url={article.urlImage} />
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
    const { data: article } = await axios.get(`/${context.query.id}`);

    return {
      props: { article },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Article;
