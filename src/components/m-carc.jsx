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

export default Mcard;
