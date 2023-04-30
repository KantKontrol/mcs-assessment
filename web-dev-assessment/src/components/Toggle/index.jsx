import React from "react";

const Toggle = ({ name, value, onFieldUpdate, pointNumber, disabled }) => {
  return (
    <span
      style={{
        backgroundColor: disabled ? "yellow" : value ? "lightgray" : "red",
        display: "flex",
        width: "100%",
        height: "30px",
        border: "none",
        alignItems: "center",
      }}
    >
      <p style={{ flex: 3, textAlign: "center" }}>
        {value ? "Auto" : "Manual OFF"}
      </p>
      <button
        style={{ flex: 1, height: "100%" }}
        disabled={disabled}
        onClick={() => onFieldUpdate(pointNumber, name, !value)}
      >
        ...
      </button>
    </span>
  );
};

export default Toggle;
