import axios from "axios";
import Head from "next/head";

import Card from "@components/Card";
import Container from "@components/Layout/Container";
import SectionTitle from "@components/SectionTitle";

import styles from "./Articles.module.scss";
import NoContent from "@components/NoContent";

const Home = ({ articles }) => {
  console.log(articles.length);

  return (
    <>
      <Head>
        <title>Next.js blog</title>
        <meta
          name="description"
          content="Simple Next.js page for creating notes"
        />
      </Head>

      <h1 className={`${styles["page-title"]} ${styles["visually-hidden"]}`}>
        Next.js blog - online tool for creating your awesomeness articles
      </h1>

      <section className={styles.articles}>
        <SectionTitle>Create your new awesome article</SectionTitle>
        <Container>
          {articles.length ? (
            <div className={styles.wrapper}>
              {articles.map((article) => (
                <Card
                  key={article._id}
                  id={article._id}
                  title={article.title}
                  urlImage={article.urlImage}
                />
              ))}
            </div>
          ) : (
            <NoContent>{"Let`s add some articles..."}</NoContent>
          )}
        </Container>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const { data: articles } = await axios.get(
      "http://localhost:5000/api/article"
    );

    return {
      props: { articles },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Home;
