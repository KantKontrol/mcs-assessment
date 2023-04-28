import { adjustSensor } from "@/pages";
import React from "react";

const SICounter = ({ sensorAmount = 0, adjustSensoramount }) => {
  return (
    <div>
      <span>Total number of SI's: </span>
      <span style={{ fontWeight: "bold" }}>{sensorAmount}</span>
      <button onClick={() => adjustSensoramount(adjustSensor.INCREASE)}>
        Increase
      </button>
      <button onClick={() => adjustSensoramount(adjustSensor.DECREASE)}>
        Decrease
      </button>
    </div>
  );
};

export default SICounter;
