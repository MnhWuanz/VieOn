import React, { useState, useEffect } from 'react'
import DetailFilm from '../json/film-orignal.json'
import { useParams } from "react-router-dom";
import "../styles/detail-flim.css"
const Detailflim = () => {
    const {id}=useParams();
    const [dataFlimDetail, setDataFilmDetail] = useState({});
    const fetchDataFilmDetail = () => {
        const filterData = DetailFilm.filter((item) => item.id == Number(id))?.[0];
        setDataFilmDetail(filterData);
      };
    useEffect(()=>{
        fetchDataFilmDetail()
    },[id])
    console.log(dataFlimDetail);
  return (
    <div style={{ padding: 20 }}>
      {/* <h1>{dataFlimDetail.title}</h1>
      <p>{dataFlimDetail.description}</p> */}
      <div className="playvideo">
        <iframe  
         title={dataFlimDetail.title} src={dataFlimDetail.video} frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      </div>
      {/* <img src={dataFlimDetail.image} alt={dataFlimDetail.name} width={300} /> */}
    </div>
  )
}

export default Detailflim