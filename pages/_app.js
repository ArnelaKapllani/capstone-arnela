import GlobalStyle from "../styles";
import Layout from "../components/Layout/index.js";
import { books } from "../lib/books.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} books={books} />
      </Layout>
    </>
  );
}
