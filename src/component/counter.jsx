import React from "react";

const Counter = (props) => {
  const renderCounter = () => {
    return props.value === 0 ? "Empty" : <> {props.value} </>;
  };

  const getClass = () => {
    let baseClass = "badge m-2 ";
    if (props.value === 0) {
      baseClass += "bg-warning";
      return baseClass;
    } else {
      baseClass += "bg-primary";
      return baseClass;
    }
  };

  return (
    <div>
      {props.name}
      <span className={getClass()}>{renderCounter()}</span>

      <button
        className="btn btn-primary btn-sm m-1"
        onClick={() => {
          props.onIncrement(props.id);
        }}
      >
        +
      </button>
      <button
        className={
          props.value === 0
            ? "btn btn-secondary btn-sm m-1"
            : "btn btn-danger btn-sm m-1"
        }
        onClick={() => {
          props.onDecrement(props.id);
        }}
      >
        -
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
