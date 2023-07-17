import BookImage from "../BookImage/index.js";
import Link from "next/link";
import { ListContainer, StyledList } from "./style.js";
import { StyledListItem } from "./style.js";
import { books } from "../../lib/books.js";

export default function BooksList() {
  return (
    <ListContainer>
      <StyledList role="list">
        {books.map((book) => (
          <StyledListItem key={book.id}>
            <Link href={`/book/${book.id}`} key={book.id}>
              <BookImage book={book} />
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </ListContainer>
  );
}
