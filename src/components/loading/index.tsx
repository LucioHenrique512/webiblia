import React from "react";
import { FaBible } from "react-icons/fa";
import { LoadingContainer,LoadingContent } from "./style";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <FaBible size={45} />
        <h1>carregando</h1>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading;
