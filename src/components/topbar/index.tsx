import React from "react";
import { Container } from "../";
import {
  TopbarContainer,
  LogoContainer,
  Content,
  ControlsContainer,
  DarkModeToggle,
} from "./style";
import { FaCross, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./actions";

const TopBar = () => {
  const { utils }: any = useSelector((store) => store);
  const { darkMode } = utils;
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <TopbarContainer>
      <Container>
        <Content>
          <LogoContainer>
            <FaCross size={26} />
            <h1>
              <span>We</span>Biblia
            </h1>
          </LogoContainer>
          <ControlsContainer>
            <DarkModeToggle darkMode={darkMode} onClick={handleToggleDarkMode}>
              <div className="darkmode-btn-wrapper">
                <FaSun size={23} />
                <FaMoon size={23} />
              </div>
            </DarkModeToggle>
            <a
              href="https://github.com/LucioHenrique512/webiblia"
              target="blank"
            >
              <FaGithub size={23} />
            </a>
          </ControlsContainer>
        </Content>
      </Container>
    </TopbarContainer>
  );
};

export default TopBar;
