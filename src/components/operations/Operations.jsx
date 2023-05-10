import React, { useState } from "react";
import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";
import "./operations.css";

const Operations = () => {
    const [result, setResult] = useState("");

    function handleClick(value) {
      setResult(result + value);
    }

    function handleClear() {
      setResult("");
    }

    function handleEqual() {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
  }
  
  return (
    <div className="btn_container">
      <button className="operation_btn" onClick={() => handleClick("+")}>
        <FaPlus className="btn_icon" />
      </button>
      <button className="operation_btn" onClick={() => handleClick("-")}>
        <FaMinus />
      </button>
      <button className="operation_btn" onClick={() => handleClick("*")}>
        <FaTimes />
      </button>
      <button className="operation_btn" onClick={() => handleClick("/")}>
        <FaDivide />
      </button>
    </div>
  );
};

export default Operations;
