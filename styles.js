import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin-top: 100px;
    font-family: system-ui;
    background-color: var(--primary-color);
    color: #000000;
    transition: background-color 0.9s ease;
  }

  .dark-mode {
    background-color: #222;
    color: #fff;
  }

  :root {
    --primary-color: #f2f2f2;
    --secondary-color: #e71711;
  }
`;
