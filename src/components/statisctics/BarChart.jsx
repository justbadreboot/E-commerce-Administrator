import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: true,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 600,
          beginAtZero: true,
          padding: 15,
          font: {
            size: 14,
            family: "Open Sans",
            style: "normal",
            lineHeight: 2,
          },
          color: "#fff",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
};

export default function BarChart() {
    const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = ["Enero", "Febrero", "Marzo", "Abrir", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const data = useMemo(function () {
    return {
      datasets: [
        {
            label: "Sales",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#fff",
            data: scores,
            maxBarThickness: 6,
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="App">
      <Bar data={data} options={options} />
    </div>
  );
}