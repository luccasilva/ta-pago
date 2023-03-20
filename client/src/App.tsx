import React from "react";
import Router from "./router";
import AplicationContextProvider from "./context";

function App() {
  return (
    <>
      <AplicationContextProvider>
        <Router />
      </AplicationContextProvider>
    </>
  );
}

export default App;
