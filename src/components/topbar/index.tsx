import React from "react";
import { Container } from "../";
import {
  TopbarContainer,
  LogoContainer,
  Content,
  ControlsContainer,
} from "./style";
import { FaCross, FaGithub } from "react-icons/fa";

const TopBar = () => {
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
            <a href="#">
              <FaGithub size={23} />
            </a>
          </ControlsContainer>
        </Content>
      </Container>
    </TopbarContainer>
  );
};

export default TopBar;
