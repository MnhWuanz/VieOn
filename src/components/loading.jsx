import React from "react";
import "../styles/loading.css";
const Loading = ({ fadeOut }) => {
  return (
    <div className={`loading-overlay ${fadeOut ? "fade-out" : ""}`}>
      <img
        src="https://play-lh.googleusercontent.com/ybWP3ZXnTGMfmZzc--Dt8LsCU8mtTh5VXWBFQU0Jf1225e-OSe-cdjsXXBb-p9BI1rui"
        alt="Loading..."
        className="logo-loading"
      />
    </div>
  );
};

export default Loading;
