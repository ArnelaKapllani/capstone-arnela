import Book from "../Book/index.js";
import { books } from "../../lib/books.js";
import styled from "styled-components";
import Link from "next/link";

const StyledList = styled.div`
  display: grid;
  gap: 20px;
  padding-bottom: 25px;
  padding-left: 25px;
`;

export default function BooksList() {
  return (
    <>
      <h2>List of Books:</h2>
      <StyledList>
        {books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <Book book={book} />
          </Link>
        ))}
      </StyledList>
    </>
  );
}
