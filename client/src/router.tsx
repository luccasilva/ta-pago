import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home/home";
import Exercise from "./components/exercise/exercise";
import Record from "./components/record/record";
import CreateGroup from "./components/group/create-group";
import Group from "./components/group/group";
import JoinGroup from "./components/group/join-group";
import Profile from "./components/group/profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} key={"/"} element={<Login />} />
        <Route path={"/register"} key={"/register"} element={<Register />} />
        <Route path={"/home"} key={"/home"} element={<Home />} />
        <Route path={"/exercise"} key={"/exercise"} element={<Exercise />} />
        <Route path={"/record"} key={"/record"} element={<Record />} />
        <Route path={"/group/create"} key={"/group/create"} element={<CreateGroup />} />
        <Route path="/group/:groupId" key="/group/:groupId" element={<Group />} />
        <Route path="/group/join/:tag" key="/group/join/:tag" element={<JoinGroup />} />
        <Route path="/profile/:userId/:name" key="/profile/:userId/:name" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
