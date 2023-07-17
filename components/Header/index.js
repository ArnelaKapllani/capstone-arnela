import { StyledHeader, StyledTitle, Quote } from "./style.js";
import ThemeToggle from "../ThemeToggle/index.js";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <StyledHeader>
      <ThemeToggle />
      <StyledTitle>YourBook</StyledTitle>
      <Quote>Books are portable magic!</Quote>
    </StyledHeader>
  );
}
