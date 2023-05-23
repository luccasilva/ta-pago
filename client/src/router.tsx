import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home/home";
import Exercise from "./components/exercise/exercise";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} key={"/"} element={<Login />} />
        <Route path={"/register"} key={"/register"} element={<Register />} />
        <Route path={"/home"} key={"/home"} element={<Home />} />
        <Route path={"/exercise"} key={"/exercise"} element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
