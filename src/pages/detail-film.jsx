import React, { useEffect, useState } from "react";
import dataFilm from "../json/film-orignal.json";
import { useParams } from "react-router-dom";
const DetailFilm = () => {
  const { id } = useParams();
  const [count, setCount] = useState(10);
  const [dataFilmDetail, setDataFilmDetail] = useState({});
  const fetchDataFilmDetail = () => {
    const filterData = dataFilm.filter((item) => item.id == Number(id))?.[0];
    setDataFilmDetail(filterData);
  };
  useEffect(() => {
    if (count < 1) {
      return;
    }
    setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  }, [count]);
  return <div>{count}</div>;
};

export default DetailFilm;
