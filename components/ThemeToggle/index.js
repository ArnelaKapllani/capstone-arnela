import Icon from "@mdi/react";
import { useState, useEffect } from "react";
import { mdiWhiteBalanceSunny } from "@mdi/js";
import { mdiMoonWaningCrescent } from "@mdi/js";
import { styled } from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
  border: none;
  color: #453f3f;
  cursor: pointer;
`;

export default function ThemeToggle() {
  const isBrowser = typeof window !== "undefined";
  const storedDarkMode = isBrowser
    ? localStorage.getItem("darkMode") === "true"
    : false;
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    if (isBrowser) {
      if (darkMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", true);
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", false);
      }
    }
  }, [darkMode, isBrowser]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <StyledButton onClick={toggleTheme}>
      {darkMode ? (
        <Icon path={mdiWhiteBalanceSunny} size={1} />
      ) : (
        <Icon path={mdiMoonWaningCrescent} size={1} />
      )}
    </StyledButton>
  );
}
