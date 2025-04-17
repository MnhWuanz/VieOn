import React from "react";
import "../styles/m-card.css";
import { useNavigate } from "react-router-dom";

const Mcard = ({
  vip,
  id,
  video,
  top,
  image,
  title,
  year,
  duration,
  quality,
  index,
  positionClass,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`m-card-container ${positionClass}`}>
      <div className="card-content">
        {vip && <span className="card-tag">VIP</span>}
        <img className="card-img" src={image} alt={title} />
        {top && <span className="card-top">Top {top}</span>}
      </div>

      <div className="hover-video">
        <div
          className="hover-background"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="hover-info">
          <div className="hover-controls">
            <button
              className="btn btn-watch"
              onClick={() => navigate(`/film-detail/${id}`)}
            >
              ▶ Xem ngay
            </button>
            <button className="btn">+ Danh sách</button>
            <button className="btn">ⓘ Chi tiết</button>
          </div>
          <div className="hover-meta">
            <span>{year}</span>
            <span>•</span>
            <span>{duration}</span>
            <span>•</span>
            <span>{quality}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcard;
