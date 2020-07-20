import styled from "styled-components";

export const HolytextContainer = styled.div``;

export const Header = styled.header`
  padding: 25px 0px;
`;

export const BookName = styled.h1`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
`;
export const ChapterName = styled.h2`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text};
`;

export const VersesContainer = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  margin: 20px 0px;
`;

export const Verses = styled.li`
  margin: 10px 0px;
  padding: 10px 0px;
  font-size: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  span {
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
  }
`;
