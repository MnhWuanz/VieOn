import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/header.css";
import Register from '../pages/register';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
     setIsModalOpen(true);
   };
  const listMenu=[
    {

      label:"Trang chủ",url:"/",
    },
    {
      label:"Truyền hình",url:"truyen-hinh",
    },
    {
      label:"HBO GO",url:"hbo-go",
    },
    {
      label:"Thể Thao",url:"the-thao",
    },
    {
      label:"Thiếu nhi",url:"thieu-nhi",
    },
  ];
  const navigate=useNavigate();
  return (
    <div className='header-container' >
      <div className='logo'>
        <img src="https://play-lh.googleusercontent.com/ybWP3ZXnTGMfmZzc--Dt8LsCU8mtTh5VXWBFQU0Jf1225e-OSe-cdjsXXBb-p9BI1rui" alt="" />
      </div>
      <div className='menu'>
        <ul>
          {listMenu.map((item)=>{
            return(
              <Link to={item.url}>
                {item.label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="form">
          <button onClick={()=>{
            navigate("/dang-ky");showModal();
          }}>Đăng ký</button>
          {isModalOpen && (<Register formopen={isModalOpen} setformopen={setIsModalOpen}/>)}
      </div>
    </div>
  )
}

export default Header