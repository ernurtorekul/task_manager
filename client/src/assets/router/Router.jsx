import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/registration"} element={<Registration />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterApp;
