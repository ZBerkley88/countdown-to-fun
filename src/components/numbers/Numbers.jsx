import React, { useState } from "react";
import "./numbers.css"

const Numbers = () => {
  const [smallNumbers, setSmallNumbers] = useState([
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
  ]);
  const [largeNumbers, setLargeNumbers] = useState([25, 50, 75, 100]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

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

  function removeSelectedNumber(index) {
    const newSelectedNumbers = [...selectedNumbers];
    newSelectedNumbers.splice(index, 1);
    setSelectedNumbers(newSelectedNumbers);
  }

  return (
    <div>
      <button onClick={handleSmallClick}>Add a small number</button>
      <button onClick={handleLargeClick}>Add a large number</button>
      <div className="button_container">
        {selectedNumbers.map((number, index) => (
          <div className="number_btn" key={index}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
