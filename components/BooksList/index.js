import Book from "../Book/index.js";
import { books } from "../../lib/books.js";
import styled from "styled-components";

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
          <Book key={book.id} book={book} />
        ))}
      </StyledList>
    </>
  );
}
