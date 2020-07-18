import styled from "styled-components";
import { sizes } from "../../constants";

export const TopbarContainer = styled.header`
  height: ${sizes.TOP_BAR_HEIGHT}px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  color: ${({ theme }) => theme.colors.text};
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
    color: ${({ theme }) => theme.colors.text};
  }
`;

interface DarkModeToggleType {
  darkMode: boolean;
}

export const DarkModeToggle = styled.button<DarkModeToggleType>`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 25px;
  height: 25px;
  overflow: hidden;
  background: none;
  outline: 0;
  cursor: pointer;
  border: none;
  .darkmode-btn-wrapper {
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    transform: ${({ darkMode }) =>
      darkMode ? "translateY(-26.0px)" : "translateY(0px)"};
    svg {
      margin-bottom: 4px;
    }
  }
`;
