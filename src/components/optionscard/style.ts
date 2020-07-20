import styled from "styled-components";

export const Button = styled.button`
  margin: 10px;
  border-radius: 7px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.transparentItem};
  border: none;
  cursor: pointer;
  outline: none;
`;

export const Container = styled.div`
  display: grid;
  border-radius: 8px;
  grid-template-columns: repeat(10, 1fr);
  padding: 10px;
  border: solid 2px ${({ theme }) => theme.colors.border};
  position: relative;
  span {
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 21px;
    font-weight: bold;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(4, 1fr);
    ${Button} {
      font-size: 19px;
      height: 45px;
    }
  }
`;
