import styled from "styled-components";

export const BookContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BookContent = styled.div`
  width: 360px;
  min-height: 200px;
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  background: #fff;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.14);
  }
`;
