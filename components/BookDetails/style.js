import styled from "styled-components";
import Image from "next/image";

export const StyledDetailsPage = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
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

export const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
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

export const StyledDescription = styled.p`
  padding-left: 25px;
  padding-right: 25px;
  font-size: 14px;
  line-height: 1.4;
`;
