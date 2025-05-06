import React, { useEffect, useState } from "react";
import dataFilm from "../json/film-orignal.json";
import "../styles/home.css";
import dataFilmTest from "../json/film-new.json";
import datafilm from "../json/film-orignal-1.json";
import Flim from "../components/flim";
const Home = ({ onAddToList }) => {
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
      <>
        {datafilm.map((item) => {
          return (
            <Flim
              title={item.title}
              dataFilm={item.arrayFilm}
              onAddToList={onAddToList}
            />
          );
        })}
      </>
    </>
  );
};

export default Home;
