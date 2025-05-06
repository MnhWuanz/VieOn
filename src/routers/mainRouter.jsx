import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sport from "../pages/sport";
import Child from "../pages/Child";
import Television from "../pages/television";
import Hbogo from "../pages/hbo-go";
import Register from "../pages/register";
import Detailflim from "../pages/detail-flim";
import Topic from "../components/topic";
import Login from "../pages/login";
import Playlist from "../pages/playlist";
const MainRouter = ({ onAddToList }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home onAddToList={onAddToList} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hbo-go" element={<Hbogo />} />
        <Route path="/truyen-hinh" element={<Television />} />
        <Route path="/the-thao" element={<Sport />} />
        <Route path="/thieu-nhi" element={<Child />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/film-detail/:id" element={<Detailflim />} />
        <Route path="/:title" element={<Topic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </>
  );
};

export default MainRouter;
