import BookImage from "@/components/BookImage";
import Layout from "@/components/Layout/index.js";
import BookmarkButton from "@/components/BookmarkButton";
import Link from "next/link";
import { books } from "../../lib/books.js";

export default function BookmarkedPage({
  cartItems,
  bookmarks,
  toggleBookmark,
}) {
  return (
    <Layout cartItems={cartItems}>
      <h2>My list</h2>
      {bookmarks && bookmarks.length > 0 ? (
        bookmarks.map((bookId) => {
          const book = books.find((item) => item.id === bookId);
          if (!book) {
            return null;
          }
          return (
            <div key={book.id}>
              <Link href={`/book/${book.id}`} key={book.id}>
                <BookImage book={book} />
              </Link>
              <BookmarkButton
                isBookmarked={bookmarks.includes(book.id)}
                onClick={() => toggleBookmark(book.id)}
              />
            </div>
          );
        })
      ) : (
        <p>No bookmarked book.</p>
      )}
    </Layout>
  );
}
