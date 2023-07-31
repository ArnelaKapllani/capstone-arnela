import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
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
  background-color: #f7f7f7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s ease;
  :hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  } */
`;
