import React from 'react'
import "../styles/m-card.css"
const Mcard = () => {
    const arr=[
        {
            title:"Thịnh Hành",
            img:[
               "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/12/16/t2p6o82g_1920x1080-nhungkequansat_296_168.webp",
               "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/03/28/vnzmue1u_1920x1080-canhsattuantra_296_168.webp",
               "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/04/02/vub1cp8k_1920x1080-nhungconanglamchieu_296_168.webp",
            ],
        },
        {
            title:"Mới Nhất",
            img:[
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/04/02/ws60io53_1920x1080-jedgar_296_168.webp",
               "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/03/31/s97nhv78_1920x1080-nhungdieunhonhat_296_168.webp",
               "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/03/16/2a2xe5su_1920x1080-doisongbimatcuathucung_296_168.webp",
             ],
            
        },
        {
            title:"Cuộc Xâm lăng Của binh đoàn Robot",
            img:[
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/04/02/cvb6oz2i_1920x1080-bumblebee_296_168.webp",
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/11/19/cpiw0hov_1920x1080-vanhdaithaibinhduongbed6a0c58e6cc077095f67d256f5ac8d_296_168.webp",
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/03/06/ii6t0k9v_1920x1080-transformersone_296_168.webp",
             ],
        },
    ];
    return(
        <>
            {
                arr.map((item,index)=>{
                    if(index=arr.length-1){
                    }
                   return (
                        <>
                            <h3 className="title-card">{item.title}</h3>
                            <div className="container-card">
                                {item.img.map((image)=>{
                                    return(
                                        <div className="card-content">
                                        <span className="card-tag">HBO GO </span>
                                        <img className="card-img" src={image} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    );
                })
            }
           
            
        </>
    );
}

export default Mcard;