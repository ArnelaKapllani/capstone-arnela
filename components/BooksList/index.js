import Book from "../Book/index.js";
import { books } from "../../lib/books.js";

export default function BooksList() {
  return (
    <>
      <h2>List of Books:</h2>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
}
