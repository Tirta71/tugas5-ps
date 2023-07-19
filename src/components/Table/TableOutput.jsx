import React from "react";

export default function TableOutput({ tableData }) {
  return (
    <>
      <table className="lcg-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Ui (Kedatangan)</th>
            <th>Ui (Lama Pengisian)</th>
            <th>Hasil Kedatangan</th>
            <th>Hasil Lama Pengisian</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.i}>
              <td>{row.i}</td>
              <td>{row.UiKedatangan}</td>
              <td>{row.UiPengisian}</td>
              <td>{row.HasilKedatangan}</td>
              <td>test</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
