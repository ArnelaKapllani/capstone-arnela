import Link from "next/link";
import BookImage from "../BookImage";
import {
  StyledDetailsWrapper,
  StyledListDetails,
  StyledDescription,
  StyledButton,
} from "./style";

export default function BookDetails({ book }) {
  const bookDetails = [
    { label: "Title", value: book.title },
    { label: "Author", value: book.author },
    { label: "Category", value: book.category },
    { label: "ISBN", value: book.ISBN },
    { label: "EAN", value: book.EAN },
    { label: "Language", value: book.language },
    { label: "Publication", value: book.publication },
    { label: "Number of pages", value: book.pagenumber },
    { label: "Price", value: `${book.price} ${book.currencyCode}` },
  ];

  return (
    <>
      <StyledDetailsWrapper>
        <BookImage book={book} />
        <StyledListDetails>
          <ul>
            {bookDetails.map((detail) => (
              <li key={detail.label}>
                <strong>{detail.label}:</strong> {detail.value}
              </li>
            ))}
          </ul>
        </StyledListDetails>
        <StyledDescription>
          <h4>Description:</h4>
          <p>{book.description}</p>
        </StyledDescription>
      </StyledDetailsWrapper>
      <StyledButton>
        <Link href="/">X</Link>
      </StyledButton>
    </>
  );
}
