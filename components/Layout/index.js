import Header from "../Header";
import NavigationBar from "../NavigationBar";
import ThemeToggle from "../ThemeToggle";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NavigationBar />
      <ThemeToggle />
    </>
  );
}
