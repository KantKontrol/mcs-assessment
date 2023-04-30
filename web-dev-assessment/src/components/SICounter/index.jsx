import { adjustSensor } from "@/pages";
import React from "react";

const SICounter = ({ sensorAmount = 0, adjustSensoramount }) => {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        padding: "1px",
        backgroundColor: "lightgray",
        border: "1px solid black",
      }}
    >
      <span style={{ flex: 3 }}>Total number of SI's: </span>
      <span style={{ fontWeight: "bold", flex: 1, textAlign: "center" }}>
        {sensorAmount}
      </span>
      <button
        style={{ flex: 1, fontWeight: "bolder" }}
        onClick={() => adjustSensoramount(adjustSensor.DECREASE)}
      >
        {"<"}
      </button>
      <button
        style={{ flex: 1, fontWeight: "bolder" }}
        onClick={() => adjustSensoramount(adjustSensor.INCREASE)}
      >
        {">"}
      </button>
    </div>
  );
};

export default SICounter;
