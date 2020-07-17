import styled from "styled-components";

export const TopbarContainer = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  span {
    font-weight: 300;
  }
  h1 {
    margin-left: 5px;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #000;
  }
`;
