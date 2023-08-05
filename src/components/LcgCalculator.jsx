import React, { useState } from "react";
import "../css/rng.css";

const LcgCalculator = () => {
  const [seed, setSeed] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [increment, setIncrement] = useState("0"); // We'll set the increment to 0 for simplicity
  const [modulus, setModulus] = useState("");
  const [numIterations, setNumIterations] = useState("");
  const [tableData, setTableData] = useState([]);

  const generateRNG = () => {
    const tableRows = [];
    let x = parseInt(seed);

    for (let i = 1; i <= parseInt(numIterations); i++) {
      const rng =
        (parseInt(multiplier) * x + parseInt(increment)) % parseInt(modulus);
      const u = rng / parseInt(modulus);
      tableRows.push({
        i,
        Xi: x,
        XiPlus1: rng,
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
        <label>X :</label>
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
        <label>c:</label>
        <input
          type="number"
          value={increment}
          onChange={(e) => setIncrement(e.target.value)}
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
              <th>Xi</th>
              <th>Xi+1</th>
              <th>Ui</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.i}>
                <td>{row.i}</td>
                <td>{row.Xi}</td>
                <td>{`X${row.i + 1} = (${multiplier} * ${
                  row.Xi
                } + ${increment}) mod ${modulus} = ${row.XiPlus1}`}</td>
                <td>{`U${row.i} = ${row.XiPlus1} / ${modulus} = ${row.Ui}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LcgCalculator;
