import React from "react";
import { DefaultContainer, Wrapper } from "./style";

const Container = (props: any) => {
  return (
    <DefaultContainer>
      <Wrapper>{props.children}</Wrapper>
    </DefaultContainer>
  );
};

export default Container;
