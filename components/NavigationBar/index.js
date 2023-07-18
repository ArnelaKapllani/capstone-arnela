import Icon from "@mdi/react";
import { NavBar, StyledIcon } from "./style.js";
import {
  mdiBookOpenPageVariantOutline,
  mdiMagnify,
  mdiBookmarkOutline,
  mdiBasketOutline,
} from "@mdi/js";

export default function NavigationBar({ cartItems }) {
  return (
    <footer>
      <NavBar>
        <StyledIcon href="/" area-label="see book list">
          <Icon path={mdiBookOpenPageVariantOutline} size={1} />
          For me
        </StyledIcon>
        <StyledIcon href="/search" area-label="search a book">
          <Icon path={mdiMagnify} size={1} />
          Search
        </StyledIcon>
        <StyledIcon href="" area-label="see bookmarked books">
          <Icon path={mdiBookmarkOutline} size={1} />
          Bookmark
        </StyledIcon>
        <StyledIcon href="/shopping-cart" area-label="see shopping cart">
          <Icon path={mdiBasketOutline} size={1} />
          {cartItems.length > 0 && (
            <span className="cart-alert">{cartItems.length}</span>
          )}
          Shopping Cart
        </StyledIcon>
      </NavBar>
    </footer>
  );
}
