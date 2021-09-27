import { useState, useEffect, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/global";
import styled from "styled-components";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import { MyToaster } from "./components/MyToaster";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeContextProvider>
          <GlobalStyle />
          <AuthContextProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />

              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </AuthContextProvider>
          <MyToaster />
        </ThemeContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 15px;
`;

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
`;

export default App;
