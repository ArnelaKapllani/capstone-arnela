import Layout from "@/components/Layout/index.js";
import SearchInput from "../../components/SearchInput/index.js";

export default function SearchInputPage({ addToCart, cartItems }) {
  return (
    <>
      <Layout cartItems={cartItems} />
      <SearchInput addToCart={addToCart} />
    </>
  );
}
