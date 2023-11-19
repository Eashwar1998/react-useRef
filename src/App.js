import React, { useState, useRef } from "react";
import "./style.css";

export default function App() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const ref = useRef(null);
  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(ref.current);
  };
  let sp = 0;
  if (start !== null && now !== null) {
    sp = (now - start) / 1000;
  }
  return (
    <div>
      <p>
        Elasped Time : asd<span>{sp.toFixed(3)}</span>
        changes from br1
      </p>
      <p>Changes from br2</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <p>Changes from br3</p>
    </div>
  );
}
