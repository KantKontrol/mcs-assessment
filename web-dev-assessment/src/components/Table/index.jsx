import React from "react";

const Table = ({ headers, ...props }) => {
  return (
    <table style={{ borderSpacing: "5px 5px" }}>
      <caption style={{ backgroundColor: "lightgray", height: "40px" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Sensor Input Information Screen</h2>
        </div>
      </caption>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;
