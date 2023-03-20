import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} key={"/"} element={<Login />} />
        <Route path={"/register"} key={"/register"} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
