import Head from "next/head";
import Card from "../components/Card";

import styles from "./Articles.module.scss";

const Home = () => {
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
        <h2
          className={`${styles["section-title"]} ${styles["visually-hidden"]}`}
        >
          Create your new awesome article
        </h2>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
