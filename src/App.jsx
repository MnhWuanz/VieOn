import React, { useState } from "react";
import MainRouter from "./routers/mainRouter";
import "./App.css";
import Header from "./components/header";
import { Router, useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const [isNumber, setIsNumber] = useState(0);
  const handelNumber = () => {
    setIsNumber((prev) => prev + 1);
  };
  const excludedPaths = ["/login", "/register_new"];
  return (
    <>
      {!excludedPaths.includes(location.pathname) && (
        <Header numberFlim={isNumber} />
      )}
      <MainRouter onAddToList={handelNumber} />
    </>
  );
};
export default App;

/**
 * Bấm vào đăng ký là ra modal
 * Mà Modal nằm ở trang con
 * Khai báo username, password, name ở trang đăng ký
 * Bấm OK thì log ra được data người dùng nhập vào
 */
