import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";
import { StyledButton } from "../StyledButton/style";

export default function DeleteButton({ book, onDelete }) {
  function removeFromCart() {
    onDelete(book.id);
  }
  return (
    <>
      <StyledButton type="button" onClick={removeFromCart}>
        <Icon path={mdiDeleteOutline} size={0.8} />
      </StyledButton>
    </>
  );
}
