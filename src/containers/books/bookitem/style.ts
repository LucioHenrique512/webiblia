import styled from "styled-components";

export const BookContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookContent = styled.div`
  width: 94%;
  height: 85px;
  margin-bottom: 30px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
 
  display: flex;
  cursor: pointer;
  overflow: hidden;
  :hover {
    box-shadow: 3px 3px 5px 1px ${({ theme }) => theme.colors.border};
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  width: 75px;
  text-transform: uppercase;
  
`;
export const InfoContainer = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

interface nameTypes {
  isBig?: Boolean;
}
export const Name = styled.h2<nameTypes>`
  font-size: ${({ isBig }) => (isBig ? "14px" : "19px")};
`;
export const Author = styled.p<nameTypes>`
  font-size: ${({ isBig }) => (isBig ? "13px" : "15px")};
  font-weight: 500;
`;

export const Group = styled.p`
  font-size: 14px;
`;

export const Abbrev = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.transparentItem};
`;
