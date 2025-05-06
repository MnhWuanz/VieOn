import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
//initValue: object array number string any
const Feedback = () => {
  const [comment, setComment] = useState("");
  const [listFeedBack, setListFeedback] = useState([]);
  const handleFeedback = () => {
    setListFeedback([...listFeedBack, comment]);
    setComment("");
    alert("Ban da binh luan phim");
    const dataSaveLocalStorage = [...listFeedBack, comment];
    localStorage.setItem("dataFeedback", JSON.stringify(dataSaveLocalStorage));
  };
  useEffect(() => {
    const dataFeedback = JSON.parse(localStorage.getItem("dataFeedback"));
    setListFeedback(dataFeedback);
  }, []);
  return (
    <div>
      <h3>Bình luận ngay</h3>
      <div className="list-feedback">
        <ul>
          {listFeedBack.map((item) => {
            return (
              <>
                <li>{item}</li>
              </>
            );
          })}
        </ul>
      </div>
      <Input
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Nhập bình luận"
      />
      <Button onClick={handleFeedback}>Binh Luan</Button>
    </div>
  );
};

export default Feedback;
