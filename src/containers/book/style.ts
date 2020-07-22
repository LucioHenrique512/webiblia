import styled from "styled-components";

export const BookContainer = styled.div`


`;

export const BookName = styled.h2`
  font-size: 85px;
`;
export const BookAuthor = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;
export const BookGroup = styled.p`
  font-weight: bold;
`;
export const BookTestament = styled.p`
  font-size: 30px;
`;

export const Header = styled.header`
  padding: 30px 0px;
  color: ${({ theme }) => theme.colors.text};
    @media (max-width: 1000px) {
    ${BookName} {
      font-size: 50px;
    }
    ${BookTestament} {
      font-size: 25px;
    }
  }
`;

export const BookDetails = styled.div`
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 25px;
    width: 100%;
  }
`;

export const DetailsContent = styled.div`
  width: 100%;
`;

export const BookDescription = styled.div``;