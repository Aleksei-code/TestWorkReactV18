import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialCounters = [
    { id: 0, name: "Not useful thing", value: 2 },
    { id: 1, name: "Plant", value: -70 },
    { id: 2, name: "Apple", value: 2 },
    { id: 3, name: "Knife", value: 0 },
    { id: 4, name: "Fork", value: 0 },
  ];
  const [counters, setCounters] = useState(initialCounters);

  const setCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleCounterIncrement = (id) => {
    let temp;
    temp = counters.map(function (c) {
      if (c.id === id) {
        c.value += 1;
      }
      return c;
    });
    setCounters(temp);
  };

  const handleCounterDecrement = (id) => {
    let temp;
    temp = counters.map(function (c) {
      if (c.id === id) {
        if (c.value <= 0) {
        } else {
          c.value -= 1;
        }
      }
      return c;
    });
    setCounters(temp);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          onIncrement={handleCounterIncrement}
          onDecrement={handleCounterDecrement}
          onDelete={setCounter}
          key={counter.id}
          {...counter}
        />
      ))}
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            setCounters(initialCounters);
          }}
        >
          Reset counters
        </button>
      </div>
    </>
  );
};

export default CountersList;
