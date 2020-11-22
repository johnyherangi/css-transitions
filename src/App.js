import React, { useState } from "react";
import "./styles.scss";

export default function App() {
  const overlayTransitions = [
    "overlay-left",
    "overlay-center",
    "overlay-right",
    "overlay-center"
  ];

  const [prevIndex, setPrevIndex] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Click below for CSS transitions!</h2>
      <button
        onClick={() => {
          setPrevIndex(index);
          setIndex((index + 1) % 4);
        }}
      >
        {`${overlayTransitions[prevIndex]} -> ${overlayTransitions[index]}`}
      </button>
      <div className="container">
        <div className={overlayTransitions[index]}>Overlay</div>
      </div>
    </div>
  );
}
