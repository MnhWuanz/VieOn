<<<<<<< HEAD
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
=======
import React from "react";
import { Link, useNavigate } from "react-router-dom";
>>>>>>> de9b82157c8db19a2d4636cb1bae864f5338f1b0
import "../styles/header.css";
import Register from '../pages/register';
const Header = () => {
<<<<<<< HEAD
  const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
     setIsModalOpen(true);
   };
  const listMenu=[
=======
  const listMenu = [
>>>>>>> de9b82157c8db19a2d4636cb1bae864f5338f1b0
    {
      label: "Trang chủ",
      url: "/",
    },
    {
      label: "Truyền hình",
      url: "truyen-hinh",
    },
    {
      label: "HBO GO",
      url: "hbo-go",
    },
    {
      label: "Thể Thao",
      url: "the-thao",
    },
    {
      label: "Thiếu nhi",
      url: "thieu-nhi",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="logo">
        <img
          src="https://play-lh.googleusercontent.com/ybWP3ZXnTGMfmZzc--Dt8LsCU8mtTh5VXWBFQU0Jf1225e-OSe-cdjsXXBb-p9BI1rui"
          alt=""
        />
      </div>
      <div className="menu">
        <ul>
          {listMenu.map((item) => {
            return <Link to={item.url}>{item.label}</Link>;
          })}
        </ul>
      </div>
      <div className="form">
<<<<<<< HEAD
          <button onClick={()=>{
            navigate("/dang-ky");showModal();
          }}>Đăng ký</button>
          {isModalOpen && (<Register formopen={isModalOpen} setformopen={setIsModalOpen}/>)}
=======
        <button
          onClick={() => {
            navigate("/dang-ky");
          }}
        >
          Đăng ký
        </button>
>>>>>>> de9b82157c8db19a2d4636cb1bae864f5338f1b0
      </div>
    </div>
  );
};

export default Header;
