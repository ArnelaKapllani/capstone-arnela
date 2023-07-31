import styled from "styled-components";

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  margin-left: 2px;
`;

export const CartItem = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
  padding-right: 30px;
  width: 100%;
`;

export const ButtonsAndPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 100px;
  background-color: #e2e0e0;
  padding-right: 30px;
  width: 100%;
`;

export const StyledTotal = styled.p`
  position: relative;
  left: 20px;
  font-size: 16px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  top: 5px;
  right: auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const StyledTotalPrice = styled.p`
  display: flex;
  position: relative;
  right: auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const StyledButton = styled.button`
  border: none;
  margin-top: 80px;
  border-radius: 50px;
  cursor: pointer;
  background-color: var(--secondary-color);
  width: 200px;
  height: 45px;
  position: fixed;
  color: #fdfefe;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 135px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 200px);
  position: relative;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
