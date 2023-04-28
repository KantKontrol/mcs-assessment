import React from "react";

const Toggle = ({ name, value, onFieldUpdate, pointNumber, disabled }) => {
  return (
    <div
      style={{ backgroundColor: disabled ? "yellow" : value ? "white" : "red" }}
    >
      <span>{value ? "Auto" : "Manual OFF"}</span>
      <button
        disabled={disabled}
        onClick={() => onFieldUpdate(pointNumber, name, !value)}
      >
        ...
      </button>
    </div>
  );
};

export default Toggle;
