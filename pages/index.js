import BookList from "../components/BooksList/index.js";
import Layout from "../components/Layout/index.js";

export default function HomePage() {
  return (
    <>
      <Layout>
        <BookList />
      </Layout>
    </>
  );
}
