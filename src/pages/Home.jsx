
import React from 'react'
import datafilm from '../json/film-orignal-1.json'
import Flim from '../components/flim'
import "../styles/flim.css"
const Home = () => {
  console.log("Data ở Home:", datafilm)
  return (
    <>
      {datafilm.map((item)=>{
        return(
          <Flim
            title={item.title}
            dataFilm={item.arrayFilm}
          />
        )
      })}
    </>
  );
};


export default Home;
