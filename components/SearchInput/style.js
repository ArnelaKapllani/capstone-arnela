import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledSearchInput = styled.input`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 350px;
  height: 40px;
`;

export const StyledSearchButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  right: 40px;
  bottom: 1px;
  color: grey;
`;
