import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  margin: 15px 0px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  width: fit-content;
  svg{
    margin-right: 4px;
  }
`;
