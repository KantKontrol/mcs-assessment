import React from "react";

const ExampleDropdown = ({
  name,
  value,
  onFieldUpdate,
  pointNumber,
  disabled,
  ...props
}) => {
  return (
    <select
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "yellow" : "white",
        width: "100%",
        height: "30px",
        border: "none",
      }}
      name={name}
      value={value}
      onChange={({ target }) => onFieldUpdate(pointNumber, name, target.value)}
      {...props}
    >
      <option value="exampleoption1">Example option 1</option>
      <option value="exampleoption2">Example option 2</option>
      <option value="exampleoption3">Example option 3</option>
    </select>
  );
};

export default ExampleDropdown;
