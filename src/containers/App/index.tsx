import React from "react";
import GlobalStyle from "./style";
import Routes from "../../routes";
import { BrowserRouter } from "react-router-dom";
import { TopBar } from "../../components";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
