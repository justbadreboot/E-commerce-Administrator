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

export default function BarChart(props) {
  const temp=props.Monthlich
  const scores = [temp[0]? temp[0].total:0, temp[1]? temp[1].total:0, temp[2]? temp[2].total:0, temp[3]? temp[3].total:0,temp[4]? temp[4].total:0, temp[5]? temp[5].total:0, temp[6]? temp[6].total:0, temp[7]? temp[7].total:0, temp[8]? temp[8].total:0,temp[9]? temp[9].total:0,temp[10]? temp[10].total:0,temp[11]? temp[11].total:0];
  const labels = ["Enero", "Febrero", "Marzo", "Abrir", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "ventas",
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
  }, [temp]);

  return (
    <div className="App">
      <Bar data={data} options={options} />
    </div>
  );
}