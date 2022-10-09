import Link from "next/link";
import { MdOutlineZoomOutMap } from "react-icons/md";

import styles from "./ImageZoom.module.scss";

const ImageZoom = ({ url }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={url}>
        <a className={styles.link}>
          <MdOutlineZoomOutMap />
        </a>
      </Link>
    </div>
  );
};

export default ImageZoom;
