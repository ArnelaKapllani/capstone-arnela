import SearchResults from "../SearchResults/index.js";
import Icon from "@mdi/react";
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
      <SearchResults
        isSearchClicked={isSearchClicked}
        searchResults={searchResults}
        bookmarks={bookmarks}
        toggleBookmark={toggleBookmark}
        addToCart={addToCart}
      />
    </>
  );
}
