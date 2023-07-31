import styled from "styled-components";

export const DropdownSelect = styled.select`
  padding: 8px 20px;
  font-size: 14.5px;
  font-weight: 500;
  border: 1px solid #201e1e;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  width: 60px;
  height: 35px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 30px;
  &:focus {
    outline: none;
  }
`;
