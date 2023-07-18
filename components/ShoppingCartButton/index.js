import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiBasketOutline } from "@mdi/js";

export default function ShoppingCartButton({ book, addToCart }) {
  const handleAddToCart = () => {
    addToCart(book);
  };
  return (
    <>
      <button type="button" onClick={handleAddToCart}>
        <Icon path={mdiBasketOutline} size={1} />
      </button>
    </>
  );
}
