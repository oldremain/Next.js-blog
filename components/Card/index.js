import Image from "next/image";
import Link from "next/link";
import path from "../../public/assets/images/card1.jpg";

import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card__wrapper}>
      <Image
        src={path}
        alt="Picture of card"
        placeholder="blur"
        layout="responsive"
      />
      <div className={styles.card__details}>
        <Link href={"/article"}>
          <a className={styles.card__link}>
            <h3 className={styles.card__title}>Italy. Island Capry</h3>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
