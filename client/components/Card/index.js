import PropTypes from "prop-types";

import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.scss";

const Card = ({ id, title, urlImage }) => {
  console.log(urlImage);
  return (
    <div className={styles.card__wrapper}>
      <Image
        src={urlImage}
        alt="Picture of card"
        layout="fill"
        objectFit="cover"
        blurDataURL="/assets/images/card1.jpg"
        placeholder="blur"
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
