import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiBasketOutline } from "@mdi/js";

export default function ShoppingCartButton({ book, addToCart }) {
  return (
    <>
      <button type="button" onClick={() => addToCart(book)}>
        <Icon path={mdiBasketOutline} size={1} />
      </button>
    </>
  );
}
