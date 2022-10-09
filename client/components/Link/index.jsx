import Link from "next/link";

import styles from "./Link.module.scss";

const CreateLink = () => {
  return (
    <Link href={"/new-article"}>
      <div className={styles.link__container}>
        <a className={styles.link}>Add article</a>
      </div>
    </Link>
  );
};

export default CreateLink;
