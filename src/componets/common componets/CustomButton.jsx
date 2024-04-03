import React from "react";

function CustomButton({ clickFunc, title, primary }) {
  return (
    <button
      onClick={clickFunc}
      style={{ backgroundColor: primary === true ? "red" : "blue" }}
    >
      {title}
    </button>
  );
}

export default CustomButton;
