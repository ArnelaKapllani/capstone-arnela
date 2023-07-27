import Header from "../Header";
import NavigationBar from "../NavigationBar";
import { Main } from "./style.js";
export default function Layout({ children, cartItems }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <NavigationBar cartItems={cartItems} />
    </>
  );
}
