import PropTypes from "prop-types";

import Image from "next/image";
import Link from "next/link";
//import path from "/public/assets/images/card1.jpg";

import styles from "./Card.module.scss";

const Card = ({ id, title, urlImage }) => {
  return (
    <div className={styles.card__wrapper}>
      <Image
        src={urlImage}
        width={350}
        height={270}
        alt="Picture of card"
        placeholder="blur"
        blurDataURL="/public/assets/images/card1.jpg"
        layout="responsive"
      />
      <div className={styles.card__details}>
        <Link href={"/article/[id]"} as={`/article/${id}`}>
          <a className={styles.card__link}>
            <h3 className={styles.card__title}>{title}</h3>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
