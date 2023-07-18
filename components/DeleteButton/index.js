import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

export default function DeleteButton({ book, onDelete }) {
  function handleDelete() {
    onDelete(book);
  }
  return (
    <>
      <button type="button" onClick={handleDelete}>
        <Icon path={mdiDeleteOutline} size={1} />
      </button>
    </>
  );
}
