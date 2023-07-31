import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 300px);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const ResultsList = styled.ul`
  display: flex;
  padding-left: 0;
  padding-right: 0;
  margin: 0px;
`;

export const ResultsItem = styled.li`
  list-style: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const BookPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: 5px;
  margin-top: 14px;
`;
