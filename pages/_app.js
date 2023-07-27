import GlobalStyle from "../styles";
import { useState } from "react";
import { books } from "../lib/books.js";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  function addToCart(bookId) {
    const existigCartItem = cartItems.find(
      (cartItem) => cartItem.bookId === bookId
    );
    if (existigCartItem) {
      if (existigCartItem.quantity < 5) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) =>
            cartItem.bookId === bookId
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      }
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { bookId, quantity: 1 },
      ]);
    }
  }

  function removeFromCart(bookId) {
    setCartItems(cartItems.filter((cartItem) => cartItem.bookId !== bookId));
  }

  function toggleBookmark(bookId) {
    setBookmarks((prevBookmarks) => {
      const isBookmarked = prevBookmarks.includes(bookId);
      if (isBookmarked) {
        return prevBookmarks.filter((id) => id !== bookId);
      } else {
        return [...prevBookmarks, bookId];
      }
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        books={books}
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        bookmarks={bookmarks}
        toggleBookmark={toggleBookmark}
      />
    </>
  );
}
