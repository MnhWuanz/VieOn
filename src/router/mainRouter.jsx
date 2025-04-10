import React from "react";
import Home from "../pages/home";
import Sport from "../pages/sport";
import { Route, Routes } from "react-router-dom";
import Television from "../pages/television";
import Login from "../pages/login";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/the-thao" element={<Sport />} />
        <Route path="/truyen-hinh" element={<Television />} />
      </Routes>
    </>
  );
};

export default MainRouter;
