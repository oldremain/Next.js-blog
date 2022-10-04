import axios from "axios";
import Image from "next/image";

import BackButton from "../../components/Buttons/Back";
import DeleteButton from "../../components/Buttons/Delete";
import Container from "../../components/Layout/Container";
import SectionTitle from "../../components/SectionTitle";

import styles from "./Article.module.scss";

const Article = ({ article }) => {
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
              src={article.urlImage}
              alt="Picture of article"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/assets/images/card1.jpg"
            />
          </div>
          <div className={styles.article__button}>
            <DeleteButton text={"Delete article"} />
          </div>
        </article>
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
