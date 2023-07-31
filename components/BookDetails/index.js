import BookImage from "../BookImage";
import {
  StyledDetailsWrapper,
  StyledListDetails,
  StyledDescription,
  StyledButtonsWrapper,
  StyledImageContainer,
} from "./style";
import ShoppingCartButton from "../ShoppingCartButton/index.js";
import BookmarkButton from "../BookmarkButton/index.js";
import CloseButton from "../CloseButton";

export default function BookDetails({
  book,
  addToCart,
  toggleBookmark,
  bookmarks,
}) {
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
        <StyledImageContainer>
          <BookImage book={book} />
          <StyledButtonsWrapper>
            <ShoppingCartButton book={book} addToCart={addToCart} />
            <BookmarkButton
              isBookmarked={bookmarks.includes(book.id)}
              onClick={() => toggleBookmark(book.id)}
            />
          </StyledButtonsWrapper>
        </StyledImageContainer>
        <StyledListDetails>
          <ul>
            {bookDetails.map((detail) => (
              <li key={detail.label}>
                <strong>{detail.label}:</strong> {detail.value}
              </li>
            ))}
          </ul>
        </StyledListDetails>
        <h4>Description:</h4>
        <StyledDescription>
          <p>{book.description}</p>
        </StyledDescription>
      </StyledDetailsWrapper>
      <CloseButton />
    </>
  );
}
