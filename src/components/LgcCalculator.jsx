import React, { useState } from "react";
import "../css/lgc.css";

const LCGTable = () => {
  const [seed, setSeed] = useState("");
  const [a, setA] = useState("");
  const [c, setC] = useState("");
  const [m, setM] = useState("");
  const [numIterations, setNumIterations] = useState("");
  const [tableData, setTableData] = useState([]);

  const calculateLCG = () => {
    const tableRows = [];
    let x = parseInt(seed);

    for (let i = 1; i <= parseInt(numIterations); i++) {
      const z = (parseInt(a) * x + parseInt(c)) % parseInt(m);
      const u = z / parseInt(m);
      tableRows.push({
        i,
        Zi_1: x,
        Zi: z,
        Ui: u.toFixed(3),
      });
      x = z;
    }

    setTableData(tableRows);
  };

  return (
    <div className="lcg-container">
      <h1>Linear Congruential Generator Table</h1>
      <div className="input-row">
        <label>Z:</label>
        <input
          type="number"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label>a:</label>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div className="input-row">
        <label>c:</label>
        <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
      </div>
      <div className="input-row">
        <label>m:</label>
        <input type="number" value={m} onChange={(e) => setM(e.target.value)} />
      </div>
      <div className="input-row">
        <label>Berapa Bilangan Acak:</label>
        <input
          type="number"
          value={numIterations}
          onChange={(e) => setNumIterations(e.target.value)}
        />
      </div>
      <button className="generate-button" onClick={calculateLCG}>
        Buat Table
      </button>
      <table className="lcg-table">
        <thead>
          <tr>
            <th>i</th>
            <th>Zi-1</th>
            <th>Zi</th>
            <th>Ui</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.i}>
              <td>{row.i}</td>
              <td>{row.Zi_1}</td>
              <td>
                Z{row.i} = ({a} * {row.Zi_1} + {c}) mod {m} = {row.Zi}
              </td>
              <td>
                U{row.i} = {row.Zi} / {m} = {row.Ui}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LCGTable;
