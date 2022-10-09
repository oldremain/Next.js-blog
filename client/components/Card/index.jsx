import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

import styles from "./Card.module.scss";

const Card = ({ id, title, urlImage }) => {
  const [imagePath, setImagePath] = useState(urlImage);

  return (
    <div className={styles.card__wrapper}>
      <Image
        src={imagePath}
        alt="Picture of card"
        layout="fill"
        objectFit="cover"
        blurDataURL="/assets/images/err-image.png"
        placeholder="blur"
        onError={() => setImagePath("/assets/images/err-image.png")}
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
