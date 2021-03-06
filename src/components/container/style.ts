import styled from "styled-components";

export const DefaultContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 80vw;
  @media (max-width: 1200px) {
    width: 89vw;
  }
`;
