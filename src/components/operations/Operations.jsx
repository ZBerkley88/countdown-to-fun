import React, { useState } from "react";
import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";
import "./operations.css";

const Operations = () => {
  return (
    <div className="button_container">
      <button className="btn">
        <FaPlus className="btn_icon" />
      </button>
      <button className="btn">
        <FaMinus />
      </button>
      <button className="btn">
        <FaTimes />
      </button>
      <button className="btn">
        <FaDivide />
      </button>
    </div>
  );
};

export default Operations;
