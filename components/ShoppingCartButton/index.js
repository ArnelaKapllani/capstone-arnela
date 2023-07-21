import Icon from "@mdi/react";
import { mdiBasketOutline } from "@mdi/js";
import { useState } from "react";
import styled from "styled-components";

const StyledAlert = styled.p`
  background-color: red;
  color: #333;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
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
      <button type="button" onClick={handleClick}>
        <Icon path={mdiBasketOutline} size={1} />
      </button>
      {showAlert && <StyledAlert>Added to the cart!</StyledAlert>}
    </>
  );
}
