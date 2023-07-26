import Icon from "@mdi/react";
import { NavBar, StyledIcon } from "./style.js";
import {
  mdiBookOpenPageVariantOutline,
  mdiMagnify,
  mdiBookmarkOutline,
  mdiBasketOutline,
} from "@mdi/js";

export default function NavigationBar({ cartItems }) {
  const bookQuantities = cartItems.reduce((accumulator, cartItem) => {
    const bookId = cartItem.bookId;
    if (accumulator[bookId]) {
      accumulator[bookId] += cartItem.quantity;
    } else {
      accumulator[bookId] = cartItem.quantity;
    }
    return accumulator;
  }, {});

  return (
    <footer>
      <NavBar>
        <StyledIcon href="/" aria-label="see book list">
          <Icon path={mdiBookOpenPageVariantOutline} size={1} />
          For me
        </StyledIcon>
        <StyledIcon href="/search" aria-label="search a book">
          <Icon path={mdiMagnify} size={1} />
          Search
        </StyledIcon>
        <StyledIcon href="/bookmarked" aria-label="see bookmarked books">
          <Icon path={mdiBookmarkOutline} size={1} />
          Bookmark
        </StyledIcon>
        <StyledIcon href="/shopping-cart" aria-label="see shopping cart">
          <Icon path={mdiBasketOutline} size={1} />
          {cartItems.length > 0 && (
            <span>
              {Object.keys(bookQuantities).reduce(
                (total, bookId) => total + bookQuantities[bookId],
                0
              )}
            </span>
          )}
          Shopping Cart
        </StyledIcon>
      </NavBar>
    </footer>
  );
}
