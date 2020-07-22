import styled from "styled-components";

export const HolytextContainer = styled.div``;

export const Header = styled.header`
  padding: 25px 0px;
`;

export const BookName = styled.h1`
  font-size: 25px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
`;
export const ChapterName = styled.h2`
  font-weight: 300;
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text};
`;

export const VersesContainer = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  margin: 20px 0px;
`;

export const Verse = styled.li`
  margin: 10px 0px;
  padding: 15px;
  font-size: 20px;
  border-radius: 8px;
  :hover {
    background: ${({ theme }) => theme.colors.transparentItem};
  }
  span {
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const ChapterControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 45px;
`;

export const ChapterControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin: 0px 15px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ChapterControl = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 25px;
  border-radius: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  background: ${({ theme }) => theme.colors.transparentItem};
  cursor: pointer;
`;
