import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = ({ numberFlim }) => {
  const listMenu = [
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
  const [user, setuser] = useState(null);
  useEffect(() => {
    const storedUse = localStorage.getItem("user");
    if (storedUse) {
      setuser(JSON.parse(storedUse));
    }
  }, []);
  const handelLogout = () => {
    localStorage.removeItem("user");
    alert("Đăng xuất thành công");
    setuser(null);
    navigate("/");
  };
  return (
    <div className="header-container">
      <div className="logo" onClick={() => navigate("/")}>
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
        {user ? (
          <button onClick={handelLogout}>Đăng xuất</button>
        ) : (
          <button onClick={() => navigate("/login")}>Đăng Nhập</button>
        )}
      </div>
      <div className="favortie-flim" onClick={() => navigate("/playlist")}>
        <div className="img-icon" style={{ width: "50px", height: "50px" }}>
          <img
            style={{ width: "100%" }}
            src="https://cdn-icons-png.flaticon.com/512/5075/5075090.png"
            alt="Lỗi"
            srcset=""
          />
        </div>
        <div className="number-tag">{numberFlim}</div>
      </div>
    </div>
  );
};

export default Header;
