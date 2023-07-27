import BookList from "../components/BooksList/index.js";
import Layout from "../components/Layout/index.js";

export default function HomePage({ cartItems }) {
  return (
    <>
      <Layout cartItems={cartItems}>
        <BookList />
      </Layout>
    </>
  );
}
