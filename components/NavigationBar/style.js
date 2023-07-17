import styled from "styled-components";
import Link from "next/link";

export const NavBar = styled.nav`
  display: flex;
  background-color: #ffffff;
  padding: 15px 0;
  box-shadow: 0px -1px 0px rgba(58, 72, 80, 0.07),
    0px -2px 11px -1px rgba(176, 189, 197, 0.12);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-evenly;
  transition: background-color 0.3s ease;
`;

export const StyledIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 25%;
  color: #cbcaca;
  :active {
    color: #453f3f;
  }
  font-size: 10px;
`;
