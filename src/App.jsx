import React from "react";

import "./App.css";
import Header from "./components/header";
import MainRouter from "./router/mainRouter";
const App = () => {
  return (
    <>
      <Header />
      <MainRouter />
    </>
  );
};
export default App;
