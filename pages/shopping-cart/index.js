import Layout from "../../components/Layout/index.js";
import ShoppingCart from "../../components/ShoppingCart/index.js";

export default function ShoppingCartPage({
  cartItems,
  removeFromCart,
  setCartItems,
}) {
  return (
    <>
      <Layout cartItems={cartItems} />
      <ShoppingCart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        setCartItems={setCartItems}
      />
    </>
  );
}
