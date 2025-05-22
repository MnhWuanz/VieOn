import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";
import AnimatedRouter from "../components/animatedRouter";
import Register_new from "../pages/register-new";
const MainRouter = ({ onAddToList }) => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedRouter>
                <Home onAddToList={onAddToList} />
              </AnimatedRouter>
            }
          />
          <Route
            path="/register"
            element={
              <AnimatedRouter>
                <Register />
              </AnimatedRouter>
            }
          />
          <Route
            path="/hbo-go"
            element={
              <AnimatedRouter>
                <Hbogo />
              </AnimatedRouter>
            }
          />
          <Route
            path="/truyen-hinh"
            element={
              <AnimatedRouter>
                <Television />
              </AnimatedRouter>
            }
          />
          <Route
            path="/the-thao"
            element={
              <AnimatedRouter>
                <Sport />
              </AnimatedRouter>
            }
          />
          <Route
            path="/thieu-nhi"
            element={
              <AnimatedRouter>
                <Child />
              </AnimatedRouter>
            }
          />
          <Route
            path="/dang-ky"
            element={
              <AnimatedRouter>
                <Register />
              </AnimatedRouter>
            }
          />
          <Route
            path="/film-detail/:id"
            element={
              <AnimatedRouter>
                <Detailflim />
              </AnimatedRouter>
            }
          />
          <Route
            path="/:title"
            element={
              <AnimatedRouter>
                <Topic />
              </AnimatedRouter>
            }
          />
          <Route
            path="/login"
            element={
              <AnimatedRouter>
                <Login />
              </AnimatedRouter>
            }
          />
          <Route
            path="/playlist"
            element={
              <AnimatedRouter>
                <Playlist />
              </AnimatedRouter>
            }
          />
          <Route
            path="/register_new"
            element={
              <AnimatePresence>
                <Register_new />
              </AnimatePresence>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default MainRouter;
