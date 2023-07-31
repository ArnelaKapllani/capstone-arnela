import Icon from "@mdi/react";
import styled from "styled-components";
import { mdiBasketOutline } from "@mdi/js";
import { useState } from "react";
import { StyledButton } from "../StyledButton/style";

const StyledAlert = styled.div`
  background-color: #ebe9e9;
  color: #333;
  padding: 10px;
  border-radius: 4px;
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 999;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0s;
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    right: 16px;
    border-width: 8px;
    border-style: solid;
    border-color: #ebe9e9 transparent transparent transparent;
  }
`;

export default function ShoppingCartButton({ book, addToCart, selectedValue }) {
  const [showAlert, setshowAlert] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    addToCart(book.id, selectedValue);
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount >= 5) {
      showMessage();
      // setClickCount(0);
    } else {
      setshowAlert(true);
      setTimeout(() => {
        setshowAlert(false);
      }, 2000);
    }
  };
  const showMessage = () => {
    alert(
      "The maximum number of copies of the book you are allowed to purchase is 5."
    );
  };

  return (
    <>
      <StyledButton type="button" onClick={handleClick}>
        <Icon path={mdiBasketOutline} size={0.8} />
      </StyledButton>
      {showAlert && (
        <StyledAlert $show="true">
          The item has been added to your cart.
        </StyledAlert>
      )}
    </>
  );
}
