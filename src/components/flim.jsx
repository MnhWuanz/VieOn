import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import Mcard from './m-carc';
import '../styles/flim.css'
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
const Flim = ({title,dataFilm}) => {
  const navigate=useNavigate();
  const toSlug = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")                  // tách dấu
      .replace(/[\u0300-\u036f]/g, "")  // xóa dấu
      .replace(/[^a-z0-9\s-]/g, "")     // xóa ký tự đặc biệt
      .trim()
      .replace(/\s+/g, "-");            // thay space bằng dấu gạch ngang
  };
  return (
    <div>
      <div className="header" onClick={()=>navigate(`/${toSlug(title)}`,{state:{title}})}>
        <h3 className="title">{title ?? "Xem phim"}</h3>
            <span className="show-all">Xem tất cả </span>
      </div>
      <div style={{ padding: "24px" }}>
        <Swiper
          modules={[Navigation,Pagination]}
          spaceBetween={12} // Khoảng cách giữa các phần tử
          slidesPerView={4} // Hiển thị 6 phần tử mỗi lần
          grabCursor={true}
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
              dataFilm.map((item,index) => (
                <SwiperSlide key={item.id} style={{ height: "220px",width:"160px" }}>
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
                    news={item.news}
                    positionClass={index ==0 ? "first-item" :"last-item"}
                  />
                </SwiperSlide>
              ))
            ) : (
              <>Không có phim</>
            )}
        </Swiper>
      </div>
    </div>
    
  )
}

export default Flim