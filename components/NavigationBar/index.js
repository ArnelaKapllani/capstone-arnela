import Icon from "@mdi/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NavBar, StyledIcon, Span, StyledMdiIcon } from "./style.js";
import {
  mdiBookOpenPageVariantOutline,
  mdiMagnify,
  mdiBookmarkOutline,
  mdiBasketOutline,
} from "@mdi/js";

export default function NavigationBar({ cartItems }) {
  const router = useRouter();
  const [activeIcons, setActiveIcons] = useState([false, false, false, false]);

  useEffect(() => {
    const currentPath = router.pathname;
    setActiveIcons([
      currentPath === "/" ? true : false,
      currentPath === "/search" ? true : false,
      currentPath === "/bookmarked" ? true : false,
      currentPath === "/shopping-cart" ? true : false,
    ]);
  }, [router.pathname]);

  function handleIconClick(index) {
    setActiveIcons((prevActiveIcons) =>
      prevActiveIcons.map((isActive, i) => i === index)
    );
  }

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
        <StyledIcon
          active={activeIcons[0] ? "true" : undefined}
          onClick={() => handleIconClick(0)}
          href="/"
          aria-label="see book list"
        >
          <Icon path={mdiBookOpenPageVariantOutline} size={1} />
          For me
        </StyledIcon>
        <StyledIcon
          active={activeIcons[1] ? "true" : undefined}
          onClick={() => handleIconClick(1)}
          href="/search"
          aria-label="search a book"
        >
          <Icon path={mdiMagnify} size={1} />
          Search
        </StyledIcon>
        <StyledIcon
          active={activeIcons[2] ? "true" : undefined}
          onClick={() => handleIconClick(2)}
          href="/bookmarked"
          aria-label="see bookmarked books"
        >
          <Icon path={mdiBookmarkOutline} size={1} />
          Bookmark
        </StyledIcon>
        <StyledIcon
          active={activeIcons[3] ? "true" : undefined}
          onClick={() => handleIconClick(3)}
          href="/shopping-cart"
          aria-label="see shopping cart"
        >
          <Icon path={mdiBasketOutline} size={1} />
          {cartItems.length > 0 && (
            <Span>
              {Object.keys(bookQuantities).reduce(
                (total, bookId) => total + bookQuantities[bookId],
                0
              )}
            </Span>
          )}
          Shopping Cart
        </StyledIcon>
      </NavBar>
    </footer>
  );
}
