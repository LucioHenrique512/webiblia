import styled from "styled-components";

export const Content = styled.div``;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 740px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const TestamentDivider = styled.div`
  padding: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchBarContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px;
  flex-direction: column;
  span {
    margin-top: 10px;
    ${({ theme }) => theme.colors.text};
  }
  form {
    margin-top: 20px;
    min-width: 350px;
    height: 45px;
    display: flex;
    border-radius: 22.5px;
    overflow: hidden;
    box-shadow: 1px 1px 15px 1px ${({ theme }) => theme.colors.border};
    input {
      outline: none;
      width: calc(100% - 45px);
      font-size: 18px;
      padding-left: 25px;
      border: none;
      background: ${({ theme }) => theme.colors.transparentItem};
      color: ${({ theme }) => theme.colors.text};
    }
    button {
      border: none;
      outline: none;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.secondary};
      svg {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  h3 {
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const NoResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    margin-top: 45px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
