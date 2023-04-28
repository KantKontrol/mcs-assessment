import React from "react";

const SICounter = ({ sensorAmount = 0, adjustSensoramount }) => {
  return (
    <div>
      <span>Total number of SI's: </span>
      <span style={{ fontWeight: "bold" }}>{sensorAmount}</span>
      <button onClick={() => adjustSensoramount(1)}>Increase</button>
      <button onClick={() => adjustSensoramount(-1)}>Decrease</button>
    </div>
  );
};

export default SICounter;
