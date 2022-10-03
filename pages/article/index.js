import Image from "next/image";
import BackButton from "../../components/Buttons/Back";
import DeleteButton from "../../components/Buttons/Delete";
import Container from "../../components/Layout/Container";
import SectionTitle from "../../components/SectionTitle";

import path from "../../public/assets/images/card2.jpg";

import styles from "./Article.module.scss";

const Article = () => {
  return (
    <section className={styles.article}>
      <Container>
        <SectionTitle>More detailed page about article</SectionTitle>
        <BackButton text={"Back"} />

        <div className={styles.content}>
          <div className={styles.description}>
            <h3 className={styles.content__title}>
              This would be some awesome title
            </h3>
            <p className={styles.content__body}>Body article</p>
          </div>
          <div className={styles.content__image}>
            <Image
              src={path}
              alt="Picture of article"
              placeholder="blur"
              layout="responsive"
            />
          </div>
          <div className={styles.article__button}>
            <DeleteButton text={"Delete article"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Article;
