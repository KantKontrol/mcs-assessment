import React from "react";

const Table = ({ headers, ...props }) => {
  return (
    <table style={{ borderSpacing: "5px 5px" }}>
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
