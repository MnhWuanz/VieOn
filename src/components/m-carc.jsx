<<<<<<< HEAD
import React, { useState } from 'react'
import "../styles/m-card.css"
import { useNavigate } from "react-router-dom";
const Mcard = ({ vip, id, video, top, image,title }) => {
    const navigate=useNavigate()
    const [isHover,setIsHover]=useState(false);
    return(
        <div className='content' onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <div className='view'>
                <div className="container-card">
                    <div className="card-content">
                        <span className="card-tag">{top} </span>
                        <img className="card-img" src={image} alt=""/>
                    </div>     
                </div>   
            </div>
            {isHover && (
                <div className='hover-card'>
                <iframe
                    width="500"
                    height="270"
                    src={`${video}&autoplay=1&mute=1&controls=0&loop=1`}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                <button onClick={() => navigate(`/film-detail/${id}`)}>XEM NGAY</button>
                </div>
            )}
        </div>
    );
}
=======
import React from "react";
import "../styles/m-card.css";
import { useNavigate } from "react-router-dom";
const Mcard = ({ vip, id, video, top, image }) => {
  const navigate = useNavigate();
  return (
    <div className="m-card-container">
      <div className="card-content">
        {vip && <span className="card-tag">VIP</span>}
        <img className="card-img" src={image} alt="" />
        <span className="card-top">Top {top}</span>
      </div>
      <div className="hover-video">
        <iframe src={video} className="video"></iframe>
        <button onClick={() => navigate(`/film-detail/${id}`)}>Xem ngay</button>
      </div>
    </div>
  );
};
>>>>>>> de9b82157c8db19a2d4636cb1bae864f5338f1b0

export default Mcard;
