import BookImage from "../BookImage";
import BookmarkButton from "../BookmarkButton";
import DropdownButton from "../DropdownButton";
import DeleteButton from "../DeleteButton/index.js";
import { useState, useEffect, useCallback } from "react";
import { books } from "../../lib/books.js";
import {
  ButtonsAndPriceWrapper,
  ButtonsWrapper,
  CartItem,
  CartItemsContainer,
  Container,
  PriceContainer,
  StyledButton,
  StyledTotal,
  StyledTotalPrice,
  TotalWrapper,
  ButtonContainer,
  PageContent,
} from "./style";

export default function ShoppingCart({
  cartItems,
  removeFromCart,
  setCartItems,
  bookmarks,
  toggleBookmark,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = useCallback(() => {
    let totalPrice = 0;

    cartItems.forEach((cartItem) => {
      const book = books.find((item) => item.id === cartItem.bookId);

      if (book) {
        const bookTotalPrice = book.price * cartItem.quantity;
        totalPrice += bookTotalPrice;
      }
    });

    return totalPrice;
  }, [cartItems]);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartItems, calculateTotalPrice]);

  const currencyCode = books.length > 0 ? books[0].currencyCode : "";

  const updateQuantityAndPrice = (bookId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.bookId === bookId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <Container>
      <PageContent>
        <CartItemsContainer>
          <h3>My shopping cart</h3>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cartItem) => {
              const book = books.find((item) => item.id === cartItem.bookId);
              if (!book) {
                return null;
              }
              return (
                <CartItem key={book.id}>
                  <BookImage book={book} />
                  <ButtonsAndPriceWrapper>
                    <ButtonsWrapper>
                      <DropdownButton
                        book={book}
                        quantity={cartItem.quantity}
                        updateQuantityAndPrice={updateQuantityAndPrice}
                      />
                      <DeleteButton book={book} onDelete={removeFromCart} />
                      <BookmarkButton
                        isBookmarked={bookmarks.includes(book.id)}
                        onClick={() => toggleBookmark(book.id)}
                      />
                    </ButtonsWrapper>
                    <PriceContainer>
                      {book.price}
                      {book.currencyCode}
                    </PriceContainer>
                  </ButtonsAndPriceWrapper>
                </CartItem>
              );
            })
          ) : (
            <p>Your cart is empty.</p>
          )}
        </CartItemsContainer>
        <TotalWrapper>
          <StyledTotal>Total:</StyledTotal>
          <StyledTotalPrice>
            {totalPrice.toFixed(2)} {currencyCode}{" "}
          </StyledTotalPrice>
        </TotalWrapper>
      </PageContent>
      <ButtonContainer>
        <StyledButton type="button">Proceed to checkout</StyledButton>
      </ButtonContainer>
    </Container>
  );
}
