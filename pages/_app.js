import GlobalStyle from "../styles";
import { useState } from "react";
import { books } from "../lib/books.js";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    const updateCartItems = [...cartItems, book];
    setCartItems(updateCartItems);
  };

  function handleDelete(book) {
    const updatedCartItems = cartItems.filter((item) => item.id !== book.id);
    setCartItems(updatedCartItems);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        books={books}
        cartItems={cartItems}
        addToCart={addToCart}
        handleDelete={handleDelete}
      />
    </>
  );
}
