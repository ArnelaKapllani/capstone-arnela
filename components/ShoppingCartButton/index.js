import Icon from "@mdi/react";
import { mdiBasketOutline } from "@mdi/js";

export default function ShoppingCartButton() {
  return (
    <>
      <button type="button">
        <Icon path={mdiBasketOutline} size={1} />
      </button>
    </>
  );
}
