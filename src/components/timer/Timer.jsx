import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="timer_container">
      <h2>Timer</h2>
      <div className="content">
        <div className="box">
          <div className="value">
            <span>{counter}</span>
          </div>
          <span className="label">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
