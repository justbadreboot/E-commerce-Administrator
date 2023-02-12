import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};


export default function LineChart() {
    const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
const labels = [100, 200, 300, 400, 500, 600, 700];

  const data = useMemo(function () {
    return {
      datasets: [
        {
            label: "Esta semana",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#2B97A4",
            borderWidth: 3,
            backgroundColor: "rgba(43,151,164,0.2)",
            fill: true,
            data: scores,
            maxBarThickness: 6,
          },
          {
            label: "Semana Anterior",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#001F5C",
            borderWidth: 3,
            backgroundColor: "rgba(0,31,92,0.2)",
            fill: true,
            data: scores2,
            maxBarThickness: 6,
          },
      ],
      labels,
    };
  }, []);

  return(
    <div className="App">
<Line data={data} options={options} />;
    </div>
  ) 
}
