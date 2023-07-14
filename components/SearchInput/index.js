import React, { useState } from "react";
import { books } from "../../lib/books.js";
import BookImage from "../BookImage";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import BookmarkButton from "../BookmarkButton/index.js";
import ShoppingCartButton from "../ShoppingCartButton/index.js";
import { StyledSearchContainer } from "./style.js";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setIsSearchClicked(false);
      setSearchResults([]);
    }
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  return (
    <StyledSearchContainer>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button type="button" onClick={handleSearchClick}>
        <Icon path={mdiMagnify} size={1} />
      </button>
      <ul>
        {isSearchClicked && searchResults.length === 0 ? (
          <p style={{ color: "lightgrey" }}>... book not found :(</p>
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
