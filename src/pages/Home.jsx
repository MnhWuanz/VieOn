import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Flim from "../components/flim";
import { Spin } from "antd";
import { getFilmService } from "../services/film.service";
import { motion } from "framer-motion";
const Home = ({ onAddToList }) => {
  const [arrayFilm, setArrayFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDataFilm = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await getFilmService();
        setArrayFilm(response.data);
      } catch (error) {
        alert("Lỗi server");
        setArrayFilm([]);
      } finally {
        setLoading(false);
      }
    }, 5000);
  };
  useEffect(() => {
    fetchDataFilm();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Spin spinning={loading}>
        {arrayFilm.map((item) => {
          return (
            <Flim
              title={item.title}
              dataFilm={item.arrayFilm}
              onAddToList={onAddToList}
            />
          );
        })}
      </Spin>
    </motion.div>
  );
};

export default Home;
