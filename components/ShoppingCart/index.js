import React, { useState } from "react";
import BookImage from "../BookImage";
import BookmarkButton from "../BookmarkButton";
import DropdownButton from "../DropdownButton";
import DeleteButton from "../DeleteButton";

export default function ShoppingCart({ cartItems }) {
  return (
    <>
      <h1>My cart</h1>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((book) => (
          <div key={book.id}>
            <BookImage book={book} />
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <DropdownButton />
      <DeleteButton />
      <BookmarkButton />
      <p>Total:</p>
      <button type="button">Next</button>
    </>
  );
}
