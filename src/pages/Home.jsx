<<<<<<< HEAD
import React from 'react'
import Mcard from '../components/m-carc'
import datafilm from '../json/film-orignal.json'
const Home = () => {
  return (
    <div style={{display:"flex",marginTop:"20px",gap:"12"}}>
      {datafilm.map((item) => (
      <Mcard
        key={item.id}
        vip={item.vip}
        image={item.image}
        title={item.title}
        top={item.top}
        id={item.id}
        video={item.video}
      />
))}
    </div>
  )
}
=======
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
>>>>>>> de9b82157c8db19a2d4636cb1bae864f5338f1b0

export default Home;
