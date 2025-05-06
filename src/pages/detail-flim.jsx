import React, { useState, useEffect } from 'react'
import DetailFilm from '../json/film-orignal.json'
import { useParams } from "react-router-dom";
import "../styles/detail-flim.css"
import Feedback from '../components/feedback';
const Detailflim = () => {
    const {id}=useParams();
    const [dataFlimDetail, setDataFilmDetail] = useState({});
    const fetchDataFilmDetail = () => {
        DetailFilm.map((item) => {
          const data = item.arrayFilm.filter((item) => item.id === Number(id))
          if(data.length > 0) {
            setDataFilmDetail(data?.[0]);
          }
        } )
       
      };
    useEffect(()=>{
        fetchDataFilmDetail()
    },[id])
  return (
    <div style={{ padding: 20 }}>
  
      <div className="playvideo">
        <iframe  
         title={dataFlimDetail?.title} src={dataFlimDetail?.video} frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      </div>

      <Feedback/>
    </div>
  )
}

export default Detailflim