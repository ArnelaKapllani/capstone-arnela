import Icon from "@mdi/react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { mdiWhiteBalanceSunny } from "@mdi/js";
import { mdiMoonWaningCrescent } from "@mdi/js";

const StyledButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
  border: none;
  color: #453f3f;
  cursor: pointer;
  background-color: transparent;
`;

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
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
