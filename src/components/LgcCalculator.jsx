import React, { useState } from "react";
import "../css/lgc.css";
import InputForLcg from "./Input/InputForLcg";
import GraphChart from "./Graph/GraphChart";

const LCGTable = () => {
  const [seed, setSeed] = useState("");
  const [a, setA] = useState("");
  const [c, setC] = useState("");
  const [m, setM] = useState("");
  const [numIterations, setNumIterations] = useState("");
  const [mPengisian, setMPengisian] = useState("");
  const [tableData, setTableData] = useState([]);

  const calculateLCG = () => {
    const tableRows = [];
    let xKedatangan = parseFloat(seed);
    let xPengisian = parseFloat(seed);

    let roundedNumberPrev = null;
    let roundedNumberPrevPengisian = null;

    let JumlahKumulatifKedatangan = 0;

    let kedatanganDetik;
    let hasilKedatangan;

    let lamaPengisian;
    let hasilPengisian;

    let totalTime = null;

    let TotalDayTime = null;

    for (let i = 1; i <= parseInt(numIterations); i++) {
      // State Untuk Nilai U Kedatangan
      const zKedatangan =
        (parseFloat(a) * xKedatangan + parseFloat(c)) % parseFloat(m);
      const uKedatangan = zKedatangan / parseFloat(m);
      const roundedNumberKedatangan = uKedatangan.toFixed(4);

      // State Untuk Nilai U Pengisian
      const zPengisian =
        (parseFloat(a) * xPengisian + parseFloat(c)) % parseFloat(mPengisian);
      const uPengisian = zPengisian / parseFloat(mPengisian);
      const roundedNumberPengisian = uPengisian.toFixed(4);

      if (i > 1) {
        kedatanganDetik =
          (-2 * Math.log(roundedNumberPrev)) ** 0.5 *
          Math.cos(2 * Math.PI * roundedNumberKedatangan);
        hasilKedatangan =
          parseFloat(147.82) + parseFloat(74.54) * kedatanganDetik;

        lamaPengisian =
          (-2 * Math.log(roundedNumberPrevPengisian)) ** 0.5 *
          Math.cos(2 * Math.PI * roundedNumberPengisian);
        hasilPengisian = parseFloat(172.3) + parseFloat(70.18) * lamaPengisian;

        JumlahKumulatifKedatangan += hasilKedatangan;

        totalTime = 60;

        TotalDayTime = JumlahKumulatifKedatangan + hasilPengisian + totalTime;
      }

      tableRows.push({
        i,
        UiKedatangan: uKedatangan.toFixed(4),
        UiPengisian: uPengisian.toFixed(4),
        KedatanganDetik: i > 1 ? kedatanganDetik.toFixed(4) : "",
        HasilKedatangan: i > 1 ? hasilKedatangan.toFixed(0) : "",
        JumlahKumulatifKedatangan:
          i > 1 ? JumlahKumulatifKedatangan.toFixed(0) : "",
        LamaPengisian: i > 1 ? lamaPengisian.toFixed(4) : "",
        HasilPengisian: i > 1 ? hasilPengisian.toFixed(0) : "",
        TotalTime: i > 1 ? totalTime.toFixed(0) : "",
        TotalDayTime: i > 1 ? TotalDayTime.toFixed(0) : "",
      });

      xKedatangan = zKedatangan;
      xPengisian = zPengisian;
      roundedNumberPrev = roundedNumberKedatangan;
      roundedNumberPrevPengisian = roundedNumberPengisian;
    }

    setTableData(tableRows);
  };

  return (
    <div className="lcg-container">
      <h1>Tugas Besar Kelompok Gatau</h1>

      <InputForLcg
        seed={seed}
        setSeed={setSeed}
        setA={setA}
        setC={setC}
        a={a}
        c={c}
        m={m}
        setM={setM}
        mPengisian={mPengisian}
        setMPengisian={setMPengisian}
        numIterations={numIterations}
        setNumIterations={setNumIterations}
        calculateLCG={calculateLCG}
      />

      {tableData.length > 0 && (
        <table className="lcg-table">
          <thead>
            <tr>
              <th colSpan={4}>Bilangan Acak Yang Di bangkitkan</th>
              <th colSpan={4}>Simulasi</th>
            </tr>

            <tr>
              <th>No</th>
              <th>Ui (Kedatangan)</th>
              <th>Ui (Lama Pengisian)</th>
              <th>Hasil Kedatangan</th>
              <th>Kumulatif Kedatangan</th>
              <th>Hasil Lama Pengisian</th>
              <th>Waktu Pelayanan</th>
              <th>Waktu Selesai Di layani</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.i}>
                <td>{row.i}</td>
                <td>{row.UiKedatangan}</td>
                <td>{row.UiPengisian}</td>
                <td>{row.HasilKedatangan}</td>
                <td>{row.JumlahKumulatifKedatangan}</td>
                <td>{row.HasilPengisian}</td>
                <td>{row.TotalTime}</td>
                <td>{row.TotalDayTime}</td>
                {/* {myData.Data.map((dataItem, index) => (
            <>{index + 1 === row.i && <td>{dataItem}</td>}</>
          ))} */}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <GraphChart
        seed={seed}
        a={a}
        c={c}
        m={m}
        mPengisian={mPengisian}
        numIterations={numIterations}
        tableData={tableData}
        setTableData={setTableData}
      />
    </div>
  );
};

export default LCGTable;
