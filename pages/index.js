import Head from "next/head";
import Card from "../components/Card";
import Container from "../components/Layout/Container";
import SectionTitle from "../components/SectionTitle";

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
        <SectionTitle>Create your new awesome article</SectionTitle>
        <Container>
          <div className={styles.wrapper}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
