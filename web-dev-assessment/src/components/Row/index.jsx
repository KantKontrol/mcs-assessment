import React from "react";
import ExampleInput from "../ExampleInput";
import ExampleDropdown from "../ExampleDropdown";
import Toggle from "../Toggle";

const Row = ({
  pointNumber,
  name,
  displayType,
  offset,
  manualValue,
  displayText,
  temp,
  humd,
  manual,
  onFieldUpdate,
  disabled,
}) => {
  return (
    <tr
      style={{
        backgroundColor: disabled ? "yellow" : "gray",
        lineHeight: "15px",
      }}
    >
      <td>{pointNumber}</td>
      <td>
        <ExampleInput
          name="name"
          value={name}
          onFieldUpdate={onFieldUpdate}
          pointNumber={pointNumber}
          disabled={disabled}
        />
      </td>
      <td>
        <ExampleDropdown
          name="displayType"
          value={displayType}
          onFieldUpdate={onFieldUpdate}
          pointNumber={pointNumber}
          disabled={disabled}
        />
      </td>
      <td>
        <ExampleInput
          name="offset"
          value={offset}
          onFieldUpdate={onFieldUpdate}
          pointNumber={pointNumber}
          disabled={disabled}
        />
      </td>
      <td>
        <ExampleInput
          name="manualValue"
          value={manualValue}
          onFieldUpdate={onFieldUpdate}
          pointNumber={pointNumber}
          disabled={disabled}
        />
      </td>
      <td>
        <ExampleDropdown
          name="displayText"
          value={displayText}
          onFieldUpdate={onFieldUpdate}
          pointNumber={pointNumber}
          disabled={disabled}
        />
      </td>
      <td>
        <ExampleDropdown
          name="temp"
          value={temp}
          onFieldUpdate={onFieldUpdate}
          pointNumber={pointNumber}
          disabled={disabled}
        />
      </td>
      <td>
        <ExampleDropdown
          name="humd"
          value={humd}
          onFieldUpdate={onFieldUpdate}
          pointNumber={pointNumber}
          disabled={disabled}
        />
      </td>
      <td>
        <Toggle
          name="manual"
          value={manual}
          pointNumber={pointNumber}
          onFieldUpdate={onFieldUpdate}
          disabled={disabled}
        />
      </td>
    </tr>
  );
};

export default Row;
