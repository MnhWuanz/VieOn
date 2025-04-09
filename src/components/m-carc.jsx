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
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/12/16/t2p6o82g_1920x1080-nhungkequansat_296_168.webp",
               "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/03/28/vnzmue1u_1920x1080-canhsattuantra_296_168.webp",
               "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/04/02/vub1cp8k_1920x1080-nhungconanglamchieu_296_168.webp",
             ],
            
        },
        {
            title:"Cuộc Xâm lăng Của binh đoàn Robot",
            img:[
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/12/16/t2p6o82g_1920x1080-nhungkequansat_296_168.webp",
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/03/28/vnzmue1u_1920x1080-canhsattuantra_296_168.webp",
                "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/04/02/vub1cp8k_1920x1080-nhungconanglamchieu_296_168.webp",
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