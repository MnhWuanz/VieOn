import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const listMenu = [
    { label: "Trang chủ", url: "/" },
    { label: "Truyền hình", url: "truyen-hinh" },
    { label: "HBO GO", url: "hbo-go" },
    { label: "Thể thao", url: "the-thao" },
  ];
  const navigate = useNavigate();
  return (
    <div
      className="header-container"
      style={{ display: "flex", background: "white", alignItems: "center" }}
    >
      <div>
        <img
          width={"100"}
          height={"100"}
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div className="navigate">
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            color: "black",
            gap: 24,
            cursor: "pointer",
          }}
        >
          {listMenu.map((item) => {
            return (
              <Link to={item.url} style={{ fontSize: "32px" }}>
                {item.label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button onClick={() => navigate("/login")}>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Header;
