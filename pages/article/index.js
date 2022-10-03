import Image from "next/image";
import BackButton from "../../components/Buttons/Back";
import DeleteButton from "../../components/Buttons/Delete";
import path from "../../public/assets/images/card2.jpg";

import styles from "./Article.module.scss";

const Article = () => {
  return (
    <section className={styles.article}>
      <div className={styles.container}>
        <h2 className={styles["section-title"]}>
          More detailed page about article
        </h2>
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
      </div>
    </section>
  );
};

export default Article;
