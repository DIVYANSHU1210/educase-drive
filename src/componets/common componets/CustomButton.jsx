import React from "react";

function CustomButton({ clickFunc, title, primary }) {
  return (
    <button
      className="custom-button"
      onClick={clickFunc}
      style={primary === true ?{ backgroundColor:  "rgb(108,37,255)", color:"white"} :{backgroundColor :"rgb(206,186,251)"}}
    >
      {title}
    </button>
  );
}

export default CustomButton;
