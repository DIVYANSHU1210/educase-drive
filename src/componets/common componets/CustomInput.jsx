import React from "react";
import "./style.css"

function CustomInput({ labelName, changeFunc, value, type, required, star }) {
  return (
    <div className="custom-input">
      <label>
        {labelName}
        <span>{required === true ? "*" : ""}</span>
      </label>
      <input
        value={value}
        onChange={(e) => {
          changeFunc(e.target.value);
        }}
        type={type}
        required="required"
      ></input>
    </div>
  );
}

export default CustomInput;
