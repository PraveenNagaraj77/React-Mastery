import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  console.log(timerRef);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  function startTimer() {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    clearInterval(timerRef.current);

    timerRef.current = null;

    setTime(0);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <br />
      <h2>{time}</h2>
      <br />
      <button onClick={startTimer}>Start</button>

      <button onClick={stopTimer}>Stop</button>

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
