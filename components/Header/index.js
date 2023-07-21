import { StyledHeader, StyledTitle, Quote } from "./style.js";
import ThemeToggle from "../ThemeToggle/index.js";

export default function Header() {
  return (
    <StyledHeader>
      <ThemeToggle />
      <StyledTitle>YourBook</StyledTitle>
      <Quote>Books are portable magic!</Quote>
    </StyledHeader>
  );
}
