import Table from "../components/Table";
import Row from "../components/Row";
import { useEffect, useState } from "react";
import SICounter from "@/components/SICounter";

export const adjustSensor = {
  INCREASE: "increase",
  DECREASE: "decrease",
};
const HEADERS = [
  "Point Number",
  "Name",
  "Display Type",
  "Offset",
  "Manual Value",
  "Display Text",
  "Temperature",
  "Humidity",
  "Auto/Manual",
];

const MAX_NUMBER_OF_ROWS = 112;

export default function Home() {
  const [rows, setRows] = useState([]);
  const [siAmount, setSiAmount] = useState(20);

  const generateRows = () => {
    let rowGen = [];

    for (let i = 0; i != MAX_NUMBER_OF_ROWS; i++) {
      rowGen.push({
        pointNumber: i + 1,
        name: "defaultName",
        displayType: "exampleDisplay",
        offset: "0",
        manualValue: "0",
        displayText: "Not Used",
        temp: "Not Used",
        humd: "Not Used",
        manual: false,
      });
    }

    return rowGen;
  };

  useEffect(() => {
    setRows(generateRows());
  }, []);

  useEffect(() => {
    console.log(rows);
  }, [rows]);

  const adjustSensorAmount = (adjustType) => {
    if (
      adjustType === adjustSensor.INCREASE &&
      siAmount != MAX_NUMBER_OF_ROWS
    ) {
      setSiAmount(siAmount + 1);
    }

    if (adjustType === adjustSensor.DECREASE && siAmount > 0) {
      setSiAmount(siAmount - 1);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <SICounter
        sensorAmount={siAmount}
        adjustSensoramount={adjustSensorAmount}
      />
      <Table headers={HEADERS}>
        {rows
          ? rows.map((row) => (
              <Row key={row.pointNumber} pointNumber={row.pointNumber} disabled={row.pointNumber > siAmount} />
            ))
          : null}
      </Table>
    </div>
  );
}
// rows.forEach((value, key) => <Row key={key} pointNumber={key} />
