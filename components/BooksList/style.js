import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 200px);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  padding-left: 0;
  padding-right: 0;
  margin: 0px;
`;

export const StyledListItem = styled.li`
  list-style: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ListBackground = styled.div`
  background-color: #383838;
  height: 190px;
  padding: 10px;
`;
