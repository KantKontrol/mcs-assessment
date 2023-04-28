import React from "react";

const ExampleDropdown = ({
  name,
  value,
  onFieldUpdate,
  pointNumber,
  disabled,
}) => {
  return (
    <select
      disabled={disabled}
      style={{ backgroundColor: disabled ? "yellow" : "white" }}
      name={name}
      value={value}
      onChange={({ target }) => onFieldUpdate(pointNumber, name, target.value)}
    >
      <option value="exampleoption1">Example option 1</option>
      <option value="exampleoption2">Example option 2</option>
      <option value="exampleoption3">Example option 3</option>
    </select>
  );
};

export default ExampleDropdown;
