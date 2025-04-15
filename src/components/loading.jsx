import React from "react";
import "../styles/loading.css";
const Loading = () => {
  return (
    <div className="loading-container">
      <div class="loader">
        <span class="loader-text">loading</span>
        <span class="load"></span>
      </div>
    </div>
  );
};

export default Loading;
