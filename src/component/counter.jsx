import React, { useState } from "react";

const Counter = () => {
  const [state, changeState] = useState(0);
  const changeStatePlus = () => {
    changeState(state + 1);
  };
  const changeStateMinus = () => {
    changeState(state - 1);
  };
  return (
    <>
      <h1>HI THERE</h1>
      <h1> {state} </h1>
      <button
        onClick={() => {
          changeStateMinus();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          changeStatePlus();
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
