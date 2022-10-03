import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link href="/">
            <a className={styles.navigation__link}>Next.js | Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
