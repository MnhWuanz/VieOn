<<<<<<< HEAD
import React from 'react'
import{Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import Sport from '../pages/sport'
import Child from '../pages/Child'
import Television from '../pages/television';
import Hbogo from '../pages/hbo-go';
import Register from '../pages/register';
import Detailflim from '../pages/detail-flim'
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sport from "../pages/sport";
import Child from "../pages/Child";
import Television from "../pages/television";
import Hbogo from "../pages/hbo-go";
import Register from "../pages/register";
import DetailFilm from "../pages/detail-film";
>>>>>>> de9b82157c8db19a2d4636cb1bae864f5338f1b0
const MainRouter = () => {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home/>}/>
        <Route path="/hbo-go" element={<Hbogo/>}/>
        <Route path="/truyen-hinh" element={<Television/>}/>
        <Route path="/the-thao" element={<Sport/>}/>
        <Route path="/thieu-nhi" element={<Child/>}/>
        <Route path="/dang-ky" element={<Register/>}/>
        <Route path="/film-detail/:id" element={<Detailflim} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/hbo-go" element={<Hbogo />} />
        <Route path="/truyen-hinh" element={<Television />} />
        <Route path="/the-thao" element={<Sport />} />
        <Route path="/thieu-nhi" element={<Child />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/film-detail/:id" element={<DetailFilm />} />
>>>>>>> de9b82157c8db19a2d4636cb1bae864f5338f1b0
      </Routes>
    </>
  );
};

export default MainRouter;
