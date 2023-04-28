import React from "react";

const Row = ({ pointNumber, onDataUpdate, disabled }) => {
  return (
    <tr style={{ backgroundColor: disabled ? "yellow" : "gray" }}>
      <td>{pointNumber}</td>
      <td>
        <input
          name="name"
          value="test"
          onChange={({ target }) =>
            onDataUpdate(pointNumber, "name", target.value)
          }
        />
      </td>
      <td>
        <select>
          <option value="exampleoption1" selected>
            Example option 1
          </option>
          <option value="exampleoption2">Example option 2</option>
          <option value="exampleoption3">Example option 3</option>
        </select>
      </td>
      <td>
        <input
          name="offset"
          value="test"
          onChange={({ target }) =>
            onDataUpdate(pointNumber, "offset", target.value)
          }
        />
      </td>
      <td>
        <input
          name="manualval"
          value="test"
          onChange={({ target }) =>
            onDataUpdate(pointNumber, "manualval", target.value)
          }
        />
      </td>
      <td>
        <select name="displaytext">
          <option value="notused" selected>
            Not used
          </option>
          <option value="exampleoption1">Example option 1</option>
          <option value="exampleoption2">Example option 2</option>
          <option value="exampleoption3">Example option 3</option>
        </select>
      </td>
      <td>
        <select name="temp">
          <option value="notused" selected>
            Not used
          </option>
          <option value="exampleoption1">Example option 1</option>
          <option value="exampleoption2">Example option 2</option>
          <option value="exampleoption3">Example option 3</option>
        </select>
      </td>
      <td>
        <select name="humidity">
          <option value="notused" selected>
            Not used
          </option>
          <option value="exampleoption1">Example option 1</option>
          <option value="exampleoption2">Example option 2</option>
          <option value="exampleoption3">Example option 3</option>
        </select>
      </td>
      <td>toggle</td>
    </tr>
  );
};

export default Row;
