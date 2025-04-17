import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/home.css";
import Mcard from "./m-carc";
import "../styles/showFilm.css";
const ShowFilm = ({ title, dataFilm }) => {
  //if else = ? :
  //if else if else = ? : ? :
  return (
    <div>
      <div className="header">
        <h3 className="title">{title ?? "Xem phim"}</h3>
        <span className="show-all">Xem tất cả </span>
      </div>
      <div style={{ padding: "24px" }}>
        <Swiper
          spaceBetween={12} // Khoảng cách giữa các phần tử
          slidesPerView={4} // Hiển thị 6 phần tử mỗi lần
          navigation // Điều hướng next/prev
          pagination={{ clickable: true }} // Pagination cho phép bấm vào các điểm chỉ số trang
          breakpoints={{
            1024: {
              slidesPerView: 4, // Ở độ phân giải lớn hơn 1024px, hiển thị 3 phần tử
            },
            768: {
              slidesPerView: 2, // Ở độ phân giải từ 768px trở xuống, hiển thị 2 phần tử
            },
            480: {
              slidesPerView: 1, // Ở độ phân giải từ 480px trở xuống, hiển thị 1 phần tử
            },
          }}
        >
          {dataFilm?.length > 0 ? (
            dataFilm.map((item) => (
              <SwiperSlide key={item.id} style={{ height: "220px" }}>
                <Mcard
                  index={item.id}
                  year={item.year}
                  duration={item.duration}
                  quality={item.quality}
                  vip={item.vip}
                  id={item.id}
                  video={item.video}
                  top={item.top}
                  image={item.image}
                />
              </SwiperSlide>
            ))
          ) : (
            <>Không có phim</>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ShowFilm;
