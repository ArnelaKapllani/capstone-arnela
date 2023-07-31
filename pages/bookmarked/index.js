import Layout from "@/components/Layout/index.js";
import BookmarkedList from "@/components/BookmarkedList";

export default function BookmarkedPage({
  cartItems,
  bookmarks,
  toggleBookmark,
}) {
  return (
    <Layout cartItems={cartItems}>
      <BookmarkedList bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
    </Layout>
  );
}
