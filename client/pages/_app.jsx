import { IconContext } from "react-icons";
import PostProvider from "context";

import Layout from "@components/Layout";

import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PostProvider>
      <IconContext.Provider
        value={{
          color: "white",
          className: "global-class-name",
          size: "1.8em",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IconContext.Provider>
    </PostProvider>
  );
};

export default MyApp;
