import React from "react";
import MainRouter from "./routers/mainRouter";
import "./App.css";
import Header from "./components/header";
const App = () => {
  return (
    <>
      <Header />
      <MainRouter />
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
