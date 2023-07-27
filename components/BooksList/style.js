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
  padding-bottom: 250px;
  padding-left: 300px;
  list-style: none;
`;

export const StyledListItem = styled.li`
  padding-left: 25px;
`;
