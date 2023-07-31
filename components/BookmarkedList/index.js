import BookImage from "@/components/BookImage";
import BookmarkButton from "@/components/BookmarkButton";
import Link from "next/link";
import styled from "styled-components";
import { books } from "../../lib/books.js";

const BookContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  /* margin-top: 15px; */
`;

const BookmarkButtonWrapper = styled.div`
  position: absolute;
  top: 85px;
  right: -60px;
`;

const ListContainer = styled.div`
  /* overflow-y: scroll; */
  /* max-height: calc(100vh - 200px); */
  margin-left: 20px;
`;

export default function BookmarkedList({ bookmarks, toggleBookmark }) {
  return (
    <ListContainer>
      <h3>My list</h3>
      {bookmarks && bookmarks.length > 0 ? (
        bookmarks.map((bookId) => {
          const book = books.find((item) => item.id === bookId);
          if (!book) {
            return null;
          }
          return (
            <div key={book.id}>
              <BookContainer>
                <Link href={`/book/${book.id}`} key={book.id}>
                  <BookImage book={book} />
                </Link>
                <BookmarkButtonWrapper>
                  <BookmarkButton
                    isBookmarked={bookmarks.includes(book.id)}
                    onClick={() => toggleBookmark(book.id)}
                  />
                </BookmarkButtonWrapper>
              </BookContainer>
            </div>
          );
        })
      ) : (
        <p>No bookmarked book.</p>
      )}
    </ListContainer>
  );
}
