import axios from "axios";
import Head from "next/head";
import { usePostsContext } from "hooks/useAppContext";

import Card from "@components/Card";
import Container from "@components/Layout/Container";
import SectionTitle from "@components/SectionTitle";
import NoContent from "@components/NoContent";

import styles from "./Articles.module.scss";

const Home = ({ articles }) => {
  const { posts } = usePostsContext();

  if (!articles.length && !posts) {
    return (
      <section className={styles.articles}>
        <Container>
          <NoContent>{"Let`s add some articles..."}</NoContent>;
        </Container>
      </section>
    );
  }

  if (posts && !posts.length) {
    return (
      <section className={styles.articles}>
        <Container>
          <NoContent>{"Nothing was found..."}</NoContent>;
        </Container>
      </section>
    );
  }

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
          {articles.length && !posts ? (
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
            <div className={styles.wrapper}>
              {posts.map((post) => (
                <Card
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  urlImage={post.urlImage}
                />
              ))}
            </div>
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
