import BookImage from "../BookImage";
import BookmarkButton from "../BookmarkButton/index.js";
import ShoppingCartButton from "../ShoppingCartButton/index.js";
import {
  ResultsContainer,
  ResultsList,
  ResultsItem,
  BookPrice,
  PriceButtonWrapper,
} from "./style.js";

export default function SearchResults({
  isSearchClicked,
  searchResults,
  bookmarks,
  toggleBookmark,
  addToCart,
}) {
  return (
    <ResultsContainer>
      {searchResults.length > 0 && (
        <ResultsList>
          {isSearchClicked && searchResults.length === 0 ? (
            <h3 style={{ color: "lightgrey" }}>... book not found :(</h3>
          ) : (
            searchResults.map((book) => (
              <ResultsItem key={book.id}>
                <BookImage book={book} />
                <PriceButtonWrapper>
                  <BookPrice>
                    {book.price}
                    {book.currencyCode}
                  </BookPrice>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <ShoppingCartButton book={book} addToCart={addToCart} />
                    <BookmarkButton
                      isBookmarked={bookmarks.includes(book.id)}
                      onClick={() => toggleBookmark(book.id)}
                    />
                  </div>
                </PriceButtonWrapper>
              </ResultsItem>
            ))
          )}
        </ResultsList>
      )}
    </ResultsContainer>
  );
}
