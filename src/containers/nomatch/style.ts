import styled from "styled-components";

export const NoMatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 0px 0px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  text-align: center;
  max-width: 500px;
`;

