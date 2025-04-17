import React, { useState, useEffect } from 'react'
import DetailFilm from '../json/film-orignal.json'
import { useParams } from "react-router-dom";
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
  return (
    <div style={{ padding: 20 }}>
      <h1>{dataFlimDetail.name}</h1>
      <p>{dataFlimDetail.description}</p>
      <img src={dataFlimDetail.image} alt={dataFlimDetail.name} width={300} />
    </div>
  )
}

export default Detailflim