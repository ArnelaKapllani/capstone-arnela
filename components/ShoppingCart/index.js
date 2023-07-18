import BookImage from "../BookImage";
import BookmarkButton from "../BookmarkButton";
import DropdownButton from "../DropdownButton";
import DeleteButton from "../DeleteButton/index.js";

export default function ShoppingCart({ cartItems, handleDelete }) {
  return (
    <>
      <h1>My cart</h1>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((book) => (
          <div key={book.id}>
            <BookImage book={book} />
            <DropdownButton />
            <DeleteButton book={book} onDelete={handleDelete} />
            <BookmarkButton />
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <p>Total:</p>
      <button type="button">Next</button>
    </>
  );
}
