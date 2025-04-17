import React, { useEffect, useState } from "react";
import dataFilm from "../json/film-orignal.json";
import "../styles/home.css";
import ShowFilm from "../components/show-film";
import dataFilmTest from "../json/film-new.json";
const Home = () => {
  const functionConvertData = () => {
    const convertData = dataFilmTest.map((item) => ({
      topic: item.topic,
      data: item,
    }));
    const filterData = convertData.filter((item) => item.topic);
    const data = filterData.reduce((acc, cur) => {
      const { topic, data } = cur;
      if (!acc[topic]) {
        acc[topic] = { topic, data: [] };
      }
      acc[topic].data.push(data);
      return acc;
    }, {});
    console.log({ data });
  };
  const [arrayFilm, setArrayFilm] = useState([]);
  useEffect(() => {
    setArrayFilm(dataFilm);
    functionConvertData();
  }, []);
  return (
    <>
      {arrayFilm.map((item) => {
        return <ShowFilm title={item.title} dataFilm={item.arrayFilm} />;
      })}
    </>
  );
};

export default Home;
