import React, { useState } from "react";
import "../css/rng.css";

const RngCalculator = () => {
  const [seed, setSeed] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [modulus, setModulus] = useState("");
  const [numIterations, setNumIterations] = useState("");
  const [tableData, setTableData] = useState([]);

  const generateRNG = () => {
    const tableRows = [];
    let x = parseInt(seed);

    for (let i = 1; i <= parseInt(numIterations); i++) {
      const rng = (parseInt(multiplier) * x) % parseInt(modulus);
      const u = rng / parseInt(modulus);
      tableRows.push({
        i,
        Zi_1: x,
        Zi: rng,
        Ui: u.toFixed(3),
      });
      x = rng;
    }

    setTableData(tableRows);
  };

  return (
    <div className="rng-calculator">
      <h1>Random Number Generator (RNG)</h1>
      <div className="input-row">
        <label>Z :</label>
        <input
          type="number"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label>a :</label>
        <input
          type="number"
          value={multiplier}
          onChange={(e) => setMultiplier(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label>M:</label>
        <input
          type="number"
          value={modulus}
          onChange={(e) => setModulus(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label>Berapa Bilangan Acak:</label>
        <input
          type="number"
          value={numIterations}
          onChange={(e) => setNumIterations(e.target.value)}
        />
      </div>
      <button className="generate-button" onClick={generateRNG}>
        Buat Table
      </button>
      {tableData.length > 0 && (
        <table className="rng-table">
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
                <td>{`Z${row.i} = (${multiplier} * ${row.Zi_1}) mod ${modulus} = ${row.Zi}`}</td>
                <td>{`U${row.i} = ${row.Zi} / ${modulus} = ${row.Ui}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RngCalculator;
