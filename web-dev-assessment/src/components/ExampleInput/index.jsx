import React from "react";

const ExampleInput = ({
  name,
  value,
  onFieldUpdate,
  pointNumber,
  disabled,
}) => {
  return (
    <input
      disabled={disabled}
      style={{ backgroundColor: disabled ? "yellow" : "white" }}
      name={name}
      value={value}
      onChange={({ target }) => onFieldUpdate(pointNumber, name, target.value)}
    />
  );
};

export default ExampleInput;
