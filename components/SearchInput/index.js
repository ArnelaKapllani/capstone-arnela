import React, { useState } from "react";
// import { books } from "../../lib/books.js";
import BookImage from "../BookImage";
import Icon from "@mdi/react";
import BookmarkButton from "../BookmarkButton/index.js";
import ShoppingCartButton from "../ShoppingCartButton/index.js";
import { StyledSearchContainer } from "./style.js";
import { StyledSearchButton } from "./style.js";
import { mdiMagnify } from "@mdi/js";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  function handleInputChange(event) {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setIsSearchClicked(false);
      setSearchResults([]);
    }
  }

  function handleSearchClick() {
    setIsSearchClicked(true);

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredBooks);
  }

  return (
    <StyledSearchContainer>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="      Search..."
      />
      <StyledSearchButton type="button" onClick={handleSearchClick}>
        <Icon path={mdiMagnify} size={1} />
      </StyledSearchButton>
      <ul>
        {isSearchClicked && searchResults.length === 0 ? (
          <h3 style={{ color: "lightgrey" }}>... book not found :(</h3>
        ) : (
          searchResults.map((book) => (
            <li key={book.id}>
              <BookImage book={book} />
              {book.price}
              {book.currencyCode}
              <BookmarkButton />
              <ShoppingCartButton />
            </li>
          ))
        )}
      </ul>
    </StyledSearchContainer>
  );
}
