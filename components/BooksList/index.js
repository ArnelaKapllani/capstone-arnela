import BookImage from "../BookImage/index.js";
import Link from "next/link";
import {
  ListContainer,
  StyledList,
  StyledListItem,
  ListBackground,
} from "./style.js";
import { books } from "../../lib/books.js";

export default function BooksList() {
  return (
    <ListContainer>
      <ListBackground>
        <StyledList role="list">
          {books.map((book, index) => (
            <StyledListItem key={book.id}>
              <Link href={`/book/${book.id}`} key={book.id}>
                <BookImage book={book} priority={index < 10 ? true : false} />
              </Link>
            </StyledListItem>
          ))}
        </StyledList>
      </ListBackground>
    </ListContainer>
  );
}
