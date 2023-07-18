import GlobalStyle from "../styles";
import { useState } from "react";
import SearchInput from "../components/SearchInput/index.js";
import ShoppingCart from "../components/ShoppingCart/index.js";
import { books } from "../lib/books.js";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    const updateCartItems = [...cartItems, book];
    console.log(updateCartItems);
    setCartItems(updateCartItems);
  };

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        books={books}
        addToCart={addToCart}
        cartItems={cartItems}
      />
      {/* <SearchInput addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} /> */}
    </>
  );
}
