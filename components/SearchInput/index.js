import BookImage from "../BookImage";
import Icon from "@mdi/react";
import BookmarkButton from "../BookmarkButton/index.js";
import ShoppingCartButton from "../ShoppingCartButton/index.js";
import React, { useState } from "react";
import { books } from "../../lib/books.js";
import { StyledSearchContainer, StyledSearchInput } from "./style.js";
import { StyledSearchButton } from "./style.js";
import { mdiMagnify } from "@mdi/js";

export default function SearchInput({ addToCart, bookmarks, toggleBookmark }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  function handleInputChange(event) {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setIsSearchClicked(false);
      setSearchResults([]);
    } else {
      handleSearchClick();
    }
  }

  function handleSearchClick() {
    setIsSearchClicked(true);

    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredBooks);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  }

  return (
    <>
      <StyledSearchContainer>
        <StyledSearchInput
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Search..."
        />
        <StyledSearchButton type="button" onClick={handleSearchClick}>
          <Icon path={mdiMagnify} size={1} />
        </StyledSearchButton>
      </StyledSearchContainer>
      <ul>
        {isSearchClicked && searchResults.length === 0 ? (
          <h3 style={{ color: "lightgrey" }}>... book not found :(</h3>
        ) : (
          searchResults.map((book) => (
            <li key={book.id}>
              <BookImage book={book} />
              {book.price}
              {book.currencyCode}
              <BookmarkButton
                isBookmarked={bookmarks.includes(book.id)}
                onClick={() => toggleBookmark(book.id)}
              />
              <ShoppingCartButton book={book} addToCart={addToCart} />
            </li>
          ))
        )}
      </ul>
    </>
  );
}
