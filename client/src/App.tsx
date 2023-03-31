import React from "react";
import Router from "./router";
import AplicationContextProvider from "./context";
import "./App.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED6C02',
    },
  },
  typography: {
    h6: {
      color: '#797676',
      fontSize: '16px',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AplicationContextProvider>
          <Router />
        </AplicationContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
