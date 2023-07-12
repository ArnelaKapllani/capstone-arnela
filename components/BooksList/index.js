import BookImage from "../BookImage/index.js";
import { StyledList } from "./style.js";
import { books } from "../../lib/books.js";
import Link from "next/link";

export default function BooksList() {
  return (
    <>
      <h2>List of Books:</h2>
      <StyledList role="list">
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/book/${book.id}`} key={book.id}>
              <BookImage book={book} />
            </Link>
          </li>
        ))}
      </StyledList>
    </>
  );
}
