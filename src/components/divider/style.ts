import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  span {
    width: 55%;
    border-bottom: solid 1px ${({ theme }) => theme.colors.border};
  }
`;
