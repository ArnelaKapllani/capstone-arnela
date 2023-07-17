import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--primary-color);
  padding: 15px 0;
`;

export const StyledTitle = styled.h1`
  display: flex;
  position: absolute;
  top: 15px;
  right: auto;
  margin: 0;
  color: #453f3f;
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Quote = styled.p`
  font-size: 9px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--secondary-color);
  position: relative;
  top: 15px;
  left: 1.5rem;
`;
