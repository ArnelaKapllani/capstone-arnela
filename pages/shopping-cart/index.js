import Layout from "../../components/Layout/index.js";
import ShoppingCart from "../../components/ShoppingCart/index.js";

export default function ShoppingCartPage({ cartItems }) {
  return (
    <>
      <Layout>
        <ShoppingCart cartItems={cartItems} />
      </Layout>
    </>
  );
}
