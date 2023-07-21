import Header from "../Header";
import NavigationBar from "../NavigationBar";

export default function Layout({ children, cartItems }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NavigationBar cartItems={cartItems} />
    </>
  );
}
