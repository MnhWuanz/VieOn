import React from "react";
import Mcard from "../components/m-carc";
import dataFilm from "../json/film-orignal.json";
const Home = () => {
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
      {dataFilm.map((item) => (
        <Mcard
          vip={item.vip}
          id={item.id}
          video={item.video}
          top={item.top}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Home;
