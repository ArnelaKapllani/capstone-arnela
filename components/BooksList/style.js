import { styled } from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: auto;
  white-space: nowrap;
`;

export const StyledList = styled.ul`
  display: inline-flex;
  gap: 15px;
  padding-bottom: 250px;
  padding-left: 20px;
  list-style: none;
`;

export const StyledListItem = styled.li`
  padding-left: 25px;
`;
