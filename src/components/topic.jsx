import React, { use, useState } from 'react'
import DetailFilm from '../json/film-orignal.json'
import { useLocation, useParams } from 'react-router-dom'
const Topic = () => {
    const {title}=useParams();
    const[isdata,setData]=useState({})
    const {state}=useLocation();
    console.log({title})
  return (
    <div>
        <div className="header">
        <h3 className="title">{state?.title || "Không có dữ liệu"}</h3> 
        </div>
  
        {isdata ?.lenght >0 ?{
        }:(<>
        Không có phim
        </>)}
    </div>
  )
}

export default Topic