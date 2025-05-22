import React, { useEffect, useState } from "react";

//initValue: [], {}, number, string, boolean
//javascript k rang buoc kieu du lieu
const Hbogo = () => {
  const [count, setCount] = useState(0);
  const handleUpCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    //goi api
    console.log("chay vao day");
  }, [count]);
  return (
    <div>
      <button onClick={() => handleUpCount()}>Click now</button>
      <div style={{ fontSize: "30px" }}>{count}</div>
    </div>
  );
};

export default Hbogo;
