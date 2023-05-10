import React, { useState } from "react";
import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";
import "./numbers.css";

const Numbers = () => {
  const [smallNumbers, setSmallNumbers] = useState([
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
  ]);
  const [largeNumbers, setLargeNumbers] = useState([25, 50, 75, 100]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // ================== NUMBER SELECTION ==================
  function handleSmallClick() {
    if (selectedNumbers.length >= 6) return;
    // prevent adding more than 6 cards
    const randomIndex = Math.floor(Math.random() * smallNumbers.length);
    // grabs a random index from the smallNumbers array
    const selectedNumber = smallNumbers[randomIndex];
    // grabs a number based on the randomIndex from the previous line
    setSmallNumbers(
      smallNumbers.filter((number, index) => index !== randomIndex)
    );
    setSelectedNumbers([...selectedNumbers, selectedNumber]);
  }

  function handleLargeClick() {
    if (selectedNumbers.length >= 6 || largeNumbers.length === 0) return;
    // prevent adding more than 6 cards
    const randomIndex = Math.floor(Math.random() * largeNumbers.length);
    // grabs a random index from the largeNumbers array
    const selectedNumber = largeNumbers[randomIndex];
    // grabs a number based on the randomIndex from the previous line
    setLargeNumbers(
      largeNumbers.filter((number, index) => index !== randomIndex)
    );
    setSelectedNumbers([...selectedNumbers, selectedNumber]);
  }

  // ================== CALCULATOR ==================
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
    <div>
      {/* ================== NUMBER SELECTION ================== */}
      <div className="card_container">
        <button className="select_btn" onClick={handleSmallClick}>
          Add a small number
        </button>
        <button className="select_btn" onClick={handleLargeClick}>
          Add a large number
        </button>
      </div>

      {/* ================== RESULT ================== */}
      <div className="result_container">{result}</div>

      {/* ================== SELETED NUMBERS ================== */}
      <div className="btn_container">
        {selectedNumbers.map((number, index) => (
          <div className="number_btn" key={index}>
            {number}
          </div>
        ))}
      </div>

      {/* ================== OPERATIONS ================== */}
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
    </div>
  );
};

export default Numbers;
