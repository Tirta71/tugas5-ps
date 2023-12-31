import React, { useEffect, useRef } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

const GraphChart = ({ tableData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  Chart.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Title,
    Tooltip
  );

  useEffect(() => {
    generateChart();
  }, [tableData]);

  const generateChart = () => {
    if (chartRef.current) {
      // Destroy previous chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const chartLabels = tableData.map((row) => row.i);
      const chartData = {
        labels: chartLabels,
        datasets: [
          {
            label: "Kumulatif Pengisian",
            data: tableData.map((row) => row.JumlahKumulatifPengisian),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Hasil Lama Pengisian",
            data: tableData.map((row) => row.HasilPengisian),
            backgroundColor: "rgba(192, 75, 75, 0.6)",
            borderColor: "rgba(192, 75, 75, 1)",
            borderWidth: 1,
          },
          {
            label: "Waktu Pelayanan",
            data: tableData.map((row) => row.TotalDayTime),
            backgroundColor: "rgba(192, 192, 75, 0.6)",
            borderColor: "rgba(192, 192, 75, 1)",
            borderWidth: 1,
          },
          {
            label: "Waktu Menunggu Petugas",
            data: tableData.map((row) => row.WaktuMenungguKonsumen),
            backgroundColor: "blue",
            borderColor: "blue",
            borderWidth: 1,
          },
          {
            label: "Waktu Menunggu Konsumen",
            data: tableData.map((row) => row.WaktuMenungguPetugas),
            backgroundColor: "grey",
            borderColor: "grey",
            borderWidth: 1,
          },
        ],
      };

      const ctx = chartRef.current.getContext("2d");
      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              stacked: true,
            },
            y: {
              beginAtZero: true,
              stacked: true,
            },
          },
        },
      });
    }
  };

  return (
    <>
      {tableData.length > 0 && (
        <div className="chart-container">
          <canvas id="chart" ref={chartRef}></canvas>
          <div className="chart-legend">
            <span className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: "rgba(75, 192, 192, 0.6)" }}
              ></span>
              Kumulatif Kedatangan
            </span>
            <span className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: "rgba(192, 75, 75, 0.6)" }}
              ></span>
              Hasil Lama Pengisian
            </span>
            <span className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: "rgba(192, 192, 75, 0.6)" }}
              ></span>
              Waktu Pelayanan
            </span>
            <span className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: "blue" }}
              ></span>
              Waktu Menunggu Petugas
            </span>
            <span className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: "grey" }}
              ></span>
              Waktu Menunggu Konsumen
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default GraphChart;
