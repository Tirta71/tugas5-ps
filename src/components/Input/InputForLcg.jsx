import React from "react";

export default function InputForLcg({
  seed,
  setSeed,
  setA,
  setC,
  a,
  c,
  m,
  setM,
  mPengisian,
  setMPengisian,
  numIterations,
  setNumIterations,

  calculateLCG,
}) {
  return (
    <div>
      <div className="input-row">
        <label>Z:</label>
        <input
          type="number"
          value={seed}
          onChange={(e) => setSeed(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-row">
        <label>a:</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-row">
        <label>c:</label>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-row">
        <label>m (Kedatangan):</label>
        <input
          type="number"
          value={m}
          onChange={(e) => setM(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-row">
        <label>m (Lama Pengisian):</label>
        <input
          type="number"
          value={mPengisian}
          onChange={(e) => setMPengisian(parseFloat(e.target.value))}
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

      <button className="generate-button" onClick={calculateLCG}>
        Buat Table
      </button>
    </div>
  );
}
