import { useMemo } from "react";
import { useSelector } from "react-redux";
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
Date.prototype.getWeek = function() {
  let date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  let week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};


export default function LineChart(props) {
  const temp=useSelector(state=>state.statistics.Weeks)


  let date=new Date();
  let weekNumber=date.getWeek();
  const secondWeek=temp.filter(item=>item.weekNumber===weekNumber)
  const fistWeek=temp.filter(item=>item.weekNumber===(weekNumber-1))
  let days = {

  };
  let days0={

  }
  for (let item of secondWeek) {
    let date = new Date(item.date);
    let day = date.toLocaleString("default", {weekday: "long"});
    days[day] = item.total;
  }
  for (let item of fistWeek) {
    let date = new Date(item.date);
    let day = date.toLocaleString("default", {weekday: "long"});
    days0[day] = item.total;
  }

    const scores = [days["lunes"]?days["lunes"]:0, days["martes"]?days["martes"]:0, days["miércoles"]?days["miércoles"]:0, days["jueves"]?days["jueves"]:0, days["viernes"]?days["viernes"]:0, days["sábado"]?days["sábado"]:0, days0["domingo"]?days0["domingo"]:0];
const scores2 = [days0["lunes"]?days0["lunes"]:0, days0["martes"]?days0["martes"]:0, days0["miércoles"]?days0["miércoles"]:0, days0["jueves"]?days0["jueves"]:0, days0["viernes"]?days0["viernes"]:0, days0["sábado"]?days0["sábado"]:0, days["domingo"]?days["domingo"]:0];
const labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

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
  }, [temp]);

  return(
    <div className="App">
<Line data={data} options={options} />;
    </div>
  ) 
}
