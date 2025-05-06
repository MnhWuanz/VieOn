import React, { useState } from "react";
import "../styles/m-card.css";
import { useNavigate } from "react-router-dom";
const Mcard = ({
  vip,
  id,
  video,
  top,
  image,
  title,
  news,
  hbo,
  year,
  duration,
  quality,
  positionClass,
  onAddToList,
}) => {
  console.log(typeof onAddToList);
  const navigate = useNavigate();
  const [isHover, setisHover] = useState(false);
  return (
    <div className={`m-card-container ${positionClass}`}>
      <div className="card-content">
        {vip && <span className="card-tag">VIP</span>}
        {top && (
          <span className="card-top">
            Top <br />
            <span className="number">{top}</span>
          </span>
        )}
        {news && (
          <div className="card-new">
            <span className="new">Tập mới</span>
            <span>Mỗi Tuần</span>
          </div>
        )}
        <img className="card-img" src={image} alt={title} />
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
            <button className="btn" onClick={onAddToList}>
              + Danh sách
            </button>
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
