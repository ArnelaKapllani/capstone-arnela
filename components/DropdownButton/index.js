import { useState, useEffect } from "react";

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
    <select value={selectedValue} onChange={handleSelectedChange}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  );
}
