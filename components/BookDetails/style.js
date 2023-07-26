import styled from "styled-components";

export const StyledDetailsWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 100px 60px 20px;
  flex-direction: column;
`;

export const StyledFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  height: 220px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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
`;
