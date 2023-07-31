import { useState, useEffect } from "react";
import { DropdownSelect } from "./style.js";

export default function DropdownButton({
  book,
  quantity,
  updateQuantityAndPrice,
}) {
  const [selectedValue, setSelectedValue] = useState(quantity);

  useEffect(() => {
    setSelectedValue(quantity);
  }, [quantity]);

  function handleSelectedChange(event) {
    const newQuantity = parseInt(event.target.value);
    setSelectedValue(newQuantity);

    updateQuantityAndPrice(book.id, newQuantity);
  }
  return (
    <DropdownSelect value={selectedValue} onChange={handleSelectedChange}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </DropdownSelect>
  );
}
