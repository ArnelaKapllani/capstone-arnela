import Icon from "@mdi/react";
import { useState } from "react";
import { mdiWhiteBalanceSunny } from "@mdi/js";
import { mdiMoonWaningCrescent } from "@mdi/js";

export default function DarkModeButton() {
  const prefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  }
  return (
    <button onClick={handleDarkMode}>
      {isDarkMode ? (
        <Icon path={mdiMoonWaningCrescent} size={1} />
      ) : (
        <Icon path={mdiWhiteBalanceSunny} size={1} />
      )}
    </button>
  );
}
