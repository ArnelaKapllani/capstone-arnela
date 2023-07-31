import styled from "styled-components";

export const StyledDetailsWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 50px 30px;
  flex-direction: column;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 5px;
  min-width: fit-content;
  margin: 5px;
`;

export const StyledListDetails = styled.details`
  padding-top: 30px;
  flex-grow: 1;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
  padding-right: 25px;
  line-height: 1.8;
`;

export const StyledDescription = styled.article`
  font-size: 14px;
  line-height: 1.4;
  max-height: 200px;
  overflow: auto;
`;
