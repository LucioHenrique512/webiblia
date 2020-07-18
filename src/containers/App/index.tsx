import React from "react";
import GlobalStyle from "./style";
import Routes from "../../routes";
import { BrowserRouter } from "react-router-dom";
import { TopBar } from "../../components";
import { sizes } from "../../constants";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../themes";
import { useSelector } from "react-redux";

function App() {
  const { darkMode } = useSelector((state: any) => state.utils);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <div style={{ paddingTop: sizes.TOP_BAR_HEIGHT }}>
          <Routes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
