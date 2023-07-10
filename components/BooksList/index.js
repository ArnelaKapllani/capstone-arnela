import Book from "../Book/index.js";
import { books } from "../../lib/books.js";
import styled from "styled-components";
import Link from "next/link";

const StyledList = styled.div`
  display: grid;
  gap: 20px;
  padding-bottom: 25px;
`;

export default function BooksList() {
  return (
    <>
      <h2>List of Books:</h2>
      <StyledList>
        {books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              ISBN={book.ISBN}
              EAN={book.EAN}
              language={book.language}
              publication={book.publication}
              price={book.price}
              currencyCode={book.currencyCode}
              pagenumber={book.pagenumber}
              description={book.description}
            />
          </Link>
        ))}
      </StyledList>
    </>
  );
}
