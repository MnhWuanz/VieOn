
import React from 'react'
import Mcard from '../components/m-carc'
import datafilm from '../json/film-orignal.json'
const Home = () => {
  return (
    <div style={{display:"flex",marginTop:"20px",gap:"12"}}>
      {datafilm.map((item) => (
      <Mcard
        key={item.id}
        vip={item.vip}
        image={item.image}
        title={item.title}
        top={item.top}
        id={item.id}
        video={item.video}
      />
))}
    </div>
  )
}


export default Home;
