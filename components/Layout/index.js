import Header from "../Header";
import NavBar from "../NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <NavBar />
    </div>
  );
}
