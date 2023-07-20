import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

export default function DeleteButton({ book, onDelete }) {
  function removeFromCart() {
    onDelete(book.id);
  }
  return (
    <>
      <button type="button" onClick={removeFromCart}>
        <Icon path={mdiDeleteOutline} size={1} />
      </button>
    </>
  );
}
