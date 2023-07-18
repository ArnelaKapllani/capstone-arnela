import GlobalStyle from "../styles";
import { books } from "../lib/books.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} books={books} />
    </>
  );
}
