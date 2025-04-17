import React from "react";

const Child = ({ formDataProps, setFormDataProps }) => {
  return (
    <div>
      <button onClick={() => setFormDataProps({ child: "abc" })}>Click</button>
    </div>
  );
};

export default Child;
