import { useRouter } from "next/router";

import CreateLink from "../Link";
import Navbar from "../Navbar";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const router = useRouter();
  const isShowCreateLink =
    router.pathname === "/" || router.pathname === "/article";

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {isShowCreateLink && <CreateLink />}
        {children}
      </main>
    </>
  );
};

export default Layout;
