import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    transition: background-color 0.3s ease;
  }

  .dark-mode {
    background-color: #222;
    color: #fff;
  }
`;
