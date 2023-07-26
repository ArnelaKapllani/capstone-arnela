import BookImage from "@/components/BookImage";
import Layout from "@/components/Layout/index.js";
import BookmarkButton from "@/components/BookmarkButton";
import { books } from "../../lib/books.js";

export default function BookmarkedPage({
  cartItems,
  bookmarks,
  toggleBookmark,
}) {
  return (
    <>
      <Layout cartItems={cartItems} />
      {bookmarks && bookmarks.length > 0 ? (
        bookmarks.map((bookmarkeditem) => {
          const book = books.find((item) => bookmarks.includes(item.id));
          if (!book) {
            return null;
          }
          return (
            <div key={book.id}>
              <BookImage book={book} />
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
    </>
  );
}
