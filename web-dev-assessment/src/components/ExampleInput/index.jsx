import React from "react";

const ExampleInput = ({
  name,
  value,
  onFieldUpdate,
  pointNumber,
  disabled,
  textAlign,
  ...props
}) => {
  return (
    <input
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "yellow" : "white",
        width: "100%",
        height: "30px",
        border: "none",
        textAlign: textAlign ? textAlign : "center",
      }}
      name={name}
      value={value}
      onChange={({ target }) => onFieldUpdate(pointNumber, name, target.value)}
      {...props}
    />
  );
};

export default ExampleInput;
